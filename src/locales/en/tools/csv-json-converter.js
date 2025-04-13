export default {
  name: 'CSV to JSON Converter',
  description: 'Convert CSV data to JSON format with customizable options',
  
  options: {
    delimiter: 'Delimiter',
    quote: 'Quote Character',
    header: 'First row as header',
    dynamicTyping: 'Dynamic Typing',
    dynamicTypingDescription: 'Convert numeric strings to numbers, "true/false" to booleans, etc.',
    skipEmptyLines: 'Skip empty lines',
    comments: 'Comment character',
    outputFormat: 'Output Format',
    indentation: 'Indentation',
    encoding: 'Encoding',
    newline: 'Newline Character',
    title: 'Conversion Options'
  },
  
  delimiters: {
    comma: 'Comma (,)',
    semicolon: 'Semicolon (;)',
    tab: 'Tab (\\t)',
    pipe: 'Pipe (|)',
    custom: 'Custom'
  },
  
  formats: {
    array: 'Array of Objects',
    arrayOfArrays: 'Array of Arrays',
    keyed: 'Key-Value Object',
    nested: 'Nested Object'
  },
  
  preview: {
    input: 'Input...',
    output: 'Output...',
    rawCsv: 'Raw CSV',
    parsedCsv: 'Parsed CSV',
    jsonOutput: 'JSON Output',
    firstRows: 'First {count} Rows',
    showAll: 'Show All'
  },
  
  actions: {
    convert: 'Convert',
    copy: 'Copy JSON',
    download: 'Download JSON',
    clear: 'Clear',
    uploadCsv: 'Upload CSV',
    swap: 'Swap Input/Output',
    loadExample: 'Load Example',
    clearInput: 'Clear Input',
    formatOutput: 'Format Output',
    copyResult: 'Copy Result',
    downloadResult: 'Download Result',
    paste: 'Paste',
    showOptions: 'Show Options',
    hideOptions: 'Hide Options',
    uploadJson: 'Upload JSON'
  },
  
  results: {
    rowsProcessed: 'Processed {count} Rows',
    conversionComplete: 'Conversion Complete',
    copied: 'Copied to Clipboard',
    downloaded: 'Downloaded',
    error: 'Error'
  },
  
  errors: {
    noData: 'No CSV data to convert',
    invalidCsv: 'Invalid CSV format',
    parsingFailed: 'Parsing failed: {error}',
    missingHeader: 'Missing header row',
    invalidJson: 'Invalid JSON format',
    formatFailed: 'Formatting failed: {error}',
    copyFailed: 'Copy failed, please copy manually',
    downloadFailed: 'Download failed',
    pasteError: 'Unable to paste from clipboard',
    conversionFailed: 'Conversion failed'
  },
  
  conversion: {
    title: 'Conversion Direction',
    csvToJson: {
      title: 'CSV to JSON',
      delimiterLabel: 'Delimiter',
      headerLabel: 'First row as header',
      dynamicTypingLabel: 'Dynamic Typing',
      skipEmptyLinesLabel: 'Skip empty lines',
      convertButton: 'Convert CSV to JSON'
    },
    jsonToCsv: {
      title: 'JSON to CSV',
      delimiterLabel: 'Delimiter',
      headerLabel: 'Include header row',
      quotesLabel: 'Add quotes to all fields',
      nestedModeLabel: 'Select nested data processing mode',
      flat: 'Flatten processing',
      stringify: 'Convert to string',
      ignore: 'Ignore processing',
      convertButton: 'Convert JSON to CSV'
    }
  },
  
  stats: {
    processed: 'Processed Data Rows',
    fields: 'Number of Fields/Columns',
    inputSize: 'Input Size Before Conversion',
    outputSize: 'Output Size After Conversion',
    title: 'Conversion Statistics'
  },
  
  messages: {
    copied: 'Copied to Clipboard',
    download: 'Downloaded',
    error: 'Error'
  },
  
  formatBytes: {
    bytes: 'Bytes',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  },
  
  article: {
    title: "CSV to JSON Converter: Data Format Transformation Made Simple",
    features: {
      title: "Understanding CSV to JSON Conversion",
      description: "The <strong>CSV to JSON converter</strong> is a powerful tool designed to transform data between <strong>CSV format</strong> (Comma-Separated Values) and <strong>JSON format</strong> (JavaScript Object Notation). This bidirectional <strong>data converter</strong> enables seamless transformation of tabular data into structured JSON objects and vice versa.<br><br>Our <strong>CSV JSON tool</strong> offers customizable options to handle various <strong>data formats</strong>, including different delimiters (comma, semicolon, tab, pipe), header management, and intelligent <strong>data type detection</strong>. For complex JSON structures, the tool provides options to flatten nested objects or convert them to strings, making it a versatile solution for <strong>data transformation</strong> tasks across different applications and workflows.",
      useCases: {
        title: "Common Applications for CSV JSON Conversion",
        items: [
          "Data analysts converting spreadsheet exports to JSON for data visualization tools or APIs",
          "Developers preparing data for web applications that require JSON data structures",
          "Database administrators migrating data between systems with different format requirements",
          "API developers transforming CSV data exports to JSON format for RESTful API consumption",
          "Data scientists converting experimental results between spreadsheet formats and code-friendly JSON structures",
          "Business analysts preparing CSV reports from accounting or CRM systems for web-based dashboards using JSON"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about CSV to JSON Conversion",
      items: [
        {
          question: "What is the difference between CSV and JSON formats?",
          answer: "CSV (Comma-Separated Values) is a simple tabular format where data is organized in rows and columns, separated by delimiters (typically commas). It's flat, lightweight, and commonly used for spreadsheets. JSON (JavaScript Object Notation) is a hierarchical, structured data format that supports nested objects and arrays. JSON can represent more complex data relationships and is the standard format for web APIs and JavaScript applications."
        },
        {
          question: "How does the tool handle nested JSON when converting to CSV?",
          answer: "Our CSV JSON converter provides three options for handling nested JSON objects: 'Flatten' converts nested properties into dot-notation column names (e.g., 'user.name'), 'Stringify' converts the entire nested object into a string representation, and 'Ignore' excludes nested objects from the conversion. These options give you flexibility based on your specific data transformation needs."
        },
        {
          question: "Can the CSV to JSON converter handle different delimiters in CSV files?",
          answer: "Yes, our data converter supports multiple delimiter options including commas, semicolons, tabs, and pipe characters. This flexibility allows you to work with various CSV format variations from different systems or regions. Simply select the appropriate delimiter in the options panel before conversion."
        },
        {
          question: "How does dynamic typing work in the CSV to JSON conversion?",
          answer: "Dynamic typing automatically detects and converts data types in your CSV. When enabled, string values that look like numbers (e.g., '42') are converted to actual number types, 'true'/'false' strings become boolean values, and empty fields can be converted to null values. This creates more usable JSON data with proper data types rather than treating everything as strings."
        },
        {
          question: "How large can my CSV or JSON files be for this converter?",
          answer: "The CSV JSON converter processes data directly in your browser, so file size limitations depend on your device's memory. For optimal performance, we recommend files under 5MB, though modern browsers can handle larger files. For very large datasets, consider splitting files into smaller chunks or using server-based conversion tools."
        }
      ]
    },
    guide: {
      title: "How to Use the CSV to JSON Converter",
      steps: [
        "Choose the conversion direction: 'CSV to JSON' or 'JSON to CSV' based on your source data format",
        "Click 'Show Options' to configure conversion settings like delimiters, headers, and special handling rules",
        "For CSV to JSON, select appropriate delimiter (comma, semicolon, tab, etc.) and check 'First row as header' if your CSV includes column headers",
        "For JSON to CSV, configure how nested objects should be handled (flatten, stringify, or ignore) and whether to add quotes around all field values",
        "Input your data by pasting it into the input field or clicking 'Load Example' to see how the converter works with sample data",
        "Click the 'Convert' button to perform the data transformation between CSV and JSON formats",
        "Review the conversion statistics and the output result, then use the 'Copy Result' or 'Download Result' buttons to save your transformed data"
      ]
    },
    conclusion: "The CSV to JSON converter is an essential tool for data professionals who regularly work with different data formats. By simplifying the transformation process between tabular CSV data and structured JSON objects, this tool saves time and reduces errors in data processing workflows. Whether you're preparing data for API integration, transforming exports from spreadsheet applications, or converting between format requirements of different systems, this converter provides a flexible, browser-based solution for your data transformation needs."
  }
}