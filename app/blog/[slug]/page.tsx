import { sanity } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { PortableText } from '@/lib/PortableText'  // your portable text renderer
import Image from 'next/image'

const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    mainImage {
      asset->{
        url
      }
    },
    body
  }
`

export async function generateStaticParams() {
  const posts = await sanity.fetch(groq`*[_type == "post"]{slug}`)
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await sanity.fetch(query, { slug })

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        {post.title}
      </h1>
      {post.publishedAt && (
        <time className="block mb-6 text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      )}
      {post.mainImage?.asset?.url && (
        <Image 
          src={post.mainImage.asset.url} 
          alt={post.title} 
          width={800} 
          height={400} 
          className="mb-6 rounded"
        />
      )}
      <PortableText value={post.body} />
    </article>
  )
}
