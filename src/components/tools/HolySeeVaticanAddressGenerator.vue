<template>
  <CountryAddressGenerator tool-id="holy-see-vatican-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import HolySeeVaticanAddressGeneratorArticle from './HolySeeVaticanAddressGeneratorArticle.vue'

const articleComponent = HolySeeVaticanAddressGeneratorArticle

const countryConfig = {
  "slug": "holy-see-vatican-address-generator",
  "display": "Holy See / Vatican",
  "phoneCode": "379",
  "timezone": "Europe/Vatican",
  "currency": "€",
  "locale": "it-VA",
  "postalPattern": "00120",
  "regions": [
    {
      "code": "VAT",
      "name": "Vatican City",
      "districts": [
        "Vatican City",
        "St. Peter’s Square",
        "Vatican Museums"
      ]
    },
    {
      "code": "AP",
      "name": "Apostolic Palace",
      "districts": [
        "Apostolic Palace",
        "Cortile San Damaso"
      ]
    },
    {
      "code": "SG",
      "name": "St. Peter Area",
      "districts": [
        "St. Peter’s Basilica",
        "Via della Conciliazione"
      ]
    },
    {
      "code": "VM",
      "name": "Vatican Museums Area",
      "districts": [
        "Vatican Museums",
        "Belvedere Courtyard"
      ]
    },
    {
      "code": "GV",
      "name": "Vatican Gardens",
      "districts": [
        "Vatican Gardens",
        "Governorate Palace"
      ]
    }
  ],
  "streets": [
    "Via della Conciliazione",
    "Piazza San Pietro",
    "Via del Pellegrino",
    "Cortile San Damaso",
    "Viale Vaticano"
  ],
  "buildings": [
    "Palazzo",
    "Ufficio",
    "Residenza",
    "Archivio",
    "Centro"
  ],
  "names": [
    "Marco Rossi",
    "Luca Bianchi",
    "Giovanni Conti",
    "Paolo Ricci",
    "Andrea Greco"
  ],
  "jobs": [
    "Archivist",
    "Administrative Officer",
    "Researcher",
    "Translator",
    "Curator"
  ],
  "campus": [
    "Pontifical Gregorian University",
    "Pontifical Lateran University",
    "Vatican School of Paleography"
  ]
}
</script>
