<template>
  <CountryAddressGenerator tool-id="tonga-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TongaAddressGeneratorArticle from './TongaAddressGeneratorArticle.vue'

const articleComponent = TongaAddressGeneratorArticle

const countryConfig = {
  "slug": "tonga-address-generator",
  "display": "Tonga",
  "phoneCode": "676",
  "timezone": "Pacific/Tongatapu",
  "currency": "TOP",
  "locale": "en-TO",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Nuku'alofa Region",
      "districts": [
        "Nuku'alofa",
        "Nuku'alofa Central",
        "Nuku'alofa West"
      ]
    },
    {
      "code": "NOR",
      "name": "Neiafu Region",
      "districts": [
        "Neiafu",
        "Neiafu Central",
        "Neiafu East"
      ]
    },
    {
      "code": "SOU",
      "name": "Haveluloto Region",
      "districts": [
        "Haveluloto",
        "Haveluloto Central",
        "Haveluloto South"
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
    "University of the South Pacific Tonga Campus",
    "National University of Tonga",
    "Nuku'alofa Technical Institute"
  ]
}
</script>
