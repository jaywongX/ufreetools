<template>
  <CountryAddressGenerator tool-id="somalia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SomaliaAddressGeneratorArticle from './SomaliaAddressGeneratorArticle.vue'

const articleComponent = SomaliaAddressGeneratorArticle

const countryConfig = {
  "slug": "somalia-address-generator",
  "display": "Somalia",
  "phoneCode": "252",
  "timezone": "Africa/Mogadishu",
  "currency": "SOS",
  "locale": "so-SO",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Mogadishu Region",
      "districts": [
        "Mogadishu",
        "Mogadishu Central",
        "Mogadishu West"
      ]
    },
    {
      "code": "NOR",
      "name": "Hargeisa Region",
      "districts": [
        "Hargeisa",
        "Hargeisa Central",
        "Hargeisa East"
      ]
    },
    {
      "code": "SOU",
      "name": "Kismayo Region",
      "districts": [
        "Kismayo",
        "Kismayo Central",
        "Kismayo South"
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
    "Somali National University",
    "National University of Somalia",
    "Mogadishu Technical Institute"
  ]
}
</script>
