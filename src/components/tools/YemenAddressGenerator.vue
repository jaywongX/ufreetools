<template>
  <CountryAddressGenerator tool-id="yemen-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import YemenAddressGeneratorArticle from './YemenAddressGeneratorArticle.vue'

const articleComponent = YemenAddressGeneratorArticle

const countryConfig = {
  "slug": "yemen-address-generator",
  "display": "Yemen",
  "phoneCode": "967",
  "timezone": "Asia/Aden",
  "currency": "YER",
  "locale": "ar-YE",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "SAN",
      "name": "Sana’a Governorate",
      "districts": [
        "Sana’a",
        "Bani Hushaysh",
        "Arhab"
      ]
    },
    {
      "code": "ADE",
      "name": "Aden Governorate",
      "districts": [
        "Aden",
        "Crater",
        "Al Mansura"
      ]
    },
    {
      "code": "TAI",
      "name": "Taiz Governorate",
      "districts": [
        "Taiz",
        "Al Qahirah",
        "Salah"
      ]
    }
  ],
  "streets": [
    "Zubayri Street",
    "Hadda Street",
    "Sixty Meter Road",
    "Airport Road",
    "Al Qasr Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Abdullah Al-Hakimi",
    "Amina Al-Sabri",
    "Fahd Al-Mansouri",
    "Huda Al-Amri",
    "Nabil Al-Yafei"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Sana’a University",
    "University of Aden",
    "Taiz University"
  ]
}
</script>
