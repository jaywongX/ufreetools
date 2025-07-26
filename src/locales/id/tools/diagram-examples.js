export default {
  name: 'Contoh Diagram',
  description: 'Jelajahi dan gunakan berbagai contoh diagram untuk memenuhi kebutuhan pemodelan yang berbeda',
  title: 'Contoh Diagram Alir Tingkat Lanjut',

  categories: {
    title: 'Kategori',
    flowcharts: 'Diagram Alir',
    uml: 'Diagram UML',
    network: 'Diagram Jaringan',
    architecture: 'Diagram Arsitektur',
    entity: 'Diagram Relasi Entitas',
    sequence: 'Diagram Urutan',
    mindmaps: 'Peta Pikiran',
    gantt: 'Diagram Gantt',
    other: 'Diagram Lainnya'
  },

  actions: {
    search: 'Cari Contoh',
    filter: 'Filter Berdasarkan Kategori',
    sortBy: 'Urutkan Berdasarkan',
    useExample: 'Gunakan Contoh Ini',
    viewFull: 'Lihat Ukuran Penuh',
    copyCode: 'Salin Kode',
    addToFavorites: 'Tambahkan ke Favorit',
    removeFavorite: 'Hapus dari Favorit'
  },

  sortOptions: {
    popularity: 'Popularitas',
    newest: 'Terbaru',
    alphabetical: 'Abjad',
    complexity: 'Kompleksitas'
  },

  exampleDetail: {
    title: 'Detail Contoh',
    description: 'Deskripsi',
    syntax: 'Sintaks',
    codeView: 'Tampilan Kode',
    diagramView: 'Tampilan Diagram',
    complexity: 'Kompleksitas',
    tags: 'Tag',
    relatedExamples: 'Contoh Terkait'
  },

  complexityLevels: {
    beginner: 'Pemula',
    intermediate: 'Menengah',
    advanced: 'Lanjutan'
  },

  messages: {
    copied: 'Kode telah disalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    added: 'Ditambahkan ke favorit',
    removed: 'Dihapus dari favorit',
    noResults: 'Tidak ada contoh yang sesuai dengan kriteria pencarian Anda',
    loading: 'Memuat contoh...'
  },

  filters: {
    all: 'Semua Kategori',
    favorites: 'Hanya Favorit',
    recently: 'Baru Dilihat'
  },

  examples: {
    softwareDevelopment: 'Diagram Alir Pengembangan Perangkat Lunak',
    projectManagement: 'Diagram Gantt Manajemen Proyek',
    userRegistration: 'Alur Pendaftaran Pengguna'
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[Analisis Kebutuhan] --> B[Desain Sistem]
    B --> C[Implementasi Kode]
    C --> D[Pengujian Unit]
    D --> E(Lulus Tes?)
    E -- Tidak --> C
    E -- Ya --> F[Integrasi Sistem]
    F --> G[Pengujian Sistem]
    G --> H(Lulus Tes?)
    H -- Tidak --> F
    H -- Ya --> I[Deploy]
    I --> J[Pemeliharaan]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title Rencana Proyek Pengembangan Produk
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section Perencanaan
    Riset Pasar           :a1, 2023-01-01, 15d
    Analisis Kebutuhan    :a2, after a1, 10d
    Perencanaan Produk    :a3, after a2, 5d
    
    section Desain
    Desain Prototipe      :b1, after a3, 15d
    Desain UI             :b2, after b1, 10d
    Pengujian Pengguna    :b3, after b2, 5d
    
    section Pengembangan
    Arsitektur Backend    :c1, after b1, 20d
    Pengembangan Frontend :c2, after b2, 15d
    Integrasi API         :c3, after c1, 10d
    
    section Pengujian
    Pengujian Unit        :d1, after c2, 8d
    Pengujian Integrasi   :d2, after c3, 7d
    Pengujian Performa    :d3, after d2, 5d
    
    section Peluncuran
    Tinjauan Internal     :e1, after d3, 5d
    Persiapan Deploy      :e2, after e1, 2d
    Peluncuran Resmi      :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant Pengguna
    participant Frontend
    participant Backend
    participant Database
    participant Layanan Email
    
    Pengguna->>Frontend: Mengisi formulir pendaftaran
    Frontend->>Frontend: Validasi formulir
    Frontend->>Backend: Kirim data pendaftaran
    Backend->>Backend: Verifikasi data pengguna
    Backend->>Database: Periksa keberadaan pengguna
    Database-->>Backend: Hasil pemeriksaan
    
    alt Pengguna sudah ada
        Backend-->>Frontend: Kirim error pengguna sudah ada
        Frontend-->>Pengguna: Tampilkan pesan error
    else Pengguna baru
        Backend->>Database: Buat rekaman pengguna baru
        Backend->>Layanan Email: Kirim email verifikasi
        Layanan Email-->>Pengguna: Kirim email dengan tautan verifikasi
        Backend-->>Frontend: Kirim konfirmasi sukses
        Frontend-->>Pengguna: Tampilkan pesan sukses
    end
    
    Pengguna->>Layanan Email: Klik tautan verifikasi
    Layanan Email->>Backend: Permintaan verifikasi
    Backend->>Database: Update status pengguna menjadi terverifikasi
    Backend-->>Pengguna: Alihkan ke halaman login`
  }
};