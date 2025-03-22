export default {
  name: 'OpenAPI to TypeScript Client',
  description: 'Automatically generate TypeScript interfaces and API client code from OpenAPI specifications',
  options: {
    version: 'OpenAPI Version',
    outputStyle: 'Output Style',
    generateClient: 'Generate API Client',
    generateInterfaces: 'Generate Interfaces',
    framework: 'Client Framework'
  },
  frameworks: {
    fetch: 'Fetch API',
    axios: 'Axios',
    angular: 'Angular HttpClient',
    custom: 'Custom'
  },
  actions: {
    generate: 'Generate Code',
    clear: 'Clear',
    copy: 'Copy Code',
    download: 'Download',
    uploadSpec: 'Upload OpenAPI Spec'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generationSuccess: 'TypeScript code generated successfully',
    generationError: 'Error generating TypeScript code',
    specRequired: 'Please provide an OpenAPI specification'
  }
} 