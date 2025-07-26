export default {
  name: "十六進制與運算計算器",
  description: "對十六進制數執行按位與（AND）運算，並以多種格式查看結果。",
  firstNumber: "第一個十六進制數",
  secondNumber: "第二個十六進制數",
  enterHex: "輸入十六進制值（不含0x前綴）",
  invalidHex: "無效的十六進制值",
  calculate: "計算",
  import: "匯入",
  save: "儲存",
  copy: "複製",
  paste: "貼上",
  result: "結果",
  decimal: "十進制",
  binary: "二進制",
  copied: "已複製！",
  noResult: "輸入值並點擊計算按鈕查看結果",

  explanation: {
    title: "按位與運算的工作原理",
    content: "按位與（AND）運算會比較第一個運算元的每個位與第二個運算元的對應位。如果兩個位都為1，則結果中的對應位設為1。否則，結果中的對應位設為0。",
    example: "計算詳解"
  },

  examples: {
    title: "範例",
    example1: {
      description: "基本與運算",
      value1: "FF",
      value2: "0F",
      result: "0F"
    },
    example2: {
      description: "位元遮罩應用",
      value1: "ABCD",
      value2: "FF00",
      result: "AB00"
    },
    commonMask: "常見遮罩: 0xFF & 0x0F",
    permissionCheck: "權限檢查: 0xA5 & 0x80",
    bitClearing: "位清除: 0xFFFF & 0xFF00",
    evenCheck: "偶數檢查: 0x42 & 0x01"
  },

  documentation: {
    title: "十六進制與運算計算器：完整指南",
    introduction: "十六進制與運算計算器是一個用於對十六進制數執行按位與運算的工具，常用於程式設計和數位電子設計。",
    
    whatIs: {
      title: "什麼是按位與運算？",
      paragraph1: "按位與是一種二進制操作，它取兩個等長的位模式並對每對相應位執行邏輯與操作。如果兩個位都為1，則結果位為1，否則結果位為0。",
      paragraph2: "這種操作在各種計算場景中非常基礎，包括遮罩操作、位操作和檢查特定位的狀態。"
    },
    
    useCases: {
      title: "十六進制與運算的常見用例",
      masks: {
        title: "位元遮罩",
        description: "使用與操作通過遮罩不需要的位來提取或隔離值中的特定位。"
      },
      permissions: {
        title: "權限檢查",
        description: "確定權限位欄位中是否設定了特定權限位。"
      },
      flagsCheck: {
        title: "標誌狀態檢查",
        description: "檢查狀態暫存器或標誌變數中是否設定了特定標誌。"
      },
      evenOdd: {
        title: "奇偶性測試",
        description: "使用與1的與運算來測試數字是偶數還是奇數。"
      },
      bitClearing: {
        title: "位清除",
        description: "通過與遮罩進行與運算來清除特定位，同時保持其他位不變。"
      }
    },
    
    howToUse: {
      title: "如何使用十六進制與運算計算器",
      step1: "輸入第一個十六進制數（不含\"0x\"前綴）",
      step2: "輸入第二個十六進制數（不含\"0x\"前綴）",
      step3: "點擊\"計算\"按鈕",
      step4: "查看十六進制、十進制和二進制格式的結果",
      step5: "使用複製按鈕將任何格式的結果複製到剪貼簿"
    },
    
    tips: {
      title: "使用十六進制與運算的技巧",
      tip1: "計算時會忽略輸入中的前導零，但結果會根據最長的輸入進行填充",
      tip2: "對於遮罩操作，在您想要保留的位置使用FF（或F的序列），在您想要清除的位置使用00",
      tip3: "要檢查是否設定了特定位，請與僅設定了該位的值進行與運算（例如，與0x08進行與運算以檢查是否設定了第4位）",
      tip4: "請記住，每個十六進制數字代表4位（一個半位元組）",
      tip5: "在處理權限或標誌時，請保持對每個位代表什麼的參考"
    }
  },

  quickExamples: "快速範例",
  operation: "操作",

  operations: {
    and: "與(AND)",
    or: "或(OR)",
    xor: "互斥或(XOR)",
    not: "非(NOT)",
    shiftLeft: "左移(<<)",
    shiftRight: "右移(>>)"
  },

  input: "輸入值",
  chainWith: "鏈式計算",
  importFromFile: "從檔案匯入",
  noResult: "輸入值並單擊計算以查看結果",
  bitVisualization: "視覺化",
  inputNumbers: "輸入十六進制數字",
  addNumber: "新增另一個數字",
  number: "數字",
  remove: "刪除",
  removeButton: "刪除此輸入",
  importTitle: "從檔案匯入",
  saveTitle: "儲存到檔案",
  copyTitle: "複製所有輸入",
  pasteTitle: "從剪貼簿貼上",
  saveResult: "儲存結果",
  saveResultTitle: "將結果儲存到檔案",
  copyResult: "複製結果",
  copyResultTitle: "複製所有結果",
  copyAction: "複製",
  importError: "匯入檔案錯誤，請確保檔案格式正確",
  inputsCopied: "所有輸入已複製到剪貼簿",
  resultsCopied: "所有結果已複製到剪貼簿",
  inputs: "輸入"
};