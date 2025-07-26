import { createClient } from '@sanity/client'

export async function handler(event) {
  const debugInfo = {
    env: {
      hasToken: !!process.env.SANITY_API_WRITE_TOKEN,
      tokenLength: process.env.SANITY_API_WRITE_TOKEN?.length,
      tokenStart: process.env.SANITY_API_WRITE_TOKEN?.substring(0, 10)
    },
    tests: []
  }
  
  try {
    // Test 1: Create client
    const client = createClient({
      projectId: 'trdbxmjo',
      dataset: 'production',
      apiVersion: '2023-07-25',
      token: process.env.SANITY_API_WRITE_TOKEN,
      useCdn: false
    })
    debugInfo.tests.push({ test: 'Client created', success: true })
    
    // Test 2: Try to fetch existing posts
    try {
      const existing = await client.fetch('*[_type == "post"][0..2]{_id, _type}')
      debugInfo.tests.push({ 
        test: 'Fetch existing', 
        success: true, 
        count: existing.length,
        data: existing
      })
    } catch (e) {
      debugInfo.tests.push({ 
        test: 'Fetch existing', 
        success: false, 
        error: e.message,
        details: e.response?.body || e
      })
    }
    
    // Test 3: Try to create a simple post
    try {
      const testDoc = {
        _type: 'post',
        title: 'Debug Test Post ' + Date.now(),
        slug: {
          current: 'debug-test-' + Date.now()
        }
      }
      
      const result = await client.create(testDoc)
      debugInfo.tests.push({ 
        test: 'Create post', 
        success: true, 
        created: result._id,
        fullResult: result
      })
      
      // Try to fetch it back
      const fetched = await client.getDocument(result._id)
      debugInfo.tests.push({ 
        test: 'Fetch created post', 
        success: true, 
        found: !!fetched,
        data: fetched
      })
      
    } catch (e) {
      debugInfo.tests.push({ 
        test: 'Create post', 
        success: false, 
        error: e.message,
        statusCode: e.statusCode,
        errorCode: e.response?.body?.errorCode,
        details: e.response?.body || e.details || e
      })
    }
    
    // Test 4: Try raw API call
    try {
      const token = process.env.SANITY_API_WRITE_TOKEN
      const response = await fetch(
        `https://trdbxmjo.api.sanity.io/v2023-07-25/data/mutate/production`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            mutations: [{
              create: {
                _type: 'post',
                title: 'Raw API Test ' + Date.now()
              }
            }]
          })
        }
      )
      
      const result = await response.json()
      debugInfo.tests.push({ 
        test: 'Raw API create', 
        success: response.ok,
        status: response.status,
        result: result
      })
    } catch (e) {
      debugInfo.tests.push({ 
        test: 'Raw API create', 
        success: false, 
        error: e.message
      })
    }
    
  } catch (error) {
    debugInfo.globalError = {
      message: error.message,
      stack: error.stack
    }
  }
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(debugInfo, null, 2)
  }
}
