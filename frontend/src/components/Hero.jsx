import React from 'react';
import { bookData } from '../data/mock';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl">
            <h1 className="hero-title mb-6">
              {bookData.title}
            </h1>
            <p className="body-large mb-4 text-text-secondary">
              {bookData.subtitle}
            </p>
            <p className="body-medium mb-6 text-text-secondary">
              di <span className="text-brand-primary font-semibold">{bookData.author}</span>
            </p>
            <p className="body-large mb-8 text-brand-primary font-semibold">
              Storie vere, emozioni autentiche. Un viaggio nell'invisibile.
            </p>
            <p className="body-small mb-10 max-w-xl text-text-secondary leading-relaxed">
              Un viaggio autentico nelle indagini, nelle notti e nelle scelte di un uomo che ha servito lo Stato per 41 anni.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary">
                Contattaci
              </button>
              <button onClick={() => document.getElementById('libro').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                Scopri di più
              </button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="book-cover-container">
              <img 
                src={bookData.coverImage} 
                alt={bookData.title}
                className="book-cover-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
