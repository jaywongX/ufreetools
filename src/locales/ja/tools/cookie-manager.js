export default {
    name: 'Cookieマネージャー',
    description: '現在のウェブサイトのCookieを表示、作成、編集および削除',
  
    // 主要機能タブ
    currentCookies: '現在のCookie',
    createCookie: 'Cookieを作成',
    importExport: 'インポート／エクスポート',
  
    // Cookie一覧
    noCookies: '現在、このウェブサイトにはCookieがありません',
    cookieName: '名前',
    cookieValue: '値',
    cookieDomain: 'ドメイン',
    cookiePath: 'パス',
    cookieExpires: '有効期限',
    cookieSecure: 'セキュア(Secure)',
    cookieHttpOnly: 'HttpOnly',
    cookieSameSite: 'SameSite',
    actions: '操作',
    edit: '編集',
    delete: '削除',
    save: '保存',
    cancel: 'キャンセル',
    refresh: '更新',
  
    // 作成・編集フォーム
    addCookie: 'Cookieを追加',
    editCookie: 'Cookieを編集',
    required: '必須項目',
    optional: 'オプション項目',
    days: '日',
    hours: '時間',
    minutes: '分',
    cookieCreated: 'Cookieを作成しました',
    cookieUpdated: 'Cookieを更新しました',
    cookieDeleted: 'Cookieを削除しました',
    createError: 'Cookie作成中にエラーが発生しました',
    updateError: 'Cookie更新中にエラーが発生しました',
    deleteError: 'Cookie削除中にエラーが発生しました',
  
    // インポート・エクスポート
    export: 'Cookieをエクスポート',
    import: 'Cookieをインポート',
    exportAs: 'エクスポート形式',
    exportSuccess: 'Cookieをエクスポートしました',
    importSuccess: '{count}個のCookieをインポートしました',
    importError: 'Cookieのインポート中にエラーが発生しました',
  
    // セキュリティオプション
    none: 'なし',
    strict: '厳格',
    lax: '緩やか',
  
    // ヒントと説明
    domainNote: '空欄にすると現在のドメインを使用します',
    pathNote: 'デフォルトはルートパス"/"です',
    expiresNote: '設定しない場合はセッションCookieになります',
    secureNote: 'HTTPS経由でのみ送信されます',
    httpOnlyNote: 'JavaScriptからのアクセス不可',
    sameSiteNote: 'クロスサイト要求制御',
  
    // インポート形式
    importFormat: 'インポート例:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',
    jsonFormat: 'JSON形式',
    textFormat: 'テキスト形式',
    invalidFormat: '無効な形式です',
  
    // 記事コンテンツ
    article: {
      title: 'Cookieマネージャー：ウェブサイトCookieの理解と管理',
      features: {
        title: '機能と利用シーン',
        description: '私たちの<strong>Cookieマネージャー</strong>ツールは、ウェブサイトCookieに対する包括的なコントロールを提供し、現在のウェブサイトのCookieを表示、作成、編集、削除できるようにします。この強力なツールによりブラウザに保存されているCookieに対して完全な可視性とコントロールを獲得でき、オンライン上のプライバシーやウェブサイトの機能問題を管理するのに役立ちます。',
        useCasesTitle: '実際の利用ケース',
        useCases: {
          items: [
            '<strong>Web開発テスト</strong>：手動でブラウザの保存データを編集することなく、異なるCookie設定下でのウェブサイト挙動をテストできます。',
            '<strong>ウェブサイトトラブルシューティング</strong>：Cookieの確認および編集を通じて、ログイン問題やセッション問題などのCookie関連の障害を診断できます。',
            '<strong>プライバシー管理</strong>：ウェブサイトがCookieに保存している情報を確認し、不要なトラッキングCookieを選択的に削除して個人データを管理できます。',
            '<strong>セッション管理</strong>：セッションCookieの作成や編集により、何度もログインやログアウトをすることなく異なるユーザーステータスや認証シナリオをテストできます。',
            '<strong>ブラウザ間テスト</strong>：あるブラウザからCookieをエクスポートし、別のブラウザへインポートすることで、複数のブラウザ間で同じ閲覧ステータスを複製できます。'
          ]
        }
      },
      faq: {
        title: 'よくある質問',
        items: [
          {
            question: 'Cookieとは何ですか？なぜウェブサイトはそれを使うのですか？',
            answer: 'Cookieとはウェブサイトがあなたのブラウザに保存する小さなデータの塊です。ログイン情報の記憶、ユーザー行動の追跡、設定の保存、ショッピングカートの維持、パーソナライズされた体験の提供などさまざまな目的があります。多くの現代ウェブ機能にとってCookieは重要ですが、追跡用途としてはプライバシーに関する懸念も存在します。'
          },
          {
            question: 'Cookieマネージャーツールとブラウザ内蔵のCookie設定の違いは何ですか？',
            answer: 'ブラウザはその設定メニューから基本的なCookie管理を提供しますが、私たちの<strong>Cookieマネージャー</strong>はより詳細な制御と機能を提供します。Cookieの表示や削除といったブラウザが提供する基本機能に加えて、新規Cookieの作成、既存Cookieの編集、バックアップ用Cookieのエクスポート、Cookieのインポートなどが可能です。これは詳細なCookie管理が必要な開発者、テスター、プライバシー意識が高いユーザーに最適です。'
          },
          {
            question: 'Cookieを削除するのは安全ですか？私のブラウジング体験に影響しますか？',
            answer: 'Cookieを削除することは通常安全ですが、いくつかの方法であなたのブラウジング体験に影響することがあります。あなたはウェブサイトからログアウトしたり、保存されていた設定を失ったり、ショッピングカートを再構築する必要があるかもしれません。<strong>Cookieマネージャー</strong>ではすべてのCookieをクリアせず特定のCookieだけを選択的に削除できるため、どのブラウジングデータを残すか削除するかを正確に制御できます。'
          },
          {
            question: '"SameSite"や"HttpOnly"などの異なるCookie属性は何を意味しますか？',
            answer: 'Cookie属性はCookieの動作やアクセス方法を制御します：<br>- <strong>Secure</strong>：CookieはHTTPS接続時のみ送信されます<br>- <strong>HttpOnly</strong>：JavaScriptによるCookieへのアクセスを禁止します<br>- <strong>SameSite</strong>：クロスサイト要求時にCookieを送信するタイミングの制御（None、LaxまたはStrict）<br>- <strong>Domain</strong>：どのドメインがCookieを受け取れるか指定します<br>- <strong>Path</strong>：Cookieを特定のパスに限定します<br>- <strong>Expires</strong>：ブラウザがCookieを削除すべき時期を設定します'
          },
          {
            question: '私はこのツールを使って他のコンピューターまたはブラウザからCookieをインポートできますか？',
            answer: 'はい、<strong>Cookieマネージャー</strong>のインポート／エクスポート機能により、ブラウザ間や端末間でCookieを転送できます。あなたのCookieをJSONまたはテキストファイルとしてエクスポートし、それを他の端末に移動させて、その端末のCookieマネージャーツールからインポートできます。これはユーザー状態を複製したい開発者や、複数のコンピュータ間でブラウジングセッションを転送したい場合に特に便利です。'
          }
        ]
      },
      guide: {
        title: 'Cookieマネージャーツールの使い方ガイド',
        step1: {
          title: '現在のCookieを確認',
          description: '<strong>Cookieマネージャー</strong>を開くと、「現在のCookie」タブに現在のウェブサイトの全Cookieが表示されます。この一覧には各Cookieの名前、値、有効期限が表示されます。特定のCookieについてさらに詳しい情報を確認するには横にある「編集」ボタンをクリックしてください。「リフレッシュ」ボタンをクリックすれば最新のCookie情報をリストに反映できます。'
        },
        step2: {
          title: '新しいCookieを作成',
          description: '新規Cookieを追加するには「Cookieを作成」タブをクリックします。必須項目（名前と値）および任意の属性（ドメインやパス、有効期限など）を入力します。必要に応じてSecureフラグやSameSiteプロパティなどのセキュリティオプションを設定してください。Cookieの設定が完了したら「保存」ボタンを押して作成します。ツールは作成成功を通知し、自動的にCookie一覧画面に戻ります。'
        },
        step3: {
          title: '既存のCookieを編集',
          description: 'Cookieを変更するには、「現在のCookie」一覧から該当するCookieを見つけ「編集」ボタンをクリックします。これによりCookieの詳細情報が編集フォームに読み込まれます。Cookieのあらゆるプロパティを必要なように変更できます。「保存」をクリックしてCookieを更新します。ツールは更新成功を通知します。なお、Cookieの編集は実際には同じ名前の新たなCookieを作成しています。'
        },
        step4: {
          title: 'Cookieを削除',
          description: 'Cookieを削除するには、「現在のCookie」一覧から該当するCookieを見つけ「削除」ボタンをクリックします。誤って削除するのを防ぐために確認ダイアログが表示されます。確認後、Cookieは直ちにブラウザから削除され、一覧は自動的に更新されます。これによりウェブサイトがあなたのブラウザに保存できるデータを完全に制御できます。'
        },
        step5: {
          title: 'Cookieのインポートとエクスポート',
          description: 'Cookieを転送するには「インポート／エクスポート」タブに移動します。エクスポートの場合、構造化されたデータに強いJSON形式または互換性に優れたテキスト形式を選びます。対応するボタンをクリックしてファイルをダウンロードします。インポートの場合はCookieデータをテキストエリアに貼り付け「インポート」をクリックします。標準的なテキスト形式またはJSON形式でCookieをインポートできます。ツールはインポート成功を通知し、インポートしたCookie数を表示します。'
        }
      },
      conclusion: '<strong>Cookieマネージャー</strong>ツールはブラウザのCookieに対する完全な制御権を提供します。ウェブサイトの機能をテストする開発者でも、自分のデータを管理するプライバシー重視のユーザーでも、あるいはウェブサイトの問題を解決する人でも、Cookieを理解し積極的に管理することで、ブラウジング体験を向上させながらオンラインプライバシーを維持できます。'
    }
  }