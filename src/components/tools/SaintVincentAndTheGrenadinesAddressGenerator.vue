<template>
  <CountryAddressGenerator tool-id="saint-vincent-and-the-grenadines-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SaintVincentAndTheGrenadinesAddressGeneratorArticle from './SaintVincentAndTheGrenadinesAddressGeneratorArticle.vue'

const articleComponent = SaintVincentAndTheGrenadinesAddressGeneratorArticle

const countryConfig = {
  "slug": "saint-vincent-and-the-grenadines-address-generator",
  "display": "Saint Vincent and the Grenadines",
  "phoneCode": "1-784",
  "timezone": "America/St_Vincent",
  "currency": "XCD",
  "locale": "en-VC",
  "postalPattern": "VC####",
  "regions": [
    {
      "code": "SG",
      "name": "Saint George",
      "districts": [
        "Kingstown",
        "Arnos Vale",
        "Calliaqua"
      ]
    },
    {
      "code": "CH",
      "name": "Charlotte",
      "districts": [
        "Georgetown",
        "Sandy Bay",
        "Owia"
      ]
    },
    {
      "code": "GR",
      "name": "Grenadines",
      "districts": [
        "Bequia",
        "Union Island",
        "Canouan"
      ]
    }
  ],
  "streets": [
    "Bay Street",
    "Halifax Street",
    "Grenville Street",
    "Back Street",
    "Windward Highway"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Keron Williams",
    "Alicia Browne",
    "Jamal Lewis",
    "Shanika Samuel",
    "Darren Richards"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Saint Vincent and the Grenadines Community College",
    "University of the West Indies Open Campus",
    "Trinity School of Medicine"
  ]
}
</script>
