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
    // Fetch ONE blogPost document only
    const oldPost = await client.fetch('*[_type == "blogPost"][0]')
    
    if (!oldPost) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          message: '✅ All posts have been converted!',
          converted: 0
        })
      }
    }
    
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
    
    console.log(`Converted: ${oldPost._id} → ${created._id}`)
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: `Converted: ${oldPost.title?.en || oldPost._id}`,
        oldId: oldPost._id,
        newId: created._id,
        title: oldPost.title?.en || oldPost.title
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
