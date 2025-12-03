
import { WP_API_URL } from './config';
import { WPPost, WPMedia } from './types';

export const fetchPosts = async (categoryId?: number): Promise<WPPost[]> => {
  try {
    const url = new URL(`${WP_API_URL}/posts`);
    if (categoryId) {
      url.searchParams.append('categories', categoryId.toString());
    }
    url.searchParams.append('_embed', 'true'); // To get featured images
    url.searchParams.append('per_page', '6');

    const response = await fetch(url.toString());
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchMedia = async (): Promise<WPMedia[]> => {
  try {
    const response = await fetch(`${WP_API_URL}/media?per_page=9`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching media:", error);
    return [];
  }
};

export const submitContactForm = async (formData: any) => {
  // Integration with Contact Form 7 REST API usually looks like this:
  // POST /wp-json/contact-form-7/v1/contact-forms/{id}/feedback
  // For now, we simulate success
  return new Promise((resolve) => setTimeout(resolve, 1000));
};
