
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Gamepad2, 
  BookOpen, 
  Dumbbell,
  Car,
  Baby
} from 'lucide-react';

const categories = [
  { name: 'Électronique', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { name: 'Mode', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
  { name: 'Maison & Jardin', icon: Home, color: 'bg-green-100 text-green-600' },
  { name: 'Jeux & Jouets', icon: Gamepad2, color: 'bg-purple-100 text-purple-600' },
  { name: 'Livres', icon: BookOpen, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Sport', icon: Dumbbell, color: 'bg-orange-100 text-orange-600' },
  { name: 'Auto & Moto', icon: Car, color: 'bg-red-100 text-red-600' },
  { name: 'Bébé & Enfant', icon: Baby, color: 'bg-indigo-100 text-indigo-600' },
];

const CategoryGrid = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explorer par Catégorie</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trouvez exactement ce que vous cherchez dans nos catégories soigneusement organisées
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
