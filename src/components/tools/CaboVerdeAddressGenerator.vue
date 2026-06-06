<template>
  <CountryAddressGenerator tool-id="cabo-verde-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CaboVerdeAddressGeneratorArticle from './CaboVerdeAddressGeneratorArticle.vue'

const articleComponent = CaboVerdeAddressGeneratorArticle

const countryConfig = {
  "slug": "cabo-verde-address-generator",
  "display": "Cabo Verde",
  "phoneCode": "238",
  "timezone": "Atlantic/Cape_Verde",
  "currency": "CVE",
  "locale": "pt-CV",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Praia Region",
      "districts": [
        "Praia",
        "Praia Central",
        "Praia West"
      ]
    },
    {
      "code": "NOR",
      "name": "Mindelo Region",
      "districts": [
        "Mindelo",
        "Mindelo Central",
        "Mindelo East"
      ]
    },
    {
      "code": "SOU",
      "name": "Santa Maria Region",
      "districts": [
        "Santa Maria",
        "Santa Maria Central",
        "Santa Maria South"
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
    "University of Cabo Verde",
    "National University of Cabo Verde",
    "Praia Technical Institute"
  ]
}
</script>
