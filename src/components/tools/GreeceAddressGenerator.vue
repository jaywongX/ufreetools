<template>
  <CountryAddressGenerator tool-id="greece-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GreeceAddressGeneratorArticle from './GreeceAddressGeneratorArticle.vue'

const articleComponent = GreeceAddressGeneratorArticle

const countryConfig = {
  "slug": "greece-address-generator",
  "display": "Greece",
  "phoneCode": "30",
  "timezone": "Europe/Athens",
  "currency": "€",
  "locale": "el-GR",
  "postalPattern": "### ##",
  "regions": [
    {
      "code": "ATT",
      "name": "Attica",
      "districts": [
        "Athens",
        "Piraeus",
        "Marousi"
      ]
    },
    {
      "code": "CMA",
      "name": "Central Macedonia",
      "districts": [
        "Thessaloniki",
        "Katerini",
        "Serres"
      ]
    },
    {
      "code": "CRE",
      "name": "Crete",
      "districts": [
        "Heraklion",
        "Chania",
        "Rethymno"
      ]
    },
    {
      "code": "WGR",
      "name": "Western Greece",
      "districts": [
        "Patras",
        "Agrinio"
      ]
    },
    {
      "code": "THS",
      "name": "Thessaly",
      "districts": [
        "Larissa",
        "Volos"
      ]
    }
  ],
  "streets": [
    "Ermou Street",
    "Stadiou Street",
    "Panepistimiou Street",
    "Tsimiski Street",
    "Egnatia Street",
    "Mitropoleos Street"
  ],
  "buildings": [
    "Apartment",
    "Maisonette",
    "Office Center",
    "Residence",
    "Plaza",
    "Building"
  ],
  "names": [
    "Giorgos Papadopoulos",
    "Eleni Georgiou",
    "Nikos Nikolaidis",
    "Maria Dimitriou",
    "Kostas Ioannou"
  ],
  "jobs": [
    "Software Engineer",
    "Tourism Manager",
    "Teacher",
    "Accountant",
    "Doctor"
  ],
  "campus": [
    "National and Kapodistrian University of Athens",
    "Aristotle University of Thessaloniki",
    "University of Patras"
  ]
}
</script>
