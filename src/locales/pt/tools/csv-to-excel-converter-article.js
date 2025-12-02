export default {
    title: 'Conversor de CSV para Excel: Guia de Conversão em Lote de Alta Fidelidade e Exportação Multi-Tabela',
    functionTitle: 'Como o Conversor de CSV para Excel Resolve os Desafios de Interação de Dados entre Sistemas?',
    intro: '<p>O Conversor de CSV para Excel é projetado para cenários de análise de dados, integração de sistemas e importação em lote, permitindo a conversão direta de dados de texto como CSV, TSV e TXT em pastas de trabalho do Excel no navegador. A ferramenta suporta detecção automática de codificação, detecção inteligente de delimitadores, processamento em lote de múltiplos arquivos, registro em tempo real e visualização de dados, permitindo que as equipes gerem rapidamente resultados .xlsx compatíveis sem instalar software de desktop.</p>',
    useCasesTitle: 'Cenários de Aplicação Típicos',
    useCases: [
        'Converter dados de pedidos CSV exportados de plataformas de comércio eletrônico em relatórios do Excel para revisão financeira e arquivamento',
        'Converter em lote arquivos TSV gerados por sistemas de coleta de logs em arquivos do Excel de múltiplas planilhas para análise por ferramentas de BI',
        'Organizar dados históricos de CSV em modelos do Excel antes do lançamento de sistemas CRM ou ERP para importação em lote',
        'Preparar arquivos do Excel formatados para colaboração entre departamentos, permitindo que membros não técnicos visualizem dados com segurança',
        'Gerar anexos do Excel mais legíveis para entrega de dados ou licitações para atender aos requisitos de conformidade de auditoria',
        'Converter em lote CSV retornados por APIs para Excel, combinando com modelos de gráficos ou macros para análise rápida',
        'Organizar logs de dispositivos IoT CSV em documentos do Excel de múltiplas planilhas de acordo com o tipo de dispositivo',
        'Converter dados de CSV de exemplo em arquivos de prática do Excel com um clique em cenários de treinamento ou ensino'
    ],
    logoAlt: "Visualização do Produto Conversor de CSV para Excel",
    tipTitle: 'Dica Profissional:',
    conclusion: '<p>Baseado em implementação puramente front-end, o <strong>Conversor de CSV para Excel</strong> permite que engenheiros de dados e usuários empresariais completem conversão em lote, nomenclatura padronizada e saída de múltiplas planilhas sem carregar arquivos sensíveis. Combinado com registro e detecção de codificação, minimiza falhas de importação causadas por inconsistências de formato. Para limpeza ou divisão adicional de dados, você pode usar o <a href="https://www.ufreetools.com/tool/excel-to-csv-converter" target="_blank">Conversor de Excel para CSV</a> para conversão bidirecional; para entender padrões CSV, consulte <a href="https://tools.ietf.org/html/rfc4180" target="_blank" rel="noopener noreferrer">RFC 4180</a> para especificações autoritativas.</p>',
    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais delimitadores e qualificadores de texto o Conversor de CSV para Excel suporta?',
            answer: '<p>A ferramenta possui opções embutidas de vírgula, ponto e vírgula, tabulação, barra vertical e delimitadores personalizados, e suporta CSV complexos com aspas duplas, simples ou sem qualificadores. Se você selecionar "Detecção Automática", o sistema calculará a combinação de delimitadores mais provável com base nas primeiras linhas de dados para garantir uma contagem de colunas precisa no Excel convertido.</p>'
        },
        {
            question: 'Como lidar com arquivos CSV com diferentes codificações?',
            answer: '<p>Fornecemos detecção automática de codificação e permitimos especificação manual de codificações comuns como UTF-8, UTF-8 BOM, UTF-16 LE e GBK. Se você encontrar codificações especiais, pode convertê-las para UTF-8 em ferramentas externas primeiro antes de carregar para garantir que caracteres chineses ou símbolos no Excel não apareçam distorcidos.</p>'
        },
        {
            question: 'É possível mesclar vários arquivos CSV na mesma pasta de trabalho do Excel?',
            answer: '<p>Sim. Marque "Combinar em um Único Arquivo do Excel" nas "Configurações da Pasta de Trabalho do Excel", e o sistema gerará uma planilha para cada CSV. Os nomes das planilhas podem ser baseados em nomes de arquivo ou prefixos personalizados, e carimbos de tempo podem ser adicionados para fácil rastreamento de origem.</p>'
        },
        {
            question: 'O Excel convertido manterá cabeçalhos e linhas vazias do CSV?',
            answer: '<p>Por padrão, a primeira linha é mantida como cabeçalho, e linhas vazias, células vazias e ordem de dados originais são totalmente preservados. Para ignorar cabeçalhos, você pode desativar a opção "A Primeira Linha Contém Cabeçalho" nas configurações e reexecutar a conversão, e o sistema gerará o Excel no modo de dados puros.</p>'
        },
        {
            question: 'Como visualizar o processo e solucionar erros durante a conversão em lote?',
            answer: '<p>Cada conversão gera um log de processo registrando arquivos analisados, planilhas criadas, estatísticas de linhas/colunas e possíveis erros. Você pode expandir o painel de log ou clicar em "Copiar Log" para compartilhar com a equipe, facilitando a solução de problemas antes da implantação de código ou entrega de dados.</p>'
        }
    ],
    tutorialTitle: 'Guia de Operação',
    steps: [
        {
            title: 'Enviar ou Importar Arquivos CSV',
            description: 'Clique no botão de envio ou arraste arquivos para a área designada, suportando processamento em lote de múltiplos arquivos. Você também pode colar links CSV públicos em "Importar de URL", e o sistema os buscará automaticamente e os adicionará à fila.',
            note: 'Recomenda-se manter arquivos individuais abaixo de 50MB. Arquivos grandes podem ser divididos e convertidos em lotes.'
        },
        {
            title: 'Verificar Resultados de Detecção Automática',
            description: 'O sistema tentará detectar codificação e delimitador, e exibirá as primeiras linhas de dados brutos. Se os resultados de detecção não corresponderem às expectativas, você pode selecionar manualmente codificação ou delimitador para garantir contagem de colunas correta e exibição adequada de caracteres chineses.',
            note: 'Se necessário, converta a codificação em ferramentas de terceiros antes de enviar novamente.'
        },
        {
            title: 'Configurar Opções de Análise de CSV',
            description: 'Ajuste delimitador, qualificador de texto, fim de linha e opções de cabeçalho em "Configurações de Análise de CSV". CSV gerados por diferentes idiomas ou sistemas variam bastante, então é recomendável configurar de acordo com as regras de exportação do sistema de origem.',
            note: 'Manter "A Primeira Linha Contém Cabeçalho" gerará linhas de cabeçalho no Excel.'
        },
        {
            title: 'Definir Política da Pasta de Trabalho do Excel',
            description: 'Personalize o nome da pasta de trabalho, regras de nomeação de planilhas e se deve combinar em um único Excel. Para cenários de agregação de múltiplos arquivos, habilite "Combinar em um Único Arquivo do Excel" e adicione carimbos de tempo para fácil rastreamento posterior.',
            note: 'Se a combinação for cancelada, a ferramenta produzirá um arquivo .xlsx independente para cada CSV.'
        },
        {
            title: 'Executar Conversão e Monitorar Logs',
            description: 'Após clicar em "Converter para Excel", o sistema exibirá uma barra de progresso em tempo real e registrará etapas de análise, criação de tabelas, estatísticas, etc. no log. Erros interromperão o processamento do arquivo atual e mostrarão detalhes no log.',
            note: 'Os logs suportam expansão, recolhimento e cópia com um clique para solução colaborativa de problemas.'
        },
        {
            title: 'Baixar Excel ou Pacote em Lote',
            description: 'Após a conclusão da conversão, você pode baixar arquivos do Excel individualmente, ou clicar em "Download em Lote (ZIP)" para obter todos os resultados de uma vez. A lista mostrará nomes de planilhas, tamanhos de arquivos e fragmentos de visualização para cada pasta de trabalho para verificação rápida.',
            note: 'Todas as operações são concluídas no navegador local sem carregar para o servidor, garantindo segurança dos dados.'
        }
    ],
    successTitle: 'Conversão Concluída',
    successContent: 'Parabéns! Você aprendeu a usar o Conversor de CSV para Excel para organizar rapidamente dados de texto dispersos em resultados do Excel estruturados para análise, relatórios ou integração de sistemas.',
    relatedToolsTitle: 'Ferramentas Relacionadas Recomendadas',
    relatedTools: [
        {
            name: 'Conversor de Excel para CSV',
            description: 'Exportação em lote de pastas de trabalho do Excel para CSV, mantendo codificação e delimitadores consistentes.',
            url: 'https://www.ufreetools.com/tool/excel-to-csv-converter'
        },
        {
            name: 'Redimensionador de Imagens',
            description: 'Redimensiona imagens para dimensões específicas ou escala por porcentagem.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Gerador de Carimbos',
            description: 'Cria várias imagens de carimbos online, gerando carimbos corporativos, carimbos pessoais e outros carimbos digitais.',
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
            name: 'RFC 4180 - Padrão CSV',
            description: 'Conheça as especificações formais e convenções de campo do formato de arquivo CSV.',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Especificação Microsoft Excel Open XML',
            description: 'Obtenha compreensão profunda da estrutura de arquivos .xlsx e requisitos de compatibilidade.',
            url: 'https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/' 
        },
        {
            name: 'Padrão de Codificação WHATWG',
            description: 'Lista de codificações de texto suportadas por navegadores e detalhes de implementação.',
            url: 'https://encoding.spec.whatwg.org/'
        }
    ]
}