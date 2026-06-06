<template>
  <CountryAddressGenerator tool-id="honduras-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import HondurasAddressGeneratorArticle from './HondurasAddressGeneratorArticle.vue'

const articleComponent = HondurasAddressGeneratorArticle

const countryConfig = {
  "slug": "honduras-address-generator",
  "display": "Honduras",
  "phoneCode": "504",
  "timezone": "America/Tegucigalpa",
  "currency": "HNL",
  "locale": "es-HN",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "FM",
      "name": "Francisco Morazan",
      "districts": [
        "Tegucigalpa",
        "Comayaguela",
        "Valle de Angeles"
      ]
    },
    {
      "code": "CR",
      "name": "Cortes",
      "districts": [
        "San Pedro Sula",
        "Choloma",
        "Puerto Cortes"
      ]
    },
    {
      "code": "AT",
      "name": "Atlantida",
      "districts": [
        "La Ceiba",
        "Tela",
        "Jutiapa"
      ]
    }
  ],
  "streets": [
    "Boulevard Morazan",
    "Avenida Juan Pablo II",
    "Paseo Los Proceres",
    "Boulevard Suyapa",
    "Avenida Circunvalacion"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Oscar Rivera",
    "Sofia Aguilar",
    "Daniel Mejia",
    "Paola Cruz",
    "Kevin Zelaya"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National Autonomous University of Honduras",
    "Central American Technological University",
    "Catholic University of Honduras"
  ]
}
</script>
