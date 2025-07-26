import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'trdbxmjo',
  dataset: 'production',
  apiVersion: '2023-07-25',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false
})

export async function handler(event) {
  try {
    // Fetch all blogPost documents
    const blogPosts = await client.fetch('*[_type == "blogPost"]')
    
    console.log(`Found ${blogPosts.length} posts to convert`)
    
    const results = []
    const errors = []
    
    // Convert each one
    for (const oldPost of blogPosts) {
      try {
        // Create new post with correct type
        const newPost = {
          ...oldPost,
          _type: 'post',
          _id: undefined, // Let Sanity generate new ID
          _rev: undefined,
          _createdAt: undefined,
          _updatedAt: undefined
        }
        
        // Create the new post
        const created = await client.create(newPost)
        
        // Delete the old blogPost
        await client.delete(oldPost._id)
        
        results.push({
          oldId: oldPost._id,
          newId: created._id,
          title: oldPost.title?.en || oldPost.title
        })
        
        console.log(`Converted: ${oldPost._id} → ${created._id}`)
        
      } catch (error) {
        console.error(`Failed to convert ${oldPost._id}:`, error)
        errors.push({
          id: oldPost._id,
          error: error.message
        })
      }
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: `Converted ${results.length} posts from blogPost to post`,
        converted: results.length,
        failed: errors.length,
        results: results,
        errors: errors
      }, null, 2)
    }
    
  } catch (error) {
    console.error('Handler error:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: error.message
      })
    }
  }
}
