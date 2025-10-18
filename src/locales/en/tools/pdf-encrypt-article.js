export default {
  title: 'PDF Encryption Tool: Browser-based Solution for Setting Open Passwords and Permissions',
  functionTitle: 'What is an Online PDF Encryption Tool and How Does It Secure Documents?',
  intro: 'Our <strong>online PDF encryption tool</strong> uses a pure front-end open-source technology stack, supporting <strong>AES-128/AES-256 and RC4-40</strong> encryption. It can set <strong>open passwords (user passwords)</strong> and <strong>permission passwords (owner passwords)</strong>, while providing permission control options for printing, editing, copying, and form filling. It supports drag-and-drop upload, traditional multiple selection, URL batch import, and batch addition, offering <strong>real-time preview comparison</strong> and basic analysis to help you quickly verify encryption effects and permission configurations. After encryption, you can <span style="font-weight:bold">download individually</span> or <span style="font-weight:bold">batch download as ZIP</span>. All operations are performed locally in the browser without uploading to a server, ensuring privacy and efficiency.',

  useCasesTitle: 'Common Application Scenarios for PDF Encryption',
  useCases: [
    'Setting open passwords and permission controls for enterprise shared documents',
    'Adding AES-256 high-security encryption to sensitive PDFs such as contracts and invoices',
    'Restricting printing and copying to prevent unauthorized distribution',
    'Setting low-resolution printing and limited editing for online training materials',
    'Batch encrypting PDFs and uniformly setting permissions',
    'Quickly encrypting and previewing encryption effects on mobile devices',
    'Local browser encryption without uploading to protect privacy'
  ],

  tipTitle: 'Professional Tips:',
  tipContent: 'It is recommended to use <strong>strong passwords</strong> combined with <strong>AES-256</strong> encryption level for higher security; for better search performance, you can fill in titles and keywords in metadata and maintain consistent naming strategies (the current tool does not modify PDF metadata).',

  conclusion: 'The <strong>online PDF encryption tool</strong> can quickly complete encryption and permission configuration in the browser, suitable for various scenarios such as enterprises, educational institutions, and individual users. By setting user passwords and owner passwords and selecting appropriate encryption algorithms, you can ensure security while maintaining good usability.',

  faqTitle: 'Frequently Asked Questions (FAQ)',
  faqs: [
    {
      question: 'Which encryption algorithms does the online PDF encryption tool support?',
      answer: 'This tool supports <strong>AES-128</strong>, <strong>AES-256</strong>, and legacy-compatible <strong>RC4-40</strong> encryption. The specific algorithm selection for 128-bit encryption (AES or RC4) depends on QPDF\'s configuration and version.'
    },
    {
      question: 'How to set open passwords (user passwords) and permission passwords (owner passwords)?',
      answer: 'Enter <strong>user password</strong> and <strong>owner password</strong> respectively in the "Password Protection" section; the current tool requires both to perform encryption (this may be relaxed to user password only in future versions).'
    },
    {
      question: 'Does it support batch encryption and real-time preview comparison?',
      answer: 'Supports batch import and batch addition; after performing encryption, you can conduct <strong>real-time preview comparison</strong> (first pages of original and encrypted), and provides individual download buttons (only displayed after that item\'s encryption is completed) and <strong>ZIP batch download</strong>.'
    }
  ],

  tutorialTitle: 'How to Use the Online PDF Encryption Tool',
  steps: [
    {
      title: 'Add PDF Files',
      description: 'Upload via <strong>drag-and-drop</strong> or click to select files (supports <strong>multiple selection</strong> and <strong>batch addition</strong>); you can also paste multiple URLs at once in the "Batch Import Network PDF URLs" section.',
      note: 'It is recommended to first familiarize yourself with the process using sample PDFs.'
    },
    {
      title: 'Preview and Analysis',
      description: 'The tool will automatically render the first page of the original PDF and render the first page of the encrypted PDF for comparison after encryption is complete; to view permission effects, adjust in the left "Permission Control" section and re-encrypt.',
      note: 'If preview fails, the file may be corrupted or incompatible.'
    },
    {
      title: 'Set Passwords and Permissions',
      description: 'Set <strong>user password</strong> and <strong>owner password</strong> in "Password Protection" while viewing <strong>password strength</strong> hints; configure print, edit, copy, and form filling permissions in "Permission Control".',
      note: 'It is recommended to select AES-256 and use strong passwords.'
    }
  ],

  successTitle: 'Completed!',
  successContent: 'You have mastered how to use the online PDF encryption tool to set passwords and document permissions, and verified the encryption effect through preview comparison.',

  relatedToolsTitle: 'Related Tools You Might Be Interested In',
  relatedTools: [
        {
            name: 'PDF Merger',
            description: 'Combine multiple PDF files into a complete PDF document, supporting cross-file page reordering.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF Splitter',
            description: 'Split large PDF documents into multiple smaller PDF files, supporting custom split pages.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF to Word Converter',
            description: 'Convert PDF documents to editable Word format, preserving original layout and formatting.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'PDF to Image Converter',
            description: 'Convert each page of a PDF document to high-quality image files, supporting multiple output formats.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: 'Reference Resources',
  references: [
    { title: 'QPDF Official', description: 'QPDF is a powerful PDF structural processing and encryption tool that provides rich permission control capabilities.' },
    { title: 'PDF.js Documentation', description: 'PDF.js is an open-source library for rendering PDFs in browsers, suitable for preview and basic information retrieval.' },
    { title: 'Adobe PDF Reference Specification', description: 'Adobe PDF reference documents provide PDF specification details and security-related definitions.' }
  ],

  coverAlt: 'Online PDF Encryption Tool Product Page Image'
}