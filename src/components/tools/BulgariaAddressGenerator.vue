<template>
  <CountryAddressGenerator tool-id="bulgaria-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BulgariaAddressGeneratorArticle from './BulgariaAddressGeneratorArticle.vue'

const articleComponent = BulgariaAddressGeneratorArticle

const countryConfig = {
  "slug": "bulgaria-address-generator",
  "display": "Bulgaria",
  "phoneCode": "359",
  "timezone": "Europe/Sofia",
  "currency": "BGN",
  "locale": "bg-BG",
  "postalPattern": "####",
  "regions": [
    {
      "code": "SOF",
      "name": "Sofia City",
      "districts": [
        "Sofia",
        "Bankya"
      ]
    },
    {
      "code": "PDV",
      "name": "Plovdiv Province",
      "districts": [
        "Plovdiv",
        "Asenovgrad",
        "Karlovo"
      ]
    },
    {
      "code": "VAR",
      "name": "Varna Province",
      "districts": [
        "Varna",
        "Devnya",
        "Provadia"
      ]
    },
    {
      "code": "BGS",
      "name": "Burgas Province",
      "districts": [
        "Burgas",
        "Nessebar",
        "Sozopol"
      ]
    },
    {
      "code": "RSE",
      "name": "Ruse Province",
      "districts": [
        "Ruse",
        "Byala",
        "Vetovo"
      ]
    }
  ],
  "streets": [
    "Vitosha Boulevard",
    "Tsarigradsko Shose",
    "Rakovski Street",
    "Maria Luiza Boulevard",
    "Aleksandrovska Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "Block",
    "Residence",
    "Office"
  ],
  "names": [
    "Ivan Dimitrov",
    "Maria Petrova",
    "Georgi Ivanov",
    "Elena Stoyanova",
    "Nikolay Georgiev"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Marketing Manager"
  ],
  "campus": [
    "Sofia University",
    "Technical University of Sofia",
    "University of Plovdiv"
  ]
}
</script>
