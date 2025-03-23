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
    D --> E{Test Passed?}
    E -->|No| C
    E -->|Yes| F[System Integration]
    F --> G[System Testing]
    G --> H{Test Passed?}
    H -->|No| F
    H -->|Yes| I[Deployment]
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
  }
}