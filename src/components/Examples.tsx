import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { ImageSlider } from './ImageSlider';

const categories = [
  {
    name: 'Bedroom',
    folder: 'Bedroom'
  },
  {
    name: 'Living Room',
    folder: 'Living Room'
  },
  {
    name: 'Kitchen',
    folder: 'Kitchen'
  }
];

const Examples = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedCategory(category.folder)}
            >
              <div className="relative h-[300px]">
                <img
                  src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/media/projects/${category.folder}/${category.folder.toLowerCase()}_1.jpg`}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-90 transition-opacity">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                    <Maximize2 className="mx-auto" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageSlider
        category={selectedCategory || ''}
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
};

export default Examples