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
    title: 'Brazilian Zouk - Foundation',
    slug: 'foundation',
    description: 'Zouk Foundation is where your journey begins. This course focuses on body fundamentals, posture, balance, connection, and movement logic so you can dance Zouk with comfort, clarity, and confidence.',
    level: 'Basic',
    instructors: 'Hoai Phuong, Hai Ha & Hau Tran',
    schedule: 'Every Wednesday, 7:30 PM - 8:30 PM | Every Saturday, 4:30 PM – 5:30 PM',
    location: 'Wednesday: 7 Floor, No. 130 Trung Phung, Hanoi | Saturday: 5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    goals: [
      'Build a strong foundation for proper growth',
      'Dance Zouk with comfort, clarity, and confidence',
      'Understand the foundation before advanced movements'
    ],
    whatYouWillLearn: [
      'Fundamental Zouk posture & footwork',
      'Balance, axis, and body control for partner dance',
      'Lead–Follow clarity & communication basics',
      'How to build a strong foundation before advanced movements'
    ],
    entryRequirements: [
      'Complete beginners starting their Zouk journey',
      'Dancers looking to build proper fundamentals',
      'Anyone seeking to understand body fundamentals and movement logic'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'tecnizouk',
    title: 'Brazilian Zouk - Technizouk',
    slug: 'tecnizouk',
    description: 'Technizouk is the class for dancers who want to upgrade their foundation and truly understand how Lambada & Zouk technique works. You\'ll learn how the body moves, how to adjust your structure, and how to dance with cleaner technique, better control, and a more authentic style.',
    level: 'Intermediate',
    instructors: 'Hau Tran & Hoai Phuong',
    schedule: 'Every Wednesday, 8:30 PM – 9:30 PM',
    location: '7 Floor, No. 130 Trung Phung, Hanoi',
    goals: [
      'Upgrade foundation and understand technique',
      'Dance with cleaner technique and better control',
      'Develop a more authentic style'
    ],
    whatYouWillLearn: [
      'Body understanding & technique alignment',
      'Core fundamentals for balance, flow & comfort',
      'Lead–Follow clarity for smoother partner work',
      'Step-by-step drills to improve faster',
      'How to dance beautifully, safely'
    ],
    entryRequirements: [
      'Dancers wanting to upgrade their foundation',
      'Students seeking to understand technique deeply',
      'Anyone looking to improve technique and body awareness'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'improver',
    title: 'Brazilian Zouk - Improver',
    slug: 'improver',
    description: 'The Advanced Brazilian Zouk class is designed for students with at least 6 months of experience, focusing on advanced techniques such as footworks, head movements, continuous turns, close embrace, dance with relaxation, interpretation with all genres of music and musicality.',
    level: 'Intermediate',
    instructors: 'Huyen Trang (Teaching assistants: Shane and Linh)',
    schedule: 'Every Saturday, 6:30 PM – 7:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    goals: [
      'Master advanced Zouk techniques',
      'Dance with more confidence and control',
      'Develop musicality and interpretation skills'
    ],
    whatYouWillLearn: [
      'Combination of footworks with head movement',
      'Continuous turns techniques',
      'Close Embrace, Connection with partner',
      'Musicality',
      'Use different ways to play with all genres of music'
    ],
    entryRequirements: [
      'At least 6 months of Zouk experience',
      'Students ready for advanced techniques',
      'Dancers seeking to improve confidence and control'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'lambada-basic',
    title: 'Lambada Basic',
    slug: 'lambada-basic',
    description: 'Lambada Beginner course takes you to the journey of the Lambada magic, by sharing the history, the culture, and the basic moves of Lambada. The course lays solid foundation for you to continue your journey with more advanced techniques later',
    level: 'Basic',
    instructors: 'Hoai Phuong & Huyen Trang',
    schedule: 'Every Saturday, 5:30 PM – 6:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    goals: [
      'Learn the history and culture of Lambada',
      'Build a solid foundation in Lambada fundamentals',
      'Prepare for more advanced Lambada techniques'
    ],
    whatYouWillLearn: [
      'Fundamental Lambada techniques: basic steps, soltinho, double turn, boneca, head movement',
      'Partner work',
      'Basic connection'
    ],
    entryRequirements: [
      'Complete beginners with no prior dance experience',
      'Dance enthusiasts looking to explore Lambada',
      'Anyone seeking to learn the foundation of Lambada dance'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'lambada-intensive',
    title: 'Lambada Intermediate',
    slug: 'lambada-intensive',
    description: 'The Lambada Intermediate course is designed for dancers who have completed the Basic level and are ready to level up. This class takes you deeper into the essence of Lambada: enhanced technique, cleaner structure, smoother transitions, and more variations.',
    level: 'Intermediate',
    instructors: 'Hau Tran & Hoai Phuong (With Lambada Mastery certification)',
    schedule: 'Every Saturday, 4:30 PM – 5:30 PM',
    location: '5A Floor, No. 152 Pho Duc Chinh, Hanoi',
    goals: [
      'Enhance technique and body control',
      'Develop cleaner structure and smoother transitions',
      'Build your own style with variation options'
    ],
    whatYouWillLearn: [
      'Stronger technique & body control',
      'Clearer lead–follow communication',
      'Safer structure for head movement',
      'Variation options to build your own style'
    ],
    entryRequirements: [
      'Completion of Lambada Basic level',
      'Ready to level up your Lambada skills',
      'Dancers seeking deeper understanding of Lambada essence'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  },
  {
    id: 'lady-styling',
    title: 'Lady Styling',
    slug: 'lady-styling',
    description: 'Lady Styling is a class designed for followers who want to feel more confident, controlled, and expressive in their movement. This course helps you build clean fundamentals, understand how your body works in Zouk/Lambada, and develop a personal style that feels authentic to you.',
    level: 'Intermediate',
    instructors: 'Taught by instructors with many years of teaching & performance experience',
    schedule: 'To be confirmed soon',
    location: 'To be confirmed soon',
    goals: [
      'Feel more confident, controlled, and expressive',
      'Build clean fundamentals and understand body mechanics',
      'Develop a personal style that feels authentic'
    ],
    whatYouWillLearn: [
      'Strong follower technique & stability',
      'Body control, posture & balance for clean movement',
      'Arm styling, lines & musicality with confidence',
      'Comfortable expression without losing technique',
      'How to shine through your own style'
    ],
    entryRequirements: [
      'Followers wanting to improve their styling',
      'Dancers seeking more confidence and expression',
      'Anyone looking to develop a personal authentic style'
    ],
    zaloLink: 'https://zalo.me/your-zalo-link',
    messengerLink: 'https://www.facebook.com/messages/t/107012643982143'
  }
];
