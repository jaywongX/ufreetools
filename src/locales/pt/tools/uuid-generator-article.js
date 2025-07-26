export default {
  title: "Gerador de UUID: Criando identificadores únicos para suas aplicações",
  features: {
    title: "O que é um gerador de UUID?",
    description: "Um <strong>gerador de UUID</strong> cria identificadores padronizados de 128 bits que garantem unicidade global. Nosso <strong>gerador online</strong> segue a especificação RFC 4122, produzindo <strong>valores únicos</strong> para diversos usos.<br><br>A principal vantagem dos UUIDs é sua extremamente baixa probabilidade de colisão. Cada <strong>UUID gerado</strong> contém 32 caracteres hexadecimais, normalmente agrupados (formato 8-4-4-4-12). Nosso foco principal é na versão 4, que usa números aleatórios para criar identificadores <strong>únicos</strong> sem necessidade de coordenação entre sistemas.",
    useCases: {
      title: "Aplicações práticas dos UUIDs",
      items: [
        "<strong>Chaves primárias</strong> em bancos de dados distribuídos",
        "<strong>Computação distribuída</strong> para microsserviços e aplicações em nuvem",
        "<strong>Desenvolvimento web</strong> para identificadores de sessão e tokens únicos",
        "<strong>Gerenciamento de conteúdo</strong> para ativos digitais e documentos",
        "<strong>Identificação de dispositivos IoT</strong> em redes",
        "<strong>Aplicações de jogos</strong> para itens e sessões multiplayer"
      ]
    }
  },
  faq: {
    title: "Perguntas frequentes sobre UUIDs",
    items: [
      {
        question: "Qual a diferença entre as versões de UUID?",
        answer: "Versão 1 usa timestamp e endereço MAC, versão 3 usa namespace e hash MD5, versão 4 (mais comum) usa números aleatórios, e versão 5 usa namespace e hash SHA-1. Nosso gerador foca na versão 4, que oferece o melhor equilíbrio entre unicidade e facilidade de geração."
      },
      {
        question: "UUIDs são seguros para aplicações sensíveis?",
        answer: "A versão 4 oferece boa segurança devido à aleatoriedade, com probabilidade extremamente baixa de colisão (cerca de 1 em 5.3×10³⁸⁸). Porém, não substituem ferramentas criptográficas para usos críticos."
      },
      {
        question: "Posso usar UUIDs como chaves primárias?",
        answer: "Sim, são excelentes para bancos de dados distribuídos, evitando conflitos na junção de bases. Porém, ocupam mais espaço (16 bytes) e podem impactar performance em alguns casos."
      },
      {
        question: "UUIDs são realmente únicos globalmente?",
        answer: "Na prática sim - a probabilidade de colisão é tão baixa que pode ser considerada única. Gerando 1 bilhão de UUIDs por segundo, levaria mais de 100 bilhões de anos para ter 50% de chance de uma colisão."
      },
      {
        question: "Remover hífens afeta o UUID?",
        answer: "Não - é apenas uma questão de formatação. O UUID sem hífens contém a mesma informação, sendo útil para economizar espaço ou atender requisitos específicos."
      }
    ]
  },
  guide: {
    title: "Como usar nosso gerador de UUID",
    steps: [
      "Selecione a <strong>versão</strong> desejada (versão 4 recomendada para maioria dos usos)",
      "Escolha a <strong>quantidade</strong> de UUIDs a gerar (1, 5, 10 ou 20)",
      "Configure as <strong>opções de formato</strong> incluindo ou não hífens",
      "Clique em <strong>'Gerar UUID'</strong> para criar os identificadores",
      "Copie UUIDs individualmente ou use 'Limpar resultados' para recomeçar"
    ]
  },
  conclusion: "Nosso gerador oferece uma maneira simples e eficiente de criar identificadores únicos padronizados. Com opções personalizáveis, atende diversos requisitos mantendo as garantias de unicidade que tornam UUIDs valiosos na computação moderna."
}
