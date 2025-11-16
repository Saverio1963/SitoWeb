import React from 'react';
import { Book, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-card border-t border-border-medium py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Book className="w-6 h-6 text-brand-primary" />
            <div>
              <p className="body-medium text-brand-primary font-semibold">Cronache dal fronte invisibile</p>
              <p className="caption text-text-secondary">di Saverio Santoniccolo</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="body-small text-text-secondary mb-2">
              Per informazioni:
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-end text-text-primary">
              <Mail className="w-4 h-4 text-brand-primary" />
              <a href="#contatti" className="link-text hover:underline">
                Contattaci
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-medium text-center">
          <p className="caption text-text-secondary">
            © {currentYear} Saverio Santoniccolo. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};
