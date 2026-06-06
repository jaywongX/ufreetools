<template>
  <CountryAddressGenerator tool-id="belize-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BelizeAddressGeneratorArticle from './BelizeAddressGeneratorArticle.vue'

const articleComponent = BelizeAddressGeneratorArticle

const countryConfig = {
  "slug": "belize-address-generator",
  "display": "Belize",
  "phoneCode": "501",
  "timezone": "America/Belize",
  "currency": "BZD",
  "locale": "en-BZ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "BZ",
      "name": "Belize District",
      "districts": [
        "Belize City",
        "Ladyville",
        "San Pedro"
      ]
    },
    {
      "code": "CY",
      "name": "Cayo District",
      "districts": [
        "San Ignacio",
        "Belmopan",
        "Benque Viejo"
      ]
    },
    {
      "code": "SC",
      "name": "Stann Creek District",
      "districts": [
        "Dangriga",
        "Placencia",
        "Independence"
      ]
    }
  ],
  "streets": [
    "Albert Street",
    "Queen Street",
    "Freetown Road",
    "Princess Margaret Drive",
    "Coney Drive"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Carlos Martinez",
    "Alicia Young",
    "Devon Castillo",
    "Marisol Reyes",
    "Trevor Palacio"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Belize",
    "Galen University",
    "Belize Adventist College"
  ]
}
</script>
