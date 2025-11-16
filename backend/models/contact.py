from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=2000)


class Contact(BaseModel):
    contact_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }


class ContactResponse(BaseModel):
    success: bool
    message: str
    contact_id: Optional[str] = None
