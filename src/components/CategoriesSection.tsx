
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    title: 'Yoga & Meditation',
    description: 'Find inner peace at ashrams and yoga retreats',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Heritage Homes',
    description: 'Stay in authentic havelis and ancestral homes',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Village Life',
    description: 'Experience rural India with farming families',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Ayurveda & Wellness',
    description: 'Rejuvenate with traditional healing practices',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    title: 'Royal Palaces',
    description: 'Live like royalty in magnificent palaces',
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Spiritual Journeys',
    description: 'Connect with ancient wisdom and traditions',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: 'from-indigo-500 to-blue-600'
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Stay by <span className="text-gradient">Culture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your perfect cultural immersion experience across incredible India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-saffron-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
