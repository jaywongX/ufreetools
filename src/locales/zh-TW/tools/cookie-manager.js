export default {
  "name": "Cookie管理器",
  "description": "查看、創建、編輯和刪除當前網站的Cookie",
  
  // 主要功能標籤
  "currentCookies": "當前Cookie",
  "createCookie": "創建Cookie",
  "importExport": "導入/導出",
  
  // Cookie列表
  "noCookies": "當前網站沒有Cookie",
  "cookieName": "名稱",
  "cookieValue": "值",
  "cookieDomain": "域名",
  "cookiePath": "路徑",
  "cookieExpires": "過期時間",
  "cookieSecure": "安全(Secure)",
  "cookieHttpOnly": "HttpOnly",
  "cookieSameSite": "SameSite",
  "actions": "操作",
  "edit": "編輯",
  "delete": "刪除",
  "save": "保存",
  "cancel": "取消",
  "refresh": "刷新",
  
  // 創建/編輯表單
  "addCookie": "添加Cookie",
  "editCookie": "編輯Cookie",
  "required": "必填項",
  "optional": "可選項",
  "days": "天",
  "hours": "小時",
  "minutes": "分鐘",
  "cookieCreated": "Cookie已創建",
  "cookieUpdated": "Cookie已更新",
  "cookieDeleted": "Cookie已刪除",
  "createError": "創建Cookie時出錯",
  "updateError": "更新Cookie時出錯",
  "deleteError": "刪除Cookie時出錯",
  
  // 導入/導出
  "export": "導出Cookie",
  "import": "導入Cookie",
  "exportAs": "導出為",
  "exportSuccess": "Cookie已導出",
  "importSuccess": "已導入{count}個Cookie",
  "importError": "導入Cookie時出錯",
  
  // 安全選項
  "none": "無",
  "strict": "嚴格",
  "lax": "寬鬆",
  
  // 提示和說明
  "domainNote": "留空表示當前域名",
  "pathNote": "默認為根路徑\"/\"",
  "expiresNote": "不設置表示會話Cookie",
  "secureNote": "僅通過HTTPS發送",
  "httpOnlyNote": "禁止JavaScript訪問",
  "sameSiteNote": "跨站點請求控制",
  
  // 導入格式
  "importFormat": "導入格式示例:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict",
  "jsonFormat": "JSON格式",
  "textFormat": "文本格式",
  "invalidFormat": "無效的格式",
  
  // 文章內容
  "article": {
    "title": "Cookie管理器：了解和控制網站Cookie",
    "features": {
      "title": "功能與應用場景",
      "description": "我們的<strong>Cookie管理器</strong>工具提供了對網站Cookie的全面控制，讓您能夠查看、創建、編輯和刪除當前網站的Cookie。這個強大的工具給予您對瀏覽器中存儲的Cookie完全的可見性和控制權，幫助您管理在線隱私並解決網站功能問題。",
      "useCasesTitle": "實際應用場景",
      "useCases": {
        "items": [
          "<strong>Web開發測試</strong>：無需手動編輯瀏覽器存儲，即可測試網站在不同Cookie配置下的行為表現。",
          "<strong>網站故障排除</strong>：通過檢查和修改Cookie，診斷登錄問題、會話問題或其他與Cookie相關的網站故障。",
          "<strong>隱私管理</strong>：通過查看網站在Cookie中存儲的信息，選擇性地刪除不需要的跟踪Cookie，掌控您的個人數據。",
          "<strong>會話管理</strong>：創建或修改會話Cookie，測試不同的用戶狀態或身份驗證場景，無需反復登錄和退出。",
          "<strong>跨瀏覽器測試</strong>：從一個瀏覽器導出Cookie並將其導入另一個瀏覽器，在不同瀏覽器之間複製相同的瀏覽狀態。"
        ]
      }
    },
    "faq": {
      "title": "常見問題解答",
      "items": [
        {
          "question": "Cookie是什麼，為什麼網站要使用它們？",
          "answer": "Cookie是網站存儲在您瀏覽器中的小型數據片段。它們具有各種功能，包括記住登錄信息、跟踪用戶行為、存儲偏好設置、維護購物車以及啟用個性化體驗。Cookie對許多現代網絡功能至關重要，但在用於跟踪時也可能引發隱私擔憂。"
        },
        {
          "question": "Cookie管理器工具與瀏覽器內置的Cookie設置有何不同？",
          "answer": "雖然瀏覽器通過其設置提供基本的Cookie管理，但我們的<strong>Cookie管理器</strong>提供更精細的控制和功能。您不僅可以查看和刪除Cookie（像瀏覽器允許的那樣），還可以創建新Cookie、編輯現有Cookie、導出Cookie進行備份以及導入Cookie。這使其成為需要詳細Cookie管理功能的開發人員、測試人員和注重隱私的用戶的理想選擇。"
        },
        {
          "question": "刪除Cookie安全嗎？會影響我的瀏覽體驗嗎？",
          "answer": "刪除Cookie通常是安全的，但可能會以多種方式影響您的瀏覽體驗。您可能會從網站登出、丟失已保存的偏好設置或需要重新創建購物車。<strong>Cookie管理器</strong>允許您選擇性地刪除特定Cookie，而不是清除所有Cookie，讓您精確控制要保留或刪除哪些瀏覽數據。"
        },
        {
          "question": "\"SameSite\"和\"HttpOnly\"等不同的Cookie屬性是什麼意思？",
          "answer": "Cookie屬性控制Cookie的行為和訪問方式：<br>- <strong>Secure</strong>：Cookie僅通過HTTPS連接發送<br>- <strong>HttpOnly</strong>：JavaScript無法訪問Cookie<br>- <strong>SameSite</strong>：控制何時隨跨站請求發送Cookie（None、Lax或Strict）<br>- <strong>Domain</strong>：指定哪些域可以接收Cookie<br>- <strong>Path</strong>：將Cookie限制到網站上的特定路徑<br>- <strong>Expires</strong>：設置瀏覽器應何時刪除Cookie"
        },
        {
          "question": "我可以使用此工具導入來自另一台計算機或瀏覽器的Cookie嗎？",
          "answer": "是的，<strong>Cookie管理器</strong>的導入/導出功能允許您在瀏覽器或設備之間傳輸Cookie。將您的Cookie導出為JSON或文本文件，將文件傳輸到另一台設備，然後使用該設備上的Cookie管理器工具導入它們。這對需要複製用戶狀態的開發人員或在不同計算機之間傳輸瀏覽會話特別有用。"
        }
      ]
    },
    "guide": {
      "title": "如何使用Cookie管理器工具",
      "step1": {
        "title": "查看當前Cookie",
        "description": "當您打開<strong>Cookie管理器</strong>時，\"當前Cookie\"選項卡顯示當前網站的所有Cookie。此列表顯示每個Cookie的名稱、值和過期日期。要查看特定Cookie的更多詳細信息，請點擊旁邊的\"編輯\"按鈕。要刷新列表並確保您看到最新的Cookie，請點擊列表頂部的\"刷新\"按鈕。"
      },
      "step2": {
        "title": "創建新Cookie",
        "description": "要添加新Cookie，請點擊\"創建Cookie\"選項卡。填寫必填字段（名稱和值）以及任何可選屬性，如域名、路徑或過期時間。根據您的需要設置安全選項，如Secure標誌或SameSite屬性。配置好Cookie後，點擊\"保存\"按鈕創建它。工具將確認創建成功並自動返回到Cookie列表視圖。"
      },
      "step3": {
        "title": "編輯現有Cookie",
        "description": "要修改Cookie，請在\"當前Cookie\"列表中找到它並點擊\"編輯\"按鈕。這將加載Cookie的詳細信息到編輯表單中。對Cookie的任何屬性進行所需的更改。完成後，點擊\"保存\"更新Cookie。工具將確認更新成功。請注意，編輯Cookie實際上是創建一個具有相同名稱但更新屬性的新Cookie。"
      },
      "step4": {
        "title": "刪除Cookie",
        "description": "要刪除Cookie，請在\"當前Cookie\"列表中找到它並點擊\"刪除\"按鈕。將出現確認對話框以防止意外刪除。確認後，Cookie將立即從您的瀏覽器中刪除，列表將自動刷新。這使您可以完全控制網站可以在您的瀏覽器中存儲哪些數據。"
      },
      "step5": {
        "title": "導入和導出Cookie",
        "description": "要傳輸Cookie，請導航到\"導入/導出\"選項卡。對於導出，選擇JSON格式（更好的結構）或文本格式（更好的兼容性）。點擊相應的按鈕下載文件。對於導入，將Cookie數據粘貼到文本區域並點擊\"導入\"。您可以以標準文本格式或JSON格式導入Cookie。工具將確認導入成功並顯示導入了多少Cookie。"
      }
    },
    "conclusion": "<strong>Cookie管理器</strong>工具賦予您對瀏覽器Cookie的完全控制權，無論您是測試網站功能的開發人員，還是管理個人數據的隱私意識用戶，或是解決網站問題的人。通過了解和主動管理Cookie，您可以增強瀏覽體驗，同時保持對在線隱私的控制。"
  }
}