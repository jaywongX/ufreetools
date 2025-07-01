export default {
  name: 'Editor Markdown',
  description: 'Edit dan pratinjau dokumen Markdown secara real-time',
  options: {
    mode: 'Mode',
    syntaxHighlighting: 'Penyorotan Sintaks',
    autoSave: 'Simpan Otomatis',
    lineNumbers: 'Nomor Baris',
    spellCheck: 'Pemeriksaan Ejaan',
    wordWrap: 'Pembungkusan Kata'
  },
  modes: {
    split: 'Tampilan Terbagi',
    edit: 'Hanya Edit',
    preview: 'Hanya Pratinjau'
  },
  actions: {
    bold: 'Tebal',
    italic: 'Miring',
    strikethrough: 'Coret',
    heading: 'Judul',
    link: 'Tautan',
    image: 'Gambar',
    list: 'Daftar',
    quote: 'Kutipan',
    code: 'Kode',
    table: 'Tabel',
    hr: 'Garis Horisontal',
    preview: 'Pratinjau',
    copy: 'Salin',
    clear: 'Bersihkan',
    download: 'Unduh Markdown',
    downloadHTML: 'Unduh HTML',
    upload: 'Unggah Markdown'
  },
  messages: {
    copied: 'Konten Markdown telah disalin ke clipboard!',
    copyError: 'Gagal menyalin, silakan salin manual',
    clearConfirm: 'Yakin ingin menghapus semua konten editor?',
    templateConfirm: 'Menerapkan template akan mengganti konten saat ini, lanjutkan?',
    templateApplied: 'Template "{name}" telah diterapkan',
    saved: 'Dokumen telah disimpan',
    uploadSuccess: 'Dokumen berhasil diunggah',
    uploadError: 'Terjadi kesalahan saat mengunggah dokumen',
    wordCount: '{count} kata',
    charCount: '{count} karakter'
  },
  placeholder: 'Ketik konten Markdown di sini...',
  placeholders: {
    linkText: 'Teks tautan',
    imageAlt: 'Deskripsi gambar'
  },
  templates: {
    title: 'Template Cepat',
    apply: 'Terapkan Template',
    confirm: 'Konfirmasi',
    simple: {
      name: 'Dokumen Sederhana',
      description: 'Berisi judul, daftar, kutipan, dll.',
      content: `# Judul Dokumen

## Pengantar
Ini adalah contoh dokumen Markdown sederhana.

## Fitur
- Mendukung judul dan paragraf
- Mendukung **teks tebal** dan *teks miring*
- Mendukung daftar bernomor dan tidak bernomor

> Ini adalah blok kutipan, digunakan untuk mengutip pendapat orang lain.

## Kesimpulan
Markdown adalah bahasa markup yang mudah digunakan.`
    },
    readme: {
      name: 'README Proyek',
      description: 'Struktur standar dokumentasi proyek',
      content: `# Nama Proyek

## Deskripsi Proyek
Penjelasan singkat tentang fungsi utama dan tujuan proyek.

## Fitur Utama
- Fitur utama 1
- Fitur utama 2
- Fitur utama 3

## Petunjuk Instalasi
\`\`\`
# Instal dependensi
npm install

# Jalankan server pengembangan
npm run dev
\`\`\`

## Contoh Penggunaan
\`\`\`
// Contoh kode
const contoh = new Contoh();
contoh.init();
\`\`\`

## Dokumentasi
Untuk dokumentasi lebih lengkap, lihat tautan dokumentasi.

## Panduan Kontribusi
Kontribusi terbuka, lihat panduan kontribusi.

## Lisensi
Proyek ini dirilis di bawah lisensi MIT, lihat file LICENSE untuk detail.`
    },
    resume: {
      name: 'Resume Pribadi',
      description: 'Template resume profesional',
      content: `# Resume Pribadi

## Informasi Pribadi
- Nama: Budi
- Telepon: 0812xxxx5678
- Email: budi123@contoh.com
- Posisi yang Dilamar: Pengembang Frontend

## Pendidikan
Nama Universitas, Ilmu Komputer, September 2016 - Juni 2020

## Pengalaman Kerja
### Perusahaan Teknologi, Pengembang Frontend, Juli 2020 - Sekarang
- Bertanggung jawab atas pengembangan dan pemeliharaan frontend produk inti
- Mengembangkan sistem manajemen perusahaan menggunakan Vue.js
- Mengoptimalkan performa frontend, mengurangi waktu muat halaman 30%

### Perusahaan Teknologi, Magang Frontend, Juli 2019 - Juni 2020
- Berpartisipasi dalam proyek pembaruan situs web perusahaan
- Membantu tim dalam refaktorisasi dan optimasi kode

## Keterampilan Teknis
- Frontend: HTML, CSS, JavaScript, Vue.js, React
- Backend: Node.js, Express
- Alat Lain: Git, Webpack, Docker

## Pengalaman Proyek
### Sistem Manajemen Perusahaan
- Sistem manajemen internal yang dikembangkan dengan Vue.js
- Mengimplementasikan visualisasi data dan manajemen izin
- Mengoptimalkan kecepatan respons sistem

## Kemampuan Bahasa
- Inggris (Lancar)
- Jepang (Dasar)`
    },
    meeting: {
      name: 'Catatan Rapat',
      description: 'Template pencatatan rapat',
      content: `# Catatan Rapat

## Informasi Rapat
- Topik: Diskusi Kemajuan Proyek
- Tanggal: 15 Mei 2023
- Waktu: 14:00 - 16:00
- Lokasi: Ruang Rapat A
- Pemimpin: Manajer Budi
- Pencatat: Asisten Tono

## Peserta
- Manajer Budi (Divisi Produk)
- Insinyur Wati (Divisi Pengembangan)
- Desiner Lina (Divisi Desain)
- Tester Joko (Divisi Pengujian)

## Agenda
1. Tinjauan pekerjaan minggu lalu
2. Diskusi rencana minggu ini
3. Penyelesaian masalah proyek
4. Penentuan langkah selanjutnya

## Pembahasan
### 1. Tinjauan Minggu Lalu
- Dokumen kebutuhan produk telah selesai
- Desain selesai 60%
- Pengembangan frontend telah menyelesaikan kerangka dasar

### 2. Rencana Minggu Ini
- Divisi desain menyelesaikan desain yang tersisa
- Divisi pengembangan memulai pengembangan fitur inti
- Divisi pengujian mempersiapkan kasus uji

### 3. Masalah dan Solusi
- Masalah: Desain antarmuka data tidak tepat
- Solusi: Insinyur Wati akan mendesain ulang, diserahkan sebelum Rabu

## Rapat Berikutnya
- Tanggal: 22 Mei 2023
- Waktu: 14:00 - 15:00`
    }
  },
  dialogs: {
    clear: {
      title: 'Bersihkan Editor',
      message: 'Yakin ingin menghapus semua konten editor?'
    },
    template: {
      title: 'Terapkan Template',
      message: 'Menerapkan template akan mengganti konten saat ini, lanjutkan?'
    }
  },
  article: {
    title: "Editor Markdown: Buat Dokumen Terformat dengan Mudah",
    features: {
      title: "Memahami Pengeditan Markdown",
      description: "<strong>Editor Markdown</strong> ini adalah <strong>alat pemformatan teks</strong> serbaguna yang membantu pengguna membuat dokumen terstruktur dengan sintaks Markdown sederhana. <strong>Editor dokumen</strong> yang kuat ini menggabungkan lingkungan penulisan intuitif dengan pratinjau real-time, menjadikannya pilihan ideal untuk pembuatan konten di berbagai platform.<br><br><strong>Editor teks kaya</strong> kami mendukung semua elemen sintaks Markdown standar termasuk judul, daftar, tautan, gambar, blok kode, dan tabel. Editor ini dilengkapi dengan penyorotan sintaks, pratinjau terpisah, dan pintasan pemformatan yang mudah. Baik Anda membuat draf dokumen, menyiapkan posting blog, atau membuat catatan terstruktur, <strong>alat penulisan Markdown</strong> ini menawarkan keseimbangan sempurna antara kesederhanaan dan fungsionalitas, menyederhanakan alur kerja pembuatan konten Anda.",
      useCases: {
        title: "Aplikasi Praktis Editor Markdown",
        items: [
          "Pengembang perangkat lunak menulis <strong>dokumentasi teknis</strong> dan file README untuk repositori GitHub, menggunakan pemformatan kode dan struktur judul Markdown untuk organisasi yang jelas",
          "Pembuat konten membuat draf <strong>posting blog</strong> dengan gambar, tautan, dan teks terformat yang dapat diekspor dengan mudah ke sistem manajemen konten seperti WordPress atau Medium",
          "Penulis teknis membuat <strong>dokumentasi produk</strong> yang konsisten, menggunakan tabel untuk presentasi data dan judul untuk organisasi hierarkis",
          "Mahasiswa membuat <strong>catatan terstruktur</strong> selama kuliah atau penelitian, menggunakan sintaks sederhana Markdown untuk pemformatan cepat tanpa mengganggu alur berpikir",
          "Manajer proyek mengembangkan <strong>halaman wiki</strong> organisasi dengan bagian tertaut, daftar tugas, dan konten terformat untuk tim",
          "Peneliti akademik membuat draf <strong>makalah penelitian</strong> atau catatan dengan kutipan, rumus tersemat, dan judul terstruktur sebelum pemformatan akhir di perangkat lunak penerbitan profesional"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Pengeditan Markdown",
      items: [
        {
          question: "Apa perbedaan Markdown dengan pengolah kata tradisional?",
          answer: "Markdown adalah bahasa markup ringan yang menggunakan sintaks teks biasa untuk menunjukkan pemformatan, berbeda dengan pengolah kata tradisional yang menggunakan antarmuka WYSIWYG dengan tombol dan menu pemformatan. Keunggulan utama Markdown meliputi: kesederhanaan dan kecepatan untuk tugas pemformatan dasar, portabilitas lintas platform yang sangat baik, ukuran file lebih kecil, kompatibilitas dengan kontrol versi, fokus pada konten daripada gaya, dan keluaran yang konsisten. Pengolah kata tradisional menawarkan opsi pemformatan lebih kompleks dan pengeditan visual langsung, tetapi sering membuat format file proprietary dengan masalah kompatibilitas. Untuk konten yang perlu dikonversi ke berbagai format (HTML, PDF) atau dibagikan di berbagai platform, Markdown adalah pilihan ideal."
        },
        {
          question: "Bisakah saya mengekspor dokumen Markdown ke format lain?",
          answer: "Ya, editor Markdown kami memungkinkan Anda mengekspor konten dalam berbagai format. Anda dapat mengunduh konten langsung sebagai file Markdown (.md) untuk pengeditan di masa depan, atau sebagai HTML untuk publikasi web. Untuk konversi ke format lain seperti PDF, DOCX (Word), atau format profesional lainnya, Anda dapat menggunakan ekspor HTML dikombinasikan dengan konverter pihak ketiga atau alat seperti Pandoc. Sifat Markdown yang bersih dan terstruktur menjadikannya format sumber yang sangat baik untuk dikonversi ke hampir semua jenis dokumen. Fleksibilitas inilah yang membuat Markdown menjadi pilihan utama untuk konten yang perlu ada dalam berbagai format atau platform."
        },
        {
          question: "Apakah editor ini mendukung Markdown gaya GitHub?",
          answer: "Ya, editor Markdown kami sepenuhnya mendukung Markdown gaya GitHub (GFM), yang mencakup semua fitur Markdown standar ditambah beberapa ekstensi yang membuatnya sangat cocok untuk dokumentasi teknis dan kode. Ekstensi ini meliputi pagar kode dengan penyorotan sintaks, tabel, teks coret, daftar tugas dengan kotak centang, dan tautan otomatis untuk URL. Editor juga merender elemen spesifik GFM dengan benar dalam mode pratinjau, seperti penyebutan pengguna, referensi isu, dan kode pendek emoji. Kompatibilitas ini memastikan dokumen yang dibuat di editor kami akan ditampilkan dengan benar di repositori, isu, permintaan tarik, dan halaman wiki GitHub."
        },
        {
          question: "Bisakah saya menggunakan editor Markdown ini untuk berkolaborasi dengan orang lain?",
          answer: "Meskipun editor Markdown kami tidak menyertakan fitur kolaborasi real-time bawaan (seperti Google Docs), Anda masih dapat berkolaborasi secara efektif dengan orang lain menggunakan alur kerja berbasis editor. Anda dapat mengekspor dokumen Markdown dan membagikannya melalui email atau aplikasi pesan, atau menggunakan editor bersama dengan sistem kontrol versi seperti Git untuk kolaborasi yang lebih terstruktur. Untuk tim, Anda dapat mempertimbangkan untuk menggabungkan editor dengan platform seperti GitHub, di mana beberapa kontributor dapat bekerja pada file Markdown, termasuk riwayat versi, permintaan tarik, dan komentar. Dibandingkan dengan format file biner, sifat teks biasa Markdown membuatnya sangat cocok untuk melacak perubahan dan menggabungkan kontribusi."
        },
        {
          question: "Bagaimana cara mempelajari sintaks Markdown jika saya pemula?",
          answer: "Mempelajari sintaks Markdown sangat mudah bahkan untuk pemula sama sekali. Editor kami menyertakan bilah alat pemformatan yang memungkinkan Anda menerapkan elemen Markdown umum dengan mengklik, membantu Anda mempelajari sintaks secara visual. Saat Anda menggunakan tombol-tombol ini, Anda akan melihat Markdown yang sesuai muncul dalam teks, menciptakan proses pembelajaran yang alami. Selain itu, pratinjau real-time menunjukkan bagaimana Markdown Anda akan dirender, memberikan umpan balik instan. Untuk pendekatan pembelajaran yang terstruktur, kami sarankan memulai dengan elemen dasar (judul, teks tebal, teks miring, tautan, dan daftar) sebelum beralih ke fitur yang lebih canggih seperti tabel dan blok kode. Karena desain Markdown yang intuitif, banyak pengguna menemukan bahwa mereka dapat menguasai dasar-dasarnya dalam waktu kurang dari 30 menit."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Menggunakan Editor Markdown",
      steps: [
        "Pertama, pilih <strong>mode edit</strong> yang Anda sukai dari bilah alat di atas - pilih tampilan terbagi (edit dan pratinjau berdampingan), hanya edit (untuk ruang menulis maksimal), atau hanya pratinjau (untuk melihat format akhir)",
        "Mulai mengetik konten di panel editor, menggunakan <strong>sintaks Markdown</strong> untuk pemformatan, atau gunakan tombol bilah alat pemformatan di atas editor untuk menyisipkan sintaks yang sesuai secara otomatis",
        "Gunakan tanda pagar untuk membuat struktur dokumen, atur <strong>judul</strong> (# untuk judul utama, ## untuk subjudul, dst.), atur konten menjadi bagian-bagian logis",
        "Gunakan <strong>gaya sebaris</strong> untuk memformat teks, seperti tanda bintang untuk *teks miring* atau **teks tebal**, tanda kutip terbalik untuk `kode`, atau tanda tilde untuk ~~teks coret~~, untuk menekankan poin penting",
        "Gunakan sintaks [teks tautan](URL) untuk menyisipkan <strong>tautan dan gambar</strong>, gambar menggunakan , buat konten yang kaya dan interaktif",
        "Atur informasi dengan <strong>daftar dan tabel</strong> - gunakan tanda hubung atau angka untuk membuat daftar, gunakan tanda pipa dan tanda hubung untuk membuat tabel terstruktur dengan baris dan kolom",
        "Pratinjau pekerjaan Anda secara real-time, lihat bagaimana <strong>dokumen terformat</strong> akan muncul, lakukan penyesuaian yang diperlukan sebelum mengunduh atau menyalin konten akhir"
      ]
    },
    conclusion: "Editor Markdown menyederhanakan proses pembuatan dokumen yang diformat dengan baik, menghindari kompleksitas pengolah kata tradisional dan kurva pembelajaran HTML. Dengan menyediakan lingkungan penulisan yang bersih dan bebas gangguan serta fitur pemformatan yang kuat, editor ini memungkinkan Anda fokus pada konten sambil mempertahankan presentasi yang konsisten dan profesional. Baik Anda seorang pengembang yang mendokumentasikan kode, penulis yang membuat posting blog, atau siswa yang mengatur catatan, sintaks intuitif Markdown yang dikombinasikan dengan pratinjau real-time editor kami membuat pembuatan dokumen lebih cepat dan lebih intuitif. Dengan semakin banyak platform yang mengadopsi dukungan Markdown, menguasai format serbaguna ini dengan editor kami memberi Anda keterampilan berharga yang dapat ditransfer ke banyak aplikasi dan alur kerja, menghemat waktu dan meningkatkan produktivitas untuk semua kebutuhan dokumen Anda."
  },
  defaultContent: `# Selamat Datang di Editor Markdown

Ini adalah editor Markdown sederhana dengan pratinjau real-time dan penyorotan sintaks.

## Sintaks Dasar

### Judul
Gunakan tanda # untuk judul, contoh:
# Judul Level 1
## Judul Level 2
### Judul Level 3

### Penekanan
**Tebal** atau __tebal__
*Miring* atau _miring_
~~Coret~~

### Daftar
Daftar tidak bernomor:
- Item 1
- Item 2
- Item 3

Daftar bernomor:
1. Item pertama
2. Item kedua
3. Item ketiga

### Tautan dan Gambar
[Teks tautan](https://contoh.com)


### Kode
Kode sebaris: \`var contoh = "halo";\`

### Kutipan
> Ini adalah paragraf kutipan.

### Tabel
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Sel 1    | Sel 2    | Sel 3    |
| Sel 4    | Sel 5    | Sel 6    |

### Garis Horisontal
---

Mulailah mengedit! Anda dapat menggunakan bilah alat di atas untuk menyisipkan berbagai elemen Markdown dengan cepat.`
}