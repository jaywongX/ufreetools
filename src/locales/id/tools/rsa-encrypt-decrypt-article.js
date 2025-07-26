export default {
  title: "Panduan Alat Enkripsi & Dekripsi RSA: Mengamankan Data dengan Kriptografi Kunci Publik",
  introTitle: "Memahami Enkripsi RSA",
  intro1: "Enkripsi RSA adalah algoritma kriptografi asimetris yang kuat yang menggunakan sepasang kunci - kunci publik dan privat - untuk melindungi data sensitif. <strong>Alat enkripsi RSA</strong> kami menyediakan antarmuka yang mudah digunakan yang memungkinkan Anda melakukan operasi enkripsi dan dekripsi RSA langsung di browser tanpa perlu mengirim data ke server mana pun.",
  intro2: "Berbeda dengan metode enkripsi simetris yang menggunakan satu kunci tunggal, kriptografi RSA menggunakan pasangan kunci yang terkait secara matematis, di mana data yang dienkripsi dengan kunci publik hanya dapat didekripsi dengan kunci privat yang sesuai. Ini membuat RSA menjadi pilihan ideal untuk komunikasi aman dan tanda tangan digital dalam berbagai aplikasi.",
  intro3: "Alat kami mendukung pembuatan kunci dengan berbagai panjang bit (1024, 2048, 3072, dan 4096 bit), metode padding yang berbeda (PKCS#1 v1.5 dan OAEP), serta berbagai format input/output (teks, Base64, dan heksadesimal). Fleksibilitas ini membuatnya cocok baik untuk tujuan pendidikan maupun kebutuhan kriptografi praktis.",
  
  useCasesTitle: "Aplikasi Praktis Enkripsi RSA",
  useCase1: "<strong>Komunikasi Aman</strong>: Dengan mengenkripsi pesan rahasia menggunakan kunci publik penerima, memastikan hanya penerima yang memiliki kunci privat yang sesuai yang dapat mendekripsi pesan.",
  useCase2: "<strong>Verifikasi Sertifikat</strong>: Membuat pasangan kunci untuk menguji implementasi sertifikat digital, infrastruktur PKI, atau konfigurasi SSL/TLS.",
  useCase3: "<strong>Proteksi Data</strong>: Mengenkripsi file sensitif sebelum menyimpannya ke layanan cloud atau mengirimkannya melalui jaringan yang tidak aman, menjaga kerahasiaan bahkan jika data terenkripsi disadap.",
  useCase4: "<strong>Tujuan Pendidikan</strong>: Mempelajari dan mendemonstrasikan prinsip-prinsip kriptografi kunci publik, mengeksplorasi cara kerja enkripsi RSA dalam praktik dengan berbagai ukuran kunci dan metode padding.",
  
  faqTitle: "Pertanyaan Umum",
  
  faq1q: "Apa perbedaan RSA dengan algoritma enkripsi lainnya?",
  faq1a: "RSA adalah <strong>algoritma enkripsi asimetris</strong> yang menggunakan pasangan kunci publik-privat, sedangkan algoritma simetris seperti AES menggunakan satu kunci bersama. Pendekatan pasangan kunci ini memungkinkan RSA menyediakan pertukaran kunci yang aman dan tanda tangan digital, yang tidak dapat diberikan oleh algoritma simetris. Namun, RSA lebih intensif secara komputasi dan biasanya digunakan untuk mengenkripsi data dalam jumlah kecil atau untuk pertukaran kunci, sementara algoritma simetris lebih cepat dan digunakan untuk enkripsi data massal.",
  
  faq2q: "Ukuran kunci RSA apa yang harus saya pilih untuk keamanan optimal?",
  faq2a: "Untuk persyaratan keamanan modern, kami merekomendasikan menggunakan kunci RSA minimal 2048 bit. Kunci 1024 bit dianggap rentan terhadap serangan oleh penyerang yang memiliki sumber daya besar dan harus dihindari untuk data sensitif. Kunci 3072 bit memberikan keamanan yang kira-kira setara dengan enkripsi simetris 128-bit (direkomendasikan NIST untuk perlindungan setelah tahun 2030), sedangkan kunci 4096 bit memberikan margin keamanan tambahan untuk aplikasi yang sangat sensitif. Namun, ukuran kunci yang lebih besar membutuhkan lebih banyak sumber daya komputasi untuk pembuatan kunci dan operasi enkripsi/dekripsi.",
  
  faq3q: "Apa perbedaan antara padding PKCS#1 v1.5 dan OAEP?",
  faq3a: "PKCS#1 v1.5 adalah skema padding yang lebih tua yang, meskipun didukung secara luas, memiliki kerentanan yang diketahui terhadap beberapa jenis serangan (seperti serangan Bleichenbacher). <strong>OAEP (Optimal Asymmetric Encryption Padding)</strong> adalah skema padding yang lebih baru dan lebih aman yang dirancang untuk memberikan keamanan semantik terhadap serangan ciphertext yang dipilih secara adaptif. Untuk aplikasi baru, kami merekomendasikan menggunakan padding OAEP bila memungkinkan, tetapi PKCS#1 v1.5 masih dapat digunakan untuk kompatibilitas dengan sistem lama.",
  
  faq4q: "Bagaimana cara menyimpan dan berbagi kunci RSA saya dengan aman?",
  faq4a: "Untuk <strong>kunci privat RSA</strong>, selalu gunakan kontrol akses yang kuat, sebaiknya dalam bentuk terenkripsi, dan simpan dengan aman. Jangan pernah berbagi kunci privat atau menyimpannya dalam bentuk teks biasa di sistem yang tidak aman. Untuk <strong>kunci publik RSA</strong>, meskipun dirancang untuk dibagikan, verifikasi keaslian kunci publik yang Anda terima dari orang lain untuk mencegah serangan man-in-the-middle. Alat kami memungkinkan Anda mengekspor kunci dalam format PEM standar yang dapat diimpor ke sebagian besar aplikasi dan library kriptografi.",
  
  faq5q: "Apa batasan enkripsi RSA berbasis browser?",
  faq5a: "Alat berbasis browser seperti kami memiliki beberapa batasan: (1) <strong>Keterbatasan kinerja</strong> - Pembuatan kunci dan enkripsi/dekripsi file besar mungkin lebih lambat dibandingkan aplikasi lokal; (2) <strong>Keterbatasan memori</strong> - Browser membatasi jumlah memori yang dapat digunakan, yang dapat memengaruhi operasi yang sangat besar; (3) <strong>Keterbatasan library kripto</strong> - Kami menggunakan library standar industri (Forge), tetapi implementasi browser mungkin sedikit berbeda. Untuk aplikasi keamanan kritis yang membutuhkan kinerja tinggi atau penanganan file yang sangat besar, pertimbangkan untuk menggunakan perangkat lunak kriptografi khusus.",
  
  tutorialTitle: "Panduan Langkah demi Langkah Menggunakan Alat Enkripsi RSA",
  tutorialIntro: "Ikuti panduan komprehensif ini untuk menggunakan alat enkripsi dan dekripsi RSA kami secara efektif dalam melindungi data sensitif Anda:",
  
  step1Title: "Langkah 1: Buat atau Impor Pasangan Kunci RSA",
  step1: "Pertama, buat pasangan kunci RSA baru atau impor kunci yang sudah ada. Untuk membuat kunci baru, pilih panjang kunci yang Anda inginkan (disarankan 2048 bit atau lebih untuk keamanan) dan klik tombol <strong>Buat Pasangan Kunci</strong>. Alat akan membuat kunci publik dan privat dalam format PEM. Atau, Anda dapat mengimpor kunci yang sudah ada dengan mengklik tombol impor atau menggunakan area seret dan lepas di bidang kunci publik atau privat.",
  
  step2Title: "Langkah 2: Enkripsi Data dengan Kunci Publik",
  step2: "Untuk mengenkripsi data, pastikan Anda memiliki kunci publik di bidang yang sesuai. Pilih mode <strong>Enkripsi</strong>, pilih metode padding yang Anda sukai (OAEP direkomendasikan untuk keamanan), dan pilih format input Anda. Masukkan pesan teks terang yang ingin Anda enkripsi di bidang input. Anda juga dapat mengimpor teks terang dari file menggunakan tombol impor atau area seret dan lepas. Klik tombol <strong>Enkripsi</strong> untuk memproses data Anda. Output enkripsi akan ditampilkan dalam format Base64 secara default, tetapi Anda dapat beralih ke format Hex menggunakan opsi format output.",
  
  step3Title: "Langkah 3: Dekripsi Data dengan Kunci Privat",
  step3: "Untuk mendekripsi data yang sebelumnya dienkripsi, pastikan Anda memiliki kunci privat yang benar di bidang kunci privat. Pilih mode <strong>Dekripsi</strong>, pilih metode padding yang sama yang digunakan saat enkripsi, dan pilih format input yang sesuai (biasanya Base64 untuk data terenkripsi). Tempel teks terenkripsi di bidang input atau impor dari file. Klik tombol <strong>Dekripsi</strong> untuk memulihkan teks terang asli. Output dekripsi akan ditampilkan di bidang output dan dapat disalin atau diunduh sesuai kebutuhan.",
  
  step4Title: "Langkah 4: Ekspor dan Kelola Kunci",
  step4: "Setelah membuat atau mengimpor kunci, Anda dapat mengekspornya untuk penggunaan di masa mendatang dengan mengklik tombol <strong>Ekspor</strong> di sebelah setiap bidang kunci. Ini akan menyimpan kunci dalam format PEM standar yang kompatibel dengan sebagian besar aplikasi dan library kriptografi. Ingatlah untuk menyimpan kunci privat Anda dengan aman dan tidak pernah membagikannya dengan pihak yang tidak berwenang. Namun, kunci publik dapat dibagikan secara bebas kepada siapa pun yang perlu mengenkripsi data untuk Anda.",
  
  relatedToolsTitle: "Alat Kriptografi Terkait",
  relatedTool1: "Kalkulator Hash",
  relatedTool1Desc: "Hasilkan nilai hash aman menggunakan berbagai algoritma seperti SHA-256, SHA-512, dll.",
  relatedTool2: "Generator Kata Sandi",
  relatedTool2Desc: "Buat kata sandi yang kuat dan acak untuk meningkatkan keamanan online Anda.",
  relatedTool3: "Alat Enkripsi Simetris",
  relatedTool3Desc: "Enkripsi data menggunakan algoritma simetris seperti AES untuk pemrosesan file yang lebih besar dengan lebih cepat.",
  relatedTool4: "Pengkode/Decode Base64",
  relatedTool4Desc: "Konversi data biner ke format Base64 dan sebaliknya untuk transmisi yang aman.",
  
  resourcesTitle: "Sumber Daya Tambahan",
  resource1: "NIST FIPS 186-4: Standar Tanda Tangan Digital (DSS)",
  resource2: "RFC 8017: PKCS #1: Spesifikasi Kriptografi RSA Versi 2.2",
  resource3: "NIST SP 800-57: Rekomendasi Manajemen Kunci"
}
