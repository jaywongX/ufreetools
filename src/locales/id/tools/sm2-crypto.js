export default {
  name: 'Alat Enkripsi SM2',
  description: 'Gunakan algoritma kriptografi SM2 untuk menghasilkan pasangan kunci, enkripsi/dekripsi data, dan membuat/memverifikasi tanda tangan digital',
  
  tabs: {
    title: 'Pilihan Fitur',
    keyGeneration: 'Pembuatan Kunci',
    encryptDecrypt: 'Enkripsi/Dekripsi',
    signVerify: 'Tanda Tangan/Verifikasi'
  },
  
  keyGeneration: {
    title: 'Pembuatan Pasangan Kunci SM2',
    generateButton: 'Buat Pasangan Kunci',
    generating: 'Sedang membuat...',
    publicKey: 'Kunci Publik',
    privateKey: 'Kunci Privat',
    exportPublicKey: 'Ekspor Kunci Publik',
    exportPrivateKey: 'Ekspor Kunci Privat',
    copy: 'Salin',
    info: {
      title: 'Memahami Pasangan Kunci SM2',
      description: 'SM2 adalah algoritma kriptografi kurva eliptik yang dirilis oleh Administrasi Kriptografi Nasional China, termasuk dalam kategori enkripsi asimetris:',
      points: [
        'Kunci Publik: Dapat dibagikan untuk mengenkripsi data atau memverifikasi tanda tangan',
        'Kunci Privat: Harus disimpan dengan aman, digunakan untuk mendekripsi data atau membuat tanda tangan'
      ],
      features: 'Karakteristik algoritma SM2:',
      featuresList: [
        'Berdasarkan kurva eliptik 256-bit, keamanan setara dengan RSA 3072-bit',
        'Eksekusi cepat dengan ukuran kunci pendek',
        'Standar kriptografi nasional (GB/T 32918), cocok untuk skenario komersial di China',
        'Mengintegrasikan fungsi enkripsi, tanda tangan, dan pertukaran kunci'
      ],
      securityTip: 'Peringatan keamanan: Jangan pernah membagikan kunci privat Anda kepada orang lain, simpan pasangan kunci dengan aman.'
    }
  },
  
  encryptDecrypt: {
    title: 'Jenis Operasi',
    encrypt: 'Enkripsi',
    decrypt: 'Dekripsi',
    keyLabel: {
      encrypt: 'Kunci Publik',
      decrypt: 'Kunci Privat'
    },
    dataLabel: {
      encrypt: 'Data yang akan dienkripsi',
      decrypt: 'Data yang akan didekripsi'
    },
    keyPlaceholder: 'Tempel kunci SM2 di sini',
    dataPlaceholder: {
      encrypt: 'Masukkan teks yang akan dienkripsi',
      decrypt: 'Masukkan teks terenkripsi'
    },
    processButton: {
      encrypt: 'Enkripsi',
      decrypt: 'Dekripsi'
    },
    processing: 'Sedang memproses...',
    resultLabel: {
      encrypt: 'Hasil Enkripsi',
      decrypt: 'Hasil Dekripsi'
    },
    info: {
      title: 'Panduan Enkripsi/Dekripsi SM2',
      usage: 'Cara menggunakan enkripsi/dekripsi SM2:',
      points: [
        'Enkripsi: Gunakan kunci publik penerima, hanya pemilik kunci privat yang sesuai yang dapat mendekripsi',
        'Dekripsi: Gunakan kunci privat Anda untuk mendekripsi data yang dienkripsi dengan kunci publik Anda'
      ],
      limitations: 'Batasan penggunaan:',
      limitationsList: [
        'Algoritma SM2 memiliki batasan panjang data, cocok untuk pesan pendek atau data sensitif',
        'Untuk teks panjang, disarankan menggunakan enkripsi simetris (seperti SM4) terlebih dahulu, lalu enkripsi kunci simetris dengan SM2'
      ],
      note: 'Catatan: Format data terenkripsi SM2 tidak kompatibel dengan RSA, pastikan penerima mendukung algoritma SM2.'
    }
  },
  
  signVerify: {
    title: 'Jenis Operasi',
    sign: 'Tanda Tangan',
    verify: 'Verifikasi',
    keyLabel: {
      sign: 'Kunci Privat',
      verify: 'Kunci Publik'
    },
    dataLabel: 'Data untuk {operation}',
    signatureLabel: 'Nilai Tanda Tangan',
    signatureValue: 'Tanda Tangan yang Dihasilkan',
    keyPlaceholder: 'Tempel kunci SM2 di sini',
    dataPlaceholder: 'Masukkan teks data asli',
    signaturePlaceholder: 'Masukkan nilai tanda tangan untuk diverifikasi',
    processButton: {
      sign: 'Buat Tanda Tangan',
      verify: 'Verifikasi Tanda Tangan'
    },
    processing: 'Sedang memproses...',
    verificationSuccess: 'Verifikasi tanda tangan berhasil! Data utuh dan tidak dimodifikasi.',
    verificationFailed: 'Verifikasi tanda tangan gagal! Data mungkin telah diubah atau tanda tangan tidak valid.',
    info: {
      title: 'Panduan Tanda Tangan/Verifikasi SM2',
      mainUses: 'Kegunaan utama tanda tangan digital SM2:',
      usesList: [
        'Integritas data: Memastikan data tidak diubah selama transmisi',
        'Otentikasi: Membuktikan asal data yang sebenarnya',
        'Non-repudiasi: Pengirim tidak dapat menyangkal pengiriman pesan'
      ],
      usage: 'Cara penggunaan:',
      usageList: [
        'Tanda Tangan: Gunakan kunci privat Anda untuk membuat tanda tangan',
        'Verifikasi: Gunakan kunci publik pengirim untuk memverifikasi keaslian tanda tangan'
      ],
      note: 'Catatan: Tanda tangan SM2 menggunakan algoritma standar nasional China, tidak kompatibel dengan algoritma tanda tangan internasional umum, penerima harus mendukung algoritma SM2.'
    }
  },
  
  messages: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    keygenError: 'Gagal membuat pasangan kunci: {error}',
    processError: 'Operasi gagal. Periksa kunci dan data input Anda.',
    emptyKey: 'Masukkan kunci',
    emptyData: 'Masukkan data yang akan diproses'
  }
}