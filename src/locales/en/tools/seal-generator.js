export default {
  name: 'Seal Generator',
  description: 'Create customized digital seals and stamps for documents and designs',
  
  // Main interface
  text: 'Seal Text',
  textPlaceholder: 'Enter surrounding text',
  centerText: 'Center Text',
  centerTextPlaceholder: 'Enter center text or symbol',
  font: 'Font',
  shape: 'Shape',
  size: 'Size',
  color: 'Color',
  generate: 'Generate Seal',
  download: 'Download Image',
  reset: 'Reset',
  preview: 'Preview',
  previewPlaceholder: 'Click "Generate Seal" button to preview',
  bottomText: 'Bottom Text',
  bottomTextPlaceholder: 'Enter bottom text',
  centerSymbol: 'Center Symbol',
  centerImage: 'Upload Center Image',
  template: 'Seal Template',
  centerSymbolSize: 'Center Symbol Size',
  exportFormat: 'Export Format',
  lineWidth: 'Line Thickness',
  defaultSealText: 'Company Name',
  defaultBottomText: 'Official Seal',
  width: 'Width',
  height: 'Height',
  agingEffect: 'Aging Effect',
  customColor: 'Custom Color',
  

  // Font options
  fonts: {
    simsun: 'SimSun',
    kaiti: 'KaiTi',
    simhei: 'SimHei',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },
  
  // Shape options
  shapes: {
    circle: 'Circle',
    ellipse: 'Ellipse',
    square: 'Square'
  },
  
  // Color options
  colors: {
    red: 'Red',
    darkRed: 'Dark Red',
    blue: 'Blue',
    navy: 'Navy Blue',
    green: 'Green',
    darkGreen: 'Dark Green',
    purple: 'Purple',
    magenta: 'Magenta',
    brown: 'Brown',
    black: 'Black',
    custom: 'Custom Color'
  },
  colorHex: 'Hex Color Value',
  
  // How to use guide
  howToUse: 'How to Use',
  instructions: {
    step1: 'Enter the text you want to display around the seal, such as company name or personal name',
    step2: 'Choose center text or symbol, like a star, logo, or other symbol',
    step3: 'Adjust the seal shape, size, and color to preview the effect',
    step4: 'When satisfied, click the "Download Image" button to save your custom seal'
  },
  
  // Article section
  article: {
    title: "Seal Generator: Easily Create Digital Seal Images",
    intro: {
      title: "Introduction to the Seal Generator and Its Applications",
      p1: "<b>The Seal Generator tool</b> is a practical utility for creating digital seal images online, without requiring any software installation. You can design and generate various types of seals directly in your browser. Whether it's a company seal, personal stamp, or decorative emblem, they can all be customized through simple operations. This tool is particularly suitable for scenarios requiring seals on electronic documents and can also be used for designing logos, brand identities, or artistic creations.",
      p2: "In practical applications, <b>digital seals are widely used in various scenarios</b>. Businesses can create electronic seals with company names for electronic contracts and document signing; designers can create various styles of seals as elements of brand identity; teachers can make personalized seals for praising students' work; and individual users can create personalized signature seals to add formality and personal style to documents. The Seal Generator makes these applications simple and quick, requiring no professional design skills.",
      p3: "<b>Compared to traditional seal making</b>, the online Seal Generator offers clear advantages: First, it's completely free, eliminating the costs of physical seal production; Second, the generation process is instantaneous, without waiting for physical production and delivery time; Third, you can adjust the design and generate new versions at any time, offering high flexibility; Finally, the generated digital seals can be easily applied to various electronic documents. These features make the Seal Generator an ideal choice for the digital age, meeting various seal needs in modern work and life."
    },
    tutorial: {
      title: "How to Use the Seal Generator",
      intro: "Here is a detailed step-by-step guide to creating custom seals using the Seal Generator:",
      step1: {
        title: "Step 1: Set Up Seal Text",
        description: "First, enter the text you want to display around the seal in the 'Seal Text' input field. This is typically a company name, department name, or personal name. The text length should be kept within 20 characters to ensure clear display on the seal. Then enter the text or symbol you want to display in the center of the seal in the 'Center Text' input field, such as a star, the word 'Seal', or other symbolic characters."
      },
      step2: {
        title: "Step 2: Choose Font and Shape",
        description: "Select a font that suits your seal style from the font dropdown menu. Fonts like SimSun and KaiTi are suitable for traditional-style seals, while SimHei and Microsoft YaHei are more modern. Then choose the seal shape. Traditional corporate seals are usually circular, while personal seals are often square. Different shapes will affect the overall appearance and text arrangement of the seal."
      },
      step3: {
        title: "Step 3: Adjust Size and Color",
        description: "Use the size slider to adjust the seal size, choosing an appropriate size according to your usage needs. For standard use cases, 200-300 pixels is recommended. Then select the seal color from the color options. Traditional seals are usually red, but you can also choose blue, green, purple, or black to meet different design needs or match corporate visual identity."
      },
      step4: {
        title: "Step 4: Generate and Download",
        description: "After completing the settings, click the 'Generate Seal' button to view the preview effect. If the effect is not ideal, you can adjust the settings and regenerate at any time. When satisfied, click the 'Download Image' button to save the seal as a PNG format image file. This file has a transparent background and can be directly applied to various documents, designs, or websites. You can also click the 'Reset' button at any time to restore default settings and start designing again."
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "What is the quality of the generated seal image? Can it be used for printing?",
      a1: "<b>The seal images created by the Seal Generator are in PNG format</b>, featuring transparent backgrounds and crisp edges. The default 300-pixel image is suitable for on-screen display and general printing needs. If you need it for high-quality printing, it's recommended to adjust the size to 400-500 pixels. The generated images can be inserted into Word documents, PDF files, design software, or printed materials. Since they're vector-drawn, they won't show noticeable pixelation even when enlarged, maintaining the clarity and professional appearance of the seal.",
      
      q2: "Do the seals generated by this tool have legal effect?",
      a2: "<b>It needs to be clarified that the digital seals generated by this tool are only for design, decoration, and informal occasions</b> and do not have legal effect. In many countries, legally valid electronic seals need to be issued by electronic certification service agencies with relevant qualifications and comply with relevant laws and regulations. If you need electronic seals with legal effect, it's advisable to consult professional electronic certification service providers or legal advisors. The seals generated by this tool are suitable for internal documents, design prototypes, educational materials, or personal creations that don't require legal certification.",
      
      q3: "How can I add special symbols or patterns to the generated seal?",
      a3: "<b>In the center text field, you can input various Unicode symbols and special characters</b>, such as ★, ✓, ❤, etc. These symbols will be displayed in the center of the seal. Currently, the tool supports single or a few characters as the center pattern. If you want more complex patterns, you can generate a basic seal first, then use image editing software like Photoshop or online tools like Canva for further editing, adding custom patterns or logos. In future versions, we plan to add more preset patterns and the ability to upload custom images to provide richer seal design options.",
      
      q4: "What if the seal text appears incomplete or overlapping?",
      a4: "<b>Text display issues are usually related to text length and seal size</b>. If you find the text incomplete or overlapping, you can try the following solutions: First, consider reducing the number of characters in the text, especially when the seal is small; Second, increase the seal size to provide more display space for the text; Third, try different fonts, as some fonts may be more readable at small sizes; Finally, if the surrounding text is too long, you can move part of the content to the center position, or use abbreviated versions. Through these adjustments, most display issues can be effectively resolved, presenting a clear and attractive seal effect."
    },
    relatedTools: {
      title: "Related Tools",
      description: "Here are other useful tools related to the Seal Generator that can help you complete more design and document processing tasks:",
      tool1: {
        name: "QR Code Generator",
        url: "https://www.ufreetools.com/tool/qr-code-generator",
        description: "Create custom QR codes with logos and style adjustments, suitable for marketing, business cards, and product packaging."
      },
      tool2: {
        name: "Image Cropper",
        url: "https://www.ufreetools.com/tool/image-cropper",
        description: "Easily crop and resize images to perfectly match various application scenarios."
      },
      tool3: {
        name: "SVG Optimizer",
        url: "https://www.ufreetools.com/tool/svg-optimizer",
        description: "Optimize SVG image code, reduce file size, and improve webpage loading speed."
      }
    },
    resources: {
      title: "More Resources on Seal Design",
      resource1: {
        name: "The EU Electronic Identity and Trust Services Regulation (eIDAS)",
        url: "https://eur-lex.europa.eu/eli/reg/2014/910/oj",
        description: "The legal framework of the European Union on electronic signatures and electronic seals clearly defines the legal effect and technical requirements of electronic seals."
      },
      resource2: {
        name: "The Electronic Signature Act of the United States (ESIGN Act）",
        url: "https://www.ecfr.gov/cgi-bin/text-idx?SID=8e7f4f5d9b7f4f5d9b7f4f5d9b7f4f5d&mc=true&node=pt15.1.11&rgn=div5",
        description: "The legal norms in the United States regarding electronic signatures and electronic seals, although not explicitly stipulating a separate regulation for electronic seals, documents of digital seals can usually serve as valid legal evidence."
      }
    }
  },
  templates: {
    custom: 'Custom',
    company: 'Company Seal',
    contract: 'Contract Seal',
    finance: 'Finance Seal',
    legal: 'Legal Seal',
    personal: 'Personal Seal'
  }
}; 