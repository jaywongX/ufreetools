<template>
  <CountryAddressGenerator tool-id="moldova-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MoldovaAddressGeneratorArticle from './MoldovaAddressGeneratorArticle.vue'

const articleComponent = MoldovaAddressGeneratorArticle

const countryConfig = {
  "slug": "moldova-address-generator",
  "display": "Moldova",
  "phoneCode": "373",
  "timezone": "Europe/Chisinau",
  "currency": "MDL",
  "locale": "ro-MD",
  "postalPattern": "MD-####",
  "regions": [
    {
      "code": "CH",
      "name": "Chișinău Municipality",
      "districts": [
        "Chișinău",
        "Codru",
        "Durlești"
      ]
    },
    {
      "code": "BA",
      "name": "Bălți Municipality",
      "districts": [
        "Bălți",
        "Elizaveta"
      ]
    },
    {
      "code": "AN",
      "name": "Anenii Noi District",
      "districts": [
        "Anenii Noi",
        "Bulboaca"
      ]
    },
    {
      "code": "CA",
      "name": "Cahul District",
      "districts": [
        "Cahul",
        "Giurgiulești"
      ]
    },
    {
      "code": "OR",
      "name": "Orhei District",
      "districts": [
        "Orhei",
        "Ivancea"
      ]
    }
  ],
  "streets": [
    "Bulevardul Ștefan cel Mare",
    "Strada București",
    "Strada Mihai Eminescu",
    "Strada Pușkin",
    "Bulevardul Dacia"
  ],
  "buildings": [
    "Apartament",
    "Centru de Afaceri",
    "Casă",
    "Birou",
    "Reședință"
  ],
  "names": [
    "Ion Rusu",
    "Ana Cebotari",
    "Vlad Popescu",
    "Maria Ciobanu",
    "Andrei Munteanu"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Sales Manager"
  ],
  "campus": [
    "Moldova State University",
    "Technical University of Moldova",
    "Academy of Economic Studies of Moldova"
  ]
}
</script>
