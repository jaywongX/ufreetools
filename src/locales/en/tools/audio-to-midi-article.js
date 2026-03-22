export default {
    title: 'Audio to MIDI Tool: Online Audio to MIDI Converter User Guide',
    functionTitle: 'What is Audio to MIDI Tool and Its Uses?',
    intro: 'Our <strong>Audio to MIDI Tool</strong> is a professional online audio to MIDI converter application that can convert WAV, MP3, FLAC, OGG, AAC, M4A and other audio formats to MIDI format. MIDI (Musical Instrument Digital Interface) is a music industry standard format that records note, velocity, duration and other musical information rather than the audio itself, making it particularly suitable for music production, arrangement learning, music analysis and digital music processing. Using our <strong>online audio to MIDI converter</strong>, you can quickly extract melodies from audio into MIDI notes, supporting batch processing and precise parameter adjustment, without installing any software.',
    
    useCasesTitle: 'Common Use Cases for Audio to MIDI',
    useCases: [
        'Extract melodies from recordings or audio files for music arrangement and production',
        'Convert humming or whistling melodies to MIDI for music composition',
        'Analyze note structure of existing music for learning and research',
        'Create MIDI versions of background music for videos or games',
        'Convert real instrument performances to digital music for post-editing',
        'Extract song main melodies for karaoke or accompaniment production',
        'Digitize old songs or vinyl record music to MIDI format',
        'Prepare editable sheet music materials for music education'
    ],
    
    tipTitle: 'Pro Tip:',
    tipContent: 'MIDI conversion quality is significantly affected by audio quality. Monophonic, clear, noise-free audio produces the best conversion results. For complex polyphonic music, it is recommended to separate tracks first before converting individually. After conversion, you can further edit and optimize MIDI data in DAW software.',
    
    conclusion: '<strong>Audio to MIDI conversion</strong> tool is particularly useful for music producers, composers, music educators and music enthusiasts. By using our online audio to MIDI converter, you can extract melodies from any audio into editable MIDI note data for music creation, arrangement, learning and analysis. Our tool supports batch processing and provides parameter controls for sensitivity, note range, time quantization, with all processing done locally in your browser, ensuring your audio privacy and security.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What input formats does the audio to MIDI tool support?',
            answer: 'Our <strong>online audio to MIDI converter</strong> supports multiple common audio formats, including WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE and more. You can upload multiple audio files in different formats simultaneously for batch conversion. The tool automatically detects the input format and handles the conversion.'
        },
        {
            question: 'What is MIDI format? Why convert to MIDI?',
            answer: 'MIDI (Musical Instrument Digital Interface) is a digital format that records musical performance information, not containing actual audio but recording notes, velocity, duration and other information. After converting to MIDI, you can: 1) Edit notes in DAW software; 2) Change instrument sounds; 3) Adjust tempo and key; 4) Use for music learning and analysis. MIDI files are small in size and easy to edit and share.'
        },
        {
            question: 'How to choose conversion sensitivity?',
            answer: 'Sensitivity determines the precision of note detection. High sensitivity is suitable for complex music, detecting more details but may produce extra notes; Medium sensitivity is the recommended setting, balancing accuracy and simplicity; Low sensitivity is suitable for simple melodies, detecting only main notes. Choose appropriate sensitivity based on audio complexity.'
        },
        {
            question: 'Can I batch convert multiple audio files to MIDI?',
            answer: 'Absolutely! Our <strong>audio to MIDI tool</strong> supports batch processing. You can upload multiple audio files at once (drag and drop or file selection supported), and the tool will process all files sequentially. After processing, you can download each converted MIDI file individually, or use the batch download feature to package all results into a ZIP file for one-time download.'
        },
        {
            question: 'What factors affect conversion quality?',
            answer: 'MIDI conversion quality is mainly affected by: 1) Audio quality - Clear, noise-free audio produces best results; 2) Music complexity - Single melody converts better than polyphonic; 3) Instrument type - Clear instruments like piano, guitar work better; 4) Audio format - Lossless formats (WAV, FLAC) work better than lossy formats (MP3). Using high-quality original audio is recommended.'
        },
        {
            question: 'Is the conversion process safe? Will audio be uploaded to servers?',
            answer: 'Completely safe! Our tool uses pure front-end technology, all audio processing is done locally in your browser. Your audio files are not uploaded to any server, ensuring privacy and data security. You can confidently process audio files containing sensitive content.'
        },
        {
            question: 'Which software can use the converted MIDI files?',
            answer: 'Converted MIDI files can be used in almost all music software, including: DAW software (Cubase, Logic Pro, FL Studio, Ableton Live, etc.), notation software (Sibelius, Finale, MuseScore, etc.), virtual instruments, music learning software and more. MIDI is a universal format with excellent compatibility.'
        }
    ],
    
    tutorialTitle: 'How to Use Audio to MIDI Tool',
    steps: [
        {
            title: 'Upload Your Audio Files',
            description: 'First upload the audio files you want to convert to MIDI format. You can upload in two ways: <strong>drag and drop files</strong> to the upload area or <strong>click to browse</strong> and select files. The tool supports WAV, MP3, FLAC, OGG, AAC, M4A and other formats. You can upload multiple files at once for batch processing.',
            note: 'Using clear, noise-free audio files is recommended. Single melody audio produces the best conversion results.'
        },
        {
            title: 'Preview Audio Files',
            description: 'After uploading, you will see all uploaded audio files in the left preview area. Each file shows filename, format and size information. You can click the play button to preview audio and confirm you have selected the correct files. If you need to delete a file, click the delete icon.',
            note: 'For batch processing, it is recommended to preview the audio list first to ensure all files to be converted have been correctly uploaded.'
        },
        {
            title: 'Set MIDI Parameters',
            description: 'Before conversion, you can adjust output settings. Choose appropriate <strong>conversion sensitivity</strong> (high/medium/low), set <strong>note range</strong> (minimum and maximum notes), and set <strong>time quantization</strong> (precision of note duration). These parameters can help you get better conversion results.',
            note: 'Medium sensitivity and auto note range work well for most audio. If results are not ideal, try adjusting.'
        },
        {
            title: 'Convert to MIDI Format',
            description: 'After setting up, click the <strong>"Convert to MIDI"</strong> button to start processing. The tool will process all uploaded audio files sequentially, showing progress information during batch processing. Conversion time depends on file size and quantity, most audio can be completed in seconds to tens of seconds.',
            note: 'Please keep the page open during conversion, do not close the browser tab.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion is complete, the right output area displays all converted MIDI files. Each file provides a <strong>preview</strong> function, showing note count and duration information. You can open MIDI files in DAW software for detailed editing and optimization.',
            note: 'MIDI files can be opened in any music software. Using professional DAW for post-editing is recommended.'
        },
        {
            title: 'Download Conversion Results',
            description: 'When satisfied with the conversion results, you can click the <strong>"Download MIDI"</strong> button under each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted MIDI files into a ZIP file for one-time download. All processing is done locally in your browser, ensuring your audio privacy and security.',
            note: 'When batch downloading, MIDI files in the ZIP will keep original filenames and automatically add .mid extension.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our audio to MIDI tool. Now you can easily convert various audio formats to MIDI format for music creation, arrangement learning, music analysis and many other purposes.',
    
    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Audio to MP3',
            description: 'Convert audio to MP3 format, save storage space for easy sharing.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio to WAV',
            description: 'Convert audio to WAV lossless format, suitable for professional audio processing.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio to M4A',
            description: 'Convert audio to M4A format, compatible with Apple devices, excellent sound quality.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio to PCM',
            description: 'Convert audio to PCM raw format, suitable for professional audio processing and analysis.',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'MIDI Format Standard',
            description: 'Learn about MIDI format technical specifications and use cases',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: 'Audio to MIDI Technology Principles',
            description: 'Deep dive into pitch detection and MIDI conversion algorithms',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: 'Music Information Retrieval',
            description: 'Explore music information retrieval and automatic music transcription technology',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
