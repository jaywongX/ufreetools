export default {
  name: 'Markdown Editor',
  description: 'Edit and preview Markdown documents with real-time rendering',

  options: {
    mode: 'Mode',
    syntaxHighlighting: 'Syntax Highlighting',
    autoSave: 'Auto Save',
    lineNumbers: 'Line Numbers',
    spellCheck: 'Spell Check',
    wordWrap: 'Word Wrap'
  },

  modes: {
    split: 'Split View',
    edit: 'Edit Only',
    preview: 'Preview Only'
  },

  actions: {
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    heading: 'Heading',
    link: 'Link',
    image: 'Image',
    list: 'List',
    quote: 'Quote',
    code: 'Code',
    table: 'Table',
    hr: 'Horizontal Rule',
    preview: 'Preview',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download Markdown',
    downloadHTML: 'Download HTML',
    upload: 'Upload Markdown'
  },

  messages: {
    copied: 'Content copied to clipboard!',
    copyError: 'Copy failed, please copy manually',
    clearConfirm: 'Are you sure you want to clear the editor content?',
    templateConfirm: 'Applying the template will replace the current content. Continue?',
    templateApplied: 'Applied "{name}" template',
    saved: 'Document saved',
    uploadSuccess: 'Document uploaded successfully',
    uploadError: 'Error uploading document',
    wordCount: '{count} words',
    charCount: '{count} characters'
  },

  placeholder: 'Enter your Markdown content here...',

  placeholders: {
    linkText: 'Link text',
    imageAlt: 'Image description'
  },

  templates: {
    title: 'Quick Templates',
    apply: 'Apply Template',
    confirm: 'Apply Template',
    simple: {
      name: 'Simple Document',
      description: 'Includes headings, lists, quotes, etc.',
      content: `# Document Title

## Introduction
This is a simple example of a Markdown document.

## Features
- Supports headings and paragraphs
- Supports **bold** and *italic* text
- Supports ordered and unordered lists

> This is a blockquote, used to quote someone else's opinion.

## Conclusion
Markdown is a simple and easy-to-use markup language.`
    },
    readme: {
      name: 'Project README',
      description: 'Standard structure for project documentation',
      content: `# Project Name

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Project Description
Brief description of the project's main functions and purpose.

## Features
- Main feature 1
- Main feature 2
- Main feature 3

## Installation
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## Usage Example
\`\`\`javascript
// Example code
const example = new Example();
example.init();
\`\`\`

## Documentation
For more detailed documentation, please refer to [Documentation Link](docs/README.md).

## Contribution Guide
Contributions are welcome, please see [Contribution Guide](CONTRIBUTING.md).

## License
This project is released under the MIT License, see [LICENSE](LICENSE) for details.`
    },
    resume: {
      name: 'Resume',
      description: 'Personal resume template',
      content: `# Resume

## Personal Information
- **Name**: John Doe
- **Phone**: 123-456-7890
- **Email**: johndoe@email.com
- **Job Objective**: Frontend Developer

## Education
**University of XYZ** | Computer Science | September 2016 - June 2020

## Work Experience
### XYZ Tech Inc. | Frontend Developer | July 2020 - Present
- Responsible for the frontend development and maintenance of core products
- Developed enterprise management system using Vue.js, improving user experience
- Optimized frontend performance, reducing page load time by 30%

### ABC Corp. | Frontend Intern | July 2019 - June 2020
- Participated in company website redesign project
- Assisted the team with code refactoring and optimization

## Technical Skills
- **Frontend**: HTML, CSS, JavaScript, Vue.js, React
- **Backend**: Node.js, Express
- **Other Tools**: Git, Webpack, Docker

## Project Experience
### Enterprise Management System
- Developed with Vue.js + Element UI
- Implemented data visualization, permission management features
- Optimized system response speed, improved user experience

## Language Skills
- English (Fluent)
- Spanish (Basic)`
    },
    meeting: {
      name: 'Meeting Minutes',
      description: 'Meeting minutes template',
      content: `# Meeting Minutes

## Meeting Information
- **Topic**: Project Progress Discussion
- **Date**: May 15, 2023
- **Time**: 14:00 - 16:00
- **Location**: Conference Room A
- **Moderator**: Jane Manager
- **Note Taker**: John Assistant

## Attendees
- Jane Manager (Product Department)
- Mike Engineer (Development Department)
- Sarah Designer (Design Department)
- Tom Tester (Testing Department)

## Agenda
1. Review of last week's task completion
2. Discussion of this week's work plan
3. Resolution of issues in the project
4. Determination of next steps

## Discussion Content
### 1. Last Week's Task Review
- Product requirements document completed
- Design draft 60% completed
- Frontend development completed basic framework setup

### 2. This Week's Work Plan
- Design department to complete remaining design drafts
- Development department to begin core functionality development
- Testing department to prepare test cases

### 3. Issues and Solutions
- **Issue**: Data interface design unreasonable
- **Solution**: Mike Engineer to redesign interfaces and submit by Wednesday

## Action Items
| Task | Responsible Person | Deadline |
|------|-------------------|---------|
| Complete design drafts | Sarah Designer | May 17 |
| Redesign interfaces | Mike Engineer | May 18 |
| Prepare test cases | Tom Tester | May 19 |

## Next Meeting
- **Date**: May 22, 2023
- **Time**: 14:00 - 15:00`
    }
  },

  dialogs: {
    clear: {
      title: 'Clear Editor',
      message: 'Are you sure you want to clear the editor content?'
    },
    template: {
      title: 'Apply Template',
      message: 'Applying the template will replace the current content. Continue?'
    }
  },

  defaultContent: `# Welcome to Markdown Editor

This is a simple Markdown editor with real-time preview and syntax highlighting.

## Basic Syntax

### Headings
Use # symbols to denote headings:
# Heading 1
## Heading 2
### Heading 3

### Emphasis
**Bold** or __Bold__
*Italic* or _Italic_
~~Strikethrough~~

### Lists
Unordered list:
- Item 1
- Item 2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item

### Links and Images
[Link text](https://example.com)
![Image alt text](https://example.com/image.jpg)

### Code
Inline code: \`var example = "hello";\`

### Blockquotes
> This is a blockquote.

### Tables
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Horizontal Line
---

Start editing! You can use the toolbar above to quickly insert various Markdown elements.`
}; 