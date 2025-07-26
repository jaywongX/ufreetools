export default {
  title: "Conversor CSV para JSON: Simplifique a transformação de dados",
  features: {
    title: "Sobre o Conversor CSV/JSON",
    description: "O <strong>Conversor CSV para JSON</strong> é uma ferramenta poderosa projetada para transformar dados em <strong>formato CSV</strong> (valores separados por vírgula) para <strong>formato JSON</strong> (JavaScript Object Notation). Este <strong>conversor bidirecional</strong> permite a conversão perfeita entre dados tabulares e objetos JSON estruturados.<br><br>Nossa <strong>ferramenta CSV JSON</strong> oferece opções personalizáveis para lidar com diversos <strong>formatos de dados</strong>, incluindo diferentes delimitadores (vírgula, ponto e vírgula, tabulação, barra vertical), gerenciamento de cabeçalhos e detecção inteligente de <strong>tipos de dados</strong>. Para estruturas JSON complexas, a ferramenta oferece opções para achatar objetos aninhados ou convertê-los em strings, tornando-se uma solução versátil para diversas necessidades de <strong>transformação de dados</strong>.",
    useCases: {
      title: "Casos de uso comuns para conversão CSV/JSON",
      items: [
        "Analistas de dados convertendo exportações de planilhas para JSON em ferramentas de visualização ou APIs",
        "Desenvolvedores preparando dados para aplicações web que exigem estruturas JSON",
        "Administradores de banco de dados migrando dados entre sistemas com requisitos de formato diferentes",
        "Desenvolvedores de APIs convertendo exportações CSV para JSON para uso em APIs RESTful",
        "Cientistas de dados convertendo resultados experimentais entre formatos de planilha e estruturas JSON",
        "Analistas de negócios preparando relatórios CSV de sistemas contábeis ou CRM para painéis web que usam JSON"
      ]
    }
  },
  faq: {
    title: "Perguntas frequentes sobre conversão CSV/JSON",
    items: [
      {
        question: "Qual a diferença entre formatos CSV e JSON?",
        answer: "CSV (valores separados por vírgula) é um formato tabular simples onde os dados são organizados em linhas e colunas separadas por delimitadores (geralmente vírgulas). É plano e leve, comumente usado em planilhas. JSON (JavaScript Object Notation) é um formato de dados hierárquico estruturado que suporta objetos e arrays aninhados. JSON pode representar relações de dados mais complexas e é o padrão para APIs web e aplicações JavaScript."
      },
      {
        question: "Como a ferramenta lida com objetos JSON aninhados ao converter para CSV?",
        answer: "Nosso conversor CSV/JSON oferece três opções para processar objetos JSON aninhados: 'Achatar' converte propriedades aninhadas em nomes de colunas com notação por pontos (ex: 'usuario.nome'), 'Converter para string' transforma todo o objeto aninhado em uma representação string, e 'Ignorar' exclui objetos aninhados da conversão. Essas opções proporcionam flexibilidade para diferentes necessidades de transformação de dados."
      },
      {
        question: "O conversor suporta diferentes delimitadores em arquivos CSV?",
        answer: "Sim, nossa ferramenta suporta vários delimitadores, incluindo vírgula, ponto e vírgula, tabulação e barra vertical. Essa flexibilidade permite trabalhar com diversas variações de formato CSV de diferentes sistemas ou regiões. Basta selecionar o delimitador apropriado no painel de opções antes da conversão."
      },
      {
        question: "Como funciona a tipagem dinâmica na conversão CSV para JSON?",
        answer: "A tipagem dinâmica detecta e converte automaticamente tipos de dados no CSV. Quando ativada, valores que parecem números (como '42') são convertidos para tipo numérico, strings 'true'/'false' se tornam booleanos, e campos vazios podem ser convertidos para null. Isso cria dados JSON mais utilizáveis com tipos corretos, em vez de tratar tudo como strings."
      },
      {
        question: "Qual o tamanho máximo de arquivo CSV ou JSON que o conversor suporta?",
        answer: "O conversor processa dados diretamente no seu navegador, então o limite de tamanho depende da memória do dispositivo. Para melhor desempenho, recomendamos arquivos menores que 5MB, embora navegadores modernos possam lidar com arquivos maiores. Para conjuntos de dados muito grandes, considere dividir o arquivo em partes menores ou usar ferramentas de conversão baseadas em servidor."
      }
    ]
  },
  guide: {
    title: "Como usar o Conversor CSV/JSON",
    steps: [
      "Selecione a direção da conversão: 'CSV para JSON' ou 'JSON para CSV' conforme seu formato de origem",
      "Clique em 'Mostrar opções' para configurar parâmetros como delimitador, linha de cabeçalho e regras especiais",
      "Para CSV para JSON, escolha o delimitador apropriado e marque 'Primeira linha como cabeçalho' se seu CSV tiver cabeçalhos",
      "Para JSON para CSV, configure como lidar com objetos aninhados e se deve adicionar aspas a todos os valores",
      "Insira seus dados copiando na área de entrada ou clique em 'Carregar exemplo' para ver a ferramenta em ação",
      "Clique em 'Converter' para executar a transformação entre formatos",
      "Revise as estatísticas e resultados, depois use 'Copiar resultado' ou 'Baixar resultado' para salvar os dados convertidos"
    ]
  },
  conclusion: "O Conversor CSV/JSON é uma ferramenta essencial para profissionais que trabalham com diferentes formatos de dados. Ao simplificar a transformação entre dados tabulares CSV e objetos JSON estruturados, esta ferramenta economiza tempo e reduz erros em fluxos de trabalho de processamento de dados. Seja preparando dados para integração de APIs, convertendo exportações de aplicativos de planilha ou migrando entre sistemas com requisitos de formato diferentes, este conversor oferece uma solução flexível baseada em navegador para suas necessidades de transformação de dados."
}
