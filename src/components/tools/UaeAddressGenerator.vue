<template>
  <CountryAddressGenerator tool-id="uae-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import UaeAddressGeneratorArticle from './UaeAddressGeneratorArticle.vue'

const articleComponent = UaeAddressGeneratorArticle

const countryConfig = {
  "slug": "uae-address-generator",
  "display": "United Arab Emirates",
  "phoneCode": "971",
  "timezone": "Asia/Dubai",
  "currency": "AED",
  "locale": "en-AE",
  "postalPattern": "PO Box ######",
  "regions": [
    {
      "code": "DXB",
      "name": "Dubai",
      "districts": [
        "Deira",
        "Jumeirah",
        "Business Bay",
        "Dubai Marina"
      ]
    },
    {
      "code": "AUH",
      "name": "Abu Dhabi",
      "districts": [
        "Al Khalidiyah",
        "Al Reem Island",
        "Mussafah"
      ]
    },
    {
      "code": "SHJ",
      "name": "Sharjah",
      "districts": [
        "Al Majaz",
        "Al Nahda",
        "Muweilah"
      ]
    },
    {
      "code": "AJM",
      "name": "Ajman",
      "districts": [
        "Al Nuaimiya",
        "Al Rashidiya"
      ]
    },
    {
      "code": "RAK",
      "name": "Ras Al Khaimah",
      "districts": [
        "Al Nakheel",
        "Al Hamra"
      ]
    }
  ],
  "streets": [
    "Sheikh Zayed Road",
    "Al Wasl Road",
    "Jumeirah Beach Road",
    "Airport Road",
    "Corniche Road",
    "King Faisal Street"
  ],
  "buildings": [
    "Tower",
    "Residence",
    "Business Center",
    "Plaza",
    "Villa",
    "Marina Heights"
  ],
  "names": [
    "Omar Al Mansouri",
    "Mariam Al Nuaimi",
    "Saeed Al Falasi",
    "Aisha Al Ketbi",
    "Hamad Al Ali"
  ],
  "jobs": [
    "Business Consultant",
    "Aviation Specialist",
    "Engineer",
    "Hotel Manager",
    "Finance Manager"
  ],
  "campus": [
    "United Arab Emirates University",
    "Khalifa University",
    "American University of Sharjah"
  ]
}
</script>
