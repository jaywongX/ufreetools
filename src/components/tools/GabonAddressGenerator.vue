<template>
  <CountryAddressGenerator tool-id="gabon-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GabonAddressGeneratorArticle from './GabonAddressGeneratorArticle.vue'

const articleComponent = GabonAddressGeneratorArticle

const countryConfig = {
  "slug": "gabon-address-generator",
  "display": "Gabon",
  "phoneCode": "241",
  "timezone": "Africa/Libreville",
  "currency": "XAF",
  "locale": "fr-GA",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Libreville Region",
      "districts": [
        "Libreville",
        "Libreville Central",
        "Libreville West"
      ]
    },
    {
      "code": "NOR",
      "name": "Port-Gentil Region",
      "districts": [
        "Port-Gentil",
        "Port-Gentil Central",
        "Port-Gentil East"
      ]
    },
    {
      "code": "SOU",
      "name": "Franceville Region",
      "districts": [
        "Franceville",
        "Franceville Central",
        "Franceville South"
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
    "Omar Bongo University",
    "National University of Gabon",
    "Libreville Technical Institute"
  ]
}
</script>
