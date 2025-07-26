export default {
  name: 'Pembuat Postingan Instagram',
  description: 'Buat simulasi postingan Instagram yang realistis dengan konten, latar belakang, dan data interaksi yang dapat disesuaikan',

  // Opsi Desain
  designOptions: 'Opsi Desain',

  // Profil Pengguna
  userProfile: {
    title: 'Pengaturan Profil Pengguna',
    username: 'Nama Pengguna',
    location: 'Lokasi',
    postedTime: 'Tanggal & Waktu Posting',
    postDate: 'Tanggal Detail',
    avatar: 'Foto Profil',
    uploadAvatar: 'Unggah Foto Profil',
    removeAvatar: 'Hapus',
    verifiedAccount: 'Status Akun',
    isVerified: 'Akun Terverifikasi'
  },

  // Jenis Konten
  contentType: 'Jenis Konten',

  contentTypes: {
    text: 'Hanya Teks',
    image: 'Hanya Gambar',
    mixed: 'Teks dan Gambar'
  },

  // Konten Teks
  textContent: 'Konten Teks',

  postText: 'Teks Postingan',
  addHashtag: 'Tambahkan Hashtag',
  mentionUser: 'Sebut Pengguna',
  insertEmoji: 'Emoji',
  commonEmojis: 'Emoji Populer',
  recommendedHashtags: 'Rekomendasi Hashtag',

  // Pemformatan Teks
  fontFamily: 'Jenis Huruf',

  fontSize: 'Ukuran Huruf',
  textAlign: 'Perataan Teks',
  textColor: 'Warna Teks',

  // Gambar Latar Belakang
  backgroundImage: 'Gambar Latar Belakang',

  uploadImage: 'Unggah Gambar',
  dragAndDrop: 'Atau seret dan lepas file',
  imageFormats: 'Format PNG, JPG, GIF, maksimal 2MB',

  // Latar Belakang
  background: 'Latar Belakang',

  backgroundColor: 'Warna Latar Belakang',
  backgroundType: 'Jenis Latar Belakang',

  backgroundTypes: {
    solid: 'Warna Solid',
    gradient: 'Gradien',
    pattern: 'Pola'
  },

  // Opsi Gradien
  gradientStartColor: 'Warna Awal',

  gradientEndColor: 'Warna Akhir',
  gradientDirection: 'Arah',

  gradientDirections: {
    horizontal: 'Horizontal',
    vertical: 'Vertikal',
    diagonal: 'Diagonal',
    diagonalReverse: 'Diagonal Terbalik'
  },

  // Opsi Pola
  patternType: 'Jenis Pola',

  // Format Postingan
  postFormat: 'Format Postingan',

  formats: {
    square: 'Persegi',
    portrait: 'Portrait',
    landscape: 'Landscape'
  },

  // Interaksi
  engagement: {
    title: 'Simulasi Interaksi',
    likeCount: 'Jumlah Suka',
    commentCount: 'Jumlah Komentar',
    viewCount: 'Jumlah Tayangan',
    isLiked: 'Disukai oleh Penonton',
    isSaved: 'Disimpan oleh Penonton',
    hasStory: 'Memiliki Story Instagram',
    showComments: 'Tampilkan Komentar',
    isTagged: 'Ada yang Ditandai',
    isSponsored: 'Konten Sponsor'
  },

  // Komentar
  comments: {
    title: 'Komentar Simulasi',
    addComment: 'Tambahkan Komentar',
    delete: 'Hapus',
    addForRealism: 'Tambahkan komentar simulasi untuk meningkatkan realisme',
    username: 'Nama Pengguna',
    text: 'Isi Komentar'
  },

  // Petunjuk
  prompts: {
    enterHashtag: 'Masukkan hashtag (tanpa #)',
    enterUsername: 'Masukkan nama pengguna yang ingin disebut',
    enterComment: 'Masukkan komentar',
    defaultComment: 'Keren banget!',
    enterCommentUsername: 'Masukkan nama pengguna komentar',
    justNow: 'Baru saja'
  },

  // Tombol Aksi
  resetDesign: 'Atur Ulang Desain',

  // Pratinjau dan Ekspor
  preview: 'Pratinjau',

  export: 'Ekspor',
  downloadAsPNG: 'Unduh sebagai PNG',
  downloadAsJPG: 'Unduh sebagai JPG',
  copyToClipboard: 'Salin ke Clipboard',
  copied: 'Tersalin!',
  generating: 'Membuat gambar...'
};