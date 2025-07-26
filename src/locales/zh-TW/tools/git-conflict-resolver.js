export default {
  name: "Git衝突解決模擬器",
  description: "模擬Git合併衝突場景，練習解決程式碼衝突",
  title: "Git 衝突解決模擬器",
  intro: "此工具可以幫助你理解並練習解決Git合併衝突。輸入衝突內容或使用範例，然後手動解決衝突。",

  buttons: {
    generateExample: "產生範例衝突",
    resolveOurs: "使用我的變更 (HEAD)",
    resolveTheirs: "使用他們的變更",
    validate: "驗證解決方案",
    reset: "重置",
    useOurs: "使用我的",
    useTheirs: "使用他們的",
    useBoth: "合併兩者"
  },

  conflictArea: {
    label: "衝突內容",
    hasConflict: "⚠️ 存在未解決衝突",
    noConflict: "✓ 無衝突"
  },

  analysis: {
    title: "衝突分析",
    conflict: "衝突 #{number}",
    ours: "我的變更 (HEAD)",
    theirs: "他們的變更"
  },

  tutorial: {
    title: "如何解決Git衝突",
    intro: "Git衝突通常在合併或變基操作中出現，當兩個分支修改了同一檔案的同一部分時會發生衝突。",
    markerExplanation: "衝突標記通常看起來像這樣：",
    markerExample: "<<<<<<< HEAD\n你的變更 (當前分支)\n=======\n他們的變更 (合併進來的分支)\n>>>>>>> 分支名稱",
    steps: {
      title: "解決衝突的基本步驟：",
      step1: "找到所有衝突標記 (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> 分支名</code>)",
      step2: "決定保留哪些程式碼（你的、他們的，或者兩者的組合）",
      step3: "刪除衝突標記，保留你決定要保留的程式碼",
      step4: "繼續處理下一個衝突，直到解決所有衝突"
    },
    commands: {
      title: "常用的Git指令：",
      status: "<code>git status</code> - 查看哪些檔案有衝突",
      diff: "<code>git diff</code> - 查看衝突的詳細內容",
      abort: "<code>git merge --abort</code> - 取消合併，回到合併前的狀態",
      add: "<code>git add &lt;檔案&gt;</code> - 標記衝突檔案為已解決",
      commit: "<code>git commit</code> - 完成合併"
    }
  },

  messages: {
    generated: "已產生範例衝突內容",
    resolvedOurs: "已使用所有「我的變更」解決衝突",
    resolvedTheirs: "已使用所有「他們的變更」解決衝突",
    resolvedSingle: "已解決衝突 #{number}",
    allResolved: "✅ 所有衝突已成功解決！",
    stillHasConflicts: "⚠️ 仍有未解決的衝突，請檢查並解決所有標記"
  }
};