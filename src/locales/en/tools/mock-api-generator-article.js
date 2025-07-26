export default {
  title: "Understanding Mock API Generation for Frontend Development",
  overview: {
    title: "What is a Mock API Generator?",
    content: "A <strong>Mock API Generator</strong> is a specialized tool that creates simulated API endpoints and responses based on OpenAPI specifications or custom field definitions. This powerful development utility helps frontend developers work independently from backend teams by providing realistic data structures that mimic the behavior of actual APIs.<br><br>The Mock API Generator creates functional endpoints that return consistent, structured data according to your specifications. This allows frontend development to proceed without waiting for the actual backend implementation, significantly accelerating the development process and enabling parallel workflows."
  },
  useCases: {
    title: "Common Use Cases for Mock API Generation",
    items: [
      {
        title: "Frontend Development Before Backend Completion",
        description: "When the backend API is still under development or not yet implemented, a mock API allows frontend developers to start building UI components with realistic data structures, preventing development bottlenecks."
      },
      {
        title: "UI Prototyping and Testing",
        description: "Create quick prototypes or test UI components with controlled data sets, enabling designers and developers to validate interfaces with realistic data without connecting to actual backend services."
      },
      {
        title: "Offline Development",
        description: "Enable developers to work offline or in environments without access to production or staging APIs by providing a local mock API server that simulates the actual API responses."
      },
      {
        title: "Edge Case Testing",
        description: "Generate specific API responses that replicate edge cases or error conditions that might be difficult to trigger in a real backend environment, allowing thorough testing of error handling and boundary conditions."
      },
      {
        title: "Performance Testing",
        description: "Create mock APIs that simulate different response times or payload sizes to test how frontend components handle various performance scenarios, from optimal to degraded conditions."
      },
      {
        title: "Demo Environments",
        description: "Build fully functional demonstration environments that don't require connecting to real backend services, perfect for sales demos, training, or exhibition purposes."
      }
    ]
  },
  guide: {
    title: "How to Use the Mock API Generator",
    intro: "Follow these steps to effectively create and use mock APIs for your development workflow:",
    steps: [
      {
        title: "Choose Your Input Method",
        description: "Start by selecting how you want to define your API structure. You can upload an OpenAPI specification (recommended for consistency with actual APIs), upload Java class files to automatically extract data structures, or manually define fields and types through the interface."
      },
      {
        title: "Define Your Data Structure",
        description: "If not using an OpenAPI specification, define the structure of your mock data by adding fields and setting their types (string, number, boolean, date, etc.). For complex structures, create nested objects or arrays of objects to match your actual API's data model."
      },
      {
        title: "Configure Output Options",
        description: "Select your preferred output format (JSON Server, Express.js, Mock.js, or Mock Service Worker) based on your project needs. Adjust additional settings like response dynamism (how random the generated data should be), array length, and response format."
      },
      {
        title: "Generate Mock API Code",
        description: "Click the \"Generate Mock\" button to create the mock API code based on your specifications. The tool will process your input and produce code in your selected format that simulates the defined API endpoints and responses."
      },
      {
        title: "Review and Copy Generated Code",
        description: "Examine the generated mock API code to ensure it meets your requirements. You can copy the code to your clipboard or download it as a file for integration with your project."
      },
      {
        title: "Integrate with Your Development Environment",
        description: "Depending on the format you chose, integrate the generated mock API with your development environment. This might involve setting up a JSON Server, adding Express.js routes, configuring Mock.js, or implementing Mock Service Worker in your application."
      },
      {
        title: "Connect Your Frontend Application",
        description: "Update your frontend application to connect to the mock API endpoints instead of the real backend services. This typically involves changing the base URL for API requests to point to your local mock server or interceptor."
      }
    ]
  },
  bestPractices: {
    title: "Best Practices for Mock API Development",
    intro: "Follow these recommendations to create effective and maintainable mock APIs:",
    items: [
      "Use OpenAPI specifications whenever possible to ensure your mock API accurately reflects the structure of the real API",
      "Mirror the exact response structure that the real API will use, including pagination formats, error responses, and metadata",
      "Include realistic edge cases in your mock data, such as empty arrays, null values, and various error states",
      "For dynamic data like dates or IDs, use functions rather than static values to simulate real-world behavior",
      "Version your mock APIs alongside your frontend code to maintain historical compatibility during development",
      "Consider using environment variables to switch between mock and real APIs depending on the development context",
      "Document any deviations between mock and real APIs to prevent confusion during integration",
      "Implement consistent latency simulation to test how your UI handles loading states",
      "Automate the generation of mock services in your build pipeline to ensure they stay in sync with API changes",
      "Include validation logic in your mock API to simulate the same constraints that the real API will enforce"
    ]
  },
  faq: {
    title: "Frequently Asked Questions About Mock API Generation",
    items: [
      {
        question: "What's the difference between the available output formats?",
        answer: "JSON Server provides a simple REST API based on a JSON file, ideal for basic needs. Express.js offers more customization and routing control for complex scenarios. Mock.js integrates directly with JavaScript to intercept AJAX requests in the browser. Mock Service Worker (MSW) uses Service Workers to intercept requests at the network level, allowing seamless switching between mock and real APIs without changing your code."
      },
      {
        question: "Can I create dynamic mock responses that change each time?",
        answer: "Yes, the 'Response Dynamism' option controls how variable your mock data will be. Low dynamism means consistent responses with each request, while high dynamism generates different values within the defined data types. You can also implement custom logic in Express.js or MSW formats for more complex dynamic behavior."
      },
      {
        question: "How do I handle authentication in mock APIs?",
        answer: "For JSON Server, you can use json-server-auth plugin. With Express.js, implement middleware to check for authentication tokens. For Mock.js and MSW, you can intercept authentication requests and return appropriate tokens or errors based on the credentials provided, simulating the real authentication flow."
      },
      {
        question: "Can I simulate network errors or slow responses?",
        description: "Yes. In Express.js, you can use middleware to randomly introduce delays or errors. With MSW, you can use the ctx.delay() function to add latency or return error responses. For JSON Server, you can use the --delay flag to add a fixed delay to all responses."
      },
      {
        question: "How do I switch between mock and real APIs in production?",
        answer: "For MSW, use environment variables to conditionally start the service worker. For other methods, use a configuration value to change the API base URL or implement a proxy that routes requests accordingly. This allows you to easily toggle between mock and real endpoints during development and testing."
      },
      {
        question: "Can I generate realistic-looking data instead of lorem ipsum text?",
        answer: "Yes, the Mock API Generator includes specialized field types like 'name', 'email', 'phone', 'address', and 'image URL' that generate realistic data for these common fields. For more advanced scenarios, consider using libraries like Faker.js with the Express.js or MSW output formats."
      },
      {
        question: "How do I handle file uploads in mock APIs?",
        answer: "For Express.js output, you can implement routes that accept multipart/form-data requests and return appropriate responses. With MSW, you can intercept file upload requests and simulate processing before returning a success response. This allows you to test file upload UI components without actual file processing."
      }
    ]
  },
  advancedTips: {
    title: "Advanced Mock API Integration Techniques",
    intro: "Take your mock API implementation to the next level with these advanced integration techniques:",
    items: [
      "Implement stateful behavior in your mock API to simulate persistence between requests, such as returning newly created items in subsequent GET requests",
      "Combine OpenAPI validation with your mock server to ensure your frontend requests meet the API specification requirements",
      "Create scenario managers that allow you to switch between different predefined data sets for testing various business cases",
      "Implement realistic pagination with proper metadata and links to test your UI's pagination controls effectively",
      "Use mock service workers with GraphQL to simulate complex query responses while maintaining type safety",
      "Create a hybrid approach that proxies some requests to actual backend services while mocking others that aren't yet available",
      "Implement websocket mocks to test real-time feature functionality without a backend implementation",
      "Set up continuous integration tests that use your mock API to validate frontend behavior automatically",
      "Create a mock API catalog service that lets developers browse and select from available mock endpoints across your organization",
      "Implement response templating to dynamically change mock responses based on request parameters or headers"
    ]
  }
}
