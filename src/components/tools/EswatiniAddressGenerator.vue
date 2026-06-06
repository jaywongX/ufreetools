<template>
  <CountryAddressGenerator tool-id="eswatini-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import EswatiniAddressGeneratorArticle from './EswatiniAddressGeneratorArticle.vue'

const articleComponent = EswatiniAddressGeneratorArticle

const countryConfig = {
  "slug": "eswatini-address-generator",
  "display": "Eswatini",
  "phoneCode": "268",
  "timezone": "Africa/Mbabane",
  "currency": "SZL",
  "locale": "en-SZ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Mbabane Region",
      "districts": [
        "Mbabane",
        "Mbabane Central",
        "Mbabane West"
      ]
    },
    {
      "code": "NOR",
      "name": "Manzini Region",
      "districts": [
        "Manzini",
        "Manzini Central",
        "Manzini East"
      ]
    },
    {
      "code": "SOU",
      "name": "Lobamba Region",
      "districts": [
        "Lobamba",
        "Lobamba Central",
        "Lobamba South"
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
    "University of Eswatini",
    "National University of Eswatini",
    "Mbabane Technical Institute"
  ]
}
</script>
