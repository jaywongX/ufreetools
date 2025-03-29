export default {
  name: 'Cookie Manager',
  description: 'View, create, edit, and delete cookies for the current website',
  
  // Main tab labels
  currentCookies: 'Current Cookies',
  createCookie: 'Create Cookie',
  importExport: 'Import/Export',
  
  // Cookie list
  noCookies: 'No cookies for this site',
  cookieName: 'Name',
  cookieValue: 'Value',
  cookieDomain: 'Domain',
  cookiePath: 'Path',
  cookieExpires: 'Expires',
  cookieSecure: 'Secure',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'Actions',
  edit: 'Edit',
  delete: 'Delete',
  save: 'Save',
  cancel: 'Cancel',
  refresh: 'Refresh',
  
  // Create/Edit form
  addCookie: 'Add Cookie',
  editCookie: 'Edit Cookie',
  required: 'Required',
  optional: 'Optional',
  days: 'Days',
  hours: 'Hours',
  minutes: 'Minutes',
  cookieCreated: 'Cookie created',
  cookieUpdated: 'Cookie updated',
  cookieDeleted: 'Cookie deleted',
  createError: 'Error creating cookie',
  updateError: 'Error updating cookie',
  deleteError: 'Error deleting cookie',
  
  // Import/Export
  export: 'Export Cookies',
  import: 'Import Cookies',
  exportAs: 'Export as',
  exportSuccess: 'Cookies exported',
  importSuccess: '{count} cookies imported',
  importError: 'Error importing cookies',
  
  // Security options
  none: 'None',
  strict: 'Strict',
  lax: 'Lax',
  
  // Notes and hints
  domainNote: 'Leave empty for current domain',
  pathNote: 'Defaults to root path "/"',
  expiresNote: 'Unset for session cookie',
  secureNote: 'Send only via HTTPS',
  httpOnlyNote: 'Prevents JavaScript access',
  sameSiteNote: 'Controls cross-site requests',
  
  // Import format
  importFormat: 'Import format example:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',
  jsonFormat: 'JSON Format',
  textFormat: 'Text Format',
  invalidFormat: 'Invalid format'
}; 