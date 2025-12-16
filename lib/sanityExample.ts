/**
 * Ví dụ sử dụng Sanity Client
 * File này chứa các ví dụ về cách fetch data từ Sanity
 */

import { sanityClient, fetchSanityData, fetchDocument, fetchDocuments } from './sanity';
import { allPostsQuery, postBySlugQuery, postsByCategoryQuery, recentPostsQuery } from './sanityQueries';

// ============================================
// Ví dụ 1: Fetch tất cả posts
// ============================================
export async function getAllPosts() {
  // Cách 1: Sử dụng helper function
  const posts = await fetchDocuments('post', {
    limit: 10,
    orderBy: 'publishedAt',
    orderDirection: 'desc'
  });
  
  // Cách 2: Sử dụng custom GROQ query
  // const posts = await fetchSanityData(allPostsQuery);
  
  return posts;
}

// ============================================
// Ví dụ 2: Fetch post theo slug
// ============================================
export async function getPostBySlug(slug: string) {
  // Cách 1: Sử dụng helper function
  const post = await fetchDocument('post', slug);
  
  // Cách 2: Sử dụng custom GROQ query
  // const post = await fetchSanityData(postBySlugQuery(slug));
  
  return post;
}

// ============================================
// Ví dụ 3: Fetch posts theo category
// ============================================
export async function getPostsByCategory(category: string) {
  const posts = await fetchSanityData(postsByCategoryQuery(category));
  return posts;
}

// ============================================
// Ví dụ 4: Fetch recent posts
// ============================================
export async function getRecentPosts(limit: number = 6) {
  const posts = await fetchSanityData(recentPostsQuery(limit));
  return posts;
}

// ============================================
// Ví dụ 5: Custom query với filter phức tạp
// ============================================
export async function getFeaturedPosts() {
  const query = `
    *[_type == "post" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featuredImage {
        asset-> {
          url,
          metadata {
            dimensions
          }
        }
      },
      publishedAt
    }
  `;
  
  return await fetchSanityData(query);
}

// ============================================
// Ví dụ 6: Fetch với projection (chỉ lấy fields cần thiết)
// ============================================
export async function getPostsPreview() {
  const query = `
    *[_type == "post"] | order(publishedAt desc)[0...6] {
      _id,
      title,
      slug,
      excerpt,
      "imageUrl": featuredImage.asset->url,
      publishedAt
    }
  `;
  
  return await fetchSanityData(query);
}

// ============================================
// Ví dụ 7: Fetch với references (related posts)
// ============================================
export async function getPostWithRelated(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      content,
      featuredImage {
        asset-> {
          url
        }
      },
      "relatedPosts": *[_type == "post" && category == ^.category && _id != ^._id][0...3] {
        _id,
        title,
        slug,
        "imageUrl": featuredImage.asset->url
      }
    }
  `;
  
  return await fetchSanityData(query);
}

// ============================================
// Ví dụ 8: Sử dụng trong React component (async/await)
// ============================================
/*
import { useEffect, useState } from 'react';
import { getAllPosts } from './lib/sanityExample';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          {post.featuredImage?.asset?.url && (
            <img src={post.featuredImage.asset.url} alt={post.title} />
          )}
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
*/

// ============================================
// Ví dụ 9: Sử dụng với React Query (nếu có)
// ============================================
/*
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from './lib/sanityExample';

function PostsList() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts?.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
*/

