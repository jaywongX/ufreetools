export default {
    title: 'Audio to PCM Tool: Online Audio Format Converter Guide',
    functionTitle: 'What is the Audio to PCM Tool and Its Uses?',
    intro: 'Our <strong>Audio to PCM Tool</strong> is a professional online audio format converter that can convert WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE and other audio formats to PCM raw audio data. PCM (Pulse Code Modulation) is the most original form of digital audio representation, without any compression, preserving complete audio information. Use our <strong>online audio to PCM converter</strong> to precisely control sample rate, bit depth, and channel settings for speech recognition, audio analysis, professional audio processing, and more.',
    
    useCasesTitle: 'Common Use Cases for Audio to PCM Conversion',
    useCases: [
        'Prepare standard PCM audio input for speech recognition systems (e.g., Baidu Speech, iFlytek)',
        'Convert various audio formats to raw PCM data for audio signal processing and analysis',
        'Prepare raw audio data for embedded audio devices or game engines',
        'Raw waveform data analysis in audio research and education',
        'Intermediate format conversion for audio editing software',
        'Audio preprocessing for voice communication systems (e.g., VoIP)',
        'Audio feature extraction and machine learning model training',
        'Audio test signal generation and device calibration'
    ],
    
    tipTitle: 'Pro Tip:',
    tipContent: 'PCM format parameter recommendations: For speech recognition, use 16000Hz sample rate, 16-bit depth, mono; CD quality standard is 44100Hz, 16-bit, stereo; professional audio production recommends 48000Hz or higher, 24-bit. PCM files are large, about 10 times the size of equivalent MP3, ensure sufficient storage space.',
    
    conclusion: '<strong>Audio to PCM format conversion</strong> tool is particularly useful for speech recognition developers, audio algorithm engineers, game developers, and audio researchers. By using our online audio to PCM converter, you can convert audio of various formats to raw PCM data with precise control over sample rate and bit depth, meeting technical requirements for different application scenarios. Our tool supports batch processing, all processing is done locally in your browser, ensuring your audio privacy and data security.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What input formats does the Audio to PCM tool support?',
            answer: 'Our <strong>online audio to PCM converter</strong> supports various common audio formats including WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE and more. You can upload multiple audio files of different formats simultaneously for batch conversion. The tool automatically detects and processes input formats.'
        },
        {
            question: 'What is the difference between PCM and WAV formats?',
            answer: 'WAV is a container format that typically contains PCM-encoded audio data, but WAV files include header information (metadata such as sample rate, bit depth, channels). Pure PCM data is raw audio samples without file headers. Some applications (like speech recognition APIs) require pure PCM data input, where WAV file headers need to be removed.'
        },
        {
            question: 'How to prepare PCM audio for speech recognition?',
            answer: 'Most speech recognition systems (e.g., Baidu Speech Recognition, iFlytek, Google Speech API) require PCM format parameters: <strong>16000Hz sample rate, 16-bit depth, mono</strong>. Select these parameters during conversion to get PCM audio that meets requirements. Some systems also support 8000Hz sample rate.'
        },
        {
            question: 'What are sample rate and bit depth?',
            answer: '<strong>Sample rate</strong> is the number of audio samples collected per second, determining the audio frequency range. 8000Hz suits telephone voice, 16000Hz suits speech recognition, 44100Hz is CD standard, 48000Hz is professional audio standard. <strong>Bit depth</strong> determines the precision of each sample point, 8-bit is lower precision, 16-bit is standard, 24-bit and 32-bit are for professional audio production.'
        },
        {
            question: 'Why are PCM files so large?',
            answer: 'PCM is uncompressed raw audio data without any compression processing. For example, 1 minute of 16-bit, 44100Hz stereo PCM audio is about 10MB. This is the trade-off for PCM format to guarantee audio integrity. If you need smaller file sizes, consider converting to FLAC (lossless compression) or MP3 (lossy compression) formats.'
        },
        {
            question: 'Is the conversion process secure? Will audio be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure frontend technology, all audio processing is done locally in your browser. Your audio files are not uploaded to any server, ensuring privacy and data security. You can safely process audio files containing sensitive content.'
        },
        {
            question: 'What is the difference between signed and unsigned PCM?',
            answer: 'This is the storage format of PCM data. <strong>Signed format</strong> uses two\'s complement to represent positive and negative values, which is the standard format for most audio processing with better compatibility. <strong>Unsigned format</strong> only represents positive values, mainly used for certain specific hardware or legacy systems. Generally, signed format is recommended.'
        }
    ],
    
    tutorialTitle: 'How to Use the Audio to PCM Tool',
    steps: [
        {
            title: 'Upload Your Audio Files',
            description: 'First, upload the audio files you want to convert to PCM format. You can upload in two ways: <strong>drag files</strong> to the upload area or <strong>click browse</strong> to select files. The tool supports WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE and other formats. You can upload multiple files at once for batch processing.',
            note: 'Multiple audio files of different formats can be uploaded simultaneously, the tool will automatically identify and process them.'
        },
        {
            title: 'Preview Audio Files',
            description: 'After uploading, you will see all uploaded audio files in the preview area on the left. Each file shows file name, original format, file size, and duration. You can click the play button to preview the audio and confirm the correct files are selected. To delete a file, click the delete icon.',
            note: 'For batch processing, it is recommended to preview the audio list first to ensure all files to be converted have been correctly uploaded.'
        },
        {
            title: 'Set PCM Parameters',
            description: 'Before conversion, you need to set PCM output parameters. Choose the appropriate <strong>sample rate</strong> (8000Hz-48000Hz), set <strong>bit depth</strong> (8-bit, 16-bit, 24-bit, 32-bit), select <strong>channels</strong> (mono or stereo). For speech recognition applications, it is recommended to select 16000Hz sample rate, 16-bit depth, mono.',
            note: 'Different application scenarios have different PCM parameter requirements, please choose appropriate parameter combinations based on target use.'
        },
        {
            title: 'Convert to PCM Format',
            description: 'After setting up, click the <strong>"Convert to PCM"</strong> button to start processing. The tool will process all uploaded audio files sequentially, showing progress information during batch processing. Conversion time depends on file size and quantity, most audio can be completed in seconds to tens of seconds.',
            note: 'Please keep the page open during conversion, do not close the browser tab.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion is complete, all converted PCM files will be displayed in the output area on the right. Each file shows original size, converted size, and other information. Since PCM is raw data format, some browsers may not be able to play directly, you can download and use in professional audio software.',
            note: 'PCM files are large, please ensure sufficient storage space.'
        },
        {
            title: 'Download Conversion Results',
            description: 'After confirming the conversion results, you can click the <strong>"Download PCM"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted PCM files into a ZIP file for one-time download. All processing is done locally in your browser, ensuring your audio privacy and security.',
            note: 'Downloaded PCM files can be used directly in speech recognition APIs, audio analysis software, or other applications that support PCM format.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our audio to PCM tool. Now you can convert audio of various formats to raw PCM data for speech recognition, audio analysis, professional audio processing, and more.',
    
    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Audio to MP3',
            description: 'Convert audio to MP3 format with best compatibility for music playback and sharing.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio to WAV',
            description: 'Convert audio to lossless WAV format for professional audio editing and archiving.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio to M4A',
            description: 'Convert audio to M4A format suitable for Apple devices.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Image to ASCII Art',
            description: 'Convert images to ASCII character art for unique text art effects.',
            url: 'https://www.ufreetools.com/tool/image-to-ascii'
        }
    ],
    
    referencesTitle: 'References',
    references: [
        {
            name: 'PCM Audio Format Details',
            description: 'Learn about the principles and technical details of Pulse Code Modulation',
            url: 'https://en.wikipedia.org/wiki/Pulse-code_modulation'
        },
        {
            name: 'Speech Recognition Audio Requirements',
            description: 'Audio format requirements for major speech recognition platforms',
            url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats'
        },
        {
            name: 'Digital Audio Basics',
            description: 'Detailed explanation of sample rate, bit depth, channels, and other concepts',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
