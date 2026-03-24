export default {
    title: '音频转FLAC工具：在线音频转FLAC无损转换器使用指南',
    functionTitle: '什么是音频转FLAC工具及其用途？',
    intro: '我们的<strong>音频转FLAC工具</strong>是一款专业的在线音频转FLAC无损格式转换应用，可以将WAV、MP3、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多种音频格式转换为FLAC格式。FLAC（Free Lossless Audio Codec）是一种开源无损音频压缩格式，能够在保持原始音质完全不变的情况下，将文件体积压缩30-60%。使用我们的<strong>在线音频转FLAC转换器</strong>，您可以批量处理多个音频文件，精确控制压缩级别和采样率，无需安装任何软件即可完成格式转换。',
    
    useCasesTitle: '音频转FLAC的常见应用场景',
    useCases: [
        '将WAV等未压缩音频转换为FLAC以节省存储空间，同时保持无损音质',
        '将高分辨率音频归档为FLAC格式，便于长期保存和管理',
        '将MP3等有损格式转回FLAC用于专业音频处理',
        '为音乐收藏创建无损备份，确保音质永不损失',
        '将各种格式的音频统一转换为FLAC，便于音乐库管理',
        '为发烧友级音频设备准备高质量音源文件',
        '将录音室原始录音转换为FLAC进行无损分发',
        '为音频编辑和处理准备无损源文件'
    ],
    
    tipTitle: '专业提示：',
    tipContent: 'FLAC是无损压缩格式，从无损源（如WAV、AIFF）转换为FLAC不会损失任何音质。但从有损格式（如MP3、AAC）转换为FLAC无法恢复已损失的音质，只会增加文件大小。建议只在原始音频是无损格式时转换为FLAC，以获得最佳效果。',
    
    conclusion: '<strong>音频转FLAC格式转换</strong>工具对音乐发烧友、音频工程师、音乐收藏家以及需要高质量音频存储的用户特别有用。通过使用我们的在线音频转FLAC转换器，您可以在保持原始音质完全不变的情况下，大幅减小文件体积，便于存储和分享。我们的工具支持批量处理，提供压缩级别、采样率、位深度等参数控制，所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频转FLAC工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频转FLAC转换器</strong>支持多种常见音频格式，包括WAV、MP3、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同时上传多个不同格式的音频文件进行批量转换。工具会自动检测输入格式并处理转换。'
        },
        {
            question: '什么是FLAC格式？为什么选择FLAC？',
            answer: 'FLAC（Free Lossless Audio Codec）是一种开源无损音频压缩格式。与MP3等有损格式不同，FLAC可以在压缩文件大小的同时完全保留原始音频数据，没有任何音质损失。FLAC文件通常比原始WAV文件小30-60%，但音质完全相同。FLAC是音乐归档和高保真音频存储的理想选择。'
        },
        {
            question: 'FLAC压缩级别如何选择？',
            answer: 'FLAC提供0-8共9个压缩级别。级别越高，压缩率越大，文件越小，但压缩时间也越长。所有级别的音质完全相同。级别0压缩最快但文件较大；级别8压缩最慢但文件最小。级别5是推荐设置，在压缩率和速度之间取得良好平衡，适合大多数使用场景。'
        },
        {
            question: '可以批量转换多个音频文件为FLAC吗？',
            answer: '完全可以！我们的<strong>音频转FLAC工具</strong>支持批量处理功能。您可以一次性上传多个音频文件（支持拖拽或文件选择），工具会依次处理所有文件。处理完成后，您可以单独下载每个转换后的FLAC文件，或使用批量下载功能将所有结果打包成ZIP文件一次性下载。'
        },
        {
            question: '从MP3转换为FLAC能提高音质吗？',
            answer: '不能。MP3是有损压缩格式，部分音频数据已经永久丢失。将MP3转换为FLAC只是将有损音频存储在更大的文件中，无法恢复原始音质。只有在原始音频是无损格式（如WAV、AIFF、原始录音）时，转换为FLAC才能保持无损音质并获得压缩效果。'
        },
        {
            question: '转换过程是否安全？音频会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有音频处理都在您的浏览器本地完成。您的音频文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含敏感内容的音频文件。'
        },
        {
            question: 'FLAC与WAV有什么区别？',
            answer: '两者都是无损格式，音质完全相同。主要区别在于：1）文件大小 - FLAC比WAV小30-60%；2）兼容性 - WAV兼容性更广，FLAC需要支持该格式的播放器；3）元数据 - FLAC支持更丰富的标签信息；4）处理需求 - FLAC需要解码，WAV可直接播放。对于存储和分享，推荐FLAC；对于专业音频处理，推荐WAV。'
        }
    ],
    
    tutorialTitle: '如何使用音频转FLAC工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要转换为FLAC格式的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、OGG、AAC、M4A、WMA、AMR、AIFF、APE等多种格式，您可以一次上传多个文件进行批量处理。',
            note: '建议使用无损格式（WAV、AIFF）作为源文件，以获得最佳的无损转换效果。'
        },
        {
            title: '预览音频文件',
            description: '上传后，您会在左侧预览区域看到所有上传的音频文件列表。每个文件显示文件名、原始格式、文件大小等信息。您可以点击播放按钮预览音频，确认选择了正确的文件。如果需要删除某个文件，点击删除图标即可。',
            note: '批量处理时，建议先预览音频列表，确保所有需要转换的文件都已正确上传。'
        },
        {
            title: '设置FLAC参数',
            description: '在转换前，您可以调整输出设置。选择合适的<strong>压缩级别</strong>（0-8，推荐5），设置<strong>采样率</strong>（自动、44100Hz、48000Hz、96000Hz、192000Hz），设置<strong>位深度</strong>（16/24/32 bit）和<strong>声道</strong>（立体声、单声道、自动）。',
            note: '压缩级别5和自动采样率是推荐设置，适合大多数音频转换场景。'
        },
        {
            title: '转换为FLAC格式',
            description: '设置完成后，点击<strong>"转换为FLAC"</strong>按钮开始处理。工具会依次处理所有上传的音频文件，批量处理时会显示进度信息。转换时间取决于文件大小和数量，以及选择的压缩级别。',
            note: '转换过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的FLAC文件。每个文件提供<strong>在线播放</strong>功能，您可以点击播放按钮预览转换效果。文件下方显示原始大小、转换后大小和压缩比等信息。',
            note: 'FLAC无损转换保证音质与原始完全一致，只是文件大小有所不同。'
        },
        {
            title: '下载转换结果',
            description: '满意转换结果后，您可以点击每个文件下方的<strong>"下载FLAC"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的FLAC文件打包成一个ZIP文件一次性下载。所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
            note: '批量下载时，ZIP文件中的音频会保持原始文件名，并自动添加.flac扩展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频转FLAC工具。现在您可以轻松将各种格式的音频转换为FLAC无损格式，在保持原始音质不变的情况下减小文件体积，便于存储和分享。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '音频转WAV',
            description: '将音频转换为WAV无损格式，适合专业音频处理。',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: '音频转MP3',
            description: '将音频转换为MP3格式，节省存储空间便于分享。',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: '音频转M4A',
            description: '将音频转换为M4A格式，兼容苹果设备，音质优良。',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: '音频转PCM',
            description: '将音频转换为PCM原始格式，适合专业音频处理和分析。',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'FLAC音频编码标准',
            description: '了解FLAC格式的压缩原理和技术规范',
            url: 'https://xiph.org/flac/'
        },
        {
            name: '无损音频格式对比',
            description: 'FLAC、ALAC、WAV等无损格式的特点和适用场景',
            url: 'https://en.wikipedia.org/wiki/FLAC'
        },
        {
            name: '音频采样率与位深度',
            description: '深入了解采样率和位深度对音质的影响',
            url: 'https://en.wikipedia.org/wiki/Audio_bit_depth'
        }
    ]
};
