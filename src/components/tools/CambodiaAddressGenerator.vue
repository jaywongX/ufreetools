<template>
  <CountryAddressGenerator tool-id="cambodia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CambodiaAddressGeneratorArticle from './CambodiaAddressGeneratorArticle.vue'

const articleComponent = CambodiaAddressGeneratorArticle

const countryConfig = {
  "slug": "cambodia-address-generator",
  "display": "Cambodia",
  "phoneCode": "855",
  "timezone": "Asia/Phnom_Penh",
  "currency": "KHR",
  "locale": "km-KH",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "PP",
      "name": "Phnom Penh",
      "districts": [
        "Daun Penh",
        "Chamkarmon",
        "Toul Kork"
      ]
    },
    {
      "code": "SR",
      "name": "Siem Reap",
      "districts": [
        "Siem Reap",
        "Angkor Chum",
        "Puok"
      ]
    },
    {
      "code": "BTB",
      "name": "Battambang",
      "districts": [
        "Battambang",
        "Banan",
        "Sangkae"
      ]
    }
  ],
  "streets": [
    "Norodom Boulevard",
    "Monivong Boulevard",
    "Street 2004",
    "Sivatha Road",
    "National Road 6"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Sokha Chan",
    "Srey Mom",
    "Dara Kim",
    "Vanna Sok",
    "Rathana Lim"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Royal University of Phnom Penh",
    "Institute of Technology of Cambodia",
    "Paññāsāstra University of Cambodia"
  ]
}
</script>
