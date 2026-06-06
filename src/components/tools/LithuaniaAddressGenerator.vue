<template>
  <CountryAddressGenerator tool-id="lithuania-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LithuaniaAddressGeneratorArticle from './LithuaniaAddressGeneratorArticle.vue'

const articleComponent = LithuaniaAddressGeneratorArticle

const countryConfig = {
  "slug": "lithuania-address-generator",
  "display": "Lithuania",
  "phoneCode": "370",
  "timezone": "Europe/Vilnius",
  "currency": "€",
  "locale": "lt-LT",
  "postalPattern": "LT-#####",
  "regions": [
    {
      "code": "VI",
      "name": "Vilnius County",
      "districts": [
        "Vilnius",
        "Trakai",
        "Šalčininkai"
      ]
    },
    {
      "code": "KA",
      "name": "Kaunas County",
      "districts": [
        "Kaunas",
        "Jonava",
        "Kėdainiai"
      ]
    },
    {
      "code": "KL",
      "name": "Klaipėda County",
      "districts": [
        "Klaipėda",
        "Palanga",
        "Gargždai"
      ]
    },
    {
      "code": "SI",
      "name": "Šiauliai County",
      "districts": [
        "Šiauliai",
        "Radviliškis",
        "Kuršėnai"
      ]
    },
    {
      "code": "PA",
      "name": "Panevėžys County",
      "districts": [
        "Panevėžys",
        "Biržai",
        "Rokiškis"
      ]
    }
  ],
  "streets": [
    "Gedimino prospektas",
    "Pilies gatvė",
    "Laisvės alėja",
    "Vilniaus gatvė",
    "Taikos prospektas"
  ],
  "buildings": [
    "Butas",
    "Biuras",
    "Namas",
    "Centras",
    "Rezidencija"
  ],
  "names": [
    "Jonas Kazlauskas",
    "Ieva Petrauskaitė",
    "Mantas Jankauskas",
    "Austėja Stankevičienė",
    "Tomas Žukauskas"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Product Manager"
  ],
  "campus": [
    "Vilnius University",
    "Kaunas University of Technology",
    "Vilnius Gediminas Technical University"
  ]
}
</script>
