export default {
  title: "OpenAPI to TypeScript: Automating API Client Generation",
  overview: {
    title: "Understanding OpenAPI to TypeScript Generator",
    content: "The <strong>OpenAPI to TypeScript Client Generator</strong> is a specialized tool that automatically converts OpenAPI specifications (formerly known as Swagger) into TypeScript interfaces and fully functional API client code. This transformation streamlines frontend development by ensuring type safety and eliminating the need to manually code API integrations.<br><br>OpenAPI specifications serve as a standardized contract between your frontend and backend services, describing available endpoints, request parameters, response structures, and data models. By leveraging this generator, developers can focus on building features rather than maintaining API integration code, while benefiting from TypeScript's strong typing system to catch potential errors at compile time instead of runtime."
  },
  useCases: {
    title: "Common Use Cases for OpenAPI to TypeScript Generation",
    items: [
      {
        title: "Frontend Development for Complex APIs",
        description: "When working with large or complex backend APIs, manually coding client interfaces becomes time-consuming and error-prone. This generator creates accurate TypeScript interfaces and client code that perfectly matches your API specification, ensuring consistency between frontend and backend."
      },
      {
        title: "Microservices Architecture",
        description: "In microservices environments with multiple API services, the generator facilitates quick integration with each service. As services evolve, simply regenerate the TypeScript client from updated OpenAPI specs to stay in sync."
      },
      {
        title: "API Version Migration",
        description: "When upgrading to a new API version, generate TypeScript clients for both versions to identify breaking changes and smoothly implement migration strategies in your frontend code."
      },
      {
        title: "Developer Onboarding",
        description: "New team members can quickly understand API capabilities by examining the generated TypeScript interfaces, which serve as comprehensive documentation with full type information."
      },
      {
        title: "Prototype Development",
        description: "During rapid prototyping, generate TypeScript clients from draft OpenAPI specs to immediately start building UI components with realistic data structures, even before the backend implementation is complete."
      }
    ]
  },
  guide: {
    title: "Step-by-Step Guide to Using the OpenAPI to TypeScript Generator",
    intro: "Follow these steps to effectively convert your OpenAPI specification into TypeScript interfaces and client code:",
    steps: [
      {
        title: "Prepare Your OpenAPI Specification",
        description: "Ensure you have a valid OpenAPI specification in JSON or YAML format. The specification should define your API endpoints, request parameters, response structures, and data models. You can either upload a file or paste the content directly into the text area."
      },
      {
        title: "Choose Generation Options",
        description: "Configure the generation options according to your needs: 'Export Schemas' to create TypeScript interfaces for all data models, 'Generate Client Code' to produce API client methods, 'Add Comments' to include documentation in the generated code, and 'Use Enums' to create TypeScript enums for string literal unions."
      },
      {
        title: "Generate TypeScript Code",
        description: "Click the 'Generate TypeScript Code' button to process your OpenAPI specification. The tool will analyze the specification and produce TypeScript interfaces and client code based on your selected options."
      },
      {
        title: "Review the Generated Code",
        description: "Examine the output to ensure it aligns with your expectations. The generated code includes interfaces for request/response types and a client class with methods for each API endpoint."
      },
      {
        title: "Copy or Download the Result",
        description: "Use the 'Copy Code' button to copy the generated TypeScript to your clipboard, or 'Download Code' to save it as a .ts file. You can then integrate this code into your TypeScript project."
      },
      {
        title: "Integrate with Your Project",
        description: "Import the generated client in your application code. Initialize the client with your API base URL and any required headers, then use the strongly-typed methods to make API calls."
      },
      {
        title: "Update When API Changes",
        description: "Whenever your API changes and the OpenAPI specification is updated, regenerate the TypeScript client and update it in your project. Consider automating this process in your build pipeline to ensure your frontend always uses up-to-date API client code."
      }
    ]
  },
  bestPractices: {
    title: "Best Practices for OpenAPI Specifications",
    intro: "Follow these best practices to create high-quality OpenAPI specifications that generate optimal TypeScript code:",
    items: [
      "Use descriptive operation IDs for each endpoint to create meaningful method names in the generated client",
      "Provide detailed descriptions for schemas, properties, parameters, and responses to generate helpful TypeScript comments",
      "Use consistent naming conventions for schemas and properties to create predictable TypeScript interfaces",
      "Define reusable components in the 'components' section to avoid duplication and promote code reuse",
      "Specify accurate data types for all properties to generate precise TypeScript types",
      "Include examples in your OpenAPI specification to help developers understand expected data structures",
      "Use enum values for properties with a fixed set of possible values to create TypeScript enums or union types",
      "Organize endpoints logically by grouping related operations with appropriate tags",
      "Version your API and clearly indicate breaking changes to facilitate frontend migration strategies",
      "Validate your OpenAPI specification using linters or validators before generating TypeScript code"
    ]
  },
  faq: {
    title: "Frequently Asked Questions About OpenAPI to TypeScript Generation",
    items: [
      {
        question: "What is the difference between OpenAPI and Swagger?",
        answer: "OpenAPI is the current name for the specification standard, while Swagger was its original name. OpenAPI 3.0+ is the modern evolution of what was previously known as Swagger 2.0. This generator supports both OpenAPI 3.x and Swagger 2.0 specifications, though OpenAPI 3.x is recommended for its enhanced features and better TypeScript code generation."
      },
      {
        question: "Can I customize the generated TypeScript code?",
        answer: "Yes, the generator provides several customization options: you can choose to export schemas only, generate client code, add documentation comments, and use TypeScript enums instead of string unions. For more extensive customization, you can manually modify the generated code, though be aware that regenerating will overwrite these changes."
      },
      {
        question: "How do I handle authentication in the generated client?",
        answer: "The generated client accepts custom headers in its constructor, where you can provide authentication tokens. For more complex authentication flows (like OAuth), you might need to extend the generated client with additional logic or create a wrapper that handles token refreshing and other authentication concerns."
      },
      {
        question: "Can I use this with React, Vue, Angular, or other frameworks?",
        answer: "Yes, the generated TypeScript client is framework-agnostic and can be used with any JavaScript or TypeScript framework. In React, you might wrap the client in custom hooks; in Vue, you could create composables; and in Angular, you might extend the client as an injectable service."
      },
      {
        question: "How do I handle file uploads with the generated client?",
        answer: "For file uploads defined in your OpenAPI spec (using content type 'multipart/form-data'), the generator creates appropriate method signatures. You'll need to construct FormData objects for the request body when calling these methods. Make sure your OpenAPI spec correctly defines file upload operations."
      },
      {
        question: "What happens if my OpenAPI specification has errors?",
        answer: "The generator will attempt to identify common issues in your specification and provide error messages accordingly. It's recommended to validate your OpenAPI document with dedicated validators before generation. Errors in the specification can lead to incorrect or incomplete TypeScript code."
      },
      {
        question: "How do I keep the TypeScript client in sync with API changes?",
        answer: "Whenever your API changes and the OpenAPI specification is updated, regenerate the TypeScript client and update it in your project. Consider automating this process in your build pipeline to ensure your frontend always uses up-to-date API client code."
      }
    ]
  },
  integrationTips: {
    title: "Tips for Integrating Generated TypeScript Clients",
    intro: "Once you've generated your TypeScript client, consider these recommendations for smooth integration with your project:",
    items: [
      "Create a dedicated API client module in your project that re-exports the generated client with any custom configurations",
      "Use dependency injection patterns to provide the API client throughout your application, making it easier to mock for testing",
      "Consider implementing request/response interceptors for common concerns like error handling, logging, and authentication",
      "Wrap the generated client methods in custom functions that handle specific error cases or transform data for your application's needs",
      "Set up automatic generation of TypeScript clients as part of your CI/CD pipeline to keep frontend and backend in sync",
      "Use environment variables or configuration files to specify the API base URL for different environments (development, staging, production)",
      "Add retry logic for transient failures by wrapping the generated client methods with retry functionality",
      "Implement request caching for frequently accessed data to improve performance and reduce API calls",
      "Combine the generated types with state management libraries like Redux, MobX, or Vuex for type-safe application state",
      "Consider implementing request batching or GraphQL for optimizing API calls if you find yourself making many small requests"
    ]
  }
}
