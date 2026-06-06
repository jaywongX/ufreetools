<template>
  <CountryAddressGenerator tool-id="nicaragua-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NicaraguaAddressGeneratorArticle from './NicaraguaAddressGeneratorArticle.vue'

const articleComponent = NicaraguaAddressGeneratorArticle

const countryConfig = {
  "slug": "nicaragua-address-generator",
  "display": "Nicaragua",
  "phoneCode": "505",
  "timezone": "America/Managua",
  "currency": "NIO",
  "locale": "es-NI",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "MN",
      "name": "Managua",
      "districts": [
        "Managua",
        "Ciudad Sandino",
        "Tipitapa"
      ]
    },
    {
      "code": "LE",
      "name": "Leon",
      "districts": [
        "Leon",
        "Nagarote",
        "La Paz Centro"
      ]
    },
    {
      "code": "GR",
      "name": "Granada",
      "districts": [
        "Granada",
        "Nandaime",
        "Diriomo"
      ]
    }
  ],
  "streets": [
    "Carretera Masaya",
    "Avenida Bolivar",
    "Pista Juan Pablo II",
    "Calle Atravesada",
    "Carretera Norte"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Jose Gutierrez",
    "Lucia Rivas",
    "Carlos Duarte",
    "Fernanda Molina",
    "Miguel Sandino"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National Autonomous University of Nicaragua",
    "Central American University",
    "National University of Engineering"
  ]
}
</script>
