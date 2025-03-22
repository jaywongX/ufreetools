export default {
  name: 'Mock API Generator',
  description: 'Automatically generate Mock API based on OpenAPI specifications',
  options: {
    version: 'OpenAPI Version',
    format: 'Output Format',
    includeExamples: 'Include Example Responses',
    responseDynamism: 'Response Dynamism'
  },
  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },
  actions: {
    generate: 'Generate Mock',
    preview: 'Preview API',
    clear: 'Clear',
    copy: 'Copy Code',
    download: 'Download',
    uploadSpec: 'Upload OpenAPI Spec'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generationSuccess: 'Mock API generated successfully',
    generationError: 'Error generating Mock API',
    specRequired: 'Please provide an OpenAPI specification'
  }
} 