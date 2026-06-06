<template>
  <CountryAddressGenerator tool-id="portugal-address-generator" :country-config="countryConfig" :article-component="articleComponent" />
</template>

<script setup>
import CountryAddressGenerator from './shared/CountryAddressGenerator.vue'
import PortugalAddressGeneratorArticle from './PortugalAddressGeneratorArticle.vue'

const articleComponent = PortugalAddressGeneratorArticle

const countryConfig = {
  "slug": "portugal-address-generator",
  "display": "Portugal",
  "phoneCode": "351",
  "timezone": "Europe/Lisbon",
  "currency": "€",
  "locale": "pt-PT",
  "postalPattern": "####-###",
  "regions": [
    {
      "code": "LIS",
      "name": "Lisboa",
      "districts": [
        "Lisboa",
        "Sintra",
        "Cascais",
        "Oeiras"
      ]
    },
    {
      "code": "POR",
      "name": "Porto",
      "districts": [
        "Porto",
        "Vila Nova de Gaia",
        "Matosinhos"
      ]
    },
    {
      "code": "BRA",
      "name": "Braga",
      "districts": [
        "Braga",
        "Guimarães",
        "Barcelos"
      ]
    },
    {
      "code": "FAR",
      "name": "Faro",
      "districts": [
        "Faro",
        "Loulé",
        "Portimão"
      ]
    },
    {
      "code": "COI",
      "name": "Coimbra",
      "districts": [
        "Coimbra",
        "Figueira da Foz"
      ]
    }
  ],
  "streets": [
    "Avenida da Liberdade",
    "Rua Augusta",
    "Rua de Santa Catarina",
    "Avenida da República",
    "Rua do Carmo",
    "Rua Garrett"
  ],
  "buildings": [
    "Edifício",
    "Apartamento",
    "Centro",
    "Residência",
    "Bloco",
    "Loja"
  ],
  "names": [
    "João Silva",
    "Maria Santos",
    "Miguel Costa",
    "Ana Ferreira",
    "Pedro Oliveira"
  ],
  "jobs": [
    "Engenheiro",
    "Gestor de Marketing",
    "Professor",
    "Contabilista",
    "Médico"
  ],
  "campus": [
    "Universidade de Lisboa",
    "Universidade do Porto",
    "Universidade de Coimbra"
  ]
}
</script>
