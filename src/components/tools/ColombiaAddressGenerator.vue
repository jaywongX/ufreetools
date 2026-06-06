<template>
  <CountryAddressGenerator tool-id="colombia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ColombiaAddressGeneratorArticle from './ColombiaAddressGeneratorArticle.vue'

const articleComponent = ColombiaAddressGeneratorArticle

const countryConfig = {
  "slug": "colombia-address-generator",
  "display": "Colombia",
  "phoneCode": "57",
  "timezone": "America/Bogota",
  "currency": "COP",
  "locale": "es-CO",
  "postalPattern": "######",
  "regions": [
    {
      "code": "DC",
      "name": "Bogota",
      "districts": [
        "Chapinero",
        "Usaquen",
        "Teusaquillo"
      ]
    },
    {
      "code": "ANT",
      "name": "Antioquia",
      "districts": [
        "Medellin",
        "Envigado",
        "Bello"
      ]
    },
    {
      "code": "VAC",
      "name": "Valle del Cauca",
      "districts": [
        "Cali",
        "Palmira",
        "Buenaventura"
      ]
    }
  ],
  "streets": [
    "Carrera Septima",
    "Calle 100",
    "Avenida El Dorado",
    "Carrera 15",
    "Calle 72"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Santiago Gomez",
    "Valeria Torres",
    "Andres Ramirez",
    "Daniela Castro",
    "Juan Herrera"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National University of Colombia",
    "University of the Andes",
    "University of Antioquia"
  ]
}
</script>
