export default {
  title: 'PDF Decryption Tool: Browser-based Solution to Remove Open Passwords and Permission Restrictions',
  functionTitle: 'What is an Online PDF Decryption Tool and When Do You Need Decryption?',
  intro: 'Our <strong>online PDF decryption tool</strong> is based on a pure front-end open-source technology stack. It supports providing an <strong>open password (user password)</strong> for encrypted PDFs to perform decryption, removing permission restrictions such as printing, editing, copying, and form filling. It supports drag-and-drop upload, traditional multi-selection, URL batch import, and batch addition, providing <strong>real-time preview comparison</strong> and basic analysis to help you quickly verify the decryption effect. After decryption is complete, you can <span style="font-weight:bold">download individually</span> or <span style="font-weight:bold">batch download as ZIP</span>. All operations are performed locally in the browser without uploading to a server, protecting privacy and ensuring efficiency.',

  useCasesTitle: 'Common Application Scenarios for PDF Decryption',
  useCases: [
    'Remove permission restrictions from enterprise shared documents for internal editing',
    'Perform compliant decryption for documents with forgotten owner permission configurations',
    'Restore printing and copying capabilities for proofreading and content reuse',
    'Remove low-resolution restrictions from training materials or reports to improve output quality',
    'Batch decrypt multiple PDFs and process them uniformly',
    'Quickly decrypt and preview decryption effects on mobile devices',
    'Local browser decryption without uploading to protect privacy'
  ],

  tipTitle: 'Professional Tips:',
  tipContent: 'It is recommended to decrypt only PDFs for which you have legitimate usage authorization; for better search performance, you can fill in titles and keywords in metadata and maintain consistent naming strategies (the current tool does not modify PDF metadata).',

  conclusion: 'The <strong>online PDF decryption tool</strong> can quickly remove permission restrictions and restore content in the browser, suitable for various scenarios such as enterprises, educational institutions, and individual users. By providing the correct open password and performing decryption, you can improve document usability within compliance boundaries.',

  faqTitle: 'Frequently Asked Questions (FAQ)',
  faqs: [
    {
      question: 'How does the online PDF decryption tool work?',
      answer: 'This tool is based on QPDF\'s decryption capabilities. After providing the <strong>open password</strong>, it performs the <strong>--decrypt</strong> operation to remove document permission restrictions and generate a new usable PDF.'
    },
    {
      question: 'Does it support batch decryption and real-time preview comparison?',
      answer: 'Supports batch import and batch addition; after performing decryption, you can conduct <strong>real-time preview comparison</strong> (original and decrypted first pages), and provides individual download buttons and <strong>ZIP batch download</strong>.'
    },
    {
      question: 'Can this tool be used if the PDF is not encrypted?',
      answer: 'Yes. For unencrypted PDFs, the tool will directly output a file consistent with the original content for uniform process handling.'
    }
  ],

  tutorialTitle: 'How to Use the Online PDF Decryption Tool',
  steps: [
    {
      title: 'Add PDF Files',
      description: 'Upload via <strong>drag-and-drop</strong> or click to select files (supports <strong>multi-selection</strong> and <strong>batch addition</strong>); you can also paste multiple URLs at once in the "Batch Import Network PDF URLs" section.',
      note: 'It is recommended to familiarize yourself with the process using sample PDFs first.'
    },
    {
      title: 'Provide Open Password (if needed)',
      description: 'If the PDF is encrypted, please enter the <strong>open password (user password)</strong> in "Decryption Password" to perform decryption; if not encrypted, you can execute directly.',
      note: 'Incorrect passwords will cause decryption failure or preview failure.'
    },
    {
      title: 'Perform Decryption and Preview',
      description: 'After clicking "Perform Decryption", a new PDF is generated, and the original and decrypted first pages are compared in the right preview area.',
      note: 'If preview fails, the file may be corrupted or incompatible.'
    }
  ],

  successTitle: 'Completed!',
  successContent: 'You have mastered how to use the online PDF decryption tool to remove document permission restrictions and verify decryption effects.',

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
    { title: 'QPDF Official', description: 'QPDF provides powerful PDF structural processing capabilities, including encryption and decryption.' },
    { title: 'PDF.js Documentation', description: 'PDF.js is an open-source library for rendering PDFs in browsers, suitable for preview and basic information retrieval.' },
    { title: 'Adobe PDF Reference Specification', description: 'Adobe PDF reference documents provide PDF specification details and security-related definitions.' }
  ],

  coverAlt: 'Online PDF Decryption Tool Product Page Image'
}