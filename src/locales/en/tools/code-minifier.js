export default {
  name: 'Code Minifier',
  description: 'Minify JavaScript, CSS, and HTML to reduce file size',
  options: {
    language: 'Language',
    preserveComments: 'Preserve Comments',
    preserveLineBreaks: 'Preserve Line Breaks',
    beautify: 'Beautify Instead'
  },
  languages: {
    javascript: 'JavaScript',
    css: 'CSS',
    html: 'HTML',
    json: 'JSON'
  },
  actions: {
    minify: 'Minify',
    beautify: 'Beautify',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download',
    upload: 'Upload File'
  },
  messages: {
    copied: 'Copied to clipboard!',
    minifySuccess: 'Code minified successfully',
    minifyError: 'Error minifying code',
    sizeReduction: 'Size reduced by {percent}%'
  }
} 