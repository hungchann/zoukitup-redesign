// Gallery Media Configuration
// Add your Google Drive image links and YouTube video links here

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  title?: string;
  thumbnail?: string; // For videos, optional custom thumbnail
}

/**
 * Convert Google Drive share link to direct image URL
 * Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Converts to: https://drive.google.com/uc?export=view&id=FILE_ID
 */
export const convertDriveLinkToDirectUrl = (driveLink: string): string => {
  // Extract file ID from various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = driveLink.match(pattern);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }

  // If no pattern matches, return original link
  return driveLink;
};

/**
 * Extract YouTube video ID from various YouTube URL formats
 */
export const extractYouTubeId = (youtubeUrl: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = youtubeUrl.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * Convert YouTube URL to embed URL
 */
export const getYouTubeEmbedUrl = (youtubeUrl: string): string | null => {
  const videoId = extractYouTubeId(youtubeUrl);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}`;
};

// Gallery media items
// Add your Google Drive image links here
// Note: Make sure the files in Google Drive are set to "Anyone with the link can view"
export const galleryMedia: GalleryItem[] = [
  // Local images
  {
    type: 'image',
    url: '/image/gallery-1.jpg',
    title: 'PTZouk Vietnam Gallery'
  },
  {
    type: 'image',
    url: '/image/gallery-2.JPG',
    title: 'PTZouk Vietnam Gallery'
  },
  
  // YouTube video example
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=Yq7rn2xPYL8',
    title: 'Demo Lautaro & Ariana in PT Zouk Vietnam'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/shorts/F9en3byg3nc',
    title: 'PTZouk Vietnam'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/shorts/UO70_kWxSPk',
    title: 'PTZouk Vietnam'
  },
];

