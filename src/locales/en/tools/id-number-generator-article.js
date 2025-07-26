export default {
  introduction: {
    title: "Chinese ID Number Generator: What It Is and How It Works",
    p1: "The Chinese ID Number Generator is a specialized tool designed to create valid Chinese Resident Identity Card numbers for testing and development purposes. These generated ID numbers follow the official format and validation rules established by the Chinese government, making them structurally valid while being completely fictional.",
    p2: "This tool is particularly valuable for software developers, QA testers, and UI/UX designers who need to work with Chinese ID numbers in their applications without using real personal data. The generated ID numbers contain embedded information such as region codes, birth dates, and gender details - all adhering to the official format.",
    p3: "By providing options to customize region, birth date range, gender, and quantity, our Chinese ID generator offers flexibility while maintaining compliance with the required format and validation algorithms.",
    structureTitle: "Understanding Chinese ID Number Structure",
    structureDesc: "Every Chinese ID number consists of 18 digits that follow a specific pattern:"
  },
  useCases: {
    title: "Practical Applications of the ID Number Generator",
    case1: {
      title: "Software Testing and Development",
      description: "For developers working on systems that need to validate Chinese ID numbers, this tool generates test data that passes validation checks without using real personal information. Ideal for form validation testing, database population, and API testing."
    },
    case2: {
      title: "UI/UX Design and Prototyping",
      description: "Designers can use these generated ID numbers when creating mockups and prototypes for applications that will handle Chinese user identification, ensuring realistic data representation without privacy concerns."
    },
    case3: {
      title: "Educational Purposes",
      description: "Students and educators learning about data structures, validation algorithms, or Chinese administrative systems can use this tool to understand how ID numbers encode information and how verification works."
    },
    case4: {
      title: "Data Privacy Compliance",
      description: "Organizations can avoid using real ID numbers in non-production environments, helping comply with data protection regulations while still having realistic test data for their systems."
    }
  },
  guide: {
    title: "How to Use the Chinese ID Number Generator",
    step1: {
      title: "Select Region Settings",
      description: "Choose between random regions or select specific provinces and cities. You can enable multi-select to generate ID numbers from different regions or search for specific locations using the search box."
    },
    step2: {
      title: "Set Birth Date Range",
      description: "Define the range of birth dates you want in your generated ID numbers. This allows you to create ID numbers for specific age groups or time periods, from historical dates to more recent ones."
    },
    step3: {
      title: "Choose Gender Option",
      description: "Select whether you want to generate random gender ID numbers, or specifically male or female IDs. In Chinese ID numbers, the gender is encoded in the sequence number (odd for males, even for females)."
    },
    step4: {
      title: "Generate and Export",
      description: "Specify how many ID numbers you need and click the Generate button. Once generated, you can copy individual numbers, copy all at once, or export the results in TXT, CSV, or Excel formats for further use."
    },
    tip: "For optimal results, consider the specific requirements of your testing scenario. If you're testing a system with age restrictions, adjust the birth date range accordingly. For regional testing, select the specific provinces relevant to your application.",
    additionalTip: "To verify the correctness of generated ID numbers, you can use our",
    hashCalculatorLink: "Hash Calculator tool"
  },
  faq: {
    title: "Frequently Asked Questions about Chinese ID Numbers",
    q1: "Are the generated Chinese ID numbers legally valid?",
    a1: "No, the generated ID numbers are structurally valid (they pass format validation and checksum verification) but are completely fictional. They are generated for testing, educational, and demonstration purposes only. Using these numbers for official identification or to misrepresent identity is illegal.",
    q2: "How does the Chinese ID number encode gender information?",
    a2: "Gender information in Chinese ID numbers is encoded in the second-to-last digit (the 17th digit) of the 18-digit number. If this digit is odd (1, 3, 5, 7, 9), the ID belongs to a male. If it's even (2, 4, 6, 8, 0), the ID belongs to a female.",
    q3: "Can I generate ID numbers for specific regions of China?",
    a3: "Yes, our tool supports selecting specific provinces and cities across China. You can either choose individual regions or enable multi-select to generate ID numbers from multiple regions simultaneously. We include all prefecture-level cities and provincial administrative divisions.",
    q4: "What's the meaning of the last digit in a Chinese ID number?",
    a4: "The last digit (18th digit) is a checksum digit calculated based on the previous 17 digits using a specific algorithm. This checksum helps verify the ID's validity and can be 0-9 or X (representing 10).",
    q5: "How often are Chinese ID number formats updated?",
    a5: "The 18-digit format has been the standard since October 1999. While the format itself rarely changes, the administrative region codes may be updated as China reorganizes its administrative divisions. Our generator uses up-to-date region codes.",
    officialSource: "Ministry of Public Security of China (Official Website)"
  },
  resources: {
    title: "Related Tools and Resources",
    passwordGenerator: "Password Generator - Generate random passwords for testing and development",
    wordShuffler: "Word Shuffler - Shuffle words, phrases, or lines of text while keeping the format",
    hashCalculator: "Hash Calculator - Verify data integrity with multiple hash algorithms",
    wikipediaLink: "Wikipedia: Resident Identity Card (China) - Detailed information about Chinese ID card system"
  },
  conclusion: {
    title: "Conclusion",
    p1: "The Chinese ID Number Generator provides a valuable resource for developers, testers, and designers working with systems that need to handle Chinese identification. By generating valid-format ID numbers that don't belong to real individuals, it helps balance the need for realistic test data with privacy and ethical considerations.",
    p2: "Whether you're developing a new application, testing existing systems, or creating educational materials, this tool offers the flexibility and accuracy needed to work confidently with Chinese ID number formats while respecting data privacy principles.",
    disclaimer: "Disclaimer: This tool is provided for legitimate testing, educational, and development purposes only. Generated ID numbers should never be used for identity fraud, misrepresentation, or any illegal activities."
  }
}
