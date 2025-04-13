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
  invalidFormat: 'Invalid format',
  
  // Article content
  article: {
    title: 'Cookie Manager: Understanding and Controlling Website Cookies',
    features: {
      title: 'Features and Applications',
      description: 'Our <strong>Cookie Manager</strong> tool provides comprehensive control over website cookies, allowing you to view, create, edit, and delete cookies for the current website. This powerful tool gives you complete visibility and control over the cookies stored in your browser, helping you manage your online privacy and troubleshoot website functionality issues.',
      useCasesTitle: 'Practical Applications',
      useCases: {
        items: [
          '<strong>Web Development Testing</strong>: Test how your website behaves with different cookie configurations without manually editing browser storage.',
          '<strong>Website Troubleshooting</strong>: Diagnose login issues, session problems, or other cookie-related website malfunctions by examining and modifying cookies.',
          '<strong>Privacy Management</strong>: Take control of your personal data by viewing what information websites store in cookies and selectively removing unwanted tracking cookies.',
          '<strong>Session Management</strong>: Create or modify session cookies to test different user states or authentication scenarios without logging in and out repeatedly.',
          '<strong>Cross-browser Testing</strong>: Export cookies from one browser and import them into another to replicate the same browsing state across different browsers.'
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What are cookies and why do websites use them?',
          answer: 'Cookies are small pieces of data that websites store in your browser. They serve various functions including remembering login information, tracking user behavior, storing preferences, maintaining shopping carts, and enabling personalized experiences. Cookies are essential for many modern web functionalities but can also raise privacy concerns when used for tracking.'
        },
        {
          question: 'How does the Cookie Manager tool differ from browser\'s built-in cookie settings?',
          answer: 'While browsers offer basic cookie management through their settings, our <strong>Cookie Manager</strong> provides more granular control and functionality. You can not only view and delete cookies (like browsers allow) but also create new cookies, edit existing ones, export cookies for backup, and import cookies. This makes it ideal for developers, testers, and privacy-conscious users who need detailed cookie management capabilities.'
        },
        {
          question: 'Is it safe to delete cookies? Will it affect my browsing experience?',
          answer: 'Deleting cookies is generally safe, but it can affect your browsing experience in several ways. You might be logged out of websites, lose saved preferences, or need to recreate shopping carts. The <strong>Cookie Manager</strong> allows you to selectively delete specific cookies rather than clearing all cookies, giving you precise control over which browsing data to keep or remove.'
        },
        {
          question: 'What do the different cookie attributes like "SameSite" and "HttpOnly" mean?',
          answer: 'Cookie attributes control how cookies behave and are accessed:<br>- <strong>Secure</strong>: The cookie is only sent over HTTPS connections<br>- <strong>HttpOnly</strong>: The cookie cannot be accessed by JavaScript<br>- <strong>SameSite</strong>: Controls when cookies are sent with cross-site requests (None, Lax, or Strict)<br>- <strong>Domain</strong>: Specifies which domains can receive the cookie<br>- <strong>Path</strong>: Restricts the cookie to specific paths on the website<br>- <strong>Expires</strong>: Sets when the cookie should be deleted by the browser'
        },
        {
          question: 'Can I use this tool to import cookies from another computer or browser?',
          answer: 'Yes, the <strong>Cookie Manager\'s</strong> import/export functionality allows you to transfer cookies between browsers or devices. Export your cookies to a JSON or text file, transfer the file to another device, and then import them using the Cookie Manager tool on that device. This is particularly useful for developers who need to replicate user states or for transferring your browsing session between different computers.'
        }
      ]
    },
    guide: {
      title: 'How to Use the Cookie Manager Tool',
      step1: {
        title: 'Viewing Current Cookies',
        description: 'When you open the <strong>Cookie Manager</strong>, the "Current Cookies" tab displays all cookies for the current website. This list shows each cookie\'s name, value, and expiration date. To see more details about a specific cookie, click the "Edit" button next to it. To refresh the list and ensure you\'re seeing the most current cookies, click the "Refresh" button at the top of the list.'
      },
      step2: {
        title: 'Creating New Cookies',
        description: 'To add a new cookie, click the "Create Cookie" tab. Fill in the required fields (Name and Value) and any optional attributes like Domain, Path, or Expiration time. Set security options like Secure flag or SameSite attribute according to your needs. Once you\'ve configured the cookie, click the "Save" button to create it. The tool will confirm successful creation and automatically return to the cookie list view.'
      },
      step3: {
        title: 'Editing Existing Cookies',
        description: 'To modify a cookie, find it in the "Current Cookies" list and click the "Edit" button. This will load the cookie\'s details into the edit form. Make your desired changes to any of the cookie\'s attributes. When finished, click "Save" to update the cookie. The tool will confirm the update was successful. Note that editing a cookie actually creates a new cookie with the same name but updated attributes.'
      },
      step4: {
        title: 'Deleting Cookies',
        description: 'To remove a cookie, locate it in the "Current Cookies" list and click the "Delete" button. A confirmation dialog will appear to prevent accidental deletion. Once confirmed, the cookie will be immediately removed from your browser, and the list will refresh automatically. This gives you complete control over which data websites can store in your browser.'
      },
      step5: {
        title: 'Importing and Exporting Cookies',
        description: 'To transfer cookies, navigate to the "Import/Export" tab. For exporting, choose between JSON format (for better structure) or Text format (for better compatibility). Click the corresponding button to download the file. For importing, paste cookie data in the text area and click "Import". You can import cookies in either the standard text format or JSON format. The tool will confirm successful imports and show how many cookies were imported.'
      }
    },
    conclusion: 'The <strong>Cookie Manager</strong> tool empowers you with complete control over browser cookies, whether you\'re a developer testing website functionality, a privacy-conscious user managing personal data, or someone troubleshooting website issues. By understanding and actively managing cookies, you can enhance your browsing experience while maintaining control over your online privacy.'
  }
}; 