<template>
  <CountryAddressGenerator tool-id="mauritius-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MauritiusAddressGeneratorArticle from './MauritiusAddressGeneratorArticle.vue'

const articleComponent = MauritiusAddressGeneratorArticle

const countryConfig = {
  "slug": "mauritius-address-generator",
  "display": "Mauritius",
  "phoneCode": "230",
  "timezone": "Indian/Mauritius",
  "currency": "MUR",
  "locale": "en-MU",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Port Louis Region",
      "districts": [
        "Port Louis",
        "Port Louis Central",
        "Port Louis West"
      ]
    },
    {
      "code": "NOR",
      "name": "Curepipe Region",
      "districts": [
        "Curepipe",
        "Curepipe Central",
        "Curepipe East"
      ]
    },
    {
      "code": "SOU",
      "name": "Quatre Bornes Region",
      "districts": [
        "Quatre Bornes",
        "Quatre Bornes Central",
        "Quatre Bornes South"
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
    "University of Mauritius",
    "National University of Mauritius",
    "Port Louis Technical Institute"
  ]
}
</script>
