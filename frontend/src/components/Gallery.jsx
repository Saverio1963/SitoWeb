import React, { useState } from 'react';
import { bookData } from '../data/mock';
import { Camera, X } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('commando');
  const [selectedPhase, setSelectedPhase] = useState('fase1');

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const currentCategory = bookData.galleryCategories[selectedCategory];
  const phases = currentCategory?.phases || {};

  return (
    <section id="galleria" className="section-container bg-bg-page py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-brand-primary" />
              <h2 className="heading-1 text-brand-primary">Galleria Fotografica</h2>
            </div>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            <p className="body-medium text-text-secondary">
              Immagini che raccontano le operazioni, gli eventi e la storia
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(bookData.galleryCategories).map((catKey) => {
              const cat = bookData.galleryCategories[catKey];
              return (
                <button
                  key={catKey}
                  onClick={() => {
                    setSelectedCategory(catKey);
                    setSelectedPhase(Object.keys(cat.phases)[0]);
                  }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === catKey
                      ? 'bg-brand-primary text-text-inverse'
                      : 'bg-bg-card text-text-secondary border border-border-medium hover:border-brand-primary'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Category Description */}
          <div className="text-center mb-12">
            <p className="body-medium text-text-primary mb-2">
              {currentCategory?.description}
            </p>
          </div>

          {/* Phase Tabs (for Commando) */}
          {selectedCategory === 'commando' && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.keys(phases).map((phaseKey) => {
                const phase = phases[phaseKey];
                return (
                  <button
                    key={phaseKey}
                    onClick={() => setSelectedPhase(phaseKey)}
                    className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      selectedPhase === phaseKey
                        ? 'bg-secondary-olive text-brand-primary border-2 border-brand-primary'
                        : 'bg-bg-card text-text-secondary border border-border-medium hover:border-brand-primary'
                    }`}
                  >
                    {phase.title}
                  </button>
                );
              })}
            </div>
          )}

          {/* Phase Description */}
          {phases[selectedPhase]?.description && (
            <div className="text-center mb-8">
              <p className="body-small text-text-secondary italic">
                {phases[selectedPhase].description}
              </p>
            </div>
          )}

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases[selectedPhase]?.photos.map((photo) => (
              <div
                key={photo.id}
                className="gallery-item group cursor-pointer"
                onClick={() => openModal(photo)}
              >
                <div className="relative overflow-hidden rounded-lg border border-border-medium hover:border-brand-primary transition-all duration-300">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-page/90 via-bg-page/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="body-small text-brand-primary font-semibold">
                        Clicca per ingrandire
                      </p>
                    </div>
                  </div>
                </div>
                <p className="caption text-text-secondary mt-3 px-2">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-bg-page/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-bg-card hover:bg-brand-primary transition-colors"
            onClick={closeModal}
          >
            <X className="w-6 h-6 text-text-primary" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg border-2 border-brand-primary shadow-2xl"
            />
            <p className="body-medium text-text-primary mt-4 text-center px-4">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
