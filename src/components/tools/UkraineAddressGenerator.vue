<template>
  <CountryAddressGenerator tool-id="ukraine-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import UkraineAddressGeneratorArticle from './UkraineAddressGeneratorArticle.vue'

const articleComponent = UkraineAddressGeneratorArticle

const countryConfig = {
  "slug": "ukraine-address-generator",
  "display": "Ukraine",
  "phoneCode": "380",
  "timezone": "Europe/Kyiv",
  "currency": "UAH",
  "locale": "uk-UA",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "KV",
      "name": "Kyiv City",
      "districts": [
        "Kyiv",
        "Podil",
        "Pechersk"
      ]
    },
    {
      "code": "LV",
      "name": "Lviv Oblast",
      "districts": [
        "Lviv",
        "Drohobych",
        "Stryi"
      ]
    },
    {
      "code": "OD",
      "name": "Odesa Oblast",
      "districts": [
        "Odesa",
        "Izmail",
        "Chornomorsk"
      ]
    },
    {
      "code": "KH",
      "name": "Kharkiv Oblast",
      "districts": [
        "Kharkiv",
        "Lozova",
        "Izium"
      ]
    },
    {
      "code": "DN",
      "name": "Dnipro Oblast",
      "districts": [
        "Dnipro",
        "Kryvyi Rih",
        "Kamianske"
      ]
    }
  ],
  "streets": [
    "Khreshchatyk Street",
    "Shevchenko Boulevard",
    "Velyka Vasylkivska Street",
    "Deribasivska Street",
    "Svobody Avenue"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Oleksandr Shevchenko",
    "Olena Kovalenko",
    "Andriy Bondarenko",
    "Iryna Tkachenko",
    "Dmytro Melnyk"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Taras Shevchenko National University of Kyiv",
    "Lviv Polytechnic National University",
    "National Technical University KPI"
  ]
}
</script>
