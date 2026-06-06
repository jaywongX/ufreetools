<template>
  <CountryAddressGenerator tool-id="israel-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import IsraelAddressGeneratorArticle from './IsraelAddressGeneratorArticle.vue'

const articleComponent = IsraelAddressGeneratorArticle

const countryConfig = {
  "slug": "israel-address-generator",
  "display": "Israel",
  "phoneCode": "972",
  "timezone": "Asia/Jerusalem",
  "currency": "₪",
  "locale": "en-IL",
  "postalPattern": "#######",
  "regions": [
    {
      "code": "TA",
      "name": "Tel Aviv District",
      "districts": [
        "Tel Aviv-Yafo",
        "Ramat Gan",
        "Holon"
      ]
    },
    {
      "code": "JM",
      "name": "Jerusalem District",
      "districts": [
        "Jerusalem",
        "Mevaseret Zion"
      ]
    },
    {
      "code": "HA",
      "name": "Haifa District",
      "districts": [
        "Haifa",
        "Kiryat Ata",
        "Nesher"
      ]
    },
    {
      "code": "CE",
      "name": "Central District",
      "districts": [
        "Petah Tikva",
        "Netanya",
        "Rehovot"
      ]
    },
    {
      "code": "SO",
      "name": "Southern District",
      "districts": [
        "Beersheba",
        "Ashdod",
        "Eilat"
      ]
    }
  ],
  "streets": [
    "Dizengoff Street",
    "Rothschild Boulevard",
    "Herzl Street",
    "Jaffa Road",
    "Ben Yehuda Street",
    "Weizmann Street"
  ],
  "buildings": [
    "Apartment",
    "Tower",
    "House",
    "Center",
    "Residence",
    "Complex"
  ],
  "names": [
    "David Cohen",
    "Yael Levi",
    "Noam Mizrahi",
    "Tamar Peretz",
    "Eitan Katz"
  ],
  "jobs": [
    "Software Engineer",
    "Product Manager",
    "Researcher",
    "Teacher",
    "Doctor"
  ],
  "campus": [
    "Hebrew University of Jerusalem",
    "Tel Aviv University",
    "Technion"
  ]
}
</script>
