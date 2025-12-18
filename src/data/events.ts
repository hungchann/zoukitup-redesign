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
}

export const events: EventDetail[] = [
  {
    id: 'social-weekly',
    title: 'Weekly Social',
    slug: 'social-weekly',
    type: 'social',
    description: 'Join us every week for our regular social dancing sessions. A perfect opportunity to practice, meet fellow dancers, and enjoy great music.',
    date: 'Every Friday',
    dateRange: 'Ongoing',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    dj: 'PTZ DJs',
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'lambada-mastery',
    title: 'LAMBADA MASTERY - VIETNAM EDITION',
    slug: 'lambada-mastery-vietnam',
    type: 'festival',
    description: 'A historic moment for Lambada lovers! For the very first time in Asia, Lambada Mastery comes to Vietnam! Immerse yourself in a 7-day retreat filled with intensive workshops, social parties, and unforgettable cultural vibes.',
    date: 'April 21, 2026',
    dateRange: '21 Apr - 27 Apr, 2026',
    location: 'Hanoi, Vietnam',
    poster: 'https://picsum.photos/seed/lambada-mastery/800/1200',
    guestInstructors: ['World\'s Top Lambada Instructors'],
    schedule: [
      'Day 1: Opening Party',
      'Day 2-6: Intensive Workshops',
      'Day 7: Closing Party & Competition'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
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
    poster: 'https://picsum.photos/seed/ariel-yasmim/800/1200',
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
