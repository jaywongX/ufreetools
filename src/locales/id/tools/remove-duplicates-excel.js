export default {
    name: 'Alat Penghapusan Duplikat Excel - Penghapus Data Duplikat Lembar Kerja Online',
    description: 'Alat penghapusan duplikat Excel online gratis, mendukung file xlsx/xls/csv. Mengidentifikasi data duplikat secara cerdas, menyediakan berbagai aturan penghapusan, mendukung pemrosesan batch, dan ekspor dengan satu klik dalam format Excel/CSV',
    inputTitle: 'Unggah File Excel',
    outputTitle: 'Hasil Penghapusan Duplikat',
    dragTip: 'Seret dan lepas file Excel di sini atau klik untuk mengunggah',
    supported: 'Format yang didukung: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'Mulai Penghapusan Duplikat',
    downloadBtn: 'Unduh Hasil',
    noOutput: 'Tidak ada hasil penghapusan duplikat',
    loadSample: 'Muat Data Sampel',
    preview: 'Pratinjau Data',
    clearAll: 'Hapus Semua',
    originalData: 'Data Asli',
    deleteFile: 'Hapus File',
    batchDownload: 'Unduh Batch (ZIP)',
    exportFormat: 'Format Ekspor',
    dataQuality: 'Kualitas Data',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    resetView: 'Atur Ulang Tampilan',
    fullscreen: 'Pratinjau Layar Penuh',
    
    // Konfigurasi aturan penghapusan duplikat
    duplicateRulesTitle: 'Konfigurasi Aturan Penghapusan Duplikat',
    ruleType: 'Jenis Penghapusan Duplikat',
    ruleTypes: {
        fullRow: 'Penghapusan Duplikat Baris Penuh',
        singleColumn: 'Penghapusan Duplikat Kolom Tunggal',
        multiColumn: 'Penghapusan Duplikat Kombinasi Multi Kolom'
    },
    selectedColumns: 'Pilih Kolom',
    selectColumns: 'Silakan pilih kolom untuk menghapus duplikat',
    caseSensitive: 'Sensitif Huruf Besar/Kecil',
    trimSpaces: 'Hapus Spasi Awal/Akhir',
    ignoreEmpty: 'Abaikan Nilai Kosong',
    fuzzyMatch: 'Pencocokan Kabur',
    similarityThreshold: 'Ambang Batas Kemiripan',
    
    // Statistik data
    statisticsTitle: 'Statistik Data',
    originalRows: 'Baris Asli',
    duplicateRows: 'Baris Duplikat',
    uniqueRows: 'Baris Setelah Penghapusan Duplikat',
    duplicateRate: 'Tingkat Duplikat',
    
    // Tabel pratinjau
    previewTitle: 'Pratinjau Data',
    showDuplicates: 'Tampilkan Duplikat',
    showUnique: 'Tampilkan Item Unik',
    highlightDuplicates: 'Sorot Duplikat',
    
    // Opsi ekspor
    exportOptions: 'Opsi Ekspor',
    includeHeaders: 'Sertakan Header',
    encoding: 'Pengkodean File',
    delimiter: 'Pembatas',
    
    // Tombol aksi
    processBtn: 'Proses Data',
    resetBtn: 'Atur Ulang',
    saveTemplate: 'Simpan Template',
    loadTemplate: 'Muat Template',
    
    // Manajemen template
    savedTemplates: 'Template Tersimpan',
    deleteTemplate: 'Hapus',
    templateNamePrompt: 'Silakan masukkan nama template:',
    templateSaved: 'Template berhasil disimpan!',
    deleteTemplateConfirm: 'Apakah Anda yakin ingin menghapus template ini?',
    templateLoadError: 'Gagal memuat template:',
    
    // Data sampel
    sampleHeaders: {
        name: 'Nama',
        email: 'Email',
        phone: 'Telepon',
        department: 'Departemen'
    },
    sampleData: {
        zhangsan: 'Budi Santoso',
        lisi: 'Siti Rahayu',
        wangwu: 'Agus Prasetyo',
        zhaoliu: 'Dewi Kusuma',
        techDept: 'Departemen Teknologi',
        salesDept: 'Departemen Penjualan',
        hrDept: 'Departemen Sumber Daya Manusia',
        financeDept: 'Departemen Keuangan'
    },
    
    // Terkait ekspor
    exportSheetName: 'Hasil Penghapusan Duplikat',
    exportFileName: 'Hasil Penghapusan Duplikat',
    jsonMetadataTitle: 'Hasil Penghapusan Duplikat Excel',
    columnNumber: 'Kolom {number}',
    
    // Pesan kesalahan
    processError: 'Kesalahan saat memproses file, silakan periksa format file'
};