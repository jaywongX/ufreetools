export default {
    title: '音频转MIDI工具：在线音频转MIDI转换器使用指南',
    functionTitle: '什么是音频转MIDI工具及其用途？',
    intro: '我们的<strong>音频转MIDI工具</strong>是一款专业的在线音频转MIDI转换应用，可以将WAV、MP3、FLAC、OGG、AAC、M4A等多种音频格式转换为MIDI格式。MIDI（Musical Instrument Digital Interface）是一种音乐行业标准格式，记录音符、力度、时长等音乐信息而非音频本身，特别适合音乐制作、编曲学习、音乐分析和数字音乐处理。使用我们的<strong>在线音频转MIDI转换器</strong>，您可以快速将音频中的旋律提取为MIDI音符，支持批量处理和精确参数调节，无需安装任何软件。',
    
    useCasesTitle: '音频转MIDI的常见应用场景',
    useCases: [
        '从录音或音频文件中提取旋律用于音乐编曲和制作',
        '将哼唱或口哨旋律转换为MIDI进行音乐创作',
        '分析现有音乐的音符结构用于学习和研究',
        '为视频或游戏制作背景音乐的MIDI版本',
        '将真实乐器演奏转换为数字音乐用于后期编辑',
        '提取歌曲主旋律用于卡拉OK或伴奏制作',
        '将老歌或黑胶唱片音乐数字化为MIDI格式',
        '为音乐教学准备可编辑的乐谱素材'
    ],
    
    tipTitle: '专业提示：',
    tipContent: 'MIDI转换效果受音频质量影响较大。单声道、清晰、无杂音的音频转换效果最佳。对于复杂的多声部音乐，建议先进行音轨分离，再分别转换。转换后可以在DAW软件中进一步编辑和优化MIDI数据。',
    
    conclusion: '<strong>音频转MIDI转换</strong>工具对音乐制作人、作曲家、音乐教育工作者以及音乐爱好者特别有用。通过使用我们的在线音频转MIDI转换器，您可以将任何音频中的旋律提取为可编辑的MIDI音符数据，用于音乐创作、编曲、学习和分析。我们的工具支持批量处理，提供灵敏度、音符范围、时间量化等参数控制，所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '音频转MIDI工具支持哪些输入格式？',
            answer: '我们的<strong>在线音频转MIDI转换器</strong>支持多种常见音频格式，包括WAV、MP3、FLAC、OGG、AAC、M4A、WMA、AMR、AIFF、APE等格式。您可以同时上传多个不同格式的音频文件进行批量转换。工具会自动检测输入格式并处理转换。'
        },
        {
            question: '什么是MIDI格式？为什么需要转MIDI？',
            answer: 'MIDI（Musical Instrument Digital Interface）是一种记录音乐演奏信息的数字格式，不包含实际音频，而是记录音符、力度、时长等信息。转MIDI后可以：1）在DAW软件中编辑音符；2）更换乐器音色；3）调整音乐速度和调性；4）用于音乐学习和分析。MIDI文件体积小，易于编辑和分享。'
        },
        {
            question: '转换灵敏度如何选择？',
            answer: '灵敏度决定了音符检测的精细程度。高灵敏度适合复杂音乐，能检测更多细节，但可能产生多余音符；中等灵敏度是推荐设置，平衡准确性和简洁性；低灵敏度适合简单旋律，只检测主要音符。建议根据音频复杂度选择合适的灵敏度。'
        },
        {
            question: '可以批量转换多个音频文件为MIDI吗？',
            answer: '完全可以！我们的<strong>音频转MIDI工具</strong>支持批量处理功能。您可以一次性上传多个音频文件（支持拖拽或文件选择），工具会依次处理所有文件。处理完成后，您可以单独下载每个转换后的MIDI文件，或使用批量下载功能将所有结果打包成ZIP文件一次性下载。'
        },
        {
            question: '转换效果受哪些因素影响？',
            answer: 'MIDI转换效果主要受以下因素影响：1）音频质量 - 清晰无杂音的音频效果最佳；2）音乐复杂度 - 单旋律比多声部转换效果更好；3）乐器类型 - 钢琴、吉他等清晰乐器效果更好；4）音频格式 - 无损格式（WAV、FLAC）比有损格式（MP3）效果更好。建议使用高质量的原始音频。'
        },
        {
            question: '转换过程是否安全？音频会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有音频处理都在您的浏览器本地完成。您的音频文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含敏感内容的音频文件。'
        },
        {
            question: '转换后的MIDI可以在哪些软件中使用？',
            answer: '转换后的MIDI文件可以在几乎所有音乐软件中使用，包括：DAW软件（Cubase、Logic Pro、FL Studio、Ableton Live等）、打谱软件（Sibelius、Finale、MuseScore等）、虚拟乐器、音乐学习软件等。MIDI是通用格式，兼容性极强。'
        }
    ],
    
    tutorialTitle: '如何使用音频转MIDI工具',
    steps: [
        {
            title: '上传您的音频文件',
            description: '首先上传您想要转换为MIDI格式的音频文件。您可以通过两种方式上传：<strong>拖拽文件</strong>到上传区域或<strong>点击浏览</strong>选择文件。工具支持WAV、MP3、FLAC、OGG、AAC、M4A等多种格式，您可以一次上传多个文件进行批量处理。',
            note: '建议使用清晰、无杂音的音频文件，单旋律音频转换效果最佳。'
        },
        {
            title: '预览音频文件',
            description: '上传后，您会在左侧预览区域看到所有上传的音频文件列表。每个文件显示文件名、格式和大小信息。您可以点击播放按钮预览音频，确认选择了正确的文件。如果需要删除某个文件，点击删除图标即可。',
            note: '批量处理时，建议先预览音频列表，确保所有需要转换的文件都已正确上传。'
        },
        {
            title: '设置MIDI参数',
            description: '在转换前，您可以调整输出设置。选择合适的<strong>转换灵敏度</strong>（高/中/低），设置<strong>音符范围</strong>（最低和最高音符），设置<strong>时间量化</strong>（音符时长的精确度）。这些参数可以帮助您获得更好的转换效果。',
            note: '中等灵敏度和自动音符范围适合大多数音频，如果效果不理想可以尝试调整。'
        },
        {
            title: '转换为MIDI格式',
            description: '设置完成后，点击<strong>"转换为MIDI"</strong>按钮开始处理。工具会依次处理所有上传的音频文件，批量处理时会显示进度信息。转换时间取决于文件大小和数量，大多数音频可以在几秒到几十秒内完成。',
            note: '转换过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的MIDI文件。每个文件提供<strong>预览</strong>功能，显示音符数量和时长信息。您可以在DAW软件中打开MIDI文件进行详细编辑和优化。',
            note: 'MIDI文件可在任何音乐软件中打开，建议使用专业DAW进行后期编辑。'
        },
        {
            title: '下载转换结果',
            description: '满意转换结果后，您可以点击每个文件下方的<strong>"下载MIDI"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的MIDI文件打包成一个ZIP文件一次性下载。所有处理都在浏览器本地完成，确保您的音频隐私和安全。',
            note: '批量下载时，ZIP文件中的MIDI会保持原始文件名，并自动添加.mid扩展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的音频转MIDI工具。现在您可以轻松将各种格式的音频转换为MIDI格式，用于音乐创作、编曲学习、音乐分析等多种用途。',
    
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
            name: 'MIDI格式标准',
            description: '了解MIDI格式的技术规范和应用场景',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: '音频转MIDI技术原理',
            description: '深入了解音高检测和MIDI转换算法',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: '音乐信息检索',
            description: '探索音乐信息检索和自动音乐转录技术',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
