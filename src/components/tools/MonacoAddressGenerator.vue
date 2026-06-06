<template>
  <CountryAddressGenerator tool-id="monaco-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import MonacoAddressGeneratorArticle from './MonacoAddressGeneratorArticle.vue'

const articleComponent = MonacoAddressGeneratorArticle

const countryConfig = {
  "slug": "monaco-address-generator",
  "display": "Monaco",
  "phoneCode": "377",
  "timezone": "Europe/Monaco",
  "currency": "€",
  "locale": "fr-MC",
  "postalPattern": "980##",
  "regions": [
    {
      "code": "MC",
      "name": "Monte Carlo",
      "districts": [
        "Monte Carlo",
        "Carré d’Or"
      ]
    },
    {
      "code": "LA",
      "name": "La Condamine",
      "districts": [
        "La Condamine",
        "Port Hercule"
      ]
    },
    {
      "code": "FO",
      "name": "Fontvieille",
      "districts": [
        "Fontvieille",
        "Héliport"
      ]
    },
    {
      "code": "MV",
      "name": "Monaco-Ville",
      "districts": [
        "Monaco-Ville",
        "Le Rocher"
      ]
    },
    {
      "code": "LR",
      "name": "Larvotto",
      "districts": [
        "Larvotto",
        "Plage du Larvotto"
      ]
    }
  ],
  "streets": [
    "Avenue Princesse Grace",
    "Boulevard des Moulins",
    "Avenue de Monte-Carlo",
    "Rue Grimaldi",
    "Quai Antoine Ier"
  ],
  "buildings": [
    "Appartement",
    "Résidence",
    "Bureau",
    "Villa",
    "Centre"
  ],
  "names": [
    "Jean Moreau",
    "Camille Rossi",
    "Louis Bernard",
    "Sophie Laurent",
    "Marc Blanc"
  ],
  "jobs": [
    "Finance Manager",
    "Hotel Manager",
    "Consultant",
    "Event Planner",
    "Software Engineer"
  ],
  "campus": [
    "International University of Monaco",
    "Lycée Albert Premier",
    "Monaco Business School"
  ]
}
</script>
