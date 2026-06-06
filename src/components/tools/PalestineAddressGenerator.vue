<template>
  <CountryAddressGenerator tool-id="palestine-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import PalestineAddressGeneratorArticle from './PalestineAddressGeneratorArticle.vue'

const articleComponent = PalestineAddressGeneratorArticle

const countryConfig = {
  "slug": "palestine-address-generator",
  "display": "Palestine",
  "phoneCode": "970",
  "timezone": "Asia/Gaza",
  "currency": "ILS",
  "locale": "ar-PS",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "RAM",
      "name": "Ramallah and Al-Bireh",
      "districts": [
        "Ramallah",
        "Al-Bireh",
        "Beitunia"
      ]
    },
    {
      "code": "JER",
      "name": "Jerusalem Governorate",
      "districts": [
        "East Jerusalem",
        "Abu Dis",
        "Al-Eizariya"
      ]
    },
    {
      "code": "GAZ",
      "name": "Gaza Governorate",
      "districts": [
        "Gaza City",
        "Al-Rimal",
        "Shuja’iyya"
      ]
    }
  ],
  "streets": [
    "Al-Manara Street",
    "Omar Al-Mukhtar Street",
    "Salah al-Din Street",
    "Irsal Street",
    "Al-Quds Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Mahmoud Nasser",
    "Lina Khalil",
    "Omar Barghouti",
    "Mariam Saleh",
    "Yousef Darwish"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Birzeit University",
    "An-Najah National University",
    "Islamic University of Gaza"
  ]
}
</script>
