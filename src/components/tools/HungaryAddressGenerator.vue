<template>
  <CountryAddressGenerator tool-id="hungary-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import HungaryAddressGeneratorArticle from './HungaryAddressGeneratorArticle.vue'

const articleComponent = HungaryAddressGeneratorArticle

const countryConfig = {
  "slug": "hungary-address-generator",
  "display": "Hungary",
  "phoneCode": "36",
  "timezone": "Europe/Budapest",
  "currency": "HUF",
  "locale": "hu-HU",
  "postalPattern": "####",
  "regions": [
    {
      "code": "BU",
      "name": "Budapest",
      "districts": [
        "Budapest I",
        "Budapest V",
        "Budapest XIII"
      ]
    },
    {
      "code": "PE",
      "name": "Pest County",
      "districts": [
        "Érd",
        "Szentendre",
        "Gödöllő"
      ]
    },
    {
      "code": "HB",
      "name": "Hajdú-Bihar County",
      "districts": [
        "Debrecen",
        "Hajdúszoboszló",
        "Berettyóújfalu"
      ]
    },
    {
      "code": "CS",
      "name": "Csongrád-Csanád County",
      "districts": [
        "Szeged",
        "Hódmezővásárhely",
        "Makó"
      ]
    },
    {
      "code": "BA",
      "name": "Baranya County",
      "districts": [
        "Pécs",
        "Komló",
        "Mohács"
      ]
    }
  ],
  "streets": [
    "Andrássy út",
    "Váci utca",
    "Rákóczi út",
    "Kossuth Lajos utca",
    "Bartók Béla út"
  ],
  "buildings": [
    "Lakás",
    "Irodaház",
    "Ház",
    "Központ",
    "Rezidencia"
  ],
  "names": [
    "Bence Nagy",
    "Anna Kovács",
    "Máté Tóth",
    "Eszter Szabó",
    "Gábor Horváth"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Eötvös Loránd University",
    "Budapest University of Technology and Economics",
    "University of Szeged"
  ]
}
</script>
