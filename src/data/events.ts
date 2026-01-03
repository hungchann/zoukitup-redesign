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
  },
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
    id: 'brazouk-lambada-styling',
    title: 'BRAZOUK – LAMBADA – STYLING with Ariel & Yasmim',
    slug: 'brazouk-lambada-styling',
    type: 'workshop',
    description: 'Get ready for 3 weeks of rhythm, passion, and connection with two amazing artists from Brazil with Ariel & Yasmim! Join this special program to explore the beauty of Lambada-inspired movements, BraZouk techniques, and expressive styling that will elevate your dance to the next level.',
    date: 'November 19, 2025',
    dateRange: '19 Nov - 20 Dec, 2025',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    poster: '/image/Ariel Jasmim 2025.png',
    guestInstructors: ['Ariel', 'Yasmim'],
    content: 'This intensive workshop series will cover:\n- Lambada-inspired movements\n- BraZouk techniques\n- Expressive styling\n- Advanced connection patterns',
    schedule: [
      'Week 1: Foundation & Basics',
      'Week 2: Intermediate Techniques',
      'Week 3: Advanced Styling & Expression'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'special-workshop-1',
    title: 'Special Workshop',
    slug: 'special-workshop-1',
    type: 'workshop',
    description: 'Join us for a special workshop featuring guest instructors. Learn new techniques and expand your dance horizons.',
    date: 'TBA',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    guestInstructors: ['Guest Instructor'],
    content: 'Detailed workshop content will be announced soon.',
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'pre-party-1',
    title: 'Pre-party Event',
    slug: 'pre-party-1',
    type: 'festival',
    description: 'Join us for an exciting pre-party event before the main festival. Get ready for an amazing night of dancing!',
    date: 'TBA',
    location: 'TBA',
    poster: 'https://picsum.photos/seed/preparty/800/1200',
    schedule: [
      'Doors Open: 8:00 PM',
      'Social Dancing: 8:30 PM - 12:00 AM',
      'Special Performance: 10:00 PM'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  }
];
