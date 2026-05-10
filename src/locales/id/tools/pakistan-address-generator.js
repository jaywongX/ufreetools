export default {
   name: 'Generator Alamat Pakistan - Buat Alamat Pakistan Nyata, Informasi Identitas & Detail Kontak Online',
   description: 'Generator alamat Pakistan gratis online yang membuat alamat Pakistan format nyata, nomor identitas, nomor telepon, nomor kartu kredit dan profil identitas lengkap. Mendukung penyaringan provinsi, format ekspor JSON/CSV dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
   inputTitle: 'Pengaturan Pembuatan',
   outputTitle: 'Hasil yang Dihasilkan',
   generateBtn: 'Buat Data',
   loadSampleBtn: 'Muat Contoh & Buat',
   clearAll: 'Hapus Semua',
   noOutput: 'Belum ada hasil yang dihasilkan',
   preview: 'Pratinjau Data',
   
   // Penyaringan Geografis
   locationTitle: 'Penyaringan Geografis',
   selectRegion: 'Pilih Provinsi/Wilayah',
   allRegions: 'Semua Provinsi/Wilayah',
   postalCodeLabel: 'Kode Pos',
   validatePostalCode: 'Validasi Kode Pos',
   
   // Tipe Alamat
   addressTypeTitle: 'Tipe Alamat',
   addressTypeResidential: 'Alamat Tempat Tinggal',
   addressTypeCommercial: 'Alamat Komersial',
   addressTypeVirtual: 'Kotak Virtual',
   addressTypeCampus: 'Kampus Universitas',
   
   // Informasi Identitas
   identityTitle: 'Informasi Identitas',
   fullName: 'Nama Lengkap',
   gender: 'Jenis Kelamin',
   genderMale: 'Laki-laki',
   genderFemale: 'Perempuan',
   age: 'Usia',
   birthDate: 'Tanggal Lahir',
   zodiac: 'Zodiak',
   height: 'Tinggi',
   weight: 'Berat',
   
   // Informasi Kontak
   contactTitle: 'Informasi Kontak',
   phoneNumber: 'Nomor Telepon',
   phoneType: 'Tipe Telepon',
   phoneTypeMobile: 'Seluler',
   phoneTypeLandline: 'Telepon Rumah',
   areaCode: 'Kode Area',
   email: 'Alamat Email',
   tempEmail: 'Email Sementara',
   
   // Kartu Kredit
   creditCardTitle: 'Informasi Kartu Kredit',
   cardType: 'Tipe Kartu',
   cardNumber: 'Nomor Kartu',
   expiryDate: 'Tanggal Kedaluwarsa',
   cvv: 'CVV',
   bankBin: 'BIN Bank',
   
   // Karir
   careerTitle: 'Profil Karir',
   jobTitle: 'Jabatan',
   salary: 'Gaji',
   companyName: 'Nama Perusahaan',
   companySize: 'Ukuran Perusahaan',
   industry: 'Industri',
   employmentStatus: 'Status Pekerjaan',
   employmentFullTime: 'Penuh Waktu',
   employmentPartTime: 'Paruh Waktu',
   
   // Kartu Identitas
   idCardTitle: 'Kartu Identitas Pakistan',
   idCardNumber: 'Nomor Kartu Identitas',
   
   // Sidik Jari Digital
   fingerprintTitle: 'Sidik Jari Digital',
   os: 'Sistem Operasi',
   osVersion: 'Versi OS',
   browser: 'Browser',
   userAgent: 'User Agent',
   screenResolution: 'Resolusi Layar',
   timezone: 'Zona Waktu',
   guid: 'GUID',
   ipAddress: 'Alamat IP',
   macAddress: 'Alamat MAC',
   cookiePolicy: 'Kebijakan Cookie',
   
   // Opsi Ekspor
   exportTitle: 'Format Ekspor',
   exportJson: 'Ekspor JSON',
   exportCsv: 'Ekspor CSV',
   downloadBtn: 'Unduh',
   copyBtn: 'Salin',
   viewDetails: 'Lihat Detail',
   
   // Pembuatan Batch
   batchTitle: 'Pembuatan Batch',
   quantityLabel: 'Jumlah',
   quantityPlaceholder: 'Masukkan jumlah (1-100)',
   
   // Pesan Pemberitahuan
   generating: 'Membuat...',
   generated: 'Pembuatan Selesai',
   copySuccess: 'Disalin ke clipboard',
   downloadSuccess: 'Unduhan berhasil',
   invalidQuantity: 'Masukkan angka antara 1 dan 100',
   
   // Tampilan Hasil
   resultCount: '{count} catatan dihasilkan',
   resultSummary: 'Ringkasan Hasil',
   showAll: 'Tampilkan Semua',
   collapse: 'Kecilkan',
   
   // Opsi Pembuatan
   generateOptionsTitle: 'Opsi Pembuatan',
   
   // Tampilan Catatan
   recordLabel: 'Catatan #{num}',
   addressLabel: 'Alamat',
   streetLabel: 'Jalan',
   houseNumberLabel: 'Nomor Rumah',
   buildingLabel: 'Gedung',
   floorLabel: 'Lantai',
   unitLabel: 'Unit',
   regionLabel: 'Provinsi/Wilayah',
   postalCode: 'Kode Pos',
   
   // Format Alamat
   addressNumber: 'No.',
   addressFloor: 'L',
   addressUnit: 'Unit',
   commercialUnit: '(Unit Komersial)',
   pakistan: 'Pakistan',
   postOfficeBox: 'Kotak Pos',
   studentDormitory: 'Asrama Mahasiswa',
   teachingBuilding: 'Gedung Pengajaran',
   library: 'Perpustakaan',
   buildingUnit: 'Gedung',
   apartment: 'Apartemen',
   
   // Nama Provinsi/Wilayah (4 provinsi + wilayah Pakistan)
   regions: {
       'Punjab': 'Punjab',
       'Sindh': 'Sindh',
       'Khyber Pakhtunkhwa': 'Khyber Pakhtunkhwa',
       'Balochistan': 'Balochistan',
       'Islamabad Capital Territory': 'Wilayah Ibu Kota Islamabad'
   },
   
   // Nama Universitas
   universities: {
       'LUMS': 'Universitas Manajemen dan Ilmu Pengetahuan Lahore',
       'PU': 'Universitas Punjab',
       'KU': 'Universitas Karachi',
       'QAU': 'Universitas Quaid-i-Azam',
       'COMSATS': 'Universitas COMSATS Islamabad',
       'NUST': 'Universitas Nasional Sains dan Teknologi',
       'IBA': 'Institut Administrasi Bisnis',
       'PIDE': 'Institut Ekonomi Pembangunan Pakistan',
       'NCA': 'Kolegi Nasional Seni'
   },
   
   // Nama Kolom CSV
   csv: {
       fullAddress: 'Alamat Lengkap',
       street: 'Jalan',
       houseNumber: 'Nomor Rumah',
       building: 'Gedung',
       floor: 'Lantai',
       unit: 'Unit',
       region: 'Provinsi/Wilayah',
       postalCode: 'Kode Pos',
       fullName: 'Nama Lengkap',
       gender: 'Jenis Kelamin',
       age: 'Usia',
       birthDate: 'Tanggal Lahir',
       phone: 'Telepon',
       email: 'Email',
       cardType: 'Tipe Kartu',
       cardNumber: 'Nomor Kartu',
       idCardNumber: 'Nomor Kartu Identitas'
   }
};