import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ImageSliderProps {
  category: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ category, isOpen, onClose }) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const { data: files, error } = await supabase
        .storage
        .from('media')
        .list(`projects/${category}`);

      if (error) {
        console.error('Error fetching images:', error);
        return;
      }

      const imageUrls = files
        .filter(file => file.name.match(/\.(jpg|jpeg|png|gif)$/i))
        .sort((a, b) => {
          const numA = parseInt(a.name.split('_')[1]);
          const numB = parseInt(b.name.split('_')[1]);
          return numA - numB;
        })
        .map(file => {
          const { data } = supabase
            .storage
            .from('media')
            .getPublicUrl(`projects/${category}/${file.name}`);
          return data.publicUrl;
        });

      setImages(imageUrls);
      setCurrentIndex(0);
    };

    if (isOpen) {
      fetchImages();
    }
  }, [category, isOpen]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className={`relative ${isFullscreen ? 'w-screen h-screen' : 'max-w-4xl max-h-[80vh]'}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        >
          <X size={24} />
        </button>
        
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-16 text-white hover:text-gray-300 z-50"
        >
          <Maximize2 size={24} />
        </button>

        <div className="relative w-full h-full">
          {images.length > 0 && (
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className={`
                ${isFullscreen ? 'w-screen h-screen' : 'max-w-4xl max-h-[80vh]'}
                object-contain
              `}
            />
          )}
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={36} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={36} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};