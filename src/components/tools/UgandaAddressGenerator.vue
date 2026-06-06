<template>
  <CountryAddressGenerator tool-id="uganda-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import UgandaAddressGeneratorArticle from './UgandaAddressGeneratorArticle.vue'

const articleComponent = UgandaAddressGeneratorArticle

const countryConfig = {
  "slug": "uganda-address-generator",
  "display": "Uganda",
  "phoneCode": "256",
  "timezone": "Africa/Kampala",
  "currency": "UGX",
  "locale": "en-UG",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Kampala Region",
      "districts": [
        "Kampala",
        "Kampala Central",
        "Kampala West"
      ]
    },
    {
      "code": "NOR",
      "name": "Entebbe Region",
      "districts": [
        "Entebbe",
        "Entebbe Central",
        "Entebbe East"
      ]
    },
    {
      "code": "SOU",
      "name": "Gulu Region",
      "districts": [
        "Gulu",
        "Gulu Central",
        "Gulu South"
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
    "Makerere University",
    "National University of Uganda",
    "Kampala Technical Institute"
  ]
}
</script>
