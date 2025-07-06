
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB - Titane Naturel",
    price: 1329,
    originalPrice: 1429,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 234,
    seller: "TechStore Pro",
    badge: "Promo"
  },
  {
    id: 2,
    name: "MacBook Air M2 13'' 8GB 256GB - Gris Sidéral",
    price: 1199,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 156,
    seller: "Apple Store",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra 512GB - Noir Fantôme",
    price: 1099,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 189,
    seller: "Samsung Official",
    badge: "Nouveau"
  },
  {
    id: 4,
    name: "AirPods Pro 2ème génération avec boîtier MagSafe",
    price: 279,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    reviews: 342,
    seller: "Audio Plus",
  },
  {
    id: 5,
    name: "PlayStation 5 Console + Manette DualSense",
    price: 549,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 567,
    seller: "Gaming World",
    badge: "Populaire"
  },
  {
    id: 6,
    name: "Nintendo Switch OLED Modèle - Blanc",
    price: 349,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 423,
    seller: "Nintendo Store",
  },
  {
    id: 7,
    name: "iPad Air 5ème génération 64GB WiFi - Bleu",
    price: 699,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 298,
    seller: "Tablet Zone",
    badge: "Offre"
  },
  {
    id: 8,
    name: "Apple Watch Series 9 GPS 45mm - Boîtier Aluminium",
    price: 429,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    reviews: 167,
    seller: "WearTech"
  }
];

const ProductGrid = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Produits Populaires</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les produits les plus appréciés par notre communauté
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
