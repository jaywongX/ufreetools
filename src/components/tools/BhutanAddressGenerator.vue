<template>
  <CountryAddressGenerator tool-id="bhutan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BhutanAddressGeneratorArticle from './BhutanAddressGeneratorArticle.vue'

const articleComponent = BhutanAddressGeneratorArticle

const countryConfig = {
  "slug": "bhutan-address-generator",
  "display": "Bhutan",
  "phoneCode": "975",
  "timezone": "Asia/Thimphu",
  "currency": "BTN",
  "locale": "dz-BT",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "THI",
      "name": "Thimphu",
      "districts": [
        "Thimphu",
        "Babesa",
        "Motithang"
      ]
    },
    {
      "code": "PAR",
      "name": "Paro",
      "districts": [
        "Paro",
        "Shaba",
        "Drugyel"
      ]
    },
    {
      "code": "PUN",
      "name": "Punakha",
      "districts": [
        "Punakha",
        "Lobesa",
        "Khuru"
      ]
    }
  ],
  "streets": [
    "Norzin Lam",
    "Chang Lam",
    "Dechen Lam",
    "Chorten Lam",
    "Wangdue Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Sonam Dorji",
    "Pema Wangmo",
    "Karma Tshering",
    "Deki Choden",
    "Tashi Namgyel"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Royal University of Bhutan",
    "College of Science and Technology",
    "Sherubtse College"
  ]
}
</script>
