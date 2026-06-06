<template>
  <CountryAddressGenerator tool-id="albania-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AlbaniaAddressGeneratorArticle from './AlbaniaAddressGeneratorArticle.vue'

const articleComponent = AlbaniaAddressGeneratorArticle

const countryConfig = {
  "slug": "albania-address-generator",
  "display": "Albania",
  "phoneCode": "355",
  "timezone": "Europe/Tirane",
  "currency": "ALL",
  "locale": "sq-AL",
  "postalPattern": "####",
  "regions": [
    {
      "code": "TR",
      "name": "Tirana County",
      "districts": [
        "Tirana",
        "Kamëz",
        "Vorë"
      ]
    },
    {
      "code": "DR",
      "name": "Durrës County",
      "districts": [
        "Durrës",
        "Shijak",
        "Krujë"
      ]
    },
    {
      "code": "VL",
      "name": "Vlorë County",
      "districts": [
        "Vlorë",
        "Sarandë",
        "Himarë"
      ]
    },
    {
      "code": "SH",
      "name": "Shkodër County",
      "districts": [
        "Shkodër",
        "Malësi e Madhe",
        "Vau i Dejës"
      ]
    },
    {
      "code": "KO",
      "name": "Korçë County",
      "districts": [
        "Korçë",
        "Pogradec",
        "Devoll"
      ]
    }
  ],
  "streets": [
    "Rruga e Durrësit",
    "Bulevardi Dëshmorët e Kombit",
    "Rruga Myslym Shyri",
    "Rruga Kavajës",
    "Rruga Skënderbej"
  ],
  "buildings": [
    "Apartament",
    "Qendër Biznesi",
    "Pallat",
    "Rezidencë",
    "Kullë"
  ],
  "names": [
    "Arben Hoxha",
    "Elira Kola",
    "Dritan Leka",
    "Mira Dervishi",
    "Besnik Meta"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Tirana",
    "Polytechnic University of Tirana",
    "Epoka University"
  ]
}
</script>
