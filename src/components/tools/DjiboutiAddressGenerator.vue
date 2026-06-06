<template>
  <CountryAddressGenerator tool-id="djibouti-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import DjiboutiAddressGeneratorArticle from './DjiboutiAddressGeneratorArticle.vue'

const articleComponent = DjiboutiAddressGeneratorArticle

const countryConfig = {
  "slug": "djibouti-address-generator",
  "display": "Djibouti",
  "phoneCode": "253",
  "timezone": "Africa/Djibouti",
  "currency": "DJF",
  "locale": "fr-DJ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Djibouti City Region",
      "districts": [
        "Djibouti City",
        "Djibouti City Central",
        "Djibouti City West"
      ]
    },
    {
      "code": "NOR",
      "name": "Ali Sabieh Region",
      "districts": [
        "Ali Sabieh",
        "Ali Sabieh Central",
        "Ali Sabieh East"
      ]
    },
    {
      "code": "SOU",
      "name": "Tadjoura Region",
      "districts": [
        "Tadjoura",
        "Tadjoura Central",
        "Tadjoura South"
      ]
    }
  ],
  "streets": [
    "Independence Avenue",
    "Central Market Road",
    "University Road",
    "Station Road",
    "Nelson Mandela Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Samuel Mensah",
    "Amina Diallo",
    "Daniel Okafor",
    "Fatou Ndiaye",
    "Grace Ndlovu"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Djibouti",
    "National University of Djibouti",
    "Djibouti City Technical Institute"
  ]
}
</script>
