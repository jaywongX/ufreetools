<template>
  <CountryAddressGenerator tool-id="seychelles-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SeychellesAddressGeneratorArticle from './SeychellesAddressGeneratorArticle.vue'

const articleComponent = SeychellesAddressGeneratorArticle

const countryConfig = {
  "slug": "seychelles-address-generator",
  "display": "Seychelles",
  "phoneCode": "248",
  "timezone": "Indian/Mahe",
  "currency": "SCR",
  "locale": "en-SC",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Victoria Region",
      "districts": [
        "Victoria",
        "Victoria Central",
        "Victoria West"
      ]
    },
    {
      "code": "NOR",
      "name": "Anse Boileau Region",
      "districts": [
        "Anse Boileau",
        "Anse Boileau Central",
        "Anse Boileau East"
      ]
    },
    {
      "code": "SOU",
      "name": "Beau Vallon Region",
      "districts": [
        "Beau Vallon",
        "Beau Vallon Central",
        "Beau Vallon South"
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
    "University of Seychelles",
    "National University of Seychelles",
    "Victoria Technical Institute"
  ]
}
</script>
