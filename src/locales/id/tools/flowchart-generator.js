export default {
  name: 'Pembuat Diagram Alir',
  description: 'Buat diagram alir dan bagan menggunakan sintaks berbasis teks sederhana',
  title: 'Pembuat Diagram Alir dan Bagan',
  renderBtn: 'Render Diagram',
  resetBtn: 'Reset',
  downloadSvgBtn: 'Unduh SVG',
  copySvgBtn: 'Salin SVG',

  input: {
    title: 'Definisi Diagram Alir',
    placeholder: 'Masukkan kode sintaks Mermaid...',
    loadExample: 'Muat Contoh',
    clear: 'Hapus',
    uploadFile: 'Unggah File'
  },

  output: {
    title: 'Diagram Alir yang Dihasilkan',
    downloadImage: 'Unduh Gambar',
    downloadSVG: 'Unduh SVG',
    copyImage: 'Salin Gambar',
    copySVG: 'Salin SVG',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    fitView: 'Sesuaikan Tampilan',
    resetView: 'Reset Tampilan',
    preview: 'Pratinjau',
    code: 'Kode Mermaid'
  },

  options: {
    title: 'Opsi',
    theme: 'Tema',
    orientation: 'Orientasi',
    nodeShape: 'Bentuk Node',
    arrowStyle: 'Gaya Panah',
    lineStyle: 'Gaya Garis',
    textPosition: 'Posisi Teks',
    fontSize: 'Ukuran Font',
    fontFamily: 'Jenis Font',
    showGrid: 'Tampilkan Grid',
    autoRender: 'Render Otomatis'
  },

  themes: {
    default: 'Default',
    simple: 'Minimalis',
    forest: 'Hutan',
    neutral: 'Netral',
    dark: 'Gelap',
    business: 'Bisnis',
    base: 'Dasar',
    custom: 'Kustom'
  },

  orientations: {
    topToBottom: 'Atas ke Bawah',
    bottomToTop: 'Bawah ke Atas',
    leftToRight: 'Kiri ke Kanan',
    rightToLeft: 'Kanan ke Kiri'
  },

  nodeShapes: {
    rectangle: 'Persegi Panjang',
    roundedRectangle: 'Persegi Panjang Bulat',
    circle: 'Lingkaran',
    diamond: 'Belah Ketupat',
    hexagon: 'Segi Enam',
    parallelogram: 'Jajar Genjang'
  },

  arrowStyles: {
    arrow: 'Panah',
    open: 'Terbuka',
    filled: 'Terisi',
    diamond: 'Belah Ketupat',
    circle: 'Lingkaran'
  },

  lineStyles: {
    solid: 'Garis Padat',
    dashed: 'Garis Putus-putus',
    dotted: 'Garis Titik-titik',
    curved: 'Garis Lengkung',
    straight: 'Garis Lurus',
    orthogonal: 'Ortogonal'
  },

  syntax: {
    title: 'Bantuan Sintaks',
    node: 'Node',
    edge: 'Edge',
    subgraph: 'Subgraph',
    comment: 'Komentar',
    styling: 'Styling',
    showMore: 'Tampilkan Lebih Banyak'
  },

  actions: {
    render: 'Render Diagram Alir',
    save: 'Simpan Diagram',
    export: 'Ekspor',
    share: 'Bagikan'
  },

  messages: {
    renderSuccess: 'Diagram alir berhasil dirender',
    renderError: 'Gagal merender diagram alir: {error}',
    syntaxError: 'Kesalahan sintaks: {error}',
    saved: 'Diagram telah disimpan',
    copied: 'Kode SVG telah disalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    exported: 'Diagram alir telah diekspor',
    emptyCode: 'Masukkan kode sintaks Mermaid',
    rendering: 'Sedang merender...',
    errorTitle: 'Kesalahan Render'
  },

  examples: {
    flowchart: 'Diagram Alir',
    classDiagram: 'Diagram Kelas',
    sequenceDiagram: 'Diagram Urutan',
    entityRelationship: 'Diagram Relasi Entitas',
    gantt: 'Diagram Gantt',
    stateDiagram: 'Diagram State',
    pieChart: 'Diagram Pie',
    userJourney: 'Diagram Perjalanan Pengguna'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[Mulai] --> B{Apakah benar?}
    B -->|Ya| C[Hasil Benar]
    B -->|Tidak| D[Hasil Salah]
    C --> E[Selesai]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant Klien
    participant Server
    Klien->>Server: Permintaan Data
    Server-->>Klien: Respons Data
    Klien->>Server: Kirim Formulir
    Server-->>Klien: Konfirmasi Pengiriman
`,
    gantt: `gantt
    title Rencana Jadwal Proyek
    dateFormat  YYYY-MM-DD
    section Fase Perencanaan
    Pengumpulan Kebutuhan :a1, 2023-01-01, 30d
    Desain Sistem :after a1, 20d
    section Fase Pengembangan
    Pengembangan Backend :2023-02-20, 45d
    Pengembangan Frontend :2023-02-25, 40d
    section Fase Pengujian
    Pengujian Sistem :2023-04-05, 20d
    Pengujian Pengguna :2023-04-20, 15d
    section Fase Peluncuran
    Deploy :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> Sedang Edit
    Sedang Edit --> Sedang Review: Kirim Review
    Sedang Review --> Ditolak: Tolak
    Sedang Review --> Diterbitkan: Setujui
    Ditolak --> Sedang Edit: Edit Ulang
    Diterbitkan --> [*]
`,
    pieChart: `pie
    title Distribusi Sumber Kunjungan Website
    "Mesin Pencari" : 42.7
    "Akses Langsung" : 28.9
    "Media Sosial" : 18.5
    "Channel Lain" : 9.9
`,
    classDiagram: `classDiagram
    class Hewan {
        +String nama
        +int umur
        +bersuara() void
    }
    class Anjing {
        +String ras
        +ambil() void
    }
    class Kucing {
        +String warna
        +memanjat() void
    }
    Hewan <|-- Anjing
    Hewan <|-- Kucing
`
  }
};