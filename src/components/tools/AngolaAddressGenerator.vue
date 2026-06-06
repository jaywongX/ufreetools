<template>
  <CountryAddressGenerator tool-id="angola-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AngolaAddressGeneratorArticle from './AngolaAddressGeneratorArticle.vue'

const articleComponent = AngolaAddressGeneratorArticle

const countryConfig = {
  "slug": "angola-address-generator",
  "display": "Angola",
  "phoneCode": "244",
  "timezone": "Africa/Luanda",
  "currency": "AOA",
  "locale": "pt-AO",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Luanda Region",
      "districts": [
        "Luanda",
        "Luanda Central",
        "Luanda West"
      ]
    },
    {
      "code": "NOR",
      "name": "Huambo Region",
      "districts": [
        "Huambo",
        "Huambo Central",
        "Huambo East"
      ]
    },
    {
      "code": "SOU",
      "name": "Lobito Region",
      "districts": [
        "Lobito",
        "Lobito Central",
        "Lobito South"
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
    "Agostinho Neto University",
    "National University of Angola",
    "Luanda Technical Institute"
  ]
}
</script>
