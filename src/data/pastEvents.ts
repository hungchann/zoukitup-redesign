import { EventDetail } from './events';

export const pastEvents: EventDetail[] = [
  {
    id: 'past-event-2024-1',
    title: 'Zouk Festival 2024',
    slug: 'zouk-festival-2024',
    type: 'festival',
    description: 'An amazing festival that brought together dancers from all over Vietnam. Three days of workshops, social dancing, and unforgettable memories.',
    date: 'October 15, 2024',
    dateRange: '15 Oct - 17 Oct, 2024',
    location: 'Hanoi, Vietnam',
    poster: 'https://picsum.photos/seed/zouk-festival-2024/800/1200',
    guestInstructors: ['International Guest Instructors'],
    year: 2024,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isPast: true
  },
  {
    id: 'past-event-2024-2',
    title: 'Summer Workshop Series 2024',
    slug: 'summer-workshop-2024',
    type: 'workshop',
    description: 'Intensive summer workshop series featuring advanced techniques and styling. Perfect for dancers looking to take their skills to the next level.',
    date: 'July 20, 2024',
    dateRange: '20 Jul - 22 Jul, 2024',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    poster: 'https://picsum.photos/seed/summer-workshop-2024/800/1200',
    guestInstructors: ['Master Instructor'],
    year: 2024,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isPast: true
  },
  {
    id: 'past-event-2023-1',
    title: 'New Year Social 2023',
    slug: 'new-year-social-2023',
    type: 'social',
    description: 'Celebrate the new year with an amazing social dancing event. Great music, great people, and great vibes.',
    date: 'December 31, 2023',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    dj: 'PTZ DJs',
    year: 2023,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isPast: true
  },
  {
    id: 'past-event-2023-2',
    title: 'Autumn Workshop 2023',
    slug: 'autumn-workshop-2023',
    type: 'workshop',
    description: 'A special autumn workshop focusing on connection and musicality. Learn from experienced instructors.',
    date: 'September 10, 2023',
    dateRange: '10 Sep - 12 Sep, 2023',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    guestInstructors: ['Guest Instructor'],
    year: 2023,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isPast: true
  }
];

