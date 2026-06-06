<template>
  <CountryAddressGenerator tool-id="south-africa-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SouthAfricaAddressGeneratorArticle from './SouthAfricaAddressGeneratorArticle.vue'

const articleComponent = SouthAfricaAddressGeneratorArticle

const countryConfig = {
  "slug": "south-africa-address-generator",
  "display": "South Africa",
  "phoneCode": "27",
  "timezone": "Africa/Johannesburg",
  "currency": "ZAR",
  "locale": "en-ZA",
  "postalPattern": "####",
  "regions": [
    {
      "code": "CAP",
      "name": "Pretoria Region",
      "districts": [
        "Pretoria",
        "Pretoria Central",
        "Pretoria West"
      ]
    },
    {
      "code": "NOR",
      "name": "Cape Town Region",
      "districts": [
        "Cape Town",
        "Cape Town Central",
        "Cape Town East"
      ]
    },
    {
      "code": "SOU",
      "name": "Johannesburg Region",
      "districts": [
        "Johannesburg",
        "Johannesburg Central",
        "Johannesburg South"
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
    "University of Cape Town",
    "National University of South Africa",
    "Pretoria Technical Institute"
  ]
}
</script>
