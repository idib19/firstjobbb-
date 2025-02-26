import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const accessories = [
  {
    id: 1,
    name: 'Coque Premium',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=800&q=80',
    description: 'Protection de qualité militaire avec design élégant',
  },
  {
    id: 2,
    name: 'Chargeur Sans Fil',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=800&q=80',
    description: 'Charge rapide 15W pour tous les appareils compatibles Qi',
  },
  {
    id: 3,
    name: 'Protection Écran',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80',
    description: 'Verre trempé avec dureté 9H',
  },
  {
    id: 4,
    name: 'Batterie Externe',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1609592786331-b7f6f49130f5?auto=format&fit=crop&w=800&q=80',
    description: 'Capacité de 20000mAh avec double port USB',
  },
];

export default function AccessoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Accessoires Téléphone</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accessories.map((accessory) => (
          <Card key={accessory.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{accessory.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="aspect-square relative mb-4">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {accessory.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-bold">{accessory.price} €</span>
              <Button>Ajouter au Panier</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}