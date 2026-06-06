<template>
  <CountryAddressGenerator tool-id="new-zealand-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NewZealandAddressGeneratorArticle from './NewZealandAddressGeneratorArticle.vue'

const articleComponent = NewZealandAddressGeneratorArticle

const countryConfig = {
  "slug": "new-zealand-address-generator",
  "display": "New Zealand",
  "phoneCode": "64",
  "timezone": "Pacific/Auckland",
  "currency": "NZD",
  "locale": "en-NZ",
  "postalPattern": "####",
  "regions": [
    {
      "code": "CAP",
      "name": "Wellington Region",
      "districts": [
        "Wellington",
        "Wellington Central",
        "Wellington West"
      ]
    },
    {
      "code": "NOR",
      "name": "Auckland Region",
      "districts": [
        "Auckland",
        "Auckland Central",
        "Auckland East"
      ]
    },
    {
      "code": "SOU",
      "name": "Christchurch Region",
      "districts": [
        "Christchurch",
        "Christchurch Central",
        "Christchurch South"
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
    "University of Auckland",
    "National University of New Zealand",
    "Wellington Technical Institute"
  ]
}
</script>
