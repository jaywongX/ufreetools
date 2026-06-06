<template>
  <CountryAddressGenerator tool-id="peru-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import PeruAddressGeneratorArticle from './PeruAddressGeneratorArticle.vue'

const articleComponent = PeruAddressGeneratorArticle

const countryConfig = {
  "slug": "peru-address-generator",
  "display": "Peru",
  "phoneCode": "51",
  "timezone": "America/Lima",
  "currency": "PEN",
  "locale": "es-PE",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "LIM",
      "name": "Lima",
      "districts": [
        "Lima",
        "Miraflores",
        "San Isidro"
      ]
    },
    {
      "code": "ARE",
      "name": "Arequipa",
      "districts": [
        "Arequipa",
        "Cayma",
        "Yanahuara"
      ]
    },
    {
      "code": "CUS",
      "name": "Cusco",
      "districts": [
        "Cusco",
        "San Sebastian",
        "Wanchaq"
      ]
    }
  ],
  "streets": [
    "Avenida Arequipa",
    "Avenida Javier Prado",
    "Jiron de la Union",
    "Avenida Larco",
    "Avenida Benavides"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Rodrigo Chavez",
    "Luciana Vargas",
    "Diego Flores",
    "Valeria Castillo",
    "Jorge Huaman"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National University of San Marcos",
    "Pontifical Catholic University of Peru",
    "National University of Engineering"
  ]
}
</script>
