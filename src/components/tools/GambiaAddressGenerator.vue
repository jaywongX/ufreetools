<template>
  <CountryAddressGenerator tool-id="gambia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GambiaAddressGeneratorArticle from './GambiaAddressGeneratorArticle.vue'

const articleComponent = GambiaAddressGeneratorArticle

const countryConfig = {
  "slug": "gambia-address-generator",
  "display": "Gambia",
  "phoneCode": "220",
  "timezone": "Africa/Banjul",
  "currency": "GMD",
  "locale": "en-GM",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Banjul Region",
      "districts": [
        "Banjul",
        "Banjul Central",
        "Banjul West"
      ]
    },
    {
      "code": "NOR",
      "name": "Serekunda Region",
      "districts": [
        "Serekunda",
        "Serekunda Central",
        "Serekunda East"
      ]
    },
    {
      "code": "SOU",
      "name": "Brikama Region",
      "districts": [
        "Brikama",
        "Brikama Central",
        "Brikama South"
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
    "University of The Gambia",
    "National University of Gambia",
    "Banjul Technical Institute"
  ]
}
</script>
