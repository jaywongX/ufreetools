<template>
  <CountryAddressGenerator tool-id="libya-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LibyaAddressGeneratorArticle from './LibyaAddressGeneratorArticle.vue'

const articleComponent = LibyaAddressGeneratorArticle

const countryConfig = {
  "slug": "libya-address-generator",
  "display": "Libya",
  "phoneCode": "218",
  "timezone": "Africa/Tripoli",
  "currency": "LYD",
  "locale": "ar-LY",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Tripoli Region",
      "districts": [
        "Tripoli",
        "Tripoli Central",
        "Tripoli West"
      ]
    },
    {
      "code": "NOR",
      "name": "Benghazi Region",
      "districts": [
        "Benghazi",
        "Benghazi Central",
        "Benghazi East"
      ]
    },
    {
      "code": "SOU",
      "name": "Misrata Region",
      "districts": [
        "Misrata",
        "Misrata Central",
        "Misrata South"
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
    "University of Tripoli",
    "National University of Libya",
    "Tripoli Technical Institute"
  ]
}
</script>
