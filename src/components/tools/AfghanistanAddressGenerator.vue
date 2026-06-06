<template>
  <CountryAddressGenerator tool-id="afghanistan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AfghanistanAddressGeneratorArticle from './AfghanistanAddressGeneratorArticle.vue'

const articleComponent = AfghanistanAddressGeneratorArticle

const countryConfig = {
  "slug": "afghanistan-address-generator",
  "display": "Afghanistan",
  "phoneCode": "93",
  "timezone": "Asia/Kabul",
  "currency": "AFN",
  "locale": "fa-AF",
  "postalPattern": "####",
  "regions": [
    {
      "code": "KAB",
      "name": "Kabul Province",
      "districts": [
        "Kabul",
        "Paghman",
        "Bagrami"
      ]
    },
    {
      "code": "HER",
      "name": "Herat Province",
      "districts": [
        "Herat",
        "Guzara",
        "Injil"
      ]
    },
    {
      "code": "BAL",
      "name": "Balkh Province",
      "districts": [
        "Mazar-i-Sharif",
        "Balkh",
        "Khulm"
      ]
    }
  ],
  "streets": [
    "Darul Aman Road",
    "Jade Maiwand",
    "Chicken Street",
    "Airport Road",
    "Pul-e-Surkh Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ahmad Rahimi",
    "Fatima Noori",
    "Farid Ahmadi",
    "Laila Karimi",
    "Omar Safi"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Kabul University",
    "Herat University",
    "Balkh University"
  ]
}
</script>
