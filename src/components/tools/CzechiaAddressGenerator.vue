<template>
  <CountryAddressGenerator tool-id="czechia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CzechiaAddressGeneratorArticle from './CzechiaAddressGeneratorArticle.vue'

const articleComponent = CzechiaAddressGeneratorArticle

const countryConfig = {
  "slug": "czechia-address-generator",
  "display": "Czechia",
  "phoneCode": "420",
  "timezone": "Europe/Prague",
  "currency": "CZK",
  "locale": "cs-CZ",
  "postalPattern": "### ##",
  "regions": [
    {
      "code": "PR",
      "name": "Prague",
      "districts": [
        "Prague 1",
        "Prague 2",
        "Prague 5"
      ]
    },
    {
      "code": "JM",
      "name": "South Moravian Region",
      "districts": [
        "Brno",
        "Znojmo",
        "Břeclav"
      ]
    },
    {
      "code": "MS",
      "name": "Moravian-Silesian Region",
      "districts": [
        "Ostrava",
        "Opava",
        "Frýdek-Místek"
      ]
    },
    {
      "code": "PL",
      "name": "Plzeň Region",
      "districts": [
        "Plzeň",
        "Klatovy",
        "Rokycany"
      ]
    },
    {
      "code": "JC",
      "name": "South Bohemian Region",
      "districts": [
        "České Budějovice",
        "Tábor",
        "Písek"
      ]
    }
  ],
  "streets": [
    "Václavské náměstí",
    "Národní třída",
    "Dlouhá ulice",
    "Masarykova",
    "Sokolovská"
  ],
  "buildings": [
    "Byt",
    "Kancelář",
    "Dům",
    "Centrum",
    "Rezidence"
  ],
  "names": [
    "Jan Novák",
    "Petra Svobodová",
    "Tomáš Dvořák",
    "Lucie Černá",
    "Martin Procházka"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Charles University",
    "Czech Technical University",
    "Masaryk University"
  ]
}
</script>
