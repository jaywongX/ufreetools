<template>
  <CountryAddressGenerator tool-id="suriname-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SurinameAddressGeneratorArticle from './SurinameAddressGeneratorArticle.vue'

const articleComponent = SurinameAddressGeneratorArticle

const countryConfig = {
  "slug": "suriname-address-generator",
  "display": "Suriname",
  "phoneCode": "597",
  "timezone": "America/Paramaribo",
  "currency": "SRD",
  "locale": "nl-SR",
  "postalPattern": "######",
  "regions": [
    {
      "code": "PM",
      "name": "Paramaribo",
      "districts": [
        "Paramaribo",
        "Flora",
        "Rainville"
      ]
    },
    {
      "code": "WA",
      "name": "Wanica",
      "districts": [
        "Lelydorp",
        "Domburg",
        "Koewarasan"
      ]
    },
    {
      "code": "NI",
      "name": "Nickerie",
      "districts": [
        "Nieuw Nickerie",
        "Wageningen",
        "Paradise"
      ]
    }
  ],
  "streets": [
    "Waterkant",
    "Dr. Sophie Redmondstraat",
    "Kwattaweg",
    "Jaggernath Lachmonstraat",
    "Grote Combeweg"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Rajiv Ramcharan",
    "Anjali Kartodikromo",
    "Michael Pinas",
    "Soraya Tjon",
    "Dinesh Soekhai"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Anton de Kom University of Suriname",
    "Polytechnic College Suriname",
    "Institute for Graduate Studies and Research"
  ]
}
</script>
