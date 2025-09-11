export default {
    title: 'Baseline Calculator User Guide - Online Tool for Coordinate Baseline Length and Azimuth Calculation',
    functionTitle: 'What is a Baseline Calculator and Its Purpose?',
    intro: 'Our <strong>Baseline Calculator</strong> is a professional online tool that quickly and accurately calculates the baseline length and azimuth between two points. This tool supports coordinate variance input, can calculate error propagation results, and generate error ellipse visualizations. It is suitable for surveying engineering, GIS applications, civil engineering, and geographic research. Using our <strong>coordinate baseline calculation tool</strong>, you can easily process large amounts of coordinate data and display results in an intuitive visual way.',

    useCasesTitle: 'Common Application Scenarios for Baseline Calculator',
    useCases: [
        'Traverse measurement and control network adjustment in surveying engineering',
        'Spatial data analysis and distance calculation in GIS projects',
        'Construction layout and measurement in civil engineering',
        'Spatial relationship analysis in geographic research',
        'Baseline solution in navigation positioning systems',
        'Point relationship analysis in geological exploration'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'When performing high-precision measurements, it is recommended to input coordinate variance data to obtain more accurate error analysis results. The error ellipse visualization function can help you intuitively understand the distribution of point position errors.',

    conclusion: 'The <strong>Baseline Calculator</strong> is extremely useful for surveying engineers, GIS professionals, civil engineers, and anyone who needs to process coordinate data. By using our tool, you can save a significant amount of manual calculation time, avoid calculation errors, and better understand data through visualization features. Our tool makes the baseline calculation process simple and efficient, without the need to install any professional software.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What are baseline length and azimuth?',
            answer: '<strong>Baseline length</strong> refers to the straight-line distance between two points, and <strong>azimuth</strong> is the angle clockwise from north to the baseline. In surveying, a baseline is a basic component of a control network, and its length and azimuth are important parameters describing the spatial relationship between two points. By accurately calculating baseline length and azimuth, reliable foundation data can be provided for subsequent surveying work.'
        },
        {
            question: 'How to input coordinate variance data?',
            answer: 'When using our <strong>Baseline Calculator</strong>, you can directly input the X and Y coordinate variances of the start and end points in single point input mode, or append variance information after each line of data in batch input mode. The variance data format is: start point X, start point Y, end point X, end point Y, start point X variance, start point Y variance, end point X variance, end point Y variance. After inputting variance data, the tool will automatically calculate error propagation results and generate error ellipses.'
        },
        {
            question: 'What does the error ellipse represent?',
            answer: 'The <strong>error ellipse</strong> is a graphical tool representing the distribution of point position errors. The semi-major and semi-minor axes of the ellipse represent the maximum and minimum error directions, respectively, and the orientation angle represents the direction of the semi-major axis. Through error ellipse visualization, you can intuitively understand the magnitude and directional distribution of point position errors, which is very important for evaluating measurement accuracy and performing quality control.'
        },
        {
            question: 'How to process multiple baseline calculations in batch?',
            answer: 'Using our <strong>batch baseline calculation function</strong>, you can input multiple baseline data line by line in the batch input box. Each line of data format is: start point X, start point Y, end point X, end point Y [, start point X variance, start point Y variance, end point X variance, end point Y variance]. After completing the input, click the "Calculate Baseline" button, and the system will automatically calculate the length, azimuth, and related error information for all baselines.'
        },
        {
            question: 'What is the purpose of the map visualization function?',
            answer: 'The map visualization function can intuitively display all calculated baselines and points in a two-dimensional coordinate system. Start points are represented by green dots, end points by red dots, and baselines are connected by blue lines. If variance data is input, red error ellipses will also be displayed. This function is particularly suitable for checking data reasonability, identifying outliers, and performing spatial relationship analysis.'
        }
    ],

    tutorialTitle: 'How to Use the Baseline Calculator',
    steps: [
        {
            title: 'Select Input Mode',
            description: 'Choose the appropriate input mode at the top of the left input area: single point input or batch input. Single point input is suitable for calculating a few baselines, while batch input is suitable for processing large amounts of data.',
            note: 'Batch input mode supports calculations with variance data and offers more flexible formatting.'
        },
        {
            title: 'Input Coordinate Data',
            description: 'Input coordinate data according to the selected input mode. In single point input mode, input the X and Y coordinates of the start and end points separately; in batch input mode, input multiple baseline data line by line, with each line in the format: start point X, start point Y, end point X, end point Y.',
            note: 'If error analysis is needed, corresponding coordinate variance data should also be input.'
        },
        {
            title: 'Execute Calculation',
            description: 'Click the <strong>"Calculate Baseline"</strong> button to start the calculation. The system will automatically calculate the length and azimuth of each baseline based on your input coordinate data, and calculate error propagation results and generate error ellipse parameters when variance data is input.',
            note: 'The calculation process is usually completed within seconds, even for large amounts of data.'
        },
        {
            title: 'View and Analyze Results',
            description: 'After the calculation is complete, the results will be displayed in the output area on the right. You can view detailed information for each baseline, including baseline length, azimuth, error propagation results, and error ellipse parameters. The map visualization area will display the distribution of all baselines and points.',
            note: 'Click the "Copy" button for any result item to quickly copy the calculation results for that record.'
        },
        {
            title: 'Export Report',
            description: 'If you need to save the results, you can click the <strong>"Export CSV"</strong> or <strong>"Export TXT"</strong> button at the top of the output area. The system will generate a report containing all calculation results, convenient for printing and sharing.',
            note: 'The exported report contains complete calculation information, suitable for project documentation and reporting.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Baseline Calculator. Now you can easily calculate the baseline length and azimuth between any two points, perform error analysis, and better understand data through visualization features.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Coordinate Converter',
            description: 'Convert latitude and longitude coordinates between different coordinate systems, supporting multiple projection systems.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Map Sheet Calculator',
            description: 'Calculate map sheet numbers based on latitude and longitude coordinates, supporting multiple scales.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'GNSS Time Converter',
            description: 'Convert between UTC time and GPS week seconds, BeiDou time.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Gauss Projection Calculator',
            description: 'Perform Gauss-Krüger projection forward and inverse calculations, supporting 3-degree and 6-degree zones.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'NOAA - National Geodetic Survey',
            description: 'Measurement benchmarks, coordinate systems, and measurement tools provided by the U.S. National Geodetic Survey',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        },
        {
            name: 'International Federation of Surveyors (FIG)',
            description: 'Surveying standards, best practices, and research resources provided by the International Federation of Surveyors',
            url: 'https://www.fig.net/resources/publications/'
        },
        {
            name: 'Journal of Surveying Engineering - ASCE Library',
            description: 'Surveying engineering academic journal published by the American Society of Civil Engineers, containing the latest research and methods',
            url: 'https://ascelibrary.org/journal/jsued2'
        }
    ]
}