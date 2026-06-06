<template>
  <CountryAddressGenerator tool-id="turkmenistan-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import TurkmenistanAddressGeneratorArticle from './TurkmenistanAddressGeneratorArticle.vue'

const articleComponent = TurkmenistanAddressGeneratorArticle

const countryConfig = {
  "slug": "turkmenistan-address-generator",
  "display": "Turkmenistan",
  "phoneCode": "993",
  "timezone": "Asia/Ashgabat",
  "currency": "TMT",
  "locale": "tk-TM",
  "postalPattern": "######",
  "regions": [
    {
      "code": "AS",
      "name": "Ashgabat",
      "districts": [
        "Ashgabat",
        "Bagtyyarlyk",
        "Berkararlyk"
      ]
    },
    {
      "code": "AH",
      "name": "Ahal Region",
      "districts": [
        "Anau",
        "Gokdepe",
        "Baherden"
      ]
    },
    {
      "code": "MR",
      "name": "Mary Region",
      "districts": [
        "Mary",
        "Bayramaly",
        "Murgap"
      ]
    }
  ],
  "streets": [
    "Magtymguly Avenue",
    "Gorogly Street",
    "Turkmenbashi Avenue",
    "Atamyrat Niyazov Avenue",
    "10 ýyl Abadançylyk Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Myrat Annayev",
    "Aysoltan Orazova",
    "Serdar Hojayev",
    "Gulnar Meredova",
    "Batyr Gurbanov"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Magtymguly Turkmen State University",
    "Turkmen State Institute of Economics and Management",
    "International University for the Humanities and Development"
  ]
}
</script>
