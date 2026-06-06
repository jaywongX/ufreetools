<template>
  <CountryAddressGenerator tool-id="tuvalu-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TuvaluAddressGeneratorArticle from './TuvaluAddressGeneratorArticle.vue'

const articleComponent = TuvaluAddressGeneratorArticle

const countryConfig = {
  "slug": "tuvalu-address-generator",
  "display": "Tuvalu",
  "phoneCode": "688",
  "timezone": "Pacific/Funafuti",
  "currency": "AUD",
  "locale": "en-TV",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Funafuti Region",
      "districts": [
        "Funafuti",
        "Funafuti Central",
        "Funafuti West"
      ]
    },
    {
      "code": "NOR",
      "name": "Vaiaku Region",
      "districts": [
        "Vaiaku",
        "Vaiaku Central",
        "Vaiaku East"
      ]
    },
    {
      "code": "SOU",
      "name": "Nanumea Region",
      "districts": [
        "Nanumea",
        "Nanumea Central",
        "Nanumea South"
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
    "Tuvalu Maritime Training Institute",
    "National University of Tuvalu",
    "Funafuti Technical Institute"
  ]
}
</script>
