<template>
  <CountryAddressGenerator tool-id="romania-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import RomaniaAddressGeneratorArticle from './RomaniaAddressGeneratorArticle.vue'

const articleComponent = RomaniaAddressGeneratorArticle

const countryConfig = {
  "slug": "romania-address-generator",
  "display": "Romania",
  "phoneCode": "40",
  "timezone": "Europe/Bucharest",
  "currency": "RON",
  "locale": "ro-RO",
  "postalPattern": "######",
  "regions": [
    {
      "code": "B",
      "name": "Bucharest",
      "districts": [
        "Sector 1",
        "Sector 2",
        "Sector 3"
      ]
    },
    {
      "code": "CJ",
      "name": "Cluj County",
      "districts": [
        "Cluj-Napoca",
        "Turda",
        "Dej"
      ]
    },
    {
      "code": "TM",
      "name": "Timiș County",
      "districts": [
        "Timișoara",
        "Lugoj",
        "Sânnicolau Mare"
      ]
    },
    {
      "code": "IS",
      "name": "Iași County",
      "districts": [
        "Iași",
        "Pașcani",
        "Târgu Frumos"
      ]
    },
    {
      "code": "CT",
      "name": "Constanța County",
      "districts": [
        "Constanța",
        "Mangalia",
        "Medgidia"
      ]
    }
  ],
  "streets": [
    "Calea Victoriei",
    "Bulevardul Unirii",
    "Strada Lipscani",
    "Bulevardul Magheru",
    "Strada Memorandumului"
  ],
  "buildings": [
    "Apartament",
    "Centru de Afaceri",
    "Bloc",
    "Birou",
    "Reședință"
  ],
  "names": [
    "Andrei Popescu",
    "Maria Ionescu",
    "Mihai Dumitrescu",
    "Elena Stan",
    "Alexandru Radu"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Bucharest",
    "Babeș-Bolyai University",
    "Politehnica University of Bucharest"
  ]
}
</script>
