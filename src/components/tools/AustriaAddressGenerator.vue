<template>
  <CountryAddressGenerator tool-id="austria-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AustriaAddressGeneratorArticle from './AustriaAddressGeneratorArticle.vue'

const articleComponent = AustriaAddressGeneratorArticle

const countryConfig = {
  "slug": "austria-address-generator",
  "display": "Austria",
  "phoneCode": "43",
  "timezone": "Europe/Vienna",
  "currency": "€",
  "locale": "de-AT",
  "postalPattern": "####",
  "regions": [
    {
      "code": "WIE",
      "name": "Vienna",
      "districts": [
        "Vienna"
      ]
    },
    {
      "code": "OOE",
      "name": "Upper Austria",
      "districts": [
        "Linz",
        "Wels",
        "Steyr"
      ]
    },
    {
      "code": "STY",
      "name": "Styria",
      "districts": [
        "Graz",
        "Leoben",
        "Kapfenberg"
      ]
    },
    {
      "code": "SAL",
      "name": "Salzburg",
      "districts": [
        "Salzburg",
        "Hallein"
      ]
    },
    {
      "code": "TIR",
      "name": "Tyrol",
      "districts": [
        "Innsbruck",
        "Kufstein"
      ]
    }
  ],
  "streets": [
    "Kärntner Straße",
    "Mariahilfer Straße",
    "Ringstraße",
    "Hauptplatz",
    "Bahnhofstraße",
    "Landstraße"
  ],
  "buildings": [
    "Wohnhaus",
    "Büro",
    "Zentrum",
    "Apartment",
    "Haus",
    "Residenz"
  ],
  "names": [
    "Lukas Gruber",
    "Anna Huber",
    "Maximilian Bauer",
    "Sophie Wagner",
    "David Steiner"
  ],
  "jobs": [
    "Softwareentwickler",
    "Marketingmanager",
    "Lehrer",
    "Buchhalter",
    "Arzt"
  ],
  "campus": [
    "University of Vienna",
    "TU Wien",
    "University of Graz"
  ]
}
</script>
