<template>
  <CountryAddressGenerator tool-id="uzbekistan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import UzbekistanAddressGeneratorArticle from './UzbekistanAddressGeneratorArticle.vue'

const articleComponent = UzbekistanAddressGeneratorArticle

const countryConfig = {
  "slug": "uzbekistan-address-generator",
  "display": "Uzbekistan",
  "phoneCode": "998",
  "timezone": "Asia/Tashkent",
  "currency": "UZS",
  "locale": "uz-UZ",
  "postalPattern": "######",
  "regions": [
    {
      "code": "TS",
      "name": "Tashkent City",
      "districts": [
        "Tashkent",
        "Yunusabad",
        "Chilanzar"
      ]
    },
    {
      "code": "SA",
      "name": "Samarkand Region",
      "districts": [
        "Samarkand",
        "Urgut",
        "Kattakurgan"
      ]
    },
    {
      "code": "FA",
      "name": "Fergana Region",
      "districts": [
        "Fergana",
        "Kokand",
        "Margilan"
      ]
    }
  ],
  "streets": [
    "Amir Temur Avenue",
    "Mustaqillik Avenue",
    "Navoi Street",
    "Shota Rustaveli Street",
    "Buyuk Ipak Yuli Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Aziz Karimov",
    "Dilnoza Tursunova",
    "Jahongir Ahmedov",
    "Malika Saidova",
    "Bekzod Rasulov"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "National University of Uzbekistan",
    "Tashkent State Technical University",
    "Samarkand State University"
  ]
}
</script>
