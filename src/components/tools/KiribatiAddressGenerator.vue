<template>
  <CountryAddressGenerator tool-id="kiribati-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import KiribatiAddressGeneratorArticle from './KiribatiAddressGeneratorArticle.vue'

const articleComponent = KiribatiAddressGeneratorArticle

const countryConfig = {
  "slug": "kiribati-address-generator",
  "display": "Kiribati",
  "phoneCode": "686",
  "timezone": "Pacific/Tarawa",
  "currency": "AUD",
  "locale": "en-KI",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "South Tarawa Region",
      "districts": [
        "South Tarawa",
        "South Tarawa Central",
        "South Tarawa West"
      ]
    },
    {
      "code": "NOR",
      "name": "Betio Region",
      "districts": [
        "Betio",
        "Betio Central",
        "Betio East"
      ]
    },
    {
      "code": "SOU",
      "name": "Bikenibeu Region",
      "districts": [
        "Bikenibeu",
        "Bikenibeu Central",
        "Bikenibeu South"
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
    "Kiribati Institute of Technology",
    "National University of Kiribati",
    "South Tarawa Technical Institute"
  ]
}
</script>
