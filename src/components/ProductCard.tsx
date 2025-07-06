
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  seller: string;
  badge?: string;
}

const ProductCard = ({ name, price, originalPrice, image, rating, reviews, seller, badge }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
            {badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">{price}€</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">{originalPrice}€</span>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">Vendu par {seller}</p>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Ajouter au panier
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
