<template>
  <CountryAddressGenerator tool-id="bosnia-and-herzegovina-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BosniaAndHerzegovinaAddressGeneratorArticle from './BosniaAndHerzegovinaAddressGeneratorArticle.vue'

const articleComponent = BosniaAndHerzegovinaAddressGeneratorArticle

const countryConfig = {
  "slug": "bosnia-and-herzegovina-address-generator",
  "display": "Bosnia and Herzegovina",
  "phoneCode": "387",
  "timezone": "Europe/Sarajevo",
  "currency": "BAM",
  "locale": "bs-BA",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "SA",
      "name": "Sarajevo Canton",
      "districts": [
        "Sarajevo",
        "Ilidža",
        "Vogošća"
      ]
    },
    {
      "code": "TK",
      "name": "Tuzla Canton",
      "districts": [
        "Tuzla",
        "Lukavac",
        "Živinice"
      ]
    },
    {
      "code": "RS",
      "name": "Republika Srpska",
      "districts": [
        "Banja Luka",
        "Bijeljina",
        "Prijedor"
      ]
    },
    {
      "code": "HN",
      "name": "Herzegovina-Neretva Canton",
      "districts": [
        "Mostar",
        "Čapljina",
        "Konjic"
      ]
    },
    {
      "code": "ZDK",
      "name": "Zenica-Doboj Canton",
      "districts": [
        "Zenica",
        "Doboj",
        "Tešanj"
      ]
    }
  ],
  "streets": [
    "Zmaja od Bosne",
    "Titova ulica",
    "Ferhadija",
    "Maršala Tita",
    "Kralja Tvrtka"
  ],
  "buildings": [
    "Stan",
    "Poslovni Centar",
    "Zgrada",
    "Rezidencija",
    "Kuća"
  ],
  "names": [
    "Amar Hodžić",
    "Lejla Džafić",
    "Emir Begić",
    "Amina Kovač",
    "Mirza Softić"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Tourism Manager"
  ],
  "campus": [
    "University of Sarajevo",
    "University of Banja Luka",
    "University of Mostar"
  ]
}
</script>
