<template>
  <CountryAddressGenerator tool-id="madagascar-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MadagascarAddressGeneratorArticle from './MadagascarAddressGeneratorArticle.vue'

const articleComponent = MadagascarAddressGeneratorArticle

const countryConfig = {
  "slug": "madagascar-address-generator",
  "display": "Madagascar",
  "phoneCode": "261",
  "timezone": "Indian/Antananarivo",
  "currency": "MGA",
  "locale": "mg-MG",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Antananarivo Region",
      "districts": [
        "Antananarivo",
        "Antananarivo Central",
        "Antananarivo West"
      ]
    },
    {
      "code": "NOR",
      "name": "Toamasina Region",
      "districts": [
        "Toamasina",
        "Toamasina Central",
        "Toamasina East"
      ]
    },
    {
      "code": "SOU",
      "name": "Antsirabe Region",
      "districts": [
        "Antsirabe",
        "Antsirabe Central",
        "Antsirabe South"
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
    "University of Antananarivo",
    "National University of Madagascar",
    "Antananarivo Technical Institute"
  ]
}
</script>
