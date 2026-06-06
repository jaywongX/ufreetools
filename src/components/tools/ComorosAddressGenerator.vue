<template>
  <CountryAddressGenerator tool-id="comoros-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ComorosAddressGeneratorArticle from './ComorosAddressGeneratorArticle.vue'

const articleComponent = ComorosAddressGeneratorArticle

const countryConfig = {
  "slug": "comoros-address-generator",
  "display": "Comoros",
  "phoneCode": "269",
  "timezone": "Indian/Comoro",
  "currency": "KMF",
  "locale": "ar-KM",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Moroni Region",
      "districts": [
        "Moroni",
        "Moroni Central",
        "Moroni West"
      ]
    },
    {
      "code": "NOR",
      "name": "Mutsamudu Region",
      "districts": [
        "Mutsamudu",
        "Mutsamudu Central",
        "Mutsamudu East"
      ]
    },
    {
      "code": "SOU",
      "name": "Fomboni Region",
      "districts": [
        "Fomboni",
        "Fomboni Central",
        "Fomboni South"
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
    "University of Comoros",
    "National University of Comoros",
    "Moroni Technical Institute"
  ]
}
</script>
