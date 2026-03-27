export default {
    title: '音频转AC3工具：在线音频转AC3转换器使用指南',
    functionTitle: '什么是音频转AC3工具及其用途？',
    intro: '我们的<strong>音频转AC3工具</strong>是一款专业的在线音频转AC3转换应用，可以将WAV、MP3、FLAC、OGG、AAC、M4A等多种音频格式转换为AC3格式。AC3（Audio Coding 3），又称杜比数字（Dolby Digital），是一种广泛使用的音频编码格式，特别适合DVD、蓝光光盘、数字电视和家庭影院系统。使用我们的<strong>在线音频转AC3转换器</strong>，您可以快速将音频转换为AC3格式，支持比特率调节、采样率设置和批量处理，无需安装任何软件。',
    
    useCasesTitle: '音频转AC3的常见应用场景',
    useCases: [
        '为DVD和蓝光光盘制作准备音频轨道',
        '将音乐文件转换为家庭影院兼容格式',
        '为数字电视广播准备音频内容',
        '制作支持5.1环绕声的视频配音',
        '优化音频文件用于流媒体传输',
        '将多声道音频编码为AC3格式',
        '为视频编辑项目准备AC3音频',
        '转换音频用于专业音频后期制作'
    ],
    
    tipTitle: '专业提示：',
    tipContent: 'AC3格式在48kHz采样率和256-384kbps比特率下表现最佳，这也是DVD的标准配置。对于立体声内容，192-256kbps即可获得优质音质；对于5.1声道内容，建议使用384-640kbps比特率以确保各声道音质。',
    
    conclusion: '<strong>音频转AC3转换</strong>工具对视频制作者、家庭影院爱好者、广播工程师以及需要处理多声道音频的用户特别有用。通过使用我们的在线音频转AC3转换器，您可以将任何音频转换为广泛兼容的AC3格式，用于DVD制作、家庭影院、数字广播等多种场景。我们的工具支持批量处理，提供比特率、采样率、声道等参数控制，所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频转AC3工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频转AC3转换器</strong>支持多种常见音频格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同时上传多个不同格式的音频文件进行批量转换。工具会自动检测输入格式并处理转换。'
        },
        {
            question: '什么是AC3格式？为什么选择AC3？',
            answer: 'AC3（Audio Coding 3）是杜比实验室开发的音频编码格式，也称为杜比数字（Dolby Digital）。它的优势包括：1）广泛兼容DVD、蓝光、数字电视；2）支持最多5.1声道环绕声；3）高效的压缩算法；4）良好的音质表现；5）行业标准格式。AC3是家庭影院和视频制作的首选音频格式之一。'
        },
        {
            question: '如何选择合适的比特率？',
            answer: '比特率选择取决于音频内容和声道数量：128-192kbps适合单声道或简单立体声；192-256kbps适合标准立体声音乐；256-384kbps适合高质量立体声和简单多声道；384-448kbps适合5.1声道内容；448-640kbps适合高质量5.1声道。建议根据实际需求在音质和文件大小之间取得平衡。'
        },
        {
            question: '采样率设置有什么影响？',
            answer: '采样率决定了音频的频率响应范围。44100Hz是CD标准，适合音乐；48000Hz是DVD和数字电视标准，推荐用于视频制作；96000Hz是高清音频标准，适合专业音频制作。建议使用48000Hz以获得最佳的DVD和家庭影院兼容性。'
        },
        {
            question: '可以批量转换多个音频文件为AC3吗？',
            answer: '完全可以！我们的<strong>音频转AC3工具</strong>支持批量处理功能。您可以一次性上传多个音频文件（支持拖拽或文件选择），工具会依次处理所有文件。处理完成后，您可以单独下载每个转换后的AC3文件，或使用批量下载功能将所有结果打包成ZIP文件一次性下载。'
        },
        {
            question: 'AC3格式支持哪些声道配置？',
            answer: 'AC3格式支持多种声道配置：单声道（1.0）、立体声（2.0）、以及最多5.1声道（左、右、中置、左环绕、右环绕、低频效果）。声道选择取决于源文件的声道数，如果源文件是立体声，转换为5.1声道不会增加额外声道信息。'
        },
        {
            question: '转换过程是否安全？音频会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有音频处理都在您的浏览器本地完成。您的音频文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含敏感内容的音频文件。'
        }
    ],
    
    tutorialTitle: '如何使用音频转AC3工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要转换为AC3格式的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、FLAC、OGG、AAC、M4A等多种格式，您可以一次上传多个文件进行批量处理。',
            note: '建议使用高质量的原始音频文件，转换效果会更好。'
        },
        {
            title: '预览音频文件',
            description: '上传后，您会在左侧预览区域看到所有上传的音频文件列表。每个文件显示文件名、格式和大小信息。您可以点击播放按钮预览音频，确认选择了正确的文件。如果需要删除某个文件，点击删除图标即可。',
            note: '批量处理时，建议先预览音频列表，确保所有需要转换的文件都已正确上传。'
        },
        {
            title: '设置AC3参数',
            description: '在转换前，您可以调整输出设置。选择合适的<strong>比特率</strong>（128-640kbps），设置<strong>采样率</strong>（44.1/48/96kHz），选择<strong>声道模式</strong>（单声道/立体声/5.1声道）。这些参数可以帮助您在音质和文件大小之间取得平衡。',
            note: '48kHz采样率和256kbps比特率适合大多数DVD和家庭影院应用场景。'
        },
        {
            title: '转换为AC3格式',
            description: '设置完成后，点击<strong>"转换为AC3"</strong>按钮开始处理。工具会依次处理所有上传的音频文件，批量处理时会显示进度信息。转换时间取决于文件大小和数量，大多数音频可以在几秒到几十秒内完成。',
            note: '转换过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的AC3文件。每个文件提供<strong>播放预览</strong>功能，显示原始大小和转换后大小对比。您可以点击播放按钮直接在浏览器中预览音质效果。',
            note: '通过对比文件大小，您可以了解AC3编码的压缩效率。'
        },
        {
            title: '下载转换结果',
            description: '满意转换结果后，您可以点击每个文件下方的<strong>"下载AC3"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的AC3文件打包成一个ZIP文件一次性下载。所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
            note: '批量下载时，ZIP文件中的AC3会保持原始文件名，并自动添加.ac3扩展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频转AC3工具。现在您可以轻松将各种格式的音频转换为广泛兼容的AC3格式，用于DVD制作、家庭影院、数字广播等多种用途。',
    
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
            name: '音频转WAV',
            description: '将音频转换为WAV无损格式，适合专业音频处理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
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
            name: '杜比数字技术介绍',
            description: '了解杜比数字AC3格式的技术规范和应用',
            url: 'https://www.dolby.com/technologies/dolby-digital/'
        },
        {
            name: 'AC3编码标准',
            description: '深入了解AC3音频编码的技术细节',
            url: 'https://en.wikipedia.org/wiki/Dolby_Digital'
        },
        {
            name: 'DVD音频规范',
            description: '探索DVD视频和音频的技术标准',
            url: 'https://en.wikipedia.org/wiki/DVD'
        }
    ]
};
