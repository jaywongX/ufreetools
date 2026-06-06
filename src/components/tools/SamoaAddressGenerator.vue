<template>
  <CountryAddressGenerator tool-id="samoa-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SamoaAddressGeneratorArticle from './SamoaAddressGeneratorArticle.vue'

const articleComponent = SamoaAddressGeneratorArticle

const countryConfig = {
  "slug": "samoa-address-generator",
  "display": "Samoa",
  "phoneCode": "685",
  "timezone": "Pacific/Apia",
  "currency": "WST",
  "locale": "en-WS",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Apia Region",
      "districts": [
        "Apia",
        "Apia Central",
        "Apia West"
      ]
    },
    {
      "code": "NOR",
      "name": "Salelologa Region",
      "districts": [
        "Salelologa",
        "Salelologa Central",
        "Salelologa East"
      ]
    },
    {
      "code": "SOU",
      "name": "Vaitele Region",
      "districts": [
        "Vaitele",
        "Vaitele Central",
        "Vaitele South"
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
    "National University of Samoa",
    "National University of Samoa",
    "Apia Technical Institute"
  ]
}
</script>
