<template>
  <CountryAddressGenerator tool-id="brunei-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BruneiAddressGeneratorArticle from './BruneiAddressGeneratorArticle.vue'

const articleComponent = BruneiAddressGeneratorArticle

const countryConfig = {
  "slug": "brunei-address-generator",
  "display": "Brunei",
  "phoneCode": "673",
  "timezone": "Asia/Brunei",
  "currency": "BND",
  "locale": "ms-BN",
  "postalPattern": "AA####",
  "regions": [
    {
      "code": "BM",
      "name": "Brunei-Muara",
      "districts": [
        "Bandar Seri Begawan",
        "Gadong",
        "Kiulap"
      ]
    },
    {
      "code": "KB",
      "name": "Kuala Belait",
      "districts": [
        "Kuala Belait",
        "Seria",
        "Panaga"
      ]
    },
    {
      "code": "TU",
      "name": "Tutong",
      "districts": [
        "Tutong",
        "Lamunin",
        "Telisai"
      ]
    }
  ],
  "streets": [
    "Jalan Sultan",
    "Jalan Gadong",
    "Jalan Tutong",
    "Jalan Kiulap",
    "Jalan Muara"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ahmad Salleh",
    "Nurul Hidayah",
    "Hafiz Osman",
    "Siti Aminah",
    "Faisal Yusof"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Universiti Brunei Darussalam",
    "Universiti Teknologi Brunei",
    "Sultan Sharif Ali Islamic University"
  ]
}
</script>
