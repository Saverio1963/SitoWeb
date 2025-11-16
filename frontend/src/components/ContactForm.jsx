import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contacts`, formData);
      
      if (response.data.success) {
        toast.success("Messaggio inviato!", {
          description: "Ti risponderemo al più presto.",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error("Errore", {
        description: error.response?.data?.error || "Impossibile inviare il messaggio. Riprova più tardi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatti" className="section-container bg-bg-page py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-brand-primary">Contatti</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            <p className="body-medium text-text-secondary">
              Hai domande sul libro? Scrivici, saremo felici di risponderti
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form bg-bg-card p-10 rounded-lg border border-border-medium">
            <div className="mb-6">
              <label htmlFor="name" className="block body-small text-text-primary mb-2 font-semibold">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nome
                </div>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 rounded-lg bg-bg-page border border-border-medium text-text-primary focus:outline-none focus:border-brand-primary transition-colors"
                placeholder="Il tuo nome"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block body-small text-text-primary mb-2 font-semibold">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </div>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 rounded-lg bg-bg-page border border-border-medium text-text-primary focus:outline-none focus:border-brand-primary transition-colors"
                placeholder="tua@email.com"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block body-small text-text-primary mb-2 font-semibold">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Messaggio
                </div>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="form-input w-full px-4 py-3 rounded-lg bg-bg-page border border-border-medium text-text-primary focus:outline-none focus:border-brand-primary transition-colors resize-none"
                placeholder="Scrivi qui il tuo messaggio..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Invio in corso...'
              ) : (
                <>
                  Invia Messaggio
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
