<template>
  <CountryAddressGenerator tool-id="tunisia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TunisiaAddressGeneratorArticle from './TunisiaAddressGeneratorArticle.vue'

const articleComponent = TunisiaAddressGeneratorArticle

const countryConfig = {
  "slug": "tunisia-address-generator",
  "display": "Tunisia",
  "phoneCode": "216",
  "timezone": "Africa/Tunis",
  "currency": "TND",
  "locale": "ar-TN",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Tunis Region",
      "districts": [
        "Tunis",
        "Tunis Central",
        "Tunis West"
      ]
    },
    {
      "code": "NOR",
      "name": "Sfax Region",
      "districts": [
        "Sfax",
        "Sfax Central",
        "Sfax East"
      ]
    },
    {
      "code": "SOU",
      "name": "Sousse Region",
      "districts": [
        "Sousse",
        "Sousse Central",
        "Sousse South"
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
    "University of Tunis",
    "National University of Tunisia",
    "Tunis Technical Institute"
  ]
}
</script>
