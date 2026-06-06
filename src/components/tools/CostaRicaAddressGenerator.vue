<template>
  <CountryAddressGenerator tool-id="costa-rica-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CostaRicaAddressGeneratorArticle from './CostaRicaAddressGeneratorArticle.vue'

const articleComponent = CostaRicaAddressGeneratorArticle

const countryConfig = {
  "slug": "costa-rica-address-generator",
  "display": "Costa Rica",
  "phoneCode": "506",
  "timezone": "America/Costa_Rica",
  "currency": "CRC",
  "locale": "es-CR",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "SJ",
      "name": "San Jose",
      "districts": [
        "San Jose",
        "Escazu",
        "Curridabat"
      ]
    },
    {
      "code": "AL",
      "name": "Alajuela",
      "districts": [
        "Alajuela",
        "San Ramon",
        "Grecia"
      ]
    },
    {
      "code": "HE",
      "name": "Heredia",
      "districts": [
        "Heredia",
        "Santo Domingo",
        "Belen"
      ]
    }
  ],
  "streets": [
    "Avenida Central",
    "Paseo Colon",
    "Calle 3",
    "Avenida Segunda",
    "Ruta 27"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Jose Vargas",
    "Mariana Solis",
    "Daniel Mora",
    "Sofia Castro",
    "Pablo Jimenez"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Costa Rica",
    "National University of Costa Rica",
    "Costa Rica Institute of Technology"
  ]
}
</script>
