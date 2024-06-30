export type Restaurant = {
  id: string;
  name: string;
  desc: string;
  images: string[];
  featured: {
    text: string;
    icon: string;
  };
  rating: number;
  ratingCount: number;
  priceRange: string;
  category: {
    id: string;
    name: string;
  };
  isFavourite: boolean;
};
