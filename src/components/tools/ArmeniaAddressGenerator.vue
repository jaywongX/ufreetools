<template>
  <CountryAddressGenerator tool-id="armenia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ArmeniaAddressGeneratorArticle from './ArmeniaAddressGeneratorArticle.vue'

const articleComponent = ArmeniaAddressGeneratorArticle

const countryConfig = {
  "slug": "armenia-address-generator",
  "display": "Armenia",
  "phoneCode": "374",
  "timezone": "Asia/Yerevan",
  "currency": "AMD",
  "locale": "hy-AM",
  "postalPattern": "####",
  "regions": [
    {
      "code": "YER",
      "name": "Yerevan",
      "districts": [
        "Kentron",
        "Arabkir",
        "Malatia-Sebastia"
      ]
    },
    {
      "code": "SHI",
      "name": "Shirak",
      "districts": [
        "Gyumri",
        "Artik",
        "Maralik"
      ]
    },
    {
      "code": "LOR",
      "name": "Lori",
      "districts": [
        "Vanadzor",
        "Alaverdi",
        "Stepanavan"
      ]
    }
  ],
  "streets": [
    "Mashtots Avenue",
    "Abovyan Street",
    "Tigran Mets Avenue",
    "Sayat-Nova Avenue",
    "Northern Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Aram Sargsyan",
    "Ani Hakobyan",
    "Tigran Petrosyan",
    "Mariam Grigoryan",
    "Narek Avetisyan"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Yerevan State University",
    "American University of Armenia",
    "National Polytechnic University of Armenia"
  ]
}
</script>
