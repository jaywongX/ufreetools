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
};