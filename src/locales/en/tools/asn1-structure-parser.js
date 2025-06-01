export default {
    name: "ASN.1 Structure Parser",
    description: "A comprehensive tool for decoding, visualizing, and analyzing ASN.1 encoded data structures used in cryptography, telecommunications, and network protocols. Supports PEM, HEX, Base64, and DER formats with interactive tree visualization and multiple export options.",
    input: "Input Data",
    output: "Parsed Structure",
    inputFormat: "Input Format",
    inputPlaceholder: "Enter your ASN.1 data in the selected format...",
    loadExample: "Load Example",
    clickToUpload: "Click to upload file",
    orDragDrop: "or drag and drop",
    supportedFormats: "PEM, DER, HEX, Base64 files",
    showHexDump: "Show hexadecimal dump",
    trimLargeData: "Trim large data values",
    useDefinitionFile: "Use ASN.1 definition file for parsing",
    error: "Error",
    noData: "No ASN.1 data to display. Enter data in the input area or upload a file.",
    treeStructure: "ASN.1 Tree Structure",
    hexDump: "Hexadecimal Dump",
    parseError: "Failed to parse ASN.1 data. Please check your input format and data.",
    invalidPEM: "Invalid PEM format. Ensure it has proper BEGIN/END markers.",
    invalidHex: "Invalid hexadecimal data. Only hexadecimal characters (0-9, A-F) are allowed.",
    invalidBase64: "Invalid Base64 data.",
    derTextNotSupported: "DER format cannot be entered as text. Please upload a DER file instead.",
    unsupportedFormat: "Unsupported input format selected.",
    unexpectedEOF: "Unexpected end of data while parsing ASN.1 structure.",
    lengthTooLong: "ASN.1 length field too large to process.",
    fileReadError: "Error reading the uploaded file.",
    fileTooLarge: "File is too large. Maximum size is 10MB.",

    // Feature descriptions
    featureHeading: "Key Features",
    feature1: "Multi-format Support: Parse ASN.1 data in PEM, HEX, Base64, or DER formats",
    feature2: "Interactive Tree View: Visualize ASN.1 structure with expandable nodes",
    feature3: "Hex Dump Visualization: See raw data bytes with highlighting when hovering over nodes",
    feature4: "OID Resolution: Common Object Identifiers are displayed with their names",
    feature5: "Large Data Handling: Option to trim large values for better readability",

    // Common ASN.1 applications
    applicationsHeading: "Common Applications",
    application1: "X.509 Certificates: View and analyze SSL/TLS certificate structures",
    application2: "PKCS Files: Examine private key, certificate request, and certificate store formats",
    application3: "CMS/PKCS#7: Inspect signed and encrypted data structures",
    application4: "SNMP MIBs: Decode Simple Network Management Protocol data",

    // Instructions
    instructionsHeading: "How to Use",
    step1: "Select the format of your input data (PEM, HEX, Base64, DER)",
    step2: "Enter your data in the text area or upload a file",
    step3: "The parser will automatically process the data and display the structure",
    step4: "Explore the ASN.1 tree by expanding/collapsing nodes",
    step5: "Hover over nodes to highlight corresponding bytes in the hex dump",

    // Export
    exportAsJson: "Export as JSON",
    exportFormat: "Export Format",
    exportSuccess: "Structure exported successfully",
    exportFailed: "Failed to export structure",
    noDataToExport: "No data to export",
    copiedToClipboard: "Copied to clipboard",
    copyFailed: "Failed to copy to clipboard",
    hexSeparator: "Hex separator",
    none: "None",
    space: "Space",
    colon: "Colon",
    dash: "Dash",
    dot: "Dot",
    colorHighlight: "Color highlight by type",
    settings: "Settings",
    displayOptions: "Display Options",
    advancedOptions: "Advanced Options",
    expandAllNodes: "Expand all nodes",
    hexDumpDisabled: "Hex dump display is disabled. Enable it in settings to view the raw data bytes.",
    copyValue: "Copy Value",
    expandAll: "Expand",
    collapseAll: "Collapse",
    autoScroll: "Auto Scroll",
    article: {
        title: "ASN.1 Structure Parser - Decode and Visualize ASN.1 Encoded Data",

        // Introduction section
        introTitle: "What is ASN.1 Structure Parser?",
        introPara1: "ASN.1 Structure Parser is a powerful tool for decoding and visualizing Abstract Syntax Notation One (ASN.1) encoded data structures. ASN.1 is a standard interface description language for defining data structures that can be serialized and deserialized in a cross-platform way. It's extensively used in telecommunications and computer networking, particularly in cryptography protocols.",
        introPara2: "Our ASN.1 Structure Parser provides an interactive way to examine complex ASN.1 structures with support for multiple input formats including PEM, HEX, Base64, and DER. It offers a tree-based visualization that allows you to explore nested ASN.1 elements with ease, making it invaluable for developers, security researchers, and network engineers.",

        applicationTitle: "Common Applications of ASN.1 Parser",
        application1: "<strong>X.509 Certificates Analysis</strong>: Examine SSL/TLS certificates structure and contents for security audits and troubleshooting.",
        application2: "<strong>PKCS File Inspection</strong>: Analyze private keys, certificate requests, and certificate store formats in detail.",
        application3: "<strong>Cryptographic Message Syntax (CMS)</strong>: Inspect signed and encrypted data structures used in secure messaging protocols.",
        application4: "<strong>Network Protocol Analysis</strong>: Decode ASN.1 data used in protocols like SNMP, LDAP, and H.323.",
        introPara3: "ASN.1 structure parsing is essential for understanding the complex data formats used in modern security systems. Our parser makes this process intuitive by providing color-coded visualization, expandable tree views, and hexadecimal dumps of the encoded data.",

        // FAQ section
        faqTitle: "Frequently Asked Questions about ASN.1 Structure Parser",

        faq1Question: "What formats can the ASN.1 Structure Parser accept?",
        faq1Answer: "Our ASN.1 Structure Parser supports multiple input formats including PEM (Privacy Enhanced Mail), HEX (hexadecimal), Base64, and DER (Distinguished Encoding Rules) binary files. This flexibility allows you to work with ASN.1 data from various sources without needing format conversion tools.",

        faq2Question: "How do I analyze an X.509 certificate with the ASN.1 parser?",
        faq2Answer: "To analyze an X.509 certificate, simply select 'PEM' as your input format and paste your certificate (including the BEGIN/END CERTIFICATE markers) into the input area. The parser will automatically decode the structure and display it as an interactive tree, allowing you to expand nodes and examine specific certificate fields such as subject, issuer, validity periods, and extensions.",

        faq3Question: "Can I export the parsed ASN.1 structure for documentation?",
        faq3Answer: "Yes, you can export the parsed ASN.1 structure as JSON by clicking the 'Export as JSON' button in the settings panel. This feature is useful for documenting structures, sharing with colleagues, or further processing the structured data in your own applications.",

        faq4Question: "What is the difference between ASN.1, DER, and BER encoding?",
        faq4Answer: "ASN.1 (Abstract Syntax Notation One) is the language used to define data structures, while DER (Distinguished Encoding Rules) and BER (Basic Encoding Rules) are specific encoding rules that determine how ASN.1 structures are converted to binary format. DER is a subset of BER that ensures each ASN.1 value has exactly one encoding, making it preferred for cryptographic applications. Our parser primarily handles DER-encoded ASN.1 structures, which is the most common in security applications.",

        faq5Question: "How does the ASN.1 parser handle Object Identifiers (OIDs)?",
        faq5Answer: "The ASN.1 Structure Parser automatically recognizes common Object Identifiers (OIDs) and displays their friendly names alongside the numeric OID values. For example, '1.2.840.113549.1.1.11' will be shown as 'sha256WithRSAEncryption'. This feature makes it easier to understand the purpose of different elements in complex structures like X.509 certificates and cryptographic messages.",

        // Tutorial section
        tutorialTitle: "How to Use the ASN.1 Structure Parser",

        step1Title: "Step 1: Select Input Format",
        step1Content: "Begin by selecting the appropriate input format for your ASN.1 data. Choose from PEM, HEX, Base64, or DER options using the radio buttons in the input panel. The format you select determines how the parser will interpret your input data.",

        step2Title: "Step 2: Enter or Upload ASN.1 Data",
        step2Content: "Enter your ASN.1 encoded data into the text area or upload a file by clicking on the upload zone. For PEM format, ensure that your data includes the proper BEGIN/END markers. For hexadecimal input, you can use various separators (space, colon, etc.) which can be configured in the settings panel.",
        step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

        step3Title: "Step 3: Explore the ASN.1 Tree Structure",
        step3Content: "Once your data is parsed, the ASN.1 tree structure will be displayed in the lower left panel. You can expand and collapse nodes by clicking on the triangles. Each node shows its tag type (like SEQUENCE, INTEGER, OBJECT IDENTIFIER) and value. The color coding helps distinguish between different ASN.1 types.",

        step4Title: "Step 4: Examine Hexadecimal Representation",
        step4Content: "If the 'Show hexadecimal dump' option is enabled, the right panel will display a hexadecimal dump of your ASN.1 data. Hovering over elements in the tree will highlight the corresponding bytes in the hex dump, helping you understand the binary structure of the encoding.",
        step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

        step5Title: "Step 5: Configure Display Options",
        step5Content: "Use the settings panel to customize the display according to your needs. Options include showing/hiding the hex dump, trimming large data values for better readability, choosing hex separators, and enabling color highlighting by type. You can also expand all nodes at once for a complete view of the structure.",

        // Resources section
        resourcesTitle: "Additional Resources",

        relatedToolsTitle: "Related Tools",
        relatedTool1: "Base64 Converter - Encode and decode Base64 data",
        relatedTool2: "Base64 Hex Converter - Convert between Base64 and hexadecimal formats, with customizable separators and case sensitivity",
        relatedTool3: "Certificate Decoder - Analyze X.509 certificates in detail",

        externalResourcesTitle: "External Resources",
        externalResource1: "ITU-T Introduction to ASN.1 - Official documentation on ASN.1 standard",
        externalResource2: "RFC 5280 - Internet X.509 Public Key Infrastructure Certificate and CRL Profile"
    },
}; 