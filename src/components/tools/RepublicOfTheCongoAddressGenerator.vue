<template>
  <CountryAddressGenerator tool-id="republic-of-the-congo-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import RepublicOfTheCongoAddressGeneratorArticle from './RepublicOfTheCongoAddressGeneratorArticle.vue'

const articleComponent = RepublicOfTheCongoAddressGeneratorArticle

const countryConfig = {
  "slug": "republic-of-the-congo-address-generator",
  "display": "Republic of the Congo",
  "phoneCode": "242",
  "timezone": "Africa/Brazzaville",
  "currency": "XAF",
  "locale": "fr-CG",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Brazzaville Region",
      "districts": [
        "Brazzaville",
        "Brazzaville Central",
        "Brazzaville West"
      ]
    },
    {
      "code": "NOR",
      "name": "Pointe-Noire Region",
      "districts": [
        "Pointe-Noire",
        "Pointe-Noire Central",
        "Pointe-Noire East"
      ]
    },
    {
      "code": "SOU",
      "name": "Dolisie Region",
      "districts": [
        "Dolisie",
        "Dolisie Central",
        "Dolisie South"
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
    "Marien Ngouabi University",
    "National University of Republic of the Congo",
    "Brazzaville Technical Institute"
  ]
}
</script>
