<template>
  <CountryAddressGenerator tool-id="belarus-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BelarusAddressGeneratorArticle from './BelarusAddressGeneratorArticle.vue'

const articleComponent = BelarusAddressGeneratorArticle

const countryConfig = {
  "slug": "belarus-address-generator",
  "display": "Belarus",
  "phoneCode": "375",
  "timezone": "Europe/Minsk",
  "currency": "BYN",
  "locale": "be-BY",
  "postalPattern": "######",
  "regions": [
    {
      "code": "MI",
      "name": "Minsk Region",
      "districts": [
        "Minsk",
        "Barysaw",
        "Maladzyechna"
      ]
    },
    {
      "code": "BR",
      "name": "Brest Region",
      "districts": [
        "Brest",
        "Baranavichy",
        "Pinsk"
      ]
    },
    {
      "code": "VI",
      "name": "Vitebsk Region",
      "districts": [
        "Vitebsk",
        "Orsha",
        "Polotsk"
      ]
    },
    {
      "code": "GO",
      "name": "Gomel Region",
      "districts": [
        "Gomel",
        "Mazyr",
        "Rechytsa"
      ]
    },
    {
      "code": "GR",
      "name": "Grodno Region",
      "districts": [
        "Grodno",
        "Lida",
        "Slonim"
      ]
    }
  ],
  "streets": [
    "Prospekt Nezavisimosti",
    "Lenina Street",
    "Sovetskaya Street",
    "Pushkina Street",
    "Kirova Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Aliaksei Ivanov",
    "Natallia Kovalenko",
    "Dmitry Petrov",
    "Hanna Sokolova",
    "Maksim Melnik"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Sales Manager"
  ],
  "campus": [
    "Belarusian State University",
    "Belarusian National Technical University",
    "Minsk State Linguistic University"
  ]
}
</script>
