export default {
  name: 'Pengoptimal SVG',
  description: 'Optimalkan dan bersihkan file SVG untuk meningkatkan performa dan mengurangi ukuran file',

  upload: {
    title: 'Unggah SVG',
    dropzone: 'Seret dan lepas file SVG di sini atau klik untuk mengunggah',
    or: 'atau',
    pasteCode: 'Tempel kode SVG',
    maxSize: 'Ukuran file maksimal: 5MB',
    onlySvg: 'Hanya mendukung file format SVG',
    selected: 'Terpilih',
    changeFile: 'Ganti file'
  },

  input: {
    title: 'Input SVG',
    pasteHere: 'Tempel kode SVG di sini...',
    loadExample: 'Muat contoh',
    clear: 'Hapus',
    validate: 'Validasi SVG'
  },

  output: {
    title: 'Hasil Optimasi',
    copyToClipboard: 'Salin ke clipboard',
    download: 'Unduh SVG',
    beforeSize: 'Ukuran asli',
    afterSize: 'Ukuran setelah optimasi',
    reduction: 'Pengurangan',
    reductionBy: 'Berkurang sebesar',
    svgCode: 'Kode SVG'
  },

  options: {
    title: 'Opsi Optimasi',
    preset: 'Preset',
    presets: {
      default: 'Default',
      light: 'Ringan',
      aggressive: 'Agresif',
      custom: 'Kustom'
    },
    removeComments: 'Hapus komentar',
    removeCommentsDesc: 'Hapus bagian komentar dan cdata',
    removeHiddenElements: 'Hapus elemen tersembunyi',
    removeEmptyContainers: 'Hapus kontainer kosong',
    removeUnusedDefs: 'Hapus definisi tidak terpakai',
    removeViewBox: 'Hapus viewBox',
    keepViewBox: 'Pertahankan viewBox',
    keepViewBoxDesc: 'Pertahankan atribut viewBox untuk memastikan SVG dapat diskalakan',
    cleanupIDs: 'Bersihkan ID',
    cleanupIDsDesc: 'Hapus atau persingkat ID yang tidak dirujuk',
    convertColors: 'Konversi warna ke heksadesimal',
    removeMetadata: 'Hapus metadata',
    removeMetadataDesc: 'Hapus elemen &lt;metadata&gt;',
    removeDoctype: 'Hapus tipe dokumen',
    removeXMLProcInst: 'Hapus instruksi XML',
    removeEditorsNS: 'Hapus namespace editor',
    collapseGroups: 'Gabungkan grup',
    collapseGroupsDesc: 'Gabungkan elemen grup tanpa atribut khusus',
    convertPathData: 'Optimasi data path',
    convertPathDataDesc: 'Konversi data path ke koordinat relatif, kurangi digit desimal, dll',
    convertTransforms: 'Optimasi transformasi',
    convertShapeToPath: 'Konversi bentuk ke path',
    convertShapeToPathDesc: 'Konversi bentuk dasar ke elemen &lt;path&gt;',
    removeUselessStrokeAndFill: 'Hapus stroke dan fill tidak berguna',
    moveElemsAttrsToGroup: 'Pindahkan atribut elemen ke grup',
    mergePaths: 'Gabungkan path',
    minifyStyles: 'Minifikasi style',
    inlineStyles: 'Inline style',
    inlineStylesDesc: 'Konversi style dalam elemen &lt;style&gt; ke inline',
    cleanupNumericValues: 'Bulatkan nilai numerik',
    precision: 'Presisi numerik',
    decimalPlaces: 'Digit desimal',
    lowPrecision: 'Presisi rendah (ukuran lebih kecil)',
    highPrecision: 'Presisi tinggi (kualitas lebih baik)',
    removeDimensions: 'Hapus atribut dimensi',
    removeDimensionsDesc: 'Hapus atribut width/height, gunakan viewBox untuk mengontrol ukuran',
    sortAttrs: 'Urutkan atribut',
    sortAttrsDesc: 'Susun atribut elemen secara alfabetis'
  },

  view: {
    title: 'Pratinjau',
    original: 'Asli',
    optimized: 'Setelah optimasi',
    showBorder: 'Tampilkan border',
    backgroundColor: 'Warna latar',
    grid: 'Tampilkan grid',
    zoom: 'Zoom',
    toggleAnimation: 'Toggle animasi'
  },

  actions: {
    optimize: 'Mulai optimasi',
    optimizing: 'Mengoptimasi...',
    resetOptions: 'Reset opsi',
    download: 'Unduh SVG yang dioptimasi',
    copy: 'Salin kode',
    copyCode: 'Salin kode',
    viewCode: 'Lihat kode',
    viewPreview: 'Lihat pratinjau'
  },

  messages: {
    optimizationSuccess: 'Optimasi SVG berhasil',
    optimizationFailed: 'Gagal mengoptimasi SVG: {error}',
    invalidSvg: 'File atau kode SVG tidak valid',
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    downloaded: 'SVG yang dioptimasi telah diunduh',
    emptyInput: 'Harap berikan kode SVG atau file untuk dioptimasi',
    onlySvgAllowed: 'Harap unggah file format SVG!',
    failedToLoadLibrary: 'Gagal memuat library SVGO'
  }
};