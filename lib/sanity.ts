import { createClient } from '@sanity/client';

// Sanity configuration
export const sanityConfig = {
  projectId: '98jbu9ap', // Từ sanity.config.ts
  dataset: 'production',
  apiVersion: '2024-01-01', // Sử dụng ngày hiện tại hoặc ngày bạn muốn
  useCdn: true, // Sử dụng CDN cho production, false cho development
};

// Tạo Sanity client
export const sanityClient = createClient({
  ...sanityConfig,
  // Thêm token nếu cần write access (thường không cần cho read-only)
  // token: process.env.SANITY_API_TOKEN,
});

// Helper function để fetch data với GROQ query
export async function fetchSanityData<T = any>(query: string): Promise<T> {
  try {
    return await sanityClient.fetch<T>(query);
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    throw error;
  }
}

// Helper function để fetch single document
export async function fetchDocument<T = any>(
  documentType: string,
  slug?: string
): Promise<T | null> {
  try {
    const query = slug
      ? `*[_type == "${documentType}" && slug.current == "${slug}"][0]`
      : `*[_type == "${documentType}"][0]`;
    return await sanityClient.fetch<T>(query);
  } catch (error) {
    console.error(`Error fetching ${documentType}:`, error);
    return null;
  }
}

// Helper function để fetch all documents của một type
export async function fetchDocuments<T = any>(
  documentType: string,
  options?: {
    limit?: number;
    orderBy?: string;
    orderDirection?: 'asc' | 'desc';
  }
): Promise<T[]> {
  try {
    const { limit, orderBy, orderDirection = 'desc' } = options || {};
    let query = `*[_type == "${documentType}"]`;
    
    if (orderBy) {
      query += ` | order(${orderBy} ${orderDirection})`;
    }
    
    if (limit) {
      query += `[0...${limit}]`;
    }
    
    return await sanityClient.fetch<T[]>(query);
  } catch (error) {
    console.error(`Error fetching ${documentType}s:`, error);
    return [];
  }
}

