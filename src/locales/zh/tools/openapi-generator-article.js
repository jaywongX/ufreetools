export default {
  title: "OpenAPI转TypeScript：自动化API客户端生成",
  overview: {
    title: "了解OpenAPI转TypeScript生成器",
    content: "<strong>OpenAPI转TypeScript客户端生成器</strong>是一个专门的工具，可自动将OpenAPI规范（以前称为Swagger）转换为TypeScript接口和功能完整的API客户端代码。这种转换通过确保类型安全并消除手动编写API集成代码的需求，简化了前端开发过程。<br><br>OpenAPI规范作为前端和后端服务之间的标准化契约，描述了可用的端点、请求参数、响应结构和数据模型。通过利用此生成器，开发人员可以专注于构建功能而不是维护API集成代码，同时受益于TypeScript强大的类型系统，在编译时而非运行时捕获潜在错误。"
  },
  useCases: {
    title: "OpenAPI转TypeScript生成的常见用例",
    items: [
      {
        title: "复杂API的前端开发",
        description: "在处理大型或复杂的后端API时，手动编码客户端接口变得耗时且容易出错。这个生成器创建与API规范完全匹配的准确TypeScript接口和客户端代码，确保前端和后端之间的一致性。"
      },
      {
        title: "微服务架构",
        description: "在具有多个API服务的微服务环境中，生成器便于与每个服务快速集成。随着服务的发展，只需从更新的OpenAPI规范重新生成TypeScript客户端即可保持同步。"
      },
      {
        title: "API版本迁移",
        description: "当升级到新的API版本时，为两个版本生成TypeScript客户端，以识别重大更改并在前端代码中平稳实施迁移策略。"
      },
      {
        title: "开发人员入职",
        description: "新团队成员可以通过检查生成的TypeScript接口快速了解API功能，这些接口作为具有完整类型信息的综合文档。"
      },
      {
        title: "原型开发",
        description: "在快速原型开发期间，从草稿OpenAPI规范生成TypeScript客户端，以便立即开始构建具有真实数据结构的UI组件，甚至在后端实现完成之前。"
      }
    ]
  },
  guide: {
    title: "使用OpenAPI转TypeScript生成器的分步指南",
    intro: "按照以下步骤有效地将OpenAPI规范转换为TypeScript接口和客户端代码：",
    steps: [
      {
        title: "准备您的OpenAPI规范",
        description: "确保您有一个有效的JSON或YAML格式的OpenAPI规范。该规范应定义您的API端点、请求参数、响应结构和数据模型。您可以上传文件或直接将内容粘贴到文本区域。"
      },
      {
        title: "选择生成选项",
        description: "根据您的需求配置生成选项：'导出所有模型定义'创建所有数据模型的TypeScript接口，'生成API客户端代码'生成API客户端方法，'添加注释和文档说明'在生成的代码中包含文档，以及'使用TypeScript枚举'为字符串字面量联合创建TypeScript枚举。"
      },
      {
        title: "生成TypeScript代码",
        description: "点击'生成TypeScript代码'按钮处理您的OpenAPI规范。工具将分析规范并根据您选择的选项生成TypeScript接口和客户端代码。"
      },
      {
        title: "审查生成的代码",
        description: "检查输出以确保它符合您的期望。生成的代码包括请求/响应类型的接口以及具有每个API端点方法的客户端类。"
      },
      {
        title: "复制或下载结果",
        description: "使用'复制代码'按钮将生成的TypeScript复制到剪贴板，或使用'下载代码'将其保存为.ts文件。然后，您可以将此代码集成到您的TypeScript项目中。"
      },
      {
        title: "与您的项目集成",
        description: "在您的应用程序代码中导入生成的客户端。使用您的API基础URL和任何必需的标头初始化客户端，然后使用强类型方法进行API调用。"
      },
      {
        title: "API变更时更新",
        description: "每当您的API规范发生变化时，重新生成TypeScript代码并更新您的代码库，以确保您的前端与后端API保持同步。"
      }
    ]
  },
  bestPractices: {
    title: "OpenAPI规范的最佳实践",
    intro: "遵循这些最佳实践创建高质量的OpenAPI规范，生成最佳的TypeScript代码：",
    items: [
      "为每个端点使用描述性的操作ID，以在生成的客户端中创建有意义的方法名称",
      "为模式、属性、参数和响应提供详细描述，以生成有用的TypeScript注释",
      "为模式和属性使用一致的命名约定，以创建可预测的TypeScript接口",
      "在'components'部分定义可重用组件，以避免重复并促进代码重用",
      "为所有属性指定准确的数据类型，以生成精确的TypeScript类型",
      "在OpenAPI规范中包含示例，以帮助开发人员理解预期的数据结构",
      "对具有固定可能值集的属性使用枚举值，以创建TypeScript枚举或联合类型",
      "通过使用适当的标签对相关操作进行分组，逻辑地组织端点",
      "对API进行版本控制，并清楚地指示重大更改，以便于前端迁移策略",
      "在生成TypeScript代码之前使用lint工具或验证器验证您的OpenAPI规范"
    ]
  },
  faq: {
    title: "关于OpenAPI转TypeScript生成的常见问题",
    items: [
      {
        question: "OpenAPI和Swagger有什么区别？",
        answer: "OpenAPI是规范标准的当前名称，而Swagger是其原始名称。OpenAPI 3.0+是以前称为Swagger 2.0的现代演变。此生成器支持OpenAPI 3.x和Swagger 2.0规范，尽管建议使用OpenAPI 3.x，因为它具有增强的功能和更好的TypeScript代码生成。"
      },
      {
        question: "我可以自定义生成的TypeScript代码吗？",
        answer: "是的，生成器提供了几个自定义选项：您可以选择仅导出模型定义，生成客户端代码，添加文档注释，并使用TypeScript枚举而不是字符串联合。对于更广泛的自定义，您可以手动修改生成的代码，但请注意，重新生成将覆盖这些更改。"
      },
      {
        question: "如何在生成的客户端中处理身份验证？",
        answer: "生成的客户端在其构造函数中接受自定义标头，您可以在其中提供身份验证令牌。对于更复杂的身份验证流程（如OAuth），您可能需要使用额外的逻辑扩展生成的客户端，或创建一个处理令牌刷新和其他身份验证问题的包装器。"
      },
      {
        question: "我可以将其与React、Vue、Angular或其他框架一起使用吗？",
        answer: "是的，生成的TypeScript客户端与框架无关，可以与任何JavaScript或TypeScript框架一起使用。在React中，您可能会将客户端包装在自定义钩子中；在Vue中，您可以创建组合式函数；在Angular中，您可以将客户端扩展为可注入服务。"
      },
      {
        question: "如何使用生成的客户端处理文件上传？",
        answer: "对于在OpenAPI规范中定义的文件上传（使用内容类型'multipart/form-data'），生成器会创建适当的方法签名。调用这些方法时，您需要为请求正文构造FormData对象。确保您的OpenAPI规范正确定义文件上传操作。"
      },
      {
        question: "如果我的OpenAPI规范有错误会怎样？",
        answer: "生成器将尝试识别规范中的常见问题并相应地提供错误消息。建议在生成之前使用专用验证器验证您的OpenAPI文档。规范中的错误可能导致不正确或不完整的TypeScript代码。"
      },
      {
        question: "如何保持TypeScript客户端与API更改同步？",
        answer: "每当您的API发生变化并且OpenAPI规范更新时，重新生成TypeScript客户端并在您的项目中更新它。考虑在构建流程中自动化此过程，以确保您的前端始终使用最新的API客户端代码。"
      }
    ]
  },
  integrationTips: {
    title: "集成生成的TypeScript客户端的技巧",
    intro: "一旦您生成了TypeScript客户端，请考虑这些建议以便与您的项目平稳集成：",
    items: [
      "在您的项目中创建一个专用的API客户端模块，该模块重新导出带有任何自定义配置的生成客户端",
      "使用依赖注入模式在整个应用程序中提供API客户端，使其更容易为测试进行模拟",
      "考虑为常见问题（如错误处理、日志记录和身份验证）实现请求/响应拦截器",
      "将生成的客户端方法包装在处理特定错误情况或为应用程序需求转换数据的自定义函数中",
      "将TypeScript客户端的自动生成设置为CI/CD管道的一部分，以保持前端和后端同步",
      "使用环境变量或配置文件为不同环境（开发、预发布、生产）指定API基础URL",
      "通过使用重试功能包装生成的客户端方法，为临时故障添加重试逻辑",
      "为频繁访问的数据实现请求缓存，以提高性能并减少API调用",
      "将生成的类型与状态管理库（如Redux、MobX或Vuex）结合使用，以实现类型安全的应用程序状态",
      "如果发现自己进行许多小请求，请考虑实现请求批处理或GraphQL以优化API调用"
    ]
  }
}
