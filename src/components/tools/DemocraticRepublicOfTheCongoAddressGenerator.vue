<template>
  <CountryAddressGenerator tool-id="democratic-republic-of-the-congo-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import DemocraticRepublicOfTheCongoAddressGeneratorArticle from './DemocraticRepublicOfTheCongoAddressGeneratorArticle.vue'

const articleComponent = DemocraticRepublicOfTheCongoAddressGeneratorArticle

const countryConfig = {
  "slug": "democratic-republic-of-the-congo-address-generator",
  "display": "Democratic Republic of the Congo",
  "phoneCode": "243",
  "timezone": "Africa/Kinshasa",
  "currency": "CDF",
  "locale": "fr-CD",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Kinshasa Region",
      "districts": [
        "Kinshasa",
        "Kinshasa Central",
        "Kinshasa West"
      ]
    },
    {
      "code": "NOR",
      "name": "Lubumbashi Region",
      "districts": [
        "Lubumbashi",
        "Lubumbashi Central",
        "Lubumbashi East"
      ]
    },
    {
      "code": "SOU",
      "name": "Mbuji-Mayi Region",
      "districts": [
        "Mbuji-Mayi",
        "Mbuji-Mayi Central",
        "Mbuji-Mayi South"
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
    "University of Kinshasa",
    "National University of Democratic Republic of the Congo",
    "Kinshasa Technical Institute"
  ]
}
</script>
