export default {
    title: 'GNSS Time Converter Guide - Online GPS Week/Seconds to UTC Time Conversion Tool',
    functionTitle: 'What is the GNSS Time Converter and its purpose?',
    intro: 'Our <strong>GNSS Time Converter</strong> is a professional online tool that enables mutual conversion between UTC time, GPS week/seconds, and BeiDou time. This tool supports Julian date calculation, batch processing, and timeline visualization functions, suitable for satellite navigation positioning, surveying engineering, scientific research, and other fields. Using our <strong>GPS week/seconds conversion tool</strong>, you can quickly and accurately complete various GNSS time system conversion needs.',

    useCasesTitle: 'Common application scenarios for the GNSS Time Converter',
    useCases: [
        'Time synchronization in satellite navigation positioning data processing',
        'GNSS receiver data parsing and post-processing',
        'Precise time conversion in surveying engineering',
        'Time reference unification in aerospace fields',
        'Multi-system time data fusion in scientific research projects',
        'Comparative analysis of BeiDou navigation system and GPS system data'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'When performing high-precision time conversions, please note the leap second differences between different GNSS systems. GPS time has a fixed leap second difference with UTC time, and BeiDou time also has different leap second differences with UTC time. These differences change over time.',

    conclusion: 'The <strong>GNSS Time Converter</strong> is very useful for satellite navigation engineers, surveying professionals, scientific researchers, and anyone who needs to process GNSS time data. By using our tool, you can save a lot of manual calculation time, avoid conversion errors, and improve work efficiency. Our tool makes the GNSS time conversion process simple and efficient, without the need to install any professional software.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What are GPS week and time of week?',
            answer: 'GPS week is the continuous week count starting from January 6, 1980, at 00:00:00, and time of week (TOW) is the number of seconds within a week starting from Sunday at 00:00. The GPS time system uses atomic time seconds as a time reference, does not leap seconds after startup, and maintains time continuity. This representation method is widely used in satellite navigation because it can avoid the complexity caused by leap second adjustments.'
        },
        {
            question: 'What is the difference between UTC time and GPS time?',
            answer: 'UTC (Coordinated Universal Time) is the international standard time, which periodically adds leap seconds to adapt to changes in Earth\'s rotation speed. GPS time is based on atomic time, aligned with UTC time from January 6, 1980, but does not adjust for leap seconds. Therefore, there is an integer second difference between GPS time and UTC time, and this difference increases as leap seconds are added. As of now, GPS time is about 18 seconds ahead of UTC time.'
        },
        {
            question: 'How to batch convert multiple time data?',
            answer: 'Using our <strong>batch time conversion function</strong>, you can input multiple time data line by line in the batch input box. According to the selected input mode (date time, GPS time, or BeiDou time), input data in the corresponding format, one record per line. For example, the GPS time format is "week,seconds", such as "2234,172800". After completing the input, click the "Convert Time" button, and the system will automatically convert all data.'
        },
        {
            question: 'What is Julian date? Why do we need to calculate it?',
            answer: 'Julian date is a continuous day counting method, counting days from January 1, 4713 BC, at 12:00, widely used in astronomy and aerospace fields. Julian date provides a unified time representation method, facilitating cross-system time conversion and long time span calculations. In GNSS applications, Julian date is commonly used for orbit calculations and time synchronization scenarios.'
        },
        {
            question: 'What is the purpose of the timeline visualization function?',
            answer: 'The timeline visualization function can intuitively display the relative position relationships of all converted time points on a graphical interface. By viewing the timeline, you can quickly understand the intervals and distribution between different time points, helping to discover anomalies or patterns in the data. This function is particularly suitable for analyzing long time series GNSS data.'
        }
    ],

    tutorialTitle: 'How to Use the GNSS Time Converter',
    steps: [
        {
            title: 'Select Input Mode',
            description: 'Select the appropriate input mode at the top of the left input area: date time, GPS time, or BeiDou time. Choose the corresponding mode according to your data type to correctly parse the input data.',
            note: 'The date time mode supports standard ISO format, such as 2023-01-01T00:00:00.'
        },
        {
            title: 'Input Time Data',
            description: 'Enter time data in the corresponding input box. You can input a single time point or multiple time points in the batch input box, one record per line. The system supports various input formats to adapt to different needs.',
            note: 'When batch inputting, please ensure that each line of data has a consistent format to avoid conversion errors.'
        },
        {
            title: 'Set Output Format',
            description: 'Select the output time format in the parameter settings area. You can choose ISO standard format (YYYY-MM-DD HH:mm:ss) or custom format. Choose the appropriate format according to subsequent usage requirements.',
            note: 'ISO format is convenient for program processing, while custom format is convenient for human reading.'
        },
        {
            title: 'Execute Conversion',
            description: 'Click the <strong>"Convert Time"</strong> button to start the conversion. The system will automatically calculate and display UTC time, GPS time, BeiDou time, Julian date, and other information based on your selected input mode and input data.',
            note: 'The conversion process is usually completed within seconds, even for large amounts of data.'
        },
        {
            title: 'View and Export Results',
            description: 'After the conversion is complete, the results will be displayed in the right output area. You can view detailed conversion information for each time point, use the timeline visualization function to view time distribution, or click the "Export CSV" button to save the results as a file.',
            note: 'Click the "Copy" button for each result item to quickly copy the conversion result of that record.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our GNSS Time Converter. Now you can easily complete mutual conversions between UTC time, GPS time, and BeiDou time for satellite navigation, surveying engineering, scientific research, and various other application scenarios.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Coordinate Converter',
            description: 'Convert latitude and longitude coordinates between different coordinate systems, supporting various projection systems.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS Track Replay',
            description: 'Upload and visualize GPS track data, supporting various file formats.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gaussian Projection Calculator',
            description: 'Perform Gauss-Krüger projection forward and inverse calculations, supporting 3-degree and 6-degree zones.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Map Sheet Calculator',
            description: 'Calculate map sheet numbers based on latitude and longitude coordinates, supporting various scales.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'Global Navigation Satellite System Time Basics',
            description: 'Detailed introduction to GNSS time systems',
            url: 'https://www.ngs.noaa.gov/CORS/GNSS-Time.shtml'
        },
        {
            name: 'GPS Time System Explained',
            description: 'Detailed introduction to the GPS time system',
            url: 'https://en.wikipedia.org/wiki/GPS_time'
        },
        {
            name: 'BeiDou Time System',
            description: 'BeiDou navigation system time reference explanation',
            url: 'https://en.wikipedia.org/wiki/BeiDou'
        }
    ]
}