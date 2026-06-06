<template>
  <CountryAddressGenerator tool-id="saint-lucia-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import SaintLuciaAddressGeneratorArticle from './SaintLuciaAddressGeneratorArticle.vue'

const articleComponent = SaintLuciaAddressGeneratorArticle

const countryConfig = {
  "slug": "saint-lucia-address-generator",
  "display": "Saint Lucia",
  "phoneCode": "1-758",
  "timezone": "America/St_Lucia",
  "currency": "XCD",
  "locale": "en-LC",
  "postalPattern": "LC## ###",
  "regions": [
    {
      "code": "CA",
      "name": "Castries",
      "districts": [
        "Castries",
        "Vigie",
        "Choc"
      ]
    },
    {
      "code": "GR",
      "name": "Gros Islet",
      "districts": [
        "Gros Islet",
        "Rodney Bay",
        "Cap Estate"
      ]
    },
    {
      "code": "VF",
      "name": "Vieux Fort",
      "districts": [
        "Vieux Fort",
        "Laborie",
        "Augier"
      ]
    }
  ],
  "streets": [
    "Brazil Street",
    "Micoud Street",
    "Chaussee Road",
    "Jeremie Street",
    "Bridge Street"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Kelvin Edward",
    "Sasha Joseph",
    "Andre Charles",
    "Melanie Pierre",
    "Nicholas Francis"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "Sir Arthur Lewis Community College",
    "University of the West Indies Open Campus",
    "International American University"
  ]
}
</script>
