export default {
  name: 'Gerador de UUID',
  description: 'Gera UUIDs e GUIDs aleatórios com opções personalizáveis para chaves primárias, nomes de arquivo temporários e outros cenários',

  options: {
    version: 'Versão do UUID',
    quantity: 'Quantidade',
    format: 'Opções de formato',
    includeDash: 'Incluir hífens (-)',
    generateCount: 'Quantidade a gerar'
  },

  versions: {
    v1: 'Versão 1 (baseada em tempo)',
    v4: 'Versão 4 (aleatória)',
    v5: 'Versão 5 (namespace)',
    custom: 'Personalizado'
  },

  quantities: {
    single: 'Único',
    five: '5',
    ten: '10',
    twenty: '20'
  },

  formats: {
    default: 'Padrão',
    base64: 'Base64',
    binary: 'Binário',
    hex: 'Hexadecimal',
    noDash: 'Sem hífens'
  },

  actions: {
    generate: 'Gerar UUID',
    copy: 'Copiar',
    copyAll: 'Copiar todos',
    clear: 'Limpar resultados',
    download: 'Baixar como TXT'
  },

  messages: {
    copied: 'Copiado para a área de transferência!',
    generated: 'UUID gerado com sucesso',
    tooMany: 'Quantidade máxima permitida: 1000',
    invalidVersion: 'Versão de UUID inválida',
    invalidNamespace: 'Namespace de UUID inválido',
    copyFailed: 'Falha ao copiar'
  }
};