<template>
  <CountryAddressGenerator tool-id="mozambique-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MozambiqueAddressGeneratorArticle from './MozambiqueAddressGeneratorArticle.vue'

const articleComponent = MozambiqueAddressGeneratorArticle

const countryConfig = {
  "slug": "mozambique-address-generator",
  "display": "Mozambique",
  "phoneCode": "258",
  "timezone": "Africa/Maputo",
  "currency": "MZN",
  "locale": "pt-MZ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Maputo Region",
      "districts": [
        "Maputo",
        "Maputo Central",
        "Maputo West"
      ]
    },
    {
      "code": "NOR",
      "name": "Beira Region",
      "districts": [
        "Beira",
        "Beira Central",
        "Beira East"
      ]
    },
    {
      "code": "SOU",
      "name": "Nampula Region",
      "districts": [
        "Nampula",
        "Nampula Central",
        "Nampula South"
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
    "Eduardo Mondlane University",
    "National University of Mozambique",
    "Maputo Technical Institute"
  ]
}
</script>
