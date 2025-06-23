export default {
  name: '名前ジェネレーター',
  description: '様々な文化的背景やスタイルを含む、さまざまなタイプの名前をランダムに生成',
  
  // 主要機能
  generateNames: '名前を生成',
  regenerate: '再生成',
  copy: 'コピー',
  copyAll: 'すべてコピー',
  reset: 'リセット',
  copied: 'コピーしました',
  
  // 設定とオプション
  settings: {
    title: '設定',
    quantity: '数量',
    type: 'タイプ',
    gender: '性別',
    culture: '文化的背景',
    style: 'スタイル',
    startsWith: '先頭文字',
    endsWith: '末尾文字',
    minLength: '最小長',
    maxLength: '最大長',
    includeMiddleName: 'ミドルネームを含む',
    includeSurname: '姓を含む',
    advancedOptions: '詳細オプション'
  },
  
  // 名前のタイプ
  types: {
    fullName: 'フルネーム',
    firstName: 'ファーストネーム',
    lastName: '姓',
    nickname: 'ニックネーム',
    fantasy: 'ファンタジー名',
    scifi: 'SF名',
    ancient: '古代名',
    modern: '現代名',
    custom: 'カスタム'
  },
  
  // 性別オプション
  genders: {
    any: '制限なし',
    male: '男性',
    female: '女性',
    neutral: '中性'
  },
  
  // 文化的背景
  cultures: {
    any: 'ランダム',
    chinese: '中国',
    japanese: '日本',
    korean: '韓国',
    english: '英語圏',
    spanish: 'スペイン語圏',
    french: 'フランス語圏',
    german: 'ドイツ語圏',
    nordic: '北欧',
    arabic: 'アラビア',
    indian: 'インド',
    russian: 'ロシア',
    italian: 'イタリア',
    greek: 'ギリシャ',
    fantasy: 'ファンタジー',
    scifi: 'SF'
  },
  
  // スタイルオプション
  styles: {
    classic: 'クラシック',
    modern: 'モダン',
    unique: 'ユニーク',
    popular: '人気',
    traditional: '伝統的',
    literary: '文学的',
    historical: '歴史的'
  },
  
  // 結果エリア
  results: {
    title: '生成結果',
    empty: 'パラメータを設定して「名前を生成」ボタンをクリックしてください',
    count: '{count}個の名前が生成されました'
  },
  
  // ツール紹介情報
  aboutTitle: '名前ジェネレーターについて',
  aboutDescription: '名前ジェネレーターは、あなたのニーズや好みに応じて様々なタイプの名前をランダムに生成する実用的なツールです。小説のキャラクター、ゲームのキャラクター、クリエイティブプロジェクト、あるいは新生児の命名のインスピレーションを求めている方に、多様な選択肢を提供します。',
  
  featuresTitle: '主な機能',
  feature1: '異なる文化的背景からの名前生成をサポート',
  feature2: '性別、スタイル、その他のパラメータに基づいて結果をカスタマイズ可能',
  feature3: 'フルネーム、ファーストネームのみ、姓のみ、ニックネームなど多様なタイプを提供',
  feature4: '名前の長さの範囲や先頭・末尾の文字を設定可能',
  feature5: 'ユニークなファンタジーやSF名の生成をサポート',
  feature6: '一度に複数の名前を生成して選択肢を提供',
  
  useCasesTitle: '使用シーン',
  useCase1: '作家が小説やシナリオのキャラクターに名前を付ける',
  useCase2: 'ゲーム開発者がゲームキャラクターの名前を作成する',
  useCase3: '両親が赤ちゃんの名前のインスピレーションを探す',
  useCase4: 'クリエイターが芸術作品、ブランド、製品に名前を付ける',
  useCase5: 'ロールプレイングゲームプレイヤーがキャラクターに名前を付ける',
  
  tipsTitle: '使用のヒント',
  tip1: '異なる文化的背景を組み合わせて、より多様な名前を取得する',
  tip2: '名前の長さや先頭・末尾の文字を調整して、ニーズに合った名前を得る',
  tip3: '気に入った名前の結果を保存して、後で参照できるようにする',
  tip4: '「再生成」ボタンを使用して、現在の設定に基づいて新しい名前をすばやく取得する',
  tip5: 'ファンタジーやSF名のタイプは、架空のキャラクターや未来世界の人物の命名に特に適している'
};