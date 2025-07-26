export default {
  name: 'Alat Pencari Alamat IP',
  description: 'Dapatkan detail lengkap alamat IP termasuk lokasi dan informasi jaringan',

  input: {
    title: 'Pencarian Alamat IP',
    ipAddress: 'Alamat IP',
    ipPlaceholder: 'Masukkan alamat IP (contoh: 8.8.8.8)',
    hostname: 'Nama Host',
    hostnamePlaceholder: 'Atau masukkan nama host (contoh: google.com)',
    options: 'Opsi Pencarian',
    includeGeolocation: 'Sertakan lokasi geografis',
    includeASN: 'Sertakan informasi ASN',
    includeDomains: 'Sertakan domain terkait',
    includeAbuse: 'Sertakan kontak pelaporan penyalahgunaan',
    myIP: 'Gunakan alamat IP saya'
  },

  actions: {
    lookup: 'Cari IP',
    clear: 'Hapus Hasil',
    copyIP: 'Salin IP',
    copyAll: 'Salin Semua Informasi',
    export: 'Ekspor Hasil'
  },

  results: {
    title: 'Informasi IP',
    noResults: 'Tidak ada informasi yang ditampilkan',
    error: 'Error: {message}',
    unknown: 'Tidak diketahui',
    queryTime: 'Waktu Pencarian',
    dataSource: 'Sumber Data',
    general: {
      title: 'Informasi Umum',
      ipAddress: 'Alamat IP',
      hostname: 'Nama Host',
      type: 'Tipe',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'IP Publik',
      yes: 'Ya',
      no: 'Tidak',
      reverse: 'DNS Balik'
    },
    location: {
      title: 'Lokasi',
      country: 'Negara',
      region: 'Wilayah',
      city: 'Kota',
      postalCode: 'Kode Pos',
      timezone: 'Zona Waktu',
      coordinates: 'Koordinat',
      latitude: 'Lintang',
      longitude: 'Bujur'
    },
    network: {
      title: 'Jaringan',
      asn: 'ASN',
      organization: 'Organisasi',
      isp: 'Penyedia Layanan Internet',
      usage: 'Tipe Penggunaan',
      domain: 'Domain',
      route: 'Rute',
      subnet: 'Subnet',
      netmask: 'Netmask',
      cidr: 'Notasi CIDR'
    },
    security: {
      title: 'Informasi Keamanan',
      threat: 'Deteksi Ancaman',
      isTor: 'Node Keluar Tor',
      isProxy: 'Proxy',
      isVpn: 'VPN',
      isAttacker: 'Penyerang Diketahui',
      isAbuser: 'Penyalahguna Diketahui',
      threatLevel: 'Tingkat Ancaman',
      confidenceScore: 'Skor Keyakinan',
      abuseReports: 'Laporan Penyalahgunaan',
      lastReported: 'Terakhir Dilaporkan'
    },
    additional: {
      title: 'Informasi Tambahan',
      mobile: 'Jaringan Seluler',
      hosting: 'Penyedia Hosting',
      associated: 'Domain Terkait',
      abuseContact: 'Kontak Pelaporan Penyalahgunaan'
    }
  },

  map: {
    title: 'Peta Lokasi',
    noLocation: 'Tidak ada data lokasi yang tersedia',
    viewLarger: 'Lihat peta yang lebih besar'
  },

  messages: {
    lookingUp: 'Mencari informasi untuk {query}...',
    copied: 'Tersalin ke clipboard',
    exported: 'Hasil berhasil diekspor',
    invalidIP: 'Alamat IP tidak valid',
    invalidHostname: 'Nama host tidak valid',
    publicIPOnly: 'Alat ini hanya untuk alamat IP publik',
    rateLimited: 'Batas pencarian terlampaui. Silakan coba lagi nanti.',
    historyCleared: 'Riwayat telah dihapus'
  },

  history: {
    title: 'Riwayat Pencarian',
    clear: 'Hapus Riwayat'
  }
};