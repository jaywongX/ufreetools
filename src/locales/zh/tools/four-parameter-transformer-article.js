export default {
    title: '四参数转换器：平面相似与赫尔默特变换批量指南',
    functionTitle: '四参数转换器如何保障区域坐标一键对接？',
    intro: '<p>四参数转换器基于平面相似、布尔莎简化与赫尔默特模型构建，可覆盖 ΔX、ΔY 平移、旋转 θ 与尺度 m 在内的全部参数。通过纯前端算法，系统可在浏览器本地完成单点与批量正反算，并实时给出残差向量、RMSE、95% 置信区间以及精度热力图，保障每一次坐标对接可追踪、可验证、可评估。</p>',
    useCasesTitle: '工具功能与应用场景',
    useCases: {
        first: '<strong>工程坐标一体化</strong>：在城市更新或轨道交通项目中，快速将地方独立坐标系映射到统一工程坐标系，提高设计与施工协同效率。',
        second: '<strong>区域投影拼图</strong>：遥感、无人机成果往往来自不同投影带，四参数转换器可批量更新平面控制点，实现无缝拼接。',
        third: '<strong>自定义平面系融合</strong>：对接厂矿、园区内自建坐标系，借助四参数模型消除尺度与旋转差，实现图纸与现场一致。',
        fourth: '<strong>成果复核与验收</strong>：输出残差分布直方图和置信区间，向甲方或监管部门提交量化评估报告。'
    },
    tipTitle: '产品页图片',
    logoAlt: '四参数转换器产品预览',
    tipContent: '该示意图可被搜索引擎抓取，用于在搜索结果中展示四参数转换器的富媒体摘要。',
    conclusion: '<p>依靠四参数转换器，测绘、设计、监理团队可以在不泄露原始坐标的前提下完成本地化转换、残差审查与报告输出，满足项目全生命周期对数据可追溯、可验证的要求。若需进一步进行投影换带，可配合 <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">坐标批量换带工具</a> 使用；如需查阅国际标准，可访问 <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">OGC Coordinate Transformation</a> 获得更多指导。</p>',
    faqTitle: '常见问题解答',
    faqs: {
        q1: {
            question: '四参数转换器如何保证平面相似变换的精度和稳定性？',
            answer: '<p>工具采用最小二乘平差求解 ΔX、ΔY、θ、m，并输出 RMSE、最大残差及 95% 置信区间，用户可通过日志审查矩阵运算，验证平面相似变换的精度。</p>'
        },
        q2: {
            question: '批量导入时能否自动跳过错误坐标？',
            answer: '<p>可以。解析阶段若发现列数不符或数据异常，系统会在日志中记录并跳过该条，继续处理剩余坐标，保证批量转换不中断。</p>'
        },
        q3: {
            question: '四参数转换器是否支持正算与反算？',
            answer: '<p>支持。工具提供正算（源 → 目标）与反算（目标 → 源）按钮，便于比对转换前后坐标并生成叠加可视化。</p>'
        },
        q4: {
            question: '如何在四参数转换器中查看残差分布？',
            answer: '<p>完成转换后，系统自动绘制控制点分布图、残差直方图与精度热力网格，帮助您判断点群是否均匀、误差是否集中。</p>'
        },
        q5: {
            question: '可否引用四参数转换器生成的报告？',
            answer: '<p>可以。结果区支持导出 CSV，日志可一键复制，图表可截图嵌入技术报告，满足工程验收或备案需求。</p>'
        }
    },
    tutorialTitle: '四参数转换器操作指南',
    steps: {
        step1: {
            title: '准备源坐标与控制点',
            description: '首先整理源坐标与对应目标坐标，并确认分隔符格式，确保每行数据包含 X、Y 及可选的目标值与点名。'
        },
        step2: {
            title: '选择模型并输入参数',
            description: '在“模型设置”中选择平面相似、布尔莎简化或赫尔默特模型，录入 ΔX、ΔY、θ、m，或保持空白等待平差结果。'
        },
        step3: {
            title: '加载示例或导入文件',
            description: '可使用“加载示例”快速体验，也可以拖拽 CSV/TXT 文件，实现大批量坐标导入并自动解析。'
        },
        step4: {
            title: '执行平差与转换',
            description: '在公共点解算区粘贴成对坐标，点击“平面相似平差”获得最佳参数，再执行正算或反算完成批量转换。'
        },
        step5: {
            title: '查看日志与可视化',
            description: '实时日志将展示解析、平差、转换、统计等流程，同时绘制控制点分布、残差直方图与热力概览。'
        },
        step6: {
            title: '导出成果并分享',
            description: '确认结果后，导出 CSV 与日志，并截图可视化图表，用于成果提交、复核或资料归档。'
        }
    },
    successTitle: '完成部署',
    successContent: '恭喜！您已掌握四参数转换器的全部流程，可以自信地处理各类平面坐标对接任务并生成精度评估报告。',
    relatedToolsTitle: '相关工具推荐',
    relatedTools: {
        first: {
            name: '图幅分幅计算器',
            description: '根据经纬度坐标计算所在图幅编号，支持多种比例尺。',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'GNSS时间转换器',
            description: 'GPS时间、北斗时间与UTC时间相互转换工具。',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: '面积与周长计算器',
            description: '支持绘制多边形自动计算面积和周长，提供多种单位切换。',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: '基线计算器',
            description: '输入起点、终点坐标计算基线长度和方位角，支持误差传播分析。',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: '参考资料',
    references: {
        first: {
            name: '中国地理信息产业协会 - 标准规范',
            description: '中国地理信息行业标准与技术规范',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'ISO 19111 参考坐标系标准',
            description: '国际坐标基准与投影转换的权威标准。',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: '开放地理空间联盟 (OGC) 标准',
            description: '地理空间数据转换的国际标准',
            url: 'https://www.ogc.org/'
        }
    }
}

