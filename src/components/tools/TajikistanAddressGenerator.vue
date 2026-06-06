<template>
  <CountryAddressGenerator tool-id="tajikistan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TajikistanAddressGeneratorArticle from './TajikistanAddressGeneratorArticle.vue'

const articleComponent = TajikistanAddressGeneratorArticle

const countryConfig = {
  "slug": "tajikistan-address-generator",
  "display": "Tajikistan",
  "phoneCode": "992",
  "timezone": "Asia/Dushanbe",
  "currency": "TJS",
  "locale": "tg-TJ",
  "postalPattern": "######",
  "regions": [
    {
      "code": "DU",
      "name": "Dushanbe",
      "districts": [
        "Dushanbe",
        "Ismoili Somoni",
        "Shohmansur"
      ]
    },
    {
      "code": "SU",
      "name": "Sughd Region",
      "districts": [
        "Khujand",
        "Istaravshan",
        "Panjakent"
      ]
    },
    {
      "code": "KH",
      "name": "Khatlon Region",
      "districts": [
        "Bokhtar",
        "Kulob",
        "Danghara"
      ]
    }
  ],
  "streets": [
    "Rudaki Avenue",
    "Somoni Street",
    "Ismoil Somoni Avenue",
    "Ayni Street",
    "Bukhoro Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Farhod Saidov",
    "Nilufar Karimova",
    "Rustam Nazarov",
    "Madina Sharipova",
    "Jamshed Rahmon"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Tajik National University",
    "Tajik Technical University",
    "Khujand State University"
  ]
}
</script>
