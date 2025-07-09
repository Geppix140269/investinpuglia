import { sanity } from '@/lib/sanity'
import { PortableText } from '@/lib/PortableText'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'

export const revalidate = 60 // ISR (optional)

export async function generateStaticParams() {
  const query = groq`*[_type == "post"]{ "slug": slug.current }`
  const slugs = await sanity.fetch(query)
  return slugs.map((s: any) => ({ slug: s.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainImage {
      asset->{url}
    }
  }`
  const post = await sanity.fetch(query, { slug: params.slug })

  if (!post) notFound()

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full h-auto rounded mb-6"
        />
      )}
      <div className="prose prose-lg">
        <PortableText value={post.body} />
      </div>
    </div>
  )
}
