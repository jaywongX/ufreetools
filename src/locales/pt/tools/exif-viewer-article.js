export default {
    title: 'Guia do Visualizador EXIF Online: Ferramenta de Extração de Metadados de Imagens',
    imageAlt: 'Visualizador EXIF Online - Ferramenta de Extração de Metadados de Imagens',
    functionTitle: 'O que é o Visualizador EXIF Online e para que serve?',
    intro: 'O nosso <strong>Visualizador EXIF Online</strong> é uma ferramenta poderosa de extração de metadados de imagens que pode ler e analisar rapidamente as informações EXIF (Formato de Arquivo de Imagem Intercambiável) incorporadas nas imagens. Os dados EXIF contêm metadados ricos como parâmetros de disparo, informações da câmera, localização GPS, etc., que são valiosos para fotógrafos, designers, pesquisadores e utilizadores gerais. Com o nosso <strong>Visualizador de Informações EXIF</strong>, pode visualizar informações completas de metadados de imagens diretamente no seu navegador sem instalar qualquer software. Todo o processamento é feito localmente, garantindo a sua privacidade e segurança.',
    
    useCasesTitle: 'Cenários Comuns de Aplicação do Visualizador EXIF',
    useCases: [
        'Fotógrafos visualizam e analisam parâmetros de disparo para aprender excelentes técnicas fotográficas',
        'Verificar a autenticidade e fonte das imagens, verificar informações de hora e local de disparo',
        'Organizar e arquivar fotografias, classificar e organizar automaticamente com base em informações EXIF',
        'Marcação geográfica e rastreamento de localização, visualizar coordenadas GPS e locais de disparo das fotografias',
        'Análise de desempenho da câmera e lente, comparar efeitos de disparo de diferentes dispositivos',
        'Proteção de direitos autorais e recolha de evidências, extrair informações de disparo originais das imagens',
        'Referência para pós-processamento de fotografias, compreender parâmetros de disparo originais para ajuste preciso',
        'Registos de viagem e organização de memórias, rever locais de disparo através de informações GPS'
    ],
    
    tipTitle: 'Dica Profissional:',
    tipContent: 'A maioria das plataformas de redes sociais (como WeChat, Weibo) elimina automaticamente os dados EXIF ao carregar imagens para proteger a privacidade. Se precisar de visualizar informações EXIF completas, utilize ficheiros de imagem originais não processados.',
    
    conclusion: 'A ferramenta de <strong>visualização de metadados EXIF</strong> é particularmente útil para fotógrafos, designers, pesquisadores e qualquer pessoa que precise de compreender informações detalhadas de imagens. Ao usar o nosso visualizador EXIF, pode obter conhecimentos profundos sobre o contexto de disparo das imagens, verificar a autenticidade, ou simplesmente satisfazer a sua curiosidade sobre informações de imagens. A nossa ferramenta suporta múltiplos formatos de imagem, incluindo JPEG, HEIC, WebP, PNG e alguns formatos RAW e TIFF, tornando este processo simples e eficiente sem instalar qualquer software.',
    
    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'O que são dados EXIF?',
            answer: 'EXIF (Exchangeable Image File Format) é um padrão para armazenar informações de metadados de fotografias digitais. Esta informação inclui hora de disparo, modelo da câmera, informações da lente, abertura, velocidade do obturador, sensibilidade ISO, localização GPS, etc. Quando tira fotografias com uma câmera digital ou telemóvel, esta informação é incorporada automaticamente no ficheiro de imagem. Usando o nosso <strong>Visualizador de Dados EXIF Online</strong>, pode ler e analisar facilmente esta informação.'
        },
        {
            question: 'Visualizar informações EXIF vai revelar a minha privacidade?',
            answer: 'Não. A nossa ferramenta funciona inteiramente localmente no seu navegador. Todo o processamento de imagens é realizado no seu dispositivo e não é carregado para nenhum servidor. Isto significa que as suas imagens e dados EXIF nunca saem do seu dispositivo, garantindo privacidade e segurança completas.'
        },
        {
            question: 'Porque é que algumas imagens não têm informações EXIF?',
            answer: 'Razões pelas quais algumas imagens podem não ter dados EXIF incluem: informação EXIF eliminada após processamento com software de edição, imagens de plataformas de redes sociais (estas plataformas geralmente eliminam dados EXIF), formatos de imagem que não suportam EXIF (como certos ficheiros PNG), ou imagens obtidas de capturas de ecrã web. Usando a nossa <strong>Ferramenta de Extração de Metadados EXIF</strong> pode verificar rapidamente se as imagens contêm informações EXIF.'
        },
        {
            question: 'Que formatos de imagem são suportados?',
            answer: 'A nossa ferramenta suporta múltiplos formatos de imagem, incluindo JPEG (suporte EXIF mais completo), HEIC (formato de fotografias iPhone), WebP, PNG (suporte limitado), TIFF e alguns formatos RAW (como CR2, NEF, ARW, etc.). Para formatos RAW, o nível de suporte depende do formato específico e da compatibilidade do navegador.'
        },
        {
            question: 'Como é exibida a informação GPS?',
            answer: 'Se a imagem contiver informações de coordenadas GPS, a nossa ferramenta irá exibir coordenadas de latitude e longitude (suportando formato graus-minutos-segundos e formato graus decimais) e mostrar o local de disparo num mapa integrado. Também pode usar a função de geocodificação reversa para converter coordenadas GPS em nomes reais de localizações geográficas (como cidade, rua, etc.).'
        },
        {
            question: 'É possível processar múltiplas imagens em lote?',
            answer: 'Sim, a nossa ferramenta suporta processamento em lote. Pode carregar múltiplas imagens de uma vez, e a informação EXIF de cada imagem será exibida separadamente. Também pode usar a função de exportação em lote para exportar a informação EXIF de todas as imagens em formato JSON ou CSV para análise e processamento posteriores.'
        },
        {
            question: 'Que formatos de dados são suportados para exportação?',
            answer: 'Suportamos múltiplos formatos de exportação: formato JSON (dados estruturados completos adequados para processamento por programa), formato CSV (forma tabular adequada para abrir no Excel e outros softwares), relatório resumo (relatório de texto conciso adequado para leitura) e gráficos de visualização (exibir parâmetros-chave em forma de gráfico adequada para análise).'
        }
    ],
    
    tutorialTitle: 'Como Usar o Visualizador EXIF Online',
    steps: [
        {
            title: 'Carregue as suas imagens',
            description: 'Primeiro, carregue as imagens cujas informações EXIF deseja visualizar. Pode <strong>arrastar e largar</strong> ficheiros diretamente na área de carregamento, ou clicar em procurar e selecionar ficheiros do seu dispositivo. A nossa ferramenta suporta múltiplos formatos incluindo JPEG, HEIC, WebP, PNG, RAW e TIFF.',
            note: 'Pode carregar múltiplas imagens de uma vez para processamento em lote.'
        },
        {
            title: 'Visualizar Informações EXIF',
            description: 'Após o carregamento, a ferramenta irá ler automaticamente os dados EXIF das imagens. Se as imagens contiverem informações EXIF, verá metadados detalhados, incluindo informações básicas de disparo (marca/modelo da câmera, hora de disparo, tamanho do ficheiro, etc.), parâmetros de disparo (abertura, obturador, ISO, etc.), localização GPS e metadados avançados.',
            note: 'Se as imagens não contiverem dados EXIF, a ferramenta irá exibir a informação de aviso correspondente.'
        },
        {
            title: 'Visualizar Localização GPS',
            description: 'Se as imagens contiverem informações de coordenadas GPS, pode ver coordenadas de latitude e longitude (exibidas em formato graus-minutos-segundos) na secção de informações GPS e visualizar o local de disparo num mapa integrado. Clique no botão "Geocodificação Reversa" para converter coordenadas GPS em nomes reais de localizações geográficas.',
            note: 'A exibição do mapa requer ligação à internet, e o primeiro carregamento pode demorar algum tempo.'
        },
        {
            title: 'Exportar Dados EXIF',
            description: 'Pode escolher múltiplas formas de exportar informações EXIF: clique no botão "Exportar JSON" para descarregar dados estruturados completos; clique no botão "Exportar CSV" para descarregar dados em formato tabular; clique em "Exportar Relatório Resumo" para obter um relatório de texto conciso; ou clique em "Exportar Gráficos de Visualização" para ver a visualização dos parâmetros.',
            note: 'Para processamento em lote de imagens, pode usar a função "Download em Lote" para exportar todos os dados de uma vez.'
        },
        {
            title: 'Analisar Parâmetros de Disparo',
            description: 'Na secção de parâmetros de disparo, pode visualizar informações como valor de abertura, velocidade do obturador (exibição legível, como 1/125 seg), sensibilidade ISO, distância focal, etc. Estes parâmetros são muito úteis para aprender técnicas fotográficas, analisar a qualidade das fotografias ou verificar condições de disparo.',
            note: 'A ferramenta irá converter automaticamente a velocidade do obturador para um formato fácil de ler, como "1/125 seg" em vez de forma decimal.'
        },
        {
            title: 'Guardar e Gerir Resultados',
            description: 'Após conclusão do processamento, pode descarregar as informações EXIF de cada imagem individualmente, ou usar a função de download em lote para empacotar e descarregar todos os dados. Todos os ficheiros exportados são guardados localmente no seu dispositivo, garantindo a segurança dos dados.',
            note: 'Recomenda-se limpar regularmente a cache do navegador para libertar espaço de armazenamento.'
        }
    ],
    
    successTitle: 'Parabéns!',
    successContent: 'Aprendeu com sucesso como usar o nosso visualizador EXIF online. Agora pode facilmente visualizar e analisar informações de metadados de imagens, obtendo conhecimentos profundos sobre o contexto de disparo e definições de parâmetros de cada fotografia.',
    
    relatedToolsTitle: 'Ferramentas Relacionadas que Podem Interessar-lhe',
    relatedTools: [
        {
            name: 'Compressor de Imagens',
            description: 'Reduzir o tamanho do ficheiro de imagem sem perda significativa de qualidade.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Redimensionador de Imagens',
            description: 'Redimensionar imagens para dimensões específicas ou escalar por percentagem.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Ferramenta de Inversão de Cores de Imagem',
            description: 'Ferramenta online para inverter as cores das imagens e criar efeitos negativos.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'Gerador de Códigos QR',
            description: 'Criar códigos QR personalizados para URLs, textos, informações de contacto, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Especificação Padrão EXIF',
            description: 'Conheça os padrões oficiais e especificações técnicas do formato de dados EXIF',
            url: 'https://en.wikipedia.org/wiki/Exif'
        },
        {
            name: 'Metadados de Imagens Digitais',
            description: 'Explicação detalhada de metadados de imagens e informações EXIF',
            url: 'https://en.wikipedia.org/wiki/Exif'
        },
        {
            name: 'Sistema de Coordenadas GPS',
            description: 'Conheça os sistemas de coordenadas GPS e a tecnologia de geolocalização',
            url: 'https://en.wikipedia.org/wiki/Global_Positioning_System'
        }
    ]
}