export default {
    name: 'Conversor de Timestamp Unix',
    description: 'Converte entre timestamp Unix e datas legíveis, com suporte a múltiplos formatos e fusos horários',
    options: {
      inputType: 'Tipo de entrada',
      outputFormat: 'Formato de saída',
      timezone: 'Fuso horário',
      includeTime: 'Incluir horário',
      format: 'String de formatação'
    },
    inputTypes: {
      timestamp: 'Timestamp Unix (segundos)',
      milliseconds: 'Timestamp Unix (milissegundos)',
      iso8601: 'ISO 8601',
      rfc2822: 'RFC 2822',
      date: 'String de data'
    },
    formats: {
      iso8601: 'ISO 8601',
      rfc2822: 'RFC 2822',
      locale: 'Formato localizado',
      relative: 'Tempo relativo',
      custom: 'Formato personalizado'
    },
    actions: {
      convert: 'Converter',
      nowTimestamp: 'Timestamp atual',
      nowDate: 'Data atual',
      copy: 'Copiar',
      clear: 'Limpar',
      refresh: 'Atualizar',
      switch: 'Alternar'
    },
    messages: {
      copied: 'Copiado para área de transferência!',
      convertSuccess: 'Conversão bem-sucedida',
      convertError: 'Erro ao converter timestamp',
      invalidInput: 'Formato de entrada inválido',
      invalidFormat: 'String de formatação inválida'
    },
    timeUnits: {
      milliseconds: 'milissegundos',
      seconds: 'segundos',
      minutes: 'minutos',
      hours: 'horas',
      days: 'dias'
    },
    labels: {
      unixTimestamp: 'Timestamp Unix (segundos)',
      dateTime: 'Data e hora',
      inputValue: 'Valor de entrada',
      unitConversion: 'Conversão de unidades de tempo',
      timeUnitLabel: 'Unidade de tempo'
    },
    placeholders: {
      enterTimestamp: 'Insira um timestamp Unix',
      enterValue: 'Insira um valor numérico'
    },
    info: {
      aboutTimestamp: 'Sobre Timestamps Unix',
      timestampDescription: 'Um timestamp Unix representa o número de segundos desde 1º de Janeiro de 1970 00:00:00 UTC. É um formato amplamente utilizado em sistemas computacionais para representação de datas.',
      commonUsage: 'Usos comuns:',
      usages: {
        database: 'Registro temporal em bancos de dados',
        api: 'Representação de tempo em APIs',
        logging: 'Registro de logs',
        filesystem: 'Timestamps em sistemas de arquivos'
      }
    },
    article: {
      title: "Conversor de Timestamp Unix: Transforme entre tempo de época e datas legíveis",
      overview: {
        title: "O que é um conversor de timestamp?",
        content: "O <strong>conversor de timestamp</strong> é uma ferramenta especializada que transforma valores Unix timestamp (tempo de época) em formatos de data legíveis e vice-versa. O timestamp Unix representa o número de segundos (ou milissegundos) desde 1º de Janeiro de 1970 00:00:00 UTC, conhecido como Época Unix.<br><br>Nosso conversor funciona como uma ferramenta abrangente para manipulação temporal, lidando com diversos formatos encontrados em desenvolvimento de software, administração de sistemas, análise de logs e ciência de dados. O utilitário suporta conversão precisa entre formatos Unix timestamp (segundos e milissegundos) e representações padrão de data/hora, considerando diferentes fusos horários.<br><br>Seja para depurar logs de aplicação, analisar séries temporais, desenvolver APIs com parâmetros temporais ou trabalhar com timestamps em bancos de dados, nosso conversor elimina erros manuais e simplifica tarefas envolvendo diferentes representações temporais."
      },
      useCases: {
        title: "Aplicações práticas do conversor",
        items: [
          {
            title: "Análise e depuração de logs",
            description: "Converter timestamps em logs de aplicação, servidores e sistemas para datas legíveis, permitindo rastrear sequências de eventos, solucionar problemas e correlacionar eventos entre diferentes fontes. Isso ajuda a identificar padrões, rastrear problemas de performance e estabelecer linhas do tempo precisas durante investigações."
          },
          {
            title: "Desenvolvimento e integração de APIs",
            description: "Manipular parâmetros temporais em APIs REST, webhooks e integrações com terceiros, onde o tempo de época é comumente usado para troca precisa de dados. A conversão entre datas legíveis e timestamps auxilia em testes de API, documentação e garantia de consistência no tratamento temporal entre sistemas."
          },
          {
            title: "Operações com bancos de dados",
            description: "Converter entre campos timestamp em bancos de dados e exibição de datas em interfaces de usuário, executar consultas baseadas em tempo e validar dados temporais em operações de banco. Isso assegura correta persistência, recuperação e manipulação de informações sensíveis ao tempo."
          },
          {
            title: "Gerenciamento de tarefas agendadas",
            description: "Calcular tempos exatos de execução para jobs cron, tarefas agendadas e processos automatizados, convertendo entre tempos legíveis e timestamps requeridos por sistemas de agendamento. Isso ajuda a garantir que operações críticas rodem nos intervalos corretos."
          },
          {
            title: "Análise e visualização de dados",
            description: "Processar dados temporais em fluxos de trabalho de ciência de dados, análise de séries temporais e projetos de visualização, onde é necessário converter entre datas legíveis e timestamps numéricos para interpretação correta, agrupamento e análise de tendências."
          },
          {
            title: "Controle de versão e rastreamento de mudanças",
            description: "Interpretar timestamps em sistemas de controle de versão, tempos de modificação de arquivos e logs de auditoria para entender quando mudanças ocorreram e estabelecer cronogramas precisos de desenvolvimento. Essencial para revisão de código, relatórios de conformidade e acompanhamento de progresso."
          },
          {
            title: "Gestão de registros eletrônicos",
            description: "Administrar timestamps em documentos eletrônicos, assinaturas digitais e registros certificados, onde representações temporais precisas possuem significado legal. A conversão entre formatos garante precisão em processos de timestamping e procedimentos de verificação."
          },
          {
            title: "Coordenação entre fusos horários",
            description: "Facilitar comunicação e agendamento entre diferentes fusos horários usando timestamps Unix como ponto de referência universal convertível para representações locais. Isso minimiza confusões e garante coordenação precisa em times globais e sistemas distribuídos."
          }
        ]
      },
      guide: {
        title: "Como usar a ferramenta de conversão",
        intro: "Converter entre timestamps e datas legíveis é simples com nossa ferramenta intuitiva. Siga estes passos para transformar valores entre tempo de época Unix e formatos padrão de data:",
        steps: [
          {
            title: "Selecione a direção da conversão",
            description: "Decida se deseja converter de timestamp Unix para data legível (timestamp → data) ou de data para timestamp Unix (data → timestamp). Use o botão de alternância para mudar entre esses modos conforme sua necessidade."
          },
          {
            title: "Insira seu valor",
            description: "Para conversão timestamp → data, insira o valor em segundos (ex: 1609459200). Para data → timestamp, use o seletor para escolher a data/hora a ser convertida."
          },
          {
            title: "Obtenha resultados instantâneos",
            description: "A conversão ocorre automaticamente ao inserir valores, mostrando a data equivalente ou timestamp correspondente. Os resultados aparecem imediatamente abaixo, formatados conforme suas configurações regionais."
          },
          {
            title: "Copie os resultados",
            description: "Clique no botão copiar ao lado do resultado para transferi-lo à área de transferência, permitindo uso em aplicações, documentos ou análises posteriores sem redigitação manual."
          },
          {
            title: "Use conversão de unidades",
            description: "Converta entre diferentes unidades temporais (milissegundos, segundos, minutos, horas, dias) na seção dedicada. Insira um valor em qualquer unidade para ver equivalentes em outras, útil para trabalhar com diferentes formatos de timestamp."
          },
          {
            title: "Atualize com o tempo atual",
            description: "Clique em atualizar para preencher automaticamente com o timestamp ou data atual (conforme o modo selecionado). Útil quando precisa referenciar o momento presente ou verificar o tempo de época corrente."
          },
          {
            title: "Consulte informações adicionais",
            description: "Role até o painel informativo para aprender mais sobre timestamps Unix, incluindo definição, usos comuns e significado técnico. Esse contexto ajuda a aprofundar seu entendimento sobre convenções e aplicações de timestamps."
          }
        ]
      },
      principles: {
        title: "Princípios dos Timestamps Unix",
        content: "Timestamps Unix são baseados em um conceito simples porém poderoso: representar tempo como um único número contando segundos desde um ponto fixo. Essa abordagem oferece vantagens técnicas significativas:<br><br><strong>Época Unix</strong> - 1º de Janeiro de 1970 00:00:00 UTC - serve como origem (timestamp 0), com todos os valores calculados a partir deste ponto. A escolha desta data específica tem razões históricas ligadas ao desenvolvimento do sistema Unix.<br><br><strong>Números positivos</strong> representam tempo após a época, enquanto <strong>números negativos</strong> representam datas antes de 1970. Isso permite que timestamps Unix representem passado e futuro de forma consistente.<br><br><strong>Contagem em segundos</strong> oferece precisão suficiente para maioria das aplicações, enquanto <strong>timestamps em milissegundos</strong> (número de milissegundos desde a época) provêm maior granularidade para aplicações que necessitam, como transações de alta frequência ou medições científicas.<br><br>O sistema Unix timestamp lida elegantemente com diferenças de fuso horário, pois sempre se baseia em UTC (Tempo Universal Coordenado). Aplicando os ajustes adequados, pode-se derivar representações locais.<br><br>Essa abordagem padronizada tornou-se fundamental na computação, permitindo que sistemas de arquivos, bancos de dados e protocolos de rede manipulem dados temporais de forma consistente."
      },
      faq: {
        title: "Perguntas frequentes sobre timestamps",
        items: [
          {
            question: "O que é um timestamp Unix?",
            answer: "Timestamp Unix (também chamado tempo de época ou tempo POSIX) é um valor numérico que representa o número de segundos desde 1º de Janeiro de 1970 00:00:00 UTC, sem contar segundos bissextos. É amplamente usado em sistemas computacionais como forma padronizada de rastrear e representar pontos no tempo. Por exemplo, o timestamp 1609459200 representa 31 de Dezembro de 2020 12:00:00 UTC. Essa representação universal elimina complexidades de diferentes formatos de data, fusos horários e sistemas de calendário, tornando-a ideal para propósitos computacionais."
          },
          {
            question: "Por que sistemas computacionais usam timestamps em vez de formatos de data convencionais?",
            answer: "Sistemas usam timestamps em vez de datas de calendário porque oferecem vantagens técnicas significativas: são valores numéricos únicos que podem ser facilmente armazenados, comparados e calculados. Timestamps permitem cálculos precisos de intervalos (apenas subtraindo dois valores), armazenamento eficiente (apenas um número em vez de campos separados para ano, mês, dia etc.), ordenação consistente e independência de formatos culturais ou sistemas de calendário. Essa representação universal simplifica lógica de programação para operações baseadas em tempo e garante consistência entre diferentes sistemas e aplicações."
          },
          {
            question: "Qual a diferença entre timestamps Unix em segundos e milissegundos?",
            answer: "Timestamps Unix em segundos contam o número inteiro de segundos desde a época, enquanto em milissegundos contam o número de milissegundos, sendo 1000 vezes maior para o mesmo instante. Por exemplo, 14 de Março de 2023 12:00:00 UTC é aproximadamente 1678795200 em segundos e 1678795200000 em milissegundos. Timestamps em segundos são o formato Unix tradicional, adequado para maioria das aplicações, enquanto milissegundos oferecem maior granularidade para aplicações que necessitam, como medições de performance, aplicações científicas e JavaScript moderno (onde Date.now() retorna timestamps em milissegundos)."
          },
          {
            question: "Como lidar com fusos horários ao usar timestamps?",
            answer: "Timestamps Unix são sempre baseados em UTC (Tempo Universal Coordenado), tornando-os independentes de fuso horário. Para trabalhar com diferentes fusos: 1) Ao converter de hora local para timestamp, primeiro converta para UTC então calcule o timestamp. 2) Ao converter de timestamp para hora local, primeiro converta para data/hora UTC então aplique o ajuste de fuso adequado. A maioria das linguagens de programação e ferramentas de timestamp (incluindo este conversor) lidam automaticamente com essas conversões quando você especifica o fuso desejado. Essa padronização garante que a representação temporal permaneça consistente independente de localização geográfica."
          },
          {
            question: "O que é o problema do ano 2038 com timestamps Unix?",
            answer: "O problema do ano 2038 refere-se a uma limitação em sistemas que armazenam timestamps Unix como inteiros de 32 bits com sinal. Esses sistemas só podem representar valores até 2,147,483,647 (2^31-1), que corresponde a 19 de Janeiro de 2038 03:14:07 UTC. Após isso, o contador transbordará e possivelmente reiniciará com valores negativos, causando falhas em cálculos de data. A solução envolve transição para armazenamento de 64 bits, que pode representar datas muito além de necessidades práticas. A maioria dos sistemas modernos já implementou esta solução, mas sistemas legados, dispositivos embarcados e bancos de dados antigos podem ainda ser vulneráveis a esta limitação."
          },
          {
            question: "Timestamps podem representar datas antes de 1970?",
            answer: "Sim, timestamps podem usar valores negativos para representar datas anteriores à época Unix. Por exemplo, -31536000 representa 1º de Janeiro de 1969 00:00:00 UTC, exatamente um ano antes da época. Porém, há duas limitações importantes: 1) Alguns sistemas e linguagens não lidam corretamente com timestamps negativos. 2) Em sistemas de 32 bits, a data mais antiga representável é 13 de Dezembro de 1901 (timestamp -2,147,483,648). Para representar datas históricas mais antigas, podem ser necessárias bibliotecas especializadas ou representações alternativas, especialmente para aplicações históricas ou astronômicas que abrangem séculos pré-computacionais."
          },
          {
            question: "Quão precisos são timestamps Unix para medição de tempo?",
            answer: "Timestamps Unix padrão oferecem precisão de segundos, suficiente para maioria das necessidades comerciais e aplicacionais. Para maior precisão, timestamps em milissegundos oferecem granularidade de 1/1000 de segundo, com algumas extensões para microssegundos ou nanossegundos em certos sistemas. Porém, timestamps Unix não consideram segundos bissextos (adicionados ocasionalmente ao UTC para compensar irregularidades na rotação terrestre), o que pode causar discrepâncias em aplicações extremamente sensíveis ao tempo. Para aplicações científicas ou de cronometragem de alta precisão que requerem precisão sub-milissegundo ou consciência de segundos bissextos, sistemas especializados como TAI (Tempo Atômico Internacional) podem ser mais adequados."
          }
        ]
      },
      bestPractices: {
        title: "Melhores práticas para uso de timestamps",
        items: [
          "Armazene sempre timestamps em UTC para evitar confusão com fusos horários, convertendo apenas para exibição ao usuário",
          "Use timestamps em milissegundos para aplicações modernas, especialmente envolvendo JavaScript onde Date.now() retorna milissegundos",
          "Inclua unidades explicitamente (segundos vs milissegundos) em documentação de APIs e nomes de variáveis para prevenir erros de conversão",
          "Para datas muito recentes ou futuras, valide cálculos convertendo de volta para formato legível para garantir precisão",
          "Ao depurar problemas relacionados a tempo, converta todos timestamps para datas legíveis para tornar análise de logs mais intuitiva",
          "Lembre-se que timestamps não consideram segundos bissextos, o que pode ser relevante para aplicações científicas ou de alta precisão",
          "Use inteiros de 64 bits para armazenar timestamps, prevenindo o problema de 2038 em sistemas que rodarão após esta data",
          "Ao comunicar datas derivadas de timestamps, inclua informação de fuso horário para prevenir mal-entendidos entre regiões",
          "Para dados históricos anteriores a 1970, teste extensivamente timestamps negativos para garantir que seu sistema os processe corretamente",
          "Ao comparar timestamps de diferentes fontes, verifique que usam mesma referência de época e unidades (segundos vs milissegundos)",
          "Em sistemas distribuídos, considere usar geração sincronizada de timestamps para garantir consistência entre servidores",
          "Para interfaces de usuário, sempre apresente timestamps convertidos para o fuso local do usuário, melhorando usabilidade e compreensão"
        ]
      }
    }
  }