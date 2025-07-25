const blogPostType = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'it', title: 'Italian', type: 'string' },
        { name: 'de', title: 'German', type: 'string' },
        { name: 'fr', title: 'French', type: 'string' },
        { name: 'zh', title: 'Chinese', type: 'string' },
        { name: 'ar', title: 'Arabic', type: 'string' }
      ]
    },
    {
      name: 'slug',
      title: 'Slug (EN only)',
      type: 'slug',
      options: { source: 'title.en', maxLength: 96 }
    },
    {
      name: 'language',
      title: 'Main Language',
      type: 'string',
      options: {
        list: ['en', 'it', 'de', 'fr', 'zh', 'ar'],
        layout: 'dropdown'
      }
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Pending AI Review', value: 'pending_ai' },
          { title: 'Ready to Publish', value: 'ready' },
          { title: 'Published', value: 'published' }
        ]
      },
      initialValue: 'draft'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'blockContent' },
        { name: 'it', title: 'Italian', type: 'blockContent' },
        { name: 'de', title: 'German', type: 'blockContent' },
        { name: 'fr', title: 'French', type: 'blockContent' },
        { name: 'zh', title: 'Chinese', type: 'blockContent' },
        { name: 'ar', title: 'Arabic', type: 'blockContent' }
      ]
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'geoFocus',
      title: 'Town / Region',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'geoFocus'
    }
  }
}

export default blogPostType
