export default {
  name: '16進数AND演算計算機',
  description: '16進数に対してビット単位のAND演算を実行し、結果を複数の形式で表示します。',

  // 入力ラベル
  firstNumber: '1つ目の16進数',

  secondNumber: '2つ目の16進数',
  enterHex: '16進数値を入力（0xプレフィックスなし）',
  invalidHex: '無効な16進数値',

  // 操作
  calculate: '計算',

  import: 'インポート',
  save:'保存',
  copy:'コピー',
  paste:'貼り付け',

  // 結果
  result: '結果',

  decimal: '10進数',
  binary: '2進数',
  copied: 'コピーしました！',
  noResult: '値を入力して計算ボタンをクリックすると結果が表示されます',

  // 説明
  explanation: {
    title: 'ビット単位のAND演算の仕組み',
    content: 'ビット単位のAND演算は、最初のオペランドの各ビットと2番目のオペランドの対応するビットを比較します。両方のビットが1の場合、結果の対応するビットは1に設定されます。それ以外の場合、結果の対応するビットは0に設定されます。',
    example: '計算の詳細'
  },

  // 例
  examples: {
    title: '例',
    example1: {
      description: '基本的なAND演算',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'ビットマスクの応用',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: '一般的なマスク: 0xFF & 0x0F',
    permissionCheck: '権限チェック: 0xA5 & 0x80',
    bitClearing: 'ビットクリア: 0xFFFF & 0xFF00',
    evenCheck: '偶数チェック: 0x42 & 0x01'
  },

  // ドキュメント
  documentation: {
    title: '16進数AND演算計算機：完全ガイド',
    introduction: '16進数AND演算計算機は、16進数に対してビット単位のAND演算を実行するためのツールで、プログラミングやデジタル電子設計でよく使用されます。',
    
    whatIs: {
      title: 'ビット単位のAND演算とは？',
      paragraph1: 'ビット単位のANDは、2つの等しい長さのビットパターンを取り、各対応するビットペアに対して論理AND操作を実行する二進演算です。両方のビットが1の場合、結果のビットは1になり、それ以外の場合は0になります。',
      paragraph2: 'この操作は、マスク操作、ビット操作、特定のビットの状態チェックなど、さまざまな計算シナリオで非常に基本的なものです。'
    },
    
    useCases: {
      title: '16進数AND演算の一般的なユースケース',
      masks: {
        title: 'ビットマスク',
        description: 'AND操作を使用して、不要なビットをマスクすることで、値から特定のビットを抽出または分離します。'
      },
      permissions: {
        title: '権限チェック',
        description: '権限ビットフィールドで特定の権限ビットが設定されているかどうかを判断します。'
      },
      flagsCheck: {
        title: 'フラグ状態チェック',
        description: 'ステータスレジスタまたはフラグ変数で特定のフラグが設定されているかどうかを確認します。'
      },
      evenOdd: {
        title: '偶奇性テスト',
        description: '1とのAND演算を使用して、数値が偶数か奇数かをテストします。'
      },
      bitClearing: {
        title: 'ビットクリア',
        description: 'マスクとのAND演算を通じて、他のビットを変更せずに特定のビットをクリアします。'
      }
    },
    
    howToUse: {
      title: '16進数AND演算計算機の使用方法',
      step1: '最初の16進数を入力（「0x」プレフィックスなし）',
      step2: '2番目の16進数を入力（「0x」プレフィックスなし）',
      step3: '「計算」ボタンをクリック',
      step4: '16進数、10進数、2進数形式の結果を確認',
      step5: 'コピーボタンを使用して、任意の形式の結果をクリップボードにコピー'
    },
    
    tips: {
      title: '16進数AND演算を使用するためのヒント',
      tip1: '計算時に入力の先頭のゼロは無視されますが、結果は最長の入力に基づいてパディングされます',
      tip2: 'マスク操作では、保持したい位置にFF（またはFのシーケンス）を使用し、クリアしたい位置に00を使用します',
      tip3: '特定のビットが設定されているかどうかを確認するには、そのビットのみが設定された値とAND演算を行います（例：第4ビットが設定されているかどうかを確認するには0x08とAND演算）',
      tip4: '各16進数字は4ビット（1ニブル）を表すことを覚えておいてください',
      tip5: '権限やフラグを扱う際は、各ビットが何を表すかの参照を保持してください'
    }
  },

  quickExamples: 'クイック例',
  operation: '操作',

  operations: {
    and: 'AND',
    or: 'OR',
    xor: 'XOR',
    not: 'NOT',
    shiftLeft: '左シフト(<<)',
    shiftRight: '右シフト(>>)'
  },

  input: '入力値',
  chainWith: '連鎖計算',
  importFromFile: 'ファイルからインポート',
  noResult: '値を入力して計算をクリックすると結果が表示されます',
  bitVisualization: '可視化',
  inputNumbers: '16進数を入力',
  addNumber: '別の数値を追加',

  // 既存の翻訳ファイルに以下を追加
  number: '数値',

  // ボタンラベル
  remove: '削除',

  removeButton: 'この入力を削除',
  importTitle: 'ファイルからインポート',
  saveTitle: 'ファイルに保存',
  copyTitle: 'すべての入力をコピー',
  pasteTitle: 'クリップボードから貼り付け',
  saveResult: '結果を保存',
  saveResultTitle: '結果をファイルに保存',
  copyResult: '結果をコピー',
  copyResultTitle: 'すべての結果をコピー',
  copyAction: 'コピー',

  // ヒントとメッセージ
  importError: 'ファイルのインポートエラー、ファイル形式が正しいことを確認してください',

  inputsCopied: 'すべての入力がクリップボードにコピーされました',
  resultsCopied: 'すべての結果がクリップボードにコピーされました',
  inputs: '入力'
};