export default {
  name: 'Simulator Resolusi Konflik Git',
  description: 'Simulasikan skenario konflik penggabungan Git dan latihan penyelesaian konflik kode',
  title: 'Simulator Resolusi Konflik Git',
  intro: 'Alat ini membantu Anda memahami dan berlatih menyelesaikan konflik penggabungan Git. Masukkan konten konflik atau gunakan contoh, lalu selesaikan konflik secara manual.',

  buttons: {
    generateExample: 'Buat Contoh Konflik',
    resolveOurs: 'Gunakan Perubahan Saya (HEAD)',
    resolveTheirs: 'Gunakan Perubahan Mereka',
    validate: 'Validasi Solusi',
    reset: 'Reset',
    useOurs: 'Gunakan Milik Saya',
    useTheirs: 'Gunakan Milik Mereka',
    useBoth: 'Gabungkan Keduanya'
  },

  conflictArea: {
    label: 'Area Konflik',
    hasConflict: '⚠️ Ada konflik yang belum terselesaikan',
    noConflict: '✓ Tidak ada konflik'
  },

  analysis: {
    title: 'Analisis Konflik',
    conflict: 'Konflik #{number}',
    ours: 'Perubahan Saya (HEAD)',
    theirs: 'Perubahan Mereka'
  },

  tutorial: {
    title: 'Cara Menyelesaikan Konflik Git',
    intro: 'Konflik Git biasanya muncul saat operasi penggabungan atau rebase, ketika dua cabang mengubah bagian yang sama dari file yang sama.',
    markerExplanation: 'Penanda konflik biasanya terlihat seperti ini:',
    markerExample: `<<<<<<< HEAD
Perubahan Anda (cabang saat ini)
=======
Perubahan Mereka (cabang yang digabungkan)
>>>>>>> nama-cabang`,
    steps: {
      title: 'Langkah dasar menyelesaikan konflik:',
      step1: 'Temukan semua penanda konflik (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> nama cabang</code>)',
      step2: 'Putuskan kode mana yang akan dipertahankan (milik Anda, milik mereka, atau kombinasi keduanya)',
      step3: 'Hapus penanda konflik, pertahankan kode yang Anda putuskan untuk disimpan',
      step4: 'Lanjutkan ke konflik berikutnya sampai semua konflik terselesaikan'
    },
    commands: {
      title: 'Perintah Git yang umum digunakan:',
      status: '<code>git status</code> - Lihat file mana yang memiliki konflik',
      diff: '<code>git diff</code> - Lihat detail konten konflik',
      abort: '<code>git merge --abort</code> - Batalkan penggabungan, kembalikan ke keadaan sebelum penggabungan',
      add: '<code>git add &lt;file&gt;</code> - Tandai file konflik sebagai terselesaikan',
      commit: '<code>git commit</code> - Selesaikan penggabungan'
    }
  },

  messages: {
    generated: "Contoh konten konflik telah dibuat",
    resolvedOurs: "Semua konflik diselesaikan menggunakan 'Perubahan Saya'",
    resolvedTheirs: "Semua konflik diselesaikan menggunakan 'Perubahan Mereka'",
    resolvedSingle: "Konflik #{number} telah diselesaikan",
    allResolved: "✅ Semua konflik berhasil diselesaikan!",
    stillHasConflicts: "⚠️ Masih ada konflik yang belum terselesaikan, periksa dan selesaikan semua penanda"
  }
};