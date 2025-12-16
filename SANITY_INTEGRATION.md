# Hướng dẫn tích hợp Sanity vào dự án

## Tổng quan

Dự án đã được tích hợp với Sanity CMS. Sanity Studio nằm trong thư mục `studio-zoukitup/` và Sanity Client đã được cấu hình trong `lib/sanity.ts`.

## Cấu trúc

```
zoukitup-redesign/
├── studio-zoukitup/          # Sanity Studio (admin panel)
│   ├── schemas/              # Định nghĩa content types
│   └── sanity.config.ts      # Cấu hình Sanity Studio
├── lib/
│   ├── sanity.ts             # Sanity Client configuration
│   └── sanityQueries.ts      # GROQ queries
└── package.json
```

## Đã được cài đặt

✅ `@sanity/client` - Để fetch data từ Sanity
✅ Sanity Studio - Để quản lý content
✅ Helper functions - Để dễ dàng fetch data

## Cách sử dụng

### 1. Chạy Sanity Studio (Admin Panel)

```bash
cd studio-zoukitup
npm install  # Nếu chưa cài
npm run dev  # Chạy studio tại http://localhost:3333
```

### 2. Sử dụng Sanity Client trong code

#### Import Sanity client:

```typescript
import { sanityClient, fetchSanityData, fetchDocument, fetchDocuments } from './lib/sanity';
import { allPostsQuery, postBySlugQuery } from './lib/sanityQueries';
```

#### Ví dụ 1: Fetch tất cả posts

```typescript
// Sử dụng helper function
const posts = await fetchDocuments('post', {
  limit: 10,
  orderBy: 'publishedAt',
  orderDirection: 'desc'
});

// Hoặc sử dụng custom query
const posts = await fetchSanityData(allPostsQuery);
```

#### Ví dụ 2: Fetch post theo slug

```typescript
const post = await fetchDocument('post', 'my-post-slug');

// Hoặc sử dụng custom query
const post = await fetchSanityData(postBySlugQuery('my-post-slug'));
```

#### Ví dụ 3: Sử dụng trong React component

```typescript
import { useEffect, useState } from 'react';
import { fetchDocuments } from './lib/sanity';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchDocuments('post', { limit: 6 });
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### 3. Tạo Schema mới

1. Mở file `studio-zoukitup/schemas/index.ts`
2. Tạo schema mới (xem ví dụ `postSchema`)
3. Thêm vào mảng `schemaTypes`:

```typescript
export const schemaTypes = [
  postSchema,
  yourNewSchema, // Thêm schema mới ở đây
];
```

4. Restart Sanity Studio để schema mới xuất hiện

### 4. Cấu hình Sanity

Thông tin cấu hình hiện tại:
- **Project ID**: `98jbu9ap`
- **Dataset**: `production`
- **API Version**: `2024-01-01`

Có thể thay đổi trong `lib/sanity.ts`:

```typescript
export const sanityConfig = {
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // true cho production, false cho development
};
```

## GROQ Queries

GROQ là ngôn ngữ query của Sanity. Ví dụ:

```groq
// Lấy tất cả posts
*[_type == "post"]

// Lấy post theo slug
*[_type == "post" && slug.current == "my-slug"][0]

// Lấy posts với filter và sort
*[_type == "post" && category == "events"] | order(publishedAt desc)[0...10]

// Lấy image URL
featuredImage {
  asset-> {
    url
  }
}
```

Xem thêm queries trong `lib/sanityQueries.ts`.

## Migration từ WordPress API

Nếu bạn đang dùng WordPress API (trong `api.ts`), bạn có thể:

1. **Thay thế hoàn toàn**: Xóa WordPress API và chỉ dùng Sanity
2. **Dùng song song**: Giữ cả hai và chọn nguồn data tùy theo nhu cầu

Ví dụ migration:

```typescript
// Trước (WordPress)
import { fetchPosts } from './api';
const posts = await fetchPosts();

// Sau (Sanity)
import { fetchDocuments } from './lib/sanity';
const posts = await fetchDocuments('post');
```

## Deploy Sanity Studio

Để deploy Sanity Studio lên Sanity hosting (miễn phí):

```bash
cd studio-zoukitup
npm run deploy
```

Sau khi deploy, bạn sẽ có URL để truy cập studio từ bất kỳ đâu.

## Tài liệu tham khảo

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Client](https://www.sanity.io/docs/js-client)

## Troubleshooting

### Lỗi: "Cannot find module '@sanity/client'"
```bash
npm install @sanity/client
```

### Lỗi: "Schema not found"
- Kiểm tra file `studio-zoukitup/schemas/index.ts`
- Đảm bảo schema được export trong `schemaTypes`
- Restart Sanity Studio

### Data không hiển thị
- Kiểm tra Project ID và Dataset trong `lib/sanity.ts`
- Đảm bảo đã publish content trong Sanity Studio
- Kiểm tra GROQ query syntax

### CORS Error
- Sanity CDN tự động xử lý CORS
- Nếu vẫn lỗi, kiểm tra cấu hình trong Sanity dashboard

