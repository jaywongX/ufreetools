<template>
  <CountryAddressGenerator tool-id="qatar-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import QatarAddressGeneratorArticle from './QatarAddressGeneratorArticle.vue'

const articleComponent = QatarAddressGeneratorArticle

const countryConfig = {
  "slug": "qatar-address-generator",
  "display": "Qatar",
  "phoneCode": "974",
  "timezone": "Asia/Qatar",
  "currency": "QAR",
  "locale": "en-QA",
  "postalPattern": "PO Box #####",
  "regions": [
    {
      "code": "DAW",
      "name": "Doha",
      "districts": [
        "West Bay",
        "Al Sadd",
        "The Pearl",
        "Msheireb"
      ]
    },
    {
      "code": "RA",
      "name": "Al Rayyan",
      "districts": [
        "Education City",
        "Muaither",
        "Al Waab"
      ]
    },
    {
      "code": "WK",
      "name": "Al Wakrah",
      "districts": [
        "Al Wakrah",
        "Mesaieed"
      ]
    },
    {
      "code": "KH",
      "name": "Al Khor",
      "districts": [
        "Al Khor",
        "Lusail"
      ]
    },
    {
      "code": "SH",
      "name": "Al Shahaniya",
      "districts": [
        "Dukhan",
        "Al Shahaniya"
      ]
    }
  ],
  "streets": [
    "Corniche Street",
    "Salwa Road",
    "C-Ring Road",
    "Al Markhiya Street",
    "Lusail Boulevard",
    "University Street"
  ],
  "buildings": [
    "Tower",
    "Villa",
    "Compound",
    "Residence",
    "Business Center",
    "Plaza"
  ],
  "names": [
    "Khalifa Al Thani",
    "Noora Al Kuwari",
    "Hassan Al Sulaiti",
    "Maha Al Naimi",
    "Jassim Al Marri"
  ],
  "jobs": [
    "Engineer",
    "Project Manager",
    "Teacher",
    "Doctor",
    "Finance Officer"
  ],
  "campus": [
    "Qatar University",
    "Hamad Bin Khalifa University",
    "Georgetown University in Qatar"
  ]
}
</script>
