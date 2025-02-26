import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Smartphone, ShoppingBag, Wrench } from 'lucide-react';
import { phones } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre Partenaire Tech
            </h1>
            <p className="text-xl mb-8">
              Smartphones premium, accessoires et services de réparation expert
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/phones">
                <Button size="lg" variant="secondary">
                  Voir les Téléphones
                </Button>
              </Link>
              <Link href="/repairs">
                <Button size="lg" variant="secondary">
                  Réserver une Réparation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Smartphones</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Derniers modèles des meilleures marques avec offres exclusives
              </p>
              <Link href="/phones">
                <Button variant="outline">Voir les Téléphones</Button>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Accessoires</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Accessoires premium pour tous vos appareils
              </p>
              <Link href="/accessories">
                <Button variant="outline">Voir les Accessoires</Button>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Réparations</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Services de réparation professionnels par des techniciens certifiés
              </p>
              <Link href="/repairs">
                <Button variant="outline">Obtenir un Devis</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Produits Vedettes</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-lg pb-4">
            <div className="flex space-x-6">
              {phones.map((phone) => (
                <Card key={phone.id} className="w-[300px] flex-shrink-0">
                  <CardHeader>
                    <CardTitle className="truncate">{phone.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative mb-4">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {phone.specs[0]}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">{phone.price} €</span>
                    <Button size="sm">Voir Détails</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>
    </div>
  );
}