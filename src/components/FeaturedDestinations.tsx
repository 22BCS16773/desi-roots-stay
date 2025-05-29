
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Rishikesh',
    state: 'Uttarakhand',
    description: 'Yoga capital of the world, nestled in the Himalayas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    experiences: ['Yoga', 'Meditation', 'River Rafting', 'Ganga Aarti'],
    price: '₹2,500',
    rating: 4.8
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'Pink city with magnificent palaces and heritage homes',
    image: 'https://images.unsplash.com/photo-1599661046827-dacde2a11954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    experiences: ['Heritage Walks', 'Royal Cuisine', 'Handicrafts', 'Palace Tours'],
    price: '₹4,000',
    rating: 4.9
  },
  {
    name: 'Hampi',
    state: 'Karnataka',
    description: 'Ancient ruins and spiritual energy in stone',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    experiences: ['Temple Tours', 'Rock Climbing', 'History Walks', 'Sunrise Views'],
    price: '₹1,800',
    rating: 4.7
  },
  {
    name: 'Kerala Backwaters',
    state: 'Kerala',
    description: 'Serene waterways and traditional houseboats',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    experiences: ['Houseboat Stays', 'Ayurveda', 'Village Tours', 'Spice Gardens'],
    price: '₹3,200',
    rating: 4.8
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-gradient">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover handpicked destinations offering authentic cultural experiences across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                    ⭐ {destination.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-white font-bold text-2xl">{destination.price}</div>
                  <div className="text-white/80 text-sm">per night</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-saffron-600 mr-1" />
                  <span className="text-sm text-gray-500">{destination.state}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-saffron-600 transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {destination.experiences.slice(0, 3).map((experience) => (
                    <Badge 
                      key={experience} 
                      variant="secondary" 
                      className="text-xs bg-saffron-50 text-saffron-700 hover:bg-saffron-100"
                    >
                      {experience}
                    </Badge>
                  ))}
                  {destination.experiences.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      +{destination.experiences.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
