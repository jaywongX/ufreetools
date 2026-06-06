<template>
  <CountryAddressGenerator tool-id="nauru-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NauruAddressGeneratorArticle from './NauruAddressGeneratorArticle.vue'

const articleComponent = NauruAddressGeneratorArticle

const countryConfig = {
  "slug": "nauru-address-generator",
  "display": "Nauru",
  "phoneCode": "674",
  "timezone": "Pacific/Nauru",
  "currency": "AUD",
  "locale": "en-NR",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Yaren Region",
      "districts": [
        "Yaren",
        "Yaren Central",
        "Yaren West"
      ]
    },
    {
      "code": "NOR",
      "name": "Aiwo Region",
      "districts": [
        "Aiwo",
        "Aiwo Central",
        "Aiwo East"
      ]
    },
    {
      "code": "SOU",
      "name": "Anabar Region",
      "districts": [
        "Anabar",
        "Anabar Central",
        "Anabar South"
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
    "University of the South Pacific Nauru Campus",
    "National University of Nauru",
    "Yaren Technical Institute"
  ]
}
</script>
