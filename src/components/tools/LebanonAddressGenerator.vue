<template>
  <CountryAddressGenerator tool-id="lebanon-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import LebanonAddressGeneratorArticle from './LebanonAddressGeneratorArticle.vue'

const articleComponent = LebanonAddressGeneratorArticle

const countryConfig = {
  "slug": "lebanon-address-generator",
  "display": "Lebanon",
  "phoneCode": "961",
  "timezone": "Asia/Beirut",
  "currency": "LBP",
  "locale": "ar-LB",
  "postalPattern": "#### ####",
  "regions": [
    {
      "code": "BEY",
      "name": "Beirut Governorate",
      "districts": [
        "Beirut",
        "Achrafieh",
        "Hamra"
      ]
    },
    {
      "code": "ML",
      "name": "Mount Lebanon",
      "districts": [
        "Baabda",
        "Jounieh",
        "Byblos"
      ]
    },
    {
      "code": "NO",
      "name": "North Governorate",
      "districts": [
        "Tripoli",
        "Zgharta",
        "Batroun"
      ]
    }
  ],
  "streets": [
    "Hamra Street",
    "Bliss Street",
    "Gemmayzeh Street",
    "Verdun Street",
    "Corniche Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Karim Haddad",
    "Maya Khoury",
    "Nadim Saad",
    "Lea Mansour",
    "Fadi Tannous"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "American University of Beirut",
    "Lebanese University",
    "Saint Joseph University"
  ]
}
</script>
