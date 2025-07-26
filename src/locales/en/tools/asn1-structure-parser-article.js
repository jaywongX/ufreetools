export default {
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
}
