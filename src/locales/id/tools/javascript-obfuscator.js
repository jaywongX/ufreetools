export default {
  name: 'Pengabur JavaScript',
  description: 'Lindungi kode JavaScript Anda dengan berbagai teknik pengaburan',
  input: {
    title: 'Masukkan JavaScript',
    placeholder: 'Masukkan atau tempel kode JavaScript Anda di sini',
    loadSample: 'Muat Contoh',
    clearInput: 'Hapus Input',
    uploadFile: 'Unggah File JS'
  },
  output: {
    title: 'Kode yang Diaburkan',
    copied: 'Kode telah disalin ke clipboard',
    download: 'Unduh Kode yang Diaburkan',
    copyOutput: 'Salin Kode',
    clearOutput: 'Hapus Output'
  },
  options: {
    title: 'Opsi Pengaburan',
    compact: 'Kompresi Kode',
    selfDefending: 'Pertahanan Diri',
    controlFlowFlattening: 'Penyederhanaan Aliran Kontrol',
    controlFlowFlatteningThreshold: 'Ambang Penyederhanaan Aliran Kontrol',
    deadCodeInjection: 'Penyisipan Kode Mati',
    deadCodeInjectionThreshold: 'Ambang Penyisipan Kode Mati',
    debugProtection: 'Perlindungan Debug',
    debugProtectionInterval: 'Interval Perlindungan Debug',
    disableConsoleOutput: 'Nonaktifkan Output Konsol',
    domainLock: 'Kunci Domain',
    domainLockRedirectUrl: 'URL Pengalihan Kunci Domain',
    identifierNamesGenerator: 'Generator Nama Pengenal',
    identifiersPrefix: 'Prefiks Pengenal',
    renameGlobals: 'Ganti Nama Variabel Global',
    reservedNames: 'Nama yang Direservasi',
    reservedStrings: 'String yang Direservasi',
    rotateStringArray: 'Rotasi Array String',
    seed: 'Benih',
    shuffleStringArray: 'Acak Array String',
    sourceMap: 'Peta Sumber',
    sourceMapBaseUrl: 'URL Dasar Peta Sumber',
    sourceMapFileName: 'Nama File Peta Sumber',
    splitStrings: 'Pisahkan String',
    splitStringsChunkLength: 'Panjang Potongan String yang Dipisahkan',
    stringArray: 'Array String',
    stringArrayEncoding: 'Pengkodean Array String',
    stringArrayThreshold: 'Ambang Array String',
    target: 'Target',
    transformObjectKeys: 'Transformasi Kunci Objek',
    unicodeEscapeSequence: 'Urutan Escape Unicode'
  },
  presets: {
    title: 'Prasetel',
    low: 'Pengaburan Rendah',
    medium: 'Pengaburan Sedang',
    high: 'Pengaburan Tinggi',
    custom: 'Kustom'
  },
  actions: {
    obfuscate: 'Aburkan',
    reset: 'Atur Ulang Opsi',
    savePreset: 'Simpan Prasetel',
    loadPreset: 'Muat Prasetel'
  },
  messages: {
    obfuscationSuccess: 'Pengaburan kode berhasil',
    obfuscationFailed: 'Pengaburan gagal: {error}',
    emptyCode: 'Silakan masukkan kode JavaScript yang akan diaburkan',
    uploadSuccess: 'File berhasil diunggah',
    presetSaved: 'Prasetel disimpan',
    presetLoaded: 'Prasetel dimuat'
  },
  help: {
    title: 'Bantuan Opsi',
    stringArrayDesc: 'Pindahkan literal string ke array khusus dan ganti dengan panggilan array',
    controlFlowDesc: 'Aktifkan penyederhanaan aliran kontrol kode untuk membuat logika lebih sulit dipahami',
    deadCodeDesc: 'Sisipkan kode mati acak untuk membingungkan penyerang',
    selfDefendingDesc: 'Buat output tahan terhadap modifikasi format'
  }
}