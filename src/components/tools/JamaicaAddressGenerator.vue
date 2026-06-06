<template>
  <CountryAddressGenerator tool-id="jamaica-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import JamaicaAddressGeneratorArticle from './JamaicaAddressGeneratorArticle.vue'

const articleComponent = JamaicaAddressGeneratorArticle

const countryConfig = {
  "slug": "jamaica-address-generator",
  "display": "Jamaica",
  "phoneCode": "1-876",
  "timezone": "America/Jamaica",
  "currency": "JMD",
  "locale": "en-JM",
  "postalPattern": "##",
  "regions": [
    {
      "code": "KIN",
      "name": "Kingston",
      "districts": [
        "Kingston",
        "New Kingston",
        "Half Way Tree"
      ]
    },
    {
      "code": "STJ",
      "name": "Saint James",
      "districts": [
        "Montego Bay",
        "Ironshore",
        "Rose Hall"
      ]
    },
    {
      "code": "MAN",
      "name": "Manchester",
      "districts": [
        "Mandeville",
        "Christiana",
        "Porus"
      ]
    }
  ],
  "streets": [
    "Hope Road",
    "Constant Spring Road",
    "Half Way Tree Road",
    "Knutsford Boulevard",
    "Harbour Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Andre Campbell",
    "Shanice Brown",
    "Dwayne Thompson",
    "Nadia Clarke",
    "Ricardo Davis"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of the West Indies Mona",
    "University of Technology Jamaica",
    "Northern Caribbean University"
  ]
}
</script>
