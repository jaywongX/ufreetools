export default {
    title: 'Transformador de Quatro Parâmetros: Guia em Lote para Transformação de Similaridade Planar e Transformação de Helmert',
    functionTitle: 'Como o Transformador de Quatro Parâmetros Garante a Integração de Coordenadas Regionais com Um Clique?',
    intro: '<p>O transformador de quatro parâmetros é baseado em modelos de similaridade planar, Bursa simplificado e Helmert, cobrindo todos os parâmetros incluindo translação ΔX, ΔY, rotação θ e escala m. Através de algoritmos frontend puros, o sistema pode completar cálculos diretos/inversos de ponto único e em lote localmente no navegador, fornecendo vetores residuais, RMSE, intervalos de confiança de 95% e mapas de calor de precisão em tempo real, garantindo que cada integração de coordenadas seja rastreável, verificável e avaliável.</p>',
    useCasesTitle: 'Funções da Ferramenta e Cenários de Aplicação',
    useCases: {
        first: '<strong>Integração de Coordenadas de Engenharia</strong>: Em projetos de renovação urbana ou transporte ferroviário, mapeia rapidamente sistemas de coordenadas independentes locais para sistemas de coordenadas de engenharia unificados, melhorando a eficiência de colaboração em design e construção.',
        second: '<strong>Mosaico de Projeção Regional</strong>: Resultados de sensoriamento remoto e UAV frequentemente vêm de diferentes zonas de projeção, o transformador de quatro parâmetros pode atualizar em lote pontos de controle planares para alcançar emenda perfeita.',
        third: '<strong>Fusão de Sistemas Planares Personalizados</strong>: Integrando sistemas de coordenadas autoconstruídos em fábricas ou parques industriais, usando o modelo de quatro parâmetros para eliminar diferenças de escala e rotação, alcançando consistência entre desenhos e condições de campo.',
        fourth: '<strong>Revisão de Resultados e Aceitação</strong>: Gera histogramas de distribuição de resíduos e intervalos de confiança para submeter relatórios de avaliação quantitativa a clientes ou autoridades regulatórias.'
    },
    tipTitle: 'Imagem da Página do Produto',
    logoAlt: 'Pré-visualização do Produto do Transformador de Quatro Parâmetros',
    tipContent: 'Esta ilustração pode ser rastreada por mecanismos de busca para snippets de mídia rica em resultados de pesquisa.',
    conclusion: '<p>Com o transformador de quatro parâmetros, equipes de levantamento, design e supervisão podem completar conversões localizadas, revisão de resíduos e saída de relatórios sem vazar coordenadas originais, atendendo aos requisitos do ciclo de vida do projeto para rastreabilidade e verificação de dados. Para transformações adicionais de zonas de projeção, pode ser usado com a <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">Ferramenta de Troca de Zona de Coordenadas em Lote</a>; para padrões internacionais, visite <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">Transformação de Coordenadas OGC</a> para mais orientações.</p>',
    faqTitle: 'Perguntas Frequentes',
    faqs: {
        q1: {
            question: 'Como o Transformador de Quatro Parâmetros garante a precisão e estabilidade da transformação de similaridade planar?',
            answer: '<p>A ferramenta utiliza ajuste por mínimos quadrados para resolver ΔX, ΔY, θ, m, e gera RMSE, resíduo máximo e intervalo de confiança de 95%. Os usuários podem revisar operações matriciais através de logs para verificar a precisão da transformação de similaridade planar.</p>'
        },
        q2: {
            question: 'Coordenadas errôneas podem ser automaticamente ignoradas durante a importação em lote?',
            answer: '<p>Sim. Se forem encontradas contagens de colunas inconsistentes ou dados anormais durante a fase de análise, o sistema registrará e ignorará essa entrada no log, continuando a processar coordenadas restantes para garantir conversão em lote ininterrupta.</p>'
        },
        q3: {
            question: 'O Transformador de Quatro Parâmetros suporta cálculos diretos e inversos?',
            answer: '<p>Sim. A ferramenta fornece botões de cálculo direto (fonte → alvo) e cálculo inverso (alvo → fonte), facilitando a comparação de coordenadas antes e depois da transformação e gerando visualizações sobrepostas.</p>'
        },
        q4: {
            question: 'Como visualizar a distribuição de resíduos no Transformador de Quatro Parâmetros?',
            answer: '<p>Após completar a conversão, o sistema desenha automaticamente gráficos de distribuição de pontos de controle, histogramas de resíduos e grades de mapa de calor de precisão, ajudando você a determinar se grupos de pontos são uniformes e erros estão concentrados.</p>'
        },
        q5: {
            question: 'Podem ser citados relatórios gerados pelo Transformador de Quatro Parâmetros?',
            answer: '<p>Sim. A área de resultados suporta exportação CSV, logs podem ser copiados com um clique, e gráficos podem ser capturados e incorporados em relatórios técnicos, atendendo aos requisitos de aceitação ou arquivamento em engenharia.</p>'
        }
    },
    tutorialTitle: 'Guia de Operação do Transformador de Quatro Parâmetros',
    steps: {
        step1: {
            title: 'Preparar Coordenadas Fonte e Pontos de Controle',
            description: 'Primeiro organize coordenadas fonte com coordenadas alvo correspondentes, e confirme o formato do delimitador, garantindo que cada linha de dados contenha X, Y, e valores alvo opcionais e nomes de pontos.'
        },
        step2: {
            title: 'Selecionar Modelo e Inserir Parâmetros',
            description: 'Nas "Configurações do Modelo", selecione similaridade planar, modelo Bursa simplificado ou modelo Helmert, insira ΔX, ΔY, θ, m, ou deixe em branco para aguardar resultados de ajuste.'
        },
        step3: {
            title: 'Carregar Exemplo ou Importar Arquivo',
            description: 'Você pode usar "Carregar Exemplo" para experiência rápida, ou arrastar arquivos CSV/TXT para importar grandes quantidades de coordenadas e analisá-las automaticamente.'
        },
        step4: {
            title: 'Realizar Ajuste e Conversão',
            description: 'Cole coordenadas emparelhadas na área de solução de pontos comuns, clique em "Ajuste de Similaridade Planar" para obter parâmetros ótimos, então execute cálculo direto ou inverso para completar a conversão em lote.'
        },
        step5: {
            title: 'Visualizar Logs e Visualização',
            description: 'Logs em tempo real mostrarão processos de análise, ajuste, conversão e estatísticas, enquanto desenham distribuição de pontos de controle, histogramas de resíduos e visão geral do mapa de calor.'
        },
        step6: {
            title: 'Exportar Resultados e Compartilhar',
            description: 'Após confirmar os resultados, exporte CSV e logs, e capture telas dos gráficos de visualização para submissão de resultados, revisão ou arquivamento de documentos.'
        }
    },
    successTitle: 'Implantação Concluída',
    successContent: 'Parabéns! Você dominou todo o fluxo de trabalho do transformador de quatro parâmetros e agora pode confiantemente lidar com várias tarefas de integração de coordenadas planares e gerar relatórios de avaliação de precisão.',
    relatedToolsTitle: 'Ferramentas Relacionadas Recomendadas',
    relatedTools: {
        first: {
            name: 'Calculadora de Folhas de Mapa',
            description: 'Calcula números de folhas baseados em coordenadas de latitude e longitude, suportando múltiplas escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Conversor de Tempo GNSS',
            description: 'Ferramenta para converter entre tempo GPS, tempo BeiDou e tempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calculadora de Área e Perímetro',
            description: 'Suporta desenho de polígonos para calcular automaticamente área e perímetro, fornecendo múltiplos interruptores de unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calculadora de Linha de Base',
            description: 'Insere coordenadas de ponto inicial e final para calcular comprimento e azimute da linha de base, suportando análise de propagação de erros.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Referências',
    references: {
        first: {
            name: 'Associação Chinesa de Ciências da Informação Geográfica - Padrões e Regulamentos',
            description: 'Padrões técnicos e regulamentos industriais de informação geográfica chinesa',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Padrão ISO 19111 de Sistema de Referência Espacial',
            description: 'Padrão internacional autoritário para transformação de referência espacial e projeções.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Padrões do Consórcio Geoespacial Aberto (OGC)',
            description: 'Padrões internacionais para transformação de dados geoespaciais',
            url: 'https://www.ogc.org/'
        }
    }
}