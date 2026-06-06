<template>
  <CountryAddressGenerator tool-id="burkina-faso-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BurkinaFasoAddressGeneratorArticle from './BurkinaFasoAddressGeneratorArticle.vue'

const articleComponent = BurkinaFasoAddressGeneratorArticle

const countryConfig = {
  "slug": "burkina-faso-address-generator",
  "display": "Burkina Faso",
  "phoneCode": "226",
  "timezone": "Africa/Ouagadougou",
  "currency": "XOF",
  "locale": "fr-BF",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Ouagadougou Region",
      "districts": [
        "Ouagadougou",
        "Ouagadougou Central",
        "Ouagadougou West"
      ]
    },
    {
      "code": "NOR",
      "name": "Bobo-Dioulasso Region",
      "districts": [
        "Bobo-Dioulasso",
        "Bobo-Dioulasso Central",
        "Bobo-Dioulasso East"
      ]
    },
    {
      "code": "SOU",
      "name": "Koudougou Region",
      "districts": [
        "Koudougou",
        "Koudougou Central",
        "Koudougou South"
      ]
    }
  ],
  "streets": [
    "Independence Avenue",
    "Central Market Road",
    "University Road",
    "Station Road",
    "Nelson Mandela Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Samuel Mensah",
    "Amina Diallo",
    "Daniel Okafor",
    "Fatou Ndiaye",
    "Grace Ndlovu"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Joseph Ki-Zerbo University",
    "National University of Burkina Faso",
    "Ouagadougou Technical Institute"
  ]
}
</script>
