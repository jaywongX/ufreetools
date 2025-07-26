export default {
  name: 'Conversor de Caixa Hexadecimal',
  description: 'Converte e formata strings hexadecimais entre maiúsculas e minúsculas, com suporte a diferentes prefixos, separadores e opções de agrupamento',

  input: {
    title: 'Entrada Hexadecimal',
    placeholder: 'Insira o valor hexadecimal...'
  },

  output: {
    title: 'Resultado da Conversão',
    placeholder: 'O resultado da conversão aparecerá aqui...'
  },

  prefix: {
    title: 'Prefixo',
    none: 'Nenhum',
  },

  format: {
    title: 'Formato de Caixa',
    uppercase: 'Maiúsculas',
    lowercase: 'Minúsculas'
  },

  separator: {
    title: 'Separador',
    none: 'Nenhum',
    space: 'Espaço',
    comma: 'Vírgula',
    colon: 'Dois pontos',
    semicolon: 'Ponto e vírgula'
  },

  grouping: {
    title: 'Agrupamento (bytes)',
    none: 'Nenhum'
  },

  actions: {
    copy: 'Copiar',
    clear: 'Limpar',
    convert: 'Converter'
  },

  messages: {
    copied: 'Copiado para a área de transferência',
    copyFailed: 'Falha ao copiar',
    invalidHex: 'Valor hexadecimal inválido'
  },

  examples: {
    title: 'Exemplos',
    example1: {
      title: '"Hello World" em hexadecimal',
    },
    example2: {
      title: 'ASCII Hello com prefixo 0x',
    },
    example3: {
      title: 'DEADBEEF (valor comum para debug)',
    },
    example4: {
      title: 'Formato de endereço MAC',
    }
  },

  tips: {
    title: 'Dicas',
    tip1: 'Valores hexadecimais usam caracteres 0-9 e A-F (ou a-f)',
    tip2: 'Diferentes prefixos são usados em diferentes contextos: 0x em programação, # para cores, etc',
    tip3: 'Usar agrupamento e separadores melhora a legibilidade de strings hexadecimais longas',
    tip4: 'Endereços MAC normalmente usam separador de dois pontos e agrupamento de 1 byte'
  }
};