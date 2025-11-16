import React from 'react';
import { bookData } from '../data/mock';
import { BookOpenText } from 'lucide-react';

export const BookExcerpts = () => {
  return (
    <section id="estratti" className="section-container bg-bg-page py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-brand-primary">Estratti dal Libro</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            <p className="body-medium text-text-secondary">
              Alcuni passaggi significativi che raccontano l'intensità e la profondità di queste storie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookData.excerpts.map((excerpt) => (
              <div key={excerpt.id} className="excerpt-card bg-bg-card p-8 rounded-lg border border-border-medium hover:border-brand-primary transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpenText className="w-6 h-6 text-brand-primary" />
                  <h3 className="heading-5 text-brand-primary">{excerpt.title}</h3>
                </div>
                <p className="body-small text-text-secondary leading-relaxed italic">
                  "{excerpt.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
