<template>
  <CountryAddressGenerator tool-id="chad-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ChadAddressGeneratorArticle from './ChadAddressGeneratorArticle.vue'

const articleComponent = ChadAddressGeneratorArticle

const countryConfig = {
  "slug": "chad-address-generator",
  "display": "Chad",
  "phoneCode": "235",
  "timezone": "Africa/Ndjamena",
  "currency": "XAF",
  "locale": "fr-TD",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "N'Djamena Region",
      "districts": [
        "N'Djamena",
        "N'Djamena Central",
        "N'Djamena West"
      ]
    },
    {
      "code": "NOR",
      "name": "Moundou Region",
      "districts": [
        "Moundou",
        "Moundou Central",
        "Moundou East"
      ]
    },
    {
      "code": "SOU",
      "name": "Sarh Region",
      "districts": [
        "Sarh",
        "Sarh Central",
        "Sarh South"
      ]
    }
  ],
  "streets": [
    "Independence Avenue",
    "Central Market Road",
    "University Road",
    "Station Road",
    "Nelson Mandela Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Samuel Mensah",
    "Amina Diallo",
    "Daniel Okafor",
    "Fatou Ndiaye",
    "Grace Ndlovu"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of N'Djamena",
    "National University of Chad",
    "N'Djamena Technical Institute"
  ]
}
</script>
