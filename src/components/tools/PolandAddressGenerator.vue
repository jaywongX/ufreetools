<template>
  <CountryAddressGenerator tool-id="poland-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import PolandAddressGeneratorArticle from './PolandAddressGeneratorArticle.vue'

const articleComponent = PolandAddressGeneratorArticle

const countryConfig = {
  "slug": "poland-address-generator",
  "display": "Poland",
  "phoneCode": "48",
  "timezone": "Europe/Warsaw",
  "currency": "zł",
  "locale": "pl-PL",
  "postalPattern": "##-###",
  "regions": [
    {
      "code": "MAZ",
      "name": "Masovian",
      "districts": [
        "Warsaw",
        "Radom",
        "Płock"
      ]
    },
    {
      "code": "MAL",
      "name": "Lesser Poland",
      "districts": [
        "Kraków",
        "Tarnów",
        "Nowy Sącz"
      ]
    },
    {
      "code": "SIL",
      "name": "Silesian",
      "districts": [
        "Katowice",
        "Gliwice",
        "Częstochowa"
      ]
    },
    {
      "code": "WKP",
      "name": "Greater Poland",
      "districts": [
        "Poznań",
        "Kalisz",
        "Konin"
      ]
    },
    {
      "code": "POM",
      "name": "Pomeranian",
      "districts": [
        "Gdańsk",
        "Gdynia",
        "Sopot"
      ]
    }
  ],
  "streets": [
    "ulica Marszałkowska",
    "ulica Floriańska",
    "Aleje Jerozolimskie",
    "ulica Długa",
    "ulica Kościuszki",
    "ulica Mickiewicza"
  ],
  "buildings": [
    "Kamienica",
    "Apartamenty",
    "Biurowiec",
    "Centrum",
    "Osiedle",
    "Blok"
  ],
  "names": [
    "Jan Kowalski",
    "Anna Nowak",
    "Piotr Wiśniewski",
    "Katarzyna Wójcik",
    "Michał Kowalczyk"
  ],
  "jobs": [
    "Programista",
    "Specjalista marketingu",
    "Nauczyciel",
    "Księgowy",
    "Lekarz"
  ],
  "campus": [
    "University of Warsaw",
    "Jagiellonian University",
    "AGH University"
  ]
}
</script>
