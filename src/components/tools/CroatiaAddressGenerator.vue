<template>
  <CountryAddressGenerator tool-id="croatia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CroatiaAddressGeneratorArticle from './CroatiaAddressGeneratorArticle.vue'

const articleComponent = CroatiaAddressGeneratorArticle

const countryConfig = {
  "slug": "croatia-address-generator",
  "display": "Croatia",
  "phoneCode": "385",
  "timezone": "Europe/Zagreb",
  "currency": "€",
  "locale": "hr-HR",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "ZG",
      "name": "City of Zagreb",
      "districts": [
        "Zagreb",
        "Sesvete"
      ]
    },
    {
      "code": "SD",
      "name": "Split-Dalmatia County",
      "districts": [
        "Split",
        "Makarska",
        "Trogir"
      ]
    },
    {
      "code": "PG",
      "name": "Primorje-Gorski Kotar County",
      "districts": [
        "Rijeka",
        "Opatija",
        "Crikvenica"
      ]
    },
    {
      "code": "OS",
      "name": "Osijek-Baranja County",
      "districts": [
        "Osijek",
        "Đakovo",
        "Beli Manastir"
      ]
    },
    {
      "code": "IS",
      "name": "Istria County",
      "districts": [
        "Pula",
        "Rovinj",
        "Poreč"
      ]
    }
  ],
  "streets": [
    "Ilica",
    "Vukovarska ulica",
    "Marmontova ulica",
    "Korzo",
    "Radićeva ulica"
  ],
  "buildings": [
    "Stan",
    "Poslovni Centar",
    "Zgrada",
    "Rezidencija",
    "Kuća"
  ],
  "names": [
    "Luka Horvat",
    "Ana Kovač",
    "Marko Babić",
    "Ivana Novak",
    "Petar Marić"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Tourism Manager"
  ],
  "campus": [
    "University of Zagreb",
    "University of Split",
    "University of Rijeka"
  ]
}
</script>
