export default {
  title: 'Alat Blur Latar Belakang: Blur Gambar Latar Belakang Online untuk Efek Kedalaman Bidang Profesional',
  functionTitle: 'Apa itu Alat Blur Latar Belakang dan Kegunaannya?',
  intro: 'Alat ini adalah <strong>alat blur latar belakang online</strong> murni frontend (Blur Gambar Latar Belakang). Alat ini menggabungkan filter WebGL dengan algoritma segmentasi tubuh manusia untuk mencapai blur Gaussian, kedalaman bidang lensa, blur gerak, blur radial, dan <b>blur latar belakang tingkat kamera profesional</b>. Mendukung pemrosesan batch dan ekspor multi-format, memungkinkan Anda dengan cepat mendapatkan foto dengan latar belakang bersih dan subjek yang menonjol di browser Anda, cocok untuk gambar utama e-commerce, foto identitas, sampul media sosial, dan skenario lainnya.',
  useCasesTitle: 'Skenario Aplikasi Umum untuk Blur Latar Belakang',
  useCases: [
    'Gambar utama e-commerce menghilangkan latar belakang yang mengganggu untuk menonjolkan produk',
    'Foto potret dengan blur latar belakang untuk efek kedalaman bidang profesional',
    'Foto identitas atau potret profesional, diganti dengan latar belakang warna solid atau gradien',
    'Percantikan cepat sampul media sosial dan gambar sampul video pendek',
    'Pemrosesan latar belakang terpadu untuk slide presentasi dan desain poster',
    'Blur latar belakang foto wisata untuk melindungi privasi dan meningkatkan estetika',
    'Blur latar belakang foto grup dengan ekspor batch',
    'Pembuatan cepat efek fokus lembut dan fokus radial untuk konten UGC'
  ],
  tipTitle: 'Tips Profesional:',
  tipContent: 'Saat digunakan untuk subjek potret, aktifkan "Aktifkan Segmentasi Latar Depan" dan tingkatkan "Perhalusan Tepi" secara tepat untuk mengurangi secara signifikan gigi gergaji tepi rambut. Untuk gambar dengan persyaratan kualitas tinggi, utamakan ekspor format PNG atau WebP.',
  conclusion: '<strong>Alat blur latar belakang</strong> secara efektif menyelesaikan titik nyeri "latar belakang berantakan" dan "subjek tidak menonjol" melalui segmentasi cerdas dan berbagai algoritma blur. Baik itu fotografi produk, potret, atau pembuatan konten sosial, menyelesaikan blur latar belakang online dapat secara signifikan meningkatkan fokus visual dan profesionalisme.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faqs: [
    {
      question: 'Bagaimana alat blur latar belakang online mencapai efek kedalaman bidang kamera profesional?',
      answer: 'Alat blur latar belakang online ini menggabungkan segmentasi latar depan MediaPipe dengan filter WebGL, menerapkan blur Gaussian/lensa/radial/gerak ke area latar belakang untuk mencapai transisi kedalaman bidang dan efek fokus lembut yang mirip dengan kamera profesional.'
    },
    {
      question: 'Metode penggantian latar belakang apa yang didukung (warna solid/gradien/gambar)?',
      answer: 'Alat ini mendukung tiga mode: latar belakang warna solid, latar belakang gradien linear, dan latar belakang gambar, dengan transparansi latar belakang dan mode campur yang dapat disesuaikan untuk memenuhi persyaratan gambar utama e-commerce, foto identitas, dan gaya merek yang konsisten.'
    },
    {
      question: 'Bagaimana menjamin kualitas ekspor dan mengontrol ukuran file?',
      answer: 'Anda dapat memilih format PNG/JPG/WebP dan mengontrol ukuran ekspor melalui slider kualitas dan preset dimensi. PNG dan WebP lebih cocok untuk skenario blur latar belakang dengan persyaratan kualitas tinggi.'
    },
    {
      question: 'Bagaimana menggunakan pemrosesan batch dan penyortiran halaman?',
      answer: 'Beberapa gambar dapat diimpor sekaligus, dengan pemilihan rentang dan kontrol kotak centang untuk memproses "halaman" tertentu, mendukung penyortiran naik/turun, dan penyaringan otomatis gambar tidak valid dengan "Lewati Halaman Kosong".'
    },
    {
      question: 'Apakah perlu mengunggah gambar ke server, bagaimana privasi dilindungi?',
      answer: 'Semua pemrosesan blur latar belakang diselesaikan secara lokal di browser dan tidak diunggah ke server mana pun, memastikan privasi dan keamanan gambar.'
    }
  ],
  tutorialTitle: 'Cara Menggunakan Alat Blur Latar Belakang',
  steps: [
    {
      title: 'Unggah atau Impor Gambar',
      description: 'Seret dan jatuhkan atau klik untuk mengunggah gambar lokal, atau tempel gambar clipboard, aktifkan tangkapan kamera, atau impor gambar jaringan melalui URL. Mendukung format PNG, JPG, WEBP, BMP.',
      note: 'Beberapa gambar dapat diimpor sekaligus untuk blur latar belakang batch.'
    },
    {
      title: 'Pilih Jenis Blur dan Parameter',
      description: 'Pilih blur Gaussian, lensa, gerak, atau radial di "Jenis Blur", dan sesuaikan efek secara tepat melalui slider untuk radius, sudut, titik tengah, dan lebar pita fokus.',
      note: 'Mencentang "Tampilkan Perbandingan Sebelum/Sesudah" memungkinkan perbandingan waktu nyata blur latar belakang sebelum dan sesudah.'
    },
    {
      title: 'Aktifkan Segmentasi Latar Depan dan Pengaturan Latar Belakang',
      description: 'Aktifkan "Aktifkan Segmentasi Latar Depan" untuk meningkatkan kualitas tepi subjek, tingkatkan "Perhalusan Tepi" untuk transisi yang lebih alami. Di "Pengaturan Latar Belakang", pilih latar belakang warna solid, gradien, atau gambar, dan sesuaikan transparansi dan mode campur jika diperlukan.',
      note: 'Saat "Pertahankan Latar Belakang Asli" dipilih, hanya area latar belakang yang dibuat blur sementara subjek tetap jelas.'
    },
    {
      title: 'Dimensi dan Kualitas',
      description: 'Di "Ukuran dan Kualitas Keluaran", pilih preset media sosial atau dimensi kustom, atur kualitas JPG/WebP dan persentase skala. Untuk pencetakan, tingkatkan DPI dan ekspor piksel lebih tinggi secara proporsional.',
      note: 'PNG dan WebP lebih cocok untuk skenario blur latar belakang yang memerlukan pelestarian detail.'
    },
    {
      title: 'Ekspor dan Unduh Batch',
      description: 'Pilih format ekspor untuk setiap gambar dan klik "Unduh" untuk menyimpan; beberapa gambar dapat menggunakan "Unduh Batch (ZIP)" untuk mengekspor semua hasil blur latar belakang sekaligus.',
      note: 'Semua pemrosesan diselesaikan secara lokal di browser, gambar tidak diunggah ke server.'
    },
    {
      title: 'Kontrol Halaman',
      description: 'Urutkan "halaman" melalui kotak centang, input rentang, dan pindah naik/turun, aktifkan "Lewati Halaman Kosong" untuk menyaring secara otomatis gambar tidak valid dengan variansi kecerahan rendah.',
      note: 'Contoh rentang: 1-3,5,7-9.'
    }
  ],
  successTitle: 'Selamat!',
  successContent: 'Anda telah mempelajari cara menggunakan alat blur latar belakang kami untuk mencapai efek kedalaman bidang dan fokus lembut tingkat kamera profesional, cocok untuk berbagai skenario kreatif dan bisnis.',
  relatedToolsTitle: 'Alat Terkait yang Mungkin Menarik bagi Anda',
  relatedTools: [
    {
      name: 'Kompresor Gambar',
      description: 'Mengurangi ukuran file gambar tanpa kehilangan kualitas yang signifikan.',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: 'Pengubah Ukuran Gambar',
      description: 'Mengubah ukuran gambar ke dimensi tertentu atau menskalakan berdasarkan persentase.',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: 'Generator Cap',
      description: 'Pembuatan online berbagai gambar cap, menghasilkan stempel perusahaan, cap pribadi, dan stempel digital lainnya.',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'Generator Kode QR',
      description: 'Membuat kode QR kustom untuk URL, teks, informasi kontak, dan lainnya.',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: 'Sumber Referensi',
  references: [
    {
      name: 'Segmentasi Selfie MediaPipe',
      description: 'Model segmentasi latar depan manusia dan penggunaan dari Google',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: 'Pustaka efek gambar waktu nyata berbasis WebGL',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: 'Algoritma blur kanvas cepat dan dapat dikontrol, cocok sebagai solusi cadangan dan pemrosesan perhalusan',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}