<template>
  <CountryAddressGenerator tool-id="ecuador-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import EcuadorAddressGeneratorArticle from './EcuadorAddressGeneratorArticle.vue'

const articleComponent = EcuadorAddressGeneratorArticle

const countryConfig = {
  "slug": "ecuador-address-generator",
  "display": "Ecuador",
  "phoneCode": "593",
  "timezone": "America/Guayaquil",
  "currency": "USD",
  "locale": "es-EC",
  "postalPattern": "######",
  "regions": [
    {
      "code": "PIC",
      "name": "Pichincha",
      "districts": [
        "Quito",
        "Cumbaya",
        "Sangolqui"
      ]
    },
    {
      "code": "GUA",
      "name": "Guayas",
      "districts": [
        "Guayaquil",
        "Duran",
        "Samborondon"
      ]
    },
    {
      "code": "AZU",
      "name": "Azuay",
      "districts": [
        "Cuenca",
        "Gualaceo",
        "Paute"
      ]
    }
  ],
  "streets": [
    "Avenida Amazonas",
    "Avenida Naciones Unidas",
    "Malecon Simon Bolivar",
    "Avenida 9 de Octubre",
    "Calle Larga"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Sebastian Torres",
    "Daniela Vera",
    "Mateo Paredes",
    "Valentina Cevallos",
    "Andres Zambrano"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Central University of Ecuador",
    "ESPOL",
    "University of Cuenca"
  ]
}
</script>
