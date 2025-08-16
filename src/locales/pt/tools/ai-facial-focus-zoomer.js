export default {
    name: 'Ferramenta de Recorte Automático com Foco Facial IA',
    description: 'Use inteligência artificial para detectar a posição dos rostos, recortar automaticamente e centralizar a exibição, otimizar avatares para mídias sociais. Baseado na tecnologia face-api.js, com suporte a tamanhos predefinidos para Instagram, LinkedIn, YouTube, Facebook, Twitter, TikTok, Xiaohongshu, WeChat, Reddit e outras principais plataformas sociais.',
    inputTitle: 'Imagem de entrada',
    outputTitle: 'Resultados do recorte',
    dragTip: 'Arraste e solte imagens aqui ou clique para fazer upload',
    supported: 'Formatos suportados: PNG, JPEG, BMP, WEBP',
    processBtn: 'Iniciar processamento',
    processing: 'Processando...',
    downloadBtn: 'Baixar',
    downloadSocial: 'Baixar pacote de mídia social',
    noOutput: 'Ainda não há imagens de saída',
    loadSample: 'Carregar imagens de exemplo',
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
    
    // Configurações de parâmetros
    paramSettings: 'Configurações de parâmetros',
    cropMode: 'Modo de recorte',
    autoMode: 'Modo automático',
    squareMode: 'Modo quadrado',
    customMode: 'Tamanho personalizado',
    customWidth: 'Largura personalizada',
    customHeight: 'Altura personalizada',
    faceMargin: 'Margem do rosto',
    confidence: 'Confiança de detecção',
    socialPresets: 'Predefinições de mídia social',
    
    // Resultados da análise
    analysisTitle: 'Resultados da análise',
    facesDetected: '{count} rostos detectados',
    noFaceDetected: 'Nenhum rosto detectado. Por favor, tente usar uma foto frontal mais clara',
    socialPreview: 'Pré-visualização de mídia social',
    
    // Estado de carregamento
    loadingModels: 'Carregando modelos de reconhecimento facial',
    loadingModelsTip: 'O primeiro uso requer o download de arquivos de modelo, por favor aguarde...',
    
    // Aviso legal no rodapé
    disclaimer: 'Esta ferramenta é apenas para processamento e otimização de imagens. Suas imagens não são armazenadas permanentemente',
    modelInfo: 'Usa tecnologia de reconhecimento facial fornecida por face-api.js'
};