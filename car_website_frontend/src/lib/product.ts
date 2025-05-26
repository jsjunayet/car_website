export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  rating: number;
  reviews: Review[];
  availability: boolean;
  year: number;
  mileage?: string;
  fuelType: string;
  transmission: string;
  color: string;
  bodyType: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

// Mock data for demonstration
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "BMW X5",
    brand: "BMW",
    model: "X5",
    price: 89999,
    originalPrice: 95999,
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549399760-9dbc2dbedc8c?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "The BMW X5 combines luxury, performance, and versatility in one exceptional SUV.",
    features: [
      "All-Wheel Drive",
      "Premium Sound System",
      "Leather Seats",
      "Navigation System",
    ],
    specifications: {
      Engine: "3.0L Twin-Turbo I6",
      Horsepower: "335 HP",
      Torque: "330 lb-ft",
      "Top Speed": "155 mph",
      Acceleration: "5.3 seconds (0-60mph)",
    },
    stock: 5,
    rating: 4.8,
    reviews: [
      {
        id: "1",
        userId: "1",
        userName: "John Smith",
        rating: 5,
        comment: "Excellent SUV with amazing performance!",
        date: "2024-01-15",
      },
    ],
    availability: true,
    year: 2024,
    mileage: "25 MPG",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Black",
    bodyType: "SUV",
  },
  {
    id: "2",
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    model: "C-Class",
    price: 67999,
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Experience luxury and sophistication with the Mercedes-Benz C-Class.",
    features: [
      "Premium Interior",
      "Advanced Safety Features",
      "Digital Cockpit",
      "Wireless Charging",
    ],
    specifications: {
      Engine: "2.0L Turbo I4",
      Horsepower: "255 HP",
      Torque: "273 lb-ft",
      "Top Speed": "149 mph",
      Acceleration: "5.9 seconds (0-60mph)",
    },
    stock: 8,
    rating: 4.6,
    reviews: [],
    availability: true,
    year: 2024,
    mileage: "28 MPG",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Silver",
    bodyType: "Sedan",
  },
  {
    id: "3",
    name: "Audi Q7",
    brand: "Audi",
    model: "Q7",
    price: 94999,
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "The Audi Q7 offers exceptional space, technology, and driving dynamics.",
    features: [
      "Quattro All-Wheel Drive",
      "Virtual Cockpit",
      "Bang & Olufsen Sound",
      "7 Seats",
    ],
    specifications: {
      Engine: "3.0L TFSI V6",
      Horsepower: "335 HP",
      Torque: "369 lb-ft",
      "Top Speed": "155 mph",
      Acceleration: "5.7 seconds (0-60mph)",
    },
    stock: 3,
    rating: 4.7,
    reviews: [],
    availability: true,
    year: 2024,
    mileage: "22 MPG",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "White",
    bodyType: "SUV",
  },
  {
    id: "4",
    name: "Tesla Model S",
    brand: "Tesla",
    model: "Model S",
    price: 104999,
    category: "Electric",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    ],
    description:
      "Revolutionary electric performance sedan with cutting-edge technology.",
    features: [
      "Autopilot",
      "Over-the-air Updates",
      "Supercharging",
      "Premium Connectivity",
    ],
    specifications: {
      Motor: "Dual Motor All-Wheel Drive",
      Horsepower: "670 HP",
      Range: "405 miles",
      "Top Speed": "155 mph",
      Acceleration: "3.1 seconds (0-60mph)",
    },
    stock: 6,
    rating: 4.9,
    reviews: [],
    availability: true,
    year: 2024,
    mileage: "120 MPGe",
    fuelType: "Electric",
    transmission: "Single Speed",
    color: "Red",
    bodyType: "Sedan",
  },
  {
    id: "5",
    name: "Porsche 911",
    brand: "Porsche",
    model: "911",
    price: 124999,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Iconic sports car that defines performance and precision.",
    features: [
      "Rear-Engine Layout",
      "Sport Chrono Package",
      "PASM",
      "Sport Exhaust",
    ],
    specifications: {
      Engine: "3.0L Twin-Turbo Flat-6",
      Horsepower: "379 HP",
      Torque: "331 lb-ft",
      "Top Speed": "182 mph",
      Acceleration: "4.0 seconds (0-60mph)",
    },
    stock: 2,
    rating: 4.9,
    reviews: [],
    availability: true,
    year: 2024,
    mileage: "20 MPG",
    fuelType: "Gasoline",
    transmission: "Manual",
    color: "Yellow",
    bodyType: "Coupe",
  },
  {
    id: "6",
    name: "Range Rover Evoque",
    brand: "Land Rover",
    model: "Evoque",
    price: 54999,
    category: "SUV",
    image:
      "https://images.unsplash.com/photo-1494976688560-cc040dd2e7fc?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1494976688560-cc040dd2e7fc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Compact luxury SUV with distinctive design and capability.",
    features: [
      "Terrain Response",
      "Panoramic Roof",
      "Touch Pro Duo",
      "Wade Sensing",
    ],
    specifications: {
      Engine: "2.0L Turbo I4",
      Horsepower: "246 HP",
      Torque: "269 lb-ft",
      "Top Speed": "130 mph",
      Acceleration: "7.0 seconds (0-60mph)",
    },
    stock: 7,
    rating: 4.5,
    reviews: [],
    availability: true,
    year: 2024,
    mileage: "26 MPG",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Blue",
    bodyType: "SUV",
  },
];

export const searchProducts = (
  query: string,
  filters?: {
    category?: string;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    availability?: boolean;
  }
): Product[] => {
  let results = mockProducts;

  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.model.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
  }

  if (filters) {
    if (filters.category) {
      results = results.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.brand) {
      results = results.filter((product) => product.brand === filters.brand);
    }
    if (filters.minPrice !== undefined) {
      results = results.filter((product) => product.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      results = results.filter((product) => product.price <= filters.maxPrice!);
    }
    if (filters.availability !== undefined) {
      results = results.filter(
        (product) => product.availability === filters.availability
      );
    }
  }

  return results;
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};

export const getFeaturedProducts = (limit: number = 6): Product[] => {
  return mockProducts.slice(0, limit);
};

export const getSuggestedProducts = (
  productId: string,
  limit: number = 4
): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];

  return mockProducts
    .filter(
      (p) =>
        p.id !== productId &&
        (p.category === product.category || p.brand === product.brand)
    )
    .slice(0, limit);
};
