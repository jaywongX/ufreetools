<template>
  <CountryAddressGenerator tool-id="sweden-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SwedenAddressGeneratorArticle from './SwedenAddressGeneratorArticle.vue'

const articleComponent = SwedenAddressGeneratorArticle

const countryConfig = {
  "slug": "sweden-address-generator",
  "display": "Sweden",
  "phoneCode": "46",
  "timezone": "Europe/Stockholm",
  "currency": "SEK",
  "locale": "sv-SE",
  "postalPattern": "### ##",
  "regions": [
    {
      "code": "ST",
      "name": "Stockholm County",
      "districts": [
        "Stockholm",
        "Solna",
        "Södertälje"
      ]
    },
    {
      "code": "VG",
      "name": "Västra Götaland County",
      "districts": [
        "Gothenburg",
        "Borås",
        "Trollhättan"
      ]
    },
    {
      "code": "SK",
      "name": "Skåne County",
      "districts": [
        "Malmö",
        "Lund",
        "Helsingborg"
      ]
    },
    {
      "code": "UP",
      "name": "Uppsala County",
      "districts": [
        "Uppsala",
        "Enköping"
      ]
    },
    {
      "code": "OB",
      "name": "Örebro County",
      "districts": [
        "Örebro",
        "Karlskoga"
      ]
    }
  ],
  "streets": [
    "Drottninggatan",
    "Kungsgatan",
    "Storgatan",
    "Vasagatan",
    "Sveavägen",
    "Östra Hamngatan"
  ],
  "buildings": [
    "Lägenhet",
    "Kontor",
    "Hus",
    "Centrum",
    "Kvarter",
    "Fastighet"
  ],
  "names": [
    "Erik Andersson",
    "Anna Johansson",
    "Lars Karlsson",
    "Maria Nilsson",
    "Johan Eriksson"
  ],
  "jobs": [
    "Systemutvecklare",
    "Projektledare",
    "Lärare",
    "Ekonom",
    "Läkare"
  ],
  "campus": [
    "Stockholm University",
    "Lund University",
    "Uppsala University"
  ]
}
</script>
