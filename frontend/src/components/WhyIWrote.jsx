import React from 'react';
import { bookData } from '../data/mock';
import { PenLine, Heart } from 'lucide-react';

export const WhyIWrote = () => {
  return (
    <section id="perche" className="section-container bg-secondary-olive py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <PenLine className="w-8 h-8 text-brand-primary" />
              <h2 className="heading-1 text-brand-primary">Perché ho scritto questo libro</h2>
            </div>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="bg-bg-page/70 backdrop-blur-sm p-10 md:p-12 rounded-lg border border-border-medium">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                {bookData.whyIWrote.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="body-medium text-text-secondary leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border-medium text-center">
              <p className="body-small text-brand-primary font-semibold italic">
                — {bookData.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
