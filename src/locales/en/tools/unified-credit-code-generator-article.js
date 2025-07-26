export default {
    title: "Unified Social Credit Code Generator - Complete Guide",
    introTitle: "What is the Unified Social Credit Code Generator?",
    introPara1: "The <strong>Unified Social Credit Code Generator</strong> is a specialized tool designed to automatically generate valid Chinese unified social credit codes that comply with the national standard GB 32107-2015. These 18-character codes serve as unique identifiers for businesses, organizations, and other legal entities operating in China, similar to EINs (Employer Identification Numbers) in the US or Business Numbers in other countries.",
    introPara2: "Our unified social credit code generator creates codes that follow the exact specification required by Chinese regulatory authorities, including proper registration authority codes, entity type identifiers, administrative region codes, and valid checksums calculated using the ISO 7064:1983 MOD 11-2 algorithm. Whether you need test data for software development, database population, or simply to understand the structure of these critical business identifiers, this tool provides a reliable solution for generating authentic-looking, structurally valid unified social credit codes.",
    
    scenariosTitle: "Application Scenarios for Unified Social Credit Code Generation",
    scenariosPara: "The unified social credit code generator tool offers practical solutions for various professional and technical scenarios:",
    scenario1: "<strong>Software Development and Testing</strong>: Generate valid test data for applications that process Chinese business registrations, tax filings, or regulatory compliance systems, ensuring your software correctly handles unified social credit code validation without using real business identifiers.",
    scenario2: "<strong>Database Testing and Quality Assurance</strong>: Populate test databases with realistic unified social credit codes for comprehensive quality assurance testing, ensuring systems can process actual Chinese business identifiers without compromising real data.",
    scenario3: "<strong>Education and Training</strong>: Provide realistic examples for training courses on Chinese business registration, compliance, or international trade, helping students understand the structure and validation requirements of unified social credit codes.",
    scenario4: "<strong>Data Migration Validation</strong>: Test data migration processes involving Chinese business entities by generating valid structured identifiers that match the expected format and validation rules.",
    scenario5: "<strong>Business Process Simulation</strong>: Create realistic mock data for business process workflows involving regulatory filings, business registration, or tax compliance simulations for multinational operations in China.",
    
    tutorialTitle: "How to Use the Unified Social Credit Code Generator",
    step1Title: "Step 1: Configure Registration Authority",
    step1Content: "Select the appropriate registration authority code from the list. This represents the government department responsible for registering the entity. For most business entities, the Industry & Commerce code (8) is the most common selection, but you can choose others based on your specific requirements.",
    
    step2Title: "Step 2: Select Entity Type",
    step2Content: "Choose the entity type that matches your needs. Options include Enterprise (1), Individual Business (2), Farmers Cooperative (3), or Others (9). This selection determines the second character in the generated code.",
    
    step3Title: "Step 3: Choose Region Code",
    step3Content: "Select either a specific administrative region from the list or choose 'Random Selection' to allow the generator to randomly assign valid region codes. The region code represents the geographical location where the entity is registered.",
    
    step4Title: "Step 4: Set Quantity and Generate",
    step4Content: "Specify how many unified social credit codes you want to generate (from 1 to 1000), then click the 'Generate Codes' button. The tool will instantly create valid codes that can be copied individually, copied all at once, or exported in TXT, CSV, or Excel formats for your convenience.",
    
    tipTitle: "Pro Tip:",
    tipContent: "When using generated unified social credit codes for testing, it's often helpful to generate codes from specific regions that match your test scenarios. For example, if testing a system for Beijing businesses, selecting the Beijing region code (110000) will create more realistic test data for your specific use case.",
    
    faqTitle: "Frequently Asked Questions about Unified Social Credit Codes",
    
    faq1Question: "What is the difference between a Unified Social Credit Code and an Organization Code?",
    faq1Answer: "The <strong>Unified Social Credit Code (统一社会信用代码)</strong> is an 18-character code that replaced several previous business identifiers in China as part of a regulatory simplification initiative. The Organization Code (组织机构代码) was a 9-character identifier previously used for businesses and is now incorporated as part of the unified code (characters 9-17). The unified code combines information previously spread across business license numbers, tax registration certificates, organization codes, and social insurance registrations into a single identifier that follows the GB 32107-2015 standard.",
    
    faq2Question: "Are the unified social credit codes generated by this tool valid for actual business registration?",
    faq2Answer: "No. The codes generated by this tool are structurally valid and will pass format validation checks, but they are <strong>randomly generated for testing and educational purposes only</strong>. Using these generated codes for actual business registration, tax filing, or regulatory documents would constitute fraud. In China, legitimate unified social credit codes are issued only by authorized government agencies after proper business registration procedures.",
    
    faq3Question: "How can I verify if a unified social credit code is valid?",
    faq3Answer: "To verify a unified social credit code, you can check both its format and checksum validity:<ol><li>Ensure it contains exactly 18 characters</li><li>Confirm it contains only numbers and uppercase letters (excluding I, O, S, V, Z)</li><li>Verify the checksum (18th character) using the ISO 7064:1983 MOD 11-2 algorithm based on the first 17 characters</li><li>Check that the region code (characters 3-8) corresponds to a valid administrative region in China</li></ol>For official verification of a registered business, you should consult the National Enterprise Credit Information Publicity System (国家企业信用信息公示系统) at <a href='https://www.gsxt.gov.cn' target='_blank' rel='noopener noreferrer'>www.gsxt.gov.cn</a>.",
    
    faq4Question: "What's the meaning of each part of the unified social credit code?",
    faq4Answer: "The 18-character unified social credit code contains several distinct sections:<ul><li><strong>1st character</strong>: Registration authority code (indicates which government department registered the entity)</li><li><strong>2nd character</strong>: Entity type code (indicates whether it's an enterprise, individual business, etc.)</li><li><strong>3rd-8th characters</strong>: Administrative region code (based on GB/T 2260)</li><li><strong>9th-17th characters</strong>: Organization code (similar to the previous 9-digit organization code system)</li><li><strong>18th character</strong>: Checksum (calculated using the ISO 7064:1983 MOD 11-2 algorithm)</li></ul>Each section provides specific information about the registered entity, creating a comprehensive identification system.",
    
    faq5Question: "When was the unified social credit code system implemented in China?",
    faq5Answer: "The unified social credit code system was officially implemented in China starting in October 2015 with the publication of the GB 32107-2015 national standard. The system was part of China's broader business registration reform and social credit system development. Between 2015 and 2017, there was a transition period during which existing businesses needed to update their registration information to receive the new unified code. Since 2018, all legally registered entities in China must have a unified social credit code as their primary identifier for all government interactions, tax filings, and regulatory compliance.",
    
    standardsTitle: "Relevant Standards and References",
    standardsPara: "The unified social credit code system is based on several Chinese national standards:",
    standard1: "<strong>GB 32107-2015</strong>: The core standard that defines the basic rules for the code's structure, character set, and format. <a href='https://www.samr.gov.cn' target='_blank' rel='noopener noreferrer'>Source: State Administration for Market Regulation</a>",
    standard2: "<strong>GB/T 2260</strong>: The standard for administrative division codes of the People's Republic of China, which defines the region codes used in characters 3-8. <a href='http://www.stats.gov.cn' target='_blank' rel='noopener noreferrer'>Source: National Bureau of Statistics</a>",
    standard3: "<strong>ISO 7064:1983</strong>: The international standard that specifies the MOD 11-2 algorithm used for calculating the checksum character.",
    
    relatedToolsTitle: "Related Tools You Might Find Useful",
    relatedTool1Title: "Chinese ID Number Generator",
    relatedTool1Desc: "Generate valid Chinese citizen ID numbers (身份证号码) for testing and development purposes.",
    relatedTool2Title: "Hash Calculator",
    relatedTool2Desc: "Calculate various hash values including MD5, SHA-1, SHA-256, and more.",
    relatedTool3Title: "Password Generator",
    relatedTool3Desc: "Generate secure, random passwords with customizable options."
}
