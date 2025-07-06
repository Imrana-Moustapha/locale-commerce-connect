
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Truck, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Achetez et Vendez
            <span className="block text-orange-400">En Toute Simplicité</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Découvrez des milliers de produits de qualité ou vendez les vôtres sur notre plateforme sécurisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Commencer à acheter
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Devenir vendeur
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Large Sélection</h3>
            <p className="opacity-80">Des milliers de produits dans toutes les catégories</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Livraison Rapide</h3>
            <p className="opacity-80">Service de livraison intégré et suivi en temps réel</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sécurisé</h3>
            <p className="opacity-80">Paiements protégés et transactions sécurisées</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
