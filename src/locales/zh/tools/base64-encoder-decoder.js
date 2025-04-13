export default {
  name: 'Base64 编码解码器',
  description: '在文本和Base64编码之间快速转换数据',
  mode: {
    title: '模式',
    encode: '编码',
    decode: '解码'
  },
  input: {
    title: '输入',
    placeholder: '输入要处理的文本...',
    clear: '清除',
    copy: '复制',
    paste: '粘贴',
    upload: '上传文件',
    dragDrop: '拖放文件到此处或点击上传',
    textOption: '文本',
    fileOption: '文件',
    hexOption: 'Hex',
    selectFile: '选中文件',
  },
  output: {
    title: '输出',
    placeholder: '结果将显示在这里...',
    copy: '复制',
    download: '下载',
    empty: '暂无输出'
  },
  options: {
    title: '选项',
    encoding: '字符编码',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: '使用URL安全编码',
    autoDecode: '自动检测并解码',
    includeDataURI: '包含Data URI前缀',
    trimWhitespace: '去除空白字符',
    preserveLineBreaks: '保留换行符',
    addImageHeader:'添加图片 Base64 头',
  },
  dataUri: {
    title: 'Data URI',
    mimeType: 'MIME类型',
    common: '常用类型',
    custom: '自定义'
  },
  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    pasteFailed: '粘贴失败',
    uploadSuccess: '文件上传成功',
    uploadFailed: '文件上传失败',
    readFailed: '文件读取失败',
    invalidBase64: '无效的Base64编码',
    invalidHex: '无效的Hex编码',
    fileTooLarge: '文件过大，请直接下载查看',
    processError: '处理过程中发生错误',
    encodeSuccess: '编码成功',
    decodeSuccess: '解码成功',
    processing: '处理中...'
  },
  mimeTypes: {
    'text/plain': '文本',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG图像',
    'image/png': 'PNG图像',
    'image/gif': 'GIF图像',
    'image/svg+xml': 'SVG图像',
    'application/pdf': 'PDF文档'
  },
  tips: {
    title: '使用提示',
    tip1: 'Base64编码可以将任何二进制数据转换为纯文本格式',
    tip2: '使用URL安全选项可去除标准Base64中的"+"和"/"字符',
    tip3: '使用Data URI前缀可直接在HTML的img和其他标签中使用编码后的数据',
    tip4: '大型文件编码会消耗更多资源，建议限制在2MB以内',
    tip5: '某些特殊字符可能需要使用特定的字符编码才能正确处理'
  },
  about: {
    title: '关于Base64编解码',
    description: 'Base64是一种基于64个可打印字符来表示二进制数据的表示方法，常用于在处理文本的场合，表示、传输、存储一些二进制数据。'
  },
  features: {
    title: '功能说明',
    multiInput: '支持文本、Hex、文件三种输入方式',
    charsetSupport: '支持UTF-8和GBK字符集解码',
    imagePreview: '支持图片预览（小于1MB的图片文件）',
    fileDownload: '支持多种格式文件下载（默认PDF格式）',
    chunkProcessing: '大文件分块处理，实时显示处理进度',
    autoDetect: '自动识别和预览图片类型'
  },
  notes: {
    title: '注意事项',
    sizeIncrease: 'Base64编码会使数据量增加约33%',
    chunkProcessing: '大文件处理采用分块处理，进度条分两阶段显示',
    largeFiles: '10MB以上文件仅支持下载查看，不显示文本内容',
    fileInput: '建议大文件使用文件方式输入，避免在文本框中粘贴'
  },
  fileTypeLabel: {
    pdf: 'PDF文档',
    txt: '文本文件',
    jpg: 'JPG图片', 
    png: 'PNG图片', 
    zip: 'ZIP压缩包',
    bin: '二进制文件',
  },
  article: {
    title: "Base64编码解码器：转换和保护您的数据",
    features: {
      title: "了解Base64编码和解码",
      description: "<strong>Base64编码解码器</strong>是一种将二进制数据和ASCII文本格式相互转换的必备工具。这款强大的<strong>数据编码工具</strong>可以将任何类型的二进制信息转换为仅使用64个可打印ASCII字符（A-Z、a-z、0-9、+、/）的安全文本表示形式，非常适合通过基于文本的系统传输数据。<br><br>我们的<strong>Base64转换工具</strong>支持多种输入方法，包括文本、文件和十六进制输入，同时提供字符编码（UTF-8和GBK）的高级选项。在<strong>Base64解码</strong>过程中，该工具能自动检测图像、文档和归档文件等文件类型，为图像提供预览功能，并支持多种格式的文件下载。对于大文件，我们的<strong>Base64编码器</strong>实现了高效的分块处理，并提供实时进度可视化。",
      useCases: {
        title: "Base64编码的常见应用场景",
        items: [
          "通过数据URI直接将图像等二进制文件嵌入到HTML、CSS或JavaScript代码中，实现无需外部资源的独立网页",
          "通过电子邮件系统或纯文本协议安全传输二进制数据，避免非文本字符可能导致的数据损坏",
          "在仅支持文本格式的cookies、localStorage或其他Web存储机制中存储复杂的数据结构",
          "编码身份验证凭证或API令牌，用于HTTP头部的安全传输（基本认证）",
          "转换二进制文件附件，以便包含在XML、JSON或其他基于文本的数据交换格式中",
          "创建URL安全的数据字符串用于URL参数，避免需要URL编码的特殊字符"
        ]
      }
    },
    faq: {
      title: "关于Base64编码的常见问题",
      items: [
        {
          question: "为什么Base64编码后的数据比原始数据大？",
          answer: "Base64编码会使数据大小增加约33%，因为它使用4个字节的ASCII文本来表示每3个字节的二进制数据。这是Base64编码的基本特性，因为它每个字符只使用6位（2^6 = 64个可能的值）而不是8位。这种大小增加是获得跨系统文本兼容性的不可避免的折衷，尤其是在只支持ASCII字符的系统中。对于大文件，在规划存储或传输需求时应考虑这种大小增加。"
        },
        {
          question: "标准Base64和URL安全Base64编码有什么区别？",
          answer: "标准Base64编码使用'+'和'/'字符，这些字符在URL中具有特殊含义，当编码数据包含在URL参数中时可能会导致问题。URL安全Base64编码将这些字符分别替换为'-'和'_'，使编码字符串可以安全地用于URL而无需额外转义。我们的Base64编码器包括生成URL安全输出的选项，允许您根据编码数据的使用位置选择适当的编码格式。"
        },
        {
          question: "Base64编码可以用于数据加密或安全吗？",
          answer: "不能，Base64编码不是加密，不提供数据安全性或机密性。它只是一种将二进制数据转换为文本格式的数据编码方案。Base64编码可以被任何人使用广泛可用的工具（包括我们的Base64解码器）轻松解码。如果需要数据机密性，您应该在Base64编码之前使用适当的加密算法（如AES、RSA）。Base64主要用于兼容性，而非安全性。"
        },
        {
          question: "如何识别Base64编码的文本？",
          answer: "Base64编码的文本通常具有以下特征：它仅由字母（A-Z、a-z）、数字（0-9）和通常是字符'+'和'/'（或URL安全变体的'-'和'_'）组成；长度始终是4个字符的倍数（有时在末尾用'='填充）；它通常看起来像一个没有自然单词模式的随机字符串。我们的Base64解码器包括验证功能，可在尝试解码前验证输入是否为有效的Base64。"
        },
        {
          question: "如果我的Base64字符串缺少填充字符会发生什么？",
          answer: "Base64编码有时会在末尾添加填充字符('=')，以确保字符串长度是4的倍数。虽然标准Base64规范要求这种填充，但许多现代Base64解码器（包括我们的）可以处理缺少填充的Base64字符串，方法是根据字符串长度自动计算正确的填充。但是，为了与所有Base64解码器实现最大兼容性，在生成Base64编码数据时最好包含适当的填充。"
        }
      ]
    },
    guide: {
      title: "使用Base64编码解码器的步骤指南",
      steps: [
        "通过点击工具界面顶部的'编码'或'解码'按钮选择所需的操作模式",
        "对于编码，选择您的输入方式：'文本'用于纯文本输入，'文件'用于上传二进制文件，或'Hex'用于十六进制字符串表示",
        "如果编码文件，您可以选择勾选'添加图片Base64头'，以包含适当的数据URI前缀，方便在Web环境中直接使用",
        "对于解码，选择'文本'用于Base64字符串输入或'文件'用于上传包含Base64数据的文本文件",
        "解码时，您可以从下拉菜单中选择所需的字符编码（UTF-8或GBK），以正确处理国际字符",
        "根据所选输入方法输入数据或上传文件",
        "点击'编码'或'解码'按钮处理数据 - 结果将显示在下方的输出字段中",
        "对于解码的图像，使用'显示图片'切换预览结果，或使用下载选项将解码内容保存为您喜欢的格式的文件"
      ]
    },
    conclusion: "Base64编码解码器是一个多功能工具，适用于需要在仅支持文本的系统间传输数据的各种场景。无论您是将图像嵌入CSS的Web开发人员，通过文本协议发送二进制数据的系统工程师，还是只需要解码您遇到的Base64字符串，这个工具都能提供高效的解决方案，并具有满足您特定需求的高级选项。通过支持多种输入方法、字符编码和文件格式，我们的Base64工具有助于在当今多样化的计算环境中连接二进制和基于文本的系统。"
  }
} 