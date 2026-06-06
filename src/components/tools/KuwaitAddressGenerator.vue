<template>
  <CountryAddressGenerator tool-id="kuwait-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import KuwaitAddressGeneratorArticle from './KuwaitAddressGeneratorArticle.vue'

const articleComponent = KuwaitAddressGeneratorArticle

const countryConfig = {
  "slug": "kuwait-address-generator",
  "display": "Kuwait",
  "phoneCode": "965",
  "timezone": "Asia/Kuwait",
  "currency": "KWD",
  "locale": "ar-KW",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "CAP",
      "name": "Capital Governorate",
      "districts": [
        "Kuwait City",
        "Sharq",
        "Dasman"
      ]
    },
    {
      "code": "HAW",
      "name": "Hawalli Governorate",
      "districts": [
        "Hawalli",
        "Salmiya",
        "Jabriya"
      ]
    },
    {
      "code": "AHM",
      "name": "Al Ahmadi Governorate",
      "districts": [
        "Ahmadi",
        "Fahaheel",
        "Mangaf"
      ]
    }
  ],
  "streets": [
    "Gulf Road",
    "Salem Al Mubarak Street",
    "Arabian Gulf Street",
    "Ahmad Al Jaber Street",
    "Beirut Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Abdullah Al-Sabah",
    "Maha Al-Ajmi",
    "Fahad Al-Rashid",
    "Noura Al-Mutairi",
    "Jassim Al-Khaled"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Kuwait University",
    "Gulf University for Science and Technology",
    "American University of Kuwait"
  ]
}
</script>
