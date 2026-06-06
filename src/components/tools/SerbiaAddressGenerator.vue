<template>
  <CountryAddressGenerator tool-id="serbia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SerbiaAddressGeneratorArticle from './SerbiaAddressGeneratorArticle.vue'

const articleComponent = SerbiaAddressGeneratorArticle

const countryConfig = {
  "slug": "serbia-address-generator",
  "display": "Serbia",
  "phoneCode": "381",
  "timezone": "Europe/Belgrade",
  "currency": "RSD",
  "locale": "sr-RS",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "BG",
      "name": "Belgrade District",
      "districts": [
        "Belgrade",
        "Zemun",
        "New Belgrade"
      ]
    },
    {
      "code": "NS",
      "name": "South Bačka District",
      "districts": [
        "Novi Sad",
        "Bačka Palanka",
        "Vrbas"
      ]
    },
    {
      "code": "NI",
      "name": "Nišava District",
      "districts": [
        "Niš",
        "Aleksinac",
        "Svrljig"
      ]
    },
    {
      "code": "SU",
      "name": "North Bačka District",
      "districts": [
        "Subotica",
        "Bačka Topola"
      ]
    },
    {
      "code": "RA",
      "name": "Raška District",
      "districts": [
        "Kraljevo",
        "Novi Pazar"
      ]
    }
  ],
  "streets": [
    "Knez Mihailova",
    "Bulevar kralja Aleksandra",
    "Terazije",
    "Njegoševa",
    "Bulevar oslobođenja"
  ],
  "buildings": [
    "Stan",
    "Poslovni Centar",
    "Zgrada",
    "Rezidencija",
    "Kuća"
  ],
  "names": [
    "Miloš Petrović",
    "Jelena Jovanović",
    "Nikola Nikolić",
    "Ana Ilić",
    "Marko Đorđević"
  ],
  "jobs": [
    "Software Developer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Belgrade",
    "University of Novi Sad",
    "University of Niš"
  ]
}
</script>
