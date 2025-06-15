export default {
  name: 'Diagram Examples',
  description: 'Browse and use various diagram examples to meet different modeling needs',
  title: 'Advanced Flowchart Examples',
  categories: {
    title: 'Categories',
    flowcharts: 'Flowcharts',
    uml: 'UML Diagrams',
    network: 'Network Diagrams',
    architecture: 'Architecture Diagrams',
    entity: 'Entity Relationship Diagrams',
    sequence: 'Sequence Diagrams',
    mindmaps: 'Mind Maps',
    gantt: 'Gantt Charts',
    other: 'Other Diagrams'
  },
  actions: {
    search: 'Search Examples',
    filter: 'Filter by Category',
    sortBy: 'Sort By',
    useExample: 'Use This Example',
    viewFull: 'View Full Size',
    copyCode: 'Copy Code',
    addToFavorites: 'Add to Favorites',
    removeFavorite: 'Remove from Favorites'
  },
  sortOptions: {
    popularity: 'Popularity',
    newest: 'Newest First',
    alphabetical: 'Alphabetical Order',
    complexity: 'Complexity'
  },
  exampleDetail: {
    title: 'Example Details',
    description: 'Description',
    syntax: 'Syntax',
    codeView: 'Code View',
    diagramView: 'Diagram View',
    complexity: 'Complexity',
    tags: 'Tags',
    relatedExamples: 'Related Examples'
  },
  complexityLevels: {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced'
  },
  messages: {
    copied: 'Code has been copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    added: 'Added to favorites',
    removed: 'Removed from favorites',
    noResults: 'No examples match your search criteria',
    loading: 'Loading examples...'
  },
  filters: {
    all: 'All Categories',
    favorites: 'Favorites Only',
    recently: 'Recently Viewed'
  },
  examples: {
    softwareDevelopment: 'Software Development Flowchart',
    projectManagement: 'Project Management Gantt Chart',
    userRegistration: 'User Registration Process'
  },
  exampleCodes: {
    softwareDevelopment: `graph TD
    A[Requirement Analysis] --> B[System Design]
    B --> C[Coding Implementation]
    C --> D[Unit Testing]
    D --> E(Test Passed?)
    E -- No --> C 
    E -- Yes --> F[System Integration]
    F --> G[System Testing]
    G --> H(Test Passed?)
    H -- No --> F
    H -- Yes --> I[Deployment]
    I --> J[Maintenance & Updates]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title Product Development Project Plan
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section Planning
    Market Research           :a1, 2023-01-01, 15d
    Requirement Analysis      :a2, after a1, 10d
    Product Planning          :a3, after a2, 5d
    
    section Design
    Prototype Design          :b1, after a3, 15d
    UI Design                :b2, after b1, 10d
    User Testing             :b3, after b2, 5d
    
    section Development
    Backend Architecture     :c1, after b1, 20d
    Frontend Development    :c2, after b2, 15d
    API Integration         :c3, after c1, 10d
    
    section Testing
    Unit Testing            :d1, after c2, 8d
    Integration Testing     :d2, after c3, 7d
    Performance Testing     :d3, after d2, 5d
    
    section Release
    Internal Review         :e1, after d3, 5d
    Deployment Preparation  :e2, after e1, 2d
    Official Release        :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    participant EmailService
    
    User->>Frontend: Fill out registration form
    Frontend->>Frontend: Form validation
    Frontend->>Backend: Submit registration information
    Backend->>Backend: Validate user data
    Backend->>Database: Check if user exists
    Database-->>Backend: Return check result
    
    alt User already exists
        Backend-->>Frontend: Return error user already exists
        Frontend-->>User: Display error message
    else User does not exist
        Backend->>Database: Create new user record
        Backend->>EmailService: Send verification email
        EmailService-->>User: Send email with verification link
        Backend-->>Frontend: Return registration success
        Frontend-->>User: Display registration success message
    end
    
    User->>EmailService: Click verification link
    EmailService->>Backend: Verification request
    Backend->>Database: Update user status as verified
    Backend-->>User: Redirect to login page`
  },
  article: {
    title: "Diagram Examples: Visualize Complex Systems and Processes with Professional Charts",
    overview: {
      title: "What are Diagram Examples?",
      content: "The <strong>Diagram Examples</strong> tool provides ready-to-use templates for various diagram types, helping you visualize complex systems, processes, and relationships with professional-quality charts. Instead of starting from scratch, you can leverage these examples to quickly create sophisticated diagrams for your specific needs.<br><br>Our diagram examples are written in standardized diagram syntax that can be rendered by various diagramming tools and frameworks. Each example demonstrates best practices in diagram structure, organization, and visual clarity, ensuring that your diagrams effectively communicate complex information to your audience.<br><br>Whether you're creating software architecture documentation, planning project workflows, or designing database relationships, our diagram examples give you a head start with professionally crafted templates that follow industry standards and visualization best practices."
    },
    useCases: {
      title: "Practical Applications of Diagram Examples",
      items: [
        {
          title: "Software Development Documentation",
          description: "Use flowchart and UML diagram examples to document software architecture, class relationships, and process flows, making complex systems easier to understand for developers, stakeholders, and new team members."
        },
        {
          title: "Project Planning and Management",
          description: "Implement Gantt chart examples to create detailed project timelines, track dependencies between tasks, visualize resource allocation, and communicate project schedules to stakeholders."
        },
        {
          title: "System Architecture Design",
          description: "Leverage architecture diagram examples to map out system components, their relationships, data flows, and integration points, helping teams plan implementations and identify potential issues early."
        },
        {
          title: "Database Schema Design",
          description: "Adapt entity relationship diagram examples to model database structures, define table relationships, and visualize data architecture, making complex database designs more comprehensible."
        },
        {
          title: "User Flow Analysis",
          description: "Modify sequence diagram examples to map user journeys through an application, identify potential usability issues, and optimize the user experience by visualizing each step in the interaction process."
        },
        {
          title: "Business Process Modeling",
          description: "Customize flowchart examples to document business processes, identify bottlenecks, plan process improvements, and communicate operational workflows to team members."
        },
        {
          title: "Network Infrastructure Planning",
          description: "Utilize network diagram examples to design IT infrastructure, plan network deployments, document existing systems, and communicate technical architectures to both technical and non-technical stakeholders."
        },
        {
          title: "Knowledge Organization and Learning",
          description: "Adapt mind map examples to organize research findings, structure learning materials, brainstorm new ideas, and create visual study guides that enhance information retention."
        }
      ]
    },
    guide: {
      title: "How to Use Diagram Examples",
      intro: "Creating professional diagrams is straightforward with our example-based approach. Follow these steps to quickly generate effective visualizations:",
      steps: [
        {
          title: "Browse the Diagram Categories",
          description: "Explore our organized collection of diagram examples grouped by type (flowcharts, UML diagrams, network diagrams, etc.). Review multiple examples to find the one that most closely matches your visualization needs, paying attention to structure and complexity."
        },
        {
          title: "Copy the Example Code",
          description: "Once you've identified a suitable example, click the 'Copy Code' button to save the diagram syntax to your clipboard. This code uses standardized notation that can be interpreted by various diagramming tools and platforms."
        },
        {
          title: "Paste into Your Preferred Diagramming Tool",
          description: "Open your chosen diagramming platform (like Mermaid, PlantUML, Draw.io, or specialized tools) and paste the copied code. Most modern tools support importing from textual diagram syntax, allowing you to maintain the structure while making your customizations."
        },
        {
          title: "Customize the Diagram Content",
          description: "Modify the example to fit your specific needs by replacing placeholder text, adding or removing elements, and adjusting relationships. The examples are designed to be easily editable while maintaining visual clarity and professional appearance."
        },
        {
          title: "Adjust Visual Styling",
          description: "Fine-tune the appearance of your diagram by modifying colors, shapes, line styles, and layout parameters according to your preferences or organizational branding guidelines. Most diagram syntaxes include styling commands within the code."
        },
        {
          title: "Review and Refine",
          description: "Evaluate your diagram for clarity, completeness, and accuracy. Ensure that it effectively communicates the intended information without unnecessary complexity. Collect feedback from colleagues or stakeholders and make adjustments as needed."
        },
        {
          title: "Export and Share",
          description: "Once you're satisfied with your diagram, export it in your preferred format (PNG, SVG, PDF, etc.) for inclusion in documentation, presentations, or reports. Many diagramming tools also offer collaboration features for team editing and real-time updates."
        }
      ]
    },
    diagramTypes: {
      title: "Understanding Different Diagram Types",
      intro: "Each diagram type is designed to visualize specific types of information and relationships. Here's how different diagram types in our collection can be used:",
      items: [
        {
          name: "Flowcharts",
          description: "Visualize sequential processes, decision points, and workflow paths. Ideal for documenting algorithms, business processes, and decision-making procedures. Flowcharts use standardized symbols (rectangles for processes, diamonds for decisions, etc.) connected by arrows to show flow direction."
        },
        {
          name: "UML Diagrams",
          description: "Model software systems using the Unified Modeling Language, including class diagrams (showing object relationships), sequence diagrams (illustrating object interactions over time), activity diagrams (depicting workflow processes), and more. UML provides a standardized visual language for software development."
        },
        {
          name: "Entity Relationship Diagrams (ERDs)",
          description: "Represent data models by showing entities (tables), attributes (fields), and the relationships between them. Essential for database design, ERDs help visualize data organization and structure before implementation, ensuring efficient and logical data storage."
        },
        {
          name: "Network Diagrams",
          description: "Depict computer networks, showing devices, connections, protocols, and network architecture. These diagrams help IT teams plan, document, and troubleshoot network infrastructure by providing a clear visual representation of component relationships."
        },
        {
          name: "Sequence Diagrams",
          description: "Illustrate interactions between systems, components, or actors over time, with messages exchanged in chronological order. Particularly useful for modeling API interactions, user flows, and communication protocols between system components."
        },
        {
          name: "Mind Maps",
          description: "Organize information hierarchically around a central concept, with branches representing related ideas. Excellent for brainstorming, note-taking, planning, and visually organizing complex information in a way that shows relationships and associations."
        },
        {
          name: "Gantt Charts",
          description: "Display project schedules with horizontal bars showing task durations, dependencies, and progress over time. Essential for project management, Gantt charts help teams visualize timelines, deadlines, and the critical path of project activities."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions About Diagram Examples",
      items: [
        {
          question: "What diagram syntax do these examples use?",
          answer: "Our diagram examples use widely-supported syntaxes including Mermaid, PlantUML, and GraphViz DOT. These are text-based diagramming languages that can be rendered by numerous tools and platforms, offering flexibility in how you use and customize the examples. Each example clearly indicates the syntax used, and most modern diagramming tools support multiple syntax options."
        },
        {
          question: "Can I use these diagram examples in commercial projects?",
          answer: "Yes, all our diagram examples are free to use in both personal and commercial projects. You can freely adapt, modify, and incorporate them into your work without attribution requirements. The examples are provided as starting points to accelerate your diagramming process while allowing complete customization to meet your specific project needs."
        },
        {
          question: "How do I modify the examples for my specific needs?",
          answer: "Each diagram example uses a text-based syntax where elements and relationships are defined in a structured format. To customize an example, simply edit the text definitions to match your use case—rename elements, add or remove components, change relationships, or modify the flow. The syntax is designed to be human-readable and intuitive, with changes immediately reflected in the rendered diagram."
        },
        {
          question: "Which tools can I use to render these diagram examples?",
          answer: "These examples are compatible with numerous diagramming tools including online platforms like Mermaid Live Editor, PlantUML Web Server, and VS Code extensions like Markdown Preview Enhanced. Desktop applications such as Draw.io, Lucidchart, and many documentation platforms like Confluence, GitHub, and GitLab also support rendering these diagram syntaxes directly from text notation."
        },
        {
          question: "How do I add colors and styling to my diagrams?",
          answer: "Most diagram syntaxes support styling through specific commands or attributes. For example, in Mermaid, you can add styling with the 'style' keyword followed by element identifiers and CSS-like properties. In PlantUML, you can use skinparam commands to set colors, fonts, and other visual attributes. Our examples include basic styling that you can easily extend with additional customization based on your preferences."
        },
        {
          question: "Can I combine multiple diagram examples to create more complex visualizations?",
          answer: "Absolutely! You can combine elements from different examples to create comprehensive visualizations that capture complex systems or processes. When combining examples, maintain consistent naming conventions, ensure logical connections between merged components, and consider using subgraphs or clusters to organize related elements. This approach allows you to leverage the best aspects of multiple templates while creating a cohesive final diagram."
        },
        {
          question: "How can I ensure my diagrams remain maintainable as systems evolve?",
          answer: "For maintainable diagrams, store the diagram source code (the text syntax) in version control alongside your project code or documentation. This allows diagrams to evolve with your system through the same review and update processes. Use modular approaches by breaking complex diagrams into logical sections, employ consistent naming conventions, and include comments in your diagram code to explain complex elements or relationships."
        }
      ]
    },
    bestPractices: {
      title: "Best Practices for Effective Diagrams",
      intro: "Create more effective and professional diagrams by following these industry best practices:",
      items: [
        "Keep diagrams focused on a single core concept or message rather than trying to visualize everything at once",
        "Use consistent shapes, colors, and styles to ensure visual coherence and establish meaning (e.g., consistent color-coding for different types of components)",
        "Include a legend or key explaining any symbols, colors, or notations that may not be immediately obvious to your audience",
        "Limit the number of elements in a single diagram to prevent visual overload; consider breaking complex systems into multiple linked diagrams",
        "Organize diagram elements in logical groups, with related items positioned near each other to show relationships clearly",
        "Use directional indicators (arrows) consistently to show process flow, data movement, or relationship direction",
        "Add concise labels and annotations to clarify purpose, explain complex interactions, or highlight important aspects",
        "Maintain proper spacing between elements to enhance readability and visual clarity",
        "Align elements in a grid-like structure where appropriate to create a more organized, professional appearance",
        "Consider the diagram's audience and purpose when determining the level of technical detail to include",
        "Use hierarchical structures to show parent-child relationships and organize information from general to specific",
        "Review diagrams from the perspective of someone unfamiliar with the system to ensure clarity and comprehensibility"
      ]
    }
  }
}