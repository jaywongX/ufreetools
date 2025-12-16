export default {
    title: '“今天吃什么”在线决策工具：智能美食推荐与用餐选择指南',
    functionTitle: '什么是“今天吃什么”在线决策工具？',
    intro: '我们的<strong>今天吃什么在线决策工具</strong>是一款纯前端开源应用，通过时间、预算、辣度、饮食限制、天气和场景等维度综合打分，实时生成可执行的美食推荐方案。整个决策过程在浏览器本地完成，不上传任何个人偏好，既高效又保护隐私。',
    useCasesTitle: '真实可用的应用场景',
    useCases: [
        '加班或熬夜时快速确定宵夜吃什么，减少决策时间',
        '午餐时间结合预算与辣度偏好，找到高性价比餐单',
        '约会或家庭聚餐时，挑选不踩雷的场景化菜品组合',
        '炎热、降温或阴雨天气，匹配清凉/暖胃的菜品与饮品',
        '素食、纯素或清真友好场景下的安全可选菜单',
        '健身增肌或控糖阶段，优先高蛋白、低碳的餐食灵感',
        '出差或旅行时，快速列出当地常见且易获得的美食',
        '雨天懒得出门时，推荐可外卖或易做的家常菜'
    ],
    tipTitle: '专业提示：',
    tipContent: '先锁定“用餐时间”和“预算偏好”，再微调辣度、天气和饮食限制，可以让“今天吃什么在线决策工具”更快给出高匹配度结果。',
    conclusion: '<strong>今天吃什么在线决策工具</strong>让选择餐单不再纠结。凭借多维度打分和本地计算，你可以在几秒内拿到符合口味、预算与场景的美食推荐，适合上班族、学生、健身人群或家庭用户随时使用。',
    faqTitle: '常见问题（FAQ）',
    faqs: [
        {
            question: '“今天吃什么在线决策工具”如何保证结果真实可靠？',
            answer: '工具基于公开可得的常见菜品数据集，并按时间、预算、辣度、天气、场景和饮食限制打标。筛选和随机都在本地运行，推荐的是可以实际执行的餐单。'
        },
        {
            question: '使用“今天吃什么在线决策工具”会上传我的个人偏好吗？',
            answer: '不会。所有计算在浏览器本地完成，不会把你的任何筛选信息上传到服务器，隐私安全。'
        },
        {
            question: '素食或清真用户能否在“今天吃什么在线决策工具”中得到合适推荐？',
            answer: '可以。选择素食、纯素或清真友好后，系统会过滤不符合要求的菜品，只展示符合饮食限制的选项。'
        },
        {
            question: '天气或场景如何影响“今天吃什么在线决策工具”的推荐？',
            answer: '炎热/阴雨、约会/加班等选项会调整菜品得分，例如炎热时更倾向凉菜、阴雨时更倾向热汤、约会时提升体面易分享的选项。'
        },
        {
            question: '高蛋白或低碳饮食能在“今天吃什么在线决策工具”中实现吗？',
            answer: '能。选择高蛋白或低碳偏好后，算法会优先推送高蛋白主食与低碳搭配，适合健身或控糖场景。'
        },
        {
            question: '如果对结果不满意，“今天吃什么在线决策工具”能换一批吗？',
            answer: '可以。点击“换一批推荐”即可在同样的条件下重新随机，直到找到满意的选项。'
        },
        {
            question: '为什么有时推荐数量较少？',
            answer: '当筛选条件过于严格（例如纯素 + 清真 + 高蛋白 + 宵夜 + 炎热）时匹配项会减少。可放宽部分条件后再试，或点击“重置筛选”。'
        },
        {
            question: '“今天吃什么在线决策工具”是否开源？',
            answer: '是的，工具采用纯前端开源实现，逻辑与数据可审阅，方便自定义与二次开发。'
        }
    ],
    tutorialTitle: '如何使用“今天吃什么在线决策工具”',
    steps: [
        {
            title: '锁定时间与预算',
            description: '选择“用餐时间”和“预算偏好”，今天吃什么在线决策工具会先缩小候选范围。'
        },
        {
            title: '设定辣度和饮食限制',
            description: '根据辣度、素食/清真等限制过滤不合适的菜品，确保结果可实际执行。'
        },
        {
            title: '按天气与场景微调',
            description: '炎热、阴雨或约会、加班等选项会调节得分，突出更贴合的餐单。'
        },
        {
            title: '点击开始决策',
            description: '点击“开始决策”生成结果，如需更多灵感可继续点击“换一批推荐”。'
        },
        {
            title: '查看理由与能量提示',
            description: '每个推荐都带有理由和能量提示，帮助你快速拍板。'
        },
        {
            title: '重置或再次优化',
            description: '想重新开始可“重置筛选”，也可微调单项偏好继续生成新结果。'
        }
    ],
    successTitle: '恭喜！',
    successContent: '你已学会使用今天吃什么在线决策工具，随时获取个性化餐单灵感，轻松告别选择困难。',
    relatedToolsTitle: '你可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '图片压缩器',
            description: '压缩美食照片或菜单图片，便于分享与存档。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '二维码生成器',
            description: '把餐单或团购链接生成二维码，方便扫码点餐。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        },
        {
            name: 'EXIF查看器',
            description: '查看美食照片的EXIF信息，管理拍摄数据和位置。',
            url: 'https://www.ufreetools.com/tool/exif-viewer'
        },
        {
            name: '印章生成器',
            description: '为社群或餐厅活动制作数字印章，用于宣传物料。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        }
    ],
    referencesTitle: '参考资源',
    references: [
        {
            name: '中国居民膳食指南',
            description: '官方发布的均衡饮食与营养搭配指南',
            url: 'http://dg.cnsoc.org/'
        },
        {
            name: 'Dietary Patterns and Health',
            description: '饮食模式与健康影响的研究综述',
            url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7071241/'
        },
        {
            name: 'FoodData Central',
            description: '美国农业部公开食品营养数据库',
            url: 'https://fdc.nal.usda.gov/'
        }
    ]
};

