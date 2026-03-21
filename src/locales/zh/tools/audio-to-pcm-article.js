export default {
    title: '音频转PCM工具：在线音频格式转换器使用指南',
    functionTitle: '什么是音频转PCM工具及其用途？',
    intro: '我们的<strong>音频转PCM工具</strong>是一款专业的在线音频格式转换应用，可以将WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多种音频格式转换为PCM原始音频数据。PCM（Pulse Code Modulation，脉冲编码调制）是最原始的数字音频表示方式，未经任何压缩，保留了音频的完整信息。使用我们的<strong>在线音频转PCM转换器</strong>，您可以精确控制采样率、位深度和声道设置，满足语音识别、音频分析、专业音频处理等多种需求。',
    
    useCasesTitle: '音频转PCM的常见应用场景',
    useCases: [
        '为语音识别系统（如百度语音、讯飞语音）准备标准PCM音频输入',
        '将各种格式音频转换为原始PCM数据用于音频信号处理和分析',
        '为嵌入式音频设备或游戏引擎准备原始音频数据',
        '音频科研和教学中的原始波形数据分析',
        '音频编辑软件的中间格式转换',
        '语音通信系统（如VoIP）的音频预处理',
        '音频特征提取和机器学习模型训练',
        '音频测试信号生成和设备校准'
    ],
    
    tipTitle: '专业提示：',
    tipContent: 'PCM格式参数选择建议：语音识别推荐16000Hz采样率、16位深度、单声道；CD音质标准为44100Hz、16位、立体声；专业音频制作推荐48000Hz或更高、24位。PCM文件体积较大，约为同等时长MP3的10倍左右，请确保有足够的存储空间。',
    
    conclusion: '<strong>音频转PCM格式转换</strong>工具对语音识别开发者、音频算法工程师、游戏开发者以及音频研究人员特别有用。通过使用我们的在线音频转PCM转换器，您可以将各种格式的音频转换为原始PCM数据，精确控制采样率和位深度，满足不同应用场景的技术要求。我们的工具支持批量处理，所有处理都在浏览器本地完成，确保您的音频隐私和数据安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频转PCM工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频转PCM转换器</strong>支持多种常见音频格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同时上传多个不同格式的音频文件进行批量转换。工具会自动检测输入格式并处理转换。'
        },
        {
            question: 'PCM格式和WAV格式有什么区别？',
            answer: 'WAV是一种容器格式，通常包含PCM编码的音频数据，但WAV文件带有文件头信息（包含采样率、位深度、声道数等元数据）。纯PCM数据则是原始的音频采样值，没有文件头。某些应用（如语音识别API）需要纯PCM数据输入，此时需要去除WAV文件头。'
        },
        {
            question: '如何为语音识别准备PCM音频？',
            answer: '大多数语音识别系统（如百度语音识别、讯飞语音识别、Google Speech API）要求PCM格式参数为：<strong>16000Hz采样率、16位深度、单声道</strong>。在转换时选择这些参数，即可得到符合要求的PCM音频。部分系统也支持8000Hz采样率。'
        },
        {
            question: '什么是采样率和位深度？',
            answer: '<strong>采样率</strong>指每秒采集音频样本的次数，决定了音频的频率范围。8000Hz适合电话语音，16000Hz适合语音识别，44100Hz是CD标准，48000Hz是专业音频标准。<strong>位深度</strong>决定每个采样点的精度，8位精度较低，16位是标准，24位和32位用于专业音频制作。'
        },
        {
            question: 'PCM文件为什么这么大？',
            answer: 'PCM是未压缩的原始音频数据，不进行任何压缩处理。例如，1分钟的16位、44100Hz立体声PCM音频约为10MB。这是PCM格式保证音频完整性的代价。如果需要减小文件大小，可以考虑转换为FLAC等无损压缩格式，或MP3等有损压缩格式。'
        },
        {
            question: '转换过程是否安全？音频会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有音频处理都在您的浏览器本地完成。您的音频文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含敏感内容的音频文件。'
        },
        {
            question: '有符号和无符号PCM有什么区别？',
            answer: '这是PCM数据的存储格式。<strong>有符号格式</strong>（Signed）使用补码表示正负值，是大多数音频处理的标准格式，兼容性更好。<strong>无符号格式</strong>（Unsigned）只表示正值，主要用于某些特定硬件或旧系统。一般建议选择有符号格式。'
        }
    ],
    
    tutorialTitle: '如何使用音频转PCM工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要转换为PCM格式的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多种格式，您可以一次上传多个文件进行批量处理。',
            note: '支持同时上传多个不同格式的音频文件，工具会自动识别并处理。'
        },
        {
            title: '预览音频文件',
            description: '上传后，您会在左侧预览区域看到所有上传的音频文件列表。每个文件显示文件名、原始格式、文件大小和时长等信息。您可以点击播放按钮预览音频，确认选择了正确的文件。如果需要删除某个文件，点击删除图标即可。',
            note: '批量处理时，建议先预览音频列表，确保所有需要转换的文件都已正确上传。'
        },
        {
            title: '设置PCM参数',
            description: '在转换前，您需要设置PCM输出参数。选择合适的<strong>采样率</strong>（8000Hz-48000Hz），设置<strong>位深度</strong>（8位、16位、24位、32位），选择<strong>声道</strong>（单声道或立体声）。对于语音识别应用，推荐选择16000Hz采样率、16位深度、单声道。',
            note: '不同的应用场景对PCM参数有不同要求，请根据目标用途选择合适的参数组合。'
        },
        {
            title: '转换为PCM格式',
            description: '设置完成后，点击<strong>"转换为PCM"</strong>按钮开始处理。工具会依次处理所有上传的音频文件，批量处理时会显示进度信息。转换时间取决于文件大小和数量，大多数音频可以在几秒到几十秒内完成。',
            note: '转换过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的PCM文件。每个文件显示原始大小、转换后大小等信息。由于PCM是原始数据格式，部分浏览器可能无法直接播放，您可以下载后在专业音频软件中使用。',
            note: 'PCM文件体积较大，请确保有足够的存储空间。'
        },
        {
            title: '下载转换结果',
            description: '满意转换结果后，您可以点击每个文件下方的<strong>"下载PCM"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的PCM文件打包成一个ZIP文件一次性下载。所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
            note: '下载的PCM文件可以在语音识别API、音频分析软件或其他支持PCM格式的应用中直接使用。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频转PCM工具。现在您可以将各种格式的音频转换为原始PCM数据，用于语音识别、音频分析、专业音频处理等多种应用场景。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '音频转MP3',
            description: '将音频转换为兼容性最好的MP3格式，适合音乐播放和分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音频转WAV',
            description: '将音频转换为无损WAV格式，适合专业音频编辑和存档。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音频转M4A',
            description: '将音频转换为适合苹果设备的M4A格式。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: '图片转ASCII艺术',
            description: '将图片转换为ASCII字符画，创造独特的文字艺术效果。',
            url: 'https://www.ufreetools.com/tool/image-to-ascii'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'PCM音频格式详解',
            description: '了解PCM脉冲编码调制的原理和技术细节',
            url: 'https://en.wikipedia.org/wiki/Pulse-code_modulation'
        },
        {
            name: '语音识别音频要求',
            description: '主流语音识别平台对音频格式的要求',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats'
        },
        {
            name: '数字音频基础知识',
            description: '采样率、位深度、声道等概念的详细解释',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
