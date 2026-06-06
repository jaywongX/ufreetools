<template>
  <CountryAddressGenerator tool-id="guyana-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GuyanaAddressGeneratorArticle from './GuyanaAddressGeneratorArticle.vue'

const articleComponent = GuyanaAddressGeneratorArticle

const countryConfig = {
  "slug": "guyana-address-generator",
  "display": "Guyana",
  "phoneCode": "592",
  "timezone": "America/Guyana",
  "currency": "GYD",
  "locale": "en-GY",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "DE",
      "name": "Demerara-Mahaica",
      "districts": [
        "Georgetown",
        "East Coast Demerara",
        "Diamond"
      ]
    },
    {
      "code": "EB",
      "name": "East Berbice-Corentyne",
      "districts": [
        "New Amsterdam",
        "Corriverton",
        "Rose Hall"
      ]
    },
    {
      "code": "ES",
      "name": "Essequibo Islands-West Demerara",
      "districts": [
        "Vreed en Hoop",
        "Parika",
        "Leonora"
      ]
    }
  ],
  "streets": [
    "Regent Street",
    "Robb Street",
    "Camp Street",
    "Water Street",
    "Vlissengen Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ravi Singh",
    "Anika Persaud",
    "Michael Williams",
    "Shivani Ram",
    "Trevor Adams"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Guyana",
    "Texila American University",
    "Guyana School of Agriculture"
  ]
}
</script>
