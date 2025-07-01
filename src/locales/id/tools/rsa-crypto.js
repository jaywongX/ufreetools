export default {
  name: 'Alat Enkripsi RSA',
  description: 'Hasilkan pasangan kunci RSA, enkripsi/dekripsi data, buat/verifikasi tanda tangan digital',
  tabs: {
    title: 'Pilihan Fitur',
    keyGeneration: 'Pembuatan Kunci',
    encryptDecrypt: 'Enkripsi/Dekripsi',
    signVerify: 'Tanda Tangan/Verifikasi'
  },
  keyGeneration: {
    title: 'Pembuatan Pasangan Kunci RSA',
    keyLength: 'Panjang Kunci',
    keySizes: {
      size512: '512 bit (tidak direkomendasikan untuk skenario keamanan)',
      size1024: '1024 bit (keamanan dasar)',
      size2048: '2048 bit (direkomendasikan)',
      size4096: '4096 bit (keamanan tinggi)'
    },
    generateButton: 'Hasilkan Pasangan Kunci',
    generating: 'Menghasilkan...',
    publicKey: 'Kunci Publik (Public Key)',
    privateKey: 'Kunci Privat (Private Key)',
    exportPublicKey: 'Ekspor Kunci Publik',
    exportPrivateKey: 'Ekspor Kunci Privat',
    copy: 'Salin',
    info: {
      title: 'Memahami Pasangan Kunci RSA',
      description: 'RSA adalah algoritma enkripsi asimetris yang menggunakan sepasang kunci:',
      points: {
        0: 'Kunci Publik: Dapat dibagikan dengan aman kepada siapa pun, digunakan untuk mengenkripsi data atau memverifikasi tanda tangan.',
        1: 'Kunci Privat: Harus disimpan dengan aman, tidak boleh bocor, digunakan untuk mendekripsi data atau membuat tanda tangan.'
      },
      keyLengthTitle: 'Panjang kunci menentukan tingkat keamanan:',
      keyLengthPoints: {
        0: '512 bit - Tidak aman lagi, hanya untuk pengujian',
        1: '1024 bit - Lemah, tidak direkomendasikan untuk data sensitif',
        2: '2048 bit - Standar yang saat ini direkomendasikan',
        3: '4096 bit - Menyediakan keamanan lebih tinggi, tetapi pemrosesan lebih lambat'
      }
    }
  },
  encryptDecrypt: {
    title: 'Enkripsi dan Dekripsi',
    encryptMode: 'Mode Enkripsi',
    decryptMode: 'Mode Dekripsi',
    encryptDescription: 'Gunakan kunci publik untuk mengenkripsi data, hanya pemilik kunci privat yang sesuai yang dapat mendekripsi.',
    decryptDescription: 'Gunakan kunci privat untuk mendekripsi data yang sebelumnya dienkripsi dengan kunci publik.',
    keyLabel: {
      encrypt: 'Kunci Publik (Public Key)',
      decrypt: 'Kunci Privat (Private Key)'
    },
    dataLabel: {
      encrypt: 'Data yang Akan Dienkripsi',
      decrypt: 'Data yang Akan Didekripsi'
    },
    keyPlaceholder: 'Tempel kunci RSA di sini',
    dataPlaceholder: {
      encrypt: 'Masukkan teks yang akan dienkripsi di sini',
      decrypt: 'Masukkan data yang akan didekripsi di sini (format Base64)'
    },
    processButton: {
      encrypt: 'Enkripsi Data',
      decrypt: 'Dekripsi Data'
    },
    processing: 'Memproses...',
    resultLabel: {
      encrypt: 'Hasil Enkripsi',
      decrypt: 'Hasil Dekripsi'
    },
    info: {
      title: 'Tentang Enkripsi dan Dekripsi RSA',
      description: 'RSA adalah algoritma enkripsi asimetris yang bekerja sebagai berikut:',
      points: {
        0: 'Enkripsi: Gunakan kunci publik penerima untuk mengenkripsi data, memastikan hanya penerima dengan kunci privat yang sesuai yang dapat mendekripsi.',
        1: 'Dekripsi: Penerima menggunakan kunci privat mereka sendiri untuk mendekripsi data.',
        2: 'Enkripsi RSA memiliki batasan panjang data, biasanya tidak cocok untuk mengenkripsi file besar secara langsung.',
        3: 'Untuk data besar, biasanya data dienkripsi terlebih dahulu dengan enkripsi simetris (seperti AES), kemudian kunci simetris dienkripsi dengan RSA.'
      }
    },
    encrypt: 'Enkripsi',
    decrypt: 'Dekripsi'
  },
  signVerify: {
    title: 'Tanda Tangan dan Verifikasi',
    signMode: 'Mode Tanda Tangan',
    verifyMode: 'Mode Verifikasi',
    signDescription: 'Gunakan kunci privat untuk menandatangani data, membuktikan keaslian dan integritas sumber data.',
    verifyDescription: 'Gunakan kunci publik untuk memverifikasi tanda tangan, mengonfirmasi data tidak dimodifikasi dan berasal dari pengirim yang diharapkan.',
    keyLabel: {
      sign: 'Kunci Privat (Private Key)',
      verify: 'Kunci Publik (Public Key)'
    },
    dataLabel: 'Data',
    hashAlgorithm: 'Algoritma Hash',
    hashOptions: {
      sha1: 'SHA-1 (tidak direkomendasikan untuk skenario keamanan)',
      sha256: 'SHA-256 (direkomendasikan)',
      sha512: 'SHA-512 (keamanan tinggi)',
      md5: 'MD5 (hanya untuk pengujian, tidak aman)'
    },
    signatureLabel: 'Tanda Tangan (format Base64)',
    signaturePlaceholder: 'Masukkan data tanda tangan di sini',
    processButton: {
      sign: 'Buat Tanda Tangan',
      verify: 'Verifikasi Tanda Tangan'
    },
    processing: 'Memproses...',
    signatureResult: 'Hasil Tanda Tangan (format Base64)',
    verificationSuccess: 'Verifikasi Tanda Tangan Berhasil',
    verificationFailure: 'Verifikasi Tanda Tangan Gagal',
    verificationSuccessMessage: 'Data tidak dimodifikasi, dan berasal dari pengirim yang diharapkan.',
    verificationFailureMessage: 'Data mungkin telah dimodifikasi, atau tanda tangan tidak dibuat oleh kunci privat yang sesuai.',
    info: {
      title: 'Tentang Tanda Tangan dan Verifikasi RSA',
      description: 'Tanda tangan RSA adalah teknologi tanda tangan digital yang digunakan untuk memverifikasi keaslian dan integritas pesan:',
      points: {
        0: 'Proses Tanda Tangan: Gunakan kunci privat pengirim untuk mengenkripsi nilai hash pesan, menghasilkan tanda tangan digital.',
        1: 'Proses Verifikasi: Penerima menggunakan kunci publik pengirim untuk mendekripsi tanda tangan, dan membandingkannya dengan nilai hash pesan.',
        2: 'Jika verifikasi berhasil, ini menunjukkan pesan memang dikirim oleh pengirim yang memiliki kunci privat, dan konten tidak dimodifikasi.',
        3: 'Tanda tangan tidak mengenkripsi pesan, hanya digunakan untuk memverifikasi sumber dan integritasnya. Untuk melindungi konten pesan, enkripsi juga diperlukan.'
      }
    },
    sign: 'Tanda Tangan',
    verify: 'Verifikasi Tanda Tangan',
    signatureValue: 'Nilai Tanda Tangan',
    verificationResult: {
      success: 'Verifikasi berhasil! Tanda tangan valid, data utuh dan sumber dapat dipercaya.',
      failed: 'Verifikasi gagal! Tanda tangan tidak valid, data mungkin telah dimodifikasi atau sumber tidak dapat dipercaya.'
    },
    dataPlaceholder: 'Masukkan data yang akan ditandatangani atau diverifikasi di sini',
    keyPlaceholder: 'Tempel kunci RSA di sini'
  },
  messages: {
    copied: 'Disalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin secara manual',
    keygenError: 'Kesalahan saat menghasilkan pasangan kunci: {error}',
    encryptError: 'Enkripsi gagal, periksa kunci publik dan data input Anda. Enkripsi RSA memiliki batasan panjang data.',
    decryptError: 'Dekripsi gagal, pastikan kunci privat benar dan data input adalah teks terenkripsi yang valid.',
    signError: 'Gagal membuat tanda tangan, periksa kunci privat dan data input Anda.',
    verifyError: 'Verifikasi gagal, periksa kunci dan data input Anda.',
    processingError: 'Operasi gagal. Periksa kunci dan data input Anda.'
  }
}