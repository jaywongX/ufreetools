<template>
  <CountryAddressGenerator tool-id="cuba-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import CubaAddressGeneratorArticle from './CubaAddressGeneratorArticle.vue'

const articleComponent = CubaAddressGeneratorArticle

const countryConfig = {
  "slug": "cuba-address-generator",
  "display": "Cuba",
  "phoneCode": "53",
  "timezone": "America/Havana",
  "currency": "CUP",
  "locale": "es-CU",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "HAV",
      "name": "Havana",
      "districts": [
        "Old Havana",
        "Vedado",
        "Miramar"
      ]
    },
    {
      "code": "SCU",
      "name": "Santiago de Cuba",
      "districts": [
        "Santiago de Cuba",
        "Palma Soriano",
        "Contramaestre"
      ]
    },
    {
      "code": "VCL",
      "name": "Villa Clara",
      "districts": [
        "Santa Clara",
        "Remedios",
        "Caibarien"
      ]
    }
  ],
  "streets": [
    "Paseo del Prado",
    "Calle Obispo",
    "Avenida 23",
    "Calle Linea",
    "Malecon"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Alejandro Perez",
    "Yanet Rodriguez",
    "Miguel Hernandez",
    "Claudia Diaz",
    "Rafael Garcia"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Havana",
    "University of Oriente",
    "Central University Marta Abreu of Las Villas"
  ]
}
</script>
