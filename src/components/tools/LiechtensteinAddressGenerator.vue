<template>
  <CountryAddressGenerator tool-id="liechtenstein-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LiechtensteinAddressGeneratorArticle from './LiechtensteinAddressGeneratorArticle.vue'

const articleComponent = LiechtensteinAddressGeneratorArticle

const countryConfig = {
  "slug": "liechtenstein-address-generator",
  "display": "Liechtenstein",
  "phoneCode": "423",
  "timezone": "Europe/Vaduz",
  "currency": "CHF",
  "locale": "de-LI",
  "postalPattern": "####",
  "regions": [
    {
      "code": "VA",
      "name": "Vaduz",
      "districts": [
        "Vaduz",
        "Ebenholz"
      ]
    },
    {
      "code": "SC",
      "name": "Schaan",
      "districts": [
        "Schaan",
        "Mühleholz"
      ]
    },
    {
      "code": "TR",
      "name": "Triesen",
      "districts": [
        "Triesen",
        "Lawena"
      ]
    },
    {
      "code": "BA",
      "name": "Balzers",
      "districts": [
        "Balzers",
        "Mäls"
      ]
    },
    {
      "code": "ES",
      "name": "Eschen",
      "districts": [
        "Eschen",
        "Nendeln"
      ]
    }
  ],
  "streets": [
    "Städtle",
    "Landstrasse",
    "Austrasse",
    "Zollstrasse",
    "Kirchstrasse"
  ],
  "buildings": [
    "Wohnung",
    "Büro",
    "Haus",
    "Zentrum",
    "Residenz"
  ],
  "names": [
    "Lukas Büchel",
    "Anna Frick",
    "Marco Beck",
    "Laura Vogt",
    "Simon Kaiser"
  ],
  "jobs": [
    "Banking Specialist",
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Consultant"
  ],
  "campus": [
    "University of Liechtenstein",
    "Private University in the Principality of Liechtenstein",
    "Liechtenstein Business School"
  ]
}
</script>
