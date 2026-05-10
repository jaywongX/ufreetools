export default {
   name: 'Pembuat Alamat India - Buat Alamat India Nyata, Informasi Identitas & Detail Kontak Online',
   description: 'Pembuat alamat India gratis online yang membuat alamat India format nyata, nomor identitas, nomor telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung penyaringan negara bagian, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
   inputTitle: 'Pengaturan Pembuatan',
   outputTitle: 'Hasil yang Dihasilkan',
   generateBtn: 'Buat Data',
   loadSampleBtn: 'Muat Sampel & Buat',
   clearAll: 'Hapus Semua',
   noOutput: 'Belum ada hasil yang dihasilkan',
   preview: 'Pratinjau Data',
   
   // Penyaringan Geografis
   locationTitle: 'Penyaringan Geografis',
   selectRegion: 'Pilih Negara Bagian',
   allRegions: 'Semua Negara Bagian',
   postalCodeLabel: 'Kode Pos',
   validatePostalCode: 'Validasi Kode Pos',
   
   // Tipe Alamat
   addressTypeTitle: 'Tipe Alamat',
   addressTypeResidential: 'Alamat Tempat Tinggal',
   addressTypeCommercial: 'Alamat Bisnis',
   addressTypeVirtual: 'Kotak Surat Virtual',
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
   height: 'Tinggi Badan',
   weight: 'Berat Badan',
   
   // Informasi Kontak
   contactTitle: 'Informasi Kontak',
   phoneNumber: 'Nomor Telepon',
   phoneType: 'Tipe Telepon',
   phoneTypeMobile: 'Ponsel',
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
   idCardTitle: 'Kartu Identitas India',
   idCardNumber: 'Nomor Kartu Identitas',
   aadhaarNumber: 'Nomor Aadhaar',
   
   // Sidik Jari Digital
   fingerprintTitle: 'Sidik Jari Digital',
   os: 'Sistem Operasi',
   osVersion: 'Versi Sistem',
   browser: 'Peramban',
   userAgent: 'Agen Pengguna',
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
   
   // Pesan Notifikasi
   generating: 'Membuat...',
   generated: 'Pembuatan Selesai',
   copySuccess: 'Disalin ke papan klip',
   downloadSuccess: 'Unduhan berhasil',
   invalidQuantity: 'Masukkan angka antara 1 dan 100',
   
   // Tampilan Hasil
   resultCount: '{count} rekaman dihasilkan',
   resultSummary: 'Ringkasan Hasil',
   showAll: 'Tampilkan Semua',
   collapse: 'Ciutkan',
   
   // Opsi Pembuatan
   generateOptionsTitle: 'Opsi Pembuatan',
   
   // Tampilan Rekaman
   recordLabel: 'Rekaman #{num}',
   addressLabel: 'Alamat',
   streetLabel: 'Jalan',
   houseNumberLabel: 'Nomor Rumah',
   buildingLabel: 'Gedung',
   floorLabel: 'Lantai',
   unitLabel: 'Unit',
   regionLabel: 'Negara Bagian',
   postalCode: 'Kode Pos',
   
   // Format Alamat
   addressNumber: 'No.',
   addressFloor: 'Lt.',
   addressUnit: 'Unit',
   commercialUnit: '(Unit Komersial)',
   india: 'India',
   postOfficeBox: 'Kotak Pos',
   studentDormitory: 'Asrama Mahasiswa',
   teachingBuilding: 'Gedung Pengajaran',
   library: 'Perpustakaan',
   buildingUnit: 'Gedung',
   apartment: 'Apartemen',
   
   // Nama Wilayah (Negara Bagian India)
   regions: {
       'Maharashtra': 'Maharashtra',
       'Karnataka': 'Karnataka',
       'Tamil Nadu': 'Tamil Nadu',
       'Delhi': 'Delhi',
       'Gujarat': 'Gujarat',
       'Rajasthan': 'Rajasthan',
       'Uttar Pradesh': 'Uttar Pradesh',
       'West Bengal': 'Benggala Barat',
       'Kerala': 'Kerala',
       'Andhra Pradesh': 'Andhra Pradesh',
       'Telangana': 'Telangana',
       'Madhya Pradesh': 'Madhya Pradesh',
       'Bihar': 'Bihar',
       'Punjab': 'Punjab',
       'Haryana': 'Haryana',
       'Odisha': 'Odisha',
       'Chhattisgarh': 'Chhattisgarh',
       'Jharkhand': 'Jharkhand',
       'Assam': 'Assam',
       'Jammu and Kashmir': 'Jammu dan Kashmir'
   },
   
   // Nama Universitas
   universities: {
       'IIT': 'Institut Teknologi India',
       'IISc': 'Institut Sains India',
       'IIM': 'Institut Manajemen India',
       'AIIMS': 'All India Institute of Medical Sciences',
       'JNU': 'Universitas Jawaharlal Nehru',
       'DU': 'Universitas Delhi',
       'BHU': 'Universitas Hindu Banaras',
       'Jadavpur': 'Universitas Jadavpur',
       'Anna': 'Universitas Anna',
       'Osmania': 'Universitas Osmania'
   },
   
   // Nama Kolom CSV
   csv: {
       fullAddress: 'Alamat Lengkap',
       street: 'Jalan',
       houseNumber: 'Nomor Rumah',
       building: 'Gedung',
       floor: 'Lantai',
       unit: 'Unit',
       region: 'Negara Bagian',
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