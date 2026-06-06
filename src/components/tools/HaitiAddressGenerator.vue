<template>
  <CountryAddressGenerator tool-id="haiti-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import HaitiAddressGeneratorArticle from './HaitiAddressGeneratorArticle.vue'

const articleComponent = HaitiAddressGeneratorArticle

const countryConfig = {
  "slug": "haiti-address-generator",
  "display": "Haiti",
  "phoneCode": "509",
  "timezone": "America/Port-au-Prince",
  "currency": "HTG",
  "locale": "fr-HT",
  "postalPattern": "HT####",
  "regions": [
    {
      "code": "OU",
      "name": "Ouest",
      "districts": [
        "Port-au-Prince",
        "Petion-Ville",
        "Carrefour"
      ]
    },
    {
      "code": "NO",
      "name": "Nord",
      "districts": [
        "Cap-Haitien",
        "Limonade",
        "Acul-du-Nord"
      ]
    },
    {
      "code": "AR",
      "name": "Artibonite",
      "districts": [
        "Gonaives",
        "Saint-Marc",
        "Dessalines"
      ]
    }
  ],
  "streets": [
    "Rue Capois",
    "Avenue John Brown",
    "Boulevard Jean-Jacques Dessalines",
    "Rue Panamericaine",
    "Route de Delmas"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Jean Baptiste",
    "Nadine Pierre",
    "Marc Joseph",
    "Claudine Laurent",
    "Samuel Charles"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "State University of Haiti",
    "Universite Quisqueya",
    "Universite Notre Dame d Haiti"
  ]
}
</script>
