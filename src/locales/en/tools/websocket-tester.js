export default {
  name: 'WebSocket Tester',
  description: 'Connect to WebSocket servers, send messages and view responses',
  connection: {
    url: 'WebSocket URL',
    urlPlaceholder: 'e.g. ws://echo.websocket.org',
    protocol: 'Subprotocol (optional)',
    protocolPlaceholder: 'Comma separated',
    connect: 'Connect',
    disconnect: 'Disconnect',
    status: 'Connection Status',
    connected: 'Connected',
    disconnected: 'Disconnected',
    waiting: 'Waiting to Connect',
    autoReconnect: 'Auto Reconnect',
    reconnectMessage: 'Will try to reconnect in {0} seconds...'
  },
  options: {
    title: 'Options',
    autoScroll: 'Auto Scroll Logs'
  },
  messages: {
    send: 'Send Messages',
    logs: 'Message Logs',
    emptyLogs: 'Messages will appear here once connected',
    placeholder: 'Enter message to send...',
    sendButton: 'Send',
    clearButton: 'Clear',
    copyButton: 'Copy',
    clearLogs: 'Clear Logs',
    copyLogs: 'Copy Logs',
    format: {
      title: 'Format',
      text: 'Plain Text',
      json: 'JSON',
      binary: 'Binary'
    },
    templates: {
      json: 'JSON',
      text: 'Text'
    },
    types: {
      sent: 'Sent →',
      received: 'Received ←',
      error: 'Error !',
      info: 'Info'
    }
  },
  savedConnections: {
    title: 'Saved Connections',
    empty: 'No saved connections',
    save: 'Save Current Connection',
    saveConnection: 'Save Connection',
    connectionName: 'Connection Name',
    load: 'Load',
    delete: 'Delete',
    cancel: 'Cancel'
  },
  testServers: {
    title: 'Test Servers',
    description: 'Here are some public WebSocket servers available for testing:',
    useServer: 'Use This Server',
    servers: {
      echo: {
        name: 'Echo Test',
        description: 'Secure echo test server, supports WSS connections'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Echo service provided by Postman, supports WSS'
      }
    }
  },
  logs: {
    connectingTo: 'Connecting to {0}...',
    connectionSuccess: 'Connection successful',
    connectionError: 'WebSocket error',
    connectionClosed: 'Connection closed (Code: {0}{1})',
    invalidJson: 'Invalid JSON format: {0}',
    sendFailed: 'Send failed: {0}',
    emptyMessage: 'Message cannot be empty',
    notConnected: 'WebSocket not connected',
    copied: 'Logs copied to clipboard',
    copyFailed: 'Copy failed: {0}',
    serverSelected: 'Server selected: {0}',
    binaryData: '[Binary data]'
  },
  article: {
    title: "WebSocket Tester: Real-time Communication Testing Tool",
    features: {
      title: "Understanding WebSocket Technology and Its Applications",
      description: "The <strong>WebSocket Tester</strong> is a comprehensive tool designed for testing, debugging, and exploring real-time communication between clients and servers using the WebSocket protocol. Unlike traditional HTTP connections that require new requests for each interaction, WebSockets provide persistent, bi-directional communication channels that remain open until explicitly closed by either party.<br><br>This <strong>WebSocket client tool</strong> allows developers to establish connections to WebSocket servers, send custom messages in various formats (text, JSON, or binary), and view responses in real-time. With features like connection management, message logging, and format validation, this <strong>real-time communication tester</strong> provides everything needed to develop and debug WebSocket implementations across different platforms and environments.",
      useCases: {
        title: "Practical Applications for WebSocket Testing",
        items: [
          "<strong>API Development and Debugging</strong>: When developing WebSocket-based APIs, the <strong>WebSocket debug tool</strong> allows you to connect to your development endpoints, send test messages, and verify that the server responds correctly to different request formats and edge cases. This interactive testing approach helps identify issues early in the development cycle, long before clients attempt to connect to your service.",
          "<strong>Real-time Application Testing</strong>: For applications like chat systems, live dashboards, or collaborative platforms that rely on <strong>real-time data streaming</strong>, this tester lets you simulate client connections and verify that message delivery, event broadcasting, and state synchronization work as expected. You can test message delivery latency, server push notifications, and client subscription mechanisms.",
          "<strong>IoT Device Communication</strong>: Internet of Things devices often use WebSockets for <strong>lightweight persistent connections</strong> to central servers or cloud platforms. The WebSocket Tester can simulate IoT device communication patterns, helping you test device registration, command transmission, telemetry reporting, and other essential IoT communication flows without deploying physical hardware.",
          "<strong>Game Server Interaction</strong>: Online multiplayer games frequently rely on WebSockets for <strong>real-time player interactions</strong> and game state updates. Game developers can use this tool to test server responses to player actions, verify game state synchronization, and measure performance characteristics like message throughput and latency under varying conditions.",
          "<strong>Financial Data Streaming</strong>: Trading platforms and financial services utilize WebSockets for <strong>real-time market data feeds</strong> and transaction processing. The WebSocket Tester allows financial application developers to verify subscription to data streams, test handling of market events, and ensure reliable processing of time-sensitive financial information.",
          "<strong>Troubleshooting Production Issues</strong>: When encountering connectivity or messaging problems in production environments, support engineers can use the <strong>WebSocket connection tester</strong> to replicate user scenarios, verify server availability, and diagnose message format or protocol issues without modifying the production application code."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about WebSocket Testing",
      items: [
        {
          question: "What is the difference between WebSockets and HTTP?",
          answer: "WebSockets and HTTP serve different communication needs in web applications. HTTP is a request-response protocol where each interaction requires a new connection initiated by the client. The client sends a request, the server responds, and the connection closes. This model works well for traditional web browsing but creates significant overhead for real-time applications.<br><br>WebSockets, on the other hand, establish a <strong>persistent connection</strong> between client and server that remains open until explicitly closed. After the initial handshake (which happens over HTTP), the connection upgrades to the WebSocket protocol, allowing both client and server to send messages at any time without additional connection overhead. This <strong>full-duplex communication</strong> enables truly real-time applications with lower latency and bandwidth usage compared to polling-based HTTP approaches. Our WebSocket Tester tool helps you explore these differences hands-on by letting you establish WebSocket connections and experience the bidirectional message exchange capabilities."
        },
        {
          question: "Why do my WebSocket connections get disconnected after a period of inactivity?",
          answer: "WebSocket connections may disconnect during periods of inactivity due to several factors in the network path between client and server. The most common causes include:<br><br>• <strong>Proxy timeouts</strong>: Corporate proxies, load balancers, or network gateways often have idle connection timeouts that close inactive connections to conserve resources.<br>• <strong>Firewall settings</strong>: Network firewalls may have session timeout policies that terminate long-lived connections without recent activity.<br>• <strong>Server-side timeouts</strong>: Many WebSocket servers implement their own inactivity timeouts to manage resources.<br>• <strong>Client network changes</strong>: Mobile devices switching between networks or entering sleep mode can interrupt connections.<br><br>To maintain persistent WebSocket connections, implement a <strong>heartbeat mechanism</strong> where small ping/pong messages are exchanged periodically (typically every 30-45 seconds). This keeps the connection active and prevents intermediary network components from closing it. Our WebSocket Tester tool includes an auto-reconnect feature that can help you test connection resilience and recovery strategies."
        },
        {
          question: "Can I use the WebSocket Tester with secure connections (WSS)?",
          answer: "Yes, the <strong>WebSocket Tester</strong> fully supports secure WebSocket connections (WSS) which operate over TLS/SSL, similar to how HTTPS works for regular web traffic. When connecting to a WSS endpoint (URLs starting with \"wss://\"), our tool automatically handles the TLS handshake and certificate validation process.<br><br>Secure WebSockets are essential for:<br><br>• Protecting sensitive data transmitted between client and server<br>• Meeting compliance requirements for secure communication<br>• Connecting to services hosted on HTTPS domains (due to modern browsers restricting mixed content)<br>• Preventing man-in-the-middle attacks and message tampering<br><br>The tool works seamlessly with both secure (WSS) and non-secure (WS) endpoints, allowing you to test against development servers on localhost or production-grade secure services. When testing with self-signed certificates during development, be aware that while our web-based tool must respect browser security policies, you can still establish connections to properly configured secure WebSocket servers."
        },
        {
          question: "How do I format JSON messages correctly for WebSocket communication?",
          answer: "Formatting JSON messages correctly for WebSocket communication is essential for successful interaction with most modern WebSocket APIs. Here are the key practices to follow:<br><br>1. <strong>Valid JSON syntax</strong>: Ensure your message follows proper JSON format with quoted keys, appropriate use of data types, and balanced braces. Our WebSocket Tester's JSON format option automatically validates your JSON before sending.<br><br>2. <strong>Message structure</strong>: Most WebSocket APIs expect a specific message structure, typically including:<br>• A message type or action field (e.g., \"type\": \"subscribe\")<br>• A data payload containing the actual information<br>• Optional metadata like message IDs or timestamps<br><br>Example of a well-structured message:<br><pre>&#123;<br>  \"type\": \"subscribe\",<br>  \"channel\": \"market_data\",<br>  \"symbols\": [\"BTC/USD\", \"ETH/USD\"],<br>  \"requestId\": \"12345\"<br>&#125;</pre><br><br>3. <strong>Escaping special characters</strong>: When including quotes or backslashes within JSON string values, ensure they're properly escaped.<br><br>4. <strong>Using appropriate data types</strong>: Send numbers as numbers (without quotes), booleans as true/false, and arrays with square brackets.<br><br>Our WebSocket Tester provides a JSON template option to help you get started with properly formatted messages."
        },
        {
          question: "How can I save and reuse WebSocket connections for repeated testing?",
          answer: "The <strong>WebSocket Tester</strong> provides several features to help you save and reuse connection configurations for efficient repeated testing:<br><br>1. <strong>Connection management</strong>: The tool allows you to save your WebSocket connections with custom names for easy identification. Each saved configuration stores the WebSocket URL and optional subprotocols.<br><br>2. <strong>One-click reconnection</strong>: Saved connections can be loaded and connected to with a single click, eliminating the need to repeatedly type connection details during testing sessions.<br><br>3. <strong>Persistent storage</strong>: Your saved connections are stored in your browser's local storage, meaning they'll remain available across browser sessions and restarts.<br><br>4. <strong>Test message templates</strong>: Beyond just saving connections, you can efficiently test with common message patterns using the JSON and text templates provided.<br><br>5. <strong>Test server shortcuts</strong>: For quick testing without your own server, the tool includes shortcuts to reliable public WebSocket echo servers.<br><br>This comprehensive <strong>connection management system</strong> is particularly valuable for developers working with multiple WebSocket endpoints across different environments (development, staging, production) or those who routinely test various API operations that require different connection parameters."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the WebSocket Tester",
      steps: [
        "<strong>Enter a WebSocket URL</strong>: Begin by entering the WebSocket server address in the URL field. WebSocket URLs start with 'ws://' for standard connections or 'wss://' for secure connections (similar to http:// and https://). If you don't have a WebSocket server to test with, you can select one of the provided test servers from the 'Test Servers' section at the bottom of the tool.",
        "<strong>Configure connection options</strong>: If your WebSocket server requires specific subprotocols, enter them in the 'Subprotocol' field as a comma-separated list. You can also enable 'Auto Reconnect' if you want the tool to automatically attempt to reconnect if the connection drops unexpectedly. The 'Auto Scroll Logs' option keeps the message log scrolled to the most recent messages.",
        "<strong>Establish a connection</strong>: Click the 'Connect' button to initiate the WebSocket connection. The connection status indicator will show 'Connecting' during the handshake process, then change to 'Connected' when successful or 'Disconnected' if the connection attempt fails. Any connection events or errors will appear in the message log area.",
        "<strong>Prepare your message</strong>: Once connected, you can enter the message you want to send in the 'Send Messages' text area. Select the appropriate format for your message using the format dropdown: 'Plain Text' for simple string messages, 'JSON' if you're sending structured data (the tool will validate JSON format), or 'Binary' for sending binary data.",
        "<strong>Send and monitor messages</strong>: Click the 'Send' button to transmit your message to the WebSocket server. The sent message will appear in the 'Message Logs' area with a timestamp and 'Sent' label. When the server responds, incoming messages will display with a 'Received' label. You can clear the message input field or logs as needed using the respective clear buttons.",
        "<strong>Save connections for future use</strong>: If you'll be testing this WebSocket endpoint frequently, click 'Save Current Connection' to store the connection details. You'll be prompted to provide a name for this connection. Saved connections appear in the 'Saved Connections' panel for quick access in future testing sessions.",
        "<strong>Analyze communication patterns</strong>: Use the chronological message log to analyze the sequence and timing of messages between client and server. This helps identify issues with message handling, response times, or communication protocols. For debugging purposes, you can copy the entire log to share with team members or for documentation in bug reports."
      ]
    },
    conclusion: "The WebSocket Tester stands as an essential tool for developers working with real-time applications, enabling efficient testing and debugging of WebSocket connections without the need for custom client implementations. By providing a visual interface for establishing connections, sending messages in various formats, and monitoring bidirectional communication, it significantly accelerates the development workflow for WebSocket-based applications. Whether you're building chat systems, live dashboards, IoT platforms, or multiplayer games, this tester offers the capabilities needed to ensure your WebSocket implementation delivers reliable, real-time communication. As web applications continue to evolve toward more interactive, real-time experiences, having a dedicated tool for testing this critical communication layer becomes increasingly valuable for maintaining high-quality user experiences across diverse network conditions and client platforms."
  }
} 