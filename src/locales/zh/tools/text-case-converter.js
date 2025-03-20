export default {
    "name": "文本大小写转换器",
    "description": "在不同大小写格式之间转换文本",
    "options": {
      "transformMode": "转换为",
      "preserveNumbers": "保留数字",
      "preserveFormatting": "保留格式字符",
      "removeDiacritics": "移除变音符号（重音）",
      "splitOn": "拆分文本于"
    },
    "modes": {
      "lowercase": "小写",
      "UPPERCASE": "大写",
      "TitleCase": "标题大小写",
      "SentenceCase": "句子大小写",
      "camelCase": "驼峰式",
      "PascalCase": "帕斯卡式",
      "snake_case": "蛇形式",
      "CONSTANT_CASE": "常量式",
      "kebab-case": "短横线式",
      "dot.case": "点式",
      "path/case": "路径式",
      "CapitalizedWords": "首字母大写",
      "aLtErNaTiNgCaSe": "交替大小写",
      "InVeRsECaSe": "反转大小写"
    },
    "splitOptions": {
      "auto": "自动",
      "space": "空格",
      "dash": "短横线 (-)",
      "underscore": "下划线 (_)",
      "dot": "点 (.)",
      "forward_slash": "正斜杠 (/)",
      "newline": "换行"
    },
    "actions": {
      "convert": "转换",
      "copy": "复制",
      "clear": "清除",
      "upload": "上传文件",
      "download": "下载"
    },
    "messages": {
      "copied": "已复制到剪贴板！",
      "uploadSuccess": "已从文件加载文本",
      "downloadReady": "文本已准备好下载",
      "enterText": "请输入要转换的文本",
      "tooLarge": "文本太大。最大大小为1MB"
    }
  };