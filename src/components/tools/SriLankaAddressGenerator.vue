<template>
  <CountryAddressGenerator tool-id="sri-lanka-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SriLankaAddressGeneratorArticle from './SriLankaAddressGeneratorArticle.vue'

const articleComponent = SriLankaAddressGeneratorArticle

const countryConfig = {
  "slug": "sri-lanka-address-generator",
  "display": "Sri Lanka",
  "phoneCode": "94",
  "timezone": "Asia/Colombo",
  "currency": "LKR",
  "locale": "si-LK",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "WP",
      "name": "Western Province",
      "districts": [
        "Colombo",
        "Dehiwala-Mount Lavinia",
        "Negombo"
      ]
    },
    {
      "code": "CP",
      "name": "Central Province",
      "districts": [
        "Kandy",
        "Nuwara Eliya",
        "Matale"
      ]
    },
    {
      "code": "SP",
      "name": "Southern Province",
      "districts": [
        "Galle",
        "Matara",
        "Hambantota"
      ]
    }
  ],
  "streets": [
    "Galle Road",
    "Duplication Road",
    "Bauddhaloka Mawatha",
    "Kandy Road",
    "Marine Drive"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Kasun Perera",
    "Nimali Silva",
    "Dinesh Fernando",
    "Ayesha Jayasinghe",
    "Ruwan Bandara"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Colombo",
    "University of Peradeniya",
    "University of Moratuwa"
  ]
}
</script>
