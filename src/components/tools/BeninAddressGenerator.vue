<template>
  <CountryAddressGenerator tool-id="benin-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BeninAddressGeneratorArticle from './BeninAddressGeneratorArticle.vue'

const articleComponent = BeninAddressGeneratorArticle

const countryConfig = {
  "slug": "benin-address-generator",
  "display": "Benin",
  "phoneCode": "229",
  "timezone": "Africa/Porto-Novo",
  "currency": "XOF",
  "locale": "fr-BJ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Porto-Novo Region",
      "districts": [
        "Porto-Novo",
        "Porto-Novo Central",
        "Porto-Novo West"
      ]
    },
    {
      "code": "NOR",
      "name": "Cotonou Region",
      "districts": [
        "Cotonou",
        "Cotonou Central",
        "Cotonou East"
      ]
    },
    {
      "code": "SOU",
      "name": "Parakou Region",
      "districts": [
        "Parakou",
        "Parakou Central",
        "Parakou South"
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
    "University of Abomey-Calavi",
    "National University of Benin",
    "Porto-Novo Technical Institute"
  ]
}
</script>
