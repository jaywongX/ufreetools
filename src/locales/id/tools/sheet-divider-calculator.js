export default {
    name: 'Kalkulator Pembagian Lembar Peta - Alat Kueri Nomor Lembar Peta Online',
    description: 'Menghitung nomor lembar peta berdasarkan koordinat, mendukung berbagai skala dan metode proyeksi',
    icon: 'map',
    tags: ['peta', 'pembagian', 'koordinat', 'skala', 'proyeksi'],
    
    // Antarmuka pengguna
    ui: {
        title: 'Kalkulator Pembagian Lembar Peta',
        subtitle: 'Menghitung nomor lembar peta berdasarkan koordinat',
        inputTitle: 'Input Koordinat',
        outputTitle: 'Hasil Perhitungan',
        
        // Input koordinat
        latitudePlaceholder: 'Lintang (mis: 39.9042)',
        longitudePlaceholder: 'Bujur (mis: 116.4074)',
        batchInputPlaceholder: 'Input batch: lintang,bujur,deskripsi (opsional)\nContoh: 39.9042,116.4074,Beijing\n40.7128,-74.0060,New York',
        
        // Tombol
        calculateButton: 'Hitung Lembar',
        clearButton: 'Hapus Semua',
        loadSampleButton: 'Muat Data Contoh',
        exportExcelButton: 'Ekspor ke Excel',
        exportPDFButton: 'Ekspor ke PDF',
        
        // Pengaturan parameter
        parameterSettings: 'Pengaturan Parameter',
        scaleLabel: 'Skala',
        zoneMethodLabel: 'Metode Zona',
        threeDegreeZone: 'Zona 3 derajat',
        sixDegreeZone: 'Zona 6 derajat',
        
        // Tampilan hasil
        resultColumns: {
            sheetNumber: 'Nomor Lembar',
            latitude: 'Lintang',
            longitude: 'Bujur',
            scale: 'Skala',
            zone: 'Zona',
            centralMeridian: 'Meridian Tengah',
            description: 'Deskripsi'
        },
        
        // Grid peta
        gridTitle: 'Grid Peta',
        noResults: 'Tidak ada hasil untuk ditampilkan',
        
        // Pesan
        invalidCoordinates: 'Koordinat tidak valid, silakan periksa input Anda',
        calculationSuccess: 'Lembar peta berhasil dihitung',
        excelExportSuccess: 'Data berhasil diekspor ke Excel',
        pdfExportSuccess: 'Data berhasil diekspor ke PDF',
        exportFailed: 'Ekspor gagal, silakan coba lagi',
        noDataToExport: 'Tidak ada data untuk diekspor',
        
        // Deskripsi
        singlePointDesc: 'Titik tunggal',
        batchPointDesc: 'Titik batch',
        
        // Judul ekspor
        exportFileName: 'Hasil_Perhitungan_Lembar_Peta',
        exportTitle: 'Hasil Perhitungan Lembar Peta'
    }
}