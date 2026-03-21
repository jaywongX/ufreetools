export default {
  name: 'オーディオをWAVに変換',
  description: '各種オーディオフォーマットを高品質なWAVロスレスオーディオファイルに変換',
  longDescription: '無料のオンラインオーディオからWAV変換ツール。MP3、M4A、FLAC、OGG、AAC、WMAなど多数のフォーマットをWAVロスレスオーディオに変換。サンプリングレートとチャンネルを調整して最高音質を維持。',
  
  selectFile: 'オーディオファイルを選択',
  dropFile: 'またはオーディオファイルをここにドラッグ＆ドロップ',
  supportedFormats: '対応フォーマット：MP3、M4A、FLAC、OGG、AAC、WMA、AMR、AIFF、APEなど',
  
  converting: '変換中...',
  convertComplete: '変換完了！',
  downloadAll: 'すべてダウンロード',
  clearAll: 'すべてクリア',
  
  settings: {
    title: '変換設定',
    sampleRate: 'サンプリングレート',
    sampleRates: {
      '22050': '22050 Hz (音声品質)',
      '44100': '44100 Hz (CD品質)',
      '48000': '48000 Hz (プロ品質)',
      '96000': '96000 Hz (ハイレゾ)',
      '192000': '192000 Hz (スタジオ品質)'
    },
    channels: 'チャンネル',
    channelOptions: {
      stereo: 'ステレオ',
      mono: 'モノラル'
    },
    bitDepth: 'ビット深度',
    bitDepths: {
      '16': '16ビット (CD標準)',
      '24': '24ビット (プロ)',
      '32': '32ビット (スタジオ)'
    },
    volume: '音量',
    volumeLabel: '音量調整'
  },
  
  errors: {
    selectFile: 'オーディオファイルを選択してください',
    unsupportedFormat: 'サポートされていないファイル形式です',
    conversionFailed: '変換に失敗しました、もう一度お試しください',
    fileTooLarge: 'ファイルが大きすぎます、100MB以下のファイルを選択してください'
  },
  
  fileInfo: {
    name: 'ファイル名',
    size: 'ファイルサイズ',
    duration: '再生時間',
    format: '元の形式',
    status: 'ステータス',
    actions: '操作'
  },
  
  status: {
    pending: '待機中',
    processing: '処理中',
    completed: '完了',
    failed: '失敗'
  },
  
  features: {
    title: '機能',
    list: [
      '多数のオーディオフォーマットをWAVに変換',
      '複数のサンプリングレート選択可能（22050Hz-192000Hz）',
      'ビット深度選択可能（16/24/32ビット）',
      'ステレオとモノラル対応',
      '音量調整機能',
      '一括処理対応',
      '元の音質を維持',
      '完全無料、登録不要'
    ]
  },
  
  article: {
    title: 'オーディオからWAV変換ツール使い方ガイド',
    subtitle: 'WAVフォーマットとは？',
    description: 'WAV（Waveform Audio File Format）はMicrosoftが開発したロスレスオーディオフォーマットで、プロオーディオ制作、レコーディングスタジオ、放送分野で広く使用されています。最も初期のデジタルオーディオフォーマットの一つとして、WAVは完全なオーディオデータを保持し、最高品質のオーディオ体験を提供します。',
    
    whyConvert: {
      title: 'なぜWAVに変換するのか？',
      reasons: [
        {
          title: 'ロスレス音質',
          description: 'WAVはロスレス圧縮技術を使用し、元のオーディオのすべての詳細を保持。オーディオファイルとプロフェッショナルの首选。'
        },
        {
          title: 'プロ編集',
          description: 'Adobe Audition、Pro Toolsなどのプロオーディオ編集ソフトがWAVを優先サポート。'
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
    
    howToUse: {
      title: 'オーディオからWAV変換ツールの使い方',
      steps: [
        {
          step: 'ステップ1',
          description: '変換するオーディオファイルを選択またはドラッグ＆ドロップ。'
        },
        {
          step: 'ステップ2',
          description: '必要に応じてサンプリングレート、ビット深度、チャンネルを調整。'
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
        answer: 'WAVはロスレスフォーマットで完全なオーディオデータを保持、ファイルは大きいが最高音質；MP3はロッシー圧縮フォーマット、ファイルは小さいが一部音質を損失。'
      },
      {
        question: 'どのサンプリングレートを選ぶべき？',
        answer: '一般使用では44100Hz（CD品質）；プロ録音では48000Hz以上；音声録音では22050Hzで十分。'
      },
      {
        question: 'なぜWAVファイルはこんなに大きい？',
        answer: 'WAVはロスレスフォーマットで、元のオーディオデータをすべて保持し圧縮していないため、ファイルサイズが大きくなります。'
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
        description: '画像をASCIIキャラクターアートに変換してユニークなテキストアート効果を作成。',
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
}
