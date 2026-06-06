<template>
  <CountryAddressGenerator tool-id="papua-new-guinea-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import PapuaNewGuineaAddressGeneratorArticle from './PapuaNewGuineaAddressGeneratorArticle.vue'

const articleComponent = PapuaNewGuineaAddressGeneratorArticle

const countryConfig = {
  "slug": "papua-new-guinea-address-generator",
  "display": "Papua New Guinea",
  "phoneCode": "675",
  "timezone": "Pacific/Port_Moresby",
  "currency": "PGK",
  "locale": "en-PG",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Port Moresby Region",
      "districts": [
        "Port Moresby",
        "Port Moresby Central",
        "Port Moresby West"
      ]
    },
    {
      "code": "NOR",
      "name": "Lae Region",
      "districts": [
        "Lae",
        "Lae Central",
        "Lae East"
      ]
    },
    {
      "code": "SOU",
      "name": "Mount Hagen Region",
      "districts": [
        "Mount Hagen",
        "Mount Hagen Central",
        "Mount Hagen South"
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
    "University of Papua New Guinea",
    "National University of Papua New Guinea",
    "Port Moresby Technical Institute"
  ]
}
</script>
