<template>
  <CountryAddressGenerator tool-id="niger-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NigerAddressGeneratorArticle from './NigerAddressGeneratorArticle.vue'

const articleComponent = NigerAddressGeneratorArticle

const countryConfig = {
  "slug": "niger-address-generator",
  "display": "Niger",
  "phoneCode": "227",
  "timezone": "Africa/Niamey",
  "currency": "XOF",
  "locale": "fr-NE",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Niamey Region",
      "districts": [
        "Niamey",
        "Niamey Central",
        "Niamey West"
      ]
    },
    {
      "code": "NOR",
      "name": "Zinder Region",
      "districts": [
        "Zinder",
        "Zinder Central",
        "Zinder East"
      ]
    },
    {
      "code": "SOU",
      "name": "Maradi Region",
      "districts": [
        "Maradi",
        "Maradi Central",
        "Maradi South"
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
    "Abdou Moumouni University",
    "National University of Niger",
    "Niamey Technical Institute"
  ]
}
</script>
