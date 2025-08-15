export default {
    name: 'Visualizador de Mapa de Calor Facial com IA',
    description: 'Use inteligência artificial para analisar características faciais, gerar mapas de calor e fornecer sugestões de melhoria de fotos. Baseado em tecnologia de reconhecimento facial para ajudar a otimizar a iluminação e composição de fotos.',
    inputTitle: 'Imagem de entrada',
    outputTitle: 'Análise do mapa de calor',
    dragTip: 'Arraste e solte imagens aqui ou clique para fazer upload',
    supported: 'Formatos suportados: PNG, JPEG, BMP, WEBP',
    processBtn: 'Gerar mapa de calor',
    downloadBtn: 'Baixar',
    noOutput: 'Ainda não há imagens de saída',
    loadSample: 'Carregar imagem de exemplo',
    preview: 'Pré-visualizar imagens',
    clearAll: 'Limpar tudo',
    originalImage: 'Imagem original',
    deleteImage: 'Excluir imagem',
    batchDownload: 'Download em lote (ZIP)',
    exportFormat: 'Formato de exportação',
    imageQuality: 'Qualidade da imagem',
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    resetView: 'Redefinir visualização',
    fullscreen: 'Pré-visualização em tela cheia',
    closePreview: 'Fechar pré-visualização',
    analysisTitle: 'Resultados da análise',
    noFaceDetected: 'Nenhum rosto detectado, tente usar uma foto frontal mais clara',
    loadingModels: 'Carregando modelos de reconhecimento facial',
    loadingModelsTip: 'O primeiro uso requer o download de arquivos de modelo, aguarde...',
    disclaimer: 'Esta ferramenta é apenas para análise de imagem e fins educacionais e não armazena suas imagens permanentemente',
    modelInfo: 'Usando tecnologia de reconhecimento facial fornecida por face-api.js',
    
    // Configurações de parâmetros
    paramSettings: 'Configurações de parâmetros',
    heatmapIntensity: 'Intensidade do mapa de calor',
    heatmapRadius: 'Tamanho do ponto de calor',
    colorScheme: 'Esquema de cores',
    showLandmarks: 'Mostrar pontos de referência',
    
    expressions: {
        neutral: 'Neutro',
        happy: 'Feliz',
        sad: 'Triste',
        angry: 'Irritado',
        fearful: 'Assustado',
        disgusted: 'Enojado',
        surprised: 'Surpreso'
    },
    
    expressionDetected: 'Expressão detectada: {expression}',
    
    lightingTips: {
        leftDark: 'Iluminação insuficiente no lado esquerdo, tente adicionar uma fonte de luz à esquerda',
        rightDark: 'Iluminação insuficiente no lado direito, tente adicionar uma fonte de luz à direita',
        tooLow: 'Iluminação geral insuficiente, considere adicionar luz ambiente ou flash',
        tooHigh: 'Luz muito forte, pode causar superexposição, considere reduzir a fonte de luz ou usar luz suave',
        good: 'Boa iluminação, iluminação facial uniforme'
    },
    
    positionTips: {
        tooLeft: 'Posição do rosto muito à esquerda, sugere mover para a direita',
        tooRight: 'Posição do rosto muito à direita, sugere mover para a esquerda',
        tooHigh: 'Posição do rosto muito alta, sugere mover para baixo',
        tooLow: 'Posição do rosto muito baixa, sugere mover para cima',
        tooSmall: 'Proporção do rosto no quadro muito pequena, sugere aproximar-se',
        tooBig: 'Proporção do rosto no quadro muito grande, sugere aumentar a distância de disparo'
    }
};