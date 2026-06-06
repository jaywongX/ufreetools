<template>
  <CountryAddressGenerator tool-id="palau-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import PalauAddressGeneratorArticle from './PalauAddressGeneratorArticle.vue'

const articleComponent = PalauAddressGeneratorArticle

const countryConfig = {
  "slug": "palau-address-generator",
  "display": "Palau",
  "phoneCode": "680",
  "timezone": "Pacific/Palau",
  "currency": "USD",
  "locale": "en-PW",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Ngerulmud Region",
      "districts": [
        "Ngerulmud",
        "Ngerulmud Central",
        "Ngerulmud West"
      ]
    },
    {
      "code": "NOR",
      "name": "Koror Region",
      "districts": [
        "Koror",
        "Koror Central",
        "Koror East"
      ]
    },
    {
      "code": "SOU",
      "name": "Airai Region",
      "districts": [
        "Airai",
        "Airai Central",
        "Airai South"
      ]
    }
  ],
  "streets": [
    "Beach Road",
    "Market Street",
    "Harbour Road",
    "Church Road",
    "University Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Tane Williams",
    "Mele Brown",
    "Sione Smith",
    "Litia Kumar",
    "Noah Wilson"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Palau Community College",
    "National University of Palau",
    "Ngerulmud Technical Institute"
  ]
}
</script>
