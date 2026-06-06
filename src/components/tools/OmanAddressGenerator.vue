<template>
  <CountryAddressGenerator tool-id="oman-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import OmanAddressGeneratorArticle from './OmanAddressGeneratorArticle.vue'

const articleComponent = OmanAddressGeneratorArticle

const countryConfig = {
  "slug": "oman-address-generator",
  "display": "Oman",
  "phoneCode": "968",
  "timezone": "Asia/Muscat",
  "currency": "OMR",
  "locale": "ar-OM",
  "postalPattern": "###",
  "regions": [
    {
      "code": "MCT",
      "name": "Muscat Governorate",
      "districts": [
        "Muscat",
        "Muttrah",
        "Bawshar"
      ]
    },
    {
      "code": "DHK",
      "name": "Dhofar Governorate",
      "districts": [
        "Salalah",
        "Taqah",
        "Mirbat"
      ]
    },
    {
      "code": "BAT",
      "name": "Al Batinah North",
      "districts": [
        "Sohar",
        "Shinas",
        "Liwa"
      ]
    }
  ],
  "streets": [
    "Sultan Qaboos Street",
    "Al Khuwair Street",
    "Muttrah Corniche",
    "November 18 Street",
    "Al Mouj Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Said Al Balushi",
    "Aisha Al Hinai",
    "Khalid Al Riyami",
    "Maha Al Lawati",
    "Nasser Al Amri"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Sultan Qaboos University",
    "University of Technology and Applied Sciences",
    "German University of Technology in Oman"
  ]
}
</script>
