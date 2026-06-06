<template>
  <CountryAddressGenerator tool-id="fiji-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import FijiAddressGeneratorArticle from './FijiAddressGeneratorArticle.vue'

const articleComponent = FijiAddressGeneratorArticle

const countryConfig = {
  "slug": "fiji-address-generator",
  "display": "Fiji",
  "phoneCode": "679",
  "timezone": "Pacific/Fiji",
  "currency": "FJD",
  "locale": "en-FJ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Suva Region",
      "districts": [
        "Suva",
        "Suva Central",
        "Suva West"
      ]
    },
    {
      "code": "NOR",
      "name": "Nadi Region",
      "districts": [
        "Nadi",
        "Nadi Central",
        "Nadi East"
      ]
    },
    {
      "code": "SOU",
      "name": "Lautoka Region",
      "districts": [
        "Lautoka",
        "Lautoka Central",
        "Lautoka South"
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
    "University of the South Pacific",
    "National University of Fiji",
    "Suva Technical Institute"
  ]
}
</script>
