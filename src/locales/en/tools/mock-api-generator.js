export default {
  name: 'Mock API Generator',
  description: 'Automatically generate Mock API based on OpenAPI specifications',

  options: {
    version: 'OpenAPI Version',
    format: 'Output Format',
    includeExamples: 'Include Example Responses',
    responseDynamism: 'Response Dynamism',
    responseType: 'Response Type',
    arrayLength: 'Array Length',
    responseFormat: 'Response Format'
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
    uploadSpec: 'Upload OpenAPI Spec',
    uploadJava: 'Upload Java Class',
    generateJson: 'Generate JSON',
    generateBuilder: 'Generate Builder',
    format: 'Format'
  },

  messages: {
    copied: 'Copied to clipboard!',
    generationSuccess: 'Mock API generated successfully',
    generationError: 'Error generating Mock API',
    specRequired: 'Please provide an OpenAPI specification',
    fileUploaded: 'Uploaded',
    parseError: 'Failed to parse Java class, please ensure file format is correct'
  },

  help: {
    uploadHint: 'Upload .java files to automatically parse class structure. Multi-level object properties not supported yet.'
  },

  fields: {
    title: 'Field Definitions',
    addField: 'Add Field',
    addChildField: 'Add Child Field',
    fieldName: 'Field Name'
  },

  fieldTypes: {
    string: 'String',
    number: 'Number',
    boolean: 'Boolean',
    date: 'Date',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    id: 'ID',
    image: 'Image URL',
    array: 'Array',
    object: 'Object'
  },

  array: {
    itemType: 'Array Item Type',
    arrayFields: 'Array Item Fields'
  },

  object: {
    childFields: 'Child Fields'
  },

  responseTypes: {
    object: 'Single Object',
    array: 'Object Array',
    custom: 'Custom Structure'
  },

  responseFormats: {
    dataOnly: 'Data Only',
    standard: 'Standard REST Response (code, data, message)'
  },

  placeholder: {
    output: '// Generated Mock Data will be displayed here'
  }
}; 