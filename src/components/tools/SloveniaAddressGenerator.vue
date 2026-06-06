<template>
  <CountryAddressGenerator tool-id="slovenia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SloveniaAddressGeneratorArticle from './SloveniaAddressGeneratorArticle.vue'

const articleComponent = SloveniaAddressGeneratorArticle

const countryConfig = {
  "slug": "slovenia-address-generator",
  "display": "Slovenia",
  "phoneCode": "386",
  "timezone": "Europe/Ljubljana",
  "currency": "€",
  "locale": "sl-SI",
  "postalPattern": "####",
  "regions": [
    {
      "code": "LJ",
      "name": "Central Slovenia",
      "districts": [
        "Ljubljana",
        "Domžale",
        "Kamnik"
      ]
    },
    {
      "code": "MB",
      "name": "Drava Region",
      "districts": [
        "Maribor",
        "Ptuj",
        "Slovenska Bistrica"
      ]
    },
    {
      "code": "KR",
      "name": "Upper Carniola",
      "districts": [
        "Kranj",
        "Bled",
        "Jesenice"
      ]
    },
    {
      "code": "KP",
      "name": "Coastal-Karst",
      "districts": [
        "Koper",
        "Piran",
        "Sežana"
      ]
    },
    {
      "code": "CE",
      "name": "Savinja Region",
      "districts": [
        "Celje",
        "Velenje",
        "Žalec"
      ]
    }
  ],
  "streets": [
    "Slovenska cesta",
    "Čopova ulica",
    "Trubarjeva cesta",
    "Gosposvetska cesta",
    "Prešernova cesta"
  ],
  "buildings": [
    "Stanovanje",
    "Pisarna",
    "Hiša",
    "Center",
    "Rezidenca"
  ],
  "names": [
    "Luka Novak",
    "Ana Kovač",
    "Matej Horvat",
    "Nika Zupan",
    "Žan Krajnc"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Ljubljana",
    "University of Maribor",
    "University of Primorska"
  ]
}
</script>
