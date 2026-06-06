<template>
  <CountryAddressGenerator tool-id="latvia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LatviaAddressGeneratorArticle from './LatviaAddressGeneratorArticle.vue'

const articleComponent = LatviaAddressGeneratorArticle

const countryConfig = {
  "slug": "latvia-address-generator",
  "display": "Latvia",
  "phoneCode": "371",
  "timezone": "Europe/Riga",
  "currency": "€",
  "locale": "lv-LV",
  "postalPattern": "LV-####",
  "regions": [
    {
      "code": "RI",
      "name": "Riga",
      "districts": [
        "Riga",
        "Jūrmala"
      ]
    },
    {
      "code": "DA",
      "name": "Daugavpils Municipality",
      "districts": [
        "Daugavpils",
        "Ilūkste"
      ]
    },
    {
      "code": "LI",
      "name": "Liepāja Municipality",
      "districts": [
        "Liepāja",
        "Grobiņa"
      ]
    },
    {
      "code": "JE",
      "name": "Jelgava Municipality",
      "districts": [
        "Jelgava",
        "Ozolnieki"
      ]
    },
    {
      "code": "VA",
      "name": "Valmiera Municipality",
      "districts": [
        "Valmiera",
        "Rūjiena"
      ]
    }
  ],
  "streets": [
    "Brīvības iela",
    "Elizabetes iela",
    "Krišjāņa Barona iela",
    "Dzirnavu iela",
    "Raiņa bulvāris"
  ],
  "buildings": [
    "Dzīvoklis",
    "Birojs",
    "Māja",
    "Centrs",
    "Rezidence"
  ],
  "names": [
    "Jānis Bērziņš",
    "Anna Kalniņa",
    "Mārtiņš Ozols",
    "Laura Liepa",
    "Rihards Jansons"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Latvia",
    "Riga Technical University",
    "Riga Stradiņš University"
  ]
}
</script>
