<template>
  <CountryAddressGenerator tool-id="vanuatu-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import VanuatuAddressGeneratorArticle from './VanuatuAddressGeneratorArticle.vue'

const articleComponent = VanuatuAddressGeneratorArticle

const countryConfig = {
  "slug": "vanuatu-address-generator",
  "display": "Vanuatu",
  "phoneCode": "678",
  "timezone": "Pacific/Efate",
  "currency": "VUV",
  "locale": "en-VU",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Port Vila Region",
      "districts": [
        "Port Vila",
        "Port Vila Central",
        "Port Vila West"
      ]
    },
    {
      "code": "NOR",
      "name": "Luganville Region",
      "districts": [
        "Luganville",
        "Luganville Central",
        "Luganville East"
      ]
    },
    {
      "code": "SOU",
      "name": "Isangel Region",
      "districts": [
        "Isangel",
        "Isangel Central",
        "Isangel South"
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
    "University of the South Pacific Emalus Campus",
    "National University of Vanuatu",
    "Port Vila Technical Institute"
  ]
}
</script>
