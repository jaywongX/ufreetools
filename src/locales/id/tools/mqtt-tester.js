export default {
  name: 'Alat Uji MQTT',
  description: 'Uji dan debug koneksi MQTT, publikasi pesan dan subskripsi topik',

  connection: {
    title: 'Koneksi',
    broker: 'Port Broker',
    url: 'URL Broker',
    urlPlaceholder: 'Contoh: mqtt://broker.example.com:1883',
    clientId: 'ID Klien',
    clientIdPlaceholder: 'Masukkan ID klien atau biarkan kosong untuk generate otomatis',
    username: 'Username',
    password: 'Password',
    keepAlive: 'Keep Alive',
    cleanSession: 'Sesi Bersih',
    autoReconnect: 'Reconnect Otomatis',
    ssl: 'Gunakan SSL/TLS',
    sslOptions: 'Opsi SSL/TLS',
    protocol: 'Versi Protokol',
    portInfo: 'Port default: MQTT(1883), WebSocket(8083)',
    connect: 'Hubungkan',
    disconnect: 'Putuskan',
    status: 'Status',
    connected: 'Terhubung',
    disconnected: 'Terputus',
    connecting: 'Menghubungkan...'
  },

  publish: {
    title: 'Publikasi',
    topic: 'Topik',
    topicPlaceholder: 'Masukkan topik untuk dipublikasikan',
    message: 'Pesan',
    messagePlaceholder: 'Masukkan konten pesan',
    qos: 'Kualitas Layanan (QoS)',
    retain: 'Retain',
    format: 'Format Konten',
    text: 'Teks',
    json: 'JSON',
    hex: 'Heksadesimal',
    binary: 'Biner',
    send: 'Publikasikan',
    clear: 'Bersihkan',
    history: 'Riwayat',
    addToFavorites: 'Tambahkan ke Favorit',
    validateJson: 'Validasi JSON'
  },

  subscribe: {
    title: 'Subskripsi',
    topic: 'Topik',
    topicPlaceholder: 'Masukkan topik untuk disubskripsi (dukung wildcard # dan +)',
    qos: 'Kualitas Layanan (QoS)',
    subscribe: 'Subscribe',
    unsubscribe: 'Unsubscribe',
    unsubscribeAll: 'Unsubscribe Semua',
    subscriptions: 'Subskripsi Aktif',
    noSubscriptions: 'Tidak ada subskripsi aktif',
    addSubscription: 'Tambah Subskripsi',
    topicPatterns: 'Pola Topik',
    systemTopics: 'Topik Sistem'
  },

  messages: {
    title: 'Pesan',
    received: 'Pesan Diterima',
    sent: 'Pesan Terkirim',
    topic: 'Topik',
    payload: 'Payload',
    qos: 'QoS',
    retained: 'Retained',
    time: 'Waktu',
    clear: 'Bersihkan Pesan',
    export: 'Ekspor Pesan',
    filter: 'Filter',
    noMessages: 'Tidak ada pesan',
    view: 'Lihat Detail',
    copy: 'Salin Payload',
    duplicate: 'Duplikat sebagai Publikasi'
  },

  tools: {
    title: 'Alat',
    topicGenerator: 'Generator Topik',
    payloadFormatter: 'Formatter Payload',
    qosExplainer: 'Penjelas QoS',
    wildcardTester: 'Penguji Wildcard',
    packetInspector: 'Inspektor Paket',
    loadTest: 'Uji Beban'
  },

  settings: {
    title: 'Pengaturan',
    maxMessages: 'Maksimal Pesan',
    timeFormat: 'Format Waktu',
    theme: 'Tema',
    autoExpand: 'Otomatis Buka Pesan',
    saveHistory: 'Simpan Riwayat',
    clearOnDisconnect: 'Bersihkan saat Terputus',
    advanced: 'Pengaturan Lanjut',
    lastWill: 'Pesan Wasiat'
  },

  lastWill: {
    title: 'Wasiat',
    enable: 'Aktifkan Wasiat',
    topic: 'Topik Wasiat',
    message: 'Pesan Wasiat',
    qos: 'QoS Wasiat',
    retain: 'Retain Wasiat'
  },

  notifications: {
    connectSuccess: 'Terhubung ke {broker}',
    connectError: 'Error koneksi: {error}',
    disconnected: 'Terputus dari broker',
    subscribeSuccess: 'Berlangganan {topic}',
    subscribeError: 'Gagal subscribe: {error}',
    unsubscribeSuccess: 'Berhenti berlangganan {topic}',
    publishSuccess: 'Pesan terkirim ke {topic}',
    publishError: 'Gagal publikasi: {error}',
    invalidJson: 'Payload JSON tidak valid',
    packetReceived: 'Menerima {packets} paket'
  }
};