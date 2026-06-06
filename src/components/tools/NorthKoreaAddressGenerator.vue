<template>
  <CountryAddressGenerator tool-id="north-korea-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NorthKoreaAddressGeneratorArticle from './NorthKoreaAddressGeneratorArticle.vue'

const articleComponent = NorthKoreaAddressGeneratorArticle

const countryConfig = {
  "slug": "north-korea-address-generator",
  "display": "North Korea",
  "phoneCode": "850",
  "timezone": "Asia/Pyongyang",
  "currency": "KPW",
  "locale": "ko-KP",
  "postalPattern": "######",
  "regions": [
    {
      "code": "PY",
      "name": "Pyongyang",
      "districts": [
        "Central District",
        "Moranbong",
        "Taedonggang"
      ]
    },
    {
      "code": "SP",
      "name": "South Pyongan",
      "districts": [
        "Pyongsong",
        "Anju",
        "Sunchon"
      ]
    },
    {
      "code": "HB",
      "name": "North Hamgyong",
      "districts": [
        "Chongjin",
        "Hoeryong",
        "Kimchaek"
      ]
    }
  ],
  "streets": [
    "Sungri Street",
    "Kwangbok Street",
    "Mirae Scientists Street",
    "Changjon Street",
    "Tongil Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Kim Chol",
    "Pak Mi Yong",
    "Ri Jun Ho",
    "Choe Sun Hui",
    "Han Yong Su"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Kim Il Sung University",
    "Kim Chaek University of Technology",
    "Pyongyang University of Architecture"
  ]
}
</script>
