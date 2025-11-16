from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.contact import ContactCreate, Contact, ContactResponse
import logging

logger = logging.getLogger(__name__)

router = APIRouter()


async def create_contact(contact_data: ContactCreate, db: AsyncIOMotorDatabase):
    """
    Create a new contact message in the database
    """
    try:
        # Create Contact object
        contact = Contact(
            name=contact_data.name,
            email=contact_data.email,
            message=contact_data.message
        )
        
        # Insert into database
        result = await db.contacts.insert_one(contact.dict())
        
        if result.inserted_id:
            logger.info(f"Contact created successfully: {contact.contact_id}")
            return ContactResponse(
                success=True,
                message="Messaggio ricevuto con successo",
                contact_id=contact.contact_id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact")
            
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
