import React from 'react';

const news = [
  {
    id: 1,
    title: 'New Showroom Opening',
    subtitle: 'Milan Design Week',
    description: 'Join us for the grand opening of our latest showroom during Milan Design Week 2024.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Design Awards 2024',
    subtitle: 'Industry Recognition',
    description: 'D&D Design Center receives multiple awards for innovative interior design solutions.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Sustainable Design',
    subtitle: 'Environmental Initiative',
    description: 'Our commitment to sustainable luxury and eco-friendly design practices.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80'
  }
];

const News = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif mb-12 text-center">News</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-serif">{item.title}</h3>
              <p className="text-gray-600">{item.subtitle}</p>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;