<template>
  <CountryAddressGenerator tool-id="slovakia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SlovakiaAddressGeneratorArticle from './SlovakiaAddressGeneratorArticle.vue'

const articleComponent = SlovakiaAddressGeneratorArticle

const countryConfig = {
  "slug": "slovakia-address-generator",
  "display": "Slovakia",
  "phoneCode": "421",
  "timezone": "Europe/Bratislava",
  "currency": "€",
  "locale": "sk-SK",
  "postalPattern": "### ##",
  "regions": [
    {
      "code": "BA",
      "name": "Bratislava Region",
      "districts": [
        "Bratislava",
        "Pezinok",
        "Malacky"
      ]
    },
    {
      "code": "KE",
      "name": "Košice Region",
      "districts": [
        "Košice",
        "Michalovce",
        "Rožňava"
      ]
    },
    {
      "code": "ZA",
      "name": "Žilina Region",
      "districts": [
        "Žilina",
        "Martin",
        "Liptovský Mikuláš"
      ]
    },
    {
      "code": "NR",
      "name": "Nitra Region",
      "districts": [
        "Nitra",
        "Nové Zámky",
        "Levice"
      ]
    },
    {
      "code": "TT",
      "name": "Trnava Region",
      "districts": [
        "Trnava",
        "Piešťany",
        "Dunajská Streda"
      ]
    }
  ],
  "streets": [
    "Obchodná ulica",
    "Štefánikova",
    "Hlavná ulica",
    "Dunajská ulica",
    "Mlynské nivy"
  ],
  "buildings": [
    "Byt",
    "Kancelária",
    "Dom",
    "Centrum",
    "Rezidencia"
  ],
  "names": [
    "Martin Novák",
    "Jana Kováčová",
    "Peter Horváth",
    "Lucia Vargová",
    "Marek Tóth"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Comenius University",
    "Slovak University of Technology",
    "Technical University of Košice"
  ]
}
</script>
