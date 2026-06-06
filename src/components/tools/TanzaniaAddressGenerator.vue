<template>
  <CountryAddressGenerator tool-id="tanzania-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TanzaniaAddressGeneratorArticle from './TanzaniaAddressGeneratorArticle.vue'

const articleComponent = TanzaniaAddressGeneratorArticle

const countryConfig = {
  "slug": "tanzania-address-generator",
  "display": "Tanzania",
  "phoneCode": "255",
  "timezone": "Africa/Dar_es_Salaam",
  "currency": "TZS",
  "locale": "sw-TZ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Dodoma Region",
      "districts": [
        "Dodoma",
        "Dodoma Central",
        "Dodoma West"
      ]
    },
    {
      "code": "NOR",
      "name": "Dar es Salaam Region",
      "districts": [
        "Dar es Salaam",
        "Dar es Salaam Central",
        "Dar es Salaam East"
      ]
    },
    {
      "code": "SOU",
      "name": "Arusha Region",
      "districts": [
        "Arusha",
        "Arusha Central",
        "Arusha South"
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
    "University of Dar es Salaam",
    "National University of Tanzania",
    "Dodoma Technical Institute"
  ]
}
</script>
