<template>
  <CountryAddressGenerator tool-id="el-salvador-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ElSalvadorAddressGeneratorArticle from './ElSalvadorAddressGeneratorArticle.vue'

const articleComponent = ElSalvadorAddressGeneratorArticle

const countryConfig = {
  "slug": "el-salvador-address-generator",
  "display": "El Salvador",
  "phoneCode": "503",
  "timezone": "America/El_Salvador",
  "currency": "USD",
  "locale": "es-SV",
  "postalPattern": "####",
  "regions": [
    {
      "code": "SS",
      "name": "San Salvador",
      "districts": [
        "San Salvador",
        "Soyapango",
        "Mejicanos"
      ]
    },
    {
      "code": "LI",
      "name": "La Libertad",
      "districts": [
        "Santa Tecla",
        "Antiguo Cuscatlan",
        "Colon"
      ]
    },
    {
      "code": "SA",
      "name": "Santa Ana",
      "districts": [
        "Santa Ana",
        "Chalchuapa",
        "Metapan"
      ]
    }
  ],
  "streets": [
    "Alameda Roosevelt",
    "Paseo General Escalon",
    "Boulevard de los Heroes",
    "Avenida Masferrer",
    "Calle Arce"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Diego Hernandez",
    "Gabriela Mejia",
    "Carlos Lopez",
    "Andrea Flores",
    "Roberto Alfaro"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of El Salvador",
    "Central American University Jose Simeon Canas",
    "Don Bosco University"
  ]
}
</script>
