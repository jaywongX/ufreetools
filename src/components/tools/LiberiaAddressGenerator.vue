<template>
  <CountryAddressGenerator tool-id="liberia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LiberiaAddressGeneratorArticle from './LiberiaAddressGeneratorArticle.vue'

const articleComponent = LiberiaAddressGeneratorArticle

const countryConfig = {
  "slug": "liberia-address-generator",
  "display": "Liberia",
  "phoneCode": "231",
  "timezone": "Africa/Monrovia",
  "currency": "LRD",
  "locale": "en-LR",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Monrovia Region",
      "districts": [
        "Monrovia",
        "Monrovia Central",
        "Monrovia West"
      ]
    },
    {
      "code": "NOR",
      "name": "Gbarnga Region",
      "districts": [
        "Gbarnga",
        "Gbarnga Central",
        "Gbarnga East"
      ]
    },
    {
      "code": "SOU",
      "name": "Buchanan Region",
      "districts": [
        "Buchanan",
        "Buchanan Central",
        "Buchanan South"
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
    "University of Liberia",
    "National University of Liberia",
    "Monrovia Technical Institute"
  ]
}
</script>
