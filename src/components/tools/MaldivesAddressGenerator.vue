<template>
  <CountryAddressGenerator tool-id="maldives-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MaldivesAddressGeneratorArticle from './MaldivesAddressGeneratorArticle.vue'

const articleComponent = MaldivesAddressGeneratorArticle

const countryConfig = {
  "slug": "maldives-address-generator",
  "display": "Maldives",
  "phoneCode": "960",
  "timezone": "Indian/Maldives",
  "currency": "MVR",
  "locale": "dv-MV",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "MLE",
      "name": "Malé City",
      "districts": [
        "Malé",
        "Hulhumalé",
        "Villingili"
      ]
    },
    {
      "code": "ADU",
      "name": "Addu City",
      "districts": [
        "Hithadhoo",
        "Maradhoo",
        "Feydhoo"
      ]
    },
    {
      "code": "BAA",
      "name": "Baa Atoll",
      "districts": [
        "Eydhafushi",
        "Dharavandhoo",
        "Thulhaadhoo"
      ]
    }
  ],
  "streets": [
    "Majeedhee Magu",
    "Ameenee Magu",
    "Orchid Magu",
    "Boduthakurufaanu Magu",
    "Chaandhanee Magu"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ahmed Rasheed",
    "Aishath Naseem",
    "Mohamed Shareef",
    "Fathimath Zahir",
    "Hassan Waheed"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Maldives National University",
    "Villa College",
    "Islamic University of Maldives"
  ]
}
</script>
