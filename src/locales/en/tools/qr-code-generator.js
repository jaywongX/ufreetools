export default {
  name: 'QR Code Generator',
  description: 'Generate customizable QR codes for URLs, text, and more',
  options: {
    content: 'Content',
    contentType: 'Content Type',
    errorCorrectionLevel: 'Error Correction',
    size: 'Size',
    margin: 'Margin',
    foregroundColor: 'Foreground Color',
    backgroundColor: 'Background Color',
    logo: 'Add Logo',
    logoSize: 'Logo Size'
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
  wifi: {
    ssid: 'Network Name (SSID)',
    password: 'Password',
    encryption: 'Encryption',
    hidden: 'Hidden Network'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generated: 'QR code generated',
    contentRequired: 'Please enter content for the QR code',
    invalidUrl: 'Please enter a valid URL',
    invalidEmail: 'Please enter a valid email address',
    invalidPhone: 'Please enter a valid phone number',
    logoTooBig: 'Logo is too large, maximum file size is 1MB'
  }
} 