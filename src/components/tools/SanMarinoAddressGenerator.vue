<template>
  <CountryAddressGenerator tool-id="san-marino-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SanMarinoAddressGeneratorArticle from './SanMarinoAddressGeneratorArticle.vue'

const articleComponent = SanMarinoAddressGeneratorArticle

const countryConfig = {
  "slug": "san-marino-address-generator",
  "display": "San Marino",
  "phoneCode": "378",
  "timezone": "Europe/San_Marino",
  "currency": "€",
  "locale": "it-SM",
  "postalPattern": "4789#",
  "regions": [
    {
      "code": "SM",
      "name": "Città di San Marino",
      "districts": [
        "Città di San Marino",
        "Montalbo"
      ]
    },
    {
      "code": "BO",
      "name": "Borgo Maggiore",
      "districts": [
        "Borgo Maggiore",
        "Valdragone"
      ]
    },
    {
      "code": "SE",
      "name": "Serravalle",
      "districts": [
        "Serravalle",
        "Dogana"
      ]
    },
    {
      "code": "DO",
      "name": "Domagnano",
      "districts": [
        "Domagnano",
        "Torraccia"
      ]
    },
    {
      "code": "FA",
      "name": "Faetano",
      "districts": [
        "Faetano",
        "Corianino"
      ]
    }
  ],
  "streets": [
    "Contrada del Pianello",
    "Via Eugippo",
    "Strada Prima Gualdaria",
    "Via Oddone Scarito",
    "Via Tre Settembre"
  ],
  "buildings": [
    "Appartamento",
    "Ufficio",
    "Casa",
    "Centro",
    "Residenza"
  ],
  "names": [
    "Luca Guidi",
    "Giulia Rossi",
    "Marco Berti",
    "Sara Valentini",
    "Andrea Casadei"
  ],
  "jobs": [
    "Accountant",
    "Teacher",
    "Software Developer",
    "Tourism Manager",
    "Consultant"
  ],
  "campus": [
    "University of the Republic of San Marino",
    "Centro Studi San Marino",
    "San Marino Business School"
  ]
}
</script>
