<template>
  <CountryAddressGenerator tool-id="guinea-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GuineaAddressGeneratorArticle from './GuineaAddressGeneratorArticle.vue'

const articleComponent = GuineaAddressGeneratorArticle

const countryConfig = {
  "slug": "guinea-address-generator",
  "display": "Guinea",
  "phoneCode": "224",
  "timezone": "Africa/Conakry",
  "currency": "GNF",
  "locale": "fr-GN",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Conakry Region",
      "districts": [
        "Conakry",
        "Conakry Central",
        "Conakry West"
      ]
    },
    {
      "code": "NOR",
      "name": "Kankan Region",
      "districts": [
        "Kankan",
        "Kankan Central",
        "Kankan East"
      ]
    },
    {
      "code": "SOU",
      "name": "Labe Region",
      "districts": [
        "Labe",
        "Labe Central",
        "Labe South"
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
    "University of Conakry",
    "National University of Guinea",
    "Conakry Technical Institute"
  ]
}
</script>
