<template>
  <CountryAddressGenerator tool-id="ghana-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GhanaAddressGeneratorArticle from './GhanaAddressGeneratorArticle.vue'

const articleComponent = GhanaAddressGeneratorArticle

const countryConfig = {
  "slug": "ghana-address-generator",
  "display": "Ghana",
  "phoneCode": "233",
  "timezone": "Africa/Accra",
  "currency": "GHS",
  "locale": "en-GH",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Accra Region",
      "districts": [
        "Accra",
        "Accra Central",
        "Accra West"
      ]
    },
    {
      "code": "NOR",
      "name": "Kumasi Region",
      "districts": [
        "Kumasi",
        "Kumasi Central",
        "Kumasi East"
      ]
    },
    {
      "code": "SOU",
      "name": "Tamale Region",
      "districts": [
        "Tamale",
        "Tamale Central",
        "Tamale South"
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
    "University of Ghana",
    "National University of Ghana",
    "Accra Technical Institute"
  ]
}
</script>
