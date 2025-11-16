import React from 'react';
import { bookData } from '../data/mock';
import { Award, Users, Building } from 'lucide-react';

export const AboutAuthor = () => {
  const achievements = [
    {
      icon: Award,
      text: "41 anni di servizio nella Benemerita"
    },
    {
      icon: Building,
      text: "Comandante Sezione Operativa a Barletta"
    },
    {
      icon: Users,
      text: "Comandante di Nucleo Operativo"
    }
  ];

  return (
    <section id="autore" className="section-container bg-secondary-olive py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-brand-primary">L'Autore</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          </div>

          <div className="bg-bg-page/50 backdrop-blur-sm p-10 rounded-lg border border-border-medium mb-12">
            <h3 className="heading-4 text-brand-primary mb-6 text-center">{bookData.author}</h3>
            <p className="body-medium text-text-secondary leading-relaxed mb-8">
              {bookData.authorBio}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 bg-bg-card/30 rounded-lg">
                    <Icon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <p className="body-small text-text-secondary">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
