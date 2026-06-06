<template>
  <CountryAddressGenerator tool-id="laos-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LaosAddressGeneratorArticle from './LaosAddressGeneratorArticle.vue'

const articleComponent = LaosAddressGeneratorArticle

const countryConfig = {
  "slug": "laos-address-generator",
  "display": "Laos",
  "phoneCode": "856",
  "timezone": "Asia/Vientiane",
  "currency": "LAK",
  "locale": "lo-LA",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "VT",
      "name": "Vientiane Prefecture",
      "districts": [
        "Vientiane",
        "Sikhottabong",
        "Sisattanak"
      ]
    },
    {
      "code": "LP",
      "name": "Luang Prabang Province",
      "districts": [
        "Luang Prabang",
        "Pak Ou",
        "Xieng Ngeun"
      ]
    },
    {
      "code": "SV",
      "name": "Savannakhet Province",
      "districts": [
        "Savannakhet",
        "Kaysone Phomvihane",
        "Atsaphangthong"
      ]
    }
  ],
  "streets": [
    "Lane Xang Avenue",
    "Setthathirath Road",
    "Samsenthai Road",
    "Kaysone Phomvihane Road",
    "Mekong Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Somchai Vong",
    "Noy Phan",
    "Khamla Souvann",
    "Malai Chanthavong",
    "Anousone Phimmasone"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National University of Laos",
    "Souphanouvong University",
    "Savannakhet University"
  ]
}
</script>
