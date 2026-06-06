<template>
  <CountryAddressGenerator tool-id="equatorial-guinea-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import EquatorialGuineaAddressGeneratorArticle from './EquatorialGuineaAddressGeneratorArticle.vue'

const articleComponent = EquatorialGuineaAddressGeneratorArticle

const countryConfig = {
  "slug": "equatorial-guinea-address-generator",
  "display": "Equatorial Guinea",
  "phoneCode": "240",
  "timezone": "Africa/Malabo",
  "currency": "XAF",
  "locale": "es-GQ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Malabo Region",
      "districts": [
        "Malabo",
        "Malabo Central",
        "Malabo West"
      ]
    },
    {
      "code": "NOR",
      "name": "Bata Region",
      "districts": [
        "Bata",
        "Bata Central",
        "Bata East"
      ]
    },
    {
      "code": "SOU",
      "name": "Ebebiyin Region",
      "districts": [
        "Ebebiyin",
        "Ebebiyin Central",
        "Ebebiyin South"
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
    "National University of Equatorial Guinea",
    "National University of Equatorial Guinea",
    "Malabo Technical Institute"
  ]
}
</script>
