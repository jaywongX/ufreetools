<template>
  <CountryAddressGenerator tool-id="bangladesh-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BangladeshAddressGeneratorArticle from './BangladeshAddressGeneratorArticle.vue'

const articleComponent = BangladeshAddressGeneratorArticle

const countryConfig = {
  "slug": "bangladesh-address-generator",
  "display": "Bangladesh",
  "phoneCode": "880",
  "timezone": "Asia/Dhaka",
  "currency": "৳",
  "locale": "en-BD",
  "postalPattern": "####",
  "regions": [
    {
      "code": "DHK",
      "name": "Dhaka",
      "districts": [
        "Dhaka",
        "Gazipur",
        "Narayanganj",
        "Tangail"
      ]
    },
    {
      "code": "CTG",
      "name": "Chattogram",
      "districts": [
        "Chattogram",
        "Cox's Bazar",
        "Cumilla",
        "Feni"
      ]
    },
    {
      "code": "SYL",
      "name": "Sylhet",
      "districts": [
        "Sylhet",
        "Moulvibazar",
        "Habiganj"
      ]
    },
    {
      "code": "KHL",
      "name": "Khulna",
      "districts": [
        "Khulna",
        "Jashore",
        "Kushtia"
      ]
    },
    {
      "code": "RAJ",
      "name": "Rajshahi",
      "districts": [
        "Rajshahi",
        "Bogura",
        "Pabna"
      ]
    }
  ],
  "streets": [
    "Gulshan Avenue",
    "Dhanmondi Road",
    "Mirpur Road",
    "Kazi Nazrul Islam Avenue",
    "Airport Road",
    "Station Road",
    "College Road"
  ],
  "buildings": [
    "House",
    "Tower",
    "Market",
    "Plaza",
    "Heights",
    "Mansion"
  ],
  "names": [
    "Arif Rahman",
    "Nusrat Jahan",
    "Hasan Ahmed",
    "Farhana Akter",
    "Tanvir Hossain",
    "Mitu Islam"
  ],
  "jobs": [
    "Software Developer",
    "Bank Officer",
    "Teacher",
    "Textile Engineer",
    "Doctor",
    "Sales Manager"
  ],
  "campus": [
    "University of Dhaka",
    "BUET",
    "North South University"
  ]
}
</script>
