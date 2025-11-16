import React from 'react';
import { bookData } from '../data/mock';
import { ShoppingCart, ExternalLink } from 'lucide-react';

export const Purchase = () => {
  return (
    <section id="acquista" className="section-container bg-bg-card py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-brand-primary">Dove Acquistare</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            <p className="body-medium text-text-secondary">
              Il libro sarà presto disponibile nelle principali librerie online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookData.purchaseLinks.map((link, index) => (
              <div key={index} className="purchase-card">
                <div className="flex flex-col items-center p-8 bg-bg-page rounded-lg border border-border-medium transition-all duration-300 hover:border-brand-primary">
                  <ShoppingCart className="w-12 h-12 text-brand-primary mb-4" />
                  <h3 className="heading-5 text-text-primary mb-3">{link.name}</h3>
                  {link.available ? (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Acquista ora
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button disabled className="btn-secondary w-full opacity-50 cursor-not-allowed">
                      Prossimamente
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="caption text-text-secondary">
              Per informazioni su disponibilità e distribuzione, contattaci
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
