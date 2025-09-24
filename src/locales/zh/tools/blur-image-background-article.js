export default {
  title: '背景虚化模糊工具：在线 Blur Image Background 一键专业景深效果',
  functionTitle: '什么是背景虚化模糊工具及其用途？',
  intro: '本工具是一款纯前端的<strong>在线背景虚化模糊工具</strong>（Blur Image Background）。它结合 WebGL 滤镜与人体分割算法，实现高斯模糊、镜头景深、运动模糊、径向模糊与<b>专业相机级背景虚化</b>。支持批量处理与多格式导出，让你在浏览器中快速获得干净背景与突出主体的照片，适合电商主图、证件照、社交媒体封面等场景。',
  useCasesTitle: '背景虚化的常见应用场景',
  useCases: [
    '电商主图去干扰背景，突出产品主体',
    '人像照片背景虚化，获得专业景深效果',
    '证件照或职场头像，替换为纯色或渐变背景',
    '社交媒体封面与短视频封面图快速美化',
    '演示文稿与海报设计的背景统一处理',
    '旅游照片背景模糊以保护隐私与提升审美',
    '活动合影背景模糊并批量导出',
    'UGC 内容快速生成柔焦与径向聚焦效果'
  ],
  tipTitle: '专业提示：',
  tipContent: '若用于人像主体，请开启“启用前景分割”并适当增加“边缘羽化”，可显著减少头发边缘锯齿。对于画质要求高的图片，优先导出 PNG 或 WebP 格式。',
  conclusion: '<strong>背景虚化模糊工具</strong>通过智能分割与多种模糊算法，有效解决“背景杂乱”“主体不突出”的痛点。无论是产品摄影、人像写真还是社交内容制作，在线完成背景虚化都能显著提升视觉聚焦与专业感。',
  faqTitle: '常见问题解答',
  faqs: [
    {
      question: '在线背景虚化模糊工具如何实现专业相机景深效果？',
      answer: '本在线背景虚化工具结合 MediaPipe 前景分割与 WebGL 滤镜，通过对背景区域施加高斯/镜头/径向/运动模糊，实现与专业相机类似的景深过渡与柔焦表现。'
    },
    {
      question: '背景替换支持哪些方式（纯色/渐变/图片）？',
      answer: '工具支持纯色背景、线性渐变背景与图片背景三种模式，并可调节背景透明度与混合模式，满足电商主图、证件照与品牌统一风格等需求。'
    },
    {
      question: '如何保证导出画质并控制文件大小？',
      answer: '可选择 PNG/JPG/WebP 等格式，并通过质量滑块与尺寸预设控制导出大小。PNG 与 WebP 更适合对画质要求高的背景虚化场景。'
    },
    {
      question: '批量处理与页面排序如何使用？',
      answer: '可一次导入多图，使用范围选择与勾选控制需要处理的“页面”，支持上移/下移排序，并能跳过空白页自动过滤无效图片。'
    },
    {
      question: '是否需要上传到服务器，隐私如何保障？',
      answer: '所有背景虚化模糊处理均在浏览器端本地完成，不会上传到服务器，确保图片隐私安全。'
    }
  ],
  tutorialTitle: '如何使用背景虚化模糊工具',
  steps: [
    {
      title: '上传或导入图片',
      description: '拖放或点击上传本地图片，亦可粘贴剪贴板图片、开启摄像头拍摄，或通过 URL 导入网络图片。支持 PNG、JPG、WEBP、BMP 等格式。',
      note: '可一次导入多张图片进行批量背景虚化。'
    },
    {
      title: '选择模糊类型与参数',
      description: '在“模糊类型”中选择高斯、镜头、运动或径向等，并通过半径、角度、中心点、焦点带宽等滑块微调效果。',
      note: '勾选“显示前后对比”可以实时比较背景虚化前后。'
    },
    {
      title: '启用前景分割与背景设置',
      description: '开启“启用前景分割”提升主体边缘质量，调高“边缘羽化”可获得更自然的过渡。在“背景设置”选择纯色、渐变或图片背景，必要时调整透明度与混合模式。',
      note: '当选择“保留原始背景”时，仅对背景区域施加模糊，主体保持清晰。'
    },
    {
      title: '尺寸与质量',
      description: '在“输出尺寸与质量”中选择社交媒体预设或自定义尺寸，设置 JPG/WebP 质量与缩放百分比。如需打印，可提高 DPI 并按比例导出更高像素。',
      note: 'PNG 与 WebP 更适合保留细节的背景虚化场景。'
    },
    {
      title: '导出与批量下载',
      description: '为每张图片选择导出格式，点击“下载”保存；多图可使用“批量下载 (ZIP)”一次性导出全部背景虚化结果。',
      note: '处理全部在本地浏览器完成，图片不会上传服务器。'
    },
    {
      title: '页面控制',
      description: '通过勾选、范围输入和上移/下移对“页面”排序，开启“跳过空白页”自动过滤亮度方差过低的无效图片。',
      note: '范围示例：1-3,5,7-9。'
    }
  ],
  successTitle: '恭喜！',
  successContent: '你已经学会使用我们的背景虚化模糊工具，实现专业相机级别的景深与柔焦效果，适用于多种创作与商务场景。',
  relatedToolsTitle: '您可能感兴趣的相关工具',
  relatedTools: [
    {
      name: '图片压缩器',
      description: '在不明显损失质量的情况下减小图像文件大小。',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: '图片调整器',
      description: '将图像调整为特定尺寸或按百分比缩放。',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: '印章生成器',
      description: '在线制作各类印章图片，生成公司公章、私章等数字印章。',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: '二维码生成器',
      description: '为URL、文本、联系信息等创建自定义二维码。',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: '参考资源',
  references: [
    {
      name: 'MediaPipe Selfie Segmentation',
      description: 'Google 提供的人像前景分割模型与用法',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: '基于 WebGL 的实时图像特效库',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: '快速可控的画布模糊算法，适合作为降级方案与羽化处理',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}