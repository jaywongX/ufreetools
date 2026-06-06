<template>
  <CountryAddressGenerator tool-id="luxembourg-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LuxembourgAddressGeneratorArticle from './LuxembourgAddressGeneratorArticle.vue'

const articleComponent = LuxembourgAddressGeneratorArticle

const countryConfig = {
  "slug": "luxembourg-address-generator",
  "display": "Luxembourg",
  "phoneCode": "352",
  "timezone": "Europe/Luxembourg",
  "currency": "€",
  "locale": "fr-LU",
  "postalPattern": "L-####",
  "regions": [
    {
      "code": "LU",
      "name": "Luxembourg Canton",
      "districts": [
        "Luxembourg City",
        "Hesperange",
        "Strassen"
      ]
    },
    {
      "code": "ES",
      "name": "Esch-sur-Alzette Canton",
      "districts": [
        "Esch-sur-Alzette",
        "Dudelange",
        "Differdange"
      ]
    },
    {
      "code": "CA",
      "name": "Capellen Canton",
      "districts": [
        "Mamer",
        "Kehlen",
        "Steinfort"
      ]
    },
    {
      "code": "DI",
      "name": "Diekirch Canton",
      "districts": [
        "Diekirch",
        "Ettelbruck"
      ]
    },
    {
      "code": "GR",
      "name": "Grevenmacher Canton",
      "districts": [
        "Grevenmacher",
        "Mertert"
      ]
    }
  ],
  "streets": [
    "Avenue de la Liberté",
    "Grand-Rue",
    "Rue Philippe II",
    "Route d’Arlon",
    "Boulevard Royal"
  ],
  "buildings": [
    "Appartement",
    "Bureau",
    "Maison",
    "Centre",
    "Résidence"
  ],
  "names": [
    "Lucas Muller",
    "Sophie Weber",
    "Marc Schmit",
    "Emma Hoffmann",
    "Tom Wagner"
  ],
  "jobs": [
    "Finance Analyst",
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Consultant"
  ],
  "campus": [
    "University of Luxembourg",
    "Luxembourg School of Business",
    "LUNEX University"
  ]
}
</script>
