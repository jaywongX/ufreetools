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
  }
}; 