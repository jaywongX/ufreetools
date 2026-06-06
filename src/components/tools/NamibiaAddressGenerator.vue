<template>
  <CountryAddressGenerator tool-id="namibia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NamibiaAddressGeneratorArticle from './NamibiaAddressGeneratorArticle.vue'

const articleComponent = NamibiaAddressGeneratorArticle

const countryConfig = {
  "slug": "namibia-address-generator",
  "display": "Namibia",
  "phoneCode": "264",
  "timezone": "Africa/Windhoek",
  "currency": "NAD",
  "locale": "en-NA",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Windhoek Region",
      "districts": [
        "Windhoek",
        "Windhoek Central",
        "Windhoek West"
      ]
    },
    {
      "code": "NOR",
      "name": "Walvis Bay Region",
      "districts": [
        "Walvis Bay",
        "Walvis Bay Central",
        "Walvis Bay East"
      ]
    },
    {
      "code": "SOU",
      "name": "Swakopmund Region",
      "districts": [
        "Swakopmund",
        "Swakopmund Central",
        "Swakopmund South"
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
    "University of Namibia",
    "National University of Namibia",
    "Windhoek Technical Institute"
  ]
}
</script>
