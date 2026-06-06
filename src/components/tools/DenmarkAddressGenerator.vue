<template>
  <CountryAddressGenerator tool-id="denmark-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import DenmarkAddressGeneratorArticle from './DenmarkAddressGeneratorArticle.vue'

const articleComponent = DenmarkAddressGeneratorArticle

const countryConfig = {
  "slug": "denmark-address-generator",
  "display": "Denmark",
  "phoneCode": "45",
  "timezone": "Europe/Copenhagen",
  "currency": "DKK",
  "locale": "da-DK",
  "postalPattern": "####",
  "regions": [
    {
      "code": "HOV",
      "name": "Capital Region",
      "districts": [
        "Copenhagen",
        "Frederiksberg",
        "Hillerød"
      ]
    },
    {
      "code": "MID",
      "name": "Central Denmark",
      "districts": [
        "Aarhus",
        "Randers",
        "Viborg"
      ]
    },
    {
      "code": "SYD",
      "name": "Southern Denmark",
      "districts": [
        "Odense",
        "Esbjerg",
        "Kolding"
      ]
    },
    {
      "code": "NJL",
      "name": "North Denmark",
      "districts": [
        "Aalborg",
        "Hjørring"
      ]
    },
    {
      "code": "SJL",
      "name": "Zealand",
      "districts": [
        "Roskilde",
        "Næstved"
      ]
    }
  ],
  "streets": [
    "Strøget",
    "Nørrebrogade",
    "Vesterbrogade",
    "Østerbrogade",
    "Hovedgaden",
    "Store Kongensgade"
  ],
  "buildings": [
    "Lejlighed",
    "Kontor",
    "Hus",
    "Center",
    "Bygning",
    "Residence"
  ],
  "names": [
    "Mikkel Jensen",
    "Freja Nielsen",
    "Lars Hansen",
    "Sofie Pedersen",
    "Anders Andersen"
  ],
  "jobs": [
    "Softwareudvikler",
    "Projektleder",
    "Lærer",
    "Revisor",
    "Læge"
  ],
  "campus": [
    "University of Copenhagen",
    "Aarhus University",
    "Technical University of Denmark"
  ]
}
</script>
