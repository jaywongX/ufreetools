<template>
  <CountryAddressGenerator tool-id="panama-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import PanamaAddressGeneratorArticle from './PanamaAddressGeneratorArticle.vue'

const articleComponent = PanamaAddressGeneratorArticle

const countryConfig = {
  "slug": "panama-address-generator",
  "display": "Panama",
  "phoneCode": "507",
  "timezone": "America/Panama",
  "currency": "PAB",
  "locale": "es-PA",
  "postalPattern": "####",
  "regions": [
    {
      "code": "PAN",
      "name": "Panama",
      "districts": [
        "Panama City",
        "San Miguelito",
        "Tocumen"
      ]
    },
    {
      "code": "CHO",
      "name": "Chiriqui",
      "districts": [
        "David",
        "Boquete",
        "Bugaba"
      ]
    },
    {
      "code": "COL",
      "name": "Colon",
      "districts": [
        "Colon",
        "Cristobal",
        "Sabanitas"
      ]
    }
  ],
  "streets": [
    "Avenida Balboa",
    "Via Espana",
    "Calle 50",
    "Avenida Central",
    "Via Argentina"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Ricardo Perez",
    "Valeria Castillo",
    "Javier Navarro",
    "Camila Vega",
    "Luis Batista"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Panama",
    "Technological University of Panama",
    "Santa Maria La Antigua Catholic University"
  ]
}
</script>
