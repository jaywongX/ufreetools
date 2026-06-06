<template>
  <CountryAddressGenerator tool-id="paraguay-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import ParaguayAddressGeneratorArticle from './ParaguayAddressGeneratorArticle.vue'

const articleComponent = ParaguayAddressGeneratorArticle

const countryConfig = {
  "slug": "paraguay-address-generator",
  "display": "Paraguay",
  "phoneCode": "595",
  "timezone": "America/Asuncion",
  "currency": "PYG",
  "locale": "es-PY",
  "postalPattern": "####",
  "regions": [
    {
      "code": "ASU",
      "name": "Asuncion",
      "districts": [
        "Asuncion",
        "Recoleta",
        "Sajonia"
      ]
    },
    {
      "code": "CEN",
      "name": "Central",
      "districts": [
        "San Lorenzo",
        "Luque",
        "Fernando de la Mora"
      ]
    },
    {
      "code": "ITA",
      "name": "Itapua",
      "districts": [
        "Encarnacion",
        "Hohenau",
        "Obligado"
      ]
    }
  ],
  "streets": [
    "Avenida Mariscal Lopez",
    "Avenida Espana",
    "Calle Palma",
    "Avenida Eusebio Ayala",
    "Avenida Artigas"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Gustavo Benitez",
    "Mariela Gonzalez",
    "Federico Duarte",
    "Laura Acosta",
    "Sergio Rojas"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National University of Asuncion",
    "Catholic University of Asuncion",
    "American University Paraguay"
  ]
}
</script>
