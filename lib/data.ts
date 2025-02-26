// Product type definition
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  specs: string[];
}

// Products data
export const phones: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran Super Retina XDR 6,1"',
      'Puce A16 Bionic',
      'Appareil photo 48MP',
      'Dynamic Island',
      'Face ID'
    ],
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1677100758467-0d3ee9d9e70e?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran Dynamic AMOLED 6,8"',
      'Snapdragon 8 Gen 2',
      'Appareil photo 200MP',
      'S Pen intégré',
      'Batterie 5000mAh'
    ],
  },
  {
    id: 3,
    name: 'Google Pixel 7 Pro',
    price: 899,
    image: 'https://images.unsplash.com/photo-1667831277039-d4e285b3e492?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran LTPO OLED 6,7"',
      'Google Tensor G2',
      'Appareil photo 50MP',
      'Mode Nuit avancé',
      'Android pur'
    ],
  },
  {
    id: 4,
    name: 'iPhone 14',
    price: 799,
    image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran Super Retina XDR 6,1"',
      'Puce A15 Bionic',
      'Double appareil photo 12MP',
      'Mode Action vidéo',
      'MagSafe'
    ],
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold 4',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1675785732030-3679d0375d1e?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran pliable 7,6"',
      'Snapdragon 8+ Gen 1',
      'Triple appareil photo',
      'S Pen compatible',
      'Mode Flex'
    ],
  },
  {
    id: 6,
    name: 'OnePlus 11',
    price: 849,
    image: 'https://images.unsplash.com/photo-1676447094201-77907c6bc4c5?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran AMOLED 6,7"',
      'Snapdragon 8 Gen 2',
      'Hasselblad 50MP',
      'Charge 100W',
      'OxygenOS 13'
    ],
  },
  {
    id: 7,
    name: 'Xiaomi 13 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran AMOLED 6,73"',
      'Snapdragon 8 Gen 2',
      'Leica 50MP',
      'Charge 120W',
      'MIUI 14'
    ],
  },
  {
    id: 8,
    name: 'Nothing Phone (2)',
    price: 699,
    image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80',
    specs: [
      'Écran OLED 6,7"',
      'Snapdragon 8+ Gen 1',
      'Interface Glyph',
      'Double appareil photo 50MP',
      'Nothing OS 2.0'
    ],
  }
];