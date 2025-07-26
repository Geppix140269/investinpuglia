import { createClient } from '@sanity/client'

export async function handler(event) {
  const token = process.env.SANITY_API_WRITE_TOKEN
  
  // Test 1: Check token exists
  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'No token found',
        help: 'SANITY_API_WRITE_TOKEN environment variable is not set'
      })
    }
  }
  
  // Test 2: Check token format
  const tokenInfo = {
    length: token.length,
    startsWithSk: token.startsWith('sk'),
    hasWhitespace: token !== token.trim(),
    firstChars: token.substring(0, 10) + '...',
    lastChars: '...' + token.substring(token.length - 5)
  }
  
  // Test 3: Try different client configurations
  const tests = []
  
  // Test A: Basic configuration
  try {
    const client1 = createClient({
      projectId: 'trb0xnj0',
      dataset: 'production',
      apiVersion: '2023-07-25',
      token: token,
      useCdn: false
    })
    
    const result1 = await client1.fetch('*[_type == "blogPost"][0]')
    tests.push({ 
      test: 'Basic config', 
      success: true, 
      data: result1 ? 'Found documents' : 'No documents'
    })
  } catch (error) {
    tests.push({ 
      test: 'Basic config', 
      success: false, 
      error: error.message 
    })
  }
  
  // Test B: With explicit host
  try {
    const client2 = createClient({
      projectId: 'trb0xnj0',
      dataset: 'production',
      apiVersion: '2023-07-25',
      token: token,
      useCdn: false,
      apiHost: 'https://api.sanity.io'
    })
    
    const result2 = await client2.fetch('*[_type == "blogPost"][0]')
    tests.push({ 
      test: 'With apiHost', 
      success: true, 
      data: result2 ? 'Found documents' : 'No documents'
    })
  } catch (error) {
    tests.push({ 
      test: 'With apiHost', 
      success: false, 
      error: error.message 
    })
  }
  
  // Test C: Create a draft document
  try {
    const client3 = createClient({
      projectId: 'trb0xnj0',
      dataset: 'production',
      apiVersion: '2023-07-25',
      token: token.trim(), // Ensure no whitespace
      useCdn: false
    })
    
    const testDoc = {
      _type: 'blogPost',
      _id: 'drafts.test-' + Date.now(),
      title: {
        en: 'Test from Debug Function',
        it: '', fr: '', de: '', zh: '', ar: ''
      },
      seoTitle: 'Debug Test',
      metaDescription: { en: 'Testing', it: '', fr: '', de: '', zh: '', ar: '' },
      tags: ['test'],
      geoFocus: 'Test',
      body: { en: [], it: [], fr: [], de: [], zh: [], ar: [] },
      status: 'draft',
      publishedAt: new Date().toISOString()
    }
    
    const created = await client3.create(testDoc)
    tests.push({ 
      test: 'Create document', 
      success: true, 
      data: 'Created: ' + created._id 
    })
    
    // Clean up - delete test doc
    await client3.delete(created._id)
    
  } catch (error) {
    tests.push({ 
      test: 'Create document', 
      success: false, 
      error: error.message,
      details: error.response?.body || error.details
    })
  }
  
  // Test D: Check token permissions via Management API
  try {
    const mgmtResponse = await fetch('https://api.sanity.io/v2021-06-07/projects/trb0xnj0', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (mgmtResponse.ok) {
      const project = await mgmtResponse.json()
      tests.push({ 
        test: 'Token permissions', 
        success: true, 
        data: `Access to project: ${project.displayName || project.id}`
      })
    } else {
      tests.push({ 
        test: 'Token permissions', 
        success: false, 
        error: `HTTP ${mgmtResponse.status}: ${mgmtResponse.statusText}`
      })
    }
  } catch (error) {
    tests.push({ 
      test: 'Token permissions', 
      success: false, 
      error: error.message 
    })
  }
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tokenInfo,
      tests,
      environment: {
        functionUrl: event.rawUrl,
        node: process.version
      }
    }, null, 2)
  }
}
