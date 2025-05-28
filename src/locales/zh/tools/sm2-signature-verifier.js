export default {
  name: "SM2签名和验签",
  description: "使用SM2私钥对数据进行签名，并使用公钥验证签名，支持多种哈希算法",
  keyInput: "密钥输入",
  privateKey: "私钥（用于签名）",
  publicKey: "公钥（用于验签）",
  privateKeyPlaceholder: "请输入十六进制格式的SM2私钥",
  publicKeyPlaceholder: "请输入十六进制格式的SM2公钥",
  generateKeyPair: "生成密钥对",
  clear: "清除",
  keyGenError: "生成密钥对出错",
  hashAlgorithm: "哈希算法",
  processMode: "处理模式",
  originalData: "原始数据",
  preHashed: "预哈希",
  sign: "签名",
  verify: "验签",
  dataToSign: "待签名数据",
  dataToSignPlaceholder: "输入要签名的文本或数据",
  preHashedDataToSign: "待签名哈希值",
  preHashedDataToSignPlaceholder: "输入十六进制格式的哈希值",
  dataToVerify: "待验证数据",
  dataToVerifyPlaceholder: "输入要验证的文本或数据",
  preHashedDataToVerify: "待验证哈希值",
  preHashedDataToVerifyPlaceholder: "输入十六进制格式的哈希值",
  signatureToVerify: "待验证签名",
  signatureToVerifyPlaceholder: "输入要验证的签名",
  inputFormat: "输入格式",
  outputFormat: "输出格式",
  signatureFormat: "签名格式",
  text: "文本",
  hex: "十六进制",
  base64: "Base64",
  signature: "签名",
  copySignature: "复制签名",
  signatureCopied: "签名已复制到剪贴板",
  copyError: "复制到剪贴板时出错",
  signError: "创建签名失败",
  verifyError: "验证签名失败",
  invalidInputData: "无效的输入数据",
  unsupportedInputFormat: "不支持的输入格式",
  unsupportedHashAlgorithm: "不支持的哈希算法",
  waitingForVerification: "请输入数据和签名进行验证",
  verificationSuccess: "验证成功！签名有效。",
  verificationFailed: "验证失败！签名无效。",
  preHashedMustBeHex: "预哈希输入必须为十六进制格式",
  idParameter: "ID参数",
  idValue: "ID值",
  idPlaceholder: "输入ID值（默认：1234567812345678）",
  idDescription: "SM2算法在签名生成和验证过程中使用ID值。默认值为1234567812345678。",
  signatureComponents: "签名组件（R和S值）",
  invalidKeyFormat: "无效的密钥格式",
  invalidSignatureFormat: "无效的签名格式",
  formatError: "格式错误",
  signatureHashMismatch: "签名哈希不匹配 - 请确认数据和哈希算法与签名时使用的一致",
  copy: "复制",
  export: "导出",
  signatureExported: "签名已导出到文件",
  exportError: "导出签名时出错",
  privateKeyType: "私钥",
  publicKeyType: "公钥",
  signatureType: "签名",
  derEncodingFailed: "无法将签名编码为DER格式",
  invalidIdFormat: "无效的ID格式",
  invalidDerFormat: "无效的DER格式",
  invalidSignatureLength: "签名长度不适合DER编码",
  zValue: "预处理哈希值",
  zValueFormula: "Z值计算公式",
  showDetails: "显示详情",
  hideDetails: "隐藏详情",
  zCalculationFailed: "Z值计算失败",
  invalidPublicKeyFormat: "无效的公钥格式",
  article: {
    title: "SM2数字签名工具 - 安全在线签名生成与验证",
    introduction: {
        title: "什么是SM2数字签名？",
        p1: "SM2数字签名是中国商用密码标准的一部分，是一种密码算法。我们的<strong>SM2数字签名验证工具</strong>提供了一个用户友好的界面，使用SM2椭圆曲线算法创建和验证数字签名，该算法提供与256位RSA相当的强大安全性，同时使用更小的密钥大小。",
        p2: "这款在线SM2签名工具专为解决无需安装专业软件即可安全签名和验证数字数据的挑战而设计。无论您是在应用程序中实现SM2签名验证的开发人员，验证数字证书的安全专业人员，还是需要符合中国密码标准的企业，我们的工具都能提供高效的解决方案。",
        p3: "随着SM2加密标准在全球范围内的应用不断增加，特别是在需要遵守中国法规的地区，拥有可靠的<strong>SM2数字签名生成器和验证器</strong>对国际企业和安全专业人员至关重要。"
    },
    applications: {
        title: "SM2签名的实际应用场景",
        p1: "SM2签名验证在各行各业有众多实际应用，尤其是在数据完整性和身份验证至关重要的领域：",
        scenario1: {
        title: "金融科技与银行业",
        description: "在金融服务领域，<strong>网上银行SM2签名验证</strong>有助于保障交易安全并维持合规性。在需要符合SM密码标准的地区运营的银行使用SM2签名来认证交易请求，验证客户身份，并确保银行间通信安全。能够快速验证SM2签名确保金融文件未被篡改且来自合法来源。"
        },
        scenario2: {
        title: "政府和公共部门",
        description: "为<strong>官方文件实施安全SM2密码</strong>的政府机构依靠数字签名来验证电子记录的真实性。我们的工具支持验证数字证书、官方通信和法律文件上的签名。这对于与要求遵守国家密码标准的中国政府实体打交道的国际组织特别有价值。"
        },
        scenario3: {
        title: "跨境电商和国际贸易",
        description: "从事<strong>跨境贸易SM2数字签名验证</strong>的企业使用密码签名来保护合同、验证装运清单和认证海关文件。我们的工具使企业能够轻松实施SM2签名验证流程，无需专业的底层密码学原理知识，在保持高安全标准的同时促进更顺畅的国际业务。"
        }
    },
    tutorial: {
        title: "如何使用SM2签名工具",
        intro: "按照以下步骤指南使用我们的在线工具创建和验证SM2数字签名：",
        step1: {
        title: "步骤1：密钥管理",
        description: "首先输入您的SM2私钥（用于签名）和公钥（用于验证）。您可以粘贴各种格式（HEX、PEM、Base64或DER）的现有密钥，或通过点击\"生成密钥对\"按钮直接在工具中生成新的密钥对。为了安全起见，所有密码操作都在您的浏览器本地执行 - 您的密钥永远不会传输到我们的服务器。"
        },
        step2: {
        title: "步骤2：配置ID参数",
        description: "输入ID参数，这是SM2签名算法中使用的唯一标识符。默认值为\"1234567812345678\"，但您可以根据特定需求自定义它。您可以根据偏好以文本、HEX或Base64格式输入ID。"
        },
        step3: {
        title: "步骤3：创建签名",
        description: "在签名部分，输入要签名的数据并选择适当的输入格式（文本、HEX或Base64）。点击\"签名\"按钮生成签名。工具将显示完整签名及其组件（R和S值）。您可以选择首选的输出格式（DER、HEX、Base64或PEM），并轻松复制或导出签名。"
        },
        step4: {
        title: "步骤4：验证签名",
        description: "要验证签名，在验证部分输入原始数据和要验证的签名。为数据和签名选择适当的格式，然后点击\"验证\"。工具将立即检查签名对于给定数据和公钥是否有效，显示清晰的成功或失败消息，以及适用的详细错误信息。"
        }
    },
    specifications: {
        title: "技术规格",
        p1: "我们的SM2签名工具实现了中国国家密码管理局发布的GM/T 0003-2012标准中定义的SM2椭圆曲线数字签名算法。该工具完全符合这些标准，同时提供额外功能以便于使用。",
        p2: "主要技术特点包括：",
        feature1: "按标准要求固定使用SM3哈希算法（256位）",
        feature2: "支持多种输入格式的自定义ID参数（文本/HEX/Base64）",
        feature3: "多种签名输出格式（DER/HEX/Base64/PEM）以兼容各种系统",
        feature4: "完整的签名组件显示（R和S值）用于技术验证",
        feature5: "支持各种密钥格式（PEM/HEX/Base64/DER）实现灵活的密钥管理",
        feature6: "详细的错误报告用于故障排除验证问题"
    },
    faq: {
        title: "常见问题解答",
        q1: "SM2签名与其他数字签名算法有什么区别？",
        a1: "SM2数字签名基于椭圆曲线密码学（ECC），是中国商用密码标准的一部分。与RSA签名相比，<strong>SM2签名加密</strong>在更小的密钥大小下提供同等的安全性，使其更加高效。与ECDSA等国际标准不同，SM2使用不同的曲线，并将签名者的身份（ID）纳入签名生成过程，增加了额外的安全层。SM2对于必须遵守中国法规或在中国网络安全框架内运营的应用尤为重要。",
        
        q2: "SM2签名工具对敏感数据安全吗？",
        a2: "是的，我们的<strong>安全SM2签名验证工具</strong>使用客户端JavaScript直接在您的浏览器中执行所有密码操作。您的私钥和敏感数据永远不会离开您的设备或传输到我们的服务器。该实现遵循SM2数字签名标准（GM/T 0003-2012），并按规范要求使用SM3进行哈希处理。对于高度敏感的企业应用，我们建议在生产环境中使用任何在线工具（包括我们的工具）之前进行额外审查。",
        
        q3: "为什么ID参数在SM2签名中很重要？",
        a3: "ID参数是<strong>带自定义ID的SM2数字签名算法</strong>的独特特性，将其与其他基于ECC的签名方案区分开来。它作为签名生成过程的额外输入，本质上将签名者的身份绑定到签名上。这可以防止某些类型的攻击并增加一层认证。在大多数实现中，包括我们的工具，当不需要特定ID时，使用默认值'1234567812345678'，但组织通常使用与用户身份或系统标识符相关的自定义ID来增强安全性和可追溯性。",
        
        q4: "我可以在中国以外的国际业务中使用SM2签名吗？",
        a4: "绝对可以。虽然SM2源于中国密码标准的一部分，但<strong>SM2签名的国际采用</strong>正在增长，特别是对于在中国有业务或与中国实体有合作关系的企业。我们的工具通过支持与各种国际系统兼容的多种输入和输出格式，促进跨境密码操作。对于从事国际贸易的企业，使用SM2签名可以帮助确保符合中国监管要求，同时保持符合全球标准的强大密码安全性。",
        
        q5: "如果签名验证失败，我应该怎么做？",
        a5: "如果您遇到<strong>SM2签名验证错误</strong>，请检查以下常见问题：1）确保您使用的是与用于签名的私钥相对应的正确公钥；2）验证ID参数与签名生成期间使用的参数匹配；3）确认被验证的数据与最初签名的数据完全相同，包括格式（文本/HEX/Base64）；4）检查是否正确选择了签名格式（DER/HEX/Base64/PEM）。我们的工具提供详细的错误消息，帮助诊断特定问题。对于持续存在的问题，您可能需要重新生成签名或检查密钥对是否有效。"
    },
    related: {
        title: "相关密码学工具",
        description: "使用这些补充密码学实用工具增强您的安全工具包：",
        tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>RSA签名验证器</a> - 使用广泛采用的RSA算法创建和验证数字签名。",
        tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>哈希计算器</a> - 使用包括SM3在内的各种算法生成安全哈希值。",
        tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>证书解码器</a> - 解码和检查X.509证书，包括使用SM2密码学的证书。"
    }
    }
} 