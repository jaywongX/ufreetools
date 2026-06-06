<template>
  <CountryAddressGenerator tool-id="uruguay-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import UruguayAddressGeneratorArticle from './UruguayAddressGeneratorArticle.vue'

const articleComponent = UruguayAddressGeneratorArticle

const countryConfig = {
  "slug": "uruguay-address-generator",
  "display": "Uruguay",
  "phoneCode": "598",
  "timezone": "America/Montevideo",
  "currency": "UYU",
  "locale": "es-UY",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "MO",
      "name": "Montevideo",
      "districts": [
        "Montevideo",
        "Pocitos",
        "Ciudad Vieja"
      ]
    },
    {
      "code": "CA",
      "name": "Canelones",
      "districts": [
        "Canelones",
        "Las Piedras",
        "Ciudad de la Costa"
      ]
    },
    {
      "code": "MA",
      "name": "Maldonado",
      "districts": [
        "Maldonado",
        "Punta del Este",
        "Piriapolis"
      ]
    }
  ],
  "streets": [
    "Avenida 18 de Julio",
    "Bulevar Artigas",
    "Rambla Republica del Peru",
    "Avenida Italia",
    "Calle Sarandi"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Mateo Rodriguez",
    "Florencia Silva",
    "Santiago Pereira",
    "Camila Fernandez",
    "Nicolas Castro"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of the Republic",
    "ORT Uruguay University",
    "Catholic University of Uruguay"
  ]
}
</script>
