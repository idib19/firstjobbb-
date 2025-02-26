import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { phones } from '@/lib/data';

export default function PhonesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Smartphones</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phones.map((phone) => (
          <Card key={phone.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{phone.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="aspect-square relative mb-4">
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="object-cover rounded-lg"
                />
              </div>
              <ul className="space-y-2 text-sm">
                {phone.specs.map((spec, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    • {spec}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-xl font-bold">{phone.price} €</span>
              <Button>Ajouter au Panier</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}