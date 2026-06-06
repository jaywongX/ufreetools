<template>
  <CountryAddressGenerator tool-id="senegal-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SenegalAddressGeneratorArticle from './SenegalAddressGeneratorArticle.vue'

const articleComponent = SenegalAddressGeneratorArticle

const countryConfig = {
  "slug": "senegal-address-generator",
  "display": "Senegal",
  "phoneCode": "221",
  "timezone": "Africa/Dakar",
  "currency": "XOF",
  "locale": "fr-SN",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Dakar Region",
      "districts": [
        "Dakar",
        "Dakar Central",
        "Dakar West"
      ]
    },
    {
      "code": "NOR",
      "name": "Thies Region",
      "districts": [
        "Thies",
        "Thies Central",
        "Thies East"
      ]
    },
    {
      "code": "SOU",
      "name": "Saint-Louis Region",
      "districts": [
        "Saint-Louis",
        "Saint-Louis Central",
        "Saint-Louis South"
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
    "Cheikh Anta Diop University",
    "National University of Senegal",
    "Dakar Technical Institute"
  ]
}
</script>
