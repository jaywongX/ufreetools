export default {
  title: "Testador de Regex: Ferramenta interativa para correspondência de padrões",
  features: {
    title: "Entendendo expressões regulares",
    description: "<strong>O Testador de Expressões Regulares</strong> é uma ferramenta interativa poderosa para desenvolvedores, analistas de dados e profissionais de processamento de texto criarem, testarem e depurarem expressões regulares (regex). Regex são sequências de caracteres especiais que definem padrões de busca para correspondência, extração e manipulação complexa de texto.<br><br>Nossa <strong>ferramenta de teste de regex</strong> fornece feedback visual em tempo real enquanto você constrói padrões, destacando correspondências no texto de teste e mostrando detalhes sobre grupos de captura e posições de correspondência.",
    useCases: {
      title: "Aplicações práticas de regex",
      items: [
        "<strong>Validação de formulários</strong>: Desenvolvedores web podem usar este <strong>testador de padrões regex</strong> para ajustar expressões que validam endereços de email, números de telefone, senhas e outros campos.",
        "<strong>Extração de dados</strong>: Analistas de dados usam regex para extrair informações específicas de textos não estruturados.",
        "<strong>Processamento de texto</strong>: Editores e desenvolvedores usam padrões regex para buscar e substituir textos em múltiplos documentos.",
        "<strong>Análise de logs</strong>: Administradores de sistemas usam regex para analisar arquivos de log e identificar mensagens de erro.",
        "<strong>Consultas de busca</strong>: Regex permite buscas avançadas em motores de busca, editores de código e bancos de dados.",
        "<strong>Aprendizado</strong>: Estudantes podem usar esta <strong>ferramenta interativa</strong> para aprender regex vendo resultados imediatos."
      ]
    }
  },
  faq: {
    title: "Perguntas frequentes sobre regex",
    items: [
      {
        question: "O que são expressões regulares e por que são úteis?",
        answer: "Expressões regulares (regex) são padrões de texto especiais para busca em strings. Elas permitem:<br><br>• <strong>Buscar padrões específicos</strong> em textos<br>• <strong>Validar formatos</strong> como emails, telefones ou datas<br>• <strong>Extrair partes específicas</strong> de documentos<br>• <strong>Substituir textos</strong> baseado em padrões<br><br>Nosso <strong>testador de padrões regex</strong> ajuda a dominar esse poder."
      },
      {
        question: "O que significam as flags g, i, m, s, u e y?",
        answer: "Flags modificam o comportamento da correspondência:<br><br>• <strong>g (global)</strong>: Encontra todas as correspondências<br>• <strong>i (ignore case)</strong>: Ignora diferenças de maiúsculas/minúsculas<br>• <strong>m (multiline)</strong>: Altera o comportamento de ^ e $<br>• <strong>s (dotall)</strong>: Faz . corresponder a quebras de linha<br>• <strong>u (unicode)</strong>: Habilita suporte a Unicode<br>• <strong>y (sticky)</strong>: Correspondência a partir de posição específica"
      },
      {
        question: "Como funcionam grupos de captura em regex?",
        answer: "Grupos de captura (definidos por parênteses ()) extraem partes específicas do texto correspondente. Eles são mostrados na seção de detalhes de correspondência do nosso <strong>validador de regex</strong>."
      },
      {
        question: "Por que minha regex não está correspondendo como esperado?",
        answer: "Problemas comuns incluem:<br><br>1. <strong>Caracteres especiais</strong> não escapados<br>2. <strong>Quantificadores gananciosos</strong> (*, +)<br>3. <strong>Flags ausentes</strong> (g, i)<br>4. <strong>Espaços em branco</strong> não considerados<br>5. <strong>Âncoras mal usadas</strong> (^, $)<br><br>Nossa <strong>ferramenta de teste</strong> ajuda a identificar esses problemas com feedback visual."
      }
    ]
  },
  guide: {
    title: "Como usar o testador de regex: Guia passo a passo",
    step1: "<strong>Insira o padrão regex</strong>: No campo 'Expressão Regular', digite sua regex sem as barras.",
    step2: "<strong>Selecione as flags</strong>: Escolha flags como 'g' (global), 'i' (ignorar maiúsculas/minúsculas) ou 'm' (multilinha).",
    step3: "<strong>Insira o texto de teste</strong>: No campo 'Texto de Teste', digite o texto onde a regex será aplicada.",
    step4: "<strong>Clique em 'Testar'</strong>: Veja os resultados da correspondência no texto.",
    step5: "<strong>Analise os resultados</strong>: Correspondências são destacadas e detalhadas.",
    step6: "<strong>Ajuste o padrão</strong>: Modifique a regex conforme necessário e teste novamente.",
    step7: "<strong>Explore exemplos</strong>: Use exemplos prontos para emails, telefones, datas etc."
  },
  conclusion: "O Testador de Expressões Regulares simplifica a criação e depuração de padrões regex com feedback visual em tempo real, destacando correspondências e detalhando cada componente. Seja para validação de dados, extração de informações ou aprendizado, esta ferramenta interativa ajuda profissionais a dominar regex com eficiência."
}
