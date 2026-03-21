export default {
  name: 'Audio ke WAV',
  description: 'Konversi berbagai format audio ke file audio WAV berkualitas tinggi tanpa kehilangan',
  longDescription: 'Konverter audio ke WAV online gratis. Mendukung MP3, M4A, FLAC, OGG, AAC, WMA dan format lain ke audio WAV tanpa kehilangan. Sesuaikan sample rate dan saluran untuk mempertahankan kualitas terbaik.',
  
  selectFile: 'Pilih file audio',
  dropFile: 'Atau seret dan lepas file audio di sini',
  supportedFormats: 'Format yang didukung: MP3, M4A, FLAC, OGG, AAC, WMA, AMR, AIFF, APE, dll.',
  
  converting: 'Mengkonversi...',
  convertComplete: 'Konversi selesai!',
  downloadAll: 'Unduh semua',
  clearAll: 'Hapus semua',
  
  settings: {
    title: 'Pengaturan konversi',
    sampleRate: 'Sample rate',
    sampleRates: {
      '22050': '22050 Hz (Kualitas suara)',
      '44100': '44100 Hz (Kualitas CD)',
      '48000': '48000 Hz (Kualitas profesional)',
      '96000': '96000 Hz (Resolusi tinggi)',
      '192000': '192000 Hz (Kualitas studio)'
    },
    channels: 'Saluran',
    channelOptions: {
      stereo: 'Stereo',
      mono: 'Mono'
    },
    bitDepth: 'Kedalaman bit',
    bitDepths: {
      '16': '16 bit (Standar CD)',
      '24': '24 bit (Profesional)',
      '32': '32 bit (Studio)'
    },
    volume: 'Volume',
    volumeLabel: 'Penyesuaian volume'
  },
  
  errors: {
    selectFile: 'Silakan pilih file audio',
    unsupportedFormat: 'Format file tidak didukung',
    conversionFailed: 'Konversi gagal, silakan coba lagi',
    fileTooLarge: 'File terlalu besar, silakan pilih file di bawah 100MB'
  },
  
  fileInfo: {
    name: 'Nama file',
    size: 'Ukuran',
    duration: 'Durasi',
    format: 'Format asli',
    status: 'Status',
    actions: 'Tindakan'
  },
  
  status: {
    pending: 'Menunggu',
    processing: 'Memproses',
    completed: 'Selesai',
    failed: 'Gagal'
  },
  
  features: {
    title: 'Fitur',
    list: [
      'Mendukung berbagai format audio ke WAV',
      'Berbagai sample rate (22050Hz-192000Hz)',
      'Kedalaman bit yang dapat dipilih (16/24/32 bit)',
      'Dukungan stereo dan mono',
      'Penyesuaian volume',
      'Pemrosesan batch',
      'Mempertahankan kualitas asli',
      'Sepenuhnya gratis, tanpa pendaftaran'
    ]
  },
  
  article: {
    title: 'Panduan Konverter Audio ke WAV',
    subtitle: 'Apa itu format WAV?',
    description: 'WAV (Waveform Audio File Format) adalah format audio tanpa kehilangan yang dikembangkan oleh Microsoft, banyak digunakan dalam produksi audio profesional, studio rekaman, dan penyiaran. Sebagai salah satu format audio digital paling asli, WAV mempertahankan semua data audio, memberikan pengalaman kualitas terbaik.',
    
    whyConvert: {
      title: 'Mengapa konversi ke WAV?',
      reasons: [
        {
          title: 'Audio tanpa kehilangan',
          description: 'WAV menggunakan kompresi tanpa kehilangan, mempertahankan semua detail audio asli, pilihan pertama audiofil dan profesional.'
        },
        {
          title: 'Pengeditan profesional',
          description: 'Perangkat lunak pengeditan audio profesional seperti Adobe Audition dan Pro Tools mendukung WAV secara preferensial.'
        },
        {
          title: 'Kompatibilitas luas',
          description: 'Hampir semua pemutar audio dan sistem operasi mendukung WAV.'
        },
        {
          title: 'Arsip rekaman',
          description: 'WAV adalah format ideal untuk file rekaman.'
        }
      ]
    },
    
    howToUse: {
      title: 'Cara menggunakan konverter audio ke WAV',
      steps: [
        {
          step: 'Langkah 1',
          description: 'Pilih atau seret file audio yang ingin Anda konversi.'
        },
        {
          step: 'Langkah 2',
          description: 'Sesuaikan sample rate, kedalaman bit, dan saluran sesuai kebutuhan.'
        },
        {
          step: 'Langkah 3',
          description: 'Klik "Mulai konversi" dan tunggu hingga selesai.'
        },
        {
          step: 'Langkah 4',
          description: 'Unduh file WAV yang dikonversi.'
        }
      ]
    },
    
    faqs: [
      {
        question: 'Apa perbedaan antara WAV dan MP3?',
        answer: 'WAV adalah format tanpa kehilangan yang mempertahankan semua data audio, file lebih besar tetapi kualitas lebih baik; MP3 adalah format dengan kehilangan, file lebih kecil tetapi kehilangan sebagian kualitas.'
      },
      {
        question: 'Sample rate mana yang harus saya pilih?',
        answer: 'Untuk penggunaan umum disarankan 44100Hz (kualitas CD); untuk rekaman profesional 48000Hz atau lebih tinggi; untuk rekaman suara 22050Hz sudah cukup.'
      },
      {
        question: 'Mengapa file WAV begitu besar?',
        answer: 'WAV adalah format tanpa kehilangan yang mempertahankan semua data audio asli tanpa kompresi, jadi ukuran file lebih besar.'
      },
      {
        question: 'Apakah saya bisa mengkonversi WAV ke format lain?',
        answer: 'Ya, alat kami juga mendukung konversi WAV ke MP3, M4A, dan format lain.'
      }
    ],
    
    relatedTools: [
      {
        name: 'Audio ke MP3',
        description: 'Konversi audio ke format MP3 dengan kompatibilitas terbaik.',
        url: 'https://www.ufreetools.com/tools/audio-to-mp3'
      },
      {
        name: 'Audio ke M4A',
        description: 'Konversi audio ke format M4A ideal untuk perangkat Apple.',
        url: 'https://www.ufreetools.com/tools/audio-to-m4a'
      },
      {
        name: 'Gambar ke Seni ASCII',
        description: 'Mengonversi gambar menjadi seni karakter ASCII untuk efek seni teks yang unik.',
        url: 'https://www.ufreetools.com/tools/image-to-ascii'
      }
    ],
    
    references: [
      {
        title: 'Wikipedia Format WAV',
        url: 'https://id.wikipedia.org/wiki/WAV'
      },
      {
        title: 'Dasar-dasar Audio Digital',
        url: 'https://www.ufreetools.com/blog/digital-audio-basics'
      }
    ]
  }
}
