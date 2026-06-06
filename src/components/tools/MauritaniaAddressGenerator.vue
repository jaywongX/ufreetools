<template>
  <CountryAddressGenerator tool-id="mauritania-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MauritaniaAddressGeneratorArticle from './MauritaniaAddressGeneratorArticle.vue'

const articleComponent = MauritaniaAddressGeneratorArticle

const countryConfig = {
  "slug": "mauritania-address-generator",
  "display": "Mauritania",
  "phoneCode": "222",
  "timezone": "Africa/Nouakchott",
  "currency": "MRU",
  "locale": "ar-MR",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Nouakchott Region",
      "districts": [
        "Nouakchott",
        "Nouakchott Central",
        "Nouakchott West"
      ]
    },
    {
      "code": "NOR",
      "name": "Nouadhibou Region",
      "districts": [
        "Nouadhibou",
        "Nouadhibou Central",
        "Nouadhibou East"
      ]
    },
    {
      "code": "SOU",
      "name": "Kiffa Region",
      "districts": [
        "Kiffa",
        "Kiffa Central",
        "Kiffa South"
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
    "University of Nouakchott Al Aasriya",
    "National University of Mauritania",
    "Nouakchott Technical Institute"
  ]
}
</script>
