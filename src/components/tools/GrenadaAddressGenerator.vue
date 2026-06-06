<template>
  <CountryAddressGenerator tool-id="grenada-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GrenadaAddressGeneratorArticle from './GrenadaAddressGeneratorArticle.vue'

const articleComponent = GrenadaAddressGeneratorArticle

const countryConfig = {
  "slug": "grenada-address-generator",
  "display": "Grenada",
  "phoneCode": "1-473",
  "timezone": "America/Grenada",
  "currency": "XCD",
  "locale": "en-GD",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "SG",
      "name": "Saint George",
      "districts": [
        "St. George's",
        "Grand Anse",
        "Lance aux Epines"
      ]
    },
    {
      "code": "AD",
      "name": "Saint Andrew",
      "districts": [
        "Grenville",
        "Paradise",
        "Tivoli"
      ]
    },
    {
      "code": "DA",
      "name": "Saint David",
      "districts": [
        "St. David's",
        "Westerhall",
        "Belle Vue"
      ]
    }
  ],
  "streets": [
    "Young Street",
    "Carenage Road",
    "Melville Street",
    "Morne Rouge Road",
    "Maurice Bishop Highway"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Aaron Baptiste",
    "Keisha Lewis",
    "Joel Charles",
    "Natalie Mitchell",
    "Dwayne Noel"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "St. George's University",
    "T.A. Marryshow Community College",
    "University of the West Indies Open Campus"
  ]
}
</script>
