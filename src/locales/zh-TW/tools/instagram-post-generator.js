export default {
    name: 'Instagram 貼文生成器',
    description: '創建逼真的 Instagram 貼文模擬，支援自訂內容、背景和互動數據',
    
    // 設計選項
    designOptions: '設計選項',
    
    // 用戶資料
    userProfile: {
      title: '用戶資料設定',
      username: '用戶名',
      location: '位置',
      postedTime: '發布日期與時間',
      postDate: '詳細日期',
      avatar: '頭像',
      uploadAvatar: '上傳頭像',
      removeAvatar: '移除',
      verifiedAccount: '帳號狀態',
      isVerified: '已驗證帳號'
    },
    
    // 內容類型
    contentType: '內容類型',
    contentTypes: {
      text: '僅文字',
      image: '僅圖片',
      mixed: '文字和圖片'
    },
    
    // 文字內容
    textContent: '文字內容',
    postText: '貼文文本',
    addHashtag: '添加話題標籤',
    mentionUser: '提及用戶',
    insertEmoji: '表情符號',
    commonEmojis: '常用表情符號',
    recommendedHashtags: '推薦話題標籤',
    
    // 文字格式
    fontFamily: '字體',
    fontSize: '字體大小',
    textAlign: '文本對齊',
    textColor: '文字顏色',
    
    // 背景圖片
    backgroundImage: '背景圖片',
    uploadImage: '上傳圖片',
    dragAndDrop: '或拖放檔案',
    imageFormats: 'PNG、JPG、GIF 格式，最大 2MB',
    
    // 背景
    background: '背景',
    backgroundColor: '背景顏色',
    backgroundType: '背景類型',
    backgroundTypes: {
      solid: '純色',
      gradient: '漸變',
      pattern: '圖案'
    },
    
    // 漸變選項
    gradientStartColor: '起始顏色',
    gradientEndColor: '結束顏色',
    gradientDirection: '方向',
    gradientDirections: {
      horizontal: '水平',
      vertical: '垂直',
      diagonal: '對角線',
      diagonalReverse: '反向對角線'
    },
    
    // 圖案選項
    patternType: '圖案類型',
    
    // 貼文格式
    postFormat: '貼文格式',
    formats: {
      square: '正方形',
      portrait: '豎屏',
      landscape: '橫屏'
    },
    
    // 互動
    engagement: {
      title: '互動模擬',
      likeCount: '點讚數',
      commentCount: '評論數',
      viewCount: '觀看數',
      isLiked: '被瀏覽者點讚',
      isSaved: '被瀏覽者收藏',
      hasStory: '有Instagram故事',
      showComments: '顯示評論',
      isTagged: '有人被標記',
      isSponsored: '贊助內容'
    },
    
    // 評論
    comments: {
      title: '模擬評論',
      addComment: '添加評論',
      delete: '刪除',
      addForRealism: '添加模擬評論以增加真實性',
      username: '用戶名',
      text: '評論內容'
    },
    
    // 提示
    prompts: {
      enterHashtag: '輸入話題標籤(不含#)',
      enterUsername: '輸入要提及的用戶名',
      enterComment: '輸入評論內容',
      defaultComment: '看起來很棒！',
      enterCommentUsername: '輸入評論用戶名',
      justNow: '剛剛'
    },
    
    // 操作按鈕
    resetDesign: '重置設計',
    
    // 預覽和導出
    preview: '預覽',
    export: '導出',
    downloadAsPNG: '下載為PNG',
    downloadAsJPG: '下載為JPG',
    copyToClipboard: '複製到剪貼簿',
    copied: '已複製！',
    generating: '正在生成圖片...',
    
    article: {
      title: 'Instagram 貼文生成器：完整指南',
      introduction: '使用我們的綜合工具，為行銷、設計規劃或教育目的創建逼真的 Instagram 貼文模擬。',
      
      whatIs: {
        title: '什麼是 Instagram 貼文生成器？',
        paragraph1: 'Instagram 貼文生成器是一種專業設計工具，允許用戶創建逼真的 Instagram 貼文模擬，而無需在平台上實際發布。我們的 Instagram 貼文生成器為各種個人和專業目的提供了全面的解決方案，從社交媒體規劃到行銷和教育，創建真實外觀的 Instagram 內容。',
        paragraph2: '隨著 Instagram 作為行銷渠道的重要性不斷提高，在發布前設計、預覽和完善 Instagram 貼文的能力對於企業、網紅和社交媒體經理來說變得至關重要。我們的 Instagram 貼文生成器通過提供用戶友好的界面來模擬貼文在平台上的確切外觀，滿足了這一需求。'
      },
      
      whyUse: {
        title: '為什麼您需要 Instagram 貼文生成器工具',
        paragraph1: '在當今的數位環境中，Instagram 已從簡單的照片分享應用發展為最強大的行銷平台之一。擁有超過十億活躍用戶，Instagram 為品牌建設、產品推廣和受眾互動提供了無與倫比的機會。然而，創建有效的 Instagram 貼文需要仔細的規劃和設計，才能在擁擠的信息流中脫穎而出。',
        paragraph2: '我們的 Instagram 貼文生成器是為了應對社交媒體創作者面臨的幾個關鍵挑戰而開發的：',
        reasons: {
          contentPlanning: {
            title: '內容規劃',
            description: '社交媒體經理需要在發布前可視化貼文的外觀。Instagram 貼文生成器允許創建模擬圖，無需實際發布即可提交給客戶或團隊成員批准。'
          },
          educational: {
            title: '教育目的',
            description: '對於教授社交媒體行銷的人來說，擁有一個模擬 Instagram 貼文的工具可以提供寶貴的實踐學習經驗，而無需實際帳戶訪問。'
          },
          marketing: {
            title: '行銷材料',
            description: '企業通常需要 Instagram 貼文視覺效果用於演示、網站或促銷材料。我們的生成器創建適合這些目的的專業外觀模擬。'
          },
          experimentation: {
            title: '設計實驗',
            description: 'Instagram 貼文生成器允許創作者嘗試不同的設計元素、說明文字和互動指標，而無需承受實時發布的壓力。'
          },
          consistency: {
            title: '一致性規劃',
            description: '對於關心維持統一美學的品牌和網紅，該工具使可視化新貼文如何融入現有內容策略成為可能。'
          }
        }
      },
      
      keyFeatures: {
        title: '我們的 Instagram 貼文生成器的主要特點',
        intro: '我們的 Instagram 貼文生成器因其全面的功能和對細節的關注而從其他類似工具中脫穎而出。以下是使我們的工具成為 Instagram 內容創作者首選的原因：',
        
        profile: {
          title: '1. 完整的用戶個人資料自訂',
          description: '個性化模擬 Instagram 帳戶的各個方面：',
          items: {
            username: {
              title: '用戶名和個人資料圖片',
              description: '上傳自訂頭像並設置個性化用戶名'
            },
            verification: {
              title: '驗證徽章',
              description: '添加備受追捧的藍色驗證標記以模擬已驗證帳戶'
            },
            location: {
              title: '位置標籤',
              description: '包含地理信息以增加真實性'
            },
            timing: {
              title: '發布時間',
              description: '設置自訂發布日期和時間，自動計算相對時間顯示（例如，"2小時前"或"3天"）'
            }
          }
        },
        
        content: {
          title: '2. 靈活的內容創建選項',
          description: '我們的 Instagram 貼文生成器支援多種內容類型，以適應不同的創意需求：',
          items: {
            textOnly: {
              title: '純文字貼文',
              description: '創建專注於書面內容的貼文，背景可自訂'
            },
            imageOnly: {
              title: '純圖片貼文',
              description: '上傳自己的圖片作為視覺內容'
            },
            mixed: {
              title: '混合內容',
              description: '結合文本覆蓋和背景圖片以獲得最大影響'
            },
            richText: {
              title: '富文本編輯',
              description: '使用一鍵工具添加標籤、提及和表情符號'
            },
            hashtags: {
              title: '推薦標籤',
              description: '獲取流行和相關標籤的建議'
            }
          }
        },
        
        design: {
          title: '3. 高級設計自訂',
          description: '完全掌控 Instagram 貼文的視覺呈現：',
          items: {
            typography: {
              title: '排版控制',
              description: '從多種字體系列、大小、顏色和對齊選項中選擇'
            },
            background: {
              title: '背景選項',
              description: '從純色、漸變或圖案中選擇'
            },
            gradient: {
              title: '漸變自訂',
              description: '創建具有可調節開始/結束顏色和方向的自訂漸變背景'
            },
            pattern: {
              title: '圖案選擇',
              description: '選擇各種圖案樣式以獲得獨特的背景效果'
            },
            format: {
              title: '格式選項',
              description: '在方形、縱向和橫向格式之間切換，以匹配 Instagram 的縱橫比'
            }
          }
        },
        
        engagement: {
          title: '4. 真實的互動模擬',
          description: '複製真實的 Instagram 互動以創建令人信服的模擬：',
          items: {
            likes: {
              title: '喜歡計數器',
              description: '使用數字或 K/M 格式顯示調整喜歡的數量'
            },
            comments: {
              title: '評論系統',
              description: '添加來自其他用戶的模擬評論'
            },
            views: {
              title: '觀看計數器',
              description: '為視頻貼文模擬設置自訂觀看次數'
            },
            interactions: {
              title: '查看者互動',
              description: '切換"被查看者喜歡"和"被查看者保存"狀態的選項'
            },
            story: {
              title: '故事指示器',
              description: '添加表示活躍故事的彩色環'
            },
            tags: {
              title: '標記內容',
              description: '包含人物標記以增加真實感'
            },
            sponsored: {
              title: '贊助內容',
              description: '為贊助貼文模擬添加"付費合作"標籤'
            }
          }
        },
        
        export: {
          title: '5. 導出和分享選項',
          description: '一旦您的 Instagram 貼文設計完成，我們的工具提供了便捷的導出選項：',
          items: {
            png: {
              title: '下載為 PNG',
              description: '導出高質量透明 PNG 圖像'
            },
            jpg: {
              title: '下載為 JPG',
              description: '創建壓縮 JPG 文件以便更快分享'
            },
            clipboard: {
              title: '複製到剪貼簿',
              description: '直接複製圖像以便立即粘貼到其他應用程序'
            }
          }
        }
      },
      
      howTo: {
        title: '如何使用 Instagram 貼文生成器：分步指南',
        description: '我們的 Instagram 貼文生成器設計直觀且用戶友好。按照這些全面的步驟創建您完美的 Instagram 貼文模擬：',
        
        profileSetup: {
          title: '步驟 1：配置用戶個人資料設定',
          description: '首先個性化將在您的 Instagram 貼文中顯示的帳戶詳細信息：',
          step1: '在左側面板頂部的"用戶名"字段中輸入您想要的用戶名',
          step2: '添加位置信息（例如"紐約，美國"）以增加真實性',
          step3: '使用日期時間選擇器設置貼文發布日期和時間 - 這會影響相對時間（例如"2小時前"）的顯示方式',
          step4: '如果您想在個人資料中添加藍色驗證徽章，請勾選"已驗證帳號"選項',
          step5: '點擊"上傳頭像"按鈕上傳自訂個人頭像，或使用默認個人資料圖標'
        },
        
        contentSelection: {
          title: '步驟 2：選擇內容類型並添加內容',
          description: '選擇您喜歡的內容格式並添加您的創意元素：',
          step1: '從三種內容類型中選擇："僅文字"、"僅圖片"或"文字和圖片"',
          step2: '對於文字內容：在文本編輯器中編寫您的說明文字。使用話題標籤、提及用戶和表情按鈕增強您的文本',
          step3: '對於圖片內容：點擊"上傳圖片"按鈕或將圖片文件拖放到上傳區域',
          step4: '點擊出現的任何推薦話題標籤，快速將它們添加到您的貼文中',
          step5: '注意字符計數，確保您的文本不會太長'
        },
        
        stylingContent: {
          title: '步驟 3：設計您的內容樣式',
          description: '自訂 Instagram 貼文的視覺外觀：',
          step1: '從下拉菜單中選擇字體（如 Inter、Roboto、Poppins）',
          step2: '根據內容長度選擇適當的字體大小',
          step3: '使用對齊按鈕設置文本對齊方式（左對齊、居中或右對齊）',
          step4: '使用顏色選擇器選擇與背景形成良好對比的文本顏色',
          step5: '對於沒有圖片或帶有文本覆蓋的貼文，自訂背景：',
          step6: '- 選擇背景類型（純色、漸變或圖案）',
          step7: '- 對於漸變，選擇起始和結束顏色以及方向',
          step8: '- 對於圖案，從可用選項中選擇圖案樣式'
        },
        
        postFormat: {
          title: '步驟 4：選擇貼文格式',
          description: '選擇最適合您內容的寬高比：',
          step1: '正方形(1:1) - 經典的Instagram格式，適合平衡的構圖',
          step2: '豎屏(4:5) - 更高的格式，在信息流中佔用更多空間，適合垂直內容',
          step3: '橫屏(16:9) - 更寬的格式，完美適合全景圖像或水平內容'
        },
        
        engagementSettings: {
          title: '步驟 5：配置互動設定',
          description: '為您的 Instagram 貼文模擬添加真實的互動元素：',
          step1: '使用滑塊或直接輸入設置互動指標：',
          step2: '- 點讚數：調整點讚數量（顯示為數值或K/M格式）',
          step3: '- 評論數：設置貼文收到的評論數量',
          step4: '- 觀看數：對於視頻樣式的貼文，設置自訂觀看次數',
          step5: '切換互動選項以增強真實感：',
          step6: '- 被瀏覽者點讚：將心形圖標顯示為紅色',
          step7: '- 被瀏覽者收藏：將書籤圖標顯示為填充狀態',
          step8: '- 有Instagram故事：在個人資料圖片周圍添加彩色環',
          step9: '- 顯示評論：啟用評論區域',
          step10: '- 有人被標記：在圖像上添加人物圖標覆蓋',
          step11: '- 贊助內容：為贊助貼文模擬添加"付費合作"標籤'
        },
        
        commentSimulation: {
          title: '步驟 6：添加模擬評論',
          description: '如果您已啟用評論，添加真實的用戶評論：',
          step1: '為最多兩條特色評論輸入用戶名和評論文本',
          step2: '在評論中使用表情符號以增加真實性',
          step3: '考慮添加與您的貼文內容相關的評論',
          step4: '包含可能鼓勵互動或對話的評論'
        },
        
        previewExport: {
          title: '步驟 7：預覽並導出您的設計',
          description: '完成您的 Instagram 貼文模擬並保存：',
          step1: '在預覽區域查看您的設計，確保所有元素看起來符合預期',
          step2: '對文本、背景或互動指標進行任何最終調整',
          step3: '選擇您喜歡的導出格式：',
          step4: '- 下載為PNG：最適合高質量透明圖像',
          step5: '- 下載為JPG：創建更小的文件大小，適合分享',
          step6: '- 複製到剪貼簿：立即複製圖像以粘貼到其他地方',
          step7: '等待圖像生成完成（這通常只需幾秒鐘）',
          step8: '在演示文稿、提案或規劃文檔中使用您導出的模擬圖'
        }
      },
      
      tips: {
        title: '創建有效 Instagram 貼文的專業提示',
        description: '利用這些專家建議最大化您的 Instagram 貼文的影響力：',
        
        contentStrategy: {
          title: '內容策略',
          tip1: '使用流行和小眾話題標籤的組合（7-15個最佳，有助於被發現）',
          tip2: '在您的標題中包含明確的號召性用語，以促進互動',
          tip3: '保持標題簡潔以獲得即時影響，或使用換行符來講述更長的故事',
          tip4: '在標題開頭放置重要信息，因為Instagram會在125個字符後截斷顯示',
          tip5: '戰略性地使用表情符號，增加個性並分隔文本'
        },
        
        visualDesign: {
          title: '視覺設計',
          tip1: '保持貼文之間的視覺一致性，以創建統一的信息流美學',
          tip2: '在圖像上覆蓋文本時使用高對比度的文本顏色',
          tip3: '測試不同的格式（正方形、豎屏、橫屏），看看哪種效果最好',
          tip4: '設計內容時考慮您的貼文在網格中的顯示效果',
          tip5: '使用色彩心理學喚起與您的信息相關的特定情感'
        },
        
        engagementOptimization: {
          title: '互動優化',
          tip1: '模擬與您實際受眾規模相匹配的真實互動數字',
          tip2: '包含可能引發真實討論或問題的評論',
          tip3: '使用與您的內容相關的位置標籤，以增加被發現的機會',
          tip4: '保持貼文設計與您的品牌標識一致，以便識別',
          tip5: '預覽您的貼文在移動設備上的顯示效果，因為大多數Instagram瀏覽都在移動設備上進行'
        }
      },
      
      faq: {
        title: '關於 Instagram 貼文生成器的常見問題',
        
        question1: '這是官方 Instagram 工具嗎？',
        answer1: '不，我們的 Instagram 貼文生成器是一個獨立工具，旨在創建逼真的 Instagram 貼文模擬。它不隸屬於 Instagram 或 Meta Platforms, Inc.，也未獲其背書。',
        
        question2: '我可以直接從此工具發布到 Instagram 嗎？',
        answer2: '不，Instagram 貼文生成器僅用於創建模擬。要在 Instagram 上發布內容，您需要使用官方 Instagram 應用或授權的第三方調度工具。',
        
        question3: '用此工具創建的模擬是否與 Instagram 界面完全一致？',
        answer3: '雖然我們的 Instagram 貼文生成器旨在創建高度逼真的模擬，但 Instagram 會定期更新其界面。我們努力保持準確性，但偶爾可能與當前 Instagram 設計略有不同。',
        
        question4: '我可以將這些模擬用於商業目的嗎？',
        answer4: '是的，您可以使用我們的 Instagram 貼文生成器創建的圖像用於商業目的，如行銷材料、演示或客戶提案。但請注意，Instagram 徽標和設計元素是 Meta Platforms, Inc. 的商標，其使用受其品牌指南的約束。',
        
        question5: '創建貼文數量有限制嗎？',
        answer5: '不，使用我們的工具創建的 Instagram 貼文模擬數量沒有限制。您可以為您的項目創建任意數量的設計。',
        
        question6: '使用 Instagram 貼文生成器需要創建帳戶嗎？',
        answer6: '不，我們的 Instagram 貼文生成器可免費使用，無需註冊或創建帳戶。您可以立即開始設計，無需註冊。',
        
        question7: '互動指標有多準確？',
        answer7: '互動指標（點讚、評論、觀看）是完全可自訂和模擬的。它們不反映真實數據，也不預測 Instagram 上的實際表現，但它們有助於創建逼真的模擬。',
        
        question8: '我可以保存設計以便稍後編輯嗎？',
        answer8: '目前，Instagram 貼文生成器沒有草稿設計的保存功能。我們建議您導出設計並保存圖像，以便日後需要時參考。',
        
        question9: '支援哪些圖片格式上傳？',
        answer9: '該工具支援常見的圖片格式，包括JPG、PNG和GIF文件，大小不超過2MB。為了獲得最佳效果，請使用適合所選寬高比的高質量圖像。',
        
        question10: '如何創建最逼真的Instagram貼文？',
        answer10: '為了達到最大的真實感，使用實際的個人資料圖片，設置適合您的受眾規模的真實互動數字，添加位置標籤，包含混合的話題標籤，並添加幾條真實的評論。',
        
        question11: '我可以用這個工具創建Instagram Stories或Reels嗎？',
        answer11: '目前，此工具專注於創建靜態的Instagram貼文模擬。我們可能會根據用戶反饋在未來的更新中添加Instagram Stories和Reels模擬功能。',
        
        question12: '我上傳的內容或創建的設計會存儲在您的伺服器上嗎？',
        answer12: '不會，所有圖像處理都在您的瀏覽器中進行。我們不會在伺服器上存儲您上傳的圖像或創建的設計，確保您的內容保持私密性。'
      },
      
      relatedTools: {
        title: '相關工具和資源',
        description: '使用這些互補工具增強您的社交媒體策略：',
        
        tool1: {
          name: '社交媒體圖像生成器',
          description: '為各種社交媒體平台（包括Twitter、Facebook和LinkedIn）創建優化圖像',
          url: '/tools/social-media-image-generator'
        },
        tool2: {
          name: '話題標籤生成器',
          description: '發現熱門和小眾話題標籤，最大化您的Instagram貼文的覆蓋範圍和互動',
          url: '/tools/hashtag-generator'
        },
        tool3: {
          name: '調色板生成器',
          description: '創建和諧的配色方案，打造一致且視覺吸引力強的Instagram信息流',
          url: '/tools/color-palette-generator'
        },
        tool4: {
          name: '字體搭配工具',
          description: '找到互補的字體組合，增強您的Instagram貼文的排版效果',
          url: '/tools/font-pairing'
        },
        tool5: {
          name: '說明文字生成器',
          description: '獲取引人入勝的Instagram標題靈感，促進互動和評論',
          url: '/tools/caption-generator'
        },
        
        article1: {
          title: '2023年Instagram行銷指南',
          description: '全面的策略，增加您的Instagram關注者和互動',
          url: '/blog/instagram-marketing-guide-2023'
        },
        article2: {
          title: '社交媒體視覺內容趨勢',
          description: '掌握Instagram和其他平台的最新視覺設計趨勢',
          url: '/blog/visual-content-trends'
        },
        article3: {
          title: '如何創建統一的Instagram美學',
          description: '設計視覺一致且吸引人的Instagram信息流的技巧和方法',
          url: '/blog/cohesive-instagram-aesthetic'
        }
      },
      
      conclusion: {
        title: '結論：用專業模擬提升您的 Instagram 策略',
        paragraph1: 'Instagram 貼文生成器是任何尋求增強社交媒體內容策略的人的強大工具。通過實現專業、逼真的 Instagram 貼文模擬創建，我們的工具彌合了概念和執行之間的差距，允許在實際發布前進行全面規劃和改進。',
        paragraph2: '無論您是尋求客戶批准的社交媒體經理、計劃行銷活動的企業、設計理想信息流美學的網紅，還是教授社交媒體最佳實踐的教育者，我們的 Instagram 貼文生成器提供了實現目標所需的多功能性和詳細自訂選項。',
        paragraph3: '在不斷發展的社交媒體行銷環境中，像我們的 Instagram 貼文生成器這樣的可視化工具已成為有效工作流程的必要組成部分。通過投入時間創建精美的模擬，您可以改進消息傳遞、完善視覺策略，並最終向 Instagram 受眾提供更有影響力的內容。',
        paragraph4: '立即開始使用我們的 Instagram 貼文生成器，體驗專業模擬在社交媒體規劃和展示過程中能帶來的差異。'
      }
    }
  }