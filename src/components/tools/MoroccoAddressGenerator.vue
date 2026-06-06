<template>
  <CountryAddressGenerator tool-id="morocco-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MoroccoAddressGeneratorArticle from './MoroccoAddressGeneratorArticle.vue'

const articleComponent = MoroccoAddressGeneratorArticle

const countryConfig = {
  "slug": "morocco-address-generator",
  "display": "Morocco",
  "phoneCode": "212",
  "timezone": "Africa/Casablanca",
  "currency": "MAD",
  "locale": "ar-MA",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Rabat Region",
      "districts": [
        "Rabat",
        "Rabat Central",
        "Rabat West"
      ]
    },
    {
      "code": "NOR",
      "name": "Casablanca Region",
      "districts": [
        "Casablanca",
        "Casablanca Central",
        "Casablanca East"
      ]
    },
    {
      "code": "SOU",
      "name": "Marrakesh Region",
      "districts": [
        "Marrakesh",
        "Marrakesh Central",
        "Marrakesh South"
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
    "Mohammed V University",
    "National University of Morocco",
    "Rabat Technical Institute"
  ]
}
</script>
