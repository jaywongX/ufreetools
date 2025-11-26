export default {
    title: 'Transformador de Sete Parâmetros: Tutorial de Conversão em Lote de Coordenadas Geodésicas Bursa-Wolf',
    functionTitle: 'Como o Transformador de Sete Parâmetros resolve os desafios de integração de múltiplos sistemas de coordenadas?',
    intro: '<p>O Transformador de Sete Parâmetros fornece conversão em lote entre coordenadas XYZ e BLH de <strong>WGS84, CGCS2000, Beijing 54, Xi\'an 80</strong> baseado no modelo Bursa-Wolf, focando na resolução de problemas de deslocamento e rastreabilidade na fusão de coordenadas multi-fontes em plataformas de topografia, engenharia e SIG. A ferramenta possui algoritmos abertos, ajuste de erros e logs de processo para garantir que cada conversão seja rastreável, reproduzível e avaliável.</p><p>Com ajuste automático e gestão de parâmetros por modelos, as equipes podem rapidamente reutilizar conjuntos de sete parâmetros altamente confiáveis entre projetos e verificar cada etapa de rotação e correção de escala através dos logs, facilitando a apresentação de documentação técnica completa durante as fases de licitação pública e aceitação.</p>',
    useCasesTitle: 'Cenários de Aplicação Prática',
    useCases: {
        first: '<strong>Topografia Urbana e Municipal</strong>: Integração de resultados CGCS2000 com sistemas de coordenadas locais independentes para garantir conexão perfeita de redes subterrâneas, modelos BIM e plantas executivas.',
        second: '<strong>Engenharia de Energia e Transporte</strong>: Construção interestadual requer interoperabilidade entre coordenadas Beijing 54, Xi\'an 80 e WGS84, o Transformador de Sete Parâmetros fornece avaliação completa de erros.',
        third: '<strong>Sensoriamento Remoto e UAVs</strong>: Resultados de fotografia aérea frequentemente são emitidos em WGS84, requerendo conversão precisa de sete parâmetros antes de importar para projeção Gauss-Krüger local.',
        fourth: '<strong>Registro de Recursos Naturais</strong>: Coordenadas históricas de marcos frequentemente usam datums geodésicos antigos, a ferramenta pode mapeá-las de forma confiável para CGCS2000 para registro e revisão.'
    },
    tipTitle: 'Ilustração do Produto',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: 'Esta ilustração pode ser rastreada por mecanismos de busca para snippets de mídia rica em resultados de pesquisa.',
    conclusion: '<p>Da verificação de ponto único ao processamento de dezenas de milhares em lotes, o Transformador de Sete Parâmetros pode produzir relatórios contendo resíduos de coordenadas, RMSE e intervalos de confiança. Baseando-se em implementação 100% frontend, coordenadas sensíveis não deixam o navegador, atendendo aos requisitos de conformidade para projetos classificados sobre armazenamento de dados.</p>',
    faqTitle: 'Perguntas Frequentes',
    faqs: {
        q1: {
            question: 'Como o Transformador de Sete Parâmetros garante a precisão do cálculo dos sete parâmetros Bursa-Wolf?',
            answer: '<p>A ferramenta utiliza o método dos mínimos quadrados para pontos comuns para resolver os sete parâmetros e produz vetores residuais, Sigma0 e intervalos de confiança de 95%. Você pode verificar o processo de cálculo matricial através dos logs para garantir que a precisão dos sete parâmetros Bursa-Wolf atenda às especificações do projeto.</p>'
        },
        q2: {
            question: 'Como definir delimitadores personalizados ao importar CSV em lote?',
            answer: '<p>Na área de "Entrada de Dados de Coordenadas", ajuste o campo delimitador. O Transformador de Sete Parâmetros analisará os dados XYZ/BLH/ENH de acordo com o novo delimitador enquanto preserva colunas de nomes de pontos ou comentários para correspondência posterior.</p>'
        },
        q3: {
            question: 'O Transformador de Sete Parâmetros pode lidar simultaneamente com projeções Gauss-Krüger e UTM?',
            answer: '<p>Sim, basta selecionar o modo correspondente em "Parâmetros de Projeção/Altitude" e preencher o meridiano central, largura da zona e fator de escala. O processo de conversão primeiro executará cálculo direto 3D, depois cálculo inverso para coordenadas de projeção alvo.</p>'
        },
        q4: {
            question: 'Como obter os sete parâmetros quando os pontos comuns são insuficientes?',
            answer: '<p>Se você tiver menos de três pontos comuns, pode chamar os parâmetros de exemplo integrados no "Modelo de Parâmetros", ou inserir valores de referência de projetos históricos, depois atualizar iterativamente com novos pontos coletados no campo.</p>'
        },
        q5: {
            question: 'O Transformador de Sete Parâmetros suporta sistemas de coordenadas locais independentes?',
            answer: '<p>Sim. Você pode inserir o semi-eixo maior e o inverso do achatamento em "Parâmetros de Elipsoide Personalizados" e combiná-los com parâmetros de projeção personalizados para realizar uma restauração realista e conversão mútua de sistemas de coordenadas locais independentes.</p>'
        }
    },
    tutorialTitle: 'Guia de Operação do Transformador de Sete Parâmetros',
    steps: {
        step1: {
            title: 'Seleção do Sistema de Coordenadas e Modo de Projeção',
            description: 'Primeiro selecione os sistemas de coordenadas fonte e alvo, depois preencha informações como meridiano central e largura da zona na área de parâmetros de projeção para garantir consistência com os dados medidos.'
        },
        step2: {
            title: 'Entrada ou Importação de Pontos de Coordenadas',
            description: 'Você pode inserir manualmente um ponto XYZ/BLH/ENH único, ou arrastar CSV/TXT para importação em lote. Ajuste os delimitadores conforme necessário para manter análise correta.'
        },
        step3: {
            title: 'Configuração dos Sete Parâmetros',
            description: 'Se os parâmetros forem conhecidos, preencha diretamente ΔX, ΔY, ΔZ, Rx, Ry, Rz e escala; se desconhecidos, cole pares de pontos no "Solucionador de Pontos Comuns" e execute o ajuste.'
        },
        step4: {
            title: 'Execução da Conversão e Visualização de Logs',
            description: 'Após clicar em "Executar Conversão", os logs em tempo real mostrarão análise, cálculos diretos/inversos, rotações e correções de escala, facilitando o rastreamento de problemas.'
        },
        step5: {
            title: 'Avaliação da Precisão',
            description: 'O painel de resultados mostra RMSE, resíduo máximo e intervalo de confiança de 95%. Se as métricas ultrapassarem os limites, retorne à área de parâmetros para ajustar ou readaptar.'
        },
        step6: {
            title: 'Exportação de Resultados e Relatórios',
            description: 'Após confirmar a precisão, exporte o CSV dos resultados e os logs juntos para arquivamento ou apresentação para revisão.'
        }
    },
    successTitle: 'Implantação Concluída',
    successContent: 'Parabéns! Você dominou todo o fluxo de trabalho do Transformador de Sete Parâmetros e agora pode rapidamente completar conversões em lote em projetos de fusão de coordenadas multi-fontes enquanto produz relatórios de precisão de nível profissional.',
    relatedToolsTitle: 'Ferramentas Relacionadas Recomendadas',
    relatedTools: {
        first: {
            name: 'Calculadora de Folhas de Mapa',
            description: 'Calcula números de folhas baseados em coordenadas de latitude e longitude, suporta múltiplas escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Conversor de Tempo GNSS',
            description: 'Ferramenta para converter entre tempo GPS, tempo BeiDou e tempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calculadora de Área e Perímetro',
            description: 'Suporta desenho de polígonos para calcular automaticamente área e perímetro com troca de múltiplas unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calculadora de Linha Base',
            description: 'Insere coordenadas de início e fim para calcular comprimento e azimute da linha base, suporta análise de propagação de erros.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Referências Externas',
    references: {
        first: {
            name: 'Associação Chinesa de Ciências da Informação Geográfica - Normas e Regulamentos',
            description: 'Normas técnicas e regulamentos industriais chineses de informação geográfica',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Padrão ISO 19111 de Sistemas de Referência de Coordenadas',
            description: 'Padrão internacional autoritário para referência de coordenadas e transformação de projeções.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Padrões do Consórcio Geoespacial Aberto (OGC)',
            description: 'Padrões internacionais para transformação de dados geoespaciais',
            url: 'https://www.ogc.org/'
        }
    }
}