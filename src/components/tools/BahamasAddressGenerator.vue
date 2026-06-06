<template>
  <CountryAddressGenerator tool-id="bahamas-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BahamasAddressGeneratorArticle from './BahamasAddressGeneratorArticle.vue'

const articleComponent = BahamasAddressGeneratorArticle

const countryConfig = {
  "slug": "bahamas-address-generator",
  "display": "Bahamas",
  "phoneCode": "1-242",
  "timezone": "America/Nassau",
  "currency": "BSD",
  "locale": "en-BS",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "NP",
      "name": "New Providence",
      "districts": [
        "Nassau",
        "Cable Beach",
        "South Beach"
      ]
    },
    {
      "code": "GB",
      "name": "Grand Bahama",
      "districts": [
        "Freeport",
        "Lucaya",
        "West End"
      ]
    },
    {
      "code": "AB",
      "name": "Abaco",
      "districts": [
        "Marsh Harbour",
        "Treasure Cay",
        "Hope Town"
      ]
    }
  ],
  "streets": [
    "Bay Street",
    "Shirley Street",
    "East Street",
    "Mackey Street",
    "Queen Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Dwayne Rolle",
    "Tanesha Johnson",
    "Kareem Smith",
    "Shanice Forbes",
    "Andre Miller"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of The Bahamas",
    "Bahamas Technical and Vocational Institute",
    "Omega College"
  ]
}
</script>
