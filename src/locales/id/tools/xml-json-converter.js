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
  },
  
  article: {
    title: "Konverter XML/JSON: Transformasi Data Tanpa Hambatan",
    features: {
      title: "Memahami Konversi Data XML dan JSON",
      description: "<strong>Konverter XML/JSON</strong> adalah alat canggih yang dirancang untuk memfasilitasi konversi antara dua <strong>format pertukaran data</strong> yang paling banyak digunakan dalam pengembangan web dan integrasi sistem. <strong>Konverter dua arah</strong> ini memungkinkan Anda melakukan <strong>konversi XML ke JSON</strong> dan sebaliknya sambil mempertahankan integritas struktur data.<br><br><strong>Parser XML/JSON</strong> kami menyediakan berbagai opsi kustom untuk menangani atribut, deklarasi, dan struktur data bertingkat. Untuk <strong>konversi XML ke JSON</strong>, Anda dapat mengkonfigurasi prefiks atribut, mengontrol cara nilai tag di-parsing, dan menentukan penanganan spasi. Saat melakukan <strong>konversi JSON ke XML</strong>, Anda dapat menentukan preferensi pemformatan, menambahkan deklarasi XML, dan mendefinisikan nama elemen root untuk output yang terstruktur dengan baik. <strong>Konverter format data</strong> ini memastikan representasi akurat dari data hierarkis kompleks di antara kedua format.",
      useCases: {
        title: "Kasus Penggunaan Umum Konversi XML-JSON",
        items: [
          "Pengembang API mengkonversi antara layanan web SOAP berbasis XML dan API REST berbasis JSON untuk memastikan kompatibilitas di berbagai titik integrasi",
          "Pengembang frontend mengkonversi file konfigurasi XML ke JSON untuk penggunaan yang lebih mudah dalam aplikasi JavaScript dan framework modern",
          "Insinyur backend bekerja dengan sistem warisan yang menggunakan XML sambil mengimplementasikan layanan baru yang membutuhkan format JSON",
          "Spesialis integrasi data memetakan format sistem yang berbeda selama proses ETL (Ekstraksi, Transformasi, Loading)",
          "Aplikasi web scraping yang mengekstrak data XML (seperti feed RSS) dan perlu mengkonversinya ke JSON untuk penyimpanan atau analisis",
          "Pengembang aplikasi mobile yang menggunakan data XML dari sistem perusahaan dan mengkonversinya ke JSON untuk pemrosesan klien yang lebih efisien"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Konversi XML-JSON",
      items: [
        {
          question: "Apakah konverter dapat menangani struktur bertingkat kompleks dalam kedua format?",
          answer: "Ya, parser XML/JSON kami sepenuhnya mendukung struktur bertingkat kompleks di kedua arah. Konverter secara akurat mempertahankan hubungan hierarkis, menangani array, objek, dan konten campuran. Saat mengkonversi dari XML ke JSON, elemen bertingkat menjadi objek bertingkat, dan elemen berulang secara otomatis dikonversi ke array. Saat mengkonversi dari JSON ke XML, objek bertingkat dipertahankan sebagai elemen anak, dan array direpresentasikan sebagai elemen berulang dengan nama tag yang sama. Pelestarian struktur ini sangat penting untuk menangani model data kompleks dan file konfigurasi dalam format apa pun."
        },
        {
          question: "Bagaimana alat ini menangani karakter khusus dan encoding?",
          answer: "Konverter XML/JSON secara otomatis mengelola masalah karakter khusus dan encoding di kedua arah. Saat memproses XML, alat ini mendekode entitas XML dengan benar (seperti &amp; untuk &, &lt; untuk <) dan menangani bagian CDATA untuk mempertahankan pemformatan. Selama konversi JSON ke XML, alat mengkodekan karakter khusus sebagai entitas XML yang sesuai untuk memastikan output XML yang valid. Konverter mempertahankan kompatibilitas UTF-8 di seluruh proses, menangani karakter internasional, simbol, dan emoji dengan benar dalam kedua format, membuatnya cocok untuk konten multibahasa dan aplikasi global."
        },
        {
          question: "Apa yang terjadi pada komentar XML selama konversi ke JSON?",
          answer: "Karena JSON tidak mendukung komentar secara native, komentar XML biasanya dihapus selama konversi XML ke JSON. Namun, jika Anda perlu mempertahankan informasi ini, konverter XML/JSON kami menyediakan pengaturan opsional untuk menyimpan komentar dengan mengubahnya menjadi atribut JSON khusus (misalnya sebagai bidang \"__comment\"). Ini memberikan fleksibilitas untuk skenario yang memerlukan penyimpanan komentar yang berisi dokumentasi penting atau instruksi pemrosesan, bahkan saat melakukan konversi antar format. Anda dapat menyesuaikan perilaku ini melalui panel opsi lanjutan di antarmuka konverter."
        },
        {
          question: "Bagaimana namespace XML ditangani selama proses konversi?",
          answer: "Konverter XML/JSON menyediakan opsi untuk menangani namespace XML selama konversi. Secara default, saat dikonversi ke JSON, namespace dan prefiksnya disertakan dalam nama elemen. Misalnya, '<ns:element xmlns:ns=\"namespace\">value</ns:element>' akan dikonversi ke JSON dengan mempertahankan prefiks namespace. Anda dapat menyesuaikan perilaku ini melalui opsi konverter, memilih untuk sepenuhnya mengabaikan namespace, mempertahankannya dalam format tertentu, atau menyimpannya sebagai atribut terpisah dalam struktur JSON yang dihasilkan, sesuai dengan kebutuhan integrasi spesifik Anda."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Menggunakan Konverter XML/JSON",
      steps: [
        "Gunakan tombol radio di bagian atas alat untuk memilih arah konversi yang diinginkan: pilih 'XML ke JSON' untuk mengkonversi markup XML ke format JSON, atau pilih 'JSON ke XML' untuk proses sebaliknya",
        "Klik 'Tampilkan Opsi' untuk mengakses pengaturan lanjutan dan menyesuaikan proses konversi: untuk XML ke JSON, konfigurasikan penanganan atribut dan opsi parsing; untuk JSON ke XML, atur preferensi pemformatan dan opsi deklarasi XML",
        "Masukkan data sumber Anda di bidang input di sisi kiri konverter, atau gunakan tombol 'Muat Contoh' untuk melihat bagaimana alat menangani data yang telah ditentukan",
        "Klik tombol 'Konversi' untuk memproses data Anda - konverter akan mengkonversi input Anda dan menampilkan hasilnya di bidang output di sebelah kanan",
        "Tinjau output konversi dan, jika perlu, sesuaikan pengaturan konversi Anda untuk menyempurnakan hasil sesuai kebutuhan spesifik Anda",
        "Klik tombol 'Salin' di sebelah bidang output untuk menyalin hasil yang dikonversi ke clipboard, untuk digunakan dalam aplikasi atau dokumen Anda",
        "Anda juga dapat menggunakan tombol 'Tukar Konten' untuk membalikkan proses, mengatur output saat ini sebagai input untuk melakukan konversi ke arah yang berlawanan"
      ]
    },
    conclusion: "Konverter XML/JSON menyediakan solusi kuat untuk mengubah data antara dua format dasar dalam komputasi modern. Baik Anda mengintegrasikan sistem yang berbeda, memodernisasi aplikasi warisan, atau mengoptimalkan data untuk pemrosesan klien, alat ini membantu Anda menghindari kompleksitas dan potensi kesalahan konversi manual. Dengan opsi komprehensif untuk menangani atribut, pemformatan, dan elemen struktural, Anda dapat memastikan data Anda mempertahankan integritas dan maknanya saat melintasi batas format. Dengan menyederhanakan konversi antara XML dan JSON, konverter ini membantu menjembatani kesenjangan antara teknologi dan standar yang berbeda, memungkinkan sistem perangkat lunak yang lebih fleksibel dan dapat dioperasikan."
  }
}