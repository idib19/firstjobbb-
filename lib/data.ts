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
    name: 'iPhone 13 Pro',
    price: 999,
    image: 'https://www.clevercel.co/cdn/shop/files/Back-side_13-Pro-Max_Graphite_1200x.jpg?v=1740165234',
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
    image: 'https://www.samsungmobilepress.com/file/96BC5058B2D90757F88741FE064FF3E2B56A886DCF39C1BEBCB8410D97D5BB169CC1129A70F71DD4772DC894268BAD2F2D08DA521FCFD4960FE28D7AC228C3A399257940C3297BD8262B033538A2443820D0F587D09578A68693189D05093CB5A40F654B441CC8BA22F09886F46475CBD316273ED9FD1BF313EDCF2CF8EC3323C56154CB292B12EED59C426749DB73C7',
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
    image: 'https://www.cnet.com/a/img/resize/ba283a569a589112c81570e9de3f6ec578bb4688/hub/2022/10/11/045aec54-0c3c-463d-8416-a49cae733942/pixel-7-pro-watch-lanxon-promo-11.jpg?auto=webp&fit=crop&height=1200&width=1200',
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
    price: 849,
    image: 'https://openbox.ca/cdn/shop/files/4_ec99b175-7a77-49e1-88a6-ba855f4c4ac8_800x.jpg?v=1720044039',
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
    image: 'https://imageio.forbes.com/specials-images/imageserve/631822a69a253fdf6ab586d8/1-Q4-KV-MO-Graygreen-notext/960x0.jpg?format=jpg&width=960',
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
    name: 'iPhone 13',
    price: 799,
    image: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/142/14283/14283413.jpeg',
    specs: [
      'Écran Super Retina XDR 6,1"',
      'Puce A15 Bionic',
      'Double appareil photo 12MP',
      'Mode Cinématique',
      'MagSafe'
    ],
  },
];