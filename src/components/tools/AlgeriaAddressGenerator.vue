<template>
  <CountryAddressGenerator tool-id="algeria-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AlgeriaAddressGeneratorArticle from './AlgeriaAddressGeneratorArticle.vue'

const articleComponent = AlgeriaAddressGeneratorArticle

const countryConfig = {
  "slug": "algeria-address-generator",
  "display": "Algeria",
  "phoneCode": "213",
  "timezone": "Africa/Algiers",
  "currency": "DZD",
  "locale": "ar-DZ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Algiers Region",
      "districts": [
        "Algiers",
        "Algiers Central",
        "Algiers West"
      ]
    },
    {
      "code": "NOR",
      "name": "Oran Region",
      "districts": [
        "Oran",
        "Oran Central",
        "Oran East"
      ]
    },
    {
      "code": "SOU",
      "name": "Constantine Region",
      "districts": [
        "Constantine",
        "Constantine Central",
        "Constantine South"
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
    "University of Algiers",
    "National University of Algeria",
    "Algiers Technical Institute"
  ]
}
</script>
