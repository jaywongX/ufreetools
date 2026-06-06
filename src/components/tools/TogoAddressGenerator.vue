<template>
  <CountryAddressGenerator tool-id="togo-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TogoAddressGeneratorArticle from './TogoAddressGeneratorArticle.vue'

const articleComponent = TogoAddressGeneratorArticle

const countryConfig = {
  "slug": "togo-address-generator",
  "display": "Togo",
  "phoneCode": "228",
  "timezone": "Africa/Lome",
  "currency": "XOF",
  "locale": "fr-TG",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Lome Region",
      "districts": [
        "Lome",
        "Lome Central",
        "Lome West"
      ]
    },
    {
      "code": "NOR",
      "name": "Sokode Region",
      "districts": [
        "Sokode",
        "Sokode Central",
        "Sokode East"
      ]
    },
    {
      "code": "SOU",
      "name": "Kara Region",
      "districts": [
        "Kara",
        "Kara Central",
        "Kara South"
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
    "University of Lome",
    "National University of Togo",
    "Lome Technical Institute"
  ]
}
</script>
