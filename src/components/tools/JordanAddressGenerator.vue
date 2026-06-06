<template>
  <CountryAddressGenerator tool-id="jordan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import JordanAddressGeneratorArticle from './JordanAddressGeneratorArticle.vue'

const articleComponent = JordanAddressGeneratorArticle

const countryConfig = {
  "slug": "jordan-address-generator",
  "display": "Jordan",
  "phoneCode": "962",
  "timezone": "Asia/Amman",
  "currency": "JOD",
  "locale": "ar-JO",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "AMM",
      "name": "Amman Governorate",
      "districts": [
        "Amman",
        "Sweifieh",
        "Jabal Amman"
      ]
    },
    {
      "code": "IRB",
      "name": "Irbid Governorate",
      "districts": [
        "Irbid",
        "Ramtha",
        "Mafraq"
      ]
    },
    {
      "code": "AQB",
      "name": "Aqaba Governorate",
      "districts": [
        "Aqaba",
        "Wadi Araba",
        "Quweira"
      ]
    }
  ],
  "streets": [
    "Rainbow Street",
    "Mecca Street",
    "Queen Rania Street",
    "Zahran Street",
    "Wasfi Al Tal Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Yousef Haddad",
    "Rania Nasser",
    "Omar Khouri",
    "Lina Mansour",
    "Khaled Saleh"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Jordan",
    "Jordan University of Science and Technology",
    "German Jordanian University"
  ]
}
</script>
