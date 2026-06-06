<template>
  <CountryAddressGenerator tool-id="switzerland-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SwitzerlandAddressGeneratorArticle from './SwitzerlandAddressGeneratorArticle.vue'

const articleComponent = SwitzerlandAddressGeneratorArticle

const countryConfig = {
  "slug": "switzerland-address-generator",
  "display": "Switzerland",
  "phoneCode": "41",
  "timezone": "Europe/Zurich",
  "currency": "CHF",
  "locale": "de-CH",
  "postalPattern": "####",
  "regions": [
    {
      "code": "ZH",
      "name": "Zürich",
      "districts": [
        "Zürich",
        "Winterthur",
        "Uster"
      ]
    },
    {
      "code": "BE",
      "name": "Bern",
      "districts": [
        "Bern",
        "Biel/Bienne",
        "Thun"
      ]
    },
    {
      "code": "GE",
      "name": "Geneva",
      "districts": [
        "Geneva",
        "Carouge",
        "Vernier"
      ]
    },
    {
      "code": "VD",
      "name": "Vaud",
      "districts": [
        "Lausanne",
        "Montreux",
        "Nyon"
      ]
    },
    {
      "code": "BS",
      "name": "Basel-Stadt",
      "districts": [
        "Basel"
      ]
    }
  ],
  "streets": [
    "Bahnhofstrasse",
    "Hauptstrasse",
    "Rue du Rhône",
    "Avenue de la Gare",
    "Seestrasse",
    "Marktgasse"
  ],
  "buildings": [
    "Haus",
    "Wohnung",
    "Bürohaus",
    "Zentrum",
    "Résidence",
    "Block"
  ],
  "names": [
    "Lukas Müller",
    "Anna Meier",
    "Noah Schmid",
    "Laura Keller",
    "Marco Steiner"
  ],
  "jobs": [
    "Software Engineer",
    "Banking Specialist",
    "Teacher",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "ETH Zurich",
    "University of Zurich",
    "University of Geneva"
  ]
}
</script>
