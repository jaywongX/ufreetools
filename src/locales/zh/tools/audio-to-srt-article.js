export default {
    title: '音频转SRT字幕工具：在线音频转字幕转换器使用指南',
    functionTitle: '什么是音频转SRT字幕工具及其用途？',
    intro: '我们的<strong>音频转SRT字幕工具</strong>是一款专业的在线音频转字幕应用，可以将WAV、MP3、FLAC、OGG、AAC、M4A等多种音频格式转换为SRT字幕格式。SRT（SubRip Text）是最广泛使用的字幕格式之一，几乎所有视频播放器和编辑软件都支持该格式。使用我们的<strong>在线音频转字幕转换器</strong>，您可以通过分析音频能量来自动检测语音段落，生成精确的字幕时间码。工具支持灵敏度调节、字幕时长设置和批量处理，所有处理都在浏览器本地完成，无需安装任何软件。',
    
    useCasesTitle: '音频转SRT字幕的常见应用场景',
    useCases: [
        '为视频制作SRT字幕文件，上传到YouTube、B站等视频平台',
        '将播客录音自动分段，方便后续添加文字内容',
        '为在线课程视频生成字幕时间轴',
        '将会议录音转换为带时间码的字幕文件',
        '为短视频（抖音、快手）添加字幕做准备',
        '将有声书录音分段，配合文字内容制作字幕',
        '为音乐歌词视频生成字幕时间码',
        '为采访或纪录片原始素材创建字幕骨架'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '本工具通过音频能量检测来识别语音段落，不会自动识别语音内容。生成的SRT文件包含时间码和占位文本，您可以导入到字幕编辑软件（如Aegisub、Subtitle Edit等）中替换为实际文字。对于背景噪音较大的音频，建议先进行降噪处理以获得更准确的时间码。',
    
    conclusion: '<strong>音频转SRT字幕</strong>工具对视频创作者、播客制作者、内容创作者以及任何需要为音频/视频添加字幕的用户特别有用。通过使用我们的在线音频转字幕转换器，您可以快速为音频生成精确的字幕时间轴，大大节省手动打轴的时间。我们的工具支持批量处理，提供灵敏度、字幕时长、静音间隔等参数控制，所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频转SRT字幕工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频转字幕转换器</strong>支持多种常见音频格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同时上传多个不同格式的音频文件进行批量转换。'
        },
        {
            question: '什么是SRT字幕格式？',
            answer: 'SRT（SubRip Text）是最流行的字幕文件格式之一，由SubRip软件创建。它使用纯文本格式，包含序号、时间码和字幕文本。几乎所有视频播放器（VLC、PotPlayer等）和视频编辑软件（Premiere、Final Cut等）都支持SRT格式。'
        },
        {
            question: '工具会自动识别语音内容吗？',
            answer: '目前本工具通过分析音频能量来自动检测语音和静音段落，生成字幕时间码，但不会自动将语音转换为文字。生成的字幕文件包含时间码和占位文本，您需要在字幕编辑软件中手动输入或使用语音识别工具添加实际文字内容。'
        },
        {
            question: '如何获得更准确的时间码？',
            answer: '要获得更准确的时间码，建议：1）使用高质量、低噪音的音频文件；2）选择适合音频特征的灵敏度设置；3）根据语速调整最小静音间隔；4）对于背景噪音较大的音频，先进行降噪处理。高灵敏度适合音量较低的音频，低灵敏度适合有背景噪音的音频。'
        },
        {
            question: '可以批量转换多个音频文件为SRT吗？',
            answer: '完全可以！我们的<strong>音频转SRT字幕工具</strong>支持批量处理功能。您可以一次性上传多个音频文件，工具会依次处理所有文件。处理完成后，可以单独下载每个SRT文件，或使用批量下载功能将所有结果打包成ZIP文件。'
        },
        {
            question: '转换后的SRT文件可以在哪些软件中使用？',
            answer: '转换后的SRT文件可以在几乎所有字幕编辑软件和视频编辑软件中使用，包括：Aegisub、Subtitle Edit、PotPlayer、VLC播放器、Adobe Premiere、Final Cut Pro、DaVinci Resolve等。还可以直接上传到YouTube、B站、Vimeo等视频平台作为字幕。'
        },
        {
            question: '转换过程是否安全？音频会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有音频处理都在您的浏览器本地完成。您的音频文件不会上传到任何服务器，确保隐私和数据安全。'
        }
    ],
    
    tutorialTitle: '如何使用音频转SRT字幕工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要转换为SRT字幕的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、FLAC、OGG、AAC、M4A等多种格式，您可以一次上传多个文件进行批量处理。',
            note: '建议使用清晰、背景噪音小的音频文件，以获得更准确的时间码。'
        },
        {
            title: '预览音频文件',
            description: '上传后，您会在左侧预览区域看到所有上传的音频文件列表。每个文件显示文件名、格式和大小信息。您可以点击播放按钮预览音频，确认选择了正确的文件。',
            note: '批量处理时，建议先预览音频列表，确保所有需要转换的文件都已正确上传。'
        },
        {
            title: '设置转换参数',
            description: '在转换前，您可以调整输出设置。选择合适的<strong>检测灵敏度</strong>（高/中/低），设置<strong>最大字幕时长</strong>（字幕片段的最大持续时间），设置<strong>最小静音间隔</strong>（多长的静音才分割字幕），以及选择<strong>文件编码</strong>格式。',
            note: '中等灵敏度、5秒最大时长和0.5秒静音间隔适合大多数音频，如果效果不理想可以尝试调整。'
        },
        {
            title: '转换为SRT字幕',
            description: '设置完成后，点击<strong>"转换为SRT"</strong>按钮开始处理。工具会分析每个音频文件的能量变化，检测语音段落并生成对应的时间码。批量处理时会显示进度信息。',
            note: '转换过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的SRT字幕文件。每个文件提供<strong>字幕预览</strong>功能，显示前几条字幕内容。您可以查看字幕数量、时长和文件大小等信息。',
            note: '生成的字幕为占位文本，您可以在字幕编辑软件中替换为实际文字内容。'
        },
        {
            title: '下载转换结果',
            description: '满意转换结果后，您可以点击每个文件下方的<strong>"下载SRT"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有SRT文件打包下载。',
            note: '批量下载时，ZIP文件中的SRT会保持原始文件名，并自动添加.srt扩展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频转SRT字幕工具。现在您可以轻松为各种音频生成精确的字幕时间码，用于视频字幕制作、播客分段等多种用途。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '音频转MP3',
            description: '将音频转换为MP3格式，节省存储空间便于分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音频转WAV',
            description: '将音频转换为WAV无损格式，适合专业音频处理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音频转MIDI',
            description: '将音频转换为MIDI格式，适合音乐制作和分析。',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        },
        {
            name: '音频转M4A',
            description: '将音频转换为M4A格式，兼容苹果设备，音质优良。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'SRT字幕格式规范',
            description: '了解SRT字幕格式的技术规范和应用场景',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: '音频能量检测技术',
            description: '深入了解基于能量的语音活动检测算法',
            url: 'https://en.wikipedia.org/wiki/Voice_activity_detection'
        },
        {
            name: '字幕制作最佳实践',
            description: '学习专业的字幕制作流程和规范',
            url: 'https://en.wikipedia.org/wiki/Subtitle'
        }
    ]
};
