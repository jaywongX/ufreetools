<template>
  <CountryAddressGenerator tool-id="malawi-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MalawiAddressGeneratorArticle from './MalawiAddressGeneratorArticle.vue'

const articleComponent = MalawiAddressGeneratorArticle

const countryConfig = {
  "slug": "malawi-address-generator",
  "display": "Malawi",
  "phoneCode": "265",
  "timezone": "Africa/Blantyre",
  "currency": "MWK",
  "locale": "en-MW",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Lilongwe Region",
      "districts": [
        "Lilongwe",
        "Lilongwe Central",
        "Lilongwe West"
      ]
    },
    {
      "code": "NOR",
      "name": "Blantyre Region",
      "districts": [
        "Blantyre",
        "Blantyre Central",
        "Blantyre East"
      ]
    },
    {
      "code": "SOU",
      "name": "Mzuzu Region",
      "districts": [
        "Mzuzu",
        "Mzuzu Central",
        "Mzuzu South"
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
    "University of Malawi",
    "National University of Malawi",
    "Lilongwe Technical Institute"
  ]
}
</script>
