<template>
  <CountryAddressGenerator tool-id="zambia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ZambiaAddressGeneratorArticle from './ZambiaAddressGeneratorArticle.vue'

const articleComponent = ZambiaAddressGeneratorArticle

const countryConfig = {
  "slug": "zambia-address-generator",
  "display": "Zambia",
  "phoneCode": "260",
  "timezone": "Africa/Lusaka",
  "currency": "ZMW",
  "locale": "en-ZM",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Lusaka Region",
      "districts": [
        "Lusaka",
        "Lusaka Central",
        "Lusaka West"
      ]
    },
    {
      "code": "NOR",
      "name": "Ndola Region",
      "districts": [
        "Ndola",
        "Ndola Central",
        "Ndola East"
      ]
    },
    {
      "code": "SOU",
      "name": "Kitwe Region",
      "districts": [
        "Kitwe",
        "Kitwe Central",
        "Kitwe South"
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
    "University of Zambia",
    "National University of Zambia",
    "Lusaka Technical Institute"
  ]
}
</script>
