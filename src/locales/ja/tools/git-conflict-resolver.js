export default {
  name: 'Git競合解決シミュレーター',
  description: 'Gitマージ競合シナリオをシミュレートし、コード競合の解決を練習',
  title: 'Git 競合解決シミュレーター',
  intro: 'このツールはGitマージ競合を理解し、解決する練習に役立ちます。競合内容を入力するか例を使用して、手動で競合を解決してください。',

  buttons: {
    generateExample: '競合例を生成',
    resolveOurs: '自分の変更を使用 (HEAD)',
    resolveTheirs: '相手の変更を使用',
    validate: '解決策を検証',
    reset: 'リセット',
    useOurs: '自分のを使用',
    useTheirs: '相手のを使用',
    useBoth: '両方を統合'
  },

  conflictArea: {
    label: '競合内容',
    hasConflict: '⚠️ 未解決の競合があります',
    noConflict: '✓ 競合なし'
  },

  analysis: {
    title: '競合分析',
    conflict: '競合 #{number}',
    ours: '自分の変更 (HEAD)',
    theirs: '相手の変更'
  },

  tutorial: {
    title: 'Gitの競合を解決する方法',
    intro: 'Git競合は通常、マージやリベース操作中に発生し、2つのブランチが同じファイルの同じ部分を変更した場合に競合が発生します。',
    markerExplanation: '競合マーカーは通常このように表示されます：',
    markerExample: `<<<<<<< HEAD
自分の変更（現在のブランチ）
=======
相手の変更（マージされるブランチ）
>>>>>>> ブランチ名`,
    steps: {
      title: '競合を解決する基本的な手順：',
      step1: 'すべての競合マーカーを見つける（<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> ブランチ名</code>）',
      step2: 'どのコードを残すか決める（自分の変更、相手の変更、または両方の組み合わせ）',
      step3: '競合マーカーを削除し、残すと決めたコードを保持する',
      step4: '次の競合に進み、すべての競合が解決されるまで続ける'
    },
    commands: {
      title: 'よく使われるGitコマンド：',
      status: '<code>git status</code> - 競合があるファイルを確認',
      diff: '<code>git diff</code> - 競合の詳細内容を確認',
      abort: '<code>git merge --abort</code> - マージをキャンセルし、マージ前の状態に戻る',
      add: '<code>git add &lt;ファイル&gt;</code> - 競合ファイルを解決済みとしてマーク',
      commit: '<code>git commit</code> - マージを完了'
    }
  },

  messages: {
    generated: "競合例を生成しました",
    resolvedOurs: "すべての「自分の変更」を使用して競合を解決しました",
    resolvedTheirs: "すべての「相手の変更」を使用して競合を解決しました",
    resolvedSingle: "競合 #{number} を解決しました",
    allResolved: "✅ すべての競合が正常に解決されました！",
    stillHasConflicts: "⚠️ まだ未解決の競合があります。すべてのマーカーを確認して解決してください"
  }
};