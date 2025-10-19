export default {
  title: 'Ferramenta de Descriptografia de PDF: Solução Baseada no Navegador para Remover Senhas de Abertura e Restrições de Permissões',
  functionTitle: 'O que é uma Ferramenta de Descriptografia de PDF Online e Quando é Necessário Descriptografar?',
  intro: 'Nossa <strong>ferramenta de descriptografia de PDF online</strong> é baseada em uma pilha de tecnologia open-source puramente front-end. Ela suporta fornecer uma <strong>senha de abertura (senha do usuário)</strong> para PDFs criptografados para realizar a descriptografia, removendo restrições de permissões como impressão, edição, cópia e preenchimento de formulários. Suporta upload por arrastar e soltar, seleção múltipla tradicional, importação em lote de URLs e adição em lote, oferecendo <strong>pré-visualização comparativa em tempo real</strong> e análise básica para ajudá-lo a verificar rapidamente o efeito da descriptografia. Após a conclusão da descriptografia, você pode <span style="font-weight:bold">baixar individualmente</span> ou <span style="font-weight:bold">baixar em lote como ZIP</span>. Todas as operações são realizadas localmente no navegador sem upload para o servidor, protegendo a privacidade e garantindo eficiência.',

  useCasesTitle: 'Cenários Comuns de Aplicação da Descriptografia de PDF',
  useCases: [
    'Remover restrições de permissões de documentos compartilhados empresariais para edição interna',
    'Realizar descriptografia compatível para documentos com configurações de permissões do proprietário esquecidas',
    'Restaurar capacidades de impressão e cópia para revisão e reutilização de conteúdo',
    'Remover restrições de baixa resolução de materiais de treinamento ou relatórios para melhorar a qualidade de saída',
    'Descriptografar em lote vários PDFs e processá-los uniformemente',
    'Descriptografar rapidamente e pré-visualizar os efeitos da descriptografia em dispositivos móveis',
    'Descriptografia local no navegador sem upload para proteger a privacidade'
  ],

  tipTitle: 'Dicas Profissionais:',
  tipContent: 'Recomenda-se descriptografar apenas PDFs para os quais você tem autorização de uso legítima; para melhor desempenho de busca, você pode preencher títulos e palavras-chave nos metadados e manter estratégias de nomenclatura consistentes (a ferramenta atual não modifica os metadados do PDF).',

  conclusion: 'A <strong>ferramenta de descriptografia de PDF online</strong> pode remover rapidamente restrições de permissões e restaurar conteúdo no navegador, adequada para vários cenários como empresas, instituições educacionais e usuários individuais. Ao fornecer a senha de abertura correta e realizar a descriptografia, você pode melhorar a usabilidade do documento dentro dos limites de conformidade.',

  faqTitle: 'Perguntas Frequentes (FAQ)',
  faqs: [
    {
      question: 'Como funciona a ferramenta de descriptografia de PDF online?',
      answer: 'Esta ferramenta é baseada nas capacidades de descriptografia do QPDF. Após fornecer a <strong>senha de abertura</strong>, ela executa a operação <strong>--decrypt</strong> para remover as restrições de permissões do documento e gerar um novo PDF utilizável.'
    },
    {
      question: 'Ela suporta descriptografia em lote e pré-visualização comparativa em tempo real?',
      answer: 'Suporta importação em lote e adição em lote; após realizar a descriptografia, você pode conduzir uma <strong>pré-visualização comparativa em tempo real</strong> (primeiras páginas do original e do descriptografado), e fornece botões de download individual e <strong>download em lote ZIP</strong>.'
    },
    {
      question: 'É possível usar esta ferramenta se o PDF não estiver criptografado?',
      answer: 'Sim. Para PDFs não criptografados, a ferramenta irá diretamente produzir um arquivo consistente com o conteúdo original para tratamento uniforme do processo.'
    }
  ],

  tutorialTitle: 'Como Usar a Ferramenta de Descriptografia de PDF Online',
  steps: [
    {
      title: 'Adicionar Arquivos PDF',
      description: 'Faça upload via <strong>arrastar e soltar</strong> ou clique para selecionar arquivos (suporta <strong>seleção múltipla</strong> e <strong>adição em lote</strong>); você também pode colar várias URLs de uma vez na seção "Importação em Lote de URLs de PDF Online".',
      note: 'Recomenda-se familiarizar-se primeiro com o processo usando PDFs de exemplo.'
    },
    {
      title: 'Fornecer Senha de Abertura (se necessário)',
      description: 'Se o PDF estiver criptografado, por favor digite a <strong>senha de abertura (senha do usuário)</strong> em "Senha de Descriptografia" para realizar a descriptografia; se não estiver criptografado, você pode executar diretamente.',
      note: 'Senhas incorretas causarão falha na descriptografia ou na pré-visualização.'
    },
    {
      title: 'Realizar Descriptografia e Pré-visualização',
      description: 'Após clicar em "Executar Descriptografia", um novo PDF é gerado, e as primeiras páginas do original e do descriptografado são comparadas na área de pré-visualização direita.',
      note: 'Se a pré-visualização falhar, o arquivo pode estar corrompido ou incompatível.'
    }
  ],

  successTitle: 'Concluído!',
  successContent: 'Você dominou como usar a ferramenta de descriptografia de PDF online para remover restrições de permissões de documentos e verificar os efeitos da descriptografia.',

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
    { title: 'QPDF Oficial', description: 'QPDF fornece capacidades poderosas de processamento estrutural de PDF, incluindo criptografia e descriptografia.' },
    { title: 'Documentação do PDF.js', description: 'PDF.js é uma biblioteca open-source para renderizar PDFs em navegadores, adequada para pré-visualização e recuperação de informações básicas.' },
    { title: 'Especificação de Referência PDF da Adobe', description: 'Os documentos de referência PDF da Adobe fornecem detalhes das especificações PDF e definições relacionadas à segurança.' }
  ],

  coverAlt: 'Imagem da Página do Produto da Ferramenta de Descriptografia de PDF Online'
}