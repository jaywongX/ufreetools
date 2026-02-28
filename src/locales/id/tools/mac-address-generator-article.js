export default {
    title: 'Generator Alamat MAC: Hasilkan Alamat MAC Acak dan Identifikasi Perangkat Jaringan Online',
    functionTitle: 'Bagaimana Generator Alamat MAC dapat membantu Anda menghasilkan identifikasi perangkat jaringan yang valid dengan cepat?',

    useCasesTitle: 'Kasus Penggunaan Tipikal Generator Alamat MAC',
    useCase1: '<strong>Pengujian Perangkat Jaringan:</strong> Generator alamat MAC menyediakan insinyur jaringan dan pengembang sejumlah besar alamat MAC yang sesuai dengan IEEE untuk pengujian konfigurasi dan verifikasi fungsional perangkat jaringan seperti router, switch, dan firewall.',
    useCase2: '<strong>Pengembangan dan Debugging Perangkat Lunak:</strong> Generator alamat MAC dapat menghasilkan data alamat MAC terstruktur secara batch untuk pengujian dan debugging dalam pengembangan aplikasi jaringan, proyek IoT, dan simulasi perangkat Bluetooth.',
    useCase3: '<strong>Simulasi Perangkat IoT:</strong> Generator alamat MAC membantu pengembang membuat identifikasi perangkat virtual untuk manajemen perangkat dan pengujian komunikasi dalam proyek rumah pintar, IoT industri, dan kendaraan terhubung.',
    useCase4: '<strong>Pengujian dan Riset Keamanan:</strong> Generator alamat MAC menyediakan alamat MAC yang dianonimkan untuk peneliti keamanan digunakan dalam pengujian keamanan jaringan, pengujian penetrasi, dan riset bypass filtering MAC.',
    useCase5: '<strong>Pendidikan dan Pelatihan:</strong> Generator alamat MAC menghasilkan alamat MAC dalam format standar untuk membantu guru dan siswa memahami struktur alamat lapisan jaringan, aturan alokasi OUI, dan diferensiasi unicast vs multicast.',
    useCase6: '<strong>Pengisian Database:</strong> Generator alamat MAC membuat data alamat MAC yang sesuai dengan pola dunia nyata untuk database pengembangan dan pengujian sistem manajemen jaringan, platform pemantauan perangkat, dan sistem manajemen aset.',

    tipTitle: 'Tips Penggunaan Profesional',
    tipContent: 'Saat menggunakan generator alamat MAC, disarankan untuk memilih format dan prefix vendor yang sesuai berdasarkan kebutuhan nyata. Untuk skenario yang memerlukan simulasi perangkat nyata, pilih prefix OUI vendor tertentu. Untuk skenario pengujian keamanan, gunakan alamat yang dikelola lokal (LAA) untuk menghindari konflik dengan perangkat nyata.',

    conclusion: '<p>Baik untuk rekayasa jaringan, pengembangan perangkat lunak, atau riset keamanan, <strong>Generator Alamat MAC</strong> menyediakan alamat MAC berkualitas tinggi yang sesuai dengan standar IEEE. Generator alamat MAC mendukung berbagai format output termasuk format yang dipisahkan titik dua, strip, dan titik, sambil menawarkan pemilihan prefix OUI vendor untuk membuat alamat yang dihasilkan lebih realistis. Semua pemrosesan dilakukan secara lokal di browser, memastikan tidak ada risiko kebocoran data.</p>',

    faqTitle: 'Pertanyaan yang Sering Diajukan tentang Generator Alamat MAC',
    faq1Question: 'Apakah alamat yang dihasilkan oleh generator alamat MAC nyata dan valid?',
    faq1Answer: 'Alamat MAC yang dihasilkan oleh generator alamat MAC sepenuhnya sesuai dengan format standar IEEE 802, memastikan validitas alamat melalui pengaturan bit yang tepat. Namun, ini adalah alamat virtual yang dihasilkan secara acak yang tidak terkait dengan perangkat jaringan nyata mana pun. Generator alamat MAC dimaksudkan hanya untuk tujuan pengujian dan pengembangan, bukan untuk digunakan sebagai identifikasi perangkat nyata di lingkungan produksi.',

    faq2Question: 'Apa itu prefix OUI? Bagaimana cara menggunakan fitur prefix vendor?',
    faq2Answer: 'OUI (Organizationally Unique Identifier) adalah 3 byte pertama dari alamat MAC, ditetapkan oleh IEEE kepada produsen perangkat jaringan. Generator alamat MAC menyediakan prefix OUI untuk vendor umum. Saat memilih vendor tertentu, alamat MAC yang dihasilkan akan menggunakan OUI vendor tersebut, membuat alamat terlihat lebih seperti perangkat nyata. Anda juga dapat memasukkan prefix OUI kustom.',

    faq3Question: 'Format output apa yang didukung oleh generator alamat MAC?',
    faq3Answer: 'Generator alamat MAC mendukung berbagai format umum: format dipisahkan titik dua (XX:XX:XX:XX:XX:XX) untuk sistem Linux/Unix, format dipisahkan strip (XX-XX-XX-XX-XX-XX) untuk sistem Windows, format dipisahkan titik (XXXX.XXXX.XXXX) untuk perangkat Cisco, dan format tanpa pemisah (XXXXXXXXXXXX) untuk beberapa sistem embedded.',

    faq4Question: 'Apa perbedaan antara alamat unicast dan multicast?',
    faq4Answer: 'Bit paling tidak signifikan dari byte pertama alamat MAC menentukan tipe alamat. Alamat unicast memiliki bit ini disetel ke 0, digunakan untuk komunikasi point-to-point untuk mengidentifikasi perangkat jaringan tertentu. Alamat multicast memiliki bit ini disetel ke 1, digunakan untuk komunikasi grup untuk mengidentifikasi sekelompok perangkat jaringan. Generator alamat MAC mendukung pembuatan kedua tipe.',

    faq5Question: 'Apa perbedaan antara alamat unik global (UAA) dan alamat dikelola lokal (LAA)?',
    faq5Answer: 'Alamat unik global (UAA, Universally Administered Address) ditetapkan oleh produsen perangkat, dengan bit paling tidak signifikan kedua dari byte pertama disetel ke 0. Alamat dikelola lokal (LAA, Locally Administered Address) ditetapkan oleh administrator jaringan, dengan bit ini disetel ke 1. Generator alamat MAC mendukung kedua tipe, dengan LAA umumnya digunakan di mesin virtual dan lingkungan pengujian.',

    tutorialTitle: 'Panduan Pengguna Generator Alamat MAC',
    step1Title: 'Langkah 1: Pilih Format Alamat MAC',
    step1Description: 'Di generator alamat MAC, pertama pilih format output. Format dipisahkan titik dua cocok untuk sebagian besar sistem Linux/Unix, format dipisahkan strip untuk sistem Windows, dan format dipisahkan titik untuk perangkat jaringan Cisco. Anda juga dapat memilih output huruf besar atau kecil.',
    step1Note: 'Sistem dan perangkat yang berbeda mungkin memerlukan format yang berbeda; silakan pilih format yang sesuai berdasarkan kasus penggunaan Anda.',

    step2Title: 'Langkah 2: Pilih Tipe Alamat',
    step2Description: 'Di generator alamat MAC, pilih tipe alamat: alamat unicast untuk mengidentifikasi perangkat individu, alamat multicast untuk mengidentifikasi grup perangkat; alamat unik global (UAA) menyimulasikan perangkat nyata, alamat dikelola lokal (LAA) untuk lingkungan virtual. Pilih kombinasi yang sesuai berdasarkan kebutuhan pengujian.',
    step2Note: 'Sebagian besar skenario pengujian menggunakan kombinasi unicast + alamat unik global; lingkungan mesin virtual umumnya menggunakan kombinasi unicast + alamat dikelola lokal.',

    step3Title: 'Langkah 3: Pilih Prefix Vendor (Opsional)',
    step3Description: 'Generator alamat MAC menyediakan prefix OUI untuk vendor perangkat jaringan umum seperti Apple, Cisco, Intel, Huawei, dll. Saat memilih vendor tertentu, alamat MAC yang dihasilkan akan menggunakan prefix OUI nyata vendor tersebut, membuat data pengujian lebih realistis. Anda juga dapat memasukkan prefix OUI kustom.',
    step3Note: 'Jika Anda tidak perlu menyimulasikan perangkat vendor tertentu, pilih "Vendor Acak" untuk menghasilkan alamat MAC yang sepenuhnya acak.',

    step4Title: 'Langkah 4: Tetapkan Jumlah Pembuatan',
    step4Description: 'Di generator alamat MAC, masukkan jumlah alamat MAC yang akan dihasilkan (1-1000), lalu klik tombol "Hasilkan Alamat". Sistem akan menghasilkan semua alamat dengan cepat secara lokal di browser tanpa menunggu respons server.',
    step4Note: 'Saat menghasilkan jumlah besar secara batch, pertama uji jumlah kecil untuk mengkonfirmasi bahwa format dan tipe memenuhi persyaratan Anda.',

    step5Title: 'Langkah 5: Lihat dan Verifikasi Hasil',
    step5Description: 'Setelah pembuatan selesai, generator alamat MAC menampilkan semua alamat yang dihasilkan di area output. Anda dapat memperluas setiap rekaman untuk melihat informasi rinci termasuk nama vendor, tipe alamat, format, dll. Verifikasi bahwa format dan tipe alamat memenuhi persyaratan Anda.',
    step5Note: 'Semua alamat yang dihasilkan oleh generator alamat MAC sesuai dengan standar IEEE 802 dan dapat langsung digunakan untuk pengujian dan pengembangan.',

    step6Title: 'Langkah 6: Ekspor Data',
    step6Description: 'Setelah mengkonfirmasi data benar, pilih format ekspor di generator alamat MAC: JSON untuk pemrosesan program, CSV untuk analisis spreadsheet. Anda juga dapat menyalin alamat individual atau semua alamat ke clipboard untuk menempel ke aplikasi lain.',
    step6Note: 'File yang diekspor berisi semua bidang yang dihasilkan untuk memudahkan pemrosesan data selanjutnya dan impor batch.',

    successTitle: 'Pembuatan Selesai!',
    successContent: 'Selamat, Anda telah berhasil menguasai generator alamat MAC! Anda sekarang dapat menghasilkan alamat MAC yang sesuai dengan IEEE dengan cepat untuk pengujian perangkat jaringan, pengembangan perangkat lunak, simulasi IoT, dan berbagai skenario lainnya.',

    relatedToolsTitle: 'Alat Terkait yang Mungkin Ingin Anda Coba',
    relatedTool1Name: 'Generator UUID',
    relatedTool1Description: 'Hasilkan identifikasi unik (UUID) untuk kunci utama database dan identifikasi unik.',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: 'Generator Alamat Hong Kong',
    relatedTool2Description: 'Hasilkan alamat Hong Kong yang realistis, informasi identitas, dan detail kontak secara online.',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: 'Generator Kata Sandi Acak',
    relatedTool3Description: 'Hasilkan kata sandi acak yang aman dan andal untuk melindungi keamanan akun.',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'Formatter JSON',
    relatedTool4Description: 'Memperindah dan memvalidasi data JSON untuk pembacaan dan debugging yang mudah.',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'Database IEEE OUI',
    reference1Description: 'Kueri informasi alokasi OUI resmi dan daftar vendor.',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'Alamat MAC - Wikipedia',
    reference2Description: 'Pelajari tentang struktur alamat MAC, tipe, dan skenario aplikasi.',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'Standar IEEE 802',
    reference3Description: 'Memperdalam standar dan spesifikasi alamat jaringan.',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
