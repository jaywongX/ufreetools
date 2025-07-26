export default {
  name: 'オンラインハッシュ計算ツール | SHA-256、MD5、SHA-3、BLAKE3、SM3など多数のアルゴリズムをサポート',
  description: '無料のオンラインハッシュ計算ツールで、SHA-256、MD5、SHA-3、BLAKE3、SM3など多数の暗号化および検証アルゴリズムをサポートし、ファイルの整合性検証、データセキュリティ処理などのシナリオに適しています。',

  input: {
    title: '入力',
    text: 'テキスト入力',
    file: 'ファイル入力',
    textPlaceholder: 'ハッシュを計算するテキストをここに入力...',
    fileSelect: 'ファイルを選択',
    fileDrop: 'ファイルをここにドロップするか、クリックしてアップロード',
    fileSelected: '選択されたファイル: {name}',
    fileSize: '{size}',
    removeFile: 'ファイルを削除',
    localProcessing: 'ファイルはローカルで処理され、サーバーにアップロードされません',
    encoding: 'エンコーディング',
    selectAlgorithm: 'ハッシュアルゴリズムを選択',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: 'ハッシュを計算',
    calculating: '計算中...',
    clear: '入力をクリア',
    hashValue: 'ハッシュ値'
  },

  algorithms: {
    title: 'アルゴリズム',
    selectAll: 'すべて選択',
    deselectAll: 'すべて選択解除',
    md5: 'MD5',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sha3_224: 'SHA3-224',
    sha3_256: 'SHA3-256',
    sha3_384: 'SHA3-384',
    sha3_512: 'SHA3-512',
    ripemd160: 'RIPEMD-160',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    whirlpool: 'Whirlpool',
    crc32: 'CRC32',
    hmac: 'HMACオプション',
    key: 'HMAC鍵',
    keyPlaceholder: 'HMAC鍵を入力'
  },

  results: {
    title: 'ハッシュ結果',
    algorithm: 'アルゴリズム',
    digest: 'ダイジェスト',
    noInput: 'ハッシュを計算するにはテキストを入力するかファイルを選択してください',
    calculating: '計算中...',
    copy: 'コピー',
    copied: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました、手動でコピーしてください',
    copyAll: 'すべてコピー',
    download: '結果をダウンロード',
    fileInfo: 'ファイル情報',
    fileName: '名前',
    fileSize: 'サイズ',
    fileType: 'タイプ',
    lastModified: '最終更新日時',
    hexFormat: '16進数形式',
    base64Format: 'Base64形式',
    upperHexFormat: '大文字16進数形式',
    hashValue: 'ハッシュ値',
    allHashesTitle: 'すべてのハッシュアルゴリズム結果',
    hexFormat: '16進数形式',
    algorithm: 'アルゴリズム',
    digest: 'ハッシュ値',
    export: 'CSVをエクスポート',
    calculating: '計算中...',
    copyToClipboard: 'クリップボードにコピー',
    allHashesTitle: 'すべてのアルゴリズムのハッシュ値',
  },

  verification: {
    title: 'ハッシュ検証',
    inputVerifyHash: '検証するハッシュ値を入力',
    placeholder: '比較用のハッシュ値を入力...',
    paste: 'ハッシュを貼り付けて検証',
    matches: 'ハッシュが一致しました！',
    doesNotMatch: 'ハッシュが一致しません',
    notFound: 'アルゴリズムが見つかりません',
    verify: '検証',
    autoDetect: 'アルゴリズムを自動検出',
    result: '検証結果'
  },

  options: {
    title: 'オプション',
    uppercase: '大文字で出力',
    showTiming: '計算時間を表示',
    autoCalculate: '自動計算',
    formatOutput: '長い出力をフォーマット',
    binaryOutput: 'バイナリビュー（非テキストファイル用）',
    compareHashes: 'ハッシュ値を比較',
    hmacMode: 'HMACモードを有効化',
    autoCalculate: '自動計算',
    showAllHashes: 'すべてのアルゴリズムのハッシュ値を表示'
  },

  tools: {
    title: 'ツール',
    batchProcessing: 'バッチ処理',
    fileHashTool: 'ファイルハッシュディレクトリ',
    hashIdentifier: 'ハッシュタイプ識別ツール',
    hmacGenerator: 'HMACジェネレーター',
    checksumVerifier: 'チェックサム検証ツール',
    passwordHasher: 'パスワードハッシュツール'
  },

  batchTool: {
    title: 'バッチ処理',
    addFiles: 'ファイルを追加',
    processFiles: 'ファイルを処理',
    clearAll: 'すべてクリア',
    fileName: 'ファイル名',
    algorithm: 'アルゴリズム',
    status: 'ステータス',
    actions: 'アクション',
    waiting: '待機中',
    processing: '処理中',
    complete: '完了',
    failed: '失敗',
    remove: '削除',
    filesSelected: '{count}個のファイルが選択されました',
    exportResults: '結果をエクスポート',
    selectAlgorithm: 'すべてのファイルのアルゴリズムを選択'
  },

  messages: {
    fileTooBig: 'ファイルが大きすぎます。最大許容サイズは100MBです。',
    hashCalculated: 'ハッシュの計算に成功しました',
    invalidInput: '無効な入力',
    readError: 'ファイルを読み込めません',
    processingError: 'ファイル処理中にエラーが発生しました: {error}',
    algorithmNotAvailable: 'アルゴリズムが利用できません。必要なライブラリをインストールしてください。',
    algorithmFallback: '{algorithm} は利用できません、代わりに {fallback} を使用します',
    moduleNotReady: '{name} モジュールの準備ができていません',
    algorithmError: '{algorithm} エラー: {error}'
  },

  security: {
    warning: '安全でないHTTP接続でハッシュツールを使用することはセキュリティリスクがあります'
  },

  algorithmDetails: {
    title: 'ハッシュアルゴリズムについて',
    usage: '一般的な用途',
    safe: 'セキュリティ',
    md2: {
      name: 'MD2 (128ビット)',
      description: 'MD2は広く使用されているハッシュ関数で、128ビット（16バイト）のハッシュ値を生成し、通常32桁の16進数で表されます。',
      usage: 'ファイル整合性チェック、パスワード保存（安全ではない）',
      security: '衝突耐性の欠如が証明されています。セキュリティに敏感な場面では使用すべきではありません。'
    },
    md4: {
      name: 'MD4 (128ビット)',
      description: 'MD4は広く使用されているハッシュ関数で、128ビット（16バイト）のハッシュ値を生成し、通常32桁の16進数で表されます。',
      usage: 'ファイル整合性チェック、パスワード保存（安全ではない）',
      security: '衝突耐性の欠如が証明されています。セキュリティに敏感な場面では使用すべきではありません。'
    },
    md5: {
      name: 'MD5 (128ビット)',
      description: 'MD5は広く使用されているハッシュ関数で、128ビット（16バイト）のハッシュ値を生成し、通常32桁の16進数で表されます。',
      usage: 'ファイル整合性チェック、パスワード保存（安全ではない）',
      security: '衝突耐性の欠如が証明されています。セキュリティに敏感な場面では使用すべきではありません。'
    },
    sha1: {
      name: 'SHA-1 (160ビット)',
      description: 'SHA-1は暗号学的ハッシュ関数で、160ビット（20バイト）のハッシュ値を生成し、通常40桁の16進数で表されます。',
      usage: 'バージョン管理システム（Gitなど）、ファイル整合性検証',
      security: '衝突攻撃の脆弱性が証明されています。セキュリティ重視のアプリケーションには推奨されません。'
    },
    sha224: {
      name: 'SHA-224 (224ビット)',
      description: 'SHA-224はSHA-2ファミリーのメンバーで、224ビット（28バイト）のハッシュ値を生成します。',
      usage: 'スペースが制限されているが高いセキュリティが必要なシナリオに適しています',
      security: '優れたセキュリティを提供し、SHA-256の切り詰めバージョンです'
    },
    sha256: {
      name: 'SHA-256 (256ビット)',
      description: 'SHA-256はSHA-2シリーズに属し、256ビット（32バイト）のハッシュ値を生成し、通常64桁の16進数で表されます。',
      usage: 'デジタル署名、デジタル証明書、パスワード保存、ブロックチェーン',
      security: '現在安全とされており、高セキュリティシナリオで広く使用されています。'
    },
    dsha256: {
      name: 'Double SHA-256',
      description: 'Double SHA-256はSHA-256を連続して2回実行する暗号学的ハッシュ関数で、SHA-256(SHA-256(x))として表されます。',
      usage: 'ビットコインおよび多くの他の暗号通貨でブロックハッシュ、トランザクションID、アドレス生成に使用されます',
      security: '標準のSHA-256と同じセキュリティ保証を提供しますが、追加のセキュリティ層を加えることで、衝突を通じて元の入力を逆算することをより困難にします。'
    },
    sha384: {
      name: 'SHA-384 (384ビット)',
      description: 'SHA-384はSHA-512の切り詰めバージョンで、384ビット（48バイト）のハッシュ値を生成します。',
      usage: 'SHA-256よりも高いセキュリティが必要なシナリオ',
      security: 'SHA-256よりも強力なセキュリティを提供し、既知の攻撃方法はありません。'
    },
    sha512: {
      name: 'SHA-512 (512ビット)',
      description: 'SHA-512はSHA-2シリーズで最も長い標準アルゴリズムで、512ビット（64バイト）のハッシュ値を生成します。',
      usage: '最高レベルのセキュリティが必要なアプリケーション',
      security: '最高レベルのセキュリティを提供し、既知の有効な攻撃はありません。'
    },
    sha512_224: {
      name: 'SHA-512/224 (224ビット)',
      description: 'SHA-512/224はSHA-512の変種で、出力が224ビットに切り詰められています。',
      usage: 'SHA-224と同じ長さだがSHA-512の内部構造に基づくハッシュを提供',
      security: '長いデータに対してより良いパフォーマンスを持ち、強力なセキュリティを維持します'
    },
    sha512_256: {
      name: 'SHA-512/256 (256ビット)',
      description: 'SHA-512/256はSHA-512の変種で、出力が256ビットに切り詰められています。',
      usage: '64ビットシステムでSHA-256よりも良いパフォーマンスを提供',
      security: 'SHA-256と同等のセキュリティを持ちますが、特定のハードウェアでより効率的です'
    },
    sha3_224: {
      name: 'SHA3-224 (224ビット)',
      description: 'SHA3-224はSHA-3標準の一部で、224ビットの出力を提供します。',
      usage: '量子コンピューティングに対する耐性が必要な中程度のセキュリティシナリオに適しています',
      security: 'NISTが認証した安全なハッシュアルゴリズムで、優れたセキュリティ保証を提供します'
    },
    sha3_256: {
      name: 'SHA3-256 (256ビット)',
      description: 'SHA3-256はSHA-3標準の一部で、SHA-2シリーズとは完全に異なる内部構造を持っています。',
      usage: '量子コンピューティングの脅威に対する耐性を持つ長期的なセキュリティアプリケーション',
      security: '量子コンピューティング攻撃を含む将来の潜在的な攻撃に対する耐性を持つように設計されています。'
    },
    sha3_384: {
      name: 'SHA3-384 (384ビット)',
      description: 'SHA3-384はSHA-3標準の一部で、384ビットの出力を提供します。',
      usage: '高いセキュリティと量子コンピューティングに対する耐性が必要なシナリオに適しています',
      security: 'SHA3-256よりも強力なセキュリティを提供し、機密データアプリケーションに適しています'
    },
    sha3_512: {
      name: 'SHA3-512 (512ビット)',
      description: 'SHA3-512はSHA-3標準で最高レベルのセキュリティを提供するアルゴリズムです。',
      usage: '極めて高いセキュリティと量子コンピューティングに対する耐性が必要なシナリオ',
      security: '最高レベルのセキュリティ保証を提供し、SHA-3シリーズで最も安全なアルゴリズムです。'
    },
    sm3: {
      name: 'SM3 (256ビット)',
      description: 'SM3は中国国家暗号管理局が発表した暗号学的ハッシュアルゴリズム標準で、256ビットの出力を生成します。',
      usage: '中国の商用暗号アプリケーション、デジタル証明書、電子政府システム',
      security: 'SHA-2に似た設計ですが、攻撃に対する耐性が最適化されており、中国で広く使用されています'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160ビット)',
      description: 'RIPEMD-160は欧州RIPEプロジェクトによって開発されたハッシュ関数で、160ビットのハッシュ値を生成します。',
      usage: 'ビットコインアドレス生成、ブロックチェーンアプリケーション',
      security: '同じ長さのSHA-1よりも安全ですが、使用頻度は低いです。'
    },
    crc32: {
      name: 'CRC32 (32ビット)',
      description: 'CRC32は巡回冗長検査関数で、エラー検出によく使用されます。',
      usage: 'データ整合性チェック、ネットワーク通信、データ転送検証',
      security: '暗号学的セキュリティシナリオには適していません。主にエラー検出用であり、セキュリティ保護用ではありません'
    },
    murmur3_x86_32: {
      name: 'MurmurHash3 x86 (32ビット)',
      description: 'MurmurHash3は高性能と低衝突率で知られる非暗号学的ハッシュ関数で、32ビット版はスピードと空間効率が必要なアプリケーションに適しています。',
      usage: 'ハッシュテーブル、ブルームフィルター、キャッシュシステム、データシャーディング',
      security: '非暗号化アルゴリズムでセキュリティアプリケーションには適していませんが、パフォーマンスが重要なシナリオでは優れた性能を発揮します'
    },
    murmur3_x86_128: {
      name: 'MurmurHash3 x86 (128ビット)',
      description: 'MurmurHash3の128ビットバリアントで、より大きなハッシュ空間と低い衝突確率を提供し、大規模データセットに適しています。',
      usage: '大規模ハッシュテーブル、データ重複排除、分散システムでの一貫性ハッシュ、コンテンツアドレス可能ストレージ',
      security: '32ビット版と同様に非暗号化アルゴリズムですが、衝突確率が低く、高い一意性が必要なアプリケーションシナリオに適しています'
    },
    murmur3_x64_128: {
      name: 'MurmurHash3 x64 (128ビット)',
      description: 'MurmurHash3の128ビットバリアントで、より大きなハッシュ空間と低い衝突確率を提供し、大規模データセットに適しています。',
      usage: '大規模ハッシュテーブル、データ重複排除、分散システムでの一貫性ハッシュ、コンテンツアドレス可能ストレージ',
      security: '32ビット版と同様に非暗号化アルゴリズムですが、衝突確率が低く、高い一意性が必要なアプリケーションシナリオに適しています'
    },
    blake2b: {
      name: 'BLAKE2b (512ビット)',
      description: 'BLAKE2bは現代のCPUアーキテクチャ向けに最適化された高速で安全なハッシュ関数です。',
      usage: '大規模データ処理、ハッシュテーブル、文字列比較',
      security: 'スピードと良好なハッシュ分布を目標に設計されていますが、暗号学的安全性は保証されていません'
    },
    blake2s: {
      name: 'BLAKE2s (256ビット)',
      description: 'BLAKE2sは現代のCPUアーキテクチャ向けに最適化された高速で安全なハッシュ関数です。',
      usage: '大規模データ処理、ハッシュテーブル、文字列比較',
      security: 'スピードと良好なハッシュ分布を目標に設計されていますが、暗号学的安全性は保証されていません'
    },
    blake3: {
      name: 'BLAKE3 (256ビット)',
      description: 'BLAKE3は現代のCPUアーキテクチャ向けに最適化された高速で安全なハッシュ関数です。',
      usage: '大規模データ処理、ハッシュテーブル、文字列比較',
      security: 'スピードと良好なハッシュ分布を目標に設計されていますが、暗号学的安全性は保証されていません'
    },
    keccak224: {
      name: 'Keccak-224 (224ビット)',
      description: 'Keccak-224はSHA-3の元のアルゴリズムで、224ビットのハッシュ値を生成します。',
      usage: 'イーサリアムやその他のブロックチェーンアプリケーション、暗号システム',
      security: '強力なセキュリティを提供し、標準化されたSHA-3バリアントよりもブロックチェーン技術でより一般的に使用されています'
    },
    keccak256: {
      name: 'Keccak-256 (256ビット)',
      description: 'Keccak-256はKeccakシリーズで最も広く使用されているバリアントで、256ビットのハッシュ値を生成します。',
      usage: 'イーサリアムスマートコントラクト、ブロックチェーントランザクション、デジタル署名',
      security: 'ブロックチェーンアプリケーションで広く信頼されており、標準化されたSHA3-256とは若干異なります'
    },
    keccak384: {
      name: 'Keccak-384 (384ビット)',
      description: 'Keccak-384はKeccakシリーズのバリアントで、384ビットのハッシュ値を生成します。',
      usage: 'Keccak-256よりも高いセキュリティが必要なアプリケーション',
      security: '非常に強力なセキュリティ保証を提供しますが、Keccak-256よりも使用頻度は低いです'
    },
    keccak512: {
      name: 'Keccak-512 (512ビット)',
      description: 'Keccak-512はKeccakシリーズで最も長い標準アルゴリズムで、512ビットのハッシュ値を生成します。',
      usage: '最大の衝突耐性が必要な高セキュリティアプリケーション',
      security: 'Keccakシリーズで最高のセキュリティレベルを提供し、最も機密性の高いデータに適しています'
    },
    shake128: {
      name: 'SHAKE128 (128ビット)',
      description: 'SHAKE128はSHA-3ファミリーの一部で、可変長の出力を生成でき、デフォルトでは256ビットのハッシュ値を生成します。',
      usage: '可変長出力が必要な暗号アプリケーション、鍵導出関数',
      security: '優れたセキュリティを提供し、NISTが認めた安全なハッシュアルゴリズムです'
    },
    shake256: {
      name: 'SHAKE256 (256ビット)',
      description: 'SHAKE256はSHA-3ファミリーの一部で、可変長の出力を生成でき、デフォルトでは512ビットのハッシュ値を生成します。',
      usage: 'より長いハッシュ出力が必要な高セキュリティアプリケーション',
      security: 'SHAKE128よりも強力なセキュリティ保証を提供し、機密データアプリケーションに適しています'
    },
    cshake128: {
      name: 'cSHAKE128 (カスタマイズ可能な可変長出力)',
      description: 'cSHAKE128はSHAKE128のカスタマイズ可能なバージョンで、カスタム文字列と関数名をサポートし、可変長の出力を生成できます。',
      usage: 'カスタムパラメータが必要なハッシュアルゴリズムシナリオ、NIST標準の鍵導出関数、暗号プロトコル',
      security: 'SHAKE128と同等のセキュリティを提供しながら、アプリケーションレベルのカスタマイズをサポートします'
    },
    cshake256: {
      name: 'cSHAKE256 (カスタマイズ可能な可変長出力)',
      description: 'cSHAKE256はSHAKE256のカスタマイズ可能なバージョンで、カスタム文字列と関数名をサポートし、可変長の出力を生成できます。',
      usage: '高セキュリティ要件のあるカスタムハッシュシナリオ、NIST認証の導出関数、暗号プロトコル',
      security: 'SHAKE256と同等の強力なセキュリティ保証を提供しながら、アプリケーションレベルのパラメータ化カスタマイズを可能にします'
    },
  },

  listGroups: {
    common: '一般的なアルゴリズム',
    sha2: 'SHA-2シリーズ',
    sha3: 'SHA-3シリーズ',
    other: 'その他のアルゴリズム'
  },

  metaTitle: 'オンラインハッシュ計算ツール - 暗号ハッシュ値の生成と検証',
  metaDescription: 'テキストやファイルの暗号ハッシュ値を生成・検証する無料のオンラインハッシュ計算ツール。{algorithms}を含む多数のアルゴリズムをサポート。'
};