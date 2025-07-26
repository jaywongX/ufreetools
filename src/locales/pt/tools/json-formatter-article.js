export default {
  title: "Formatador JSON: Guia Definitivo para Processamento de Dados Estruturados",
  features: {
    title: "Formatar JSON e seus benefícios",
    description: "Este <strong>formatador JSON</strong> é uma ferramenta online projetada para transformar strings JSON brutas em estruturas organizadas e legíveis, enquanto valida a sintaxe. Oferece funcionalidades completas incluindo <strong>embelezamento JSON</strong>, compactação de dados, visualização de propriedades e operações profissionais como escape/unescape de caracteres.<br><br>O processo permite converter instantaneamente textos JSON densos em formatos indentados e navegáveis, destacando relações hierárquicas. O <strong>validador JSON</strong> verifica automaticamente erros como parênteses ausentes, vírgulas incorretas ou valores malformados, exibindo mensagens claras. O navegador de propriedades mostra uma árvore navegável, facilitando a exploração de objetos e arrays aninhados com distinção visual de tipos de dados. Seja para respostas de API, arquivos de configuração ou formatos de troca de dados, este <strong>embelezador JSON</strong> simplifica o gerenciamento de estruturas complexas.",
    useCases: {
      title: "Aplicações práticas",
      items: [
        "<strong>Análise de respostas API</strong>: Transforme respostas compactas em formatos legíveis para identificar campos específicos e entender a estrutura.",
        "<strong>Depuração de aplicações</strong>: Localize erros de sintaxe em objetos JSON e rastreie valores aninhados que possam causar problemas.",
        "<strong>Gerenciamento de configurações</strong>: Mantenha arquivos JSON válidos e compreenda estruturas complexas durante edições manuais.",
        "<strong>Preparação de dados</strong>: Valide integridade e prepare conjuntos JSON para importação em bancos de dados ou ferramentas de análise.",
        "<strong>Documentação</strong>: Crie exemplos JSON formatados claramente para documentação técnica e compartilhamento de modelos de dados.",
        "<strong>Geração de código</strong>: Valide esquemas JSON antes do processamento por ferramentas de geração de código."
      ]
    }
  },
  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        question: "Qual a diferença entre formatar e compactar JSON?",
        answer: "Formatar (embelezar) adiciona recuos e quebras de linha para melhor legibilidade humana, enquanto compactar remove espaços para minimizar tamanho - ideal para transmissão eficiente."
      },
      {
        question: "Por que minha validação falha se o JSON parece correto?",
        answer: "Erros comuns incluem vírgulas extras no final, aspas simples invés de duplas, caracteres especiais não escapados e comentários (não suportados no padrão JSON)."
      },
      {
        question: "Como funcionam escape/unescape?",
        answer: "Escape converte caracteres especiais em sequências (ex: \" → \\\"), enquanto unescape reverte esse processo - essencial para lidar com conteúdo que pode quebrar a sintaxe JSON."
      },
      {
        question: "Posso processar arquivos grandes?",
        answer: "Recomendamos arquivos de até alguns MB para desempenho ideal. Para conjuntos maiores, considere ferramentas desktop especializadas ou processamento em lotes."
      },
      {
        question: "Como encontrar valores em estruturas complexas?",
        answer: "Use a visualização em árvore para expandir objetos aninhados e o recurso de copiar valores individuais diretamente da lista de propriedades."
      }
    ]
  },
  guide: {
    title: "Guia Passo a Passo",
    steps: [
      "<strong>Cole seus dados</strong>: Insira o JSON bruto na área de entrada",
      "<strong>Formate</strong>: Clique em 'Formatar JSON' para embelezar e validar",
      "<strong>Explore propriedades</strong>: Navegue pela árvore hierárquica no painel direito",
      "<strong>Copie valores</strong>: Clique em qualquer valor para copiá-lo individualmente",
      "<strong>Operações adicionais</strong>: Use compactação, escape ou limpeza conforme necessário",
      "<strong>Exporte resultados</strong>: Copie ou baixe o JSON processado",
      "<strong>Valide edições</strong>: Revalide após modificações manuais"
    ]
  },
  conclusion: "Como linguagem universal para troca de dados, JSON exige ferramentas eficientes como este formatador. Ao transformar estruturas complexas em representações legíveis e validar sua integridade, a ferramenta se torna essencial para desenvolvedores e analistas trabalhando com APIs, configurações e fluxos de dados modernos."
}
