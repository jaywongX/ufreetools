<template>
  <CountryAddressGenerator tool-id="chile-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ChileAddressGeneratorArticle from './ChileAddressGeneratorArticle.vue'

const articleComponent = ChileAddressGeneratorArticle

const countryConfig = {
  "slug": "chile-address-generator",
  "display": "Chile",
  "phoneCode": "56",
  "timezone": "America/Santiago",
  "currency": "CLP",
  "locale": "es-CL",
  "postalPattern": "#######",
  "regions": [
    {
      "code": "RM",
      "name": "Santiago Metropolitan",
      "districts": [
        "Santiago",
        "Providencia",
        "Las Condes"
      ]
    },
    {
      "code": "VAL",
      "name": "Valparaiso",
      "districts": [
        "Valparaiso",
        "Vina del Mar",
        "Quilpue"
      ]
    },
    {
      "code": "BIO",
      "name": "Biobio",
      "districts": [
        "Concepcion",
        "Talcahuano",
        "Los Angeles"
      ]
    }
  ],
  "streets": [
    "Avenida Providencia",
    "Alameda",
    "Avenida Apoquindo",
    "Calle Valparaiso",
    "Avenida Libertad"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Benjamin Gonzalez",
    "Isidora Morales",
    "Matias Rojas",
    "Catalina Silva",
    "Diego Fuentes"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Chile",
    "Pontifical Catholic University of Chile",
    "University of Concepcion"
  ]
}
</script>
