<template>
  <CountryAddressGenerator tool-id="indonesia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import IndonesiaAddressGeneratorArticle from './IndonesiaAddressGeneratorArticle.vue'

const articleComponent = IndonesiaAddressGeneratorArticle

const countryConfig = {
  "slug": "indonesia-address-generator",
  "display": "Indonesia",
  "phoneCode": "62",
  "timezone": "Asia/Jakarta",
  "currency": "Rp",
  "locale": "id-ID",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "JK",
      "name": "Jakarta",
      "districts": [
        "Central Jakarta",
        "South Jakarta",
        "West Jakarta",
        "East Jakarta",
        "North Jakarta"
      ]
    },
    {
      "code": "JB",
      "name": "West Java",
      "districts": [
        "Bandung",
        "Bekasi",
        "Bogor",
        "Depok",
        "Cirebon"
      ]
    },
    {
      "code": "JT",
      "name": "Central Java",
      "districts": [
        "Semarang",
        "Surakarta",
        "Magelang",
        "Pekalongan"
      ]
    },
    {
      "code": "JI",
      "name": "East Java",
      "districts": [
        "Surabaya",
        "Malang",
        "Sidoarjo",
        "Kediri"
      ]
    },
    {
      "code": "BA",
      "name": "Bali",
      "districts": [
        "Denpasar",
        "Badung",
        "Gianyar",
        "Tabanan"
      ]
    }
  ],
  "streets": [
    "Jalan Sudirman",
    "Jalan Thamrin",
    "Jalan Gatot Subroto",
    "Jalan Diponegoro",
    "Jalan Ahmad Yani",
    "Jalan Asia Afrika",
    "Jalan Pemuda",
    "Jalan Merdeka"
  ],
  "buildings": [
    "Apartemen",
    "Ruko",
    "Gedung",
    "Residence",
    "Plaza",
    "Mall"
  ],
  "names": [
    "Budi Santoso",
    "Siti Nurhaliza",
    "Agus Wijaya",
    "Dewi Lestari",
    "Rizky Pratama",
    "Maya Sari",
    "Andi Saputra",
    "Nadia Putri"
  ],
  "jobs": [
    "Software Engineer",
    "Marketing Manager",
    "Teacher",
    "Accountant",
    "Doctor",
    "Designer"
  ],
  "campus": [
    "Universitas Indonesia",
    "Institut Teknologi Bandung",
    "Universitas Gadjah Mada"
  ]
}
</script>
