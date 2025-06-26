export default {
    name: 'Conversor YAML-JSON',
    description: 'Converta facilmente entre formatos YAML e JSON com opções personalizáveis',
    input: {
      title: 'Entrada',
      yamlPlaceholder: 'Insira YAML aqui...',
      jsonPlaceholder: 'Insira JSON aqui...',
      loadSample: 'Carregar exemplo',
      clearInput: 'Limpar entrada',
      uploadFile: 'Enviar arquivo'
    },
    output: {
      title: 'Saída',
      copyOutput: 'Copiar saída',
      downloadOutput: 'Baixar saída',
      clearOutput: 'Limpar saída'
    },
    options: {
      conversionMode: 'Modo de conversão',
      jsonToYaml: 'JSON para YAML',
      yamlToJson: 'YAML para JSON',
      formatOutput: 'Formatar saída',
      indentSize: 'Tamanho da indentação',
      quoteKeys: 'Aspas nas chaves',
      sortKeys: 'Ordenar chaves alfabeticamente',
      flowStyle: 'Estilo de fluxo YAML',
      jsonCompatible: 'Compatível com JSON',
      singleQuotes: 'Usar aspas simples',
      includeSchema: 'Incluir esquema',
      preserveKeyOrder: 'Manter ordem das chaves'
    },
    flowStyles: {
      block: 'Estilo bloco',
      flow: 'Estilo fluxo',
      auto: 'Automático'
    },
    validation: {
      validate: 'Validar antes de converter',
      validInput: '{format} válido',
      invalidInput: '{format} inválido: {error}',
      checkSyntax: 'Verificar sintaxe'
    },
    actions: {
      convert: 'Converter',
      swap: 'Trocar formatos',
      beautify: 'Formatar',
      minify: 'Minificar'
    },
    messages: {
      conversionSuccess: 'Conversão realizada com sucesso',
      conversionFailed: 'Falha na conversão: {error}',
      copySuccess: 'Copiado para área de transferência',
      downloadSuccess: 'Arquivo baixado com sucesso',
      emptyInput: 'Insira conteúdo para conversão',
      invalidYaml: 'Sintaxe YAML inválida',
      invalidJson: 'Sintaxe JSON inválida'
    },
    article: {
      title: "Conversor YAML-JSON: Simplifique a transformação de dados",
      features: {
        title: "Entendendo YAML e JSON",
        description: "O <strong>Conversor YAML-JSON</strong> é uma ferramenta especializada para transformar dados entre dois populares <strong>formatos de serialização</strong>: <strong>YAML</strong> (YAML Ain't Markup Language) e <strong>JSON</strong> (JavaScript Object Notation). Este <strong>conversor bidirecional</strong> realiza conversões precisas mantendo a estrutura e integridade dos dados.<br><br>Nosso <strong>conversor YAML para JSON</strong> oferece recursos avançados como indentação personalizada, ordenação de chaves e opções de estilo para saída YAML. Para conversões <strong>JSON para YAML</strong>, a ferramenta permite formatar a saída de forma legível ou compacta. Seja trabalhando com pares chave-valor simples ou estruturas aninhadas complexas, este <strong>transformador de formatos</strong> processa as conversões mantendo as relações hierárquicas dos dados.",
        useCases: {
          title: "Aplicações práticas do conversor",
          items: [
            "Engenheiros DevOps convertendo configurações entre pipelines CI/CD que usam YAML (GitHub Actions) ou JSON (CircleCI)",
            "Desenvolvedores backend integrando APIs que consomem JSON com sistemas que usam configurações YAML",
            "Arquitetos de cloud convertendo templates AWS CloudFormation entre JSON e YAML",
            "Cientistas de dados alternando entre estruturas de dados em notebooks (JSON) e arquivos de configuração (YAML)",
            "Redatores técnicos apresentando os mesmos dados em ambos formatos para diferentes públicos",
            "Desenvolvedores frontend trabalhando com package.json e docker-compose.yml"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes",
        items: [
          {
            question: "Quais as principais diferenças entre YAML e JSON?",
            answer: "YAML e JSON são formatos de serialização com diferenças significativas. JSON usa sintaxe rigorosa com chaves, aspas e vírgulas explícitas. YAML é mais legível para humanos, usando espaçamento significativo e dispensando aspas quando possível. JSON é mais compacto e amplamente usado em APIs web, enquanto YAML é preferido para arquivos de configuração por sua legibilidade e suporte a comentários. Nosso conversor lida automaticamente com essas diferenças."
          },
          {
            question: "O conversor suporta estruturas aninhadas complexas?",
            answer: "Sim, o conversor lida perfeitamente com estruturas profundamente aninhadas, incluindo objetos, arrays e hierarquias mistas. Ele preserva as relações entre os elementos, convertendo corretamente mapeamentos YAML para objetos JSON e sequências para arrays."
          },
          {
            question: "Recursos avançados do YAML são suportados?",
            answer: "O conversor suporta muitos recursos avançados do YAML dentro dos limites do JSON. Comentários e âncoras do YAML são tratados adequadamente - comentários são removidos (pois JSON não os suporta) e referências são resolvidas para seus valores reais. Na conversão para YAML, você pode escolher entre estilo bloco (mais legível) ou fluxo (mais compacto)."
          },
          {
            question: "Como são tratados os diferentes tipos de dados?",
            answer: "O conversor preserva tipos de dados compatíveis entre os formatos. Números, strings, booleanos, valores nulos, arrays e objetos são convertidos com precisão. Tipos específicos do YAML como datas são convertidos para strings ISO no JSON, e dados binários para strings base64. O conversor identifica números corretamente, evitando conversões indesejadas para strings."
          },
          {
            question: "Há limite de tamanho para os arquivos convertidos?",
            answer: "Como o conversor opera no navegador, o limite prático depende da memória e capacidade de processamento do dispositivo. Para melhor desempenho, recomendamos arquivos abaixo de 5MB. Arquivos muito grandes podem causar lentidão - nesses casos, considere dividir os dados ou processar em etapas."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo",
        steps: [
          "Selecione a direção da conversão: 'YAML para JSON' ou 'JSON para YAML'",
          "Configure as preferências de saída: indentação, ordenação de chaves e estilo YAML",
          "Insira seus dados no painel esquerdo ou carregue um exemplo",
          "O conversor processará automaticamente e mostrará o resultado no painel direito",
          "Revise o resultado e ajuste configurações conforme necessário",
          "Copie o resultado para a área de transferência ou baixe como arquivo",
          "Alternativamente, use o botão 'baixar'para salvar a saída convertida como um arquivo no seu dispositivo para uso posterior ou integração no seu projeto"
        ]
      },
      conclusion: "O Conversor YAML-JSON oferece uma maneira eficiente de transformar dados entre esses formatos populares, mantendo a estrutura e precisão dos dados. Seja para configurações de sistemas, integração de APIs ou manipulação de dados, esta ferramenta simplifica o processo de conversão com interface intuitiva e recursos avançados. Ao suportar ambas direções de conversão e oferecer opções personalizáveis, ela se adapta a diversos cenários, economizando tempo e reduzindo erros manuais."
    }
  }