<template>
  <CountryAddressGenerator tool-id="zimbabwe-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ZimbabweAddressGeneratorArticle from './ZimbabweAddressGeneratorArticle.vue'

const articleComponent = ZimbabweAddressGeneratorArticle

const countryConfig = {
  "slug": "zimbabwe-address-generator",
  "display": "Zimbabwe",
  "phoneCode": "263",
  "timezone": "Africa/Harare",
  "currency": "ZWL",
  "locale": "en-ZW",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Harare Region",
      "districts": [
        "Harare",
        "Harare Central",
        "Harare West"
      ]
    },
    {
      "code": "NOR",
      "name": "Bulawayo Region",
      "districts": [
        "Bulawayo",
        "Bulawayo Central",
        "Bulawayo East"
      ]
    },
    {
      "code": "SOU",
      "name": "Mutare Region",
      "districts": [
        "Mutare",
        "Mutare Central",
        "Mutare South"
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
    "University of Zimbabwe",
    "National University of Zimbabwe",
    "Harare Technical Institute"
  ]
}
</script>
