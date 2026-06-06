<template>
  <CountryAddressGenerator tool-id="bahrain-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BahrainAddressGeneratorArticle from './BahrainAddressGeneratorArticle.vue'

const articleComponent = BahrainAddressGeneratorArticle

const countryConfig = {
  "slug": "bahrain-address-generator",
  "display": "Bahrain",
  "phoneCode": "973",
  "timezone": "Asia/Bahrain",
  "currency": "BHD",
  "locale": "ar-BH",
  "postalPattern": "####",
  "regions": [
    {
      "code": "CAP",
      "name": "Capital Governorate",
      "districts": [
        "Manama",
        "Juffair",
        "Seef"
      ]
    },
    {
      "code": "MUH",
      "name": "Muharraq Governorate",
      "districts": [
        "Muharraq",
        "Busaiteen",
        "Amwaj Islands"
      ]
    },
    {
      "code": "NOR",
      "name": "Northern Governorate",
      "districts": [
        "Budaiya",
        "Saar",
        "Hamad Town"
      ]
    }
  ],
  "streets": [
    "Government Avenue",
    "Exhibition Avenue",
    "Shaikh Salman Avenue",
    "Road 2803",
    "Al Fateh Highway"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Hamad Al Khalifa",
    "Noora Al Zayani",
    "Ali Al Haddad",
    "Mariam Al Sayed",
    "Yusuf Al Doseri"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Bahrain",
    "Arabian Gulf University",
    "Ahlia University"
  ]
}
</script>
