
export interface ClassItem {
  id: number;
  title: string;
  time: string;
  level: string;
  instructor: string;
  description: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  price: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// WordPress specific types
export interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  acf?: {
    // Advanced Custom Fields mapping
    time?: string;
    level?: string;
    instructor?: string;
    event_date?: string;
    location?: string;
    price?: string;
    image_url?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
}
