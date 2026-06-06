<template>
  <CountryAddressGenerator tool-id="antigua-and-barbuda-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import AntiguaAndBarbudaAddressGeneratorArticle from './AntiguaAndBarbudaAddressGeneratorArticle.vue'

const articleComponent = AntiguaAndBarbudaAddressGeneratorArticle

const countryConfig = {
  "slug": "antigua-and-barbuda-address-generator",
  "display": "Antigua and Barbuda",
  "phoneCode": "1-268",
  "timezone": "America/Antigua",
  "currency": "XCD",
  "locale": "en-AG",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "SJ",
      "name": "Saint John",
      "districts": [
        "St. John's",
        "Cedar Grove",
        "Potters Village"
      ]
    },
    {
      "code": "SM",
      "name": "Saint Mary",
      "districts": [
        "Bolans",
        "Johnson Point",
        "Urlings"
      ]
    },
    {
      "code": "BA",
      "name": "Barbuda",
      "districts": [
        "Codrington",
        "Spanish Point",
        "Two Foot Bay"
      ]
    }
  ],
  "streets": [
    "High Street",
    "Market Street",
    "Friars Hill Road",
    "Old Parham Road",
    "All Saints Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Jason Williams",
    "Keisha Joseph",
    "Marcus Benjamin",
    "Aaliyah Francis",
    "Trevor James"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of the West Indies Five Islands",
    "Antigua State College",
    "American University of Antigua"
  ]
}
</script>
