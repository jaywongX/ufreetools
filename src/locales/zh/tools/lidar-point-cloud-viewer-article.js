export default {
    title: '在线LIDAR点云查看器 - 免费3D点云数据可视化工具',
    functionTitle: '工具功能介绍与应用场景',
    intro: '我们的<strong>在线LIDAR点云查看器</strong>是一款专业的3D点云数据可视化工具，支持多种点云格式的在线查看和分析。这款<strong>免费点云查看器</strong>基于WebGL技术，无需安装任何软件，直接在浏览器中即可实现高质量的3D点云渲染。无论您是测绘工程师、建筑师、还是地理信息系统专家，这款<strong>LIDAR数据查看器</strong>都能满足您的专业需求。',
    useCasesTitle: '主要应用场景',
    useCases: [
        '测绘工程：查看和分析激光雷达扫描数据，进行地形测量和建筑物测绘',
        '建筑设计：可视化建筑物点云数据，辅助建筑信息建模(BIM)工作流程',
        '城市规划：分析城市3D模型数据，支持智慧城市建设和规划决策',
        '林业调查：处理森林点云数据，进行植被覆盖度和生物量评估',
        '考古研究：查看考古遗址的3D扫描数据，进行文物保护和研究',
        '地质勘探：分析地质构造点云数据，支持矿物勘探和地质灾害评估',
        '自动驾驶：查看车载激光雷达数据，进行路径规划和障碍物检测',
        '工业检测：分析工业设备的3D扫描数据，进行质量控制和缺陷检测'
    ],
    tipTitle: '专业提示',
    tipContent: '我们的点云查看器支持LAS、XYZ、PLY、PCD等主流格式，提供多种着色模式和交互控制，让您能够从不同角度深入分析点云数据。',
    conclusion: '通过使用我们的<strong>在线点云可视化工具</strong>，您可以快速预览和分析各种LIDAR数据，提高工作效率。这款<strong>3D点云查看器</strong>完全免费，保护您的数据隐私，所有处理都在本地浏览器中完成。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '这个LIDAR点云查看器支持哪些文件格式？',
            answer: '我们的<strong>点云查看器</strong>支持多种主流格式，包括LAS格式（激光雷达标准格式）、XYZ格式（ASCII点云格式）、PLY格式（多边形文件格式）、PCD格式（点云数据格式）和TXT格式。这些格式涵盖了大部分<strong>LIDAR数据处理</strong>和3D扫描应用场景。'
        },
        {
            question: '点云文件的大小有限制吗？',
            answer: '为了确保良好的浏览器性能，我们建议上传的<strong>点云文件</strong>大小不超过100MB。对于大型点云数据集，建议先进行数据抽稀或分块处理。我们的<strong>在线点云查看器</strong>会自动优化渲染性能，确保流畅的3D可视化体验。'
        },
        {
            question: '如何调整点云的显示效果？',
            answer: '我们的<strong>3D点云可视化工具</strong>提供多种显示选项：您可以调整点的大小、选择不同的着色模式（高程着色、强度着色、分类着色、RGB着色），还可以控制点云密度和启用动画效果。这些功能让您能够更好地分析<strong>LIDAR扫描数据</strong>。'
        },
        {
            question: '我的点云数据是否安全？',
            answer: '绝对安全！我们的<strong>在线LIDAR查看器</strong>采用完全本地处理模式，您的<strong>点云数据</strong>不会上传到任何服务器。所有的文件解析、渲染和分析都在您的浏览器中完成，确保数据隐私和安全性。这对于处理敏感的测绘数据和商业项目尤为重要。'
        },
        {
            question: '可以导出处理后的点云图像吗？',
            answer: '是的！我们的<strong>点云可视化工具</strong>支持将当前视图导出为高质量的PNG图像。您可以保存不同角度和着色模式的点云截图，用于报告制作、演示文稿或进一步的<strong>点云数据分析</strong>工作。'
        }
    ],

    tutorialTitle: '使用教程',
    steps: [
        {
            title: '选择点云文件',
            description: '点击"选择文件"按钮或直接将<strong>LIDAR点云文件</strong>拖拽到上传区域。支持LAS、XYZ、PLY、PCD、TXT等格式的<strong>3D点云数据</strong>。',
            note: '建议文件大小不超过100MB以确保最佳性能'
        },
        {
            title: '等待文件解析',
            description: '系统会自动解析您的<strong>点云文件</strong>，显示解析进度和文件信息。解析完成后，点云数据会自动加载到3D查看器中。',
            note: '解析时间取决于文件大小和复杂度'
        },
        {
            title: '3D导航控制',
            description: '使用鼠标进行3D导航：<strong>左键拖拽</strong>旋转视角，<strong>右键拖拽</strong>平移视图，<strong>滚轮</strong>缩放。这些直观的控制方式让您能够从任意角度观察<strong>点云数据</strong>。',
            note: '支持触摸设备的手势操作'
        },
        {
            title: '调整显示设置',
            description: '在右侧控制面板中调整显示参数：选择着色模式（高程、强度、分类、RGB），调整点的大小和密度，启用或关闭动画效果。这些设置帮助您更好地分析<strong>LIDAR数据</strong>。',
            note: '不同着色模式适用于不同的分析需求'
        },
        {
            title: '查看统计信息',
            description: '在信息面板中查看详细的<strong>点云统计信息</strong>，包括点的总数、坐标范围、文件格式等。这些信息对于<strong>点云数据质量评估</strong>非常重要。',
            note: '统计信息会实时更新'
        },
        {
            title: '导出结果',
            description: '满意当前视图后，点击"导出图像"按钮将<strong>3D点云可视化</strong>结果保存为PNG格式图片，用于报告或进一步分析。',
            note: '导出的图像保持当前的视角和显示设置'
        }
    ],

    successTitle: '操作成功！',
    successContent: '恭喜！您已经成功掌握了LIDAR点云查看器的使用方法。现在可以高效地进行3D点云数据可视化和分析工作了。',

    relatedToolsTitle: '相关工具推荐',
    relatedTools: [
        {
            name: '坐标系统转换器',
            description: '使用ML5.在不同坐标系统之间转换地理坐标，包括WGS-84、GCJ-02、BD-09、Web墨卡托和UTM',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS轨迹回放',
            description: '可视化并回放来自各种文件格式（GPX、KML、GeoJSON、CSV）的GPS轨迹。',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: '高斯投影正反算',
            description: '高斯投影坐标与地理坐标（经纬度）之间的互相转换工具',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: 'ASPRS LAS格式规范',
            description: '美国摄影测量与遥感学会发布的LAS格式官方标准',
            url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
        },
        {
            name: 'WebGL官方文档',
            description: 'Web图形库的官方技术文档和最佳实践',
            url: 'https://www.khronos.org/webgl/'
        },
        {
            name: 'Point Cloud Library (PCL)',
            description: '开源点云处理库的官方文档和教程',
            url: 'https://pointclouds.org/'
        }
    ]
}