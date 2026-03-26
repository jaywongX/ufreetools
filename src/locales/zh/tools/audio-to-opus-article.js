export default {
    title: '音频转Opus工具：在线音频转Opus转换器使用指南',
    functionTitle: '什么是音频转Opus工具及其用途？',
    intro: '我们的<strong>音频转Opus工具</strong>是一款专业的在线音频转Opus转换应用，可以将WAV、MP3、FLAC、OGG、AAC、M4A等多种音频格式转换为Opus格式。Opus是一种现代的、高度灵活的音频编码格式，特别适合网络传输、实时通信和流媒体应用。使用我们的<strong>在线音频转Opus转换器</strong>，您可以快速将音频转换为Opus格式，支持比特率调节、采样率设置和批量处理，无需安装任何软件。',
    
    useCasesTitle: '音频转Opus的常见应用场景',
    useCases: [
        '为网络语音通话准备高质量低延迟的音频',
        '将音乐文件转换为Opus格式用于流媒体播放',
        '优化播客和有声读物的音频体积',
        '为游戏和应用程序准备音频资源',
        '将高清音频转换为适合移动设备的格式',
        '准备适合WebRTC通信的音频文件',
        '压缩音频文件以便于网络传输和分享',
        '为视频配音准备高效的音频编码'
    ],
    
    tipTitle: '专业提示：',
    tipContent: 'Opus编码器在不同比特率下表现优异。对于纯语音内容，16-32kbps即可获得清晰效果；对于音乐内容，建议使用64kbps以上的比特率。48kHz采样率是Opus的最佳工作频率，建议优先选择。',
    
    conclusion: '<strong>音频转Opus转换</strong>工具对开发者、内容创作者、播客主播以及需要处理网络音频的用户特别有用。通过使用我们的在线音频转Opus转换器，您可以将任何音频转换为高效的Opus格式，用于网络传输、实时通信、流媒体等多种场景。我们的工具支持批量处理，提供比特率、采样率、声道等参数控制，所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频转Opus工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频转Opus转换器</strong>支持多种常见音频格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同时上传多个不同格式的音频文件进行批量转换。工具会自动检测输入格式并处理转换。'
        },
        {
            question: '什么是Opus格式？为什么选择Opus？',
            answer: 'Opus是一种开源、免版税的音频编码格式，由Xiph.Org基金会开发。它的优势包括：1）极低的延迟，适合实时通信；2）宽比特率范围（6-510kbps）；3）出色的音质表现；4）支持语音和音乐编码；5）广泛的应用兼容性。Opus已被WebRTC、WhatsApp、Discord等平台采用。'
        },
        {
            question: '如何选择合适的比特率？',
            answer: '比特率选择取决于用途：16-32kbps适合纯语音，文件体积小；48-64kbps适合语音通话和播客；96-128kbps适合普通音乐，音质优良；192-256kbps适合高保真音乐，接近无损品质。建议根据实际需求在音质和文件大小之间取得平衡。'
        },
        {
            question: '采样率设置有什么影响？',
            answer: '采样率决定了音频的频率响应范围。8000Hz适合电话质量语音；16000Hz适合宽带语音；24000Hz适合高质量语音；48000Hz是Opus的最佳工作频率，能提供完整的音频频谱。建议使用48000Hz以获得最佳音质，工具会自动处理必要的重采样。'
        },
        {
            question: '可以批量转换多个音频文件为Opus吗？',
            answer: '完全可以！我们的<strong>音频转Opus工具</strong>支持批量处理功能。您可以一次性上传多个音频文件（支持拖拽或文件选择），工具会依次处理所有文件。处理完成后，您可以单独下载每个转换后的Opus文件，或使用批量下载功能将所有结果打包成ZIP文件一次性下载。'
        },
        {
            question: '转换后的Opus文件兼容性如何？',
            answer: 'Opus格式已被广泛支持：Web浏览器（Chrome、Firefox、Edge、Safari等）、媒体播放器（VLC、foobar2000等）、移动设备（Android 5.0+、iOS 11+）、流媒体平台、实时通信应用（Discord、Telegram等）。转换后的Opus文件可以在绝大多数现代设备和应用中播放。'
        },
        {
            question: '转换过程是否安全？音频会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有音频处理都在您的浏览器本地完成。您的音频文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含敏感内容的音频文件。'
        }
    ],
    
    tutorialTitle: '如何使用音频转Opus工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要转换为Opus格式的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、FLAC、OGG、AAC、M4A等多种格式，您可以一次上传多个文件进行批量处理。',
            note: '建议使用高质量的原始音频文件，转换效果会更好。'
        },
        {
            title: '预览音频文件',
            description: '上传后，您会在左侧预览区域看到所有上传的音频文件列表。每个文件显示文件名、格式和大小信息。您可以点击播放按钮预览音频，确认选择了正确的文件。如果需要删除某个文件，点击删除图标即可。',
            note: '批量处理时，建议先预览音频列表，确保所有需要转换的文件都已正确上传。'
        },
        {
            title: '设置Opus参数',
            description: '在转换前，您可以调整输出设置。选择合适的<strong>比特率</strong>（16-256kbps），设置<strong>采样率</strong>（8-48kHz），选择<strong>声道模式</strong>（单声道/立体声）。这些参数可以帮助您在音质和文件大小之间取得平衡。',
            note: '48000Hz采样率和64-128kbps比特率适合大多数应用场景。'
        },
        {
            title: '转换为Opus格式',
            description: '设置完成后，点击<strong>"转换为Opus"</strong>按钮开始处理。工具会依次处理所有上传的音频文件，批量处理时会显示进度信息。转换时间取决于文件大小和数量，大多数音频可以在几秒到几十秒内完成。',
            note: '转换过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的Opus文件。每个文件提供<strong>播放预览</strong>功能，显示原始大小和转换后大小对比。您可以点击播放按钮直接在浏览器中预览音质效果。',
            note: '通过对比文件大小，您可以了解Opus编码的压缩效率。'
        },
        {
            title: '下载转换结果',
            description: '满意转换结果后，您可以点击每个文件下方的<strong>"下载Opus"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的Opus文件打包成一个ZIP文件一次性下载。所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
            note: '批量下载时，ZIP文件中的Opus会保持原始文件名，并自动添加.opus扩展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频转Opus工具。现在您可以轻松将各种格式的音频转换为高效的Opus格式，用于网络传输、实时通信、流媒体播放等多种用途。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '音频转MP3',
            description: '将音频转换为MP3格式，兼容性最好，适合通用场景。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音频转AAC',
            description: '将音频转换为AAC格式，适合苹果设备和流媒体应用。',
            url: 'https://www.ufreetools.com/tool/audio-to-aac'
        },
        {
            name: '音频转FLAC',
            description: '将音频转换为FLAC无损格式，保留完整音质。',
            url: 'https://www.ufreetools.com/tool/audio-to-flac'
        },
        {
            name: '音频转M4A',
            description: '将音频转换为M4A格式，适合苹果生态和便携设备。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'Opus编码器官网',
            description: '了解Opus编码器的技术规范和最新发展',
            url: 'https://opus-codec.org/'
        },
        {
            name: 'WebRTC音频编码',
            description: '了解Opus在WebRTC中的应用和最佳实践',
            url: 'https://webrtc.org/'
        },
        {
            name: 'Xiph.Org基金会',
            description: '探索开源多媒体格式和编码技术',
            url: 'https://xiph.org/'
        }
    ]
};
