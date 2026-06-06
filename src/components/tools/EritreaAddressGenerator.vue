<template>
  <CountryAddressGenerator tool-id="eritrea-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import EritreaAddressGeneratorArticle from './EritreaAddressGeneratorArticle.vue'

const articleComponent = EritreaAddressGeneratorArticle

const countryConfig = {
  "slug": "eritrea-address-generator",
  "display": "Eritrea",
  "phoneCode": "291",
  "timezone": "Africa/Asmara",
  "currency": "ERN",
  "locale": "ti-ER",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Asmara Region",
      "districts": [
        "Asmara",
        "Asmara Central",
        "Asmara West"
      ]
    },
    {
      "code": "NOR",
      "name": "Keren Region",
      "districts": [
        "Keren",
        "Keren Central",
        "Keren East"
      ]
    },
    {
      "code": "SOU",
      "name": "Massawa Region",
      "districts": [
        "Massawa",
        "Massawa Central",
        "Massawa South"
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
    "Eritrea Institute of Technology",
    "National University of Eritrea",
    "Asmara Technical Institute"
  ]
}
</script>
