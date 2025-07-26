export default {
  name: 'Flowchart Generator',
  description: 'Create flowcharts and diagrams using a simple text-based syntax',
  title: 'Flowchart and Diagram Generator',
  renderBtn: 'Render Diagram',
  resetBtn: 'Reset',
  downloadSvgBtn: 'Download SVG',
  copySvgBtn: 'Copy SVG',

  input: {
    title: 'Flowchart Definition',
    placeholder: 'Enter Mermaid syntax code...',
    loadExample: 'Load Example',
    clear: 'Clear',
    uploadFile: 'Upload File'
  },

  output: {
    title: 'Generated Flowchart',
    downloadImage: 'Download Image',
    downloadSVG: 'Download SVG',
    copyImage: 'Copy Image',
    copySVG: 'Copy SVG',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    fitView: 'Fit View',
    resetView: 'Reset View',
    preview: 'Preview',
    code: 'Mermaid Code'
  },

  options: {
    title: 'Options',
    theme: 'Theme',
    orientation: 'Orientation',
    nodeShape: 'Node Shape',
    arrowStyle: 'Arrow Style',
    lineStyle: 'Line Style',
    textPosition: 'Text Position',
    fontSize: 'Font Size',
    fontFamily: 'Font Family',
    showGrid: 'Show Grid',
    autoRender: 'Auto Render'
  },

  themes: {
    default: 'Default',
    simple: 'Simple',
    forest: 'Forest',
    neutral: 'Neutral',
    dark: 'Dark',
    business: 'Business',
    base: 'Base',
    custom: 'Custom'
  },

  orientations: {
    topToBottom: 'Top to Bottom',
    bottomToTop: 'Bottom to Top',
    leftToRight: 'Left to Right',
    rightToLeft: 'Right to Left'
  },

  nodeShapes: {
    rectangle: 'Rectangle',
    roundedRectangle: 'Rounded Rectangle',
    circle: 'Circle',
    diamond: 'Diamond',
    hexagon: 'Hexagon',
    parallelogram: 'Parallelogram'
  },

  arrowStyles: {
    arrow: 'Arrow',
    open: 'Open',
    filled: 'Filled',
    diamond: 'Diamond',
    circle: 'Circle'
  },

  lineStyles: {
    solid: 'Solid',
    dashed: 'Dashed',
    dotted: 'Dotted',
    curved: 'Curved',
    straight: 'Straight',
    orthogonal: 'Orthogonal'
  },

  syntax: {
    title: 'Syntax Help',
    node: 'Node',
    edge: 'Edge',
    subgraph: 'Subgraph',
    comment: 'Comment',
    styling: 'Styling',
    showMore: 'Show More'
  },

  actions: {
    render: 'Render Flowchart',
    save: 'Save Diagram',
    export: 'Export',
    share: 'Share'
  },

  messages: {
    renderSuccess: 'Flowchart rendered successfully',
    renderError: 'Error rendering flowchart: {error}',
    syntaxError: 'Syntax error: {error}',
    saved: 'Diagram has been saved',
    copied: 'SVG code has been copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    exported: 'Flowchart has been exported',
    emptyCode: 'Please enter Mermaid syntax code',
    rendering: 'Rendering...',
    errorTitle: 'Rendering Error'
  },

  examples: {
    flowchart: 'Flowchart',
    classDiagram: 'Class Diagram',
    sequenceDiagram: 'Sequence Diagram',
    entityRelationship: 'Entity Relationship Diagram',
    gantt: 'Gantt Chart',
    stateDiagram: 'State Diagram',
    pieChart: 'Pie Chart',
    userJourney: 'User Journey Map'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[Start] --> B{Is it correct?}
    B -->|Yes| C[Correct Result]
    B -->|No| D[Incorrect Result]
    C --> E[End]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant Client
    participant Server
    Client->>Server: Request data
    Server-->>Client: Respond with data
    Client->>Server: Submit form
    Server-->>Client: Confirm submission
`,
    gantt: `gantt
    title Project Progress Schedule
    dateFormat  YYYY-MM-DD
    section Planning Phase
    Requirement Collection           :a1, 2023-01-01, 30d
    System Design                  :after a1, 20d
    section Development Phase
    Backend Development            :2023-02-20, 45d
    Frontend Development           :2023-02-25, 40d
    section Testing Phase
    System Testing                :2023-04-05, 20d
    User Testing                  :2023-04-20, 15d
    section Deployment Phase
    Deployment                    :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> Editing
    Editing --> Reviewing: Submit for review
    Reviewing --> Rejected: Reject
    Reviewing --> Published: Approve
    Rejected --> Editing: Revise and resubmit
    Published --> [*]
`,
    pieChart: `pie
    title Website Traffic Sources Distribution
    "Search Engines" : 42.7
    "Direct Access" : 28.9
    "Social Media" : 18.5
    "Other Channels" : 9.9
`,
    classDiagram: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Cat {
        +String color
        +climb() void
    }
    Animal <|-- Dog
    Animal <|-- Cat
`
  }
};