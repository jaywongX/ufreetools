<template>
  <CountryAddressGenerator tool-id="north-macedonia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import NorthMacedoniaAddressGeneratorArticle from './NorthMacedoniaAddressGeneratorArticle.vue'

const articleComponent = NorthMacedoniaAddressGeneratorArticle

const countryConfig = {
  "slug": "north-macedonia-address-generator",
  "display": "North Macedonia",
  "phoneCode": "389",
  "timezone": "Europe/Skopje",
  "currency": "MKD",
  "locale": "mk-MK",
  "postalPattern": "####",
  "regions": [
    {
      "code": "SK",
      "name": "Skopje Region",
      "districts": [
        "Skopje",
        "Aerodrom",
        "Karpoš"
      ]
    },
    {
      "code": "PE",
      "name": "Pelagonia Region",
      "districts": [
        "Bitola",
        "Prilep",
        "Resen"
      ]
    },
    {
      "code": "PO",
      "name": "Polog Region",
      "districts": [
        "Tetovo",
        "Gostivar"
      ]
    },
    {
      "code": "EA",
      "name": "Eastern Region",
      "districts": [
        "Štip",
        "Kočani",
        "Berovo"
      ]
    },
    {
      "code": "SW",
      "name": "Southwestern Region",
      "districts": [
        "Ohrid",
        "Struga",
        "Kičevo"
      ]
    }
  ],
  "streets": [
    "Macedonia Street",
    "Partizanski Odredi Boulevard",
    "Ilinden Boulevard",
    "Kliment Ohridski Boulevard",
    "Jane Sandanski Boulevard"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Aleksandar Trajkovski",
    "Elena Petrova",
    "Nikola Stojanov",
    "Marija Angelova",
    "Stefan Dimitriev"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Ss. Cyril and Methodius University",
    "Goce Delčev University",
    "University of Tetova"
  ]
}
</script>
