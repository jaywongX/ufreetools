<template>
  <CountryAddressGenerator tool-id="timor-leste-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TimorLesteAddressGeneratorArticle from './TimorLesteAddressGeneratorArticle.vue'

const articleComponent = TimorLesteAddressGeneratorArticle

const countryConfig = {
  "slug": "timor-leste-address-generator",
  "display": "Timor-Leste",
  "phoneCode": "670",
  "timezone": "Asia/Dili",
  "currency": "USD",
  "locale": "pt-TL",
  "postalPattern": "####",
  "regions": [
    {
      "code": "DI",
      "name": "Dili Municipality",
      "districts": [
        "Dili",
        "Cristo Rei",
        "Dom Aleixo"
      ]
    },
    {
      "code": "BA",
      "name": "Baucau Municipality",
      "districts": [
        "Baucau",
        "Venilale",
        "Quelicai"
      ]
    },
    {
      "code": "ER",
      "name": "Ermera Municipality",
      "districts": [
        "Gleno",
        "Atsabe",
        "Letefoho"
      ]
    }
  ],
  "streets": [
    "Avenida de Portugal",
    "Rua de Colmera",
    "Avenida Nicolau Lobato",
    "Rua Belarmino Lobo",
    "Estrada de Balide"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "João da Costa",
    "Maria Soares",
    "Domingos Pereira",
    "Ana Fernandes",
    "Mateus Guterres"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National University of Timor Lorosae",
    "Dili Institute of Technology",
    "Universidade da Paz"
  ]
}
</script>
