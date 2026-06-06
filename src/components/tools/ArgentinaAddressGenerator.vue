<template>
  <CountryAddressGenerator tool-id="argentina-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ArgentinaAddressGeneratorArticle from './ArgentinaAddressGeneratorArticle.vue'

const articleComponent = ArgentinaAddressGeneratorArticle

const countryConfig = {
  "slug": "argentina-address-generator",
  "display": "Argentina",
  "phoneCode": "54",
  "timezone": "America/Argentina/Buenos_Aires",
  "currency": "ARS",
  "locale": "es-AR",
  "postalPattern": "A####AAA",
  "regions": [
    {
      "code": "CABA",
      "name": "Buenos Aires City",
      "districts": [
        "Palermo",
        "Recoleta",
        "San Telmo"
      ]
    },
    {
      "code": "BA",
      "name": "Buenos Aires Province",
      "districts": [
        "La Plata",
        "Mar del Plata",
        "Bahia Blanca"
      ]
    },
    {
      "code": "COR",
      "name": "Cordoba Province",
      "districts": [
        "Cordoba",
        "Villa Maria",
        "Rio Cuarto"
      ]
    }
  ],
  "streets": [
    "Avenida Corrientes",
    "Avenida Santa Fe",
    "Calle Florida",
    "Avenida Belgrano",
    "Avenida Colon"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Mateo Garcia",
    "Sofia Fernandez",
    "Lucas Rodriguez",
    "Valentina Lopez",
    "Nicolas Martinez"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Buenos Aires",
    "National University of Cordoba",
    "National University of La Plata"
  ]
}
</script>
