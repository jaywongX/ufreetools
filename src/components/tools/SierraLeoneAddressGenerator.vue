<template>
  <CountryAddressGenerator tool-id="sierra-leone-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SierraLeoneAddressGeneratorArticle from './SierraLeoneAddressGeneratorArticle.vue'

const articleComponent = SierraLeoneAddressGeneratorArticle

const countryConfig = {
  "slug": "sierra-leone-address-generator",
  "display": "Sierra Leone",
  "phoneCode": "232",
  "timezone": "Africa/Freetown",
  "currency": "SLL",
  "locale": "en-SL",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Freetown Region",
      "districts": [
        "Freetown",
        "Freetown Central",
        "Freetown West"
      ]
    },
    {
      "code": "NOR",
      "name": "Bo Region",
      "districts": [
        "Bo",
        "Bo Central",
        "Bo East"
      ]
    },
    {
      "code": "SOU",
      "name": "Kenema Region",
      "districts": [
        "Kenema",
        "Kenema Central",
        "Kenema South"
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
    "University of Sierra Leone",
    "National University of Sierra Leone",
    "Freetown Technical Institute"
  ]
}
</script>
