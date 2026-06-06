<template>
  <CountryAddressGenerator tool-id="sudan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SudanAddressGeneratorArticle from './SudanAddressGeneratorArticle.vue'

const articleComponent = SudanAddressGeneratorArticle

const countryConfig = {
  "slug": "sudan-address-generator",
  "display": "Sudan",
  "phoneCode": "249",
  "timezone": "Africa/Khartoum",
  "currency": "SDG",
  "locale": "ar-SD",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Khartoum Region",
      "districts": [
        "Khartoum",
        "Khartoum Central",
        "Khartoum West"
      ]
    },
    {
      "code": "NOR",
      "name": "Omdurman Region",
      "districts": [
        "Omdurman",
        "Omdurman Central",
        "Omdurman East"
      ]
    },
    {
      "code": "SOU",
      "name": "Port Sudan Region",
      "districts": [
        "Port Sudan",
        "Port Sudan Central",
        "Port Sudan South"
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
    "University of Khartoum",
    "National University of Sudan",
    "Khartoum Technical Institute"
  ]
}
</script>
