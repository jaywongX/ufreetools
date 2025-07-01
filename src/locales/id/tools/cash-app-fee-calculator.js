export default {
  name: 'Kalkulator Biaya Cash App',
  title: 'Kalkulator Biaya Cash App Amerika',
  description: 'Hitung biaya transfer, setoran, penarikan ATM, transaksi Bitcoin, dll. di Cash App berdasarkan jenis akun dan metode pembayaran Anda.',
  updatedDate: 'Tanggal Pembaruan Tarif: 18 April 2025',
  
  quickSelect: {
    label: 'Pilihan Cepat',
    sendCredit: '3% (Kirim - Kartu Kredit)',
    sendDebit: '0% (Kirim - Kartu Debit/Saldo)',
    receivePersonal: '0% (Akun Pribadi - Terima)',
    receiveBusiness: '2.75% (Akun Bisnis - Terima)',
    instantDeposit: '0.5-1.75% (Setoran Instan)',
    atmWithdrawal: 'Penarikan ATM (Biaya $2.50)'
  },
  
  calculationType: {
    label: 'Jenis Perhitungan',
    direct: 'Perhitungan Standar (Jumlah Dikirim → Jumlah Diterima)',
    inverse: 'Perhitungan Terbalik (Jumlah Diterima yang Diharapkan → Jumlah Dikirim)'
  },
  
  accountType: {
    label: 'Jenis Akun',
    personal: 'Akun Pribadi',
    business: 'Akun Bisnis'
  },
  
  amount: {
    label: 'Jumlah Transaksi',
    desiredLabel: 'Jumlah Diterima yang Diharapkan',
    placeholder: 'Masukkan jumlah'
  },
  
  transactionType: {
    label: 'Jenis Transaksi',
    options: {
      send: 'Kirim Dana',
      receive: 'Terima Dana'
    }
  },
  
  paymentSource: {
    label: 'Metode Pembayaran',
    options: {
      credit: 'Kartu Kredit',
      debit: 'Kartu Debit',
      bank: 'Rekening Bank',
      balance: 'Saldo Cash App'
    }
  },
  
  depositType: {
    label: 'Jenis Setoran',
    options: {
      standard: 'Setoran Standar (1-3 hari kerja)',
      instant: 'Setoran Instan'
    }
  },
  
  atmType: {
    label: 'Jenis ATM',
    options: {
      inNetwork: 'ATM Dalam Jaringan',
      outOfNetwork: 'ATM Luar Jaringan'
    }
  },
  
  additionalAtmFee: {
    label: 'Biaya ATM Tambahan (dikenakan oleh penyedia ATM)'
  },
  
  bitcoinTransactionType: {
    label: 'Jenis Transaksi Bitcoin',
    options: {
      buy: 'Beli Bitcoin',
      sell: 'Jual Bitcoin',
      send: 'Kirim Bitcoin (Jaringan Lightning)'
    }
  },
  
  stockTransactionType: {
    label: 'Jenis Transaksi Saham',
    options: {
      buy: 'Beli Saham',
      sell: 'Jual Saham'
    }
  },
  
  cashInLocation: {
    label: 'Lokasi Setoran Tunai',
    options: {
      retail: 'Toko Ritel (7-Eleven, CVS, dll.)',
      other: 'Metode Lain'
    }
  },
  
  internationalType: {
    label: 'Jenis Transaksi Internasional',
    options: {
      send: 'Kirim Pembayaran Internasional',
      receive: 'Terima Pembayaran Internasional',
      convert: 'Konversi Mata Uang'
    }
  },
  
  tabs: {
    moneyTransfer: 'Transfer Dana',
    deposit: 'Setoran Bank',
    atm: 'Penarikan ATM',
    bitcoin: 'Bitcoin',
    stocks: 'Saham',
    cashIn: 'Setoran Tunai',
    international: 'Transaksi Internasional'
  },
  
  calculateButton: 'Hitung Biaya',
  
  results: {
    title: 'Hasil Perhitungan Biaya',
    amountInput: 'Jumlah',
    amountSent: 'Jumlah Dikirim',
    fee: 'Biaya Cash App',
    amountReceived: 'Jumlah Diterima',
    finalAmount: 'Jumlah Akhir',
    desiredAmount: 'Jumlah Diterima yang Diharapkan',
    amountToSend: 'Jumlah yang Harus Dikirim',
    note: 'Catatan'
  },
  
  errors: {
    amountRequired: 'Masukkan jumlah transaksi',
    invalidAmount: 'Masukkan jumlah yang valid',
    positiveAmount: 'Jumlah harus lebih dari nol',
    amountTooLarge: 'Jumlah melebihi batas transaksi maksimum'
  },
  
  notes: {
    creditCardFee: 'Pembayaran dengan kartu kredit akan dikenakan biaya 3%. Gunakan kartu debit, rekening bank, atau saldo Cash App untuk menghindari biaya ini.',
    instantDepositFee: 'Biaya setoran instan berkisar antara 0.5% hingga 1.75% (minimum $0.25, maksimum $9.99). Setoran standar (1-3 hari) gratis.',
    atmInNetworkFee: 'Penarikan ATM dalam jaringan akan dikenakan biaya $2.50 oleh Cash App.',
    atmOutOfNetworkFee: 'Penarikan ATM luar jaringan akan dikenakan biaya $2.50 oleh Cash App, ditambah biaya tambahan yang mungkin dikenakan oleh penyedia ATM.',
    bitcoinBuyFee: 'Pembelian Bitcoin mencakup biaya jaringan dan spread variabel. Biaya aktual dapat bervariasi tergantung kondisi pasar.',
    bitcoinSellFee: 'Penjualan Bitcoin mencakup biaya jaringan dan spread variabel. Biaya aktual dapat bervariasi tergantung kondisi pasar.',
    bitcoinSendFee: 'Mengirim Bitcoin melalui jaringan Lightning gratis, tetapi transaksi Bitcoin on-chain mungkin dikenakan biaya jaringan.',
    stockBuyFee: 'Cash App menawarkan pembelian saham tanpa komisi. Namun, biaya SEC dan TAF mungkin masih berlaku.',
    stockSellFee: 'Penjualan saham melalui Cash App mungkin dikenakan biaya regulasi kecil.',
    cashInRetailFee: 'Biaya setoran tunai di toko ritel bervariasi berdasarkan jumlah: mulai dari $0.99 hingga $2.99 tergantung jumlah setoran.',
    cashInOtherFee: 'Menambahkan dana melalui rekening bank terkait atau setoran langsung biasanya gratis.',
    internationalTransferFee: 'Transfer internasional mungkin dikenakan biaya lebih tinggi dan biaya konversi mata uang.',
    currencyConversionFee: 'Konversi mata uang biasanya mencakup biaya pemrosesan dan mungkin termasuk spread nilai tukar.'
  },
  
  feeInfo: {
    title: 'Informasi Biaya Cash App',
    personal: {
      receiving: 'Akun Pribadi - Menerima Dana: 0% biaya',
      sendingCredit: 'Akun Pribadi - Mengirim (Kartu Kredit): 3% biaya',
      sendingOther: 'Akun Pribadi - Mengirim (Kartu Debit/Bank/Saldo): 0% biaya',
      standardDeposit: 'Akun Pribadi - Setoran Standar: 0% biaya',
      instantDeposit: 'Akun Pribadi - Setoran Instan: 0.5-1.75% biaya (minimum $0.25, maksimum $9.99)'
    },
    business: {
      receiving: 'Akun Bisnis - Menerima Dana: 2.75% biaya'
    },
    atm: 'Penarikan ATM: Biaya $2.50, ditambah biaya tambahan dari penyedia ATM',
    bitcoin: 'Transaksi Bitcoin: Biaya variabel berdasarkan kondisi jaringan dan spread pasar',
    stocks: 'Investasi Saham: Beli - Gratis, Jual - Mungkin dikenakan biaya regulasi kecil',
    cashIn: 'Setoran Tunai Toko Ritel: $0.99-$2.99 tergantung jumlah',
    international: 'Transfer Internasional: Biaya lebih tinggi berlaku, biasanya sekitar 3%'
  },
  
  article: {
    title: 'Panduan Lengkap Kalkulator Biaya Cash App: Hitung Semua Biaya Transaksi',
    intro: {
      title: 'Apa itu Kalkulator Biaya Cash App?',
      content1: 'Kalkulator Biaya Cash App adalah alat canggih yang membantu Anda menentukan secara akurat biaya yang akan dibayarkan untuk berbagai transaksi Cash App. Baik Anda mengirim dana, menerima pembayaran, melakukan setoran instan, atau menarik uang dari ATM, Kalkulator Biaya Cash App ini memberikan perhitungan akurat berdasarkan tarif terbaru (diperbarui hingga 18 April 2025).',
      content2: 'Dengan menggunakan Kalkulator Biaya Cash App kami, Anda tidak perlu menebak-nebak biaya transaksi, membantu Anda membuat keputusan transfer dana yang lebih baik. Tidak seperti aplikasi resmi Cash App yang tidak secara jelas menampilkan rincian biaya sebelum transaksi, kalkulator kami menunjukkan dengan tepat berapa biaya Cash App untuk jumlah berapa pun - baik $100, $200, atau $1000.'
    },
    applications: {
      title: 'Kapan Menggunakan Kalkulator Biaya Cash App',
      scenarios: [
        {
          title: 'Menghitung Biaya Transfer Kartu Kredit',
          description: 'Tentukan biaya 3% yang akurat saat mengirim dana melalui Cash App menggunakan kartu kredit. Kalkulator kami menunjukkan berapa biaya Cash App untuk $1000 atau jumlah lainnya.'
        },
        {
          title: 'Merencanakan Setoran Instan',
          description: 'Sebelum melakukan transfer cepat ke rekening bank, hitung biaya instan Cash App (0.5%-1.75%), memastikan batas biaya minimum dan maksimum diterapkan dengan benar.'
        },
        {
          title: 'Pembayaran Akun Bisnis',
          description: 'Pengguna bisnis dapat menghitung biaya pemrosesan 2.75% untuk menerima pembayaran, membantu mengelola biaya transaksi secara efektif.'
        },
        {
          title: 'Biaya Transaksi Bitcoin',
          description: 'Gunakan Kalkulator Biaya Bitcoin Cash App kami untuk menentukan biaya spread saat membeli atau menjual Bitcoin melalui Cash App.'
        },
        {
          title: 'Perkiraan Biaya Penarikan ATM',
          description: 'Hitung biaya $2.50 Cash App untuk penarikan ditambah biaya tambahan dari operator ATM.'
        },
        {
          title: 'Analisis Biaya Transaksi Saham',
          description: 'Tentukan biaya apa pun yang berlaku saat membeli atau menjual saham melalui fitur investasi Cash App.'
        },
        {
          title: 'Perencanaan Transaksi Internasional',
          description: 'Hitung biaya konversi mata uang dan transfer internasional saat menggunakan Cash App secara lintas batas.'
        },
        {
          title: 'Perhitungan Biaya Terbalik',
          description: 'Tentukan berapa banyak yang perlu dikirim untuk memastikan penerima mendapatkan jumlah yang tepat setelah dipotong biaya.'
        }
      ]
    },
    guide: {
      title: 'Cara Menggunakan Kalkulator Biaya Cash App',
      steps: [
        {
          title: 'Pilih Jenis Transaksi Anda',
          description: 'Pertama, pilih jenis transaksi Cash App yang ingin Anda hitung biayanya: transfer dana, setoran bank, Bitcoin, saham, setoran tunai, internasional, atau penarikan ATM.'
        },
        {
          title: 'Pilih Jenis Akun Anda',
          description: 'Pilih apakah Anda menggunakan akun pribadi atau bisnis Cash App, karena kedua jenis akun ini memiliki struktur biaya yang berbeda.'
        },
        {
          title: 'Pilih Metode Perhitungan',
          description: 'Pilih antara perhitungan standar (menghitung biaya berdasarkan jumlah yang Anda kirim) atau perhitungan terbalik (menentukan berapa banyak yang harus dikirim untuk mencapai jumlah yang diharapkan penerima).'
        },
        {
          title: 'Masukkan Jumlah Transaksi',
          description: 'Masukkan jumlah transaksi dalam dolar. Ini bisa berupa jumlah yang Anda kirim atau jumlah yang Anda harapkan seseorang terima, tergantung pada metode perhitungan Anda.'
        },
        {
          title: 'Tentukan Detail Transaksi',
          description: 'Berdasarkan jenis transaksi Anda, pilih opsi lain seperti sumber pembayaran (untuk transfer), kecepatan setoran, jenis transaksi Bitcoin, atau jenis jaringan ATM.'
        },
        {
          title: 'Hitung Biaya',
          description: 'Klik tombol "Hitung Biaya" untuk memproses input Anda dan melihat rincian biaya yang terlibat dalam transaksi.'
        },
        {
          title: 'Tinjau Hasil',
          description: 'Periksa hasil perhitungan yang menunjukkan jumlah asli, biaya yang berlaku, dan jumlah akhir setelah biaya. Catatan khusus untuk jenis transaksi Anda memberikan konteks tambahan tentang bagaimana biaya diterapkan.'
        }
      ]
    },
    faq: {
      title: 'Pertanyaan Umum tentang Biaya Cash App',
      items: [
        {
          question: 'Berapa biaya Cash App untuk $1000?',
          answer: 'Mengirim $1000 dari saldo Cash App atau kartu debit tidak dikenakan biaya. Tetapi menggunakan kartu kredit akan dikenakan biaya 3% ($30). Untuk setoran instan, biaya berkisar antara 0.5%-1.75% ($5-$17.50), dengan biaya maksimum $9.99.'
        },
        {
          question: 'Bagaimana struktur biaya instan Cash App?',
          answer: 'Biaya setoran instan Cash App adalah 0.5% hingga 1.75% dari jumlah transfer, dengan biaya minimum $0.25 dan maksimum $9.99. Setoran standar (1-3 hari kerja) tetap gratis.'
        },
        {
          question: 'Apakah Cash App memiliki biaya bulanan?',
          answer: 'Tidak, Cash App tidak mengenakan biaya bulanan atau langganan. Anda hanya membayar biaya untuk transaksi tertentu (seperti pembayaran kartu kredit, setoran instan, atau penarikan ATM).'
        },
        {
          question: 'Bagaimana cara membayar biaya di Cash App?',
          answer: 'Biaya di Cash App secara otomatis dipotong dari jumlah transaksi Anda. Misalnya, saat mengirim dana melalui kartu kredit, biaya 3% ditambahkan ke jumlah transfer Anda dan dibebankan bersama.'
        },
        {
          question: 'Berapa biaya Bitcoin Cash App?',
          answer: 'Cash App mengenakan biaya variabel untuk transaksi Bitcoin, termasuk biaya layanan dan biaya transaksi (sekitar 1.75% spread). Kalkulator Biaya Bitcoin Cash App kami membantu menentukan biaya ini dengan tepat.'
        },
        {
          question: 'Berapa biaya Cash App untuk $200?',
          answer: 'Mengirim $200 dari saldo Cash App atau kartu debit terkait tidak dikenakan biaya. Menggunakan kartu kredit akan dikenakan biaya 3% ($6). Untuk setoran instan, biaya akan antara $1-$3.50, tergantung pada persentase yang diterapkan.'
        },
        {
          question: 'Berapa biaya penarikan ATM Cash App?',
          answer: 'Cash App mengenakan biaya $2.50 untuk semua penarikan ATM. Jika Anda menggunakan ATM luar jaringan, Anda akan membayar biaya ini ditambah biaya tambahan yang dikenakan oleh operator ATM.'
        },
        {
          question: 'Bagaimana cara menghindari biaya Cash App?',
          answer: 'Untuk menghindari biaya Cash App: Gunakan saldo Cash App, rekening bank terkait, atau kartu debit untuk mengirim dana; Pilih setoran standar daripada transfer instan; Gunakan ATM dalam jaringan jika Anda memiliki setoran langsung $300+ per bulan.'
        }
      ]
    },
    feeTypes: {
      title: 'Memahami Berbagai Jenis Biaya Cash App',
      items: [
        {
          title: 'Biaya Pengiriman Akun Pribadi',
          description: 'Mengirim dana dari akun pribadi menggunakan saldo Cash App, rekening bank terkait, atau kartu debit dikenakan biaya 0%. Namun, mengirim dana menggunakan kartu kredit dikenakan biaya 3%.'
        },
        {
          title: 'Biaya Penerimaan Akun Pribadi',
          description: 'Menerima dana ke akun Cash App pribadi selalu gratis, tidak ada biaya yang dipotong dari transfer masuk.'
        },
        {
          title: 'Biaya Akun Bisnis',
          description: 'Akun bisnis dikenakan biaya 2.75% untuk menerima pembayaran. Biaya ini berlaku untuk semua pembayaran masuk, terlepas dari metode pembayaran.'
        },
        {
          title: 'Biaya Setoran',
          description: 'Setoran standar ke rekening bank terkait (1-3 hari kerja) gratis. Setoran instan dikenakan biaya 0.5% hingga 1.75% (minimum $0.25, maksimum $9.99).'
        },
        {
          title: 'Biaya Penarikan ATM',
          description: 'Cash App mengenakan biaya $2.50 untuk penarikan ATM. Pengguna Cash Card dengan setoran langsung $300+ per bulan bisa mendapatkan penggantian biaya ATM hingga $7 per bulan.'
        },
        {
          title: 'Biaya Transaksi Bitcoin',
          description: 'Pembelian dan penjualan Bitcoin mencakup biaya variabel yang menggabungkan biaya layanan dan fluktuasi harga. Biaya biasanya sekitar 1.75%, tetapi dapat bervariasi tergantung kondisi pasar.'
        },
        {
          title: 'Biaya Transaksi Saham',
          description: 'Membeli saham di Cash App tidak dikenakan komisi. Menjual saham mungkin dikenakan biaya regulasi kecil.'
        },
        {
          title: 'Biaya Transfer Internasional',
          description: 'Transfer internasional biasanya mencakup biaya 3%, ditambah biaya konversi mata uang yang mungkin bervariasi tergantung mata uang yang terlibat.'
        }
      ]
    },
    tips: {
      title: 'Tips untuk Meminimalkan Biaya Cash App',
      items: [
        'Gunakan saldo Cash App atau kartu debit terkait daripada kartu kredit untuk menghindari biaya pengiriman 3%.',
        'Rencanakan sebelumnya dan gunakan setoran standar (1-3 hari kerja) daripada transfer instan untuk menghindari biaya 0.5%-1.75%.',
        'Untuk pengguna ATM yang sering, atur setoran langsung $300+ per bulan untuk mendapatkan penggantian biaya ATM hingga $7 per bulan.',
        'Pengguna bisnis harus mempertimbangkan biaya penerimaan 2.75% saat menjual barang atau layanan melalui Cash App.',
        'Gunakan fitur perhitungan terbalik Kalkulator Biaya Cash App kami untuk menentukan berapa banyak yang perlu dikirim agar penerima mendapatkan jumlah yang spesifik.',
        'Sebelum melakukan pembelian cryptocurrency besar, gunakan Kalkulator Biaya Bitcoin Cash App kami untuk membandingkan biaya transaksi Bitcoin.',
        'Jika memungkinkan, gabungkan beberapa transfer kecil menjadi satu transfer yang lebih besar untuk meminimalkan dampak biaya minimum setoran instan.',
        'Jika Anda perlu melakukan transfer internasional, gunakan kalkulator kami untuk membandingkan biaya Cash App dengan layanan lain, temukan pilihan yang paling hemat biaya.'
      ]
    },
    conclusion: {
      title: 'Gunakan Kalkulator Biaya Cash App untuk Membuat Keputusan yang Lebih Baik',
      content: 'Kalkulator Biaya Cash App memungkinkan Anda mengelola keuangan digital Anda lebih efektif dengan memberikan perhitungan biaya yang transparan untuk semua jenis transaksi. Dengan memahami secara akurat struktur biaya Cash App dan berapa biaya yang akan dikenakan untuk setiap transaksi, Anda dapat membuat keputusan yang lebih baik tentang bagaimana dan kapan mentransfer dana. Baik Anda menghitung biaya penarikan di Cash App atau menentukan berapa biaya Cash App untuk $120, kalkulator kami membantu Anda merencanakan transaksi dengan percaya diri. Simpan alat ini sekarang dan jangan pernah lagi terkejut dengan biaya tak terduga!'
    }
  }
}