export default {
  name: 'Pengkode Entitas HTML',
  description: 'Konversi antara teks HTML dan pengkodean entitas',
  title: 'Pengkode/Dekode Entitas HTML',
  intro: 'Pengkodean entitas HTML digunakan untuk mengubah karakter khusus ke format yang aman untuk HTML, sering digunakan untuk mencegah serangan XSS atau menampilkan kode sumber HTML.',

  operation: {
    title: 'Jenis Operasi',
    encode: 'Pengkodean Entitas HTML',
    decode: 'Dekode Entitas HTML'
  },

  mode: {
    title: 'Mode Pengkodean',
    named: 'Entitas bernama (&amp;lt;)',
    decimal: 'Entitas desimal (&amp;#60;)',
    hex: 'Entitas heksadesimal (&amp;#x3C;)',
    full: 'Pengkodean penuh (semua karakter)'
  },

  input: {
    encodeTitle: 'Teks yang akan dikodekan',
    decodeTitle: 'Teks yang akan didekodekan',
    encodePlaceholder: 'Masukkan HTML atau teks yang akan dikodekan...',
    decodePlaceholder: 'Masukkan teks entitas HTML yang akan didekodekan...',
    clear: 'Hapus'
  },

  output: {
    encodeTitle: 'Hasil Pengkodean',
    decodeTitle: 'Hasil Dekode',
    copy: 'Salin Hasil',
    copied: '(Tersalin',
    preview: 'Pratinjau Hasil',
    showSource: 'Tampilkan Kode Sumber'
  },

  reference: {
    title: 'Referensi Entitas',
    commonReferenceTables: 'Tabel Referensi Entitas HTML Umum',
    show: 'Tampilkan Tabel',
    hide: 'Sembunyikan Tabel',
    description: {
      named: 'Gunakan format bernama seperti &amp;lt; untuk &lt; (hanya untuk entitas HTML umum)',
      decimal: 'Gunakan format desimal seperti &amp;#60; untuk &lt;',
      hex: 'Gunakan format heksadesimal seperti &amp;#x3C; untuk &lt;',
      full: 'Kodekan semua karakter non-alfanumerik termasuk spasi, baris baru, dll.'
    },
    table: {
      char: 'Karakter',
      named: 'Entitas Bernama',
      decimal: 'Entitas Desimal',
      description: 'Deskripsi'
    },
    entities: {
      lt: 'Tanda kurang dari',
      gt: 'Tanda lebih dari',
      amp: 'Tanda dan',
      quot: 'Tanda kutip ganda',
      apos: 'Tanda kutip tunggal',
      copy: 'Simbol hak cipta',
      reg: 'Simbol merek terdaftar',
      trade: 'Simbol merek dagang',
      nbsp: 'Spasi tanpa jeda',
      cent: 'Simbol sen',
      pound: 'Simbol pound',
      euro: 'Simbol euro',
      yen: 'Simbol yen/yuan',
      sect: 'Simbol bagian',
      minus: 'Tanda minus',
      times: 'Tanda kali',
      divide: 'Tanda bagi',
      deg: 'Simbol derajat',
      plusmn: 'Tanda plus-minus',
      frac14: 'Seperempat'
    }
  },

  messages: {
    copySuccess: 'Berhasil disalin ke clipboard',
    copyError: 'Gagal menyalin, silakan salin manual',
    encodeSuccess: 'Pengkodean selesai',
    decodeSuccess: 'Dekode selesai',
    invalidInput: 'Teks input tidak valid'
  }
};