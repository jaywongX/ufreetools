<template>
  <CountryAddressGenerator tool-id="andorra-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AndorraAddressGeneratorArticle from './AndorraAddressGeneratorArticle.vue'

const articleComponent = AndorraAddressGeneratorArticle

const countryConfig = {
  "slug": "andorra-address-generator",
  "display": "Andorra",
  "phoneCode": "376",
  "timezone": "Europe/Andorra",
  "currency": "€",
  "locale": "ca-AD",
  "postalPattern": "AD###",
  "regions": [
    {
      "code": "ALV",
      "name": "Andorra la Vella",
      "districts": [
        "Andorra la Vella",
        "Santa Coloma"
      ]
    },
    {
      "code": "ESC",
      "name": "Escaldes-Engordany",
      "districts": [
        "Escaldes-Engordany",
        "Engordany"
      ]
    },
    {
      "code": "ENC",
      "name": "Encamp",
      "districts": [
        "Encamp",
        "Pas de la Casa"
      ]
    },
    {
      "code": "MAS",
      "name": "La Massana",
      "districts": [
        "La Massana",
        "Arinsal"
      ]
    },
    {
      "code": "ORD",
      "name": "Ordino",
      "districts": [
        "Ordino",
        "El Serrat"
      ]
    }
  ],
  "streets": [
    "Avinguda Meritxell",
    "Avinguda Carlemany",
    "Carrer Prat de la Creu",
    "Carrer de la Unió",
    "Avinguda del Fener"
  ],
  "buildings": [
    "Edifici",
    "Apartament",
    "Residència",
    "Centre",
    "Casa"
  ],
  "names": [
    "Marc Riba",
    "Laura Pujol",
    "Jordi Torres",
    "Marta Font",
    "Pere Vidal"
  ],
  "jobs": [
    "Hotel Manager",
    "Retail Manager",
    "Teacher",
    "Accountant",
    "Developer"
  ],
  "campus": [
    "University of Andorra",
    "Escola Andorrana",
    "Centre de Formació Professional"
  ]
}
</script>
