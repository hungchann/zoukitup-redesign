
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
