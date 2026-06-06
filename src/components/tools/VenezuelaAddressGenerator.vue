<template>
  <CountryAddressGenerator tool-id="venezuela-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import VenezuelaAddressGeneratorArticle from './VenezuelaAddressGeneratorArticle.vue'

const articleComponent = VenezuelaAddressGeneratorArticle

const countryConfig = {
  "slug": "venezuela-address-generator",
  "display": "Venezuela",
  "phoneCode": "58",
  "timezone": "America/Caracas",
  "currency": "VES",
  "locale": "es-VE",
  "postalPattern": "####",
  "regions": [
    {
      "code": "DC",
      "name": "Capital District",
      "districts": [
        "Caracas",
        "El Recreo",
        "Chacao"
      ]
    },
    {
      "code": "ZUL",
      "name": "Zulia",
      "districts": [
        "Maracaibo",
        "Cabimas",
        "Ciudad Ojeda"
      ]
    },
    {
      "code": "CAR",
      "name": "Carabobo",
      "districts": [
        "Valencia",
        "Puerto Cabello",
        "Naguanagua"
      ]
    }
  ],
  "streets": [
    "Avenida Francisco de Miranda",
    "Avenida Libertador",
    "Calle Real",
    "Avenida Bolivar",
    "Avenida Universidad"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Jose Hernandez",
    "Valentina Perez",
    "Carlos Mendoza",
    "Gabriela Rojas",
    "Andres Castillo"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Central University of Venezuela",
    "University of Zulia",
    "Simon Bolivar University"
  ]
}
</script>
