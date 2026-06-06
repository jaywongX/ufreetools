<template>
  <CountryAddressGenerator tool-id="iceland-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import IcelandAddressGeneratorArticle from './IcelandAddressGeneratorArticle.vue'

const articleComponent = IcelandAddressGeneratorArticle

const countryConfig = {
  "slug": "iceland-address-generator",
  "display": "Iceland",
  "phoneCode": "354",
  "timezone": "Atlantic/Reykjavik",
  "currency": "ISK",
  "locale": "is-IS",
  "postalPattern": "###",
  "regions": [
    {
      "code": "CR",
      "name": "Capital Region",
      "districts": [
        "Reykjavík",
        "Kópavogur",
        "Hafnarfjörður"
      ]
    },
    {
      "code": "SN",
      "name": "Southern Peninsula",
      "districts": [
        "Reykjanesbær",
        "Grindavík",
        "Vogar"
      ]
    },
    {
      "code": "NE",
      "name": "Northeastern Region",
      "districts": [
        "Akureyri",
        "Húsavík",
        "Dalvík"
      ]
    },
    {
      "code": "SU",
      "name": "Southern Region",
      "districts": [
        "Selfoss",
        "Hveragerði",
        "Vestmannaeyjar"
      ]
    },
    {
      "code": "WE",
      "name": "Western Region",
      "districts": [
        "Akranes",
        "Borgarnes",
        "Stykkishólmur"
      ]
    }
  ],
  "streets": [
    "Laugavegur",
    "Skólavörðustígur",
    "Bankastræti",
    "Austurstræti",
    "Hafnarstræti"
  ],
  "buildings": [
    "Íbúð",
    "Skrifstofa",
    "Hús",
    "Miðstöð",
    "Setur"
  ],
  "names": [
    "Jón Jónsson",
    "Anna Guðmundsdóttir",
    "Arnar Sigurðsson",
    "Katrín Magnúsdóttir",
    "Einar Ólafsson"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Tour Guide"
  ],
  "campus": [
    "University of Iceland",
    "Reykjavik University",
    "University of Akureyri"
  ]
}
</script>
