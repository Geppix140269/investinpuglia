export const getAllPosts = `
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    }
  }
`
