<template>
  <CountryAddressGenerator tool-id="cameroon-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CameroonAddressGeneratorArticle from './CameroonAddressGeneratorArticle.vue'

const articleComponent = CameroonAddressGeneratorArticle

const countryConfig = {
  "slug": "cameroon-address-generator",
  "display": "Cameroon",
  "phoneCode": "237",
  "timezone": "Africa/Douala",
  "currency": "XAF",
  "locale": "fr-CM",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Yaounde Region",
      "districts": [
        "Yaounde",
        "Yaounde Central",
        "Yaounde West"
      ]
    },
    {
      "code": "NOR",
      "name": "Douala Region",
      "districts": [
        "Douala",
        "Douala Central",
        "Douala East"
      ]
    },
    {
      "code": "SOU",
      "name": "Bamenda Region",
      "districts": [
        "Bamenda",
        "Bamenda Central",
        "Bamenda South"
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
    "University of Yaounde I",
    "National University of Cameroon",
    "Yaounde Technical Institute"
  ]
}
</script>
