export default {
  name: 'JWT调试工具',
  description: '解析、验证和调试JWT令牌的在线工具',
  sections: {
    encoded: '编码的JWT',
    decoded: '解码的JWT',
    header: '头部',
    payload: '载荷',
    signature: '签名',
    verification: '验证'
  },
  actions: {
    decode: '解码',
    verify: '验证签名',
    copy: '复制',
    share: '分享令牌',
    generateToken: '生成Token',
    generateRandomToken: '随机Token',
    clear: '清空',
    generateRandomPayload: '生成随机载荷',
    generateRandomKey: '生成随机密钥',
    generateKeyPair: '生成密钥对'
  },
  messages: {
    invalidToken: '无效的JWT格式',
    copied: '已复制到剪贴板！',
    copyFailed: '复制失败，请手动复制',
    verificationSuccess: '签名验证成功',
    verificationFailed: '签名验证失败',
    keyGenerated: '密钥对生成成功',
    keyGenerationFailed: '生成密钥对失败',
    tokenGenerated: 'Token生成成功',
    tokenGenerationFailed: '生成Token失败',
    randomTokenGenerated: '随机Token生成并解析成功',
    certUploadSuccess: '证书上传成功',
    certFormatInvalid: '证书格式无效',
    certReadFailed: '证书读取失败',
    tokenFormatError: '无效的Token格式，JWT应该包含三部分并用点号分隔',
    tokenHeaderMissingAlg: 'Token头部缺少算法(alg)字段',
    tokenHeaderInvalid: 'Token头部格式无效',
    tokenVerificationFailed: 'Token格式验证失败',
    tokenExpired: 'Token已过期。过期时间：{time}',
    tokenNotEffective: 'Token尚未生效。生效时间：{time}',
    tokenIssuedInFuture: 'Token签发时间异常，签发时间在未来。签发时间：{time}',
    algorithmNotSupported: '不支持的算法',
    randomSecretGenerated: '随机密钥生成成功',
    randomSecretGenerationFailed: '生成随机密钥失败',
    randomPayloadGenerated: '已生成随机Payload',
    randomPayloadGenerationFailed: '生成随机Payload失败',
    contentCleared: '已清空所有内容',
    tokenDecodeSuccess: 'Token解析成功',
    tokenDecodeFailed: 'Token解析失败',
    pleaseInputKey: '请输入密钥',
    pleaseGenerateKeyPair: '请先生成{type}密钥对',
    pleaseInputVerificationKey: '请输入验证密钥',
    pleaseInputPublicKey: '请输入验证公钥',
    pleaseInputToken: '请输入需要验证的Token',
    payloadFormatError: 'Payload格式错误，请检查JSON格式',
    invalidTimestamp: '无效的时间戳'
  },
  placeholders: {
    secretKey: '请输入密钥',
    privateKey: '请输入或生成私钥',
    publicKey: '请输入或生成公钥',
    payload: '请输入JSON格式的Payload',
    token: '请输入或生成JWT Token',
    verificationSecretKey: '请输入验证密钥',
    verificationPublicKey: '请输入验证公钥'
  },
  labels: {
    algorithm: '算法',
    secretKey: '密钥',
    privateKey: '私钥',
    publicKey: '公钥',
    certificate: '数字证书 (可选)',
    payload: '载荷 (Payload)',
    token: 'Token',
    verificationPublicKey: '验证公钥',
    tokenResult: 'Token解析结果',
    verifyToken: '验证Token',
    tokenDecoded: '检测到Token使用 {alg} 算法签名',
    timestamp: '时间戳解析',
    issuedAt: '签发时间 (iat)',
    expiration: '过期时间 (exp)',
    notBefore: '生效时间 (nbf)',
    tokenFormat: '无内容提示',
    tokenFormatDesc: '输入或生成JWT Token后将在此显示解析结果',
    uploadCert: '拖放证书文件或点击选择',
    certName: '证书名称',
    sm3Fingerprint: 'SM3指纹 (x5t#sm3)',
    certUploadNote: '上传证书后，JWT头部将添加"x5t#sm3"字段',
    secondsTimestamp: '秒级时间戳',
    millisecondsTimestamp: '毫秒级时间戳'
  },
  buttons: {
    cancel: '取消',
    verify: '验证',
    clearCert: '清除',
    generateToken: '生成Token',
    decodeToken: '解析Token',
    verifyToken: '验证Token',
    close: '关闭'
  },
  verification: {
    success: '验证成功',
    failure: '验证失败',
    validMessage: 'Token签名验证通过，签名有效。',
    invalidMessage: 'Token签名验证失败，签名无效。'
  },
  errors: {
    noToken: '请输入需要验证的Token',
    invalidToken: '无效的Token格式',
    noSecretKey: '请提供验证密钥',
    noPublicKey: '请提供验证公钥',
    invalidSignature: '无效的签名',
    verificationFailed: 'Token验证失败'
  },
  article: {
    title: "JWT调试工具：解码、验证和调试JSON Web令牌",
    features: {
      title: "了解JWT调试",
      description: "这款<strong>JWT调试工具</strong>是一个专为开发人员和安全专业人士设计的<strong>令牌分析工具</strong>，用于检查、验证和排除JSON Web令牌(JWT)故障。这个<strong>在线JWT解码器</strong>允许您粘贴任何JWT并立即以人类可读格式查看其解码后的头部、载荷和签名组件。<br><br>除了简单的<strong>令牌解码</strong>外，该工具还提供全面的验证功能，可使用适当的密钥或公钥确认令牌的签名是否有效。这个<strong>JWT验证工具</strong>支持所有标准JWT算法，包括HS256、RS256、ES256等，确保与现代认证系统兼容。对于构建或维护基于令牌认证的应用程序的开发人员，这个<strong>JWT调试实用程序</strong>提供了关于令牌结构、过期状态和安全声明的重要见解。",
      useCases: {
        title: "JWT调试的实际应用场景",
        items: [
          "<strong>API认证故障排除</strong>：当API调用因认证错误而失败时，开发人员可以使用<strong>JWT验证工具</strong>检查令牌并识别问题，如令牌过期、签名无效或声明不正确",
          "<strong>身份提供商集成</strong>：在与OAuth或OpenID Connect服务集成过程中，<strong>令牌检查器</strong>帮助验证身份令牌是否包含预期的声明并正确签名",
          "<strong>安全审核</strong>：安全专业人员可以检查<strong>认证令牌</strong>，确保它们包含适当的权限、合理的过期时间，并遵循安全最佳实践",
          "<strong>自定义JWT生成</strong>：在实现自定义认证系统时，开发人员可以使用该工具创建和测试具有特定声明和签名算法的<strong>编码JWT令牌</strong>",
          "<strong>Bearer令牌调试</strong>：使用<strong>bearer认证</strong>的前端开发人员可以验证应用程序头部中使用的令牌是否格式正确并包含必要数据",
          "<strong>微服务认证</strong>：构建微服务架构的团队可以验证<strong>服务令牌</strong>是否在服务之间传递正确的授权信息并维护适当的安全边界"
        ]
      }
    },
    faq: {
      title: "关于JWT调试的常见问题",
      items: [
        {
          question: "将我的JWT粘贴到这个在线调试器中安全吗？",
          answer: "是的，我们的JWT调试器设计时考虑了安全性。所有令牌处理都完全在您的浏览器内使用客户端JavaScript进行，这意味着您的令牌永远不会发送到任何服务器进行解码或验证。JWT解码器不会以任何方式存储您的令牌、密钥或载荷数据。但是，作为安全最佳实践，我们建议仅使用测试令牌，而不是包含敏感信息的生产令牌。如果您正在处理高度敏感的认证系统，考虑在安全开发环境中使用本地JWT调试工具，而不是任何在线令牌验证服务。"
        },
        {
          question: "JWT中的头部、载荷和签名有什么区别？",
          answer: "JSON Web令牌由三个由点分隔的不同部分组成：头部、载荷和签名。头部通常包含令牌类型('JWT')和所使用的签名算法(如'HS256'或'RS256')。载荷包含声明或断言，这些是关于实体(通常是用户)的陈述和附加数据。常见的声明包括用户ID、过期时间和发行者。签名是通过使用头部中指定的算法将编码的头部和载荷与密钥结合创建的。该签名验证消息未被更改，并且使用某些算法时，可以验证发送者的身份。我们的令牌解码器清晰地显示所有三个部分，帮助您理解和调试您的认证令牌。"
        },
        {
          question: "如何验证我的JWT签名是否有效？",
          answer: "要使用我们的令牌验证工具验证JWT签名，在输入字段中输入您的令牌并提供适当的密钥或公钥(取决于所使用的算法)。对于基于HMAC的算法如HS256，您需要与创建令牌时使用的相同密钥。对于RSA或ECDSA算法如RS256或ES256，您需要与用于签名的私钥相对应的公钥。然后，JWT调试器将使用您提供的密钥基于头部和载荷计算签名，并将其与令牌中的签名进行比较。如果它们匹配，则签名有效，确认令牌未被篡改并确实由拥有正确私钥或密钥的受信任方签名。"
        },
        {
          question: "为什么即使使用正确的密钥，JWT验证也可能失败？",
          answer: "即使使用正确的密钥，JWT验证在我们的令牌解码器中可能失败的原因有几个。常见问题包括：令牌过期(检查载荷中的'exp'声明)，令牌尚未生效(检查'nbf'声明)，使用错误的算法(确保头部中指定的算法与您用于验证的算法匹配)，令牌篡改(即使对头部或载荷的微小更改也会导致签名验证失败)，密钥格式不正确(确保您的密钥格式正确，特别是对于RSA和ECDSA密钥)，或编码问题(如果您的密钥包含特殊字符)。JWT调试器提供详细的错误消息，帮助识别验证失败的具体原因，使排除认证令牌问题变得更容易。"
        },
        {
          question: "我可以用这个工具生成新的JWT吗？",
          answer: "是的，我们的JWT调试器包含令牌生成功能。要创建新的JWT，您可以指定所需的载荷(您想包含的声明)，选择适当的签名算法(如HS256、RS256等)，并提供必要的签名密钥。对于对称算法如HS256，您需要提供密钥。对于非对称算法如RS256，您需要提供用于签名的私钥。如果需要，该工具甚至可以帮助生成随机密钥。配置这些选项后，令牌编码器将生成一个有效的JWT，您可以将其用于测试或实现。此功能对实现基于JWT的认证并需要创建具有特定声明的示例令牌用于测试目的的开发人员特别有用。"
        }
      ]
    },
    guide: {
      title: "使用JWT调试工具的分步指南",
      steps: [
        "将您的<strong>JSON Web令牌</strong>输入到调试器顶部的令牌输入字段中。您可以粘贴一个完整的JWT(包括由点分隔的所有三个部分)，该JWT可能来自认证系统或API",
        "点击<strong>解码</strong>按钮，立即查看令牌的解码组件。JWT解码器将以格式化的JSON视图显示头部和载荷部分，便于阅读",
        "查看<strong>头部部分</strong>，其通常显示令牌类型('typ')和签名算法('alg')。此信息指示令牌是如何创建的以及应该如何验证其签名",
        "检查<strong>载荷部分</strong>，其中包含存储在令牌中的所有声明或数据。特别注意决定有效性的过期时间('exp')、签发时间('iat')和主题('sub')声明",
        "要验证令牌的签名，在指定字段中输入适当的<strong>验证密钥</strong>。对称算法(HS256)使用密钥，非对称算法(RS256/ES256)使用公钥",
        "点击<strong>验证签名</strong>按钮，检查令牌的签名是否有效。JWT验证器将指示验证是否成功或失败，以及相关详细信息",
        "要<strong>生成新令牌</strong>，点击'生成令牌'选项，以JSON格式指定所需的载荷，选择算法，提供签名密钥(或生成一个)，工具将为您创建格式正确的JWT"
      ]
    },
    conclusion: "JWT调试工具是开发人员使用现代认证系统的重要工具，提供了令牌检查、验证和生成的全面功能。通过提供对令牌结构和验证状态的清晰可见性，它有助于简化调试过程并确保JWT实现的安全性。无论您是在排除认证问题、与身份提供商集成，还是设计新的基于令牌的系统，此工具都能简化使用JWT的复杂过程。随着认证令牌继续成为Web应用程序安全的基石，在您的开发工具包中拥有一个可靠的JWT调试实用程序对于维护安全、正常运行的认证流程变得越来越有价值。"
  }
} 