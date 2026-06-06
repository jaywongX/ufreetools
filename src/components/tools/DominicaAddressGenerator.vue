<template>
  <CountryAddressGenerator tool-id="dominica-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import DominicaAddressGeneratorArticle from './DominicaAddressGeneratorArticle.vue'

const articleComponent = DominicaAddressGeneratorArticle

const countryConfig = {
  "slug": "dominica-address-generator",
  "display": "Dominica",
  "phoneCode": "1-767",
  "timezone": "America/Dominica",
  "currency": "XCD",
  "locale": "en-DM",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "SG",
      "name": "Saint George",
      "districts": [
        "Roseau",
        "Goodwill",
        "Fond Cole"
      ]
    },
    {
      "code": "PA",
      "name": "Saint Paul",
      "districts": [
        "Canefield",
        "Mahaut",
        "Massacre"
      ]
    },
    {
      "code": "JO",
      "name": "Saint John",
      "districts": [
        "Portsmouth",
        "Picard",
        "Capuchin"
      ]
    }
  ],
  "streets": [
    "Great George Street",
    "King George V Street",
    "Victoria Street",
    "Independence Street",
    "Bath Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Kelvin Joseph",
    "Monique Williams",
    "Darren Thomas",
    "Alicia Charles",
    "Shane Bertrand"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Dominica State College",
    "University of the West Indies Open Campus",
    "All Saints University School of Medicine"
  ]
}
</script>
