<template>
  <CountryAddressGenerator tool-id="trinidad-and-tobago-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TrinidadAndTobagoAddressGeneratorArticle from './TrinidadAndTobagoAddressGeneratorArticle.vue'

const articleComponent = TrinidadAndTobagoAddressGeneratorArticle

const countryConfig = {
  "slug": "trinidad-and-tobago-address-generator",
  "display": "Trinidad and Tobago",
  "phoneCode": "1-868",
  "timezone": "America/Port_of_Spain",
  "currency": "TTD",
  "locale": "en-TT",
  "postalPattern": "######",
  "regions": [
    {
      "code": "POS",
      "name": "Port of Spain",
      "districts": [
        "Port of Spain",
        "Woodbrook",
        "St. Clair"
      ]
    },
    {
      "code": "SJL",
      "name": "San Juan-Laventille",
      "districts": [
        "San Juan",
        "Laventille",
        "Barataria"
      ]
    },
    {
      "code": "TOB",
      "name": "Tobago",
      "districts": [
        "Scarborough",
        "Crown Point",
        "Roxborough"
      ]
    }
  ],
  "streets": [
    "Frederick Street",
    "Ariapita Avenue",
    "Queen Street",
    "Eastern Main Road",
    "Wrightson Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Nicholas Mohammed",
    "Priya Maharaj",
    "Kevin Baptiste",
    "Asha Ramkissoon",
    "Marcus Lewis"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of the West Indies St. Augustine",
    "University of Trinidad and Tobago",
    "College of Science Technology and Applied Arts of Trinidad and Tobago"
  ]
}
</script>
