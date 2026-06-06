<template>
  <CountryAddressGenerator tool-id="marshall-islands-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MarshallIslandsAddressGeneratorArticle from './MarshallIslandsAddressGeneratorArticle.vue'

const articleComponent = MarshallIslandsAddressGeneratorArticle

const countryConfig = {
  "slug": "marshall-islands-address-generator",
  "display": "Marshall Islands",
  "phoneCode": "692",
  "timezone": "Pacific/Majuro",
  "currency": "USD",
  "locale": "en-MH",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Majuro Region",
      "districts": [
        "Majuro",
        "Majuro Central",
        "Majuro West"
      ]
    },
    {
      "code": "NOR",
      "name": "Ebeye Region",
      "districts": [
        "Ebeye",
        "Ebeye Central",
        "Ebeye East"
      ]
    },
    {
      "code": "SOU",
      "name": "Arno Region",
      "districts": [
        "Arno",
        "Arno Central",
        "Arno South"
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
    "College of the Marshall Islands",
    "National University of Marshall Islands",
    "Majuro Technical Institute"
  ]
}
</script>
