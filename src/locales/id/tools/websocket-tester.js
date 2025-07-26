export default {
  name: 'Penguji WebSocket',
  description: 'Terhubung ke server WebSocket, kirim pesan dan lihat respons',

  connection: {
    url: 'URL WebSocket',
    urlPlaceholder: 'Contoh: ws://echo.websocket.org',
    protocol: 'Subprotokol (opsional)',
    protocolPlaceholder: 'Pisahkan dengan koma',
    connect: 'Hubungkan',
    disconnect: 'Putuskan',
    status: 'Status Koneksi',
    connected: 'Terhubung',
    disconnected: 'Terputus',
    waiting: 'Menunggu koneksi',
    autoReconnect: 'Sambung Ulang Otomatis',
    reconnectMessage: 'Akan mencoba menyambung ulang dalam {0} detik...'
  },

  options: {
    title: 'Opsi',
    autoScroll: 'Gulir Otomatis Log'
  },

  messages: {
    send: 'Kirim Pesan',
    logs: 'Log Pesan',
    emptyLogs: 'Pesan setelah terhubung akan muncul di sini',
    placeholder: 'Masukkan pesan untuk dikirim...',
    sendButton: 'Kirim',
    clearButton: 'Hapus',
    copyButton: 'Salin',
    clearLogs: 'Hapus Log',
    copyLogs: 'Salin Log',
    format: {
      title: 'Format',
      text: 'Teks Biasa',
      json: 'JSON',
      binary: 'Biner'
    },
    templates: {
      json: 'JSON',
      text: 'Teks'
    },
    types: {
      sent: 'Dikirim →',
      received: 'Diterima ←',
      error: 'Error !',
      info: 'Informasi'
    }
  },

  savedConnections: {
    title: 'Koneksi Tersimpan',
    empty: 'Belum ada koneksi tersimpan',
    save: 'Simpan Koneksi Saat Ini',
    saveConnection: 'Simpan Koneksi',
    connectionName: 'Nama Koneksi',
    load: 'Muat',
    delete: 'Hapus',
    cancel: 'Batal'
  },

  testServers: {
    title: 'Server Uji',
    description: 'Berikut beberapa server WebSocket publik yang dapat digunakan untuk pengujian:',
    useServer: 'Gunakan Server Ini',
    servers: {
      echo: {
        name: 'Uji Echo',
        description: 'Server uji echo aman yang mendukung koneksi WSS'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Layanan Echo dari Postman yang mendukung WSS'
      }
    }
  },

  logs: {
    connectingTo: 'Menghubungkan ke {0}...',
    connectionSuccess: 'Koneksi berhasil',
    connectionError: 'Error WebSocket',
    connectionClosed: 'Koneksi ditutup (kode: {0}{1})',
    invalidJson: 'Format JSON tidak valid: {0}',
    sendFailed: 'Gagal mengirim: {0}',
    emptyMessage: 'Pesan tidak boleh kosong',
    notConnected: 'Tidak terhubung ke WebSocket',
    copied: 'Log telah disalin ke clipboard',
    copyFailed: 'Gagal menyalin: {0}',
    serverSelected: 'Server dipilih: {0}',
    binaryData: '[Data Biner]'
  }
};