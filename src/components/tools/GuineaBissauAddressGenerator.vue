<template>
  <CountryAddressGenerator tool-id="guinea-bissau-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GuineaBissauAddressGeneratorArticle from './GuineaBissauAddressGeneratorArticle.vue'

const articleComponent = GuineaBissauAddressGeneratorArticle

const countryConfig = {
  "slug": "guinea-bissau-address-generator",
  "display": "Guinea-Bissau",
  "phoneCode": "245",
  "timezone": "Africa/Bissau",
  "currency": "XOF",
  "locale": "pt-GW",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Bissau Region",
      "districts": [
        "Bissau",
        "Bissau Central",
        "Bissau West"
      ]
    },
    {
      "code": "NOR",
      "name": "Bafata Region",
      "districts": [
        "Bafata",
        "Bafata Central",
        "Bafata East"
      ]
    },
    {
      "code": "SOU",
      "name": "Gabu Region",
      "districts": [
        "Gabu",
        "Gabu Central",
        "Gabu South"
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
    "Amilcar Cabral University",
    "National University of Guinea-Bissau",
    "Bissau Technical Institute"
  ]
}
</script>
