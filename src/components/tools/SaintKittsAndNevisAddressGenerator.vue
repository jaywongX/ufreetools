<template>
  <CountryAddressGenerator tool-id="saint-kitts-and-nevis-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SaintKittsAndNevisAddressGeneratorArticle from './SaintKittsAndNevisAddressGeneratorArticle.vue'

const articleComponent = SaintKittsAndNevisAddressGeneratorArticle

const countryConfig = {
  "slug": "saint-kitts-and-nevis-address-generator",
  "display": "Saint Kitts and Nevis",
  "phoneCode": "1-869",
  "timezone": "America/St_Kitts",
  "currency": "XCD",
  "locale": "en-KN",
  "postalPattern": "#####",
  "regions": [
    {
      "code": "SK",
      "name": "Saint Kitts",
      "districts": [
        "Basseterre",
        "Frigate Bay",
        "Sandy Point Town"
      ]
    },
    {
      "code": "NV",
      "name": "Nevis",
      "districts": [
        "Charlestown",
        "Gingerland",
        "Newcastle"
      ]
    },
    {
      "code": "CA",
      "name": "Saint George Basseterre",
      "districts": [
        "Monkey Hill",
        "Needsmust",
        "Canada Estate"
      ]
    }
  ],
  "streets": [
    "Bay Road",
    "Central Street",
    "Fort Street",
    "Cayon Street",
    "Island Main Road"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Nigel Jeffers",
    "Tamika Francis",
    "Corey Williams",
    "Leah Liburd",
    "Darren Huggins"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Medicine and Health Sciences",
    "Ross University School of Veterinary Medicine",
    "Clarence Fitzroy Bryant College"
  ]
}
</script>
