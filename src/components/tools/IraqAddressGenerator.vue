<template>
  <CountryAddressGenerator tool-id="iraq-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import IraqAddressGeneratorArticle from './IraqAddressGeneratorArticle.vue'

const articleComponent = IraqAddressGeneratorArticle

const countryConfig = {
  "slug": "iraq-address-generator",
  "display": "Iraq",
  "phoneCode": "964",
  "timezone": "Asia/Baghdad",
  "currency": "IQD",
  "locale": "ar-IQ",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "BGD",
      "name": "Baghdad Governorate",
      "districts": [
        "Baghdad",
        "Karrada",
        "Mansour"
      ]
    },
    {
      "code": "BSR",
      "name": "Basra Governorate",
      "districts": [
        "Basra",
        "Zubair",
        "Qurna"
      ]
    },
    {
      "code": "NIN",
      "name": "Nineveh Governorate",
      "districts": [
        "Mosul",
        "Hamdaniya",
        "Tal Afar"
      ]
    }
  ],
  "streets": [
    "Abu Nuwas Street",
    "Al-Rasheed Street",
    "Palestine Street",
    "Karrada Street",
    "University Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Hassan Al-Janabi",
    "Zainab Al-Saadi",
    "Omar Al-Tamimi",
    "Noor Al-Hadithi",
    "Ali Al-Karim"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Baghdad",
    "University of Basrah",
    "University of Mosul"
  ]
}
</script>
