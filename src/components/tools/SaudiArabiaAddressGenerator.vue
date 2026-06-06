<template>
  <CountryAddressGenerator tool-id="saudi-arabia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SaudiArabiaAddressGeneratorArticle from './SaudiArabiaAddressGeneratorArticle.vue'

const articleComponent = SaudiArabiaAddressGeneratorArticle

const countryConfig = {
  "slug": "saudi-arabia-address-generator",
  "display": "Saudi Arabia",
  "phoneCode": "966",
  "timezone": "Asia/Riyadh",
  "currency": "SAR",
  "locale": "en-SA",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "RYD",
      "name": "Riyadh Province",
      "districts": [
        "Riyadh",
        "Al Kharj",
        "Diriyah"
      ]
    },
    {
      "code": "MAK",
      "name": "Makkah Province",
      "districts": [
        "Jeddah",
        "Makkah",
        "Taif"
      ]
    },
    {
      "code": "EAS",
      "name": "Eastern Province",
      "districts": [
        "Dammam",
        "Khobar",
        "Dhahran"
      ]
    },
    {
      "code": "MAD",
      "name": "Madinah Province",
      "districts": [
        "Madinah",
        "Yanbu"
      ]
    },
    {
      "code": "QSM",
      "name": "Al Qassim",
      "districts": [
        "Buraydah",
        "Unaizah"
      ]
    }
  ],
  "streets": [
    "King Fahd Road",
    "Prince Sultan Road",
    "Olaya Street",
    "Tahlia Street",
    "King Abdulaziz Road",
    "Corniche Road"
  ],
  "buildings": [
    "Villa",
    "Tower",
    "Center",
    "Compound",
    "Plaza",
    "Residence"
  ],
  "names": [
    "Ahmed Al-Harbi",
    "Fatimah Al-Qahtani",
    "Mohammed Al-Otaibi",
    "Sara Al-Dossari",
    "Khalid Al-Shehri"
  ],
  "jobs": [
    "Engineer",
    "Finance Analyst",
    "Teacher",
    "Doctor",
    "Operations Manager"
  ],
  "campus": [
    "King Saud University",
    "King Abdulaziz University",
    "King Fahd University"
  ]
}
</script>
