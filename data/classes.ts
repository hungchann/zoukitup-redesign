export interface ClassDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: string;
  instructors: string;
  schedule: string;
  location: string;
  firstClass?: string;
  goals: string[];
  whatYouWillLearn: string[];
  entryRequirements: string[];
  videoUrl?: string;
  zaloLink?: string;
  messengerLink?: string;
}

export const classes: ClassDetail[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    slug: 'foundation',
    description: 'Lambada is a joyful, sexy, and high-energy Latin dance—the perfect foundation for later improving your Zouk skills.',
    level: 'Basic',
    instructors: 'Hoài Phương & Huyền Trang',
    schedule: 'Every Saturday, 5:30 PM – 6:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    firstClass: 'October 18th, 2025',
    goals: [
      'Build a solid foundation in dance fundamentals',
      'Develop confidence on the dance floor',
      'Connect with the PTZ dance community'
    ],
    whatYouWillLearn: [
      'Basic dance steps and rhythm',
      'Partner connection techniques',
      'Fundamental movement patterns'
    ],
    entryRequirements: [
      'Complete beginners with no prior dance experience',
      'Dance enthusiasts looking for a new passion',
      'Anyone seeking a fun, stress-relieving way to move their body'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://m.me/your-messenger-link'
  },
  {
    id: 'tecnizouk',
    title: 'Tecnizouk',
    slug: 'tecnizouk',
    description: 'Lambada is a joyful, sexy, and high-energy Latin dance—the perfect foundation for later improving your Zouk skills.',
    level: 'Intermediate',
    instructors: 'Hoài Phương & Huyền Trang',
    schedule: 'Every Saturday, 5:30 PM – 6:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    firstClass: 'October 18th, 2025',
    goals: [
      'Build a solid foundation in dance fundamentals',
      'Develop confidence on the dance floor',
      'Connect with the PTZ dance community'
    ],
    whatYouWillLearn: [
      'Basic dance steps and rhythm',
      'Partner connection techniques',
      'Fundamental movement patterns'
    ],
    entryRequirements: [
      'Complete beginners with no prior dance experience',
      'Dance enthusiasts looking for a new passion',
      'Anyone seeking a fun, stress-relieving way to move their body'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://m.me/your-messenger-link'
  },
  {
    id: 'improver',
    title: 'Improver',
    slug: 'improver',
    description: 'Lambada is a joyful, sexy, and high-energy Latin dance—the perfect foundation for later improving your Zouk skills.',
    level: 'Advanced',
    instructors: 'Hoài Phương & Huyền Trang',
    schedule: 'Every Saturday, 5:30 PM – 6:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    firstClass: 'October 18th, 2025',
    goals: [
      'Build a solid foundation in dance fundamentals',
      'Develop confidence on the dance floor',
      'Connect with the PTZ dance community'
    ],
    whatYouWillLearn: [
      'Basic dance steps and rhythm',
      'Partner connection techniques',
      'Fundamental movement patterns'
    ],
    entryRequirements: [
      'Complete beginners with no prior dance experience',
      'Dance enthusiasts looking for a new passion',
      'Anyone seeking a fun, stress-relieving way to move their body'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://m.me/your-messenger-link'
  },
  {
    id: 'lambada-basic',
    title: 'Lambada Basic',
    slug: 'lambada-basic',
    description: 'Lambada is a joyful, sexy, and high-energy Latin dance—the perfect foundation for later improving your Zouk skills.',
    level: 'Basic',
    instructors: 'Hoài Phương & Huyền Trang',
    schedule: 'Every Saturday, 5:30 PM – 6:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    firstClass: 'October 18th, 2025',
    goals: [
      'Build a solid foundation in dance fundamentals',
      'Develop confidence on the dance floor',
      'Connect with the PTZ dance community'
    ],
    whatYouWillLearn: [
      'Basic dance steps and rhythm',
      'Partner connection techniques',
      'Fundamental movement patterns'
    ],
    entryRequirements: [
      'Complete beginners with no prior dance experience',
      'Dance enthusiasts looking for a new passion',
      'Anyone seeking a fun, stress-relieving way to move their body and connect with new people'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://m.me/your-messenger-link'
  },
  {
    id: 'lambada-intensive',
    title: 'Lambada Intensive',
    slug: 'lambada-intensive',
    description: 'Lambada is a joyful, sexy, and high-energy Latin dance—the perfect foundation for later improving your Zouk skills.',
    level: 'Advanced',
    instructors: 'Hoài Phương & Huyền Trang',
    schedule: 'Every Saturday, 5:30 PM – 6:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    firstClass: 'October 18th, 2025',
    goals: [
      'Build a solid foundation in dance fundamentals',
      'Develop confidence on the dance floor',
      'Connect with the PTZ dance community'
    ],
    whatYouWillLearn: [
      'Basic dance steps and rhythm',
      'Partner connection techniques',
      'Fundamental movement patterns'
    ],
    entryRequirements: [
      'Complete beginners with no prior dance experience',
      'Dance enthusiasts looking for a new passion',
      'Anyone seeking a fun, stress-relieving way to move their body'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://m.me/your-messenger-link'
  },
  {
    id: 'lady-styling',
    title: 'Lady Styling',
    slug: 'lady-styling',
    description: 'Lambada is a joyful, sexy, and high-energy Latin dance—the perfect foundation for later improving your Zouk skills.',
    level: 'All Levels',
    instructors: 'Hoài Phương & Huyền Trang',
    schedule: 'Every Saturday, 5:30 PM – 6:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    firstClass: 'October 18th, 2025',
    goals: [
      'Build a solid foundation in dance fundamentals',
      'Develop confidence on the dance floor',
      'Connect with the PTZ dance community'
    ],
    whatYouWillLearn: [
      'Basic dance steps and rhythm',
      'Partner connection techniques',
      'Fundamental movement patterns'
    ],
    entryRequirements: [
      'Complete beginners with no prior dance experience',
      'Dance enthusiasts looking for a new passion',
      'Anyone seeking a fun, stress-relieving way to move their body'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://m.me/your-messenger-link'
  }
];
