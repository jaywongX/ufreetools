export default {
  name: "漸變配色生成器",
  description: "創建並自定義漂亮的CSS漸變，實時預覽效果，複製代碼到您的項目中",

  gradientTypes: {
    title: "漸變類型",
    linear: "線性漸變",
    radial: "徑向漸變",
    conic: "錐形漸變"
  },

  controls: {
    title: "顏色控制",
    addColor: "添加顏色",
    color: "顏色",
    position: "位置 (%)",
    delete: "刪除顏色",
    angle: "角度",
    degrees: "度",
    shape: "形狀",
    circle: "圓形",
    ellipse: "橢圓形",
    positionX: "位置 X (%)",
    positionY: "位置 Y (%)",
    size: "尺寸",
    closestSide: "最近邊",
    closestCorner: "最近角",
    farthestSide: "最遠邊",
    farthestCorner: "最遠角",
    fromAngle: "起始角度"
  },

  output: {
    title: "CSS代碼",
    copyCode: "複製代碼",
    preview: "預覽區域",
    copied: "CSS代碼已複製到剪貼簿！",
    download: "下載PNG"
  },

  presets: {
    title: "漸變預設",
    apply: "應用預設",
    sunnyMorning: "晴朗早晨",
    winterNeva: "冬日涅瓦",
    rareWind: "稀有風",
    deepBlue: "深藍",
    perfect: "完美白",
    cloudyKnoxville: "多雲諾克斯維爾",
    greenBeach: "綠色海灘",
    plumBath: "梅花浴",
    everlasting: "永恆天空"
  },

  accessibility: {
    colorPicker: "顏色選擇器",
    deleteSwatch: "刪除顏色停止點",
    dragToReposition: "拖動以重新定位顏色停止點"
  },

  actions: {
    reset: "重置",
    generateCSS: "生成CSS",
    clickToCopy: "點擊並拷貝代碼",
    completeEdit: "完成編輯"
  },

  messages: {
    copied: "CSS代碼已複製到剪貼簿！",
    noColors: "添加至少兩種顏色以創建漸變",
    maxColors: "已達到最大顏色停止點數量(10)",
    useKeyboard: "使用Delete鍵刪除選中的顏色停止點",
    invalidHex: "請輸入有效的十六進制顏色代碼",
    downloadError: "下載PNG失敗，請稍後重試",
    preview: "預覽"
  },

  anglePresets: {
    top: "上",
    topRight: "右上",
    right: "右",
    bottomRight: "右下",
    bottom: "下",
    bottomLeft: "左下",
    left: "左",
    topLeft: "左上"
  },

  radialShapes: {
    circle: "圓形",
    ellipse: "橢圓"
  },

  radialSizes: {
    farthestCorner: "最遠角",
    closestCorner: "最近角",
    farthestSide: "最遠邊",
    closestSide: "最近邊"
  }
};