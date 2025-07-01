export default {
  name: 'Konversi Gambar Vertikal ke Horizontal',
  description: 'Mengubah gambar potret vertikal menjadi format lanskap horizontal dengan berbagai opsi konversi',
  
  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini',
    maxSize: 'Ukuran file maksimal: 10MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF'
  },
  
  settings: {
    title: 'Pengaturan Konversi',
    presets: 'Preset Cepat',
    conversionMode: 'Mode Konversi',
    modes: {
      rotate: 'Rotasi',
      fill: 'Isi Latar Belakang',
      blur: 'Latar Belakang Buram',
      stretch: 'Regangkan Tepi',
      dualColor: 'Latar Belakang Dua Warna'
    },
    rotationAngle: 'Sudut Rotasi',
    fillColor: 'Warna Latar Belakang',
    blurRadius: 'Tingkat Keburaman',
    stretchEdges: 'Tingkat Peregangan',
    leftColor: 'Warna Kiri',
    rightColor: 'Warna Kanan',
    sizeOption: 'Pengaturan Ukuran',
    sizeModes: {
      auto: 'Ukuran Otomatis',
      preset: 'Ukuran Standar',
      custom: 'Ukuran Kustom'
    },
    sizePresets: 'Preset Ukuran',
    outputSize: 'Ukuran Output',
    width: 'Lebar',
    height: 'Tinggi',
    dimensionsHint: 'Masukkan ukuran dalam piksel',
    autoSize: 'Hitung Ukuran Otomatis',
    outputFormat: 'Format Output',
    quality: 'Kualitas Gambar',
    advancedOptions: 'Opsi Lanjutan',
    preserveRatio: 'Pertahankan Rasio Aspek',
    sharpen: 'Ketajaman',
    addWatermark: 'Tambahkan Watermark',
    watermarkPlaceholder: 'Masukkan teks watermark',
    watermarkColor: 'Warna Watermark'
  },
  
  output: {
    preview: 'Pratinjau Hasil',
    dimensions: 'Dimensi',
    before: 'Sebelum',
    after: 'Sesudah'
  },
  
  actions: {
    selectImage: 'Pilih Gambar',
    convert: 'Konversi Gambar',
    download: 'Unduh Gambar',
    reset: 'Hapus',
    showSideBySide: 'Tampilkan Perbandingan',
    hideComparison: 'Sembunyikan Perbandingan',
    hideSideBySide: 'Tutup'
  },
  
  messages: {
    processing: 'Memproses gambar...',
    convertPrompt: 'Hasil konversi akan ditampilkan di sini',
    error: 'Terjadi kesalahan saat memproses gambar',
    success: 'Konversi berhasil diselesaikan!'
  },

  examples: {
    title: 'Tips Penggunaan',
    social: 'Sangat cocok untuk posting media sosial, format horizontal lebih baik',
    socialTip: 'Gunakan mode blur untuk hasil terbaik di media sosial',
    website: 'Buat gambar banner untuk website dan blog',
    websiteTip: 'Mode dua warna sangat cocok untuk banner web'
  },

  help: {
    title: 'Cara Menggunakan Alat Ini',
    description: 'Alat ini memungkinkan Anda mengubah gambar vertikal (potret) menjadi format horizontal (lanskap) dengan berbagai metode sambil mempertahankan kualitas visual dan efek.',
    example1: {
      title: 'Posting Media Sosial',
      description: 'Konversi foto potret ke format horizontal yang ramah media sosial dengan latar belakang buram'
    },
    example2: {
      title: 'Banner Website',
      description: 'Gunakan isian warna latar belakang untuk membuat header dan banner website dari gambar vertikal'
    }
  },

  article: {
    title: "Konversi Gambar Vertikal ke Horizontal: Panduan Lengkap",
    
    intro: {
      title: "Fungsi Alat dan Skenario Penggunaan",
      content: `
        <p><strong>Alat konversi gambar vertikal ke horizontal</strong> kami dapat mengubah gambar potret (vertikal) menjadi format lanskap (horizontal) sambil mempertahankan kualitas visual. Alat canggih ini menyediakan berbagai metode konversi termasuk latar belakang buram, isian warna solid, gradien dua warna, peregangan tepi, dan penyesuaian rotasi.</p>
        
        <p>Fitur utama:</p>
        <ul>
          <li><strong>Berbagai mode konversi</strong>, cocok untuk berbagai gaya visual dan penggunaan</li>
          <li><strong>Optimasi media sosial</strong>, menyediakan ukuran preset untuk berbagai platform</li>
          <li><strong>Opsi kustomisasi profesional</strong>, termasuk pengaturan lanjutan seperti ketajaman dan watermark</li>
          <li><strong>Output berkualitas tinggi</strong>, mendukung berbagai format (JPEG, PNG, WebP)</li>
        </ul>
        
        <h4>Skenario penggunaan umum:</h4>
        
        <p><strong>Konten media sosial</strong>: Mengubah foto smartphone vertikal menjadi posting horizontal untuk Facebook, Twitter, LinkedIn dan YouTube di mana format horizontal lebih baik.</p>
        
        <p><strong>Banner website</strong>: Buat header dan banner lebar dari foto produk vertikal atau potret, untuk website e-commerce, blog, dan materi pemasaran.</p>
        
        <p><strong>Pemasaran digital</strong>: Sesuaikan gambar produk vertikal ke format iklan horizontal, cocok untuk berbagai platform iklan dan kampanye email marketing.</p>
        
        <p><strong>Thumbnail video</strong>: Ubah tangkapan layar video vertikal menjadi thumbnail horizontal untuk YouTube, Vimeo dan platform video lainnya.</p>
        
        <p><strong>Slide presentasi</strong>: Ubah gambar vertikal ke format horizontal yang cocok untuk PowerPoint, Google slide dan perangkat lunak presentasi lainnya.</p>
      `
    },
    
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      q1: "Mengapa saya harus mengubah gambar vertikal menjadi horizontal?",
      a1: "Gambar horizontal lebih disukai di banyak platform termasuk feed media sosial, website, presentasi, dan materi pemasaran. Mereka biasanya mendapatkan tingkat interaksi yang lebih tinggi dan tampil lebih baik di berbagai perangkat.",
      q2: "Apakah kualitas gambar akan berkurang saat mengubah vertikal ke horizontal?",
      a2: "Tidak, alat kami mempertahankan kualitas gambar selama proses konversi. Kami menggunakan teknik canggih seperti blur, isian warna, dan peregangan tepi, bukan hanya pemotongan sederhana, untuk mempertahankan konten gambar asli.",
      q3: "Mode konversi apa yang harus dipilih untuk media sosial?",
      a3: "Untuk media sosial, mode latar belakang buram biasanya memberikan hasil terbaik karena mempertahankan subjek tetap di tengah sambil memperluas gambar secara horizontal dengan versi buram yang menarik dari gambar asli.",
      q4: "Apa ukuran terbaik untuk gambar horizontal?",
      a4: "Rasio horizontal umum termasuk 16:9 (layar lebar), 3:2 (lanskap standar), serta rasio platform spesifik seperti 1200×630 piksel untuk Facebook atau 1280×720 untuk YouTube. Opsi preset kami dapat menangani perhitungan ini untuk Anda.",
      q5: "Bisakah saya menambahkan watermark untuk melindungi gambar yang dikonversi?",
      a5: "Ya, alat kami menyertakan fitur watermark di opsi lanjutan. Anda dapat menambahkan teks kustom dan menyesuaikan warna untuk membantu melindungi kekayaan intelektual Anda.",
      q6: "Apakah alat ini bisa digunakan di perangkat mobile?",
      a6: "Tentu saja! Alat konversi gambar vertikal ke horizontal kami sepenuhnya responsif dan dapat digunakan di smartphone, tablet, dan komputer desktop dengan browser modern."
    },
    
    tutorial: {
      title: "Panduan Langkah demi Langkah",
      step1: "Unggah gambar vertikal Anda dengan menyeret dan melepaskannya ke area unggah atau mengklik tombol \"Pilih Gambar\".",
      step2: "Pilih mode konversi sesuai kebutuhan Anda: buram, isian, dua warna, regangkan, atau rotasi.",
      step3: "Sesuaikan pengaturan mode spesifik (tingkat keburaman, warna latar belakang, dll) untuk menyesuaikan tampilan.",
      step4: "Pilih opsi ukuran: otomatis (direkomendasikan), ukuran preset untuk platform tertentu, atau ukuran kustom.",
      step5: "Untuk kebutuhan lanjutan, perluas bagian opsi lanjutan untuk mengakses fitur ketajaman, kontrol rasio aspek, dan watermark.",
      step6: "Klik \"Konversi Gambar\" untuk memproses gambar vertikal Anda ke format horizontal.",
      step7: "Pratinjau hasilnya, dan gunakan tampilan perbandingan untuk melihat perubahan sebelum dan sesudah konversi.",
      step8: "Jika perlu, sesuaikan pengaturan dan konversi lagi sampai Anda puas dengan hasilnya.",
      step9: "Unduh gambar horizontal dalam format pilihan Anda (JPEG, PNG, atau WebP)."
    }
  }
}