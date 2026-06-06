<template>
  <CountryAddressGenerator tool-id="mongolia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MongoliaAddressGeneratorArticle from './MongoliaAddressGeneratorArticle.vue'

const articleComponent = MongoliaAddressGeneratorArticle

const countryConfig = {
  "slug": "mongolia-address-generator",
  "display": "Mongolia",
  "phoneCode": "976",
  "timezone": "Asia/Ulaanbaatar",
  "currency": "MNT",
  "locale": "mn-MN",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "UB",
      "name": "Ulaanbaatar",
      "districts": [
        "Sükhbaatar",
        "Bayanzürkh",
        "Khan-Uul"
      ]
    },
    {
      "code": "DAR",
      "name": "Darkhan-Uul",
      "districts": [
        "Darkhan",
        "Orkhon",
        "Sharyngol"
      ]
    },
    {
      "code": "ORK",
      "name": "Orkhon",
      "districts": [
        "Erdenet",
        "Jargalant",
        "Bayan-Öndör"
      ]
    }
  ],
  "streets": [
    "Peace Avenue",
    "Chinggis Avenue",
    "Seoul Street",
    "Sukhbaatar Street",
    "Ikh Toiruu"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Bat-Erdene Ganbold",
    "Oyun-Erdene Bold",
    "Munkhbayar Dorj",
    "Anujin Enkh",
    "Tuvshin Altan"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National University of Mongolia",
    "Mongolian University of Science and Technology",
    "Mongolian State University of Education"
  ]
}
</script>
