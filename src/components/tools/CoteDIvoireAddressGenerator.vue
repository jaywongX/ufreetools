<template>
  <CountryAddressGenerator tool-id="cote-d-ivoire-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CoteDIvoireAddressGeneratorArticle from './CoteDIvoireAddressGeneratorArticle.vue'

const articleComponent = CoteDIvoireAddressGeneratorArticle

const countryConfig = {
  "slug": "cote-d-ivoire-address-generator",
  "display": "Cote d'Ivoire",
  "phoneCode": "225",
  "timezone": "Africa/Abidjan",
  "currency": "XOF",
  "locale": "fr-CI",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Yamoussoukro Region",
      "districts": [
        "Yamoussoukro",
        "Yamoussoukro Central",
        "Yamoussoukro West"
      ]
    },
    {
      "code": "NOR",
      "name": "Abidjan Region",
      "districts": [
        "Abidjan",
        "Abidjan Central",
        "Abidjan East"
      ]
    },
    {
      "code": "SOU",
      "name": "Bouake Region",
      "districts": [
        "Bouake",
        "Bouake Central",
        "Bouake South"
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
    "Felix Houphouet-Boigny University",
    "National University of Cote d'Ivoire",
    "Yamoussoukro Technical Institute"
  ]
}
</script>
