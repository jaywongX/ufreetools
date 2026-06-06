<template>
  <CountryAddressGenerator tool-id="kosovo-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import KosovoAddressGeneratorArticle from './KosovoAddressGeneratorArticle.vue'

const articleComponent = KosovoAddressGeneratorArticle

const countryConfig = {
  "slug": "kosovo-address-generator",
  "display": "Kosovo",
  "phoneCode": "383",
  "timezone": "Europe/Pristina",
  "currency": "EUR",
  "locale": "sq-XK",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Pristina Region",
      "districts": [
        "Pristina",
        "Pristina Central",
        "Pristina West"
      ]
    },
    {
      "code": "NOR",
      "name": "Prizren Region",
      "districts": [
        "Prizren",
        "Prizren Central",
        "Prizren East"
      ]
    },
    {
      "code": "SOU",
      "name": "Peja Region",
      "districts": [
        "Peja",
        "Peja Central",
        "Peja South"
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
    "University of Pristina",
    "National University of Kosovo",
    "Pristina Technical Institute"
  ]
}
</script>
