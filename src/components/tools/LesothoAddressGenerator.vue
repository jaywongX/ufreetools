<template>
  <CountryAddressGenerator tool-id="lesotho-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LesothoAddressGeneratorArticle from './LesothoAddressGeneratorArticle.vue'

const articleComponent = LesothoAddressGeneratorArticle

const countryConfig = {
  "slug": "lesotho-address-generator",
  "display": "Lesotho",
  "phoneCode": "266",
  "timezone": "Africa/Maseru",
  "currency": "LSL",
  "locale": "en-LS",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Maseru Region",
      "districts": [
        "Maseru",
        "Maseru Central",
        "Maseru West"
      ]
    },
    {
      "code": "NOR",
      "name": "Teyateyaneng Region",
      "districts": [
        "Teyateyaneng",
        "Teyateyaneng Central",
        "Teyateyaneng East"
      ]
    },
    {
      "code": "SOU",
      "name": "Mafeteng Region",
      "districts": [
        "Mafeteng",
        "Mafeteng Central",
        "Mafeteng South"
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
    "National University of Lesotho",
    "National University of Lesotho",
    "Maseru Technical Institute"
  ]
}
</script>
