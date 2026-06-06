<template>
  <CountryAddressGenerator tool-id="nepal-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NepalAddressGeneratorArticle from './NepalAddressGeneratorArticle.vue'

const articleComponent = NepalAddressGeneratorArticle

const countryConfig = {
  "slug": "nepal-address-generator",
  "display": "Nepal",
  "phoneCode": "977",
  "timezone": "Asia/Kathmandu",
  "currency": "NPR",
  "locale": "ne-NP",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "BAG",
      "name": "Bagmati Province",
      "districts": [
        "Kathmandu",
        "Lalitpur",
        "Bhaktapur"
      ]
    },
    {
      "code": "GAN",
      "name": "Gandaki Province",
      "districts": [
        "Pokhara",
        "Gorkha",
        "Baglung"
      ]
    },
    {
      "code": "LUM",
      "name": "Lumbini Province",
      "districts": [
        "Butwal",
        "Bhairahawa",
        "Nepalgunj"
      ]
    }
  ],
  "streets": [
    "Ring Road",
    "Durbar Marg",
    "New Road",
    "Lazimpat Road",
    "Prithvi Highway"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ramesh Sharma",
    "Sita Karki",
    "Bikash Thapa",
    "Anita Gurung",
    "Prakash Adhikari"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Tribhuvan University",
    "Kathmandu University",
    "Pokhara University"
  ]
}
</script>
