export default {
    title: 'GNSS时间转换器使用指南 - GPS周秒与UTC时间在线转换工具',
    functionTitle: '什么是GNSS时间转换器及其用途？',
    intro: '我们的<strong>GNSS时间转换器</strong>是一款专业的在线工具，可以实现UTC时间与GPS周秒、北斗时间之间的相互转换。该工具支持儒略日计算、批量处理和时间轴可视化功能，适用于卫星导航定位、测绘工程、科学研究等领域。使用我们的<strong>GPS周秒转换工具</strong>，您可以快速准确地完成各种GNSS时间系统的转换需求。',

    useCasesTitle: 'GNSS时间转换器的常见应用场景',
    useCases: [
        '卫星导航定位数据处理中的时间同步',
        'GNSS接收机数据解析和后处理',
        '测绘工程中的精密时间转换',
        '航空航天领域的时间基准统一',
        '科研项目中的多系统时间数据融合',
        '北斗导航系统与GPS系统数据对比分析'
    ],

    tipTitle: '专业提示：',
    tipContent: '在进行高精度时间转换时，请注意不同GNSS系统之间的闰秒差异。GPS时间与UTC时间存在固定闰秒差，北斗时间与UTC时间也存在不同的闰秒差，这些差异会随时间推移而变化。',

    conclusion: '<strong>GNSS时间转换器</strong>对卫星导航工程师、测绘专业人员、科研工作者以及任何需要处理GNSS时间数据的人员都非常有用。通过使用我们的工具，您可以节省大量手动计算时间，避免转换错误，并提高工作效率。我们的工具使GNSS时间转换过程变得简单高效，无需安装任何专业软件。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '什么是GPS周和周内秒？',
            answer: 'GPS周是从1980年1月6日0时0分0秒开始计算的连续周数，周内秒（TOW）是一周内从周日0时开始的秒数。GPS时间系统采用原子时秒长作为时间基准，启动后不跳秒，保持时间的连续性。这种表示方法在卫星导航中广泛使用，因为它可以避免因闰秒调整带来的复杂性。'
        },
        {
            question: 'UTC时间与GPS时间有什么区别？',
            answer: 'UTC（协调世界时）是国际通用的时间标准，会不定期增加闰秒以适应地球自转速度变化。GPS时间基于原子时，从1980年1月6日起与UTC时间对齐，但不进行闰秒调整。因此，GPS时间与UTC时间之间存在整秒差，这个差值会随着闰秒的增加而增大。截至当前，GPS时间比UTC时间快约18秒。'
        },
        {
            question: '如何批量转换多个时间数据？',
            answer: '使用我们的<strong>批量时间转换功能</strong>，您可以在批量输入框中按行输入多个时间数据。根据选择的输入模式（日期时间、GPS时间或北斗时间），按相应格式输入数据，每行一个记录。例如，GPS时间格式为"周,周内秒"，如"2234,172800"。输入完成后点击"转换时间"按钮，系统将自动转换所有数据。'
        },
        {
            question: '什么是儒略日？为什么需要计算它？',
            answer: '儒略日是一种连续计日法，从公元前4713年1月1日12时开始计算的天数，广泛用于天文学和航天领域。儒略日提供了一种统一的时间表示方法，便于跨系统时间转换和长时间跨度计算。在GNSS应用中，儒略日常用于轨道计算和时间同步等场景。'
        },
        {
            question: '时间轴可视化功能有什么作用？',
            answer: '时间轴可视化功能可以在图形界面上直观显示所有转换时间点的相对位置关系。通过查看时间轴，您可以快速了解不同时间点之间的间隔和分布情况，有助于发现数据中的异常值或规律性。这个功能特别适用于分析长时间序列的GNSS数据。'
        }
    ],

    tutorialTitle: '如何使用GNSS时间转换器',
    steps: [
        {
            title: '选择输入模式',
            description: '在左侧输入区域顶部选择合适的输入模式：日期时间、GPS时间或北斗时间。根据您的数据类型选择对应的模式，以便正确解析输入数据。',
            note: '日期时间模式支持标准的ISO格式，如2023-01-01T00:00:00。'
        },
        {
            title: '输入时间数据',
            description: '在对应输入框中输入时间数据。您可以输入单个时间点，也可以在批量输入框中输入多个时间点，每行一个记录。系统支持多种输入格式以适应不同需求。',
            note: '批量输入时，请确保每行数据格式一致，避免转换错误。'
        },
        {
            title: '设置输出格式',
            description: '在参数设置区域选择输出时间格式。您可以选择ISO标准格式（YYYY-MM-DD HH:mm:ss）或自定义格式。根据后续使用需求选择合适的格式。',
            note: 'ISO格式便于程序处理，自定义格式便于人工阅读。'
        },
        {
            title: '执行转换',
            description: '点击<strong>"转换时间"</strong>按钮开始转换。系统将根据您选择的输入模式和输入的数据，自动计算并显示UTC时间、GPS时间、北斗时间以及儒略日等信息。',
            note: '转换过程通常在几秒内完成，即使是大量数据也能快速处理。'
        },
        {
            title: '查看和导出结果',
            description: '转换完成后，结果将显示在右侧输出区域。您可以查看每个时间点的详细转换信息，使用时间轴可视化功能查看时间分布，或点击"导出CSV"按钮将结果保存为文件。',
            note: '点击每个结果项的"复制"按钮可以快速复制该条记录的转换结果。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的GNSS时间转换器。现在您可以轻松完成UTC时间、GPS时间、北斗时间之间的相互转换，用于卫星导航、测绘工程、科学研究等各种应用场景。',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '坐标转换器',
            description: '在不同坐标系之间转换经纬度坐标，支持多种投影系统。',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS轨迹回放',
            description: '上传并可视化GPS轨迹数据，支持多种文件格式。',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: '高斯投影计算',
            description: '进行高斯-克吕格投影正反算，支持3度带和6度带。',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: '图幅分幅计算器',
            description: '根据经纬度坐标计算所在图幅编号，支持多种比例尺。',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: '全球导航卫星系统时间基础',
            description: '关于GNSS时间系统的详细介绍',
            url: 'https://www.ngs.noaa.gov/CORS/GNSS-Time.shtml'
        },
        {
            name: 'GPS时间系统详解',
            description: 'GPS时间系统的详细介绍',
            url: 'https://zh.wikipedia.org/wiki/GPS%E6%97%B6%E9%97%B4'
        },
        {
            name: '北斗时间系统',
            description: '北斗导航系统时间基准说明',
            url: 'https://zh.wikipedia.org/wiki/%E5%8C%97%E6%96%97%E5%8D%AB%E6%98%9F%E5%AF%BC%E8%88%AA%E7%B3%BB%E7%BB%9F'
        }
    ]
}