<template>
  <CountryAddressGenerator tool-id="dominican-republic-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import DominicanRepublicAddressGeneratorArticle from './DominicanRepublicAddressGeneratorArticle.vue'

const articleComponent = DominicanRepublicAddressGeneratorArticle

const countryConfig = {
  "slug": "dominican-republic-address-generator",
  "display": "Dominican Republic",
  "phoneCode": "1-809",
  "timezone": "America/Santo_Domingo",
  "currency": "DOP",
  "locale": "es-DO",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "DN",
      "name": "Distrito Nacional",
      "districts": [
        "Santo Domingo",
        "Gazcue",
        "Piantini"
      ]
    },
    {
      "code": "STI",
      "name": "Santiago",
      "districts": [
        "Santiago de los Caballeros",
        "Tamboril",
        "Licey"
      ]
    },
    {
      "code": "AL",
      "name": "La Altagracia",
      "districts": [
        "Higuey",
        "Punta Cana",
        "Bavaro"
      ]
    }
  ],
  "streets": [
    "Avenida 27 de Febrero",
    "Avenida Winston Churchill",
    "Calle El Conde",
    "Avenida Abraham Lincoln",
    "Avenida Sarasota"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Luis Rodriguez",
    "Camila Mendez",
    "Jose Martinez",
    "Gabriela Pena",
    "Carlos Medina"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Autonomous University of Santo Domingo",
    "Pontificia Universidad Catolica Madre y Maestra",
    "INTEC"
  ]
}
</script>
