export default {
    name: 'Visualisasi Peta Panas Wajah AI',
    description: 'Gunakan kecerdasan buatan untuk menganalisis fitur wajah, menghasilkan peta panas, dan memberikan saran perbaikan foto. Berdasarkan teknologi pengenalan wajah untuk membantu mengoptimalkan pencahayaan dan komposisi foto.',
    inputTitle: 'Gambar Masukan',
    outputTitle: 'Analisis Peta Panas',
    dragTip: 'Seret dan lepas gambar di sini atau klik untuk mengunggah',
    supported: 'Format yang didukung: PNG, JPEG, BMP, WEBP',
    processBtn: 'Hasilkan Peta Panas',
    downloadBtn: 'Unduh',
    noOutput: 'Belum ada gambar keluaran',
    loadSample: 'Muat Gambar Contoh',
    preview: 'Pratinjau Gambar',
    clearAll: 'Hapus Semua',
    originalImage: 'Gambar Asli',
    deleteImage: 'Hapus Gambar',
    batchDownload: 'Unduh Batch (ZIP)',
    exportFormat: 'Format Ekspor',
    imageQuality: 'Kualitas Gambar',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    resetView: 'Atur Ulang Tampilan',
    fullscreen: 'Pratinjau Layar Penuh',
    closePreview: 'Tutup Pratinjau',
    analysisTitle: 'Hasil Analisis',
    noFaceDetected: 'Tidak ada wajah terdeteksi, coba gunakan foto frontal yang lebih jelas',
    loadingModels: 'Memuat model pengenalan wajah',
    loadingModelsTip: 'Penggunaan pertama memerlukan pengunduhan file model, harap tunggu...',
    disclaimer: 'Alat ini hanya untuk analisis gambar dan tujuan pendidikan dan tidak menyimpan gambar Anda secara permanen',
    modelInfo: 'Menggunakan teknologi pengenalan wajah yang disediakan oleh face-api.js',
    
    // Pengaturan parameter
    paramSettings: 'Pengaturan Parameter',
    heatmapIntensity: 'Intensitas Peta Panas',
    heatmapRadius: 'Ukuran Titik Panas',
    colorScheme: 'Skema Warna',
    showLandmarks: 'Tampilkan Landmark',
    
    expressions: {
        neutral: 'Netral',
        happy: 'Bahagia',
        sad: 'Sedih',
        angry: 'Marah',
        fearful: 'Takut',
        disgusted: 'Jijik',
        surprised: 'Terkejut'
    },
    
    expressionDetected: 'Ekspresi terdeteksi: {expression}',
    
    lightingTips: {
        leftDark: 'Pencahayaan tidak cukup di sisi kiri, coba tambahkan sumber cahaya di kiri',
        rightDark: 'Pencahayaan tidak cukup di sisi kanan, coba tambahkan sumber cahaya di kanan',
        tooLow: 'Pencahayaan umum tidak cukup, pertimbangkan untuk menambahkan cahaya ambien atau flash',
        tooHigh: 'Cahaya terlalu kuat, dapat menyebabkan overexposure, pertimbangkan untuk mengurangi sumber cahaya atau menggunakan cahaya lembut',
        good: 'Pencahayaan bagus, pencahayaan wajah merata'
    },
    
    positionTips: {
        tooLeft: 'Posisi wajah terlalu ke kiri, disarankan bergerak ke kanan',
        tooRight: 'Posisi wajah terlalu ke kanan, disarankan bergerak ke kiri',
        tooHigh: 'Posisi wajah terlalu tinggi, disarankan bergerak ke bawah',
        tooLow: 'Posisi wajah terlalu rendah, disarankan bergerak ke atas',
        tooSmall: 'Proporsi wajah dalam bingkai terlalu kecil, disarankan mendekat',
        tooBig: 'Proporsi wajah dalam bingkai terlalu besar, disarankan menambah jarak pengambilan gambar'
    }
};