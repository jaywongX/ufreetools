export default {
  name: 'Daftar Tugas',
  description: 'Buat, kelola, dan organisasikan tugas dan aktivitas Anda',
  
  // Teks antarmuka utama
  newTask: 'Tugas Baru',
  addTask: 'Tambahkan Tugas',
  taskTitle: 'Judul Tugas',
  description: 'Deskripsi',
  dueDate: 'Tanggal Tenggat',
  priority: 'Prioritas',
  category: 'Kategori',
  status: 'Status',
  actions: 'Aksi',
  
  // Prioritas
  priorities: {
    high: 'Tinggi',
    medium: 'Sedang',
    low: 'Rendah'
  },
  
  // Kategori
  categories: {
    work: 'Pekerjaan',
    personal: 'Pribadi',
    shopping: 'Belanja',
    health: 'Kesehatan',
    finance: 'Keuangan',
    other: 'Lainnya'
  },
  
  // Status
  statuses: {
    all: 'Semua',
    pending: 'Belum Selesai',
    completed: 'Selesai'
  },
  
  // Teks tombol
  edit: 'Edit',
  delete: 'Hapus',
  save: 'Simpan',
  cancel: 'Batal',
  clear: 'Hapus yang Selesai',
  clearAll: 'Hapus Semua',
  
  // Filter dan pengurutan
  filter: 'Filter',
  filterBy: 'Filter Berdasarkan',
  sortBy: 'Urutkan Berdasarkan',
  search: 'Cari tugas...',
  
  // Opsi pengurutan
  sortOptions: {
    dateCreatedAsc: 'Tanggal Dibuat (Naik)',
    dateCreatedDesc: 'Tanggal Dibuat (Turun)',
    dueDateAsc: 'Tanggal Tenggat (Naik)',
    dueDateDesc: 'Tanggal Tenggat (Turun)',
    priorityAsc: 'Prioritas (Naik)',
    priorityDesc: 'Prioritas (Turun)',
    titleAsc: 'Judul (A-Z)',
    titleDesc: 'Judul (Z-A)'
  },
  
  // Informasi statistik
  statistics: 'Statistik',
  totalTasks: 'Total Tugas',
  completedTasks: 'Tugas Selesai',
  pendingTasks: 'Tugas Belum Selesai',
  completionRate: 'Tingkat Penyelesaian',
  tasks: 'Tugas',
  
  // Pesan konfirmasi
  taskAdded: 'Tugas telah ditambahkan',
  taskUpdated: 'Tugas telah diperbarui',
  taskDeleted: 'Tugas telah dihapus',
  confirmDelete: 'Apakah Anda yakin ingin menghapus tugas ini?',
  confirmDeleteAll: 'Apakah Anda yakin ingin menghapus semua tugas yang selesai?',
  confirmClearAll: 'Apakah Anda yakin ingin menghapus semua tugas?',
  noTasks: 'Tidak ada tugas',
  noFilteredTasks: 'Tidak ada tugas yang sesuai',
  titleRequired: 'Judul tugas tidak boleh kosong',
  
  // Tentang alat
  aboutTitle: 'Tentang Daftar Tugas',
  aboutDescription: 'Daftar Tugas adalah alat manajemen tugas yang sederhana dan efisien untuk membantu Anda mengorganisir berbagai aktivitas sehari-hari. Dengan menambahkan, mengedit, dan menandai tugas, Anda dapat melacak kemajuan dan meningkatkan produktivitas.',
  
  featuresTitle: 'Fitur Utama',
  feature1: 'Tambah, edit, dan hapus tugas',
  feature2: 'Atur prioritas dan tanggal tenggat',
  feature3: 'Kelompokkan tugas berdasarkan kategori',
  feature4: 'Tandai tugas sebagai selesai',
  feature5: 'Filter dan urutkan tugas dengan berbagai kriteria',
  feature6: 'Penyimpanan lokal, data tidak hilang',
  
  howToUseTitle: 'Cara Menggunakan',
  howToUseStep1: '1. Klik tombol "Tugas Baru" untuk menambahkan tugas',
  howToUseStep2: '2. Isi judul, deskripsi, tanggal tenggat, dll.',
  howToUseStep3: '3. Gunakan filter dan pengurutan untuk mengatur daftar',
  howToUseStep4: '4. Centang kotak saat tugas selesai',
  howToUseStep5: '5. Gunakan fitur edit dan hapus untuk mengelola tugas',
  
  tipsTitle: 'Tips Penggunaan',
  tip1: 'Atur prioritas tinggi untuk tugas penting',
  tip2: 'Gunakan kategori untuk mengelompokkan tugas',
  tip3: 'Bersihkan tugas selesai secara berkala',
  tip4: 'Manfaatkan filter untuk fokus pada tugas penting',
  tip5: 'Atur tanggal tenggat yang realistis'
};