export default {
  name: 'HTTPヘッダーセキュリティチェッカー',
  description: 'HTTPレスポンスヘッダーのセキュリティを分析・評価',
  title: 'HTTPヘッダーセキュリティ検出ツール',
  intro: 'ウェブサイトのHTTPレスポンスヘッダーを分析し、CSP、HSTSなどのセキュリティ設定を検出して改善提案を提供',
  input: {
    title: 'URLまたはヘッダーを入力',
    url: 'URL',
    urlPlaceholder: '確認するURLを入力（例：https://example.com）',
    headers: 'または直接HTTPヘッダーを貼り付け',
    headersPlaceholder: 'ここに生のHTTPヘッダーを貼り付け...',
    options: 'スキャンオプション',
    followRedirects: 'リダイレクトに従う',
    includeSubresources: 'サブリソースを確認（CSS、JSなど）',
    timeout: 'タイムアウト（秒）',
    checkButton: 'ヘッダーを確認',
    analyzing: '分析中...'
  },
  results: {
    title: 'セキュリティヘッダー分析',
    overview: '概要',
    score: 'セキュリティスコア',
    totalScore: '合計100点',
    scanned: 'スキャンしたURL',
    date: 'スキャン日',
    headers: {
      title: '検出されたヘッダー',
      name: 'ヘッダー',
      value: '値',
      status: 'ステータス'
    },
    allHeaders: {
      title: 'すべてのレスポンスヘッダー',
      name: '名前',
      value: '値',
      noData: 'レスポンスヘッダーデータなし'
    },
    missing: {
      title: '不足しているセキュリティヘッダー',
      description: '以下の推奨セキュリティヘッダーが見つかりませんでした：'
    },
    issues: {
      title: 'セキュリティ問題',
      critical: '重大',
      high: '高',
      medium: '中',
      low: '低',
      info: '情報'
    },
    recommendations: {
      title: '推奨事項',
      description: 'セキュリティを向上させるために以下のヘッダーの追加を検討してください：',
      example: '設定例'
    },
    rating: {
      unknown: '不明',
      excellent: '優秀',
      good: '良好',
      fair: '普通',
      poor: '不十分',
      high_risk: 'リスク高',
      descriptions: {
        unknown: 'ウェブサイトのセキュリティヘッダー情報を取得できません',
        excellent: 'ウェブサイトはすべての主要なセキュリティヘッダーを実装しています',
        good: 'ウェブサイトはほとんどの重要なセキュリティヘッダーを実装しています',
        fair: 'ウェブサイトはいくつかの重要なセキュリティヘッダーが不足しています',
        poor: 'ウェブサイトは複数の重要なセキュリティヘッダーが不足しています',
        high_risk: 'ウェブサイトはほとんどセキュリティヘッダー保護対策を実装していません'
      }
    }
  },
  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'HTTPではなくHTTPS接続の使用を強制',
      recommendation: '"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"を追加',
      status: {
        good: '正しく設定されています',
        bad: '設定されていません',
        warning: '設定は改善可能です'
      },
      recommendationConfigured: '既存の設定が実装されています。十分な長さのmax-ageとincludeSubDomainsが含まれていることを確認してください',
      recommendationMissing: 'すべての通信がHTTPSを介して行われるようにHSTSを有効にすることをお勧めします'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'MIMEタイプスニッフィングを防止',
      recommendation: '"X-Content-Type-Options: nosniff"を追加',
      status: {
        good: '正しく設定されています',
        bad: '設定されていないか、正しく設定されていません'
      },
      recommendationConfigured: '設定は正しいです。現在の設定を維持してください',
      recommendationMissing: 'このヘッダーを"nosniff"値に設定することをお勧めします'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'ウェブサイトがiframe内に埋め込まれるのを防止し、クリックジャッキング攻撃を防止',
      recommendation: '"X-Frame-Options: DENY"または"SAMEORIGIN"を追加',
      status: {
        good: '設定されています',
        bad: '設定されていません'
      },
      recommendationConfigured: '既存の設定が実装されています。DENYまたはSAMEORIGINの使用をお勧めします',
      recommendationMissing: 'クリックジャッキングを防止するために、このヘッダーをDENYまたはSAMEORIGINに設定することをお勧めします'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'ユーザーエージェントが読み込むことを許可するリソースを制御',
      recommendation: '適切な指令を含むContent-Security-Policyヘッダーを追加',
      status: {
        good: '正しく設定されています',
        bad: '設定されていません',
        warning: '設定は改善可能です'
      },
      recommendationConfigured: '既存の設定が実装されています。ポリシーを定期的に監査および更新するようにしてください',
      recommendationMissing: '読み込み可能なリソースのソースを制限し、XSS攻撃に対する防御能力を高めるためにCSPを設定することをお勧めします'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'このヘッダーは古いブラウザでXSSフィルタリングを有効にします。最新のブラウザでは、代わりにCSPを使用することをお勧めします。',
      recommendation: 'このヘッダーは最新のブラウザではCSPに置き換えられていますが、古いブラウザとの互換性のために"1; mode=block"に設定することをお勧めします',
      status: {
        enabled: '有効',
        disabled: '無効',
        notConfigured: '設定されていません（最新のブラウザではCSPの使用が推奨されます）'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Refererヘッダーに含まれる情報を制御',
      recommendation: '"Referrer-Policy: no-referrer-when-downgrade"またはより厳格なポリシーを追加',
      status: {
        good: '設定されています',
        bad: '設定されていません'
      },
      recommendationConfigured: '既存の設定が実装されています。strict-originまたはstrict-origin-when-cross-originの使用をお勧めします',
      recommendationMissing: '参照元情報の伝達を制御するためにこのヘッダーを設定することをお勧めします'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: '使用できるブラウザ機能とAPIを制御',
      recommendation: '適切な制限を含むPermissions-Policyヘッダーを追加',
      status: {
        good: '設定されています',
        bad: '設定されていません'
      },
      recommendationConfigured: '既存の設定が実装されています。不要な機能を制限するようにしてください',
      recommendationMissing: 'ウェブサイトが使用できるブラウザ機能を制限するためにこのヘッダーを設定することをお勧めします'
    }
  },
  status: {
    good: '良好',
    warning: '警告',
    bad: '不良',
    info: '情報',
    notApplicable: '適用外'
  },
  actions: {
    export: 'レポートをエクスポート',
    copyHeaders: 'ヘッダーをコピー',
    copyRecommendations: '推奨事項をコピー',
    scan: '新規スキャン',
    share: '結果を共有',
    analyze: 'ヘッダー情報を分析'
  },
  emptyState: {
    line1: 'ウェブサイトのURLを入力して、HTTPレスポンスヘッダーのセキュリティ設定を分析',
    line2: 'CSP、HSTSなどのセキュリティヘッダーに関する詳細な評価と推奨事項を取得'
  },
  messages: {
    scanning: '{url}をスキャン中...',
    completed: 'スキャン完了',
    error: 'エラー：{message}',
    timeout: 'リクエストがタイムアウトしました',
    invalidUrl: '無効なURL',
    invalidUrlFormat: 'http://またはhttps://で始まる有効なURLを入力してください',
    copied: 'クリップボードにコピーしました',
    exportComplete: 'レポートのエクスポートが成功しました',
    httpWarning: '警告：HTTPの使用は安全でない可能性があります',
    noHeaders: 'ヘッダー情報が見つかりませんでした',
    fetchError: 'ヘッダー情報を取得できません: {error}'
  },
  article: {
    title: "HTTPヘッダーセキュリティチェッカー：あなたのウェブサイトのセキュリティ状態を強化",
    features: {
      title: "HTTPヘッダーセキュリティについて理解する",
      description: "<strong>HTTPヘッダーセキュリティチェッカー</strong>は、任意のウェブサイトの<strong>セキュリティヘッダー</strong>を分析・評価するために特別に設計されたツールです。<strong>セキュリティヘッダー</strong>は、サーバーが設定できる特別なHTTPレスポンスヘッダーで、クロスサイトスクリプティング（XSS）、クリックジャッキング、その他のコード注入攻撃などの一般的なWeb脆弱性から防御するのに役立ち、追加の<strong>セキュリティ</strong>層を提供します。<br><br>当ツールは、コンテンツセキュリティポリシー（CSP）、Strict Transport Security（HSTS）、X-Content-Type-Options、X-Frame-Optionsなどの重要な<strong>セキュリティヘッダー</strong>をスキャンします。既存の<strong>ヘッダー設定</strong>を評価し、不足している<strong>セキュリティヘッダー</strong>を特定し、ウェブサイトの<strong>セキュリティ状態</strong>を改善するための包括的な<strong>セキュリティスコア</strong>と実行可能な推奨事項を提供します。",
      useCases: {
        title: "HTTPヘッダーセキュリティチェッカーの一般的なユースケース",
        items: [
          "Web開発者が新しく開発したウェブサイトをデプロイ前にセキュリティ監査する",
          "セキュリティ専門家が侵入テストと脆弱性評価を実行する",
          "システム管理者が複数のドメインにわたるサーバーセキュリティ設定を検証する",
          "DevOpsチームがCI/CDパイプラインで継続的なセキュリティモニタリングを実装する",
          "ウェブサイト所有者が推奨ヘッダーを実装した後にセキュリティ状態を検証する",
          "セキュリティコンサルタントがクライアントにセキュリティ対策改善の必要性を示す",
          "コンプライアンス担当者がウェブサイトが業界セキュリティ基準と規制に準拠していることを確認する"
        ]
      }
    },
    faq: {
      title: "HTTPヘッダーセキュリティに関するよくある質問",
      items: [
        {
          question: "HTTPセキュリティヘッダーとは何ですか？なぜそれらが重要なのですか？",
          answer: "HTTPセキュリティヘッダーは、サーバーからブラウザに送信される特別な指示で、ブラウザがウェブサイトのコンテンツを処理する際にどのように動作すべきかを制御します。これらは、XSS、CSRF、クリックジャッキング、コード注入攻撃などの一般的なWeb脆弱性から防御するための追加のセキュリティ層を提供するため、非常に重要です。正しく設定されたセキュリティヘッダーは、最小限の労力でウェブサイトのセキュリティ状態を大幅に強化できます。"
        },
        {
          question: "すべてのウェブサイトで実装すべきセキュリティヘッダーは何ですか？",
          answer: "少なくとも、すべての現代的なウェブサイトは以下を実装すべきです：XSS攻撃を防ぐためのコンテンツセキュリティポリシー（CSP）、HTTPSの使用を強制するStrict Transport Security（HSTS）、MIMEタイプスニッフィングを防ぐX-Content-Type-Options、クリックジャッキングを防ぐX-Frame-Options、リファラーヘッダーの情報を制御するReferrer-Policy。当セキュリティヘッダーチェッカーは、これらの必須ヘッダーとその他を自動的に評価します。"
        },
        {
          question: "セキュリティスコアはどのように計算されますか？",
          answer: "セキュリティスコアは、重要なセキュリティヘッダーの存在と正しい設定に基づいて計算されます。コンテンツセキュリティポリシーやHSTSなどの主要なセキュリティヘッダーはそれぞれ最大20ポイントを貢献し、X-Content-Type-OptionsやX-Frame-Optionsなどの他のヘッダーはそれぞれ10〜15ポイントを貢献します。また、単にヘッダーの存在だけでなく、実装の質も評価し、最高スコアは100点です。"
        },
        {
          question: "このツールを使って自分が所有していないウェブサイトを確認できますか？",
          answer: "はい、HTTPヘッダーセキュリティチェッカーを使用して、公開されているどのウェブサイトでも分析できます。このツールはHTTPレスポンスヘッダーのみを確認し、これはWebサーバーが送信する公開情報です。ただし、主に自分が所有しているか、テストする権限を持っているウェブサイトで使用することをお勧めします。"
        },
        {
          question: "このツールが推奨するセキュリティヘッダーをどのように実装すればよいですか？",
          answer: "実装はWebサーバーまたはプラットフォームによって異なります。Apacheの場合、.htaccessファイルにヘッダーを追加できます。Nginxの場合、サーバー設定に追加できます。多くのコンテンツ管理システムにはセキュリティヘッダープラグインがあります。HTTPヘッダーセキュリティチェッカーは設定例を提供しており、特定の環境に合わせて調整できます。"
        }
      ]
    },
    guide: {
      title: "HTTPヘッダーセキュリティチェッカーの使用方法",
      steps: [
        "URL入力フィールドに確認したいウェブサイトの完全なURLを入力します（http://またはhttps://を含める必要があります）",
        "高度な確認のために、ウェブサイトがリダイレクトを使用している場合は、'リダイレクトに従う'などのオプションを有効にすることを検討してください",
        "'ヘッダーを確認'ボタンをクリックしてセキュリティ分析を開始します",
        "結果セクションの上部でセキュリティスコアと全体的な評価を確認します",
        "検出されたセキュリティヘッダーの詳細分析を確認します。各ヘッダーにはステータス表示（良好、警告、不良）が付いています",
        "任意のセキュリティヘッダーをクリックして展開し、現在の値、用途、具体的な推奨事項などの詳細を表示します",
        "'すべてのレスポンスヘッダー'セクションで、サーバーが返したすべてのHTTPレスポンスヘッダーの完全なリストを確認します",
        "提供された推奨事項に基づいて、Webサーバーに推奨されるセキュリティヘッダーを実装し、改善を検証するためにチェッカーを再度実行します"
      ]
    },
    conclusion: "ウェブサイトのセキュリティヘッダーを定期的に確認し更新することは、Webセキュリティメンテナンスの基本的な実践です。HTTPヘッダーセキュリティチェッカーを使用すると、現在の設定の弱点を簡単に特定し、一般的なWeb攻撃に対する防御を強化するために必要な改善を実装できます。セキュリティヘッダーは包括的なセキュリティ戦略の一側面に過ぎませんが、比較的少ない実装労力で大きな保護を提供することを覚えておいてください。"
  }
}