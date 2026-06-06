<template>
  <CountryAddressGenerator tool-id="kenya-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import KenyaAddressGeneratorArticle from './KenyaAddressGeneratorArticle.vue'

const articleComponent = KenyaAddressGeneratorArticle

const countryConfig = {
  "slug": "kenya-address-generator",
  "display": "Kenya",
  "phoneCode": "254",
  "timezone": "Africa/Nairobi",
  "currency": "KES",
  "locale": "en-KE",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Nairobi Region",
      "districts": [
        "Nairobi",
        "Nairobi Central",
        "Nairobi West"
      ]
    },
    {
      "code": "NOR",
      "name": "Mombasa Region",
      "districts": [
        "Mombasa",
        "Mombasa Central",
        "Mombasa East"
      ]
    },
    {
      "code": "SOU",
      "name": "Kisumu Region",
      "districts": [
        "Kisumu",
        "Kisumu Central",
        "Kisumu South"
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
    "University of Nairobi",
    "National University of Kenya",
    "Nairobi Technical Institute"
  ]
}
</script>
