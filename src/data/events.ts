export type EventType = 'social' | 'workshop' | 'festival';

export interface EventDetail {
  id: string;
  title: string;
  slug: string;
  type: EventType;
  description: string;
  date: string;
  dateRange?: string; // For multi-day events
  location: string;
  poster?: string; // Image URL for poster
  dj?: string; // For social events
  guestInstructors?: string[]; // For workshops
  schedule?: string[]; // For festivals/workshops
  content?: string; // Detailed content for workshops
  zaloLink?: string;
  messengerLink?: string;
  year?: number; // For past events categorization
  videoUrl?: string; // YouTube video link for past events
  isPast?: boolean; // Flag to distinguish past events
}

export const events: EventDetail[] = [
  {
    id: 'social-weekly',
    title: 'Weekly Social',
    slug: 'social-weekly',
    type: 'social',
    description: 'Join us every week for our regular social dancing sessions. A perfect opportunity to practice, meet fellow dancers, and enjoy great music.',
    date: 'Every Saturday',
    dateRange: 'Every Saturday, 8:30 PM - 11:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    poster: '/image/SN.png',
    dj: 'PTZ DJs',
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'lambada-mastery',
    title: 'LAMBADA MASTERY - VIETNAM EDITION',
    slug: 'lambada-mastery-vietnam',
    type: 'festival',
    description: 'For the very first time, Lambada Mastery arrives in Asia. This 7-day experience brings together intensive training, cultural immersion, and unforgettable dance moments in one destination. Develop your foundation, refine advanced structure, and explore variations under the guidance of world-class instructors.',
    date: 'April 21, 2026',
    dateRange: '21 Apr - 27 Apr, 2026',
    location: 'Amour Resort Ba Vi',
    poster: '/image/LM poster.jpg',
    guestInstructors: ['Ariel & Leticia', 'Terence & Ezy', 'Nhat & Gigi'],
    content: 'LAMBADA MASTERY - VIETNAM EDITION\n21 Apr - 27 Apr, 2026\nFor the very first time, Lambada Mastery arrives in Asia.\nThis 7-day experience brings together intensive training, cultural immersion, and unforgettable dance moments in one destination. Develop your foundation, refine advanced structure, and explore variations under the guidance of world-class instructors.\nMore details: https://www.facebook.com/events/1450713089466339',
    schedule: [
      'Part I — Online Preparation',
      'Modules 1 & 2',
      'Learn from anywhere before arrival',
      '',
      'Module 1: Structure in 1 Direction',
      '',
      'Module 2: Structure in 2 Directions',
      '',
      'Part II — In-Person Training (April 21–24, 2026)',
      'Modules 3 & 4',
      'Advanced structure & variations',
      '',
      'Technique, styling, and practice labs',
      '',
      'Daily workshops with guided corrections',
      '',
      'Part III — Festival (April 25–27, 2026)',
      'Workshops with Ariel & Leticia, Terence & Ezy, Nhat & Gigi',
      '',
      'Guest couple to be announced',
      '',
      'Social parties, cultural activities, and shared dance experiences'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/events/1450713089466339'
  },
  {
    id: 'workshop-fabricio-maria',
    title: 'Workshop with Fabricio & Maria',
    slug: 'workshop-fabricio-maria',
    type: 'workshop',
    description: 'Coming soon',
    date: 'Coming Soon',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    poster: '/image/event-1.png',
    guestInstructors: ['Fabricio', 'Maria'],
    content: 'Coming soon',
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'workshop-lydia-matheus',
    title: 'Workshop with Lydia & Matheus',
    slug: 'workshop-lydia-matheus',
    type: 'workshop',
    description: 'Coming soon',
    date: 'Coming Soon',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    poster: '/image/event-2.png',
    guestInstructors: ['Lydia', 'Matheus'],
    content: 'Coming soon',
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'workshop-ola-oeslle',
    title: 'Workshop with Ola & Oeslle',
    slug: 'workshop-ola-oeslle',
    type: 'workshop',
    description: 'Coming soon',
    date: 'Coming Soon',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    poster: '/image/event-3.png',
    guestInstructors: ['Ola', 'Oeslle'],
    content: 'Coming soon',
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'workshop-ale-vic',
    title: 'Workshop with Ale & Vic',
    slug: 'workshop-ale-vic',
    type: 'workshop',
    description: 'Coming soon',
    date: 'Coming Soon',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    poster: '/image/event-4.png',
    guestInstructors: ['Ale', 'Vic'],
    content: 'Coming soon',
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  }
];
