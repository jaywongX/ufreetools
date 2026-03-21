export default {
  title: 'オーディオからWAV変換ツール使い方ガイド',
  subtitle: 'WAVフォーマットとは？',
  description: 'WAV（Waveform Audio File Format）はMicrosoftが開発したロスレスオーディオフォーマットで、プロオーディオ制作、レコーディングスタジオ、放送分野で広く使用されています。',
  
  whyConvert: {
    title: 'なぜWAVに変換するのか？',
    reasons: [
      {
        title: 'ロスレス音質',
        description: 'WAVはロスレス圧縮技術を使用し、元のオーディオのすべての詳細を保持。'
      },
      {
        title: 'プロ編集',
        description: 'プロオーディオ編集ソフトがWAVを優先サポート。'
      },
      {
        title: '広範な互換性',
        description: 'ほぼすべてのオーディオプレーヤーとOSがWAVをサポート。'
      },
      {
        title: '録音アーカイブ',
        description: 'WAVは録音ファイルに理想的なフォーマット。'
      }
    ]
  },
  
  useCases: {
    title: '一般的な使用例',
    cases: [
      'プロ音楽制作とマスタリング',
      'スタジオ録音ファイルの保存',
      'ラジオ局オーディオアーカイブ',
      'オーディオポストプロダクションと処理',
      '高品質オーディオサンプリング',
      'ゲームサウンドエフェクト制作',
      '動画オーディオトラック処理'
    ]
  },
  
  howToUse: {
    title: 'オーディオからWAV変換ツールの使い方',
    steps: [
      {
        step: 'ステップ1',
        description: '変換するオーディオファイルを選択またはドラッグ＆ドロップ。'
      },
      {
        step: 'ステップ2',
        description: 'サンプリングレート、ビット深度、チャンネルを調整。'
      },
      {
        step: 'ステップ3',
        description: '「変換開始」をクリックして完了を待つ。'
      },
      {
        step: 'ステップ4',
        description: '変換されたWAVファイルをダウンロード。'
      }
    ]
  },
  
  faqs: [
    {
      question: 'WAVとMP3の違いは？',
      answer: 'WAVはロスレスでファイルは大きいが最高音質；MP3はロッシーでファイルは小さいが一部音質を損失。'
    },
    {
      question: 'どのサンプリングレートを選ぶべき？',
      answer: '一般使用では44100Hz；プロ録音では48000Hz以上；音声録音では22050Hzで十分。'
    },
    {
      question: 'なぜWAVファイルはこんなに大きい？',
      answer: 'WAVはロスレスフォーマットで元のオーディオデータをすべて保持し圧縮していない。'
    },
    {
      question: 'WAVを他のフォーマットに変換できる？',
      answer: 'はい、このツールはWAVからMP3、M4Aなどへの変換もサポートしています。'
    }
  ],
  
  relatedTools: [
    {
      name: 'オーディオをMP3に変換',
      description: 'オーディオを最も互換性の高いMP3フォーマットに変換。',
      url: 'https://www.ufreetools.com/tools/audio-to-mp3'
    },
    {
      name: 'オーディオをM4Aに変換',
      description: 'オーディオをAppleデバイスに適したM4Aフォーマットに変換。',
      url: 'https://www.ufreetools.com/tools/audio-to-m4a'
    },
    {
      name: '画像をASCIIアートに変換',
      description: '画像をASCIIキャラクターアートに変換。',
      url: 'https://www.ufreetools.com/tools/image-to-ascii'
    }
  ],
  
  references: [
    {
      title: 'WAVフォーマット Wikipedia',
      url: 'https://ja.wikipedia.org/wiki/WAV'
    },
    {
      title: 'デジタルオーディオの基礎',
      url: 'https://www.ufreetools.com/blog/digital-audio-basics'
    }
  ]
}
