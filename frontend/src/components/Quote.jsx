import React from 'react';
import { bookData } from '../data/mock';
import { Quote as QuoteIcon } from 'lucide-react';

export const Quote = () => {
  return (
    <section className="section-container bg-bg-page py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="quote-card relative">
            <div className="absolute top-8 left-8 opacity-20">
              <QuoteIcon className="w-16 h-16 text-brand-primary" />
            </div>
            <div className="relative z-10 p-12 md:p-16">
              <blockquote className="body-large text-text-primary italic text-center mb-6 leading-relaxed">
                "{bookData.quote}"
              </blockquote>
              <p className="text-center body-medium text-text-secondary">
                — {bookData.quoteAuthor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
