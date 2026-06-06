<template>
  <CountryAddressGenerator tool-id="kyrgyzstan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import KyrgyzstanAddressGeneratorArticle from './KyrgyzstanAddressGeneratorArticle.vue'

const articleComponent = KyrgyzstanAddressGeneratorArticle

const countryConfig = {
  "slug": "kyrgyzstan-address-generator",
  "display": "Kyrgyzstan",
  "phoneCode": "996",
  "timezone": "Asia/Bishkek",
  "currency": "KGS",
  "locale": "ky-KG",
  "postalPattern": "######",
  "regions": [
    {
      "code": "BI",
      "name": "Bishkek City",
      "districts": [
        "Bishkek",
        "Leninsky District",
        "Sverdlovsky District"
      ]
    },
    {
      "code": "CHU",
      "name": "Chüy Region",
      "districts": [
        "Tokmok",
        "Kant",
        "Kara-Balta"
      ]
    },
    {
      "code": "OSH",
      "name": "Osh Region",
      "districts": [
        "Osh",
        "Kara-Suu",
        "Uzgen"
      ]
    }
  ],
  "streets": [
    "Chuy Avenue",
    "Manas Avenue",
    "Sovetskaya Street",
    "Toktogul Street",
    "Kiev Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Azamat Bekov",
    "Aigerim Nurlan",
    "Nursultan Osmonov",
    "Meerim Taalaybek",
    "Bakyt Alymbekov"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Kyrgyz National University",
    "American University of Central Asia",
    "Kyrgyz State Technical University"
  ]
}
</script>
