export default {
    title: '音频调速工具：在线音频变速变调使用指南',
    functionTitle: '什么是音频调速工具及其用途？',
    intro: '我们的<strong>音频调速工具</strong>是一款专业的在线音频变速变调应用，可以调整音频的播放速度和音调。支持<strong>变速不变调</strong>（改变速度同时保持原音调）、<strong>变调不变速</strong>（改变音调同时保持原速度）以及同时变速变调等多种模式。使用我们的<strong>在线音频调速器</strong>，您可以轻松调整音频播放速度从0.25倍到4倍，音调可升降12个半音，支持批量处理，无需安装任何软件。',
    
    useCasesTitle: '音频调速的常见应用场景',
    useCases: [
        '加速或减速音频以适应特定时长需求',
        '学习音乐或语言时放慢速度便于理解',
        '调整音频音调以匹配其他音轨或乐器',
        '制作DJ混音或音乐改编',
        '快速浏览长音频内容',
        '调整语音录音的语速',
        '为视频制作变速音频效果',
        '音乐制作中的时间拉伸和音调转换'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '开启"变速不变调"选项可以在改变播放速度时保持原有音调，这对于语音学习和音乐分析特别有用。如果需要更高质量的处理，建议选择高质量输出选项，但处理时间会相应增加。',
    
    conclusion: '<strong>音频调速工具</strong>对音乐制作人、DJ、语言学习者、播客制作者以及音频编辑爱好者特别有用。通过使用我们的在线音频调速器，您可以灵活调整音频的速度和音调，满足各种创作和学习需求。我们的工具支持批量处理，提供多种质量控制选项，所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频调速工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频调速器</strong>支持多种常见音频格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同时上传多个不同格式的音频文件进行批量处理。'
        },
        {
            question: '什么是变速不变调？',
            answer: '变速不变调是一种音频处理技术，可以在改变音频播放速度的同时保持原有的音调（音高）。例如，将音频加速到1.5倍播放，但声音的音调不会变高。这对于语音学习、快速浏览内容等场景非常有用。'
        },
        {
            question: '可以只改变音调不改变速度吗？',
            answer: '可以！通过调整音调选项并保持速度为1.0倍，您可以实现变调不变速的效果。音调可升降最多12个半音（一个八度），适合音乐制作和卡拉OK等场景。'
        },
        {
            question: '音频调速会影响音质吗？',
            answer: '音频调速会通过时间拉伸算法处理音频，可能会对音质产生一定影响。选择高质量输出选项可以获得更好的音质。通常情况下，小幅度的速度调整（0.8x-1.5x）对音质影响较小，大幅调整可能会有一定的音质损失。'
        },
        {
            question: '可以批量处理多个音频文件吗？',
            answer: '完全可以！我们的<strong>音频调速工具</strong>支持批量处理功能。您可以一次性上传多个音频文件，设置相同的参数后统一处理。处理完成后，可以单独下载每个文件或打包成ZIP下载。'
        },
        {
            question: '处理后的音频可以保存为什么格式？',
            answer: '您可以选择保持原格式输出，或转换为WAV（无损）或MP3（通用）格式。WAV格式适合专业音频编辑，MP3格式兼容性最好，适合分享和存储。'
        },
        {
            question: '调速范围是多少？',
            answer: '速度调节范围为0.25倍到4倍，即最慢可降至原速的1/4，最快可加速至原速的4倍。音调调节范围为-12到+12个半音，即可升降一个八度。'
        }
    ],
    
    tutorialTitle: '如何使用音频调速工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要调速的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、FLAC、OGG等多种格式，您可以一次上传多个文件进行批量处理。',
            note: '建议使用高质量的原始音频文件，调速后的音质会更好。'
        },
        {
            title: '预览音频文件',
            description: '上传后，您会在左侧预览区域看到所有上传的音频文件列表。每个文件显示文件名、格式和大小信息。您可以点击播放按钮预览音频，确认选择了正确的文件。',
            note: '批量处理时，建议先预览音频列表，确保所有需要处理的文件都已正确上传。'
        },
        {
            title: '设置调速参数',
            description: '在设置区域调整参数：<strong>播放速度</strong>（0.25x-4x）、<strong>音调调整</strong>（-12到+12半音）、<strong>变速不变调</strong>开关、<strong>输出质量</strong>和<strong>输出格式</strong>。根据您的需求选择合适的组合。',
            note: '如果只想改变速度不想改变音调，请开启"变速不变调"选项。'
        },
        {
            title: '处理音频',
            description: '设置完成后，点击<strong>"调整音频"</strong>按钮开始处理。工具会依次处理所有上传的音频文件，批量处理时会显示进度信息。处理时间取决于文件大小、数量和选择的质量选项。',
            note: '处理过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览处理结果',
            description: '处理完成后，右侧输出区域会显示所有调整后的音频文件。每个文件提供<strong>预览</strong>功能，您可以试听调整后的效果。如果不满意，可以重新调整参数再次处理。',
            note: '预览功能可以帮助您确认调速效果是否符合预期。'
        },
        {
            title: '下载处理结果',
            description: '满意处理结果后，您可以点击每个文件下方的<strong>"下载音频"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有文件打包下载。所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
            note: '批量下载时，ZIP文件会保持原始文件名，并根据设置添加相应的扩展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频调速工具。现在您可以轻松调整音频的速度和音调，用于音乐制作、语言学习、音频编辑等多种用途。',
    
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
            name: '音频倒放',
            description: '将音频倒放播放，制作特殊音效。',
            url: 'https://www.ufreetools.com/tool/audio-reverse'
        },
        {
            name: '音频合并',
            description: '将多个音频文件合并为一个文件。',
            url: 'https://www.ufreetools.com/tool/audio-joiner'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: '时间拉伸算法',
            description: '了解音频时间拉伸的技术原理',
            url: 'https://en.wikipedia.org/wiki/Audio_time_stretching'
        },
        {
            name: '音调变换技术',
            description: '探索音调变换和移调的技术实现',
            url: 'https://en.wikipedia.org/wiki/Pitch_shift'
        },
        {
            name: '音频信号处理',
            description: '深入学习数字音频信号处理技术',
            url: 'https://en.wikipedia.org/wiki/Audio_signal_processing'
        }
    ]
};
