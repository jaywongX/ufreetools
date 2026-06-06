<template>
  <CountryAddressGenerator tool-id="iran-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import IranAddressGeneratorArticle from './IranAddressGeneratorArticle.vue'

const articleComponent = IranAddressGeneratorArticle

const countryConfig = {
  "slug": "iran-address-generator",
  "display": "Iran",
  "phoneCode": "98",
  "timezone": "Asia/Tehran",
  "currency": "IRR",
  "locale": "fa-IR",
  "postalPattern": "##########",
  "regions": [
    {
      "code": "TEH",
      "name": "Tehran Province",
      "districts": [
        "Tehran",
        "Rey",
        "Shemiranat"
      ]
    },
    {
      "code": "ISF",
      "name": "Isfahan Province",
      "districts": [
        "Isfahan",
        "Kashan",
        "Najafabad"
      ]
    },
    {
      "code": "FRS",
      "name": "Fars Province",
      "districts": [
        "Shiraz",
        "Marvdasht",
        "Jahrom"
      ]
    }
  ],
  "streets": [
    "Valiasr Street",
    "Enghelab Street",
    "Shariati Street",
    "Azadi Avenue",
    "Ferdowsi Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ali Rezaei",
    "Sara Hosseini",
    "Mehdi Ahmadi",
    "Neda Karimi",
    "Hossein Moradi"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Tehran",
    "Sharif University of Technology",
    "Isfahan University of Technology"
  ]
}
</script>
