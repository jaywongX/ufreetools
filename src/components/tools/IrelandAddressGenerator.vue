<template>
  <CountryAddressGenerator tool-id="ireland-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import IrelandAddressGeneratorArticle from './IrelandAddressGeneratorArticle.vue'

const articleComponent = IrelandAddressGeneratorArticle

const countryConfig = {
  "slug": "ireland-address-generator",
  "display": "Ireland",
  "phoneCode": "353",
  "timezone": "Europe/Dublin",
  "currency": "€",
  "locale": "en-IE",
  "postalPattern": "A## XXXX",
  "regions": [
    {
      "code": "LEN",
      "name": "Leinster",
      "districts": [
        "Dublin",
        "Kildare",
        "Wicklow",
        "Meath"
      ]
    },
    {
      "code": "MUN",
      "name": "Munster",
      "districts": [
        "Cork",
        "Limerick",
        "Waterford"
      ]
    },
    {
      "code": "CON",
      "name": "Connacht",
      "districts": [
        "Galway",
        "Mayo",
        "Sligo"
      ]
    },
    {
      "code": "ULS",
      "name": "Ulster",
      "districts": [
        "Donegal",
        "Cavan",
        "Monaghan"
      ]
    },
    {
      "code": "DUB",
      "name": "County Dublin",
      "districts": [
        "Dublin City",
        "Dún Laoghaire",
        "Swords"
      ]
    }
  ],
  "streets": [
    "OConnell Street",
    "Grafton Street",
    "Dame Street",
    "Henry Street",
    "Patrick Street",
    "Shop Street"
  ],
  "buildings": [
    "House",
    "Apartments",
    "Business Centre",
    "Court",
    "Terrace",
    "Square"
  ],
  "names": [
    "Sean Murphy",
    "Aoife Kelly",
    "Conor Byrne",
    "Ciara Walsh",
    "Liam OBrien"
  ],
  "jobs": [
    "Software Engineer",
    "Product Manager",
    "Teacher",
    "Accountant",
    "Nurse"
  ],
  "campus": [
    "Trinity College Dublin",
    "University College Dublin",
    "University of Galway"
  ]
}
</script>
