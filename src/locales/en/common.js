export default {
  loading: 'Loading...',
  error: 'Error',
  success: 'Success',
  cancel: 'Cancel',
  save: 'Save',
  delete: 'Delete',
  confirm: 'Confirm',
  navigation: 'Navigation',
  expand: 'Expand',
  collapse: 'Collapse',
  languageDetector: {
    detected: 'We detected your browser language is {lang}',
    switchQuestion: 'Would you like to switch to this language?',
    switchNow: 'Switch Now',
    stayOn: 'Stay on {lang}'
  },
  defaultDescription: 'Free online tools for developers, designers and everyday users.',
  site: {
    name: 'Tool Collection'
  },
  characters: 'Characters',
  lines: 'Lines',
  pasteFromClipboard: 'Paste from clipboard',
  pasteError: 'Unable to read from clipboard',
  copyFailed: 'Copy failed',
  simple: 'Simple',
  nested: 'Nested',
  complex: 'Complex',
  example: 'Example',
  loadExample: 'Load Example',
  spaces: 'spaces',
  donate: 'Donate',
  buyMeACoffee: 'Buy me a coffee',
  donateInternational: 'International',
  donateChina: 'Mainland China',
  wechatPay: 'WeChat Pay',
  wechatDonation: 'WeChat Donation QR Code',
  scanToSupport: 'Scan the QR code below to support us',
  thankYouForSupport: 'Thank you for your support!',
  backToHome: "Back to home",
  submit: 'Submit',
  submitting: 'Submitting...',
  useTool: 'Use Tool',
  favorites: {
    title: 'My Favorites',
    description: 'View and manage your favorite tools',
    add: 'Add to Favorites',
    remove: 'Remove from Favorites',
    empty: 'Your favorites list is empty',
    browseTools: 'Browse all tools',
    article: {
      title: "Favorites Feature: Efficiently Manage Your Preferred Tools",
      intro: {
        title: "Introduction to Favorites Feature and Use Cases",
        p1: "<b>The Favorites feature</b> allows you to easily save and manage your most frequently used online tools. By adding tools to your favorites, you create a personalized collection of tools, eliminating the need to search through numerous options each time. This significantly improves work efficiency for users who regularly use specific tools, saving valuable time. The favorites feature operates entirely within your browser locally, requiring no account creation or login, providing convenience while protecting your privacy.",
        p2: "In daily work and study, <b>we often use various online tools</b> to assist with different tasks. For example, developers may frequently access JSON formatters, encoding converters, and compression tools; designers might regularly use color pickers, image processors, and SVG optimizers; while general users may rely on document converters, random generators, or calculation tools. With the favorites feature, you can organize these commonly used tools together, creating a toolbox specifically tailored to your workflow.",
        p3: "<b>The favorites feature is suitable for multiple scenarios</b>, including but not limited to: quick access to common coding tools during programming development; organizing educational resources and calculation tools during learning; organizing document processing and format conversion tools in work environments; and collecting practical everyday tools for personal use. Whether you're a professional or a general user, the favorites feature helps you use online tools more efficiently, creating a collection of tools that's uniquely yours."
      },
      tutorial: {
        title: "How to Use the Favorites Feature",
        intro: "Here's a simple step-by-step guide to using the favorites feature, helping you start organizing and managing your favorite tools:",
        step1: {
          title: "Step 1: Adding Tools to Favorites",
          description: "When browsing tools, you'll find a star icon in the top right corner of each tool card or tool detail page. Click this star icon to add the tool to your favorites. When a tool is successfully added, the star icon turns yellow, indicating that the tool is now in your favorites list. You can add or unfavorite tools at any time, and the system automatically saves your choices."
        },
        step2: {
          title: "Step 2: Accessing Your Favorites",
          description: "To view all your favorited tools, click on the 'Favorites' link in the navigation bar or sidebar. This will take you to the favorites page, displaying all the tools you've added. You can also quickly access recently added favorite tools through the 'My Favorites' section on the homepage, and enter the complete favorites page via the 'View All' link."
        },
        step3: {
          title: "Step 3: Managing Your Favorite Tools",
          description: "On the favorites page, you can view, use, and manage your favorite tools. Each tool entry has a delete button (trash icon) in the top right corner – click it to remove that tool from your favorites. You can also click on the tool name or description to directly go to the tool usage page. Your favorites list is automatically saved and will still be available when you visit the website next time."
        },
        step4: {
          title: "Step 4: Understanding Local Storage Limitations",
          description: "Since the favorites feature uses the browser's localStorage for data storage, there are several limitations to be aware of: 1) Data is only saved in the current browser and won't sync across devices; 2) If you clear browser data or use private browsing mode, your favorites records may be lost; 3) localStorage typically has a 5-10MB storage limit, which is more than sufficient for the favorites feature, but theoretically there is an upper limit; 4) Favorites lists on different browsers and devices are independent of each other."
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "Where is my favorites data stored? Does it sync across devices?",
        a1: "<b>Favorites data is stored entirely in your local browser</b>, using the localStorage API provided by browsers. This means your favorites list is not uploaded to any server and won't automatically sync between different devices or browsers. This design has two main advantages: first, it protects your privacy since the data stays completely on your device; second, it allows you to use the feature without registration or login. However, this also means that if you use a different device, browser, or clear your browser data, you'll need to recreate your favorites list. Considering that most users typically access tools from fixed devices and browsers, this trade-off is reasonable.",
        
        q2: "How many tools can I favorite? Is there a limit?",
        a2: "<b>The number of tools you can favorite is theoretically limited by the browser's localStorage storage limit</b>, which is typically between 5-10MB, more than sufficient for the favorites feature. Calculating with an average of 1KB data usage per tool, you can easily favorite thousands of tools without encountering storage issues. In practice, most users generally don't favorite more than 100 tools, so there's no need to worry about reaching the limit. If you're a heavy user and have favorited many tools, consider organizing your favorites list by removing tools you no longer use, keeping your favorites clean and practical. In rare cases, if you do encounter storage limitation issues, the browser typically displays relevant error messages.",
        
        q3: "Will I lose my favorites if I clear my browser data?",
        a3: "<b>Yes, if you clear your browser data (especially local storage or cookie data), your favorites records will be lost</b>. This is because the favorites feature relies on the browser's localStorage to save your preferences. Similarly, if you use your browser's private/incognito mode, favorites records won't be retained after closing the window. To avoid accidentally losing favorites data, consider these suggestions: when clearing browser data, selectively preserve website data; before browser upgrades or device changes, make note of your important favorited tools; avoid adding important tools to favorites in private mode. If you frequently use multiple devices or regularly clear browser data, consider using the browser's bookmark feature as a backup method, adding important tool pages as bookmarks.",
        
        q4: "Why not provide an account system to save my favorites?",
        a4: "<b>We chose to use local storage instead of an account system mainly for the following reasons</b>: First, it protects user privacy as you don't need to provide any personal information to use the favorites feature; Second, it simplifies the user experience with no need to register, login, or remember passwords; Third, it reduces security risks as there's no account information that could potentially be leaked; Finally, it makes the website load faster without the need for account verification and data synchronization. We understand that cross-device synchronization is a useful feature, but we prioritized simplicity, privacy, and a frictionless user experience. In future updates, we might consider offering an optional account system, allowing users to choose whether to use accounts for synchronizing favorites, but the local storage option will always remain available, respecting those who prioritize privacy and simplicity."
      },
      relatedTools: {
        title: "Tools You Might Also Like",
        description: "Explore these popular tools and add them to your favorites:",
        tool1: {
          name: "JSON Formatter",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "Beautify, minify, and validate JSON data with syntax highlighting and error detection."
        },
        tool2: {
          name: "Password Generator",
          url: "https://www.ufreetools.com/tool/password-generator",
          description: "Create strong passwords with customizable length, complexity, and character types."
        },
        tool3: {
          name: "Image Compressor",
          url: "https://www.ufreetools.com/tool/image-compressor",
          description: "Compress image size while maintaining image quality, suitable for web and social media."
        }
      },
      resources: {
        title: "Learn More About Local Storage Technology",
        resource1: {
          name: "MDN Web Docs: localStorage",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          description: "Mozilla Developer Network's detailed technical documentation and usage guide for the localStorage API."
        },
        resource2: {
          name: "W3C Web Storage Specification",
          url: "https://www.w3.org/TR/webstorage/",
          description: "The official specification document for Web Storage technology, detailing the standard implementation of localStorage."
        }
      }
    }
  },
  home: {
    favoritedToolsTitle: 'My Favorites',
    viewAllFavorites: 'View all',
  }
};
