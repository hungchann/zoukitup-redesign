// GROQ queries cho Sanity
// GROQ là ngôn ngữ query của Sanity, tương tự GraphQL

// Query để lấy tất cả posts
export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    publishedAt,
    category
  }
`;

// Query để lấy post theo slug
export const postBySlugQuery = (slug: string) => `
  *[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    publishedAt,
    category
  }
`;

// Query để lấy posts theo category
export const postsByCategoryQuery = (category: string) => `
  *[_type == "post" && category == "${category}"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage {
      asset-> {
        _id,
        url
      }
    },
    publishedAt
  }
`;

// Query để lấy posts với limit
export const recentPostsQuery = (limit: number = 6) => `
  *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage {
      asset-> {
        _id,
        url
      }
    },
    publishedAt
  }
`;

