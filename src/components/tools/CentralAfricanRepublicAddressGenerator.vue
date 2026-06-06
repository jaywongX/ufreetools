<template>
  <CountryAddressGenerator tool-id="central-african-republic-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CentralAfricanRepublicAddressGeneratorArticle from './CentralAfricanRepublicAddressGeneratorArticle.vue'

const articleComponent = CentralAfricanRepublicAddressGeneratorArticle

const countryConfig = {
  "slug": "central-african-republic-address-generator",
  "display": "Central African Republic",
  "phoneCode": "236",
  "timezone": "Africa/Bangui",
  "currency": "XAF",
  "locale": "fr-CF",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Bangui Region",
      "districts": [
        "Bangui",
        "Bangui Central",
        "Bangui West"
      ]
    },
    {
      "code": "NOR",
      "name": "Bimbo Region",
      "districts": [
        "Bimbo",
        "Bimbo Central",
        "Bimbo East"
      ]
    },
    {
      "code": "SOU",
      "name": "Berberati Region",
      "districts": [
        "Berberati",
        "Berberati Central",
        "Berberati South"
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
    "University of Bangui",
    "National University of Central African Republic",
    "Bangui Technical Institute"
  ]
}
</script>
