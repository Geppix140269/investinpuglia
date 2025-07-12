// lib/queries.ts
export const getAllPosts = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{url}
    },
    categories[]->{
      title
    },
    author->{
      name
    }
  }
`
