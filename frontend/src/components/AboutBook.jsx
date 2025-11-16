import React from 'react';
import { bookData } from '../data/mock';
import { BookOpen, Shield, Heart } from 'lucide-react';

export const AboutBook = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Operazioni reali",
      description: "Storie autentiche di operazioni contro mafia e narcotraffico"
    },
    {
      icon: Heart,
      title: "Memoria viva",
      description: "Testimonianza morale e resistenza civile"
    },
    {
      icon: BookOpen,
      title: "41 anni di servizio",
      description: "Un viaggio nelle indagini e nelle scelte difficili"
    }
  ];

  return (
    <section id="libro" className="section-container bg-bg-page py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-brand-primary">Il Libro</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          </div>
          
          <div className="bg-bg-card p-10 rounded-lg border border-border-medium mb-12">
            <p className="body-medium text-text-secondary leading-relaxed">
              {bookData.synopsis}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="highlight-card">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-secondary-olive flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className="heading-5 text-brand-primary mb-3">{item.title}</h3>
                    <p className="body-small text-text-secondary">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
