export default {
  title: 'Alat Pemilih Koordinat dan Kueri Lintang-Bujur: Panduan Kueri Lintang-Bujur Online dan Konversi Koordinat Proyeksi EPSG',
  functionTitle: 'Apa itu Alat Pemilih Koordinat dan Kueri Lintang-Bujur? Apa fungsi utamanya?',
  intro: '<strong>Alat Pemilih Koordinat dan Kueri Lintang-Bujur</strong> kami mengintegrasikan pemilihan titik klik peta, <strong>kueri lintang-bujur</strong>, <strong>konversi koordinat proyeksi EPSG</strong>, dan pencarian nama tempat untuk menyelesaikan pemilihan koordinat dan ekspor format koordinat dengan cepat dan akurat. Dengan alat online ini, Anda dapat menyelesaikan konversi nama tempat ke koordinat, WGS84 ke berbagai koordinat proyeksi EPSG di browser, secara signifikan meningkatkan efisiensi anotasi survei, analisis lokasi, dan pembuatan peta.',
  useCasesTitle: 'Skenario Aplikasi Tipikal: Bagaimana Alat Pemilih Koordinat dan Kueri Lintang-Bujur Memecahkan Masalah',
  useCases: [
    'Pemilihan lokasi media baru dan pembuatan titik check-in: pemilihan lintang-bujur cepat, ekspor untuk visualisasi peta',
    'Pembuatan peta GIS dan pengumpulan lapangan: pemilihan klik titik, ekspor CSV/GeoJSON, berlaku untuk impor ArcGIS/QGIS',
    'Pemilihan lokasi pemerintah dan real estat: pencarian nama tempat ← koordinat, pengumpulan satu klik lokasi kandidat',
    'Penentuan lokasi logistik dan layanan: pencatatan koordinat beberapa fasilitas/pesanan kerja, ekspor batch',
    'Pendidikan dan penelitian: demonstrasi perbedaan dan konversi antara WGS84 dan koordinat proyeksi EPSG',
    'Navigasi pariwisata dan outdoor: penyimpanan lintang-bujur dan koordinat proyeksi tempat wisata dan perkemahan',
    'Pengembangan dan pengujian: sampel lintang-bujur presisi diperlukan untuk integrasi frontend/backend',
    'Anotasi konten multi-regional: file koordinat format terpadu, berguna untuk integrasi data lintas wilayah'
  ],
  tipTitle: 'Tips Profesional:',
  tipContent: 'Saat ekspor CSV, disarankan untuk menyertakan field name, lat, lon, epsg, x, y, time, cocok untuk pemrosesan batch dan pelacakan di QGIS/Excel.',
  conclusion: '<strong>Alat Pemilih Koordinat dan Kueri Lintang-Bujur</strong> ini dirancang untuk berbagai skenario seperti survei, visualisasi, pengembangan, dan layanan, mendukung <strong>konversi koordinat proyeksi EPSG</strong>, pencarian nama tempat, dan ekspor batch. Dengan menyelesaikan kueri lintang-bujur online dan konversi koordinat, dapat secara signifikan mengurangi biaya instalasi perangkat lunak dan meningkatkan efisiensi kolaborasi.',
  faqTitle: 'Pertanyaan yang Sering Diajukan (FAQ)',
  faqs: [
    {
      question: 'Konversi koordinat proyeksi EPSG apa yang didukung oleh Alat Pemilih Koordinat dan Kueri Lintang-Bujur?',
      answer: 'Alat ini memiliki konversi terintegrasi untuk WGS84 (EPSG:4326), Web Mercator (EPSG:3857), CGCS2000 (EPSG:4490), dan juga mendukung input definisi PROJ4 kustom. Setelah mengklik peta, lintang-bujur yang dipilih dan koordinat proyeksi EPSG akan ditampilkan secara bersamaan.'
    },
    {
      question: 'Bagaimana cara mengkonversi nama tempat dengan cepat ke koordinat lintang-bujur dan menandai di peta?',
      answer: 'Setelah memasukkan nama tempat di kotak pencarian, gunakan fungsi pencarian nama tempat ← koordinat untuk mendapatkan hasil Nominatim, pilih kandidat untuk positioning dan penambahan marker, lalu ekspor ke CSV atau GeoJSON.'
    },
    {
      question: 'Bagaimana cara menyalin hasil kueri lintang-bujur atau mengekspor file koordinat secara batch?',
      answer: 'Area hasil di sebelah kanan mendukung penyalinan satu klik seluruh teks koordinat dan dapat mengekspor file dalam format CSV atau GeoJSON, kompatibel dengan sebagian besar platform GIS/visualisasi.'
    },
    {
      question: 'Apakah alat pemilih koordinat mendukung perangkat mobile dan tablet?',
      answer: 'Ya, antarmuka menggunakan grid responsif, dan operasi <strong>kueri lintang-bujur</strong>, penandaan, dan ekspor berjalan lancar di ponsel dan tablet.'
    },
    {
      question: 'Apa saja tindakan pencegahan saat menggunakan konversi koordinat proyeksi EPSG?',
      answer: 'Sistem EPSG yang berbeda memiliki perbedaan datum dan proyeksi. Jika sistem koordinat target tidak terintegrasi, berikan definisi PROJ4 yang benar dan konfirmasi unit sebelum konversi (lintang-bujur dalam derajat, proyeksi biasanya dalam meter).'
    }
  ],
  tutorialTitle: 'Cara Menggunakan Alat Pemilih Koordinat dan Kueri Lintang-Bujur: Langkah Operasi Terperinci',
  steps: [
    {
      title: 'Buka alat dan muat peta',
      description: 'Setelah memasuki halaman alat, peta akan dimuat secara otomatis. Jika jaringan terbatas, periksa akses jaringan eksternal atau ganti lingkungan jaringan untuk memastikan ketersediaan peta dasar dan pencarian nama tempat.',
      note: 'Sistem koordinat default peta adalah WGS84, unit lintang-bujur dalam derajat.'
    },
    {
      title: 'Pencarian nama tempat dan positioning',
      description: 'Masukkan nama tempat di kotak pencarian (dukungan multibahasa), klik "Cari", pilih lokasi target dari kandidat untuk dipusatkan di peta.',
      note: 'Kandidat disediakan oleh OpenStreetMap Nominatim.'
    },
    {
      title: 'Klik peta untuk memilih lintang-bujur',
      description: 'Klik di mana saja di peta, lintang-bujur yang dipilih dan koordinat proyeksi EPSG akan dicatat secara otomatis dan ditampilkan dalam daftar hasil koordinat di sebelah kanan.',
      note: 'Mendukung beberapa klik, dapat menandai beberapa titik.'
    },
    {
      title: 'Ubah atau sesuaikan proyeksi EPSG',
      description: 'Pilih sistem koordinat umum (4326/3857/4490) di sebelah kiri atau masukkan definisi PROJ4 kustom, alat akan segera mengkonversi koordinat proyeksi dan menerapkannya pada pemilihan titik berikutnya.',
      note: 'Mengubah sistem koordinat tidak memodifikasi lintang-bujur titik yang ada, hanya mempengaruhi field koordinat proyeksi.'
    },
    {
      title: 'Salin koordinat atau ekspor',
      description: 'Pilih format ekspor (CSV atau GeoJSON), klik "Salin Semua" atau "Ekspor File" untuk menggunakan koordinat dalam operasi GIS/visualisasi/pengembangan.',
      note: 'CSV cocok untuk pemrosesan batch di Excel/QGIS, GeoJSON cocok untuk peta web dan penggunaan API.'
    },
    {
      title: 'Hapus atau lanjutkan penandaan',
      description: 'Jika perlu memulai ulang, klik "Hapus Marker". Kemudian lanjutkan pencarian atau pemilihan titik untuk secara bertahap menyempurnakan daftar koordinat.',
      note: 'Ingat untuk mengubah sistem koordinat EPSG tepat waktu sesuai dengan kebutuhan proyek yang berbeda.'
    }
  ],
  successTitle: 'Selamat!',
  successContent: 'Anda telah mempelajari cara menggunakan Alat Pemilih Koordinat dan Kueri Lintang-Bujur untuk menyelesaikan pengumpulan koordinat dan konversi koordinat proyeksi EPSG, dan dapat secara efisien menghasilkan file data standar untuk GIS dan visualisasi.',
  relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Minati',
  relatedTools: [
    {
      name: 'Konverter Sistem Koordinat',
      description: 'Konversi koordinat geografis antara berbagai sistem koordinat, termasuk WGS-84, GCJ-02, BD-09, Web Mercator, UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Pemutaran Trek GPS',
      description: 'Visualisasi dan pemutaran trek GPS dari berbagai format file (GPX, KML, GeoJSON, CSV)',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Konversi Langsung dan Terbalik Proyeksi Gauss',
      description: 'Alat konversi timbal balik antara koordinat proyeksi Gauss dan koordinat geografis (lintang-bujur)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'Penampil Awan Titik LIDAR',
      description: 'Penampil awan titik LIDAR online gratis, mendukung format LAS, XYZ, PLY, PCD. Menyediakan visualisasi 3D, beberapa mode warna, navigasi interaktif, dan fungsi analisis data',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: 'Referensi',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: 'Layanan pencarian nama tempat dan geocoding',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'Pencarian sistem referensi koordinat EPSG dan definisi PROJ4',
      url: 'https://epsg.io/'
    },
    {
      name: 'Dokumentasi Leaflet',
      description: 'Perpustakaan peta web ringan',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Dokumentasi Proj4',
      description: 'Dokumentasi perpustakaan konversi koordinat',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}