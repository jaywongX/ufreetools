<template>
  <CountryAddressGenerator tool-id="solomon-islands-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SolomonIslandsAddressGeneratorArticle from './SolomonIslandsAddressGeneratorArticle.vue'

const articleComponent = SolomonIslandsAddressGeneratorArticle

const countryConfig = {
  "slug": "solomon-islands-address-generator",
  "display": "Solomon Islands",
  "phoneCode": "677",
  "timezone": "Pacific/Guadalcanal",
  "currency": "SBD",
  "locale": "en-SB",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Honiara Region",
      "districts": [
        "Honiara",
        "Honiara Central",
        "Honiara West"
      ]
    },
    {
      "code": "NOR",
      "name": "Gizo Region",
      "districts": [
        "Gizo",
        "Gizo Central",
        "Gizo East"
      ]
    },
    {
      "code": "SOU",
      "name": "Auki Region",
      "districts": [
        "Auki",
        "Auki Central",
        "Auki South"
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
    "Solomon Islands National University",
    "National University of Solomon Islands",
    "Honiara Technical Institute"
  ]
}
</script>
