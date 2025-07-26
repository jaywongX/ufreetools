export default {
  title: "Generator Pasangan Kunci RSA: Buat Kunci Enkripsi Aman Secara Online",
  intro: "<strong>Generator Pasangan Kunci RSA</strong> adalah alat online yang kuat untuk menghasilkan pasangan kunci publik dan privat RSA dengan panjang kunci yang dapat disesuaikan (dari 256 hingga 16384 bit). RSA (Rivest-Shamir-Adleman) adalah salah satu algoritma enkripsi asimetris yang paling banyak digunakan di dunia, membentuk dasar komunikasi aman di internet dan sistem perusahaan. Alat kami membuat pembuatan komponen kriptografi penting ini menjadi sederhana, mudah digunakan, dan aman.",
  
  featuresTitle: "Fitur Inti Generator Pasangan Kunci RSA",
  feature1: "<strong>Opsi Panjang Kunci Fleksibel</strong>: Hasilkan kunci RSA dari 256 hingga 16384 bit untuk memenuhi kebutuhan keamanan spesifik Anda.",
  feature2: "<strong>Berbagai Format Output</strong>: Ekspor kunci dalam format standar industri termasuk PEM, PKCS#8, heksadesimal, dan pengkodean Base64.",
  feature3: "<strong>Pembuatan Massal</strong>: Buat beberapa pasangan kunci sekaligus untuk keperluan pengujian atau penyebaran.",
  feature4: "<strong>Visualisasi Komponen</strong>: Periksa komponen matematika kunci termasuk modulus, eksponen, faktor prima, dan parameter CRT.",
  feature5: "<strong>Pemrosesan Sisi Klien</strong>: Semua pembuatan kunci dilakukan di browser Anda, materi enkripsi sensitif tidak pernah meninggalkan perangkat Anda.",
  
  useCasesTitle: "Aplikasi Praktis Pasangan Kunci RSA",
  
  useCase1Title: "Komunikasi Aman dan Enkripsi Data",
  useCase1Desc: "Pasangan kunci RSA adalah dasar untuk membangun saluran komunikasi aman di jaringan yang tidak aman. Kunci publik dapat dibagikan secara bebas, memungkinkan orang lain mengenkripsi pesan, sementara hanya Anda yang memiliki kunci privat yang dapat mendekripsi. Sistem <strong>enkripsi RSA</strong> ini mendukung teknologi seperti SSL/TLS untuk situs HTTPS, sistem email aman, dan Jaringan Pribadi Virtual (VPN).",
  
  useCase2Title: "Tanda Tangan Digital dan Autentikasi Dokumen",
  useCase2Desc: "RSA memungkinkan <strong>tanda tangan digital</strong> di mana Anda dapat menggunakan kunci privat untuk menandatangani dokumen, memungkinkan siapa pun yang memiliki kunci publik Anda memverifikasi bahwa dokumen tersebut benar-benar ditandatangani oleh Anda dan belum diubah. Ini banyak digunakan dalam sertifikat tanda tangan kode, transaksi keuangan, dokumen hukum, dan teknologi blockchain.",
  
  useCase3Title: "Autentikasi dan Kontrol Akses",
  useCase3Desc: "Pasangan kunci RSA menyediakan mekanisme yang kuat untuk sistem <strong>autentikasi aman</strong>. SSH (Secure Shell) menggunakan kunci RSA untuk login jarak jauh ke server tanpa kata sandi. Sertifikat klien dalam lingkungan seperti autentikasi TLS timbal balik juga bergantung pada pasangan kunci RSA untuk memverifikasi identitas klien dengan aman.",
  
  useCase4Title: "Komunikasi API Aman dan Penandatanganan Token",
  useCase4Desc: "Aplikasi dan layanan mikro modern sering menggunakan kunci RSA untuk <strong>mengamankan komunikasi API</strong> dan menandatangani token autentikasi seperti JWT (JSON Web Token). Sifat asimetris RSA memungkinkan verifikasi token yang aman dalam sistem terdistribusi tanpa perlu berbagi kunci.",
  
  relatedToolsText: "Anda mungkin juga merasa alat kriptografi terkait ini berguna:",
  relatedTool1: "Kalkulator Hash - Hasilkan dan verifikasi nilai hash untuk integritas data",
  relatedTool2: "Generator Kode Registrasi Perusahaan - Buat kode registrasi perusahaan China yang valid",
  
  tutorialTitle: "Cara Menggunakan Generator Pasangan Kunci RSA",
  
  step1Title: "Langkah 1: Pilih Panjang Kunci",
  step1Desc: "Pertama, pilih panjang kunci yang diinginkan (dalam bit). Untuk tujuan keamanan umum, disarankan menggunakan kunci minimal 2048 bit sebagai standar minimum. Untuk aplikasi yang membutuhkan keamanan lebih tinggi, pilih kunci 4096 bit atau lebih besar. Ingatlah bahwa kunci yang lebih besar memberikan keamanan lebih baik tetapi membutuhkan lebih banyak sumber daya komputasi untuk dibuat dan digunakan.",
  
  step2Title: "Langkah 2: Pilih Format Output",
  step2Desc: "Pilih format output yang Anda sukai dari menu dropdown. PEM adalah format yang paling kompatibel, dikenali dengan header '-----BEGIN RSA PRIVATE KEY-----'. PKCS#8 adalah format yang lebih modern yang didukung oleh sebagian besar sistem saat ini. Pengkodean heksadesimal dan Base64 berguna untuk kebutuhan pemrograman atau integrasi sistem tertentu.",
  
  step3Title: "Langkah 3: Tentukan Jumlah Pasangan Kunci",
  step3Desc: "Jika Anda membutuhkan beberapa pasangan kunci, sesuaikan jumlahnya menggunakan kolom input. Ini sangat berguna untuk lingkungan pengujian atau saat menyebarkan beberapa sistem keamanan sekaligus.",
  
  step4Title: "Langkah 4: Hasilkan dan Lindungi Kunci Anda",
  step4Desc: "Klik tombol \"Buat Pasangan Kunci\" dan tunggu hingga proses selesai. Untuk panjang kunci yang lebih besar, ini mungkin membutuhkan waktu. Setelah dibuat, Anda dapat melihat, menyalin, atau mengekspor kunci Anda. Pastikan untuk menyimpan kunci privat Anda dengan aman dan jangan pernah membagikannya dengan pihak yang tidak berwenang.",
  
  faqTitle: "Pertanyaan Umum tentang Pasangan Kunci RSA",
  
  faq1Question: "Apa itu pasangan kunci RSA? Mengapa saya perlu membuatnya?",
  faq1Answer: "Pasangan kunci RSA terdiri dari kunci publik dan privat, yang merupakan dasar enkripsi asimetris. Kunci publik digunakan untuk mengenkripsi data atau memverifikasi tanda tangan, sementara kunci privat digunakan untuk mendekripsi data atau membuat tanda tangan. Anda perlu membuat pasangan kunci RSA untuk mengimplementasikan fungsi seperti komunikasi aman, enkripsi data, tanda tangan digital, dan autentikasi.",
  
  faq2Question: "Berapa bit panjang kunci RSA yang harus saya pilih?",
  faq2Answer: "Untuk memastikan keamanan, panjang kunci RSA yang direkomendasikan saat ini minimal 2048 bit. Untuk penggunaan umum, kunci 2048 bit memberikan keamanan yang cukup; untuk data sensitif yang membutuhkan perlindungan jangka panjang atau sistem dengan persyaratan keamanan tinggi, disarankan menggunakan kunci 4096 bit atau lebih panjang. Semakin panjang kunci, semakin tinggi keamanannya, tetapi konsumsi sumber daya komputasi juga semakin besar.",
  
  faq3Question: "Apa perbedaan antara format PEM dan PKCS#8?",
  faq3Answer: "Format PEM dan PKCS#8 adalah dua metode pengkodean umum untuk menyimpan dan mentransmisikan kunci RSA. Format PEM menggunakan pengkodean BASE64, dengan file kunci diawali dengan '-----BEGIN RSA PRIVATE KEY-----'; sedangkan PKCS#8 adalah format yang lebih umum yang dapat menyimpan berbagai jenis kunci privat, dengan file diawali dengan '-----BEGIN PRIVATE KEY-----'. Sebagian besar sistem modern mendukung format PKCS#8, tetapi beberapa sistem lama mungkin hanya mendukung format PEM tradisional.",
  
  faq4Question: "Bagaimana cara menyimpan kunci privat RSA yang dihasilkan dengan aman?",
  faq4Answer: "Kunci privat RSA harus dilindungi dengan baik untuk mencegah akses yang tidak sah. Metode penyimpanan aman yang disarankan termasuk: menggunakan manajer kata sandi, perangkat penyimpanan terenkripsi, modul keamanan perangkat keras (HSM), atau sistem manajemen kunci. File kunci privat harus dilindungi dengan kata sandi yang kuat dan diberi izin akses yang sesuai. Selain itu, membuat cadangan juga penting, tetapi pastikan cadangan juga dilindungi.",
  
  faq5Question: "Untuk aplikasi apa saja pasangan kunci RSA yang dihasilkan dapat digunakan?",
  faq5Answer: "Pasangan kunci RSA banyak digunakan dalam berbagai skenario keamanan: sertifikat SSL/TLS dan keamanan situs HTTPS; login jarak jauh SSH yang aman; verifikasi tanda tangan digital untuk memverifikasi keaslian file atau kode; komunikasi email aman (S/MIME); VPN perusahaan dan sistem autentikasi aman; dompet blockchain dan mata uang digital; serta pembuatan token autentikasi dan verifikasi identitas API.",
  
  referencesTitle: "Referensi dan Bacaan Lebih Lanjut",
  reference1: "Publikasi Khusus NIST 800-57: Rekomendasi Manajemen Kunci",
  reference2: "RFC 8017: PKCS #1: Spesifikasi Enkripsi RSA Versi 2.2",
  reference3: "FIPS 186-5: Standar Tanda Tangan Digital (DSS)",
  
  conclusionTitle: "Kesimpulan",
  conclusionText: "<strong>Generator Pasangan Kunci RSA</strong> menyediakan cara yang mudah dan aman untuk membuat kunci enkripsi yang diperlukan untuk keamanan digital modern. Baik Anda melindungi komunikasi jaringan, mengimplementasikan sistem autentikasi, atau menandatangani dokumen sensitif, pasangan kunci RSA yang dibuat dengan benar adalah dasar dari tindakan keamanan ini. Dengan menggunakan alat kami, Anda dapat dengan cepat membuat kunci dengan kekuatan dan format yang tepat untuk memenuhi kebutuhan aplikasi spesifik Anda, sekaligus memastikan materi kriptografi Anda tetap pribadi dan aman."
}
