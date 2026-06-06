<template>
  <CountryAddressGenerator tool-id="belgium-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BelgiumAddressGeneratorArticle from './BelgiumAddressGeneratorArticle.vue'

const articleComponent = BelgiumAddressGeneratorArticle

const countryConfig = {
  "slug": "belgium-address-generator",
  "display": "Belgium",
  "phoneCode": "32",
  "timezone": "Europe/Brussels",
  "currency": "€",
  "locale": "fr-BE",
  "postalPattern": "####",
  "regions": [
    {
      "code": "BRU",
      "name": "Brussels-Capital",
      "districts": [
        "Brussels",
        "Ixelles",
        "Schaerbeek"
      ]
    },
    {
      "code": "VLG",
      "name": "Flanders",
      "districts": [
        "Antwerp",
        "Ghent",
        "Bruges",
        "Leuven"
      ]
    },
    {
      "code": "WAL",
      "name": "Wallonia",
      "districts": [
        "Liège",
        "Namur",
        "Charleroi",
        "Mons"
      ]
    },
    {
      "code": "LIM",
      "name": "Limburg",
      "districts": [
        "Hasselt",
        "Genk"
      ]
    },
    {
      "code": "WFL",
      "name": "West Flanders",
      "districts": [
        "Kortrijk",
        "Ostend"
      ]
    }
  ],
  "streets": [
    "Rue Royale",
    "Avenue Louise",
    "Meir",
    "Korenmarkt",
    "Rue de Namur",
    "Grand Place"
  ],
  "buildings": [
    "Appartement",
    "Maison",
    "Centre",
    "Résidence",
    "Bureau",
    "Immeuble"
  ],
  "names": [
    "Lucas Peeters",
    "Emma Janssens",
    "Noah Dubois",
    "Louise Lambert",
    "Arthur Martin"
  ],
  "jobs": [
    "Software Engineer",
    "Marketing Manager",
    "Teacher",
    "Accountant",
    "Doctor"
  ],
  "campus": [
    "KU Leuven",
    "Ghent University",
    "Université libre de Bruxelles"
  ]
}
</script>
