<template>
  <CountryAddressGenerator tool-id="guatemala-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GuatemalaAddressGeneratorArticle from './GuatemalaAddressGeneratorArticle.vue'

const articleComponent = GuatemalaAddressGeneratorArticle

const countryConfig = {
  "slug": "guatemala-address-generator",
  "display": "Guatemala",
  "phoneCode": "502",
  "timezone": "America/Guatemala",
  "currency": "GTQ",
  "locale": "es-GT",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "GU",
      "name": "Guatemala",
      "districts": [
        "Guatemala City",
        "Mixco",
        "Villa Nueva"
      ]
    },
    {
      "code": "SA",
      "name": "Sacatepequez",
      "districts": [
        "Antigua Guatemala",
        "Ciudad Vieja",
        "Jocotenango"
      ]
    },
    {
      "code": "QZ",
      "name": "Quetzaltenango",
      "districts": [
        "Quetzaltenango",
        "Salcaja",
        "Coatepeque"
      ]
    }
  ],
  "streets": [
    "Avenida Reforma",
    "Calzada Roosevelt",
    "Avenida Las Americas",
    "Calle Real",
    "Boulevard Liberacion"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Jorge Lopez",
    "Maria Castillo",
    "Luis Morales",
    "Ana Gomez",
    "Carlos Mendez"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of San Carlos of Guatemala",
    "Rafael Landivar University",
    "Francisco Marroquin University"
  ]
}
</script>
