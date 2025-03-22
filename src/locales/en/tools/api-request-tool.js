export default {
  name: 'API Request Tool',
  description: 'Test and debug API endpoints with customizable HTTP request options',
  request: {
    url: 'Request URL',
    method: 'Method',
    headers: 'Headers',
    body: 'Request Body',
    send: 'Send Request',
    clear: 'Clear',
    save: 'Save Request',
    load: 'Load Request',
    urlPlaceholder: 'Enter API endpoint URL...',
    bodyPlaceholder: 'Enter request body data...',
    addHeader: 'Add Header',
    removeHeader: 'Remove',
    headerName: 'Header Name',
    headerValue: 'Value',
    formatJson: 'Format JSON',
    history: {
      title: 'Request History',
      empty: 'No saved requests',
      clearAll: 'Clear All',
      noItems: 'No history items yet'
    }
  },
  response: {
    title: 'Response',
    status: 'Status',
    time: 'Time',
    size: 'Size',
    headers: 'Headers',
    body: 'Body',
    waiting: 'Waiting for response...',
    noResponse: 'No response yet. Send a request to see results.',
    copyBody: 'Copy Body',
    prettyPrint: 'Pretty Print',
    rawView: 'Raw View',
    jsonView: 'JSON View',
    copied: 'Copied to clipboard!',
    error: 'Error'
  },
  errors: {
    invalidUrl: 'Please enter a valid URL',
    requestFailed: 'Request failed',
    networkError: 'Network error',
    timeout: 'Request timeout',
    invalidJson: 'Invalid JSON format'
  },
  tips: {
    title: 'Usage Tips',
    methods: 'Different HTTP methods (GET, POST, PUT, etc.) serve different purposes when interacting with APIs.',
    headers: 'Common headers include "Content-Type", "Authorization", and "Accept".',
    jsonBody: 'For POST/PUT requests with JSON data, set "Content-Type: application/json" header.',
    history: 'Your request history is saved locally and will persist between sessions.'
  }
} 