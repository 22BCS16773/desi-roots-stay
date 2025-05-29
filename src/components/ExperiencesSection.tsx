
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Cooking with Grandmothers',
    description: 'Learn traditional recipes passed down through generations in authentic village kitchens',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    duration: '3-4 hours',
    price: '₹1,200'
  },
  {
    title: 'Village Farm Experience',
    description: 'Wake up early, milk cows, harvest crops, and experience authentic rural life',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    duration: 'Half day',
    price: '₹800'
  },
  {
    title: 'Folk Dance Evenings',
    description: 'Join local communities for traditional dance and music under the stars',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    duration: '2-3 hours',
    price: '₹600'
  },
  {
    title: 'Handicraft Workshops',
    description: 'Learn pottery, weaving, or local crafts from master artisans',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    duration: '4-5 hours',
    price: '₹1,500'
  }
];

const ExperiencesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-saffron-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Cultural <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in authentic Indian traditions with local families and communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold text-lg">{experience.price}</div>
                  <div className="text-sm opacity-90">{experience.duration}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-saffron-600 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
