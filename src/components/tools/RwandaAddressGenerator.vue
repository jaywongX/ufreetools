<template>
  <CountryAddressGenerator tool-id="rwanda-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import RwandaAddressGeneratorArticle from './RwandaAddressGeneratorArticle.vue'

const articleComponent = RwandaAddressGeneratorArticle

const countryConfig = {
  "slug": "rwanda-address-generator",
  "display": "Rwanda",
  "phoneCode": "250",
  "timezone": "Africa/Kigali",
  "currency": "RWF",
  "locale": "rw-RW",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Kigali Region",
      "districts": [
        "Kigali",
        "Kigali Central",
        "Kigali West"
      ]
    },
    {
      "code": "NOR",
      "name": "Butare Region",
      "districts": [
        "Butare",
        "Butare Central",
        "Butare East"
      ]
    },
    {
      "code": "SOU",
      "name": "Gisenyi Region",
      "districts": [
        "Gisenyi",
        "Gisenyi Central",
        "Gisenyi South"
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
    "University of Rwanda",
    "National University of Rwanda",
    "Kigali Technical Institute"
  ]
}
</script>
