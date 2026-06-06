<template>
  <CountryAddressGenerator tool-id="brazil-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import BrazilAddressGeneratorArticle from './BrazilAddressGeneratorArticle.vue'

const articleComponent = BrazilAddressGeneratorArticle

const countryConfig = {
  "slug": "brazil-address-generator",
  "display": "Brazil",
  "phoneCode": "55",
  "timezone": "America/Sao_Paulo",
  "currency": "BRL",
  "locale": "pt-BR",
  "postalPattern": "#####-###",
  "regions": [
    {
      "code": "SP",
      "name": "Sao Paulo",
      "districts": [
        "Sao Paulo",
        "Campinas",
        "Santos"
      ]
    },
    {
      "code": "RJ",
      "name": "Rio de Janeiro",
      "districts": [
        "Rio de Janeiro",
        "Niteroi",
        "Petropolis"
      ]
    },
    {
      "code": "MG",
      "name": "Minas Gerais",
      "districts": [
        "Belo Horizonte",
        "Uberlandia",
        "Ouro Preto"
      ]
    }
  ],
  "streets": [
    "Avenida Paulista",
    "Rua Augusta",
    "Avenida Atlantica",
    "Rua XV de Novembro",
    "Avenida Brasil"
  ],
  "buildings": [
    "Apartment",
    "Business Center",
    "House",
    "Office",
    "Residence"
  ],
  "names": [
    "Joao Silva",
    "Maria Oliveira",
    "Pedro Santos",
    "Ana Souza",
    "Lucas Pereira"
  ],
  "jobs": [
    "Software Engineer",
    "Teacher",
    "Accountant",
    "Doctor",
    "Project Manager"
  ],
  "campus": [
    "University of Sao Paulo",
    "Federal University of Rio de Janeiro",
    "Federal University of Minas Gerais"
  ]
}
</script>
