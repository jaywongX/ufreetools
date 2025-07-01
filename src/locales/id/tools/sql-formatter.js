export default {
  name: 'Format SQL',
  description: 'Alat pemformatan dan validasi SQL online, mendukung kompresi dan perapian',
  options: {
    language: 'Dialek SQL',
    indent: 'Jenis indentasi',
    spaceCount: 'Jumlah spasi',
    keywordCase: 'Kapitalisasi kata kunci',
    uppercase: 'Kata kunci huruf besar',
    lineBreak: 'Gaya baris baru',
    tabSize: 'Ukuran tab'
  },
  languages: {
    standard: 'SQL standar',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: 'Spasi',
    tabs: 'Indentasi Tab'
  },
  spaceOptions: {
    two: '2 spasi',
    four: '4 spasi'
  },
  caseOptions: {
    preserve: 'Pertahankan asli',
    upper: 'Huruf besar',
    lower: 'Huruf kecil'
  },
  actions: {
    format: 'Format SQL',
    minify: 'Kompres SQL',
    clear: 'Hapus',
    copy: 'Salin',
    download: 'Unduh',
  },
  messages: {
    copied: 'Tersalin ke clipboard!',
    formatSuccess: 'Pemformatan SQL berhasil',
    formatError: 'Gagal memformat SQL'
  },
  placeholders: {
    input: 'Masukkan kueri SQL di sini...',
    output: 'SQL yang diformat akan muncul di sini...'
  },
  output: 'Hasil pemformatan',
  tips: {
    title: 'Tips penggunaan',
    dialect: 'Pilih dialek SQL yang sesuai untuk hasil pemformatan yang akurat.',
    formatting: 'Sesuaikan gaya indentasi dan jumlah spasi sesuai gaya pengkodean yang Anda sukai.',
    keywords: 'Pilih untuk mempertahankan, mengkapitalisasi, atau mengecilkan kata kunci SQL.',
    copy: 'Gunakan tombol salin untuk menyalin SQL yang diformat ke clipboard dengan cepat.'
  }
}