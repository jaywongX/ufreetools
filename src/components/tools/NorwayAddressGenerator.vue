<template>
  <CountryAddressGenerator tool-id="norway-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NorwayAddressGeneratorArticle from './NorwayAddressGeneratorArticle.vue'

const articleComponent = NorwayAddressGeneratorArticle

const countryConfig = {
  "slug": "norway-address-generator",
  "display": "Norway",
  "phoneCode": "47",
  "timezone": "Europe/Oslo",
  "currency": "NOK",
  "locale": "nb-NO",
  "postalPattern": "####",
  "regions": [
    {
      "code": "OSL",
      "name": "Oslo",
      "districts": [
        "Oslo"
      ]
    },
    {
      "code": "VIK",
      "name": "Viken",
      "districts": [
        "Bærum",
        "Drammen",
        "Fredrikstad"
      ]
    },
    {
      "code": "VLA",
      "name": "Vestland",
      "districts": [
        "Bergen",
        "Stord",
        "Voss"
      ]
    },
    {
      "code": "TRD",
      "name": "Trøndelag",
      "districts": [
        "Trondheim",
        "Steinkjer"
      ]
    },
    {
      "code": "ROG",
      "name": "Rogaland",
      "districts": [
        "Stavanger",
        "Sandnes",
        "Haugesund"
      ]
    }
  ],
  "streets": [
    "Karl Johans gate",
    "Storgata",
    "Dronningens gate",
    "Torggata",
    "Munkegata",
    "Bryggen"
  ],
  "buildings": [
    "Leilighet",
    "Kontor",
    "Hus",
    "Senter",
    "Bygg",
    "Residence"
  ],
  "names": [
    "Ole Hansen",
    "Emma Johansen",
    "Lars Olsen",
    "Nora Larsen",
    "Magnus Berg"
  ],
  "jobs": [
    "Systemutvikler",
    "Prosjektleder",
    "Lærer",
    "Regnskapsfører",
    "Lege"
  ],
  "campus": [
    "University of Oslo",
    "NTNU",
    "University of Bergen"
  ]
}
</script>
