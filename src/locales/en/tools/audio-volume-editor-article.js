export default {
    title: 'Audio Volume Editor: Online Audio Volume Adjuster Guide',
    functionTitle: 'What is Audio Volume Editor and Its Uses?',
    intro: 'Our <strong>Audio Volume Editor</strong> is a professional online audio volume adjustment application that can adjust the volume of WAV, MP3, FLAC, OGG, AAC, M4A and many other audio formats. It supports volume increase, decrease, mute, and normalization features, making it ideal for audio processing, video dubbing, podcast production, and music editing. With our <strong>Online Audio Volume Adjuster</strong>, you can quickly adjust audio volume levels, with batch processing and precise parameter control, no software installation required.',
    
    useCasesTitle: 'Common Use Cases for Audio Volume Adjustment',
    useCases: [
        'Adjust audio file volume for playback or sharing',
        'Unify volume levels across multiple audio files to avoid volume differences',
        'Increase audio volume to solve low volume issues',
        'Decrease audio volume to prevent discomfort from high volume',
        'Normalize audio for optimal listening experience',
        'Adjust volume for video dubbing to match visuals',
        'Process podcast audio to ensure consistent volume across segments',
        'Batch process multiple audio files for improved efficiency'
    ],
    
    tipTitle: 'Pro Tip:',
    tipContent: 'Be careful when adjusting volume to avoid distortion (clipping) from setting it too high. We recommend using the normalization feature to automatically adjust audio to optimal levels. For multi-channel audio, the tool processes all channels simultaneously to maintain balance.',
    
    conclusion: 'The <strong>Audio Volume Editor</strong> is especially useful for video creators, podcast hosts, music enthusiasts, and audio processing professionals. Using our online audio volume adjuster, you can easily adjust the volume of various audio formats, with support for multiplier adjustment, decibel adjustment, and volume normalization. Our tool supports batch processing, with all operations performed locally in your browser to ensure audio privacy and security.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What input formats does the Audio Volume Editor support?',
            answer: 'Our <strong>Online Audio Volume Adjuster</strong> supports many common audio formats, including WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE and more. You can upload multiple audio files in different formats for batch processing. The tool automatically detects input format and processes accordingly.'
        },
        {
            question: 'What is volume normalization and how do I use it?',
            answer: 'Volume normalization is a technique that automatically adjusts audio volume by analyzing the peak level and adjusting to optimal levels. When enabled, the tool automatically calculates the best gain value to achieve ideal loudness while avoiding distortion. This is the recommended method for handling volume issues.'
        },
        {
            question: 'What is the difference between volume multiplier and decibel (dB) adjustment?',
            answer: 'Volume multiplier is a relative change from the original volume - for example, 2x means double volume, 0.5x means half volume. Decibel (dB) is a logarithmic unit that better matches human hearing characteristics - +6dB is approximately double volume, -6dB is approximately half volume. Decibel adjustment is better suited for professional audio processing.'
        },
        {
            question: 'Can I batch adjust volume for multiple audio files?',
            answer: 'Absolutely! Our <strong>Audio Volume Editor</strong> supports batch processing. You can upload multiple audio files at once (drag and drop or file selection supported), and the tool will process all files sequentially. After processing, you can download each adjusted file individually, or use batch download to get all results in a single ZIP file.'
        },
        {
            question: 'Will volume adjustment reduce audio quality?',
            answer: 'Volume adjustment itself does not reduce quality, but be aware: increasing volume too much can cause distortion (clipping), and decreasing then increasing volume can make background noise more noticeable. We recommend using normalization or moderate adjustments. The tool supports lossless format output for best quality.'
        },
        {
            question: 'Is the processing secure? Will my audio be uploaded to a server?',
            answer: 'Completely secure! Our tool uses pure front-end technology, with all audio processing done locally in your browser. Your audio files are never uploaded to any server, ensuring privacy and data security. You can confidently process audio files containing sensitive content.'
        },
        {
            question: 'How do I know if the audio volume is appropriate?',
            answer: 'To determine if audio volume is appropriate, consider these standards: 1) Peak level should not exceed 0dB to avoid distortion; 2) Average loudness should be between -14 to -16 LUFS (podcast standard); 3) It should sound comfortable and natural without frequent volume adjustments during playback. Our tool displays original volume information to help you make informed decisions.'
        }
    ],
    
    tutorialTitle: 'How to Use Audio Volume Editor',
    steps: [
        {
            title: 'Upload Your Audio Files',
            description: 'First, upload the audio files you want to adjust. You can upload by <strong>dragging files</strong> to the upload area or <strong>clicking browse</strong> to select files. The tool supports WAV, MP3, FLAC, OGG, AAC, M4A and more. You can upload multiple files at once for batch processing.',
            note: 'We recommend previewing the original audio first to understand the current volume level before choosing the appropriate adjustment method.'
        },
        {
            title: 'Preview Audio Files',
            description: 'After uploading, you will see all uploaded audio files in the preview area on the left. Each file shows filename, format, and size information. You can click the play button to preview and understand the original volume. Click the delete icon to remove unwanted files.',
            note: 'For batch processing, preview the audio list first to ensure all files needing processing are correctly uploaded.'
        },
        {
            title: 'Set Volume Parameters',
            description: 'Before processing, adjust volume settings. Choose <strong>Volume Multiplier</strong> (like 2x, 0.5x, etc.), set <strong>Volume Gain (dB)</strong> (like +6dB, -3dB, etc.), or enable <strong>Volume Normalization</strong> to let the tool automatically calculate optimal volume. Select the appropriate method based on your needs.',
            note: 'We recommend using the normalization feature - it automatically analyzes audio and adjusts to optimal volume.'
        },
        {
            title: 'Adjust Volume',
            description: 'After setting, click the <strong>"Adjust Volume"</strong> button to start processing. The tool will process all uploaded audio files sequentially, showing progress during batch processing. Processing time depends on file size and quantity, with most audio completing in seconds.',
            note: 'Keep the page open during processing - do not close the browser tab.'
        },
        {
            title: 'Preview Adjusted Results',
            description: 'After processing, the output area on the right shows all adjusted audio files. Each file has a <strong>Preview</strong> button to listen to the adjusted result. Confirm you are satisfied before downloading.',
            note: 'If the adjustment is not ideal, you can re-upload files and adjust parameters.'
        },
        {
            title: 'Download Results',
            description: 'When satisfied with the results, click the <strong>"Download Audio"</strong> button under each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to download all adjusted audio files in a single ZIP file. All processing is done locally in your browser, ensuring your audio privacy and security.',
            note: 'During batch download, audio files in the ZIP retain their original filenames.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Audio Volume Editor. Now you can easily adjust audio volume for various formats, for video dubbing, podcast production, music editing and many other purposes.',
    
    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Audio Visual Editor',
            description: 'Online audio waveform editor with cutting, fade in/out and more editing features.',
            url: 'https://www.ufreetools.com/tool/audio-visual-editor'
        },
        {
            name: 'Audio to MP3',
            description: 'Convert audio to MP3 format to save storage space for easy sharing.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio to M4A',
            description: 'Convert audio to M4A format with excellent quality and small size.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio Format Converter',
            description: 'Convert between various audio formats to meet different needs.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        }
    ],
    
    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'Audio Normalization Principles',
            description: 'Learn about audio normalization algorithms and best practices',
            url: 'https://en.wikipedia.org/wiki/Audio_normalization'
        },
        {
            name: 'Decibel (dB) Explained',
            description: 'Deep dive into decibel units and their audio applications',
            url: 'https://en.wikipedia.org/wiki/Decibel'
        },
        {
            name: 'Digital Audio Basics',
            description: 'Learn fundamental concepts and techniques of digital audio processing',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
