export default {
    title: '七参数转换器：Bursa-Wolf地理坐标批量转换教程',
    functionTitle: '七参数转换器如何解决多坐标系对接难题？',
    intro: '<p>七参数转换器围绕Bursa-Wolf模型提供<strong>WGS84、CGCS2000、北京54、西安80</strong>之间的XYZ与BLH批量转换，专注解决测绘、工程、GIS平台在多源坐标融合时出现的偏移与精度无法追溯问题。工具内置开放算法、误差平差与过程日志，确保每次转换都可追踪、可复现、可评估。</p><p>借助自动平差与模板化参数管理，团队可快速在项目间复用高可信度的七参数集合，并通过日志验证每一步旋转与尺度改正，便于在公开招投标、验收阶段提交完整的技术说明。</p>',
    useCasesTitle: '实际应用场景',
    useCases: {
        first: '<strong>住建与市政测绘</strong>：对接CGCS2000成果与地方独立坐标系，保障地下管网、BIM模型与竣工图无缝拼接。',
        second: '<strong>能源与交通工程</strong>：跨省份施工需要互通北京54、西安80和WGS84坐标，七参数转换器提供全过程误差评估。',
        third: '<strong>遥感与无人机</strong>：航摄成果往往以WGS84输出，导入地方高斯-克吕格投影前需要高精度七参数转换。',
        fourth: '<strong>自然资源确权</strong>：历史界桩坐标常使用旧大地基准，工具可将其可靠映射至CGCS2000便于登记与审查。'
    },
    tipTitle: '产品示意图',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: '该示意图可被搜索引擎抓取，用于在搜索结果中展示七参数转换器的富媒体摘要。',
    conclusion: '<p>从单点检核到上万条批量处理，七参数转换器都能输出包含坐标残差、RMSE、置信区间的报告。依托100%前端实现，敏感点坐标不会离开浏览器，满足涉密项目对数据落地的合规要求。</p>',
    faqTitle: '常见问题解答',
    faqs: {
        q1: {
            question: '七参数转换器如何保证Bursa-Wolf七参数计算精度？',
            answer: '<p>工具采用最小二乘公共点法解算七参数，并输出残差向量、Sigma0、95%置信区间。您可通过日志对矩阵运算过程进行复核，确保Bursa-Wolf七参数精度满足项目规范。</p>'
        },
        q2: {
            question: '批量CSV导入时如何设置自定义分隔符？',
            answer: '<p>在“坐标数据输入”区域调整分隔符字段即可，七参数转换器会按照新分隔符解析XYZ/BLH/ENH数据，同时保留点名或备注列，便于后续匹配。</p>'
        },
        q3: {
            question: '能否通过七参数转换器同时处理高斯-克吕格和UTM投影？',
            answer: '<p>可以，您只需在“投影/高程参数”中选择对应模式并填写中央经度、带宽、尺度因子即可。转换流程会先进行三维正算，再反算到目标投影坐标。</p>'
        },
        q4: {
            question: '公共点不足时如何获取七参数？',
            answer: '<p>若手头公共点少于三个，可在“参数模板”中调用平台内置的示例参数，或输入历史项目的参考值，再通过现场采集的新点迭代更新。</p>'
        },
        q5: {
            question: '七参数转换器是否支持地方独立坐标系？',
            answer: '<p>支持。您可以在“自定义椭球参数”中输入长半轴与扁率倒数，并结合自定义投影参数，实现对地方独立坐标系的真实还原与互转。</p>'
        }
    },
    tutorialTitle: '七参数转换器操作指南',
    steps: {
        step1: {
            title: '选择坐标系与投影模式',
            description: '首先选择源与目标坐标系统，并在投影参数区填写中央经线、带宽等信息，确保与实测数据一致。'
        },
        step2: {
            title: '录入或导入坐标点',
            description: '可手动输入单点XYZ/BLH/ENH，也可拖拽CSV/TXT批量导入，必要时调整分隔符保持解析正确。'
        },
        step3: {
            title: '配置七参数',
            description: '若已知参数，直接填写ΔX、ΔY、ΔZ、Rx、Ry、Rz与尺度；若未知，可在“公共点解算”中粘贴点对并运行平差。'
        },
        step4: {
            title: '执行转换并查看日志',
            description: '点击“执行转换”后，实时日志会展示解析、正反算、旋转、尺度改正等过程，便于追踪问题。'
        },
        step5: {
            title: '评估精度',
            description: '结果面板展示RMSE、最大残差与95%置信区间，若指标超限，可回到参数区调整或重新平差。'
        },
        step6: {
            title: '导出成果与报告',
            description: '确认无误后，将结果CSV与日志一起导出，用于资料归档或提交审查。'
        }
    },
    successTitle: '完成部署',
    successContent: '恭喜！您已掌握七参数转换器的全部流程，现在可以在多源坐标融合项目中快速完成批量转换并输出专业级别的精度报告。',
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
    referencesTitle: '外部参考',
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

