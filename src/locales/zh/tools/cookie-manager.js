export default {
  name: 'Cookie管理器',
  description: '查看、创建、编辑和删除当前网站的Cookie',
  
  // 主要功能标签
  currentCookies: '当前Cookie',
  createCookie: '创建Cookie',
  importExport: '导入/导出',
  
  // Cookie列表
  noCookies: '当前网站没有Cookie',
  cookieName: '名称',
  cookieValue: '值',
  cookieDomain: '域名',
  cookiePath: '路径',
  cookieExpires: '过期时间',
  cookieSecure: '安全(Secure)',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: '操作',
  edit: '编辑',
  delete: '删除',
  save: '保存',
  cancel: '取消',
  refresh: '刷新',
  
  // 创建/编辑表单
  addCookie: '添加Cookie',
  editCookie: '编辑Cookie',
  required: '必填项',
  optional: '可选项',
  days: '天',
  hours: '小时',
  minutes: '分钟',
  cookieCreated: 'Cookie已创建',
  cookieUpdated: 'Cookie已更新',
  cookieDeleted: 'Cookie已删除',
  createError: '创建Cookie时出错',
  updateError: '更新Cookie时出错',
  deleteError: '删除Cookie时出错',
  
  // 导入/导出
  export: '导出Cookie',
  import: '导入Cookie',
  exportAs: '导出为',
  exportSuccess: 'Cookie已导出',
  importSuccess: '已导入{count}个Cookie',
  importError: '导入Cookie时出错',
  
  // 安全选项
  none: '无',
  strict: '严格',
  lax: '宽松',
  
  // 提示和说明
  domainNote: '留空表示当前域名',
  pathNote: '默认为根路径"/"',
  expiresNote: '不设置表示会话Cookie',
  secureNote: '仅通过HTTPS发送',
  httpOnlyNote: '禁止JavaScript访问',
  sameSiteNote: '跨站点请求控制',
  
  // 导入格式
  importFormat: '导入格式示例:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',
  jsonFormat: 'JSON格式',
  textFormat: '文本格式',
  invalidFormat: '无效的格式',
  
  // 文章内容
  article: {
    title: 'Cookie管理器：了解和控制网站Cookie',
    features: {
      title: '功能与应用场景',
      description: '我们的<strong>Cookie管理器</strong>工具提供了对网站Cookie的全面控制，让您能够查看、创建、编辑和删除当前网站的Cookie。这个强大的工具给予您对浏览器中存储的Cookie完全的可见性和控制权，帮助您管理在线隐私并解决网站功能问题。',
      useCasesTitle: '实际应用场景',
      useCases: {
        items: [
          '<strong>Web开发测试</strong>：无需手动编辑浏览器存储，即可测试网站在不同Cookie配置下的行为表现。',
          '<strong>网站故障排除</strong>：通过检查和修改Cookie，诊断登录问题、会话问题或其他与Cookie相关的网站故障。',
          '<strong>隐私管理</strong>：通过查看网站在Cookie中存储的信息，选择性地删除不需要的跟踪Cookie，掌控您的个人数据。',
          '<strong>会话管理</strong>：创建或修改会话Cookie，测试不同的用户状态或身份验证场景，无需反复登录和退出。',
          '<strong>跨浏览器测试</strong>：从一个浏览器导出Cookie并将其导入另一个浏览器，在不同浏览器之间复制相同的浏览状态。'
        ]
      }
    },
    faq: {
      title: '常见问题解答',
      items: [
        {
          question: 'Cookie是什么，为什么网站要使用它们？',
          answer: 'Cookie是网站存储在您浏览器中的小型数据片段。它们具有各种功能，包括记住登录信息、跟踪用户行为、存储偏好设置、维护购物车以及启用个性化体验。Cookie对许多现代网络功能至关重要，但在用于跟踪时也可能引发隐私担忧。'
        },
        {
          question: 'Cookie管理器工具与浏览器内置的Cookie设置有何不同？',
          answer: '虽然浏览器通过其设置提供基本的Cookie管理，但我们的<strong>Cookie管理器</strong>提供更精细的控制和功能。您不仅可以查看和删除Cookie（像浏览器允许的那样），还可以创建新Cookie、编辑现有Cookie、导出Cookie进行备份以及导入Cookie。这使其成为需要详细Cookie管理功能的开发人员、测试人员和注重隐私的用户的理想选择。'
        },
        {
          question: '删除Cookie安全吗？会影响我的浏览体验吗？',
          answer: '删除Cookie通常是安全的，但可能会以多种方式影响您的浏览体验。您可能会从网站登出、丢失已保存的偏好设置或需要重新创建购物车。<strong>Cookie管理器</strong>允许您选择性地删除特定Cookie，而不是清除所有Cookie，让您精确控制要保留或删除哪些浏览数据。'
        },
        {
          question: '"SameSite"和"HttpOnly"等不同的Cookie属性是什么意思？',
          answer: 'Cookie属性控制Cookie的行为和访问方式：<br>- <strong>Secure</strong>：Cookie仅通过HTTPS连接发送<br>- <strong>HttpOnly</strong>：JavaScript无法访问Cookie<br>- <strong>SameSite</strong>：控制何时随跨站请求发送Cookie（None、Lax或Strict）<br>- <strong>Domain</strong>：指定哪些域可以接收Cookie<br>- <strong>Path</strong>：将Cookie限制到网站上的特定路径<br>- <strong>Expires</strong>：设置浏览器应何时删除Cookie'
        },
        {
          question: '我可以使用此工具导入来自另一台计算机或浏览器的Cookie吗？',
          answer: '是的，<strong>Cookie管理器</strong>的导入/导出功能允许您在浏览器或设备之间传输Cookie。将您的Cookie导出为JSON或文本文件，将文件传输到另一台设备，然后使用该设备上的Cookie管理器工具导入它们。这对需要复制用户状态的开发人员或在不同计算机之间传输浏览会话特别有用。'
        }
      ]
    },
    guide: {
      title: '如何使用Cookie管理器工具',
      step1: {
        title: '查看当前Cookie',
        description: '当您打开<strong>Cookie管理器</strong>时，"当前Cookie"选项卡显示当前网站的所有Cookie。此列表显示每个Cookie的名称、值和过期日期。要查看特定Cookie的更多详细信息，请点击旁边的"编辑"按钮。要刷新列表并确保您看到最新的Cookie，请点击列表顶部的"刷新"按钮。'
      },
      step2: {
        title: '创建新Cookie',
        description: '要添加新Cookie，请点击"创建Cookie"选项卡。填写必填字段（名称和值）以及任何可选属性，如域名、路径或过期时间。根据您的需要设置安全选项，如Secure标志或SameSite属性。配置好Cookie后，点击"保存"按钮创建它。工具将确认创建成功并自动返回到Cookie列表视图。'
      },
      step3: {
        title: '编辑现有Cookie',
        description: '要修改Cookie，请在"当前Cookie"列表中找到它并点击"编辑"按钮。这将加载Cookie的详细信息到编辑表单中。对Cookie的任何属性进行所需的更改。完成后，点击"保存"更新Cookie。工具将确认更新成功。请注意，编辑Cookie实际上是创建一个具有相同名称但更新属性的新Cookie。'
      },
      step4: {
        title: '删除Cookie',
        description: '要删除Cookie，请在"当前Cookie"列表中找到它并点击"删除"按钮。将出现确认对话框以防止意外删除。确认后，Cookie将立即从您的浏览器中删除，列表将自动刷新。这使您可以完全控制网站可以在您的浏览器中存储哪些数据。'
      },
      step5: {
        title: '导入和导出Cookie',
        description: '要传输Cookie，请导航到"导入/导出"选项卡。对于导出，选择JSON格式（更好的结构）或文本格式（更好的兼容性）。点击相应的按钮下载文件。对于导入，将Cookie数据粘贴到文本区域并点击"导入"。您可以以标准文本格式或JSON格式导入Cookie。工具将确认导入成功并显示导入了多少Cookie。'
      }
    },
    conclusion: '<strong>Cookie管理器</strong>工具赋予您对浏览器Cookie的完全控制权，无论您是测试网站功能的开发人员，还是管理个人数据的隐私意识用户，或是解决网站问题的人。通过了解和主动管理Cookie，您可以增强浏览体验，同时保持对在线隐私的控制。'
  }
}; 