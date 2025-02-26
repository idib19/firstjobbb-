import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md dark:bg-gray-900 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TechFix Pro</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Votre partenaire de confiance pour smartphones, accessoires et réparations professionnelles.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/phones" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Accessoires
                </Link>
              </li>
              <li>
                <Link href="/repairs" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Réparations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>123 Rue de la Tech</li>
              <li>Tél: 01 23 45 67 89</li>
              <li>Email: contact@techfixpro.fr</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TechFix Pro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}