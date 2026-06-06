<template>
  <CountryAddressGenerator tool-id="bolivia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BoliviaAddressGeneratorArticle from './BoliviaAddressGeneratorArticle.vue'

const articleComponent = BoliviaAddressGeneratorArticle

const countryConfig = {
  "slug": "bolivia-address-generator",
  "display": "Bolivia",
  "phoneCode": "591",
  "timezone": "America/La_Paz",
  "currency": "BOB",
  "locale": "es-BO",
  "postalPattern": "####",
  "regions": [
    {
      "code": "LP",
      "name": "La Paz",
      "districts": [
        "La Paz",
        "El Alto",
        "Viacha"
      ]
    },
    {
      "code": "SC",
      "name": "Santa Cruz",
      "districts": [
        "Santa Cruz de la Sierra",
        "Montero",
        "Warnes"
      ]
    },
    {
      "code": "CB",
      "name": "Cochabamba",
      "districts": [
        "Cochabamba",
        "Quillacollo",
        "Sacaba"
      ]
    }
  ],
  "streets": [
    "Avenida Mariscal Santa Cruz",
    "Avenida 16 de Julio",
    "Calle Comercio",
    "Avenida Ballivian",
    "Avenida America"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Diego Mamani",
    "Camila Flores",
    "Jorge Quispe",
    "Lucia Vargas",
    "Andres Rojas"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Universidad Mayor de San Andres",
    "Universidad Mayor de San Simon",
    "Universidad Gabriel Rene Moreno"
  ]
}
</script>
