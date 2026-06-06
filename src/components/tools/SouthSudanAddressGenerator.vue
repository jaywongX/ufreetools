<template>
  <CountryAddressGenerator tool-id="south-sudan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SouthSudanAddressGeneratorArticle from './SouthSudanAddressGeneratorArticle.vue'

const articleComponent = SouthSudanAddressGeneratorArticle

const countryConfig = {
  "slug": "south-sudan-address-generator",
  "display": "South Sudan",
  "phoneCode": "211",
  "timezone": "Africa/Juba",
  "currency": "SSP",
  "locale": "en-SS",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Juba Region",
      "districts": [
        "Juba",
        "Juba Central",
        "Juba West"
      ]
    },
    {
      "code": "NOR",
      "name": "Wau Region",
      "districts": [
        "Wau",
        "Wau Central",
        "Wau East"
      ]
    },
    {
      "code": "SOU",
      "name": "Malakal Region",
      "districts": [
        "Malakal",
        "Malakal Central",
        "Malakal South"
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
    "University of Juba",
    "National University of South Sudan",
    "Juba Technical Institute"
  ]
}
</script>
