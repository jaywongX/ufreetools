export default {
    name: 'Analisador de Fotos de Perfil com IA - Ferramenta de Análise de Retratos Profissionais',
    description: 'Ferramenta online gratuita para analisar suas fotos de perfil e retratos. Obtenha feedback baseado em IA sobre posição da cabeça, sorriso, contato visual e qualidade de iluminação para melhorar suas fotos profissionais.',
    inputTitle: 'Carregar Foto',
    outputTitle: 'Resultados da Análise',
    dragTip: 'Arraste e solte fotos aqui ou clique para carregar',
    supported: 'Formatos suportados: PNG, JPEG, BMP, WEBP',
    analyzeBtn: 'Analisar Foto',
    downloadBtn: 'Baixar',
    noOutput: 'Ainda não há fotos analisadas',
    loadSample: 'Carregar Foto de Exemplo',
    preview: 'Pré-visualizar Fotos',
    clearAll: 'Limpar Tudo',
    originalImage: 'Foto Original',
    deleteImage: 'Excluir Foto',
    batchDownload: 'Download em Lote (ZIP)',
    exportFormat: 'Formato de Exportação',
    imageQuality: 'Qualidade da Imagem',
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    resetView: 'Redefinir Visualização',
    fullscreen: 'Pré-visualização em Tela Cheia',
    analysisResults: 'Resultados da Análise',
    overallScore: 'Pontuação Geral',
    headPosition: 'Posição da Cabeça',
    smileDetection: 'Detecção de Sorriso',
    eyeContact: 'Contato Visual',
    lightingQuality: 'Qualidade da Iluminação',
    recommendations: 'Recomendações',
    noFaceDetected: 'Nenhum rosto detectado nesta imagem. Por favor, carregue uma foto clara com um rosto visível.',
    disclaimer: 'Aviso Legal',
    disclaimerText: 'Esta ferramenta usa IA para analisar fotos de perfil. Os resultados são apenas para referência e podem variar com base na qualidade da imagem e condições de iluminação. Todo o processamento é feito em seu navegador, e suas fotos não são carregadas para nenhum servidor.',
    modelInfo: 'Desenvolvido com face-api.js, uma API JavaScript de código aberto para detecção e reconhecimento facial no navegador.',
    
    positions: {
        straight: 'Reta',
        slightlyTilted: 'Levemente Inclinada',
        tilted: 'Inclinada',
        unknown: 'Desconhecida'
    },
    
    tips: {
        headStraight: 'Ótimo! Sua cabeça está posicionada reta, o que é ideal para fotos profissionais.',
        headSlightlyTilted: 'Sua cabeça está levemente inclinada. Uma posição mais reta pode parecer mais profissional.',
        headTilted: 'Sua cabeça está visivelmente inclinada. Tente manter sua cabeça reta para fotos profissionais.',
        
        smileLow: 'Tente sorrir mais naturalmente para parecer acessível e confiante.',
        smileMedium: 'Seu sorriso poderia ser mais envolvente. Tente um sorriso natural e relaxado.',
        smileGood: 'Bom sorriso! Você parece acessível e profissional.',
        smileExcellent: 'Excelente sorriso! Você parece muito acessível e confiante.',
        
        eyeContactLow: 'Tente olhar diretamente para a câmera para um melhor contato visual.',
        eyeContactMedium: 'Seu contato visual poderia ser melhorado. Olhe diretamente para a lente da câmera.',
        eyeContactGood: 'Bom contato visual. Você parece engajado e atento.',
        eyeContactExcellent: 'Excelente contato visual. Você parece confiante e engajado.',
        
        lightingLow: 'A iluminação está muito escura ou desigual. Tente tirar fotos em melhores condições de iluminação.',
        lightingMedium: 'A iluminação poderia ser melhorada. Luz natural e difusa funciona melhor.',
        lightingGood: 'Boa iluminação. Seu rosto está bem iluminado e claramente visível.',
        lightingExcellent: 'Excelente iluminação. Seu rosto está perfeitamente iluminado.'
    },
    
    recommendations: {
        title: 'Sugestões de Melhoria',
        improveHeadPosition: 'Mantenha sua cabeça reta e nivelada com a câmera para uma aparência mais profissional.',
        improveSmile: 'Tente um sorriso natural que demonstre confiança e acessibilidade.',
        naturalSmile: 'Seu sorriso parece muito amplo - um sorriso ligeiramente mais sutil pode parecer mais profissional em alguns contextos.',
        improveEyeContact: 'Olhe diretamente para a lente da câmera para estabelecer melhor contato visual.',
        improveLighting: 'Tire fotos em melhores condições de iluminação - luz natural e difusa vinda da frente funciona melhor.',
        goodPhoto: 'Ótima foto! Ela atende aos padrões profissionais para uma foto de perfil.'
    }
};