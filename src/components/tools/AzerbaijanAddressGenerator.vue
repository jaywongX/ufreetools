<template>
  <CountryAddressGenerator tool-id="azerbaijan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AzerbaijanAddressGeneratorArticle from './AzerbaijanAddressGeneratorArticle.vue'

const articleComponent = AzerbaijanAddressGeneratorArticle

const countryConfig = {
  "slug": "azerbaijan-address-generator",
  "display": "Azerbaijan",
  "phoneCode": "994",
  "timezone": "Asia/Baku",
  "currency": "AZN",
  "locale": "az-AZ",
  "postalPattern": "AZ ####",
  "regions": [
    {
      "code": "BAK",
      "name": "Baku",
      "districts": [
        "Yasamal",
        "Nasimi",
        "Nizami"
      ]
    },
    {
      "code": "GAN",
      "name": "Ganja-Dashkasan",
      "districts": [
        "Ganja",
        "Dashkasan",
        "Samukh"
      ]
    },
    {
      "code": "ABS",
      "name": "Absheron-Khizi",
      "districts": [
        "Sumqayit",
        "Khirdalan",
        "Khizi"
      ]
    }
  ],
  "streets": [
    "Nizami Street",
    "Neftchilar Avenue",
    "Tbilisi Avenue",
    "Istiglaliyyat Street",
    "Fuzuli Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ali Mammadov",
    "Leyla Aliyeva",
    "Rashad Huseynov",
    "Aysel Karimova",
    "Elvin Guliyev"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Baku State University",
    "Azerbaijan Technical University",
    "ADA University"
  ]
}
</script>
