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
  }
};