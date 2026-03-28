export default {
    title: '音频可视化编辑工具：在线音频波形编辑器使用指南',
    functionTitle: '什么是音频可视化编辑工具及其用途？',
    intro: '我们的<strong>音频可视化编辑工具</strong>是一款专业的在线音频波形编辑应用，支持WAV、MP3、FLAC、OGG、AAC、M4A等多种音频格式的可视化编辑。通过直观的波形显示界面，您可以精确选择音频片段，进行裁剪、删除、淡入淡出、音量调节、静音、标准化、反转等专业编辑操作。使用我们的<strong>在线音频编辑器</strong>，无需安装任何软件，所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
    
    useCasesTitle: '音频可视化编辑的常见应用场景',
    useCases: [
        '剪辑和修剪音频文件，去除不需要的部分',
        '制作播客和广播节目，进行音频后期处理',
        '为视频制作背景音乐，调整音频长度和效果',
        '制作手机铃声和提示音，裁剪音频片段',
        '处理语音录音，去除静音和杂音部分',
        '制作音乐混音，组合多个音频片段',
        '调整音频音量，进行标准化处理',
        '为音频添加淡入淡出效果，使过渡更自然'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '编辑前建议先备份原始音频文件。使用选区功能可以精确选择需要编辑的音频片段。淡入淡出效果可以让音频过渡更加自然。标准化功能可以优化音频的整体音量水平。',
    
    conclusion: '<strong>音频可视化编辑</strong>工具对播客制作者、音乐爱好者、视频创作者以及音频处理初学者特别有用。通过使用我们的在线音频编辑器，您可以在直观的波形界面中进行精确的音频编辑，支持裁剪、删除、淡入淡出、静音、标准化、反转等多种专业操作。所有处理都在浏览器本地完成，无需上传到服务器，确保音频内容的隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频可视化编辑工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频编辑器</strong>支持多种常见音频格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以上传任何支持的格式进行编辑，编辑完成后可导出为WAV或MP3格式。'
        },
        {
            question: '如何选择音频片段进行编辑？',
            answer: '在波形显示区域，按住鼠标左键拖动即可选择音频片段。选中的区域会以蓝色高亮显示，同时显示选区的开始时间、结束时间和持续时间。选择后可以使用裁剪、删除、淡入淡出等编辑工具。'
        },
        {
            question: '淡入淡出效果有什么作用？',
            answer: '淡入效果使音频从静音逐渐增加到正常音量，淡出效果使音频从正常音量逐渐减小到静音。这两种效果可以让音频的开始和结束更加自然，避免突然的音量变化，特别适合用于背景音乐和音频过渡。'
        },
        {
            question: '标准化功能是什么？',
            answer: '标准化是将音频的音量调整到最佳水平的过程。它会分析音频中的最大音量，然后按比例调整整体音量，使最大音量达到接近但不超出允许的最大值（通常为-0.5dB）。这样可以使音频整体音量更加饱满，同时避免削波失真。'
        },
        {
            question: '编辑过程是否安全？音频会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有音频处理都在您的浏览器本地完成。您的音频文件不会上传到任何服务器，确保隐私和数据安全。您可以放心编辑包含敏感内容的音频文件。'
        },
        {
            question: '可以导出哪些格式？',
            answer: '编辑完成后，您可以导出为WAV（无损格式）或MP3（压缩格式）。如果您只选择了部分音频，可以选择导出完整音频或仅导出选区。导出时会保持原始采样率和声道数。'
        }
    ],
    
    tutorialTitle: '如何使用音频可视化编辑工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要编辑的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、FLAC、OGG、AAC、M4A等多种格式。',
            note: '建议使用无损格式（如WAV、FLAC）进行编辑，以保持最佳音质。'
        },
        {
            title: '查看音频波形',
            description: '上传后，音频波形会自动显示在编辑区域。波形显示了音频的振幅变化，让您直观地看到音频的结构。上方显示文件信息，包括时长、采样率和声道数。',
            note: '波形中的高峰表示音量较大的部分，平缓部分表示音量较小或静音。'
        },
        {
            title: '选择编辑区域',
            description: '在波形上<strong>按住鼠标左键拖动</strong>即可选择音频片段。选中区域会以蓝色高亮显示，同时显示选区的时间范围。您可以播放选区来确认选择是否正确。',
            note: '如果不选择区域，某些编辑工具（如标准化）会作用于整个音频。'
        },
        {
            title: '使用编辑工具',
            description: '选择区域后，可以使用下方的编辑工具：<strong>裁剪</strong>保留选区并删除其他部分、<strong>删除</strong>移除选区、<strong>淡入/淡出</strong>添加渐变效果、<strong>静音</strong>将选区设为静音、<strong>标准化</strong>优化音量、<strong>反转</strong>将音频反向播放。',
            note: '编辑操作会立即生效，建议在导出前仔细检查编辑结果。'
        },
        {
            title: '播放和预览',
            description: '使用播放控制按钮可以<strong>播放/暂停</strong>、<strong>快进/快退</strong>、<strong>停止</strong>音频。播放时红色指示线会显示当前播放位置。您还可以调整音量滑块来控制播放音量。',
            note: '播放音量调整不影响导出的音频，导出时会保持原始音量水平。'
        },
        {
            title: '导出编辑结果',
            description: '满意编辑结果后，选择导出格式（WAV或MP3），然后点击<strong>"导出完整音频"</strong>或<strong>"导出选区"</strong>按钮。文件会自动下载到您的设备。所有处理都在浏览器本地完成，确保音频隐私和安全。',
            note: 'WAV格式保持无损音质，但文件较大；MP3格式文件较小，适合分享。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频可视化编辑工具。现在您可以轻松编辑各种格式的音频文件，进行裁剪、淡入淡出、音量调节等专业操作，满足播客制作、音乐编辑、音频处理等多种需求。',
    
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
            name: '音频转M4A',
            description: '将音频转换为M4A格式，高音质小体积。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: '音频转文本',
            description: '将音频中的语音转换为文字，支持多种语言。',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: '音频波形编辑原理',
            description: '了解音频波形显示和编辑的技术原理',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: '数字音频处理',
            description: '深入学习数字音频处理和编辑技术',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: '音频格式指南',
            description: '了解不同音频格式的特点和应用场景',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
