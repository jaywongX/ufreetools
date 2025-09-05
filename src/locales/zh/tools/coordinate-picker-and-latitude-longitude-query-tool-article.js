export default {
  title: '坐标拾取与经纬度查询工具：在线经纬度查询与EPSG投影坐标转换教程',
  functionTitle: '什么是坐标拾取与经纬度查询工具？有哪些核心功能',
  intro: '我们的<strong>坐标拾取与经纬度查询工具</strong>集成了地图点击取点、<strong>经纬度查询</strong>、<strong>EPSG投影坐标转换</strong>与地名搜索定位等能力，旨在快速、准确地完成坐标选取与坐标格式导出。通过此在线工具，您可以在浏览器中完成从地名到坐标、从WGS84到多种EPSG投影坐标的转换，显著提升测绘标注、选址分析与出图制表效率。',
  useCasesTitle: '典型应用场景：坐标拾取与经纬度查询工具如何解决问题',
  useCases: [
    '新媒体选址与打卡点制作：快速拾取经纬度并导出用于地图可视化',
    'GIS 制图与外业采集：点击取点后以 CSV/GeoJSON 导出，便于ArcGIS/QGIS导入',
    '政务与地产选址：地名搜索→坐标，一键采集候选地块位置',
    '物流与运维定位：记录多个设备/工单坐标并集中导出',
    '教育教学与科研：演示WGS84与EPSG投影坐标差异及转换',
    '旅游与户外导航：保存景点、营地的经纬度与投影坐标',
    '开发与测试：前端/后端联调需要的精确经纬度样本',
    '多地区内容标注：统一格式坐标文件，利于跨区域数据整合'
  ],
  tipTitle: '专业提示：',
  tipContent: '导出为CSV时，建议包含字段：name, lat, lon, epsg, x, y, time，便于后续在QGIS/Excel中批处理与追溯。',
  conclusion: '这款<strong>坐标拾取与经纬度查询工具</strong>面向测绘、可视化、开发与运维等多种场景，支持<strong>EPSG投影坐标转换</strong>、地名搜索与批量导出。通过在线方式完成经纬度查询与坐标转换，可显著降低软件安装成本并提升协作效率。',
  faqTitle: '常见问题解答（FAQ）',
  faqs: [
    {
      question: '坐标拾取与经纬度查询工具支持哪些EPSG投影坐标转换？',
      answer: '工具内置 WGS84（EPSG:4326）、Web墨卡托（EPSG:3857）与 CGCS2000（EPSG:4490）转换，并支持输入自定义 PROJ4 定义。点击地图后会同步显示经纬度与所选 EPSG 投影坐标。'
    },
    {
      question: '如何将地名快速转换为经纬度坐标并标注到地图？',
      answer: '在搜索框输入地名后，使用地名搜索→坐标功能检索 Nominatim 结果，选择候选项即可定位并添加为标注，随后导出 CSV 或 GeoJSON。'
    },
    {
      question: '经纬度查询结果如何复制或批量导出坐标文件？',
      answer: '右侧结果区域支持一键复制全部坐标文本，并可选择 CSV 或 GeoJSON 格式导出文件，适配大多数 GIS/可视化平台。'
    },
    {
      question: '坐标拾取工具是否支持移动端与平板设备？',
      answer: '是的，界面采用响应式网格布局，<strong>经纬度查询</strong>、标注与导出操作在手机和平板上同样流畅。'
    },
    {
      question: '使用EPSG投影坐标转换时需要注意什么？',
      answer: '不同EPSG基准与投影有差异。若目标坐标系未内置，请提供正确的 PROJ4 定义，转换前核对单位（经纬度为度，投影常为米）。'
    }
  ],
  tutorialTitle: '如何使用坐标拾取与经纬度查询工具：详细操作步骤',
  steps: [
    {
      title: '打开工具并加载地图',
      description: '进入工具页面后地图自动加载。若网络受限，请检查外网访问或更换网络环境，以确保底图与地名搜索可用。',
      note: '地图默认坐标系为WGS84，经纬度单位为度。'
    },
    {
      title: '搜索地名并定位',
      description: '在搜索框输入地名（支持多语言），点击“搜索”，从候选项中选择目标位置并定位到地图中心。',
      note: '候选项来自 OpenStreetMap Nominatim。'
    },
    {
      title: '点击地图拾取经纬度',
      description: '在地图上点击任意位置，即可自动记录经纬度与所选EPSG投影坐标，并在右侧显示到坐标结果列表。',
      note: '支持多次点击以标注多个点。'
    },
    {
      title: '切换或自定义EPSG投影',
      description: '在左侧选择常用坐标系（4326/3857/4490），或填写自定义PROJ4定义，工具会对后续取点即时转换投影坐标。',
      note: '切换坐标系不会改变既有点的经纬度，只影响投影坐标字段。'
    },
    {
      title: '复制或导出坐标',
      description: '选择导出格式（CSV或GeoJSON），点击“复制全部”或“导出文件”，即可将坐标用于GIS/可视化/开发等环节。',
      note: 'CSV适合Excel/QGIS批处理，GeoJSON便于Web地图与API使用。'
    },
    {
      title: '清理或继续标注',
      description: '如需重新开始，可点击“清除标注”。随后继续搜索或取点，逐步完善坐标清单。',
      note: '记得按需切换EPSG坐标系以满足不同项目要求。'
    }
  ],
  successTitle: '恭喜！',
  successContent: '你已学会使用坐标拾取与经纬度查询工具完成坐标采集与EPSG投影坐标转换，接下来即可高效输出用于GIS与可视化的标准数据文件。',
  relatedToolsTitle: '你可能感兴趣的相关工具',
  relatedTools: [
    {
      name: '坐标系统转换器',
      description: '在不同坐标系统之间转换地理坐标，包括WGS-84、GCJ-02、BD-09、Web墨卡托和UTM',
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
    },
    {
      name: 'LIDAR点云查看器',
      description: '免费在线LIDAR点云查看器，支持LAS、XYZ、PLY、PCD格式。提供三维可视化、多种着色模式、交互式导航和数据分析功能',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: '参考资源',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: '地名搜索与地理编码服务',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: '检索EPSG坐标参考系与PROJ4定义',
      url: 'https://epsg.io/'
    },
    {
      name: 'Leaflet 文档',
      description: '轻量级Web地图库',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Proj4 文档',
      description: '坐标转换库说明',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}