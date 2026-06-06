<template>
  <CountryAddressGenerator tool-id="montenegro-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MontenegroAddressGeneratorArticle from './MontenegroAddressGeneratorArticle.vue'

const articleComponent = MontenegroAddressGeneratorArticle

const countryConfig = {
  "slug": "montenegro-address-generator",
  "display": "Montenegro",
  "phoneCode": "382",
  "timezone": "Europe/Podgorica",
  "currency": "€",
  "locale": "sr-ME",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "PG",
      "name": "Podgorica Municipality",
      "districts": [
        "Podgorica",
        "Tuzi",
        "Golubovci"
      ]
    },
    {
      "code": "NK",
      "name": "Nikšić Municipality",
      "districts": [
        "Nikšić",
        "Župa"
      ]
    },
    {
      "code": "BD",
      "name": "Budva Municipality",
      "districts": [
        "Budva",
        "Petrovac"
      ]
    },
    {
      "code": "BR",
      "name": "Bar Municipality",
      "districts": [
        "Bar",
        "Sutomore"
      ]
    },
    {
      "code": "KO",
      "name": "Kotor Municipality",
      "districts": [
        "Kotor",
        "Risan",
        "Perast"
      ]
    }
  ],
  "streets": [
    "Bulevar Svetog Petra Cetinjskog",
    "Ulica Slobode",
    "Njegoševa ulica",
    "Jadranski put",
    "Stari grad"
  ],
  "buildings": [
    "Stan",
    "Poslovni Centar",
    "Zgrada",
    "Rezidencija",
    "Kuća"
  ],
  "names": [
    "Nikola Popović",
    "Milica Jovanović",
    "Marko Vuković",
    "Ana Radović",
    "Stefan Petrović"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Tourism Manager"
  ],
  "campus": [
    "University of Montenegro",
    "Mediterranean University",
    "University of Donja Gorica"
  ]
}
</script>
