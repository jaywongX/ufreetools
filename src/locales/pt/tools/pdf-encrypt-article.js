export default {
  title: 'Ferramenta de Criptografia de PDF: Solução Baseada no Navegador para Definir Senhas de Abertura e Permissões',
  functionTitle: 'O que é uma Ferramenta de Criptografia de PDF Online e Como Ela Protege os Documentos?',
  intro: 'Nossa <strong>ferramenta de criptografia de PDF online</strong> utiliza uma pilha de tecnologia puramente front-end de código aberto, suportando criptografia <strong>AES-128/AES-256 e RC4-40</strong>. Ela pode definir <strong>senhas de abertura (senhas do usuário)</strong> e <strong>senhas de permissões (senhas do proprietário)</strong>, ao mesmo tempo que fornece opções de controle de permissões para impressão, edição, cópia e preenchimento de formulários. Suporta upload por arrastar e soltar, seleção múltipla tradicional, importação em lote de URLs e adição em lote, oferecendo <strong>pré-visualização comparativa em tempo real</strong> e análise básica para ajudá-lo a verificar rapidamente os efeitos da criptografia e as configurações de permissões. Após a criptografia, você pode <span style="font-weight:bold">baixar individualmente</span> ou <span style="font-weight:bold">baixar em lote como ZIP</span>. Todas as operações são realizadas localmente no navegador sem upload para o servidor, garantindo privacidade e eficiência.',

  useCasesTitle: 'Cenários Comuns de Aplicação da Criptografia de PDF',
  useCases: [
    'Definir senhas de abertura e controles de permissões para documentos compartilhados empresariais',
    'Adicionar criptografia de alta segurança AES-256 a PDFs sensíveis como contratos e faturas',
    'Restringir impressão e cópia para prevenir distribuição não autorizada',
    'Definir impressão de baixa resolução e edição limitada para materiais de treinamento online',
    'Criptografar PDFs em lote e definir permissões uniformemente',
    'Criptografar rapidamente e pré-visualizar os efeitos da criptografia em dispositivos móveis',
    'Criptografia local no navegador sem upload para proteger a privacidade'
  ],

  tipTitle: 'Dicas Profissionais:',
  tipContent: 'Recomenda-se usar <strong>senhas fortes</strong> combinadas com o nível de criptografia <strong>AES-256</strong> para maior segurança; para melhor desempenho de busca, você pode preencher títulos e palavras-chave nos metadados e manter uma estratégia de nomenclatura consistente (a ferramenta atual não modifica os metadados do PDF).',

  conclusion: 'A <strong>ferramenta de criptografia de PDF online</strong> pode rapidamente concluir a criptografia e a configuração de permissões no navegador, adequada para vários cenários como empresas, instituições educacionais e usuários individuais. Ao definir senhas do usuário e senhas do proprietário e selecionar algoritmos de criptografia apropriados, você pode garantir a segurança mantendo uma boa usabilidade.',

  faqTitle: 'Perguntas Frequentes (FAQ)',
  faqs: [
    {
      question: 'Quais algoritmos de criptografia a ferramenta de criptografia de PDF online suporta?',
      answer: 'Esta ferramenta suporta criptografia <strong>AES-128</strong>, <strong>AES-256</strong> e criptografia <strong>RC4-40</strong> compatível com versões legadas. A escolha específica do algoritmo para criptografia de 128 bits (AES ou RC4) depende da configuração e versão do QPDF.'
    },
    {
      question: 'Como definir senhas de abertura (senhas do usuário) e senhas de permissões (senhas do proprietário)?',
      answer: 'Digite respectivamente a <strong>senha do usuário</strong> e a <strong>senha do proprietário</strong> na seção "Proteção por Senha"; a ferramenta atual requer ambos para executar a criptografia (isso pode ser relaxado para apenas senha do usuário em versões futuras).'
    },
    {
      question: 'Ela suporta criptografia em lote e pré-visualização comparativa em tempo real?',
      answer: 'Suporta importação em lote e adição em lote; após executar a criptografia, você pode realizar <strong>pré-visualização comparativa em tempo real</strong> (primeiras páginas do original e criptografado), e fornece botões de download individual (exibidos apenas após a conclusão da criptografia desse item) e <strong>download em lote ZIP</strong>.'
    }
  ],

  tutorialTitle: 'Como Usar a Ferramenta de Criptografia de PDF Online',
  steps: [
    {
      title: 'Adicionar Arquivos PDF',
      description: 'Faça upload via <strong>arrastar e soltar</strong> ou clique para selecionar arquivos (suporta <strong>seleção múltipla</strong> e <strong>adição em lote</strong>); você também pode colar várias URLs de uma vez na seção "Importação em Lote de URLs de PDF Online".',
      note: 'Recomenda-se primeiro se familiarizar com o processo usando PDFs de exemplo.'
    },
    {
      title: 'Pré-visualização e Análise',
      description: 'A ferramenta renderizará automaticamente a primeira página do PDF original e a primeira página do PDF criptografado para comparação após a conclusão da criptografia; para visualizar os efeitos das permissões, ajuste na seção "Controle de Permissões" à esquerda e criptografe novamente.',
      note: 'Se a pré-visualização falhar, o arquivo pode estar corrompido ou incompatível.'
    },
    {
      title: 'Definir Senhas e Permissões',
      description: 'Defina a <strong>senha do usuário</strong> e a <strong>senha do proprietário</strong> em "Proteção por Senha" enquanto visualiza as dicas de <strong>força da senha</strong>; configure permissões de impressão, edição, cópia e preenchimento de formulários em "Controle de Permissões".',
      note: 'Recomenda-se selecionar AES-256 e usar senhas fortes.'
    }
  ],

  successTitle: 'Concluído!',
  successContent: 'Você dominou como usar a ferramenta de criptografia de PDF online para definir senhas e permissões de documentos, e verificou o efeito da criptografia através da pré-visualização comparativa.',

  relatedToolsTitle: 'Ferramentas Relacionadas que Podem Interessar Você',
  relatedTools: [
        {
            name: 'Mesclador de PDF',
            description: 'Combina vários arquivos PDF em um documento PDF completo, suportando reordenação de páginas entre arquivos.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'Divisor de PDF',
            description: 'Divide documentos PDF grandes em vários arquivos PDF menores, suportando páginas de divisão personalizadas.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'Conversor de PDF para Word',
            description: 'Converte documentos PDF para o formato Word editável, preservando o layout e formatação originais.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'Conversor de PDF para Imagem',
            description: 'Converte cada página de um documento PDF em arquivos de imagem de alta qualidade, suportando múltiplos formatos de saída.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: 'Recursos de Referência',
  references: [
    { title: 'QPDF Oficial', description: 'QPDF é uma ferramenta poderosa de processamento estrutural e criptografia de PDF, fornecendo capacidades ricas de controle de permissões.' },
    { title: 'Documentação do PDF.js', description: 'PDF.js é uma biblioteca de código aberto para renderizar PDFs em navegadores, adequada para pré-visualização e recuperação de informações básicas.' },
    { title: 'Especificação de Referência PDF da Adobe', description: 'Os documentos de referência PDF da Adobe fornecem detalhes das especificações PDF e definições relacionadas à segurança.' }
  ],

  coverAlt: 'Imagem da Página do Produto da Ferramenta de Criptografia de PDF Online'
}