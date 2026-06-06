<template>
  <CountryAddressGenerator tool-id="burundi-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BurundiAddressGeneratorArticle from './BurundiAddressGeneratorArticle.vue'

const articleComponent = BurundiAddressGeneratorArticle

const countryConfig = {
  "slug": "burundi-address-generator",
  "display": "Burundi",
  "phoneCode": "257",
  "timezone": "Africa/Bujumbura",
  "currency": "BIF",
  "locale": "fr-BI",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Gitega Region",
      "districts": [
        "Gitega",
        "Gitega Central",
        "Gitega West"
      ]
    },
    {
      "code": "NOR",
      "name": "Bujumbura Region",
      "districts": [
        "Bujumbura",
        "Bujumbura Central",
        "Bujumbura East"
      ]
    },
    {
      "code": "SOU",
      "name": "Ngozi Region",
      "districts": [
        "Ngozi",
        "Ngozi Central",
        "Ngozi South"
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
    "University of Burundi",
    "National University of Burundi",
    "Gitega Technical Institute"
  ]
}
</script>
