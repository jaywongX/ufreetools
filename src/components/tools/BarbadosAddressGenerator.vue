<template>
  <CountryAddressGenerator tool-id="barbados-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BarbadosAddressGeneratorArticle from './BarbadosAddressGeneratorArticle.vue'

const articleComponent = BarbadosAddressGeneratorArticle

const countryConfig = {
  "slug": "barbados-address-generator",
  "display": "Barbados",
  "phoneCode": "1-246",
  "timezone": "America/Barbados",
  "currency": "BBD",
  "locale": "en-BB",
  "postalPattern": "BB#####",
  "regions": [
    {
      "code": "MIC",
      "name": "Saint Michael",
      "districts": [
        "Bridgetown",
        "Wildey",
        "Black Rock"
      ]
    },
    {
      "code": "JAM",
      "name": "Saint James",
      "districts": [
        "Holetown",
        "Paynes Bay",
        "Sandy Lane"
      ]
    },
    {
      "code": "CHR",
      "name": "Christ Church",
      "districts": [
        "Oistins",
        "Worthing",
        "Silver Sands"
      ]
    }
  ],
  "streets": [
    "Broad Street",
    "Bay Street",
    "Roebuck Street",
    "Highway 7",
    "Hastings Main Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Damian Clarke",
    "Renee Alleyne",
    "Shawn Blackman",
    "Natasha Holder",
    "Adrian Best"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of the West Indies Cave Hill",
    "Barbados Community College",
    "Samuel Jackman Prescod Institute"
  ]
}
</script>
