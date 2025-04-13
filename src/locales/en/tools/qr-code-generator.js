export default {
  name: 'QR Code Generator',
  description: 'Generate customizable QR codes for URLs, text, and more',
  options: {
    content: 'QR Code Content',
    contentType: 'Content Type',
    errorCorrectionLevel: 'Error Correction Level',
    size: 'Size',
    margin: 'Margin',
    foregroundColor: 'Foreground Color',
    backgroundColor: 'Background Color',
    logo: 'Add Logo',
    logoSize: 'Logo Size',
    cornerRadius: 'Corner Radius'
  },
  contentTypes: {
    url: 'URL',
    text: 'Plain Text',
    email: 'Email',
    phone: 'Phone Number',
    sms: 'SMS',
    wifi: 'WiFi Network',
    vcard: 'vCard',
    mecard: 'MeCard'
  },
  errorLevels: {
    L: 'Low (7%)',
    M: 'Medium (15%)',
    Q: 'Quartile (25%)',
    H: 'High (30%)'
  },
  actions: {
    generate: 'Generate QR Code',
    download: 'Download',
    downloadSVG: 'Download SVG',
    downloadPNG: 'Download PNG',
    copy: 'Copy Image',
    clear: 'Clear',
    uploadLogo: 'Upload Logo'
  },
  templates: {
    title: 'Quick Templates',
    confirmReplace: 'Are you sure you want to replace the current content?',
    confirm: 'Confirm',
    cancel: 'Cancel',
    url: {
      name: 'Website URL'
    },
    email: {
      name: 'Email Address'
    },
    phone: {
      name: 'Phone Number'
    },
    sms: {
      name: 'SMS'
    },
    wifi: {
      name: 'Wi-Fi Config',
      example: {
        ssid: 'network-name',
        password: 'password'
      }
    },
    geo: {
      name: 'Geolocation'
    }
  },
  appearance: {
    title: 'Appearance Settings'
  },
  preview: {
    title: 'Preview',
    generating: 'Generating...',
    clickGenerateButton: 'Click "Generate QR Code" button',
    clickToDownload: 'Click to download QR code'
  },
  tips: {
    title: 'Tips',
    saveToPrint: 'The generated QR code can be saved as an image for printing or sharing.',
    errorCorrection: 'Error correction level indicates readability when the QR code is partially covered or damaged. Level L has the lowest tolerance, while level H has the highest but makes the QR code more complex.'
  },
  wifi: {
    ssid: 'Network Name (SSID)',
    password: 'Password',
    encryption: 'Encryption',
    hidden: 'Hidden Network'
  },
  placeholders: {
    content: 'Enter text, link, or other content...'
  },
  characters: 'characters',
  maxChars: 'Recommended not to exceed 300 characters',
  messages: {
    copied: 'Copied to clipboard!',
    generated: 'QR code generated successfully',
    contentRequired: 'Please enter content for the QR code',
    downloaded: 'QR code downloaded',
    confirmReplace: 'Click confirm to replace current content',
    contentUpdated: 'Content updated',
    changesCancelled: 'Changes cancelled',
    invalidUrl: 'Please enter a valid URL',
    invalidEmail: 'Please enter a valid email address',
    invalidPhone: 'Please enter a valid phone number',
    logoTooBig: 'Logo is too large, maximum file size is 1MB'
  },
  errors: {
    canvasNotReady: 'Canvas element is not ready',
    generationError: 'Error generating QR code',
    generationErrorWithMessage: 'Error generating QR code: {message}',
    downloadError: 'Error downloading QR code: {message}'
  },
  article: {
    title: "QR Code Generator: Create and Customize Quick Response Codes",
    features: {
      title: "Understanding QR Codes and Their Applications",
      description: "Our <strong>QR code generator</strong> is a versatile online tool that creates customizable Quick Response (QR) codes for various types of information. Unlike traditional barcodes, <strong>QR codes</strong> can store substantial amounts of data in a compact, machine-readable format that can be quickly scanned using smartphones and dedicated scanners.<br><br>This advanced <strong>QR code maker</strong> supports multiple content types including URLs, plain text, contact information, WiFi credentials, and geographical coordinates. Each generated code is fully customizable with options for size, colors, error correction levels, and even the ability to add logos or modify the code's appearance while maintaining scannability.<br><br>The <strong>QR code creator</strong> produces high-resolution codes that can be downloaded in PNG or SVG formats, making them suitable for both digital use and physical printing on marketing materials, product packaging, or signage.",
      useCases: {
        title: "Practical Applications for QR Codes",
        items: [
          "<strong>Business Marketing</strong>: Create <strong>custom QR codes</strong> for business cards, brochures, and promotional materials to connect potential customers with your website, special offers, or contact information. Companies can use uniquely styled QR codes that incorporate brand colors and logos to strengthen brand recognition while providing a convenient way for customers to access digital content.",
          
          "<strong>Contactless Payments</strong>: Generate <strong>payment QR codes</strong> that link directly to payment platforms or contain cryptocurrency wallet information, enabling quick and contactless transactions. This has become increasingly important for small businesses and street vendors who can accept digital payments without needing expensive point-of-sale terminals.",
          
          "<strong>Restaurant Menus</strong>: Develop <strong>scannable QR codes</strong> for contactless menu access, allowing diners to view offerings on their phones without touching physical menus. Restaurants can update their digital menus instantly without reprinting, and even include photos, detailed descriptions, or dietary information that wouldn't fit on a traditional menu.",
          
          "<strong>Event Management</strong>: Create <strong>QR code tickets</strong> and registration badges for conferences, concerts, or exhibitions that can be quickly scanned for verification. Event organizers can track attendance in real-time, reduce counterfeiting, and streamline the check-in process while minimizing physical contact.",
          
          "<strong>Product Packaging</strong>: Incorporate <strong>QR code labels</strong> on products that link to user manuals, setup instructions, warranty registration, or authentication verification. Manufacturers can provide extensive product information, tutorial videos, and support resources without increasing packaging size or printing costs.",
          
          "<strong>Educational Resources</strong>: Generate <strong>QR codes for education</strong> that connect students to supplemental learning materials, interactive quizzes, or video demonstrations. Teachers can place these codes in handouts or presentations, creating bridges between physical and digital learning environments while tracking engagement with specific resources."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About QR Codes",
      items: [
        {
          question: "What's the difference between various QR code error correction levels?",
          answer: "Error correction levels in <strong>QR codes</strong> determine how much damage the code can sustain while remaining scannable:<br><br>• <strong>Level L (Low)</strong>: Recovers up to 7% damage, creating the most compact codes ideal for controlled environments<br>• <strong>Level M (Medium)</strong>: Handles up to 15% damage, providing a good balance for most standard applications<br>• <strong>Level Q (Quartile)</strong>: Withstands up to 25% damage, recommended for industrial uses or outdoor display<br>• <strong>Level H (High)</strong>: Tolerates up to 30% damage, best for harsh environments or when adding logos<br><br>Higher correction levels create more complex <strong>QR code patterns</strong> with additional redundancy, which makes the codes slightly larger but significantly more reliable in challenging conditions or when customized with colors or logos."
        },
        {
          question: "Can I add a logo to my QR code without breaking its functionality?",
          answer: "Yes, you can add logos to your <strong>QR codes</strong> while maintaining scannability by following these guidelines:<br><br>1. Use a higher error correction level (preferably H) when creating <strong>custom QR codes with logos</strong><br>2. Keep your logo relatively small, ideally covering no more than 30% of the central area<br>3. Ensure the logo has sufficient contrast with the QR code colors<br>4. Avoid placing the logo over the three position detection patterns (the squares in the corners)<br><br>Our <strong>QR code generator</strong> automatically adjusts the code's data density when you add a logo, ensuring the resulting code remains fully functional. After adding a logo, always test your QR code with multiple devices to verify it scans correctly in various conditions."
        },
        {
          question: "What information can I encode in a QR code?",
          answer: "QR codes can encode various types of information, making them extremely versatile:<br><br>• <strong>Website URLs</strong>: Direct scanners to specific web pages, landing pages, or online resources<br>• <strong>Plain text</strong>: Store messages, identifiers, or any alphanumeric information (up to about 4,000 characters)<br>• <strong>Contact information (vCard/meCard)</strong>: Share complete contact details that can be saved directly to a phone's contacts<br>• <strong>WiFi network credentials</strong>: Allow instant connection to WiFi networks without typing passwords<br>• <strong>Phone numbers</strong>: Initiate calls when scanned<br>• <strong>SMS messages</strong>: Open pre-populated text messages<br>• <strong>Email addresses</strong>: Start new emails to specified recipients<br>• <strong>Geographic locations</strong>: Open map applications to specific coordinates<br><br>Our <strong>QR code maker</strong> provides specialized templates for each of these content types, automatically formatting the data properly to ensure compatibility with most scanning applications."
        },
        {
          question: "How large should I print QR codes for optimal scanning?",
          answer: "The optimal size for printing <strong>QR codes</strong> depends on the scanning distance:<br><br>• <strong>Minimum size</strong>: 2 × 2 cm (0.8 × 0.8 inches) for close scanning<br>• <strong>Standard recommendation</strong>: 3 × 3 cm (1.2 × 1.2 inches) for typical use cases<br>• <strong>Scanning from 1-2 meters away</strong>: 10 × 10 cm (4 × 4 inches) or larger<br>• <strong>Billboard or distant scanning</strong>: At least 30 × 30 cm (12 × 12 inches)<br><br>A general rule of thumb is that the <strong>printed QR code</strong> should measure at least 1/10th of the scanning distance. Additionally, always include a quiet zone (empty margin) around the code measuring at least four times the width of a single module (the smallest square in the code).<br><br>Our <strong>QR code generator</strong> produces high-resolution SVG files that can be scaled to any size without losing quality, ensuring your codes remain crisp and scannable regardless of the printed dimensions."
        },
        {
          question: "How can I track scans of my QR code?",
          answer: "To track scans of your <strong>QR codes</strong> and gather analytics, you can:<br><br>1. Use a <strong>URL shortener with tracking</strong> (like Bit.ly, TinyURL, or Rebrandly) as the QR code destination, which provides scan metrics<br>2. Direct the QR code to a specific landing page on your website that you monitor through Google Analytics or similar tools<br>3. Employ specialized <strong>dynamic QR code</strong> services that offer built-in analytics and allow you to change the destination URL without creating a new code<br>4. Create unique UTM parameters for each QR code to differentiate traffic sources in your analytics<br><br>While our <strong>QR code generator</strong> creates static codes, you can easily implement these tracking strategies by encoding the appropriate tracked URLs. For enterprise-level applications requiring comprehensive scan analytics including location data, device information, and scan times, consider dedicated QR code marketing platforms."
        }
      ]
    },
    guide: {
      title: "How to Create a QR Code: Step-by-Step Guide",
      step1: "<strong>Choose your content type</strong>: Start by deciding what information you want to encode in your QR code. Select from options like website URL, plain text, contact information, or WiFi credentials. For greater convenience, you can use one of the templates provided by our <strong>QR code generator</strong>, which will automatically format your data correctly based on the content type.",
      step2: "<strong>Enter your information</strong>: Fill in the necessary details in the content field. For URLs, ensure you include the complete web address starting with 'http://' or 'https://'. For WiFi networks, provide the network name (SSID), password, and encryption type. The <strong>QR code maker</strong> will validate your input to ensure it can be properly encoded and scanned later.",
      step3: "<strong>Customize the appearance</strong>: Personalize your QR code by adjusting settings like size, colors, and error correction level. You can choose different foreground and background colors to match your branding, adjust the corner radius for a softer look, or even add a logo to the center of your code. Our <strong>QR code creator</strong> automatically ensures that customizations maintain scanability by adjusting the error correction level as needed.",
      step4: "<strong>Generate and test your QR code</strong>: Click the 'Generate QR Code' button to create your code based on the provided information and selected design options. Once generated, test your QR code by scanning it with your smartphone camera or a dedicated QR scanning app to verify that it correctly displays or performs the intended action. Testing is especially important if you've customized the appearance or added a logo.",
      step5: "<strong>Download and deploy your QR code</strong>: After verifying that your QR code works properly, download it in your preferred format (PNG for digital use or SVG for scalable print materials). You can then incorporate the <strong>QR code image</strong> into your marketing materials, website, product packaging, or wherever you need to provide quick access to your information. Remember that SVG format is preferable for print materials as it maintains quality at any size."
    },
    conclusion: "QR codes have transformed how we bridge the physical and digital worlds, offering a seamless way to share information and engage users. With their increasing adoption across industries, creating effective and scannable QR codes has become an essential skill for marketers, businesses, educators, and individuals alike. Our QR code generator simplifies this process, providing the tools to create customized codes that maintain perfect functionality while reflecting your brand identity. Whether you're linking to advanced web content, simplifying payment processes, or enhancing educational materials, QR codes offer a versatile solution that combines convenience with technological efficiency. As mobile technology continues to evolve, the importance and applications of these two-dimensional codes will only expand, making them an increasingly valuable asset in our interconnected world."
  }
} 