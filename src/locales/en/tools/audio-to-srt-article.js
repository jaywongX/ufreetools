export default {
    title: 'Audio to SRT Subtitle Tool: Online Audio to Subtitle Converter Guide',
    functionTitle: 'What is the Audio to SRT Subtitle Tool and Its Uses?',
    intro: 'Our <strong>Audio to SRT Subtitle Tool</strong> is a professional online audio-to-subtitle application that converts WAV, MP3, FLAC, OGG, AAC, M4A, and other audio formats to SRT subtitle format. SRT (SubRip Text) is one of the most widely used subtitle formats, supported by virtually all video players and editing software. Using our <strong>online audio to subtitle converter</strong>, you can automatically detect speech segments through audio energy analysis and generate precise subtitle timecodes. The tool supports sensitivity adjustment, subtitle duration settings, and batch processing, all done locally in your browser without installing any software.',
    
    useCasesTitle: 'Common Use Cases for Audio to SRT Conversion',
    useCases: [
        'Create SRT subtitle files for videos to upload to YouTube, Bilibili, and other platforms',
        'Auto-segment podcast recordings for adding text content later',
        'Generate subtitle timelines for online course videos',
        'Convert meeting recordings into timecoded subtitle files',
        'Prepare subtitles for short videos (TikTok, Instagram Reels)',
        'Segment audiobook recordings to pair with text content for subtitles',
        'Generate subtitle timecodes for music lyric videos',
        'Create subtitle frameworks for interview or documentary raw footage'
    ],
    
    tipTitle: 'Pro Tip:',
    tipContent: 'This tool detects speech segments through audio energy analysis and does not automatically transcribe speech. The generated SRT file contains timecodes and placeholder text that you can replace with actual content in subtitle editing software like Aegisub or Subtitle Edit. For audio with heavy background noise, we recommend noise reduction preprocessing for more accurate timecodes.',
    
    conclusion: 'The <strong>Audio to SRT Subtitle</strong> tool is particularly useful for video creators, podcast producers, content creators, and anyone who needs to add subtitles to audio/video content. By using our online audio to subtitle converter, you can quickly generate precise subtitle timelines for audio, significantly reducing the time spent on manual timecoding. Our tool supports batch processing with sensitivity, subtitle duration, and silence gap controls, all processed locally in your browser for complete privacy and security.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What input formats does the Audio to SRT tool support?',
            answer: 'Our <strong>online audio to subtitle converter</strong> supports multiple common audio formats including WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, and APE. You can upload multiple files in different formats simultaneously for batch conversion.'
        },
        {
            question: 'What is the SRT subtitle format?',
            answer: 'SRT (SubRip Text) is one of the most popular subtitle file formats, created by the SubRip software. It uses a plain text format containing sequence numbers, timecodes, and subtitle text. Almost all video players (VLC, PotPlayer) and video editing software (Premiere, Final Cut) support SRT format.'
        },
        {
            question: 'Does the tool automatically recognize speech content?',
            answer: 'Currently, this tool detects speech and silence segments by analyzing audio energy to generate subtitle timecodes, but it does not automatically transcribe speech to text. The generated subtitle files contain timecodes and placeholder text that you can manually fill in subtitle editing software or use speech recognition tools to add actual text.'
        },
        {
            question: 'How can I get more accurate timecodes?',
            answer: 'For more accurate timecodes, we recommend: 1) Using high-quality, low-noise audio files; 2) Selecting appropriate sensitivity settings for your audio; 3) Adjusting the minimum silence gap based on speech rate; 4) Applying noise reduction preprocessing for audio with heavy background noise. High sensitivity is for low-volume audio, low sensitivity is for noisy audio.'
        },
        {
            question: 'Can I batch convert multiple audio files to SRT?',
            answer: 'Absolutely! Our <strong>Audio to SRT Subtitle Tool</strong> supports batch processing. You can upload multiple audio files at once, and the tool will process them sequentially. After processing, you can download each SRT file individually or use the batch download feature to pack all results into a ZIP file.'
        },
        {
            question: 'Where can I use the converted SRT files?',
            answer: 'Converted SRT files can be used in virtually all subtitle editing and video editing software including Aegisub, Subtitle Edit, PotPlayer, VLC, Adobe Premiere, Final Cut Pro, DaVinci Resolve, and more. They can also be uploaded directly to YouTube, Bilibili, Vimeo, and other video platforms as subtitles.'
        },
        {
            question: 'Is the conversion process secure? Will audio be uploaded to a server?',
            answer: 'Completely secure! Our tool uses pure frontend technology, and all audio processing is done locally in your browser. Your audio files are never uploaded to any server, ensuring privacy and data security.'
        }
    ],
    
    tutorialTitle: 'How to Use the Audio to SRT Subtitle Tool',
    steps: [
        {
            title: 'Upload Your Audio Files',
            description: 'First, upload the audio files you want to convert to SRT subtitles. You can upload by <strong>dragging files</strong> to the upload area or <strong>clicking browse</strong> to select files. The tool supports WAV, MP3, FLAC, OGG, AAC, M4A, and other formats. You can upload multiple files at once for batch processing.',
            note: 'For best results, use clear audio files with minimal background noise.'
        },
        {
            title: 'Preview Audio Files',
            description: 'After uploading, you will see all uploaded audio files in the left preview area. Each file shows its name, format, and size. You can click the play button to preview the audio and confirm the correct files are selected.',
            note: 'When batch processing, preview the audio list first to ensure all files are correctly uploaded.'
        },
        {
            title: 'Configure Conversion Parameters',
            description: 'Before converting, you can adjust output settings. Select appropriate <strong>detection sensitivity</strong> (high/medium/low), set <strong>max subtitle duration</strong> (maximum duration per subtitle segment), <strong>minimum silence gap</strong> (how long silence should be before splitting subtitles), and choose <strong>file encoding</strong> format.',
            note: 'Medium sensitivity, 5-second max duration, and 0.5-second silence gap suit most audio files.'
        },
        {
            title: 'Convert to SRT Subtitles',
            description: 'After configuring settings, click the <strong>"Convert to SRT"</strong> button to start processing. The tool analyzes the energy changes in each audio file, detects speech segments, and generates corresponding timecodes. Progress is displayed during batch processing.',
            note: 'Keep the page open during conversion and do not close the browser tab.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion, the output area on the right displays all converted SRT subtitle files. Each file provides a <strong>subtitle preview</strong> showing the first few subtitle entries. You can view subtitle count, duration, and file size information.',
            note: 'Generated subtitles contain placeholder text that you can replace with actual content in subtitle editing software.'
        },
        {
            title: 'Download Conversion Results',
            description: 'Once satisfied with the results, click the <strong>"Download SRT"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to download all SRT files packaged together.',
            note: 'In batch downloads, SRT files maintain original filenames with .srt extension automatically added.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Audio to SRT Subtitle Tool. You can now easily generate precise subtitle timecodes for various audio files for video subtitling, podcast segmentation, and more.',
    
    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Audio to MP3',
            description: 'Convert audio to MP3 format for smaller file sizes and easy sharing.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio to WAV',
            description: 'Convert audio to WAV lossless format for professional audio processing.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio to MIDI',
            description: 'Convert audio to MIDI format for music production and analysis.',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        },
        {
            name: 'Audio to M4A',
            description: 'Convert audio to M4A format for Apple device compatibility and great sound quality.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'SRT Subtitle Format Specification',
            description: 'Learn about the technical specification and applications of SRT subtitle format',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: 'Audio Energy Detection Technology',
            description: 'Deep dive into energy-based voice activity detection algorithms',
            url: 'https://en.wikipedia.org/wiki/Voice_activity_detection'
        },
        {
            name: 'Subtitle Creation Best Practices',
            description: 'Learn professional subtitle creation workflows and standards',
            url: 'https://en.wikipedia.org/wiki/Subtitle'
        }
    ]
};
