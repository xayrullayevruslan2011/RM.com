
import { Product } from './types';

export const MARKUP_RATE = 1.3; // 30% markup as requested earlier
export const CURRENCY_RATE = 1750; // CNY to UZS
export const USD_RATE = 12800; // USD to UZS
export const CARGO_RATE_USD = 6; // $6 per kg
export const REFERRAL_REWARD = 10000;
export const CARD_NUMBER = "4073 4200 6735 5457";
export const CARD_OWNER = "Gulzebo H";

export const DELIVERY_RATES = [
  { region: "Navoiy (shahar ichi)", price: 20000 },
  { region: "Buxoro", price: 65000 },
  { region: "Samarqand", price: 78000 },
  { region: "Qarshi", price: 104000 },
  { region: "Toshkent", price: 195000 },
  { region: "Jizzax", price: 104000 },
  { region: "Guliston", price: 130000 },
  { region: "Termiz", price: 234000 },
  { region: "Nukus", price: 260000 },
  { region: "Urganch", price: 234000 },
  { region: "Vodiy (Andijon/Namangan/Farg'ona)", price: 325000 },
];

export const PICKUP_ADDRESS = "Amir Temur ko'cha 3 dom 1 padez 9-etaj 65 kvartira";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "AirPods Pro Gen 2 (Premium)",
    pinduoduoPrice: 180, // in Yuan
    oldPrice: 450000,
    description: "Eng so'nggi rusumdagi AirPods Pro. Shovqinni kamaytirish (ANC) va yuqori sifatli ovoz. Xitoyning eng yaxshi fabrikasidan keltiriladi.",
    category: "Elektronika",
    images: [
      "https://images.unsplash.com/photo-1588423770186-80f3ef9adad0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600294037681-c80b4cbfa11c?q=80&w=1000&auto=format&fit=crop"
    ],
    videos: [
      "https://assets.mixkit.co/videos/preview/mixkit-girl-putting-on-white-wireless-headphones-to-listen-to-music-34533-large.mp4"
    ],
    sizes: ["Oq", "Qora"],
    rating: 4.9,
    salesCount: 1240,
    seller: {
      name: "Ruslan Electronics",
      avatar: "",
      rating: 5,
      description: "Ishonchli yetkazib beruvchi"
    },
    isOriginal: true,
    isCheapPrice: true,
    weight: 0.2
  },
  {
    id: "p2",
    name: "Nike Air Jordan 1 Low",
    pinduoduoPrice: 250, // in Yuan
    oldPrice: 600000,
    description: "Sifatli krossovkalar. Kundalik kiyish uchun juda qulay va zamonaviy dizayn. Ranglari tanlovda mavjud.",
    category: "Oyoq kiyim",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop"
    ],
    videos: [
      "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-shoes-walking-on-pavement-4361-large.mp4"
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    rating: 4.8,
    salesCount: 850,
    seller: {
      name: "Sneaker Shop Uz",
      avatar: "",
      rating: 4.9,
      description: "Brend oyoq kiyimlar mutaxassisi"
    },
    isOriginal: true,
    weight: 1.2
  },
  {
    id: "p3",
    name: "Smart Watch Ultra 8",
    pinduoduoPrice: 140, // in Yuan
    oldPrice: 350000,
    description: "Eng yangi smart soat. Qo'ng'iroq qilish, xabarlarni o'qish va salomatlikni kuzatish funksivari mavjud. Ekran sifati juda yuqori.",
    category: "Gadjeytlar",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
    ],
    videos: [
      "https://assets.mixkit.co/videos/preview/mixkit-young-man-setting-up-his-smart-watch-before-a-workout-34139-large.mp4"
    ],
    sizes: ["Orange", "Grey", "Black"],
    rating: 4.7,
    salesCount: 2100,
    seller: {
      name: "Gid Store",
      avatar: "",
      rating: 4.8,
      description: "Xitoydan to'g'ridan-to'g'ri yetkazish"
    },
    isCheapPrice: true,
    weight: 0.3
  }
];
