<template>
  <CountryAddressGenerator tool-id="estonia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import EstoniaAddressGeneratorArticle from './EstoniaAddressGeneratorArticle.vue'

const articleComponent = EstoniaAddressGeneratorArticle

const countryConfig = {
  "slug": "estonia-address-generator",
  "display": "Estonia",
  "phoneCode": "372",
  "timezone": "Europe/Tallinn",
  "currency": "€",
  "locale": "et-EE",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "HA",
      "name": "Harju County",
      "districts": [
        "Tallinn",
        "Maardu",
        "Keila"
      ]
    },
    {
      "code": "TA",
      "name": "Tartu County",
      "districts": [
        "Tartu",
        "Elva",
        "Kambja"
      ]
    },
    {
      "code": "ID",
      "name": "Ida-Viru County",
      "districts": [
        "Narva",
        "Kohtla-Järve",
        "Jõhvi"
      ]
    },
    {
      "code": "PA",
      "name": "Pärnu County",
      "districts": [
        "Pärnu",
        "Sindi",
        "Tori"
      ]
    },
    {
      "code": "LA",
      "name": "Lääne-Viru County",
      "districts": [
        "Rakvere",
        "Tapa",
        "Kadrina"
      ]
    }
  ],
  "streets": [
    "Narva maantee",
    "Pärnu maantee",
    "Tartu maantee",
    "Viru tänav",
    "Rüütli tänav"
  ],
  "buildings": [
    "Korter",
    "Ärikeskus",
    "Maja",
    "Kontor",
    "Residents"
  ],
  "names": [
    "Mart Tamm",
    "Kadri Saar",
    "Jaan Kask",
    "Liis Mägi",
    "Kristjan Sepp"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Product Manager"
  ],
  "campus": [
    "University of Tartu",
    "Tallinn University of Technology",
    "Tallinn University"
  ]
}
</script>
