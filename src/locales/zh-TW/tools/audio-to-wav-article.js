export default {
  title: '音訊轉WAV轉換器使用指南',
  subtitle: '什麼是WAV格式？',
  description: 'WAV（Waveform Audio File Format）是由微軟開發的無損音訊格式，廣泛應用於專業音訊製作、錄音棚和廣播領域。作為最原始的數位音訊格式之一，WAV保留了完整的音訊資料，提供最高品質的音訊體驗。',
  
  whyConvert: {
    title: '為什麼要轉換為WAV？',
    reasons: [
      {
        title: '無損音質',
        description: 'WAV採用無損壓縮技術，保留原始音訊的所有細節，是發燒友和專業人士的首選。'
      },
      {
        title: '專業編輯',
        description: '專業音訊編輯軟體如Adobe Audition、Pro Tools等都優先支援WAV格式，便於後期處理。'
      },
      {
        title: '廣泛相容',
        description: '幾乎所有音訊播放器和作業系統都支援WAV格式，無需擔心相容性問題。'
      },
      {
        title: '錄音存檔',
        description: 'WAV是錄音檔案的理想格式，適合長期保存重要的音訊資料。'
      }
    ]
  },
  
  useCases: {
    title: '常見使用場景',
    cases: [
      '專業音樂製作和母帶處理',
      '錄音棚錄音檔案保存',
      '廣播電台音訊存檔',
      '音訊後期編輯和處理',
      '高品質音訊採樣',
      '遊戲音效製作',
      '影片音軌分離處理'
    ]
  },
  
  howToUse: {
    title: '如何使用音訊轉WAV轉換器',
    steps: [
      {
        step: '第一步',
        description: '選擇或拖放您要轉換的音訊檔案。'
      },
      {
        step: '第二步',
        description: '根據需要調整取樣率、位元深度和聲道設定。'
      },
      {
        step: '第三步',
        description: '點擊"開始轉換"按鈕，等待轉換完成。'
      },
      {
        step: '第四步',
        description: '下載轉換後的WAV檔案。'
      }
    ]
  },
  
  faqs: [
    {
      question: 'WAV和MP3有什麼區別？',
      answer: 'WAV是無損格式，保留完整音訊資料，檔案較大但音質最佳；MP3是有損壓縮格式，檔案較小但會損失部分音質。'
    },
    {
      question: '應該選擇什麼取樣率？',
      answer: '一般使用建議選擇44100Hz（CD品質）；專業錄音建議48000Hz或更高；語音錄製可選擇22050Hz。'
    },
    {
      question: 'WAV檔案為什麼這麼大？',
      answer: 'WAV是無損格式，保留了原始音訊的所有資料，沒有進行壓縮，因此檔案體積較大。'
    },
    {
      question: '可以將WAV轉換為其他格式嗎？',
      answer: '可以，我們的工具也支援將WAV轉換為MP3、M4A等其他格式。'
    }
  ],
  
  relatedTools: [
    {
      name: '音訊轉MP3',
      description: '將音訊轉換為相容性最好的MP3格式。',
      url: 'https://www.ufreetools.com/tools/audio-to-mp3'
    },
    {
      name: '音訊轉M4A',
      description: '將音訊轉換為適合蘋果裝置的M4A格式。',
      url: 'https://www.ufreetools.com/tools/audio-to-m4a'
    },
    {
      name: '圖片轉ASCII藝術',
      description: '將圖片轉換為ASCII字元畫，創造獨特的文字藝術效果。',
      url: 'https://www.ufreetools.com/tools/image-to-ascii'
    }
  ],
  
  references: [
    {
      title: 'WAV格式維基百科',
      url: 'https://zh.wikipedia.org/wiki/WAV'
    },
    {
      title: '數位音訊基礎知識',
      url: 'https://www.ufreetools.com/blog/digital-audio-basics'
    }
  ]
}
