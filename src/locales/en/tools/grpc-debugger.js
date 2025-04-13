export default {
  name: 'gRPC Debugger',
  description: 'Test and debug gRPC services and protobuf messages',
  title: 'Online gRPC Debugger',
  intro: 'Debug gRPC services directly through your browser with support for proto file parsing and dynamic form building',
  connection: {
    title: 'Connection',
    server: 'Server Address',
    serverPlaceholder: 'Enter gRPC server address (e.g., localhost:50051)',
    useTLS: 'Use TLS/SSL',
    tlsOptions: 'TLS Options',
    caCert: 'CA Certificate',
    clientCert: 'Client Certificate',
    clientKey: 'Client Key',
    insecure: 'Skip TLS verification (insecure)',
    timeout: 'Timeout (seconds)',
    serverUrl: 'gRPC Service URL',
    serverUrlPlaceholder: 'https://your-grpc-server.com',
    timeoutMs: 'Request Timeout (milliseconds)',
    timeoutPlaceholder: '30000',
    defaultTimeout: 'Default: 30000ms (30 seconds)',
    corsNote: 'Note: The server must support the gRPC-Web protocol and CORS',
    keepalive: 'Enable Keepalive',
    connect: 'Connect',
    disconnect: 'Disconnect'
  },
  service: {
    title: 'Service',
    definition: 'Service Definition',
    load: 'Load Proto File',
    paste: 'Paste Proto Definition',
    protoPath: 'Proto File Path',
    importPath: 'Import Path',
    services: 'Services',
    methods: 'Methods',
    selectService: 'Select Service',
    selectMethod: 'Select Method',
    methodType: 'Method Type',
    unary: 'Unary',
    serverStreaming: 'Server Streaming',
    clientStreaming: 'Client Streaming',
    bidirectional: 'Bidirectional Streaming',
    protoDefinition: 'Proto File Definition',
    switchToText: 'Switch to Text Input',
    switchToFile: 'Switch to File Upload',
    dragDrop: 'Drag and drop .proto files here, or',
    clickUpload: 'click to upload',
    onlyProto: 'Only .proto file formats are supported',
    loadExample: 'Load Example Proto',
    formatProto: 'Format',
    clear: 'Clear',
    parse: 'Parse Proto Definition',
    parsing: 'Parsing...'
  },
  request: {
    title: 'Request',
    metadata: 'Metadata',
    addMetadata: 'Add Metadata',
    key: 'Key',
    value: 'Value',
    message: 'Message',
    jsonEditor: 'JSON Editor',
    protoEditor: 'Proto Editor',
    formEditor: 'Form Editor',
    send: 'Send Request',
    cancel: 'Cancel',
    stream: 'Stream Message',
    endStream: 'End Stream',
    exampleMessage: 'Example Message',
    validJson: 'Valid JSON',
    invalidJson: 'Invalid JSON',
    history: 'Request History',
    body: 'Request Body',
    bodyPlaceholder: 'Enter the JSON-formatted request body here...',
    runQuery: 'Run Query',
    requestSent: 'Sent',
    param: 'Request Parameter',
    edit: 'Edit',
    sending: 'Sending...',
    time: 'Request Time'
  },
  response: {
    title: 'Response',
    status: 'Status',
    metadata: 'Metadata',
    message: 'Message',
    stream: 'Stream',
    noResponse: 'No response received',
    receivedAt: 'Received at',
    duration: 'Duration',
    copy: 'Copy Response',
    download: 'Download',
    clear: 'Clear',
    streamClosed: 'Stream Closed',
    streamMessage: 'Stream Message #{number}',
    stats: 'Statistics',
    messagesReceived: 'Messages Received',
    startTime: 'Start Time',
    endTime: 'End Time',
    time: 'Response Time'
  },
  settings: {
    title: 'Settings',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    language: 'Language',
    maxResponseSize: 'Maximum Response Size',
    timeoutMs: 'Default Timeout (milliseconds)',
    prettyPrint: 'Pretty Print JSON',
    saveDir: 'Save Directory',
    clearHistory: 'Clear History',
    protoFormat: 'Proto Format',
    protobuf: 'Protobuf.js',
    grpcTools: 'gRPC Tools',
    reflection: 'Use Server Reflection'
  },
  messages: {
    connecting: 'Connecting to {server}...',
    connected: 'Connected to {server}',
    disconnected: 'Disconnected from the server',
    connectionError: 'Connection error: {error}',
    requestSent: 'Request sent',
    responseReceived: 'Response received',
    streamingStarted: 'Streaming started',
    streamingEnded: 'Streaming ended',
    protoLoaded: 'Proto file loaded successfully',
    protoError: 'Error loading Proto file: {error}',
    metadataAdded: 'Metadata added',
    metadataError: 'Invalid metadata',
    savedToFile: 'Response saved to file',
    parsingError: 'Error parsing message: {error}',
    reflectionError: 'Server reflection error: {error}',
    invalidProto: 'Invalid Proto definition',
    emptyUrl: 'Please enter a service URL',
    selectServiceMethod: 'Please select a service and method',
    invalidJson: 'Request body is not valid JSON: {error}',
    copy: 'Copy',
    copied: 'Response copied to clipboard',
    copyFailed: 'Copy failed, please copy manually'
  },
  errors: {
    invalidArgument: 'INVALID_ARGUMENT - Invalid argument',
    notFound: 'NOT_FOUND - Resource not found',
    alreadyExists: 'ALREADY_EXISTS - Resource already exists',
    permissionDenied: 'PERMISSION_DENIED - Permission denied',
    internal: 'INTERNAL - Internal error',
    requestFailed: 'Request failed: {error}'
  },
  article: {
    title: "gRPC Debugger: Interactive Testing Tool for Remote Procedure Calls",
    features: {
      title: "Understanding gRPC Debugging and API Testing",
      description: "The <strong>gRPC Debugger</strong> is a comprehensive web-based tool designed for testing, debugging, and exploring gRPC services directly from your browser. Unlike traditional REST API clients, this <strong>protocol buffer testing tool</strong> provides specialized capabilities for working with gRPC's binary protocol and Protocol Buffers (protobuf) message format, allowing developers to interact with gRPC services without writing custom client code.<br><br>Our <strong>gRPC client tester</strong> supports essential features including proto file parsing, service discovery, request construction through dynamic form building, metadata management, and full response visualization. This makes it an indispensable tool for API developers working with modern microservice architectures that leverage gRPC for efficient, strongly-typed, and high-performance communication between services.",
      useCases: {
        title: "Practical Applications for gRPC Testing",
        items: [
          "<strong>Microservice API Development</strong>: When building distributed systems based on microservices architecture, the <strong>gRPC testing tool</strong> allows developers to validate service endpoints, verify message formats, and ensure correct implementation of the service contract defined in proto files. This interactive validation helps catch issues early in the development cycle before services are integrated.",
          "<strong>API Integration Testing</strong>: For applications consuming third-party or internal gRPC services, our debugger provides a way to explore available methods, test different input parameters, and understand response formats without writing test clients. Engineers can rapidly prototype integration code by first understanding the expected behavior through manual testing.",
          "<strong>Troubleshooting Production Issues</strong>: When facing unexpected behavior in production systems using gRPC, the debugger allows support engineers and developers to replicate specific requests, manipulate parameters, and observe responses in a controlled environment. This isolation helps identify whether issues stem from the client implementation, service logic, or network configuration.",
          "<strong>Protocol Buffer Schema Development</strong>: During the design phase of an API, the <strong>protobuf inspector</strong> capabilities help validate schema definitions by visualizing how abstract message definitions translate to concrete request and response structures. This feedback loop improves proto file design before widespread implementation.",
          "<strong>Performance Analysis</strong>: The debugger provides timing information for requests, allowing developers to benchmark gRPC service performance under different conditions. By testing with various payload sizes and complexity, teams can identify potential performance bottlenecks in their service implementations.",
          "<strong>Documentation and Knowledge Sharing</strong>: The visual interface of the <strong>gRPC service explorer</strong> makes it easier to demonstrate API functionality to non-technical stakeholders, new team members, or partners. The tool serves as an interactive alternative to static API documentation, helping others understand service capabilities through practical examples."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About gRPC Debugging",
      items: [
        {
          question: "What is the difference between gRPC and REST APIs?",
          answer: "gRPC and REST represent different approaches to API design with distinct characteristics that influence when each should be used.<br><br><strong>gRPC</strong> is a high-performance RPC (Remote Procedure Call) framework that uses Protocol Buffers for message serialization and operates over HTTP/2. Key advantages include:<br><br>• <strong>Contract-first approach</strong> with strictly typed interfaces defined in .proto files<br>• <strong>Efficient binary serialization</strong> resulting in smaller message sizes<br>• <strong>Built-in streaming support</strong> (unary, server, client, and bidirectional)<br>• <strong>Multiplexed connections</strong> over HTTP/2 reducing latency<br>• <strong>Code generation</strong> across multiple languages ensuring type safety<br><br><strong>REST</strong> (Representational State Transfer) is an architectural style that typically uses JSON over HTTP/1.1 and offers:<br><br>• <strong>Simplicity and familiarity</strong> due to widespread adoption<br>• <strong>Human-readable formats</strong> like JSON or XML<br>• <strong>Native browser support</strong> without additional libraries<br>• <strong>Looser coupling</strong> between clients and servers<br>• <strong>Extensive tooling ecosystem</strong> for testing and documentation<br><br>The <strong>gRPC Debugger</strong> bridges the tooling gap for gRPC, providing REST-like exploration capabilities for gRPC services that traditionally require custom client code to test."
        },
        {
          question: "How do I create a .proto file for testing?",
          answer: "Creating a <strong>Protocol Buffer definition file</strong> (.proto) is a fundamental step in gRPC development. Here's a guide to creating one for testing with our debugger:<br><br>1. <strong>Define the syntax version</strong>: Start your file with `syntax = \"proto3\";` to use the latest proto syntax version.<br><br>2. <strong>Organize with packages</strong>: Use the `package` keyword to group related services and messages, which helps avoid name conflicts (e.g., `package ecommerce;`).<br><br>3. <strong>Define messages</strong>: Create message types that represent the data structures you'll use:<br><pre>message Product {\n  string id = 1;\n  string name = 2;\n  double price = 3;\n  repeated string categories = 4;\n}</pre><br>4. <strong>Define services</strong>: Specify service interfaces and their methods:<br><pre>service ProductService {\n  rpc GetProduct(GetProductRequest) returns (Product);\n  rpc SearchProducts(SearchRequest) returns (stream Product);\n  rpc UpdateProduct(Product) returns (UpdateResponse);\n}</pre><br>5. <strong>Import other protos</strong>: Use `import \"path/to/other.proto\";` to reference definitions from other files.<br><br>6. <strong>Add field options</strong>: Enhance fields with options like `[deprecated=true]` or custom options for specific behaviors.<br><br>For testing with our <strong>gRPC Debugger</strong>, you can either upload this file directly or paste its contents into the text input area. The debugger will parse the file and generate the appropriate form interfaces for constructing requests to your services."
        },
        {
          question: "Can this tool connect to secure gRPC services (SSL/TLS)?",
          answer: "Yes, the <strong>gRPC Debugger</strong> supports connecting to secure gRPC services that use SSL/TLS encryption. Here's how it handles secure connections:<br><br>1. <strong>Browser-based limitations</strong>: Since this is a web-based tool running in your browser, it operates within browser security constraints. It can connect to:<br><br>• Services that support the <strong>gRPC-Web protocol</strong> (which is slightly different from standard gRPC)<br>• Services with properly configured <strong>CORS (Cross-Origin Resource Sharing)</strong> headers<br>• Services with valid SSL certificates (not self-signed in most cases)<br><br>2. <strong>Using TLS</strong>: When connecting to a secure service, make sure to:<br><br>• Use the <strong>\"https://\"</strong> prefix or explicitly enable the <strong>\"Use TLS/SSL\"</strong> option<br>• The service must have a valid certificate trusted by the browser<br>• Check if client certificate authentication is required (mutual TLS)<br><br>3. <strong>Authentication options</strong>: For services requiring authentication, you can add:<br><br>• <strong>API keys</strong> or <strong>access tokens</strong> through metadata<br>• <strong>Basic authentication</strong> headers<br>• <strong>OAuth tokens</strong> in authorization headers<br><br>4. <strong>Proxy considerations</strong>: In some enterprise environments, a gRPC-Web proxy (like Envoy) might be needed between the browser and the actual gRPC service.<br><br>If you're testing internal services that don't meet these requirements, consider using a desktop gRPC client or setting up a local proxy that handles the security requirements and exposes a compatible endpoint for the debugger."
        },
        {
          question: "Why do I need to parse the proto file before sending requests?",
          answer: "Parsing the proto file is a critical first step when using the <strong>gRPC Debugger</strong> for several fundamental reasons:<br><br>1. <strong>Type discovery and validation</strong>: gRPC is a strongly-typed system where both client and server must agree on the exact format of messages. The proto file serves as the contract that defines:<br><br>• What <strong>services and methods</strong> are available<br>• The <strong>parameter types</strong> each method expects<br>• The <strong>response types</strong> each method returns<br>• Any <strong>nested message structures</strong> or <strong>enums</strong> used in the API<br><br>2. <strong>Dynamic interface generation</strong>: After parsing, the debugger can:<br><br>• Display the list of available services and methods<br>• Build appropriate request forms with the correct fields<br>• Provide type-specific input controls (text fields, number inputs, toggles for booleans, etc.)<br>• Set appropriate default values based on field types<br><br>3. <strong>Binary serialization</strong>: gRPC uses Protocol Buffers for its binary wire format. The proto definition allows the debugger to:<br><br>• <strong>Serialize</strong> your JSON input into the correct binary protobuf format<br>• <strong>Deserialize</strong> binary responses back into readable JSON<br>• Ensure <strong>field numbers and types</strong> match exactly what the server expects<br><br>4. <strong>Error prevention</strong>: Without proper parsing, you might send improperly formatted requests that would fail at the serialization level before even reaching service logic.<br><br>Think of the proto file as both the API documentation and serialization schema combined. The <strong>gRPC protocol</strong> fundamentally requires this information to function, unlike REST APIs where you might explore endpoints with minimal prior knowledge."
        },
        {
          question: "What types of gRPC methods can I test with this debugger?",
          answer: "The <strong>gRPC Debugger</strong> supports testing all four communication patterns defined in the gRPC specification, each serving different use cases:<br><br>1. <strong>Unary RPC</strong>: The standard request-response pattern where the client sends a single request and receives a single response. This is most similar to traditional REST API calls and is ideal for:<br><br>• Simple data retrieval operations<br>• Create, update, or delete operations<br>• Authentication and validation requests<br><br>Example: `rpc GetUser(GetUserRequest) returns (User);`<br><br>2. <strong>Server Streaming RPC</strong>: The client sends a single request and receives a stream of response messages. This pattern works well for:<br><br>• Real-time data feeds<br>• Progress updates on long-running operations<br>• Large dataset retrieval with progressive loading<br><br>Example: `rpc ListProducts(ListRequest) returns (stream Product);`<br><br>3. <strong>Client Streaming RPC</strong>: The client sends a stream of messages and receives a single response. This approach is useful for:<br><br>• Uploading large data sets<br>• Continuous sensor data transmission<br>• Batched operations that produce a single result<br><br>Example: `rpc UploadData(stream DataChunk) returns (UploadSummary);`<br><br>4. <strong>Bidirectional Streaming RPC</strong>: Both client and server can send and receive multiple messages in any order. This fully asynchronous pattern supports:<br><br>• Chat applications<br>• Real-time gaming or collaboration<br>• Complex workflows with back-and-forth communication<br><br>Example: `rpc Chat(stream ChatMessage) returns (stream ChatMessage);`<br><br>Our debugger provides appropriate interface elements for each type, allowing you to test all communication patterns with visual feedback on streaming responses and appropriate controls for sending stream messages from the client side."
        }
      ]
    },
    guide: {
      title: "How to Use the gRPC Debugger: Step-by-Step Guide",
      step1: "<strong>Define the gRPC service URL</strong>: Enter the address of your gRPC service in the URL field. For browser-based testing, this should be a service that supports the gRPC-Web protocol and has appropriate CORS headers enabled. If you're testing a secure service, make sure to use the HTTPS protocol (e.g., https://your-grpc-service.com).",
      step2: "<strong>Set timeout and connection options</strong>: Configure the request timeout (in milliseconds) based on your service's expected response time. The default of 30000ms (30 seconds) works for most services but may need adjustment for long-running operations or when testing over slow networks.",
      step3: "<strong>Provide Protocol Buffer definitions</strong>: You can either upload .proto files by dragging and dropping them into the upload area or clicking to select them from your device, or switch to text input mode using the toggle and paste your Proto definition directly. For beginners, the 'Load Example Proto' option provides a starting template to understand the format.",
      step4: "<strong>Parse the Proto definition</strong>: Click the 'Parse Proto Definition' button to process your .proto file. This analyzes the service interfaces, message types, and field definitions, enabling the debugger to generate appropriate request forms and properly serialize/deserialize messages. If there are any syntax errors in your proto file, you'll receive error messages to help identify the issues.",
      step5: "<strong>Select service and method</strong>: After successful parsing, choose the specific service from the dropdown list (if your proto file defines multiple services). Then select the method you want to test from the available methods list. The method type (unary, server streaming, client streaming, or bidirectional streaming) will be indicated to help you understand the expected communication pattern.",
      step6: "<strong>Build and customize your request</strong>: The debugger generates a JSON template for the selected method's request type. Modify the provided JSON structure to include your test values. The editor automatically formats and validates your JSON content to ensure it matches the expected message structure. You can use the format button to clean up your JSON if needed.",
      step7: "<strong>Send the request and analyze responses</strong>: Click the 'Send Request' button to transmit your gRPC call to the service. For unary calls, you'll see the response data displayed in the response section, along with timing information. For streaming calls, you'll see response messages as they arrive. If any errors occur, the debugger will display the error details to help with troubleshooting."
    },
    conclusion: "The gRPC Debugger provides an intuitive browser-based interface for interacting with the powerful but complex world of gRPC services. By bridging the gap between human operators and gRPC's binary protocol, this tool dramatically simplifies the process of developing, testing, and troubleshooting modern API services. Whether you're designing a new microservice architecture, integrating with existing gRPC services, or diagnosing issues in production systems, the visual approach offered by this debugger reduces the learning curve and accelerates development workflows. As more organizations adopt gRPC for its performance and strong typing advantages, having accessible testing tools becomes increasingly valuable for ensuring API quality and reliability."
  }
}