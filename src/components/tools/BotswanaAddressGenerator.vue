<template>
  <CountryAddressGenerator tool-id="botswana-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BotswanaAddressGeneratorArticle from './BotswanaAddressGeneratorArticle.vue'

const articleComponent = BotswanaAddressGeneratorArticle

const countryConfig = {
  "slug": "botswana-address-generator",
  "display": "Botswana",
  "phoneCode": "267",
  "timezone": "Africa/Gaborone",
  "currency": "BWP",
  "locale": "en-BW",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Gaborone Region",
      "districts": [
        "Gaborone",
        "Gaborone Central",
        "Gaborone West"
      ]
    },
    {
      "code": "NOR",
      "name": "Francistown Region",
      "districts": [
        "Francistown",
        "Francistown Central",
        "Francistown East"
      ]
    },
    {
      "code": "SOU",
      "name": "Maun Region",
      "districts": [
        "Maun",
        "Maun Central",
        "Maun South"
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
    "University of Botswana",
    "National University of Botswana",
    "Gaborone Technical Institute"
  ]
}
</script>
