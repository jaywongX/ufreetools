<template>
  <CountryAddressGenerator tool-id="ethiopia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import EthiopiaAddressGeneratorArticle from './EthiopiaAddressGeneratorArticle.vue'

const articleComponent = EthiopiaAddressGeneratorArticle

const countryConfig = {
  "slug": "ethiopia-address-generator",
  "display": "Ethiopia",
  "phoneCode": "251",
  "timezone": "Africa/Addis_Ababa",
  "currency": "ETB",
  "locale": "am-ET",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Addis Ababa Region",
      "districts": [
        "Addis Ababa",
        "Addis Ababa Central",
        "Addis Ababa West"
      ]
    },
    {
      "code": "NOR",
      "name": "Dire Dawa Region",
      "districts": [
        "Dire Dawa",
        "Dire Dawa Central",
        "Dire Dawa East"
      ]
    },
    {
      "code": "SOU",
      "name": "Mekelle Region",
      "districts": [
        "Mekelle",
        "Mekelle Central",
        "Mekelle South"
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
    "Addis Ababa University",
    "National University of Ethiopia",
    "Addis Ababa Technical Institute"
  ]
}
</script>
