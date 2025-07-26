export default {
  name: 'Konverter XML/JSON',
  title: 'Konversi XML ↔ JSON',
  description: 'Konversi dua arah antara format XML dan JSON dengan opsi lanjutan dan pengaturan kustom',

  conversion: {
    direction: 'Arah Konversi',
    xmlToJson: 'XML ke JSON',
    jsonToXml: 'JSON ke XML'
  },

  options: {
    title: 'Opsi Konversi',
    show: 'Tampilkan Opsi',
    hide: 'Sembunyikan Opsi',
    
    xmlToJson: {
      ignoreAttributes: 'Abaikan Atribut',
      ignoreAttributesHint: 'Nonaktifkan opsi ini untuk mempertahankan informasi atribut XML dalam JSON',
      parseAttributeValue: 'Parse Nilai Atribut',
      parseAttributeValueHint: 'Konversi angka, boolean, dll. dalam atribut ke tipe aktual bukan string',
      ignoreDeclaration: 'Abaikan Deklarasi XML',
      ignoreDeclarationHint: 'Abaikan informasi deklarasi seperti <?xml version="1.0"?>',
      parseTagValue: 'Parse Nilai Tag',
      parseTagValueHint: 'Konversi angka, boolean, dll. dalam konten tag ke tipe aktual bukan string',
      trimValues: 'Hapus Spasi Awal/Akhir',
      attributePrefix: 'Prefiks Atribut',
      attributePrefixPlaceholder: 'Contoh: @, _, attr_',
      attributePrefixHint: 'Prefiks untuk merepresentasikan atribut XML dalam JSON, default @'
    },
    
    jsonToXml: {
      format: 'Format XML',
      formatHint: 'Aktifkan indentasi dan baris baru untuk membuat XML lebih mudah dibaca',
      indentBy: 'Indentasi (2 spasi)',
      addDeclaration: 'Tambahkan Deklarasi XML',
      addDeclarationHint: 'Tambahkan <?xml version="1.0" encoding="UTF-8"?> di awal XML',
      rootName: 'Nama Root Element (opsional)',
      rootNamePlaceholder: 'Contoh: root, data, xml',
      rootNameHint: 'Nama root element saat JSON memiliki banyak kunci di level atas',
      attributePrefix: 'Identifikasi Prefiks Atribut',
      attributePrefixPlaceholder: 'Contoh: @, _, attr_',
      attributePrefixHint: 'Prefiks untuk mengidentifikasi atribut XML dalam JSON, default @'
    }
  },

  buttons: {
    convert: 'Konversi',
    swap: 'Tukar Konten',
    clear: 'Bersihkan',
    loadExample: 'Muat Contoh'
  },

  input: {
    xmlInput: 'Input XML',
    jsonInput: 'Input JSON',
    placeholder: {
      xml: 'Masukkan XML...',
      json: 'Masukkan JSON...'
    }
  },

  output: {
    xmlResult: 'Hasil XML',
    jsonResult: 'Hasil JSON',
    copy: 'Salin'
  },

  stats: {
    title: 'Statistik Konversi',
    inputSize: 'Ukuran Input',
    outputSize: 'Ukuran Output',
    sizeChange: 'Perubahan Ukuran',
    conversionTime: 'Waktu Konversi'
  },

  help: {
    title: 'Bantuan Penggunaan',
    show: 'Tampilkan Bantuan',
    hide: 'Sembunyikan Bantuan',
    about: {
      title: 'Penjelasan Format XML dan JSON',
      content: 'XML (eXtensible Markup Language) adalah bahasa markup yang dapat diperluas, banyak digunakan untuk file konfigurasi, pertukaran data, dan layanan web. JSON (JavaScript Object Notation) adalah format pertukaran data ringan yang mudah dibaca dan ditulis oleh manusia, serta mudah diurai dan dibuat oleh mesin.'
    },
    xmlToJson: {
      title: 'Pertimbangan Konversi XML ke JSON',
      items: [
        'Atribut XML dalam JSON secara default akan dikonversi menjadi kunci yang diawali dengan @',
        'Konten teks XML dalam JSON secara default memiliki kunci #text',
        'Aktifkan "Parse Nilai Tag" untuk mengkonversi angka, boolean, dll. ke tipe JSON aktual',
        'XML dapat memiliki banyak tag dengan nama sama, akan dikonversi menjadi array dalam JSON'
      ]
    },
    jsonToXml: {
      title: 'Pertimbangan Konversi JSON ke XML',
      items: [
        'Kunci JSON yang diawali dengan @ secara default dianggap sebagai atribut XML',
        'Penggunaan array dalam JSON akan membuat banyak tag dengan nama sama dalam XML',
        'Objek JSON bertingkat kompleks akan menghasilkan struktur XML berhirarki',
        'JSON dengan banyak kunci di level atas tanpa nama root akan menghasilkan banyak root element XML'
      ]
    }
  },

  errors: {
    xmlParse: 'Error Parsing XML: {0}',
    jsonParse: 'Error Parsing JSON: {0}',
    xmlGeneration: 'Error Pembuatan XML: {0}',
    emptyObject: 'Objek JSON kosong atau tidak valid',
    conversion: 'Error Konversi: {0}'
  },

  alerts: {
    copied: 'Tersalin ke clipboard'
  }
};