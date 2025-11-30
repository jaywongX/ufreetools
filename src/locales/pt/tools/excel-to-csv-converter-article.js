export default {
    title: 'Conversor de Excel para CSV: Guia de Uso da Ferramenta Online de Conversão em Lote de Arquivos Excel',
    functionTitle: 'O que é o conversor de Excel para CSV e para que serve?',
    intro: 'Nosso <strong>conversor de Excel para CSV</strong> é uma ferramenta online poderosa que pode converter rapidamente arquivos Excel (.xlsx e .xls) para o formato CSV. Esta ferramenta suporta processamento em lote de múltiplos arquivos, reconhecimento de múltiplas planilhas, delimitadores personalizados e formatos de codificação, atendendo às necessidades de importação de dados de diferentes sistemas e softwares. Ao usar nossa <strong>ferramenta online Excel para CSV</strong>, você pode facilmente lidar com grandes volumes de arquivos de dados sem precisar instalar nenhum software, todas as conversões são realizadas localmente no navegador, garantindo a segurança dos dados.',

    useCasesTitle: 'Cenários Comuns de Aplicação da Conversão de Excel para CSV',
    useCases: [
        'Importar dados do Excel para sistemas de banco de dados (MySQL, PostgreSQL, etc.)',
        'Preparar dados no formato CSV para ferramentas de análise de dados (Python pandas, linguagem R)',
        'Importar em lote dados de usuários ou informações de produtos em aplicações web',
        'Converter relatórios do Excel para o formato CSV para uso por outros sistemas',
        'Processar arquivos Excel de múltiplas planilhas e exportá-los separadamente como CSV',
        'Converter em lote arquivos históricos do Excel para projetos de migração de dados',
        'Converter dados do Excel para o formato CSV para controle de versão',
        'Preparar arquivos de dados CSV padronizados para interfaces API'
    ],

    logoAlt: "Pré-visualização do produto do conversor de Excel para CSV",
    tipTitle: 'Dica Profissional:',
    tipContent: 'Para dados que contêm caracteres especiais ou quebras de linha, recomenda-se usar aspas duplas como qualificador de texto, isso pode garantir que não ocorram erros de formato ao importar arquivos CSV para outros sistemas. Para dados em chinês, recomenda-se usar a codificação UTF-8 BOM, para garantir que os caracteres chineses sejam exibidos corretamente ao abrir no Excel.',

    conclusion: 'A ferramenta de <strong>conversão de Excel para CSV</strong> é particularmente útil para analistas de dados, desenvolvedores, administradores de dados e usuários que precisam frequentemente processar arquivos Excel. Ao usar nosso conversor, você pode rapidamente converter dados do Excel para o formato CSV, facilitando o compartilhamento de dados entre diferentes sistemas e ferramentas. Nossa ferramenta suporta processamento em lote, configuração de formato personalizada e pré-visualização em tempo real, tornando o processo de conversão de dados simples e eficiente, sem necessidade de instalar software.',

    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais formatos do Excel o conversor de Excel para CSV suporta?',
            answer: 'Nossa <strong>ferramenta online Excel para CSV</strong> suporta os dois principais formatos do Excel: .xlsx (Office Open XML) e .xls (formato binário tradicional). A ferramenta pode automaticamente identificar o formato do arquivo e realizar o processamento apropriado, suportando arquivos Excel de múltiplas planilhas, onde você pode escolher converter todas as planilhas ou uma planilha específica.'
        },
        {
            question: 'O arquivo CSV convertido manterá o formato de dados original?',
            answer: 'O formato CSV em si não contém informações de formatação (como fonte, cor, fórmulas, etc.), mas todo o conteúdo dos dados será completamente preservado. Datas, números e dados textuais serão corretamente convertidos. Se uma célula do Excel contiver fórmulas, o conversor extrairá o valor do resultado calculado das fórmulas.'
        },
        {
            question: 'Como lidar com dados do Excel que contêm caracteres especiais?',
            answer: 'Nossa ferramenta suporta qualificadores de texto personalizados (aspas duplas ou simples), que podem corretamente lidar com dados que contêm vírgulas, quebras de linha, aspas e outros caracteres especiais. Recomenda-se selecionar aspas duplas como qualificador de texto ao converter dados que contenham caracteres especiais, isso pode garantir que o formato do arquivo CSV esteja correto.'
        },
        {
            question: 'É possível converter vários arquivos Excel em lote?',
            answer: 'Sim, nossa <strong>ferramenta de conversão em lote de Excel para CSV</strong> suporta completamente o processamento em lote. Você pode enviar vários arquivos Excel simultaneamente, a ferramenta processará cada arquivo sequencialmente e fornecerá uma função de download em lote ao concluir, empacotando todos os arquivos CSV convertidos em um arquivo ZIP para download.'
        },
        {
            question: 'Quais formatos de codificação o arquivo CSV convertido suporta?',
            answer: 'Nossa ferramenta suporta múltiplos formatos de codificação, incluindo UTF-8, UTF-8 BOM, GBK e ANSI. O formato UTF-8 BOM é particularmente adequado para abrir arquivos CSV que contêm caracteres chineses no Excel, enquanto o formato UTF-8 é mais adequado para uso em programas. Você pode escolher o formato de codificação apropriado de acordo com as necessidades do sistema de destino.'
        },
        {
            question: 'É possível processar arquivos Excel criptografados ou protegidos?',
            answer: 'Devido às limitações do ambiente do navegador, nossa ferramenta não pode processar arquivos Excel protegidos por senha. Se seus arquivos Excel estiverem criptografados, primeiro descriptografe-os usando o software Excel antes de realizar a conversão. Para arquivos Excel não criptografados, nossa ferramenta pode lidar perfeitamente.'
        }
    ],

    tutorialTitle: 'Como Usar o Conversor de Excel para CSV',
    steps: [
        {
            title: 'Enviar Arquivos Excel',
            description: 'Primeiro envie os arquivos Excel que deseja converter. Você pode simplesmente <strong>arrastar e soltar</strong> os arquivos na área de envio, ou clicar em procurar e selecionar os arquivos do seu dispositivo. Nossa ferramenta suporta os formatos .xlsx e .xls, você pode enviar vários arquivos simultaneamente para conversão em lote.',
            note: 'Você também pode usar a função "Importar de URL" para inserir diretamente o endereço web de um arquivo Excel e realizar a conversão.'
        },
        {
            title: 'Selecionar Planilha (opcional)',
            description: 'Se seus arquivos Excel contiverem múltiplas planilhas, você pode selecionar a planilha a ser convertida para cada arquivo na lista de arquivos. Por padrão, a ferramenta converterá todas as planilhas, cada planilha gerará um arquivo CSV independente.',
            note: 'Para arquivos Excel grandes, recomenda-se primeiro selecionar uma única planilha para teste, confirmando que os resultados da conversão atendem às expectativas antes do processamento em lote.'
        },
        {
            title: 'Configurar Opções do Formato CSV',
            description: 'Na área de "Configurações do formato CSV", você pode personalizar o delimitador (vírgula, ponto e vírgula, tabulação, etc.), qualificador de texto (aspas duplas, aspas simples ou nenhum), fim de linha (Windows/Unix/Mac) e formato de codificação (UTF-8, UTF-8 BOM, GBK, ANSI). Essas configurações afetarão o formato do arquivo CSV convertido.',
            note: 'Para dados em chinês, recomenda-se usar a codificação UTF-8 BOM; para arquivos que serão abertos no Excel, recomenda-se usar aspas duplas como qualificador de texto.'
        },
        {
            title: 'Pré-visualizar Dados (opcional)',
            description: 'Antes da conversão, você pode clicar em "Pré-visualização de dados" para ver o conteúdo do arquivo Excel. A função de pré-visualização mostrará as primeiras linhas de dados, ajudando você a confirmar se o formato e conteúdo do arquivo estão corretos.',
            note: 'A função de pré-visualização pode ajudá-lo a descobrir problemas de formato de dados, evitando encontrar erros após a conversão.'
        },
        {
            title: 'Executar Conversão',
            description: 'Clique no botão <strong>"Iniciar conversão"</strong> para começar o processamento dos arquivos. A ferramenta mostrará o progresso da conversão, incluindo o arquivo atual sendo processado, planilha e número de linhas. O processo de conversão é realizado completamente localmente no navegador, sem enviar os dados para o servidor.',
            note: 'Para arquivos grandes, a conversão pode levar algum tempo, por favor seja paciente. Você pode ver o processo detalhado de conversão no log de processamento.'
        },
        {
            title: 'Baixar Resultados da Conversão',
            description: 'Após a conclusão da conversão, você pode clicar no botão <strong>"Baixar"</strong> abaixo de cada arquivo CSV para salvá-lo individualmente, ou usar o botão <strong>"Download em lote"</strong> na parte superior para empacotar todos os arquivos CSV em um arquivo ZIP e baixá-lo. Os nomes dos arquivos serão gerados automaticamente de acordo com suas configurações.',
            note: 'Todo o processamento é realizado no seu navegador, portanto seus arquivos Excel nunca são enviados para nenhum servidor, garantindo a privacidade e segurança dos dados.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nosso conversor de Excel para CSV. Agora você pode facilmente converter arquivos Excel para o formato CSV para análise de dados, importação de bancos de dados ou outras finalidades.',

    relatedToolsTitle: 'Ferramentas Relacionadas que Podem Interessar Você',
    relatedTools: [
        {
            name: 'Conversor de Leitura Biônica',
            description: 'Conversor online gratuito de leitura biônica, converte texto em tempo real para o estilo Bionic Reading.',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: 'Redimensionador de Imagens',
            description: 'Ajusta imagens para dimensões específicas ou as redimensiona por porcentagem.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Gerador de Carimbos',
            description: 'Cria online diversos tipos de imagens de carimbos, gera carimbos corporativos, carimbos pessoais e outros carimbos digitais.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Gerador de Códigos QR',
            description: 'Cria códigos QR personalizados para URLs, textos, informações de contato, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Especificações do Formato de Arquivo CSV (RFC 4180)',
            description: 'Conheça as especificações de formato padrão e melhores práticas de arquivos CSV',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Padrão Office Open XML',
            description: 'Conheça as especificações técnicas do formato de arquivo Excel .xlsx',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Padrões de Codificação de Caracteres (Unicode)',
            description: 'Conheça os padrões de codificação de caracteres como UTF-8, GBK, etc.',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}