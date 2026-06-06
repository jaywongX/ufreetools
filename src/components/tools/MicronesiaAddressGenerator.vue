<template>
  <CountryAddressGenerator tool-id="micronesia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MicronesiaAddressGeneratorArticle from './MicronesiaAddressGeneratorArticle.vue'

const articleComponent = MicronesiaAddressGeneratorArticle

const countryConfig = {
  "slug": "micronesia-address-generator",
  "display": "Micronesia",
  "phoneCode": "691",
  "timezone": "Pacific/Pohnpei",
  "currency": "USD",
  "locale": "en-FM",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Palikir Region",
      "districts": [
        "Palikir",
        "Palikir Central",
        "Palikir West"
      ]
    },
    {
      "code": "NOR",
      "name": "Kolonia Region",
      "districts": [
        "Kolonia",
        "Kolonia Central",
        "Kolonia East"
      ]
    },
    {
      "code": "SOU",
      "name": "Weno Region",
      "districts": [
        "Weno",
        "Weno Central",
        "Weno South"
      ]
    }
  ],
  "streets": [
    "Beach Road",
    "Market Street",
    "Harbour Road",
    "Church Road",
    "University Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Tane Williams",
    "Mele Brown",
    "Sione Smith",
    "Litia Kumar",
    "Noah Wilson"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "College of Micronesia-FSM",
    "National University of Micronesia",
    "Palikir Technical Institute"
  ]
}
</script>
