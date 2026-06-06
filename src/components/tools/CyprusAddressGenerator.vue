<template>
  <CountryAddressGenerator tool-id="cyprus-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CyprusAddressGeneratorArticle from './CyprusAddressGeneratorArticle.vue'

const articleComponent = CyprusAddressGeneratorArticle

const countryConfig = {
  "slug": "cyprus-address-generator",
  "display": "Cyprus",
  "phoneCode": "357",
  "timezone": "Asia/Nicosia",
  "currency": "€",
  "locale": "el-CY",
  "postalPattern": "####",
  "regions": [
    {
      "code": "NIC",
      "name": "Nicosia District",
      "districts": [
        "Nicosia",
        "Strovolos",
        "Lakatamia"
      ]
    },
    {
      "code": "LIM",
      "name": "Limassol District",
      "districts": [
        "Limassol",
        "Ypsonas",
        "Germasogeia"
      ]
    },
    {
      "code": "LAR",
      "name": "Larnaca District",
      "districts": [
        "Larnaca",
        "Aradippou",
        "Oroklini"
      ]
    }
  ],
  "streets": [
    "Makarios Avenue",
    "Ledra Street",
    "Stasinou Avenue",
    "Archbishop Kyprianou Street",
    "Digeni Akrita Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Andreas Georgiou",
    "Maria Christou",
    "Nikos Ioannou",
    "Eleni Nicolaou",
    "Costas Andreou"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Cyprus",
    "Cyprus University of Technology",
    "European University Cyprus"
  ]
}
</script>
