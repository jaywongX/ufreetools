<template>
  <CountryAddressGenerator tool-id="syria-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SyriaAddressGeneratorArticle from './SyriaAddressGeneratorArticle.vue'

const articleComponent = SyriaAddressGeneratorArticle

const countryConfig = {
  "slug": "syria-address-generator",
  "display": "Syria",
  "phoneCode": "963",
  "timezone": "Asia/Damascus",
  "currency": "SYP",
  "locale": "ar-SY",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "DAM",
      "name": "Damascus Governorate",
      "districts": [
        "Damascus",
        "Mezzeh",
        "Baramkeh"
      ]
    },
    {
      "code": "ALE",
      "name": "Aleppo Governorate",
      "districts": [
        "Aleppo",
        "Azaz",
        "Al-Bab"
      ]
    },
    {
      "code": "HOM",
      "name": "Homs Governorate",
      "districts": [
        "Homs",
        "Talkalakh",
        "Al-Qusayr"
      ]
    }
  ],
  "streets": [
    "Shukri al-Quwatli Street",
    "Baghdad Street",
    "Mezzeh Autostrade",
    "Al-Hamra Street",
    "Baron Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ahmad Darwish",
    "Rana Haddad",
    "Khaled Nasser",
    "Maya Saleh",
    "Samer Khalil"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Damascus University",
    "University of Aleppo",
    "Tishreen University"
  ]
}
</script>
