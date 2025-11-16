import React from 'react';
import { Book } from 'lucide-react';

export const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-page/95 backdrop-blur-sm border-b border-border-medium">
      <nav className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className="w-6 h-6 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-lg">Cronache dal fronte invisibile</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('libro')} className="nav-link">Il Libro</button>
            <button onClick={() => scrollToSection('autore')} className="nav-link">L'Autore</button>
            <button onClick={() => scrollToSection('estratti')} className="nav-link">Estratti</button>
            <button onClick={() => scrollToSection('acquista')} className="nav-link">Acquista</button>
            <button onClick={() => scrollToSection('contatti')} className="nav-link">Contatti</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
