export default {
  name: 'Konverter Timestamp',
  description: 'Konversi antara timestamp dan tanggal yang dapat dibaca manusia, mendukung berbagai format dan zona waktu',

  options: {
    inputType: 'Tipe Input',
    outputFormat: 'Format Output',
    timezone: 'Zona Waktu',
    includeTime: 'Sertakan Waktu',
    format: 'String Format'
  },

  inputTypes: {
    timestamp: 'Timestamp Unix',
    milliseconds: 'Milidetik Unix',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'String Tanggal'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Format Lokal',
    relative: 'Waktu Relatif',
    custom: 'Format Kustom'
  },

  actions: {
    convert: 'Konversi',
    nowTimestamp: 'Timestamp Sekarang',
    nowDate: 'Tanggal Sekarang',
    copy: 'Salin',
    clear: 'Hapus',
    refresh: 'Segarkan',
    switch: 'Ganti'
  },

  messages: {
    copied: 'Tersalin ke clipboard!',
    convertSuccess: 'Konversi berhasil',
    convertError: 'Gagal mengkonversi timestamp',
    invalidInput: 'Format input tidak valid',
    invalidFormat: 'String format tidak valid'
  },

  timeUnits: {
    milliseconds: 'Milidetik',
    seconds: 'Detik',
    minutes: 'Menit',
    hours: 'Jam',
    days: 'Hari'
  },

  labels: {
    unixTimestamp: 'Timestamp Unix (detik)',
    dateTime: 'Tanggal & Waktu',
    inputValue: 'Nilai Input',
    unitConversion: 'Konversi Satuan Waktu',
    timeUnitLabel: 'Satuan Waktu'
  },

  placeholders: {
    enterTimestamp: 'Masukkan timestamp Unix',
    enterValue: 'Masukkan nilai'
  },

  info: {
    aboutTimestamp: 'Tentang Timestamp Unix',
    timestampDescription: 'Timestamp Unix menunjukkan jumlah detik yang telah berlalu sejak 1 Januari 1970 00:00:00 UTC. Ini adalah cara representasi waktu yang banyak digunakan dalam sistem komputer dan aplikasi.',
    commonUsage: 'Penggunaan umum:',
    usages: {
      database: 'Pencatatan waktu di database',
      api: 'Representasi waktu dalam komunikasi API',
      logging: 'Pencatatan log',
      filesystem: 'Timestamp dalam sistem file'
    }
  }
};