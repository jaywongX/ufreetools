<template>
  <CountryAddressGenerator tool-id="egypt-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import EgyptAddressGeneratorArticle from './EgyptAddressGeneratorArticle.vue'

const articleComponent = EgyptAddressGeneratorArticle

const countryConfig = {
  "slug": "egypt-address-generator",
  "display": "Egypt",
  "phoneCode": "20",
  "timezone": "Africa/Cairo",
  "currency": "EGP",
  "locale": "ar-EG",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Cairo Region",
      "districts": [
        "Cairo",
        "Cairo Central",
        "Cairo West"
      ]
    },
    {
      "code": "NOR",
      "name": "Alexandria Region",
      "districts": [
        "Alexandria",
        "Alexandria Central",
        "Alexandria East"
      ]
    },
    {
      "code": "SOU",
      "name": "Giza Region",
      "districts": [
        "Giza",
        "Giza Central",
        "Giza South"
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
    "Cairo University",
    "National University of Egypt",
    "Cairo Technical Institute"
  ]
}
</script>
