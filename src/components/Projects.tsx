import React from 'react';

const projectCategories = ['All', 'Residential', 'Hospitality', 'Office'];

const projects = [
  {
    id: 1,
    title: 'Luxury Villa',
    subtitle: 'Modern Mediterranean',
    description: 'A stunning beachfront property featuring contemporary design',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Urban Penthouse',
    subtitle: 'Contemporary Living',
    description: 'Sophisticated urban living space with panoramic views',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80'
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif mb-12 text-center">Projects</h2>
      
      <div className="flex justify-center gap-8 mb-12">
        {projectCategories.map((category) => (
          <button
            key={category}
            className="text-gray-600 hover:text-black transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-serif">{project.title}</h3>
              <p className="text-gray-600">{project.subtitle}</p>
              <p className="mt-2 text-sm text-gray-500">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;