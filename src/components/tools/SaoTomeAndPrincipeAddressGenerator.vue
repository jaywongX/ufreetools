<template>
  <CountryAddressGenerator tool-id="sao-tome-and-principe-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SaoTomeAndPrincipeAddressGeneratorArticle from './SaoTomeAndPrincipeAddressGeneratorArticle.vue'

const articleComponent = SaoTomeAndPrincipeAddressGeneratorArticle

const countryConfig = {
  "slug": "sao-tome-and-principe-address-generator",
  "display": "Sao Tome and Principe",
  "phoneCode": "239",
  "timezone": "Africa/Sao_Tome",
  "currency": "STN",
  "locale": "pt-ST",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Sao Tome Region",
      "districts": [
        "Sao Tome",
        "Sao Tome Central",
        "Sao Tome West"
      ]
    },
    {
      "code": "NOR",
      "name": "Santo Antonio Region",
      "districts": [
        "Santo Antonio",
        "Santo Antonio Central",
        "Santo Antonio East"
      ]
    },
    {
      "code": "SOU",
      "name": "Trindade Region",
      "districts": [
        "Trindade",
        "Trindade Central",
        "Trindade South"
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
    "University of Sao Tome and Principe",
    "National University of Sao Tome and Principe",
    "Sao Tome Technical Institute"
  ]
}
</script>
