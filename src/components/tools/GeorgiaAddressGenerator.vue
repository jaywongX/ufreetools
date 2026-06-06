<template>
  <CountryAddressGenerator tool-id="georgia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import GeorgiaAddressGeneratorArticle from './GeorgiaAddressGeneratorArticle.vue'

const articleComponent = GeorgiaAddressGeneratorArticle

const countryConfig = {
  "slug": "georgia-address-generator",
  "display": "Georgia",
  "phoneCode": "995",
  "timezone": "Asia/Tbilisi",
  "currency": "GEL",
  "locale": "ka-GE",
  "postalPattern": "####",
  "regions": [
    {
      "code": "TB",
      "name": "Tbilisi",
      "districts": [
        "Old Tbilisi",
        "Vake",
        "Saburtalo"
      ]
    },
    {
      "code": "AJ",
      "name": "Adjara",
      "districts": [
        "Batumi",
        "Kobuleti",
        "Khelvachauri"
      ]
    },
    {
      "code": "IM",
      "name": "Imereti",
      "districts": [
        "Kutaisi",
        "Zestaponi",
        "Samtredia"
      ]
    }
  ],
  "streets": [
    "Rustaveli Avenue",
    "Agmashenebeli Avenue",
    "Chavchavadze Avenue",
    "Pekini Avenue",
    "Gorgasali Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Giorgi Beridze",
    "Nino Gelashvili",
    "Luka Kapanadze",
    "Mariam Tsiklauri",
    "Davit Maisuradze"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Tbilisi State University",
    "Georgian Technical University",
    "Ilia State University"
  ]
}
</script>
