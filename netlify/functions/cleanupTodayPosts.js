const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'trdbxmjo',
  dataset: 'production',
  apiVersion: '2023-07-25',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

exports.handler = async (event) => {
  try {
    // Get the action from query parameters (count or delete)
    const action = event.queryStringParameters?.action || 'count';
    
    // Set the cutoff date to midnight July 26, 2025
    const cutoffDate = '2025-07-26T00:00:00Z';
    
    // Query for all posts created today or later
    const query = `*[
      (_type == "post" || _type == "blogPost") && 
      _createdAt >= "${cutoffDate}"
    ] {
      _id,
      _type,
      _createdAt,
      title,
      "titleString": select(
        defined(title.en) => title.en,
        defined(title) => title,
        "Untitled"
      )
    }`;
    
    const postsToDelete = await client.fetch(query);
    
    if (action === 'count') {
      // Just count and show what would be deleted
      const postTypes = postsToDelete.reduce((acc, post) => {
        acc[post._type] = (acc[post._type] || 0) + 1;
        return acc;
      }, {});
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `Found ${postsToDelete.length} posts created since July 26, 2025`,
          breakdown: postTypes,
          posts: postsToDelete.map(p => ({
            id: p._id,
            type: p._type,
            title: p.titleString,
            createdAt: p._createdAt
          })),
          warning: 'Run with ?action=delete to actually delete these posts'
        }, null, 2),
      };
    }
    
    if (action === 'delete') {
      // Actually delete the posts
      const results = [];
      const errors = [];
      
      for (const post of postsToDelete) {
        try {
          await client.delete(post._id);
          results.push({
            id: post._id,
            type: post._type,
            title: post.titleString,
            status: 'deleted'
          });
          console.log(`Deleted: ${post._id} - ${post.titleString}`);
        } catch (error) {
          errors.push({
            id: post._id,
            title: post.titleString,
            error: error.message
          });
          console.error(`Failed to delete ${post._id}:`, error);
        }
      }
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: `Deleted ${results.length} posts created since July 26, 2025`,
          deleted: results.length,
          failed: errors.length,
          results: results,
          errors: errors
        }, null, 2),
      };
    }
    
    // Invalid action
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Invalid action. Use ?action=count or ?action=delete'
      }),
    };
    
  } catch (error) {
    console.error('Handler error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      }),
    };
  }
};
