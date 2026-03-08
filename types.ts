
export interface Review {
  id: string;
  userId: string;
  username: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  images?: string[];
  date: string;
}

export interface Product {
  id: string;
  name: string;
  pinduoduoPrice: number;
  oldPrice?: number;
  description: string;
  category: string;
  images: string[];
  videos?: string[];
  sizes: string[];
  rating: number;
  salesCount: number;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    description: string;
  };
  isOriginal?: boolean;
  isCheapPrice?: boolean;
  reviews?: Review[];
  isFlashSale?: boolean;
  flashSaleEnd?: number;
  weight?: number; // in kg
}

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  username: string;
  productId: string;
  productName: string;
  size: string;
  price: number;
  status: 'pending' | 'verifying' | 'paid' | 'shipped' | 'delivered';
  trackNumber?: string;
  date: string;
  timestamp: number;
  receiptImage?: string;
  address?: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

export interface UserMessage {
  id: string;
  userId: string;
  username: string;
  text: string;
  reply?: string;
  date: string;
}

export interface User {
  username: string;
  telegramId: string;
  phoneNumber?: string;
  isAdmin: boolean;
  avatar?: string;
  bio?: string;
  referralBalance: number;
  invitedCount: number;
  invitedBy?: string;
}

export type View = 'loading' | 'home' | 'catalog' | 'search' | 'profile' | 'detail' | 'auth' | 'admin' | 'verify' | 'orders' | 'referral' | 'manage_orders' | 'payment' | 'user_search' | 'admin_add_product' | 'cart' | 'receipt' | 'manage_banners' | 'manage_products';
export type Language = 'uz' | 'ru' | 'en';
