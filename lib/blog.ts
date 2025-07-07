import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  keywords: string[]
  author?: string
  image?: string
  content?: string
  featured?: boolean
}

export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        ...(data as Omit<BlogPost, 'slug'>),
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1
    else return -1
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Process markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      content: contentHtml,
      ...(data as Omit<BlogPost, 'slug' | 'content'>),
    }
  } catch {
    return null
  }
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts()
  const currentPost = allPosts.find(post => post.slug === currentSlug)
  
  if (!currentPost) return []
  
  // Simple related posts: same keywords or similar titles
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0
      
      // Check keyword matches
      currentPost.keywords.forEach(keyword => {
        if (post.keywords.includes(keyword)) score += 1
      })
      
      // Check title similarity (very basic)
      const currentWords = currentPost.title.toLowerCase().split(' ')
      const postWords = post.title.toLowerCase().split(' ')
      currentWords.forEach(word => {
        if (postWords.includes(word) && word.length > 4) score += 0.5
      })
      
      return { post, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
  
  return relatedPosts
}
