import { defineType } from 'sanity';

// Định nghĩa Post schema TRƯỚC khi sử dụng
export const postSchema = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Classes', value: 'classes' },
          { title: 'Events', value: 'events' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
    },
  },
});

// Export tất cả schemas từ đây (SAU khi đã định nghĩa)
export const schemaTypes = [
  postSchema,
  // Thêm các schemas khác ở đây:
  // eventSchema,
  // classSchema,
];

