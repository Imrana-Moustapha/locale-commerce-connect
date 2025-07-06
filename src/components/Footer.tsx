
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">MarketPlace</h3>
            <p className="text-gray-300 mb-4">
              La plateforme d'achat et vente en ligne qui connecte acheteurs et vendeurs du monde entier.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Devenir vendeur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Programme d'affiliation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Politique de retour</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Livraison</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sécurité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300">support@marketplace.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MarketPlace. Tous droits réservés. | 
            <a href="#" className="hover:text-white transition-colors ml-2">Politique de confidentialité</a> |
            <a href="#" className="hover:text-white transition-colors ml-2">Conditions d'utilisation</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
