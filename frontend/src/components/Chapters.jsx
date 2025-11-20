import React from 'react';
import { bookData } from '../data/mock';
import { BookMarked } from 'lucide-react';

export const Chapters = () => {
  return (
    <section className="section-container bg-bg-card py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookMarked className="w-8 h-8 text-brand-primary" />
              <h2 className="heading-1 text-brand-primary">Capitoli del Libro</h2>
            </div>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          </div>

          <div className="chapters-grid">
            {bookData.chapters.map((chapter, index) => (
              <div 
                key={index}
                className="chapter-item bg-secondary-olive p-8 rounded-lg border-2 border-border-medium hover:border-brand-primary transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-6">
                  <div className="chapter-number">
                    <span className="text-6xl font-black text-brand-primary opacity-80">
                      {chapter.number}
                    </span>
                  </div>
                  <div className="chapter-title flex-1">
                    <h3 className="heading-4 text-text-primary">
                      Capitolo {chapter.number}
                    </h3>
                    <p className="body-medium text-brand-primary mt-2 font-semibold">
                      {chapter.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
