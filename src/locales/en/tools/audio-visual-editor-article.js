export default {
    title: 'Audio Visual Editor: Online Audio Waveform Editor Guide',
    functionTitle: 'What is Audio Visual Editor and Its Uses?',
    intro: 'Our <strong>Audio Visual Editor</strong> is a professional online audio waveform editing application that supports visual editing of WAV, MP3, FLAC, OGG, AAC, M4A and other audio formats. With an intuitive waveform display interface, you can precisely select audio segments and perform professional editing operations such as trimming, deleting, fade in/out, volume adjustment, mute, normalize, and reverse. Using our <strong>Online Audio Editor</strong>, no software installation is required, all processing is done locally in your browser, ensuring your audio privacy and security.',
    
    useCasesTitle: 'Common Use Cases for Audio Visual Editing',
    useCases: [
        'Edit and trim audio files, remove unwanted parts',
        'Produce podcasts and radio programs with audio post-processing',
        'Create background music for videos, adjust audio length and effects',
        'Make ringtones and notification sounds, crop audio clips',
        'Process voice recordings, remove silence and noise',
        'Create music mixes, combine multiple audio clips',
        'Adjust audio volume, perform normalization',
        'Add fade in/out effects for smoother transitions'
    ],
    
    tipTitle: 'Pro Tip:',
    tipContent: 'We recommend backing up your original audio files before editing. Use the selection feature to precisely choose the audio segments you want to edit. Fade in/out effects make audio transitions more natural. Normalize function optimizes the overall volume level of the audio.',
    
    conclusion: '<strong>Audio Visual Editor</strong> is especially useful for podcast producers, music enthusiasts, video creators, and audio editing beginners. With our online audio editor, you can perform precise audio editing in an intuitive waveform interface, supporting various professional operations like trimming, deleting, fade in/out, mute, normalize, and reverse. All processing is done locally in the browser, no server uploads required, ensuring the privacy and security of your audio content.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What input formats does the Audio Visual Editor support?',
            answer: 'Our <strong>Online Audio Editor</strong> supports many common audio formats including WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE and more. You can upload any supported format for editing, and export as WAV or MP3 format after editing.'
        },
        {
            question: 'How do I select an audio segment for editing?',
            answer: 'In the waveform display area, hold the left mouse button and drag to select an audio segment. The selected area will be highlighted in blue, showing the selection start time, end time, and duration. After selection, you can use editing tools like trim, delete, fade in/out, etc.'
        },
        {
            question: 'What do fade in/out effects do?',
            answer: 'Fade in effect gradually increases the audio from silence to normal volume, while fade out effect gradually decreases the audio from normal volume to silence. These effects make audio start and end more naturally, avoiding sudden volume changes, especially suitable for background music and audio transitions.'
        },
        {
            question: 'What is the normalize function?',
            answer: 'Normalization is the process of adjusting audio volume to an optimal level. It analyzes the maximum volume in the audio, then proportionally adjusts the overall volume so the maximum volume reaches close to but does not exceed the allowed maximum (usually -0.5dB). This makes the overall audio volume fuller while avoiding clipping distortion.'
        },
        {
            question: 'Is the editing process secure? Will audio be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, all audio processing is done locally in your browser. Your audio files are not uploaded to any server, ensuring privacy and data security. You can confidently edit audio files containing sensitive content.'
        },
        {
            question: 'What formats can I export?',
            answer: 'After editing, you can export as WAV (lossless format) or MP3 (compressed format). If you only selected part of the audio, you can choose to export the full audio or just the selection. The original sample rate and channel count are preserved during export.'
        }
    ],
    
    tutorialTitle: 'How to Use the Audio Visual Editor',
    steps: [
        {
            title: 'Upload Your Audio File',
            description: 'First upload the audio file you want to edit. You can upload in two ways: <strong>drag the file</strong> to the upload area or <strong>click browse</strong> to select a file. The tool supports WAV, MP3, FLAC, OGG, AAC, M4A and many other formats.',
            note: 'We recommend using lossless formats (like WAV, FLAC) for editing to maintain the best audio quality.'
        },
        {
            title: 'View Audio Waveform',
            description: 'After uploading, the audio waveform will automatically display in the editing area. The waveform shows the amplitude changes of the audio, allowing you to visually see the audio structure. File information is displayed above, including duration, sample rate, and channel count.',
            note: 'Peaks in the waveform represent louder parts, while flat areas represent softer or silent parts.'
        },
        {
            title: 'Select Editing Region',
            description: '<strong>Hold the left mouse button and drag</strong> on the waveform to select an audio segment. The selected area will be highlighted in blue, showing the time range of the selection. You can play the selection to confirm it\'s correct.',
            note: 'If no region is selected, some editing tools (like normalize) will apply to the entire audio.'
        },
        {
            title: 'Use Editing Tools',
            description: 'After selecting a region, use the editing tools below: <strong>Trim</strong> keeps the selection and removes other parts, <strong>Delete</strong> removes the selection, <strong>Fade In/Out</strong> adds gradient effects, <strong>Mute</strong> silences the selection, <strong>Normalize</strong> optimizes volume, <strong>Reverse</strong> plays the audio backwards.',
            note: 'Editing operations take effect immediately, we recommend carefully checking the results before exporting.'
        },
        {
            title: 'Play and Preview',
            description: 'Use the playback controls to <strong>play/pause</strong>, <strong>skip forward/backward</strong>, and <strong>stop</strong> the audio. A red indicator line shows the current playback position. You can also adjust the volume slider to control playback volume.',
            note: 'Playback volume adjustment does not affect the exported audio, which maintains the original volume level.'
        },
        {
            title: 'Export Edit Results',
            description: 'When satisfied with the editing results, select the export format (WAV or MP3), then click <strong>"Export Full Audio"</strong> or <strong>"Export Selection"</strong> button. The file will automatically download to your device. All processing is done locally in the browser, ensuring audio privacy and security.',
            note: 'WAV format maintains lossless quality but larger file size; MP3 format has smaller file size, suitable for sharing.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Audio Visual Editor. Now you can easily edit audio files in various formats, perform professional operations like trimming, fade in/out, volume adjustment, and more, meeting various needs like podcast production, music editing, and audio processing.',
    
    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Audio to MP3',
            description: 'Convert audio to MP3 format, save storage space and easy to share.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio to WAV',
            description: 'Convert audio to WAV lossless format, suitable for professional audio processing.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio to M4A',
            description: 'Convert audio to M4A format, high quality with small file size.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio to Text',
            description: 'Convert speech in audio to text, supports multiple languages.',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: 'References',
    references: [
        {
            name: 'Audio Waveform Editing Principles',
            description: 'Learn about the technical principles of audio waveform display and editing',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: 'Digital Audio Processing',
            description: 'Deep dive into digital audio processing and editing techniques',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: 'Audio Format Guide',
            description: 'Learn about the characteristics and use cases of different audio formats',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
