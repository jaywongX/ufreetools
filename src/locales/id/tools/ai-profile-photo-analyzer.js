export default {
    name: 'Penganalisis Foto Profil AI - Alat Analisis Foto Profesional',
    description: 'Alat online gratis untuk menganalisis foto profil dan potret Anda. Dapatkan umpan balik berbasis AI tentang posisi kepala, senyuman, kontak mata, dan kualitas pencahayaan untuk meningkatkan foto profesional Anda.',
    inputTitle: 'Unggah Foto',
    outputTitle: 'Hasil Analisis',
    dragTip: 'Seret dan lepas foto di sini atau klik untuk mengunggah',
    supported: 'Format yang didukung: PNG, JPEG, BMP, WEBP',
    analyzeBtn: 'Analisis Foto',
    downloadBtn: 'Unduh',
    noOutput: 'Belum ada foto yang dianalisis',
    loadSample: 'Muat Foto Contoh',
    preview: 'Pratinjau Foto',
    clearAll: 'Hapus Semua',
    originalImage: 'Foto Asli',
    deleteImage: 'Hapus Foto',
    batchDownload: 'Unduh Massal (ZIP)',
    exportFormat: 'Format Ekspor',
    imageQuality: 'Kualitas Gambar',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    resetView: 'Atur Ulang Tampilan',
    fullscreen: 'Pratinjau Layar Penuh',
    analysisResults: 'Hasil Analisis',
    overallScore: 'Skor Keseluruhan',
    headPosition: 'Posisi Kepala',
    smileDetection: 'Deteksi Senyuman',
    eyeContact: 'Kontak Mata',
    lightingQuality: 'Kualitas Pencahayaan',
    recommendations: 'Rekomendasi',
    noFaceDetected: 'Tidak ada wajah yang terdeteksi dalam gambar ini. Harap unggah foto yang jelas dengan wajah yang terlihat.',
    disclaimer: 'Penafian',
    disclaimerText: 'Alat ini menggunakan AI untuk menganalisis foto profil. Hasil hanya untuk referensi dan dapat bervariasi berdasarkan kualitas gambar dan kondisi pencahayaan. Semua pemrosesan dilakukan di browser Anda, dan foto Anda tidak diunggah ke server mana pun.',
    modelInfo: 'Didukung oleh face-api.js, API JavaScript sumber terbuka untuk deteksi dan pengenalan wajah di browser.',
    
    positions: {
        straight: 'Lurus',
        slightlyTilted: 'Sedikit Miring',
        tilted: 'Miring',
        unknown: 'Tidak Diketahui'
    },
    
    tips: {
        headStraight: 'Bagus! Kepala Anda diposisikan lurus, yang ideal untuk foto profesional.',
        headSlightlyTilted: 'Kepala Anda sedikit miring. Posisi yang lebih lurus mungkin terlihat lebih profesional.',
        headTilted: 'Kepala Anda terlihat miring. Cobalah untuk menjaga kepala Anda tetap lurus untuk foto profesional.',
        
        smileLow: 'Cobalah untuk tersenyum lebih alami agar terlihat ramah dan percaya diri.',
        smileMedium: 'Senyuman Anda bisa lebih menarik. Cobalah senyum yang alami dan santai.',
        smileGood: 'Senyum yang bagus! Anda terlihat ramah dan profesional.',
        smileExcellent: 'Senyum yang sangat bagus! Anda terlihat sangat ramah dan percaya diri.',
        
        eyeContactLow: 'Cobalah untuk melihat langsung ke kamera untuk kontak mata yang lebih baik.',
        eyeContactMedium: 'Kontak mata Anda bisa ditingkatkan. Lihat langsung ke lensa kamera.',
        eyeContactGood: 'Kontak mata yang baik. Anda terlihat terlibat dan penuh perhatian.',
        eyeContactExcellent: 'Kontak mata yang sangat baik. Anda terlihat percaya diri dan terlibat.',
        
        lightingLow: 'Pencahayaan terlalu gelap atau tidak merata. Cobalah mengambil foto dalam kondisi pencahayaan yang lebih baik.',
        lightingMedium: 'Pencahayaan bisa ditingkatkan. Cahaya alami dan tersebar bekerja paling baik.',
        lightingGood: 'Pencahayaan bagus. Wajah Anda terlihat dengan baik dan jelas terlihat.',
        lightingExcellent: 'Pencahayaan sangat bagus. Wajah Anda terlihat sempurna.'
    },
    
    recommendations: {
        title: 'Saran Perbaikan',
        improveHeadPosition: 'Jaga kepala Anda tetap lurus dan sejajar dengan kamera untuk tampilan yang lebih profesional.',
        improveSmile: 'Cobalah senyum alami yang menunjukkan kepercayaan diri dan keramahan.',
        naturalSmile: 'Senyuman Anda terlihat sangat lebar - senyuman yang sedikit lebih halus mungkin terlihat lebih profesional dalam beberapa konteks.',
        improveEyeContact: 'Lihat langsung ke lensa kamera untuk membangun kontak mata yang lebih baik.',
        improveLighting: 'Ambil foto dalam kondisi pencahayaan yang lebih baik - cahaya alami dan tersebar dari depan bekerja paling baik.',
        goodPhoto: 'Foto yang bagus! Ini memenuhi standar profesional untuk foto profil.'
    }
};