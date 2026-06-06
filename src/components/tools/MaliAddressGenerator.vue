<template>
  <CountryAddressGenerator tool-id="mali-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MaliAddressGeneratorArticle from './MaliAddressGeneratorArticle.vue'

const articleComponent = MaliAddressGeneratorArticle

const countryConfig = {
  "slug": "mali-address-generator",
  "display": "Mali",
  "phoneCode": "223",
  "timezone": "Africa/Bamako",
  "currency": "XOF",
  "locale": "fr-ML",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Bamako Region",
      "districts": [
        "Bamako",
        "Bamako Central",
        "Bamako West"
      ]
    },
    {
      "code": "NOR",
      "name": "Sikasso Region",
      "districts": [
        "Sikasso",
        "Sikasso Central",
        "Sikasso East"
      ]
    },
    {
      "code": "SOU",
      "name": "Mopti Region",
      "districts": [
        "Mopti",
        "Mopti Central",
        "Mopti South"
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
    "University of Bamako",
    "National University of Mali",
    "Bamako Technical Institute"
  ]
}
</script>
