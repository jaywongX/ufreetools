<template>
  <CountryAddressGenerator tool-id="myanmar-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MyanmarAddressGeneratorArticle from './MyanmarAddressGeneratorArticle.vue'

const articleComponent = MyanmarAddressGeneratorArticle

const countryConfig = {
  "slug": "myanmar-address-generator",
  "display": "Myanmar",
  "phoneCode": "95",
  "timezone": "Asia/Yangon",
  "currency": "MMK",
  "locale": "my-MM",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "YGN",
      "name": "Yangon Region",
      "districts": [
        "Yangon",
        "Thingangyun",
        "Hlaing"
      ]
    },
    {
      "code": "MDY",
      "name": "Mandalay Region",
      "districts": [
        "Mandalay",
        "Pyin Oo Lwin",
        "Amarapura"
      ]
    },
    {
      "code": "NPT",
      "name": "Naypyidaw Union Territory",
      "districts": [
        "Naypyidaw",
        "Zabuthiri",
        "Pyinmana"
      ]
    }
  ],
  "streets": [
    "Pyay Road",
    "Kabar Aye Pagoda Road",
    "Anawrahta Road",
    "Bogyoke Aung San Road",
    "Strand Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Aung Min",
    "Thandar Hlaing",
    "Ko Ko Naing",
    "Su Mon",
    "Nay Lin"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Yangon",
    "Mandalay University",
    "Yangon Technological University"
  ]
}
</script>
