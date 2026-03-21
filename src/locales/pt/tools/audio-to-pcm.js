export default {
    name: 'Áudio para PCM - Conversor formato áudio online',
    description: 'Ferramenta gratuita online de áudio para PCM. Converta WAV, MP3, FLAC, OGG, AAC, M4A e outros formatos em dados de áudio PCM brutos. Suporta configurações de taxa de amostragem, seleção de canais, processamento em lote. Ideal para reconhecimento de voz e análise de áudio.',
    inputTitle: 'Áudio de entrada',
    outputTitle: 'Áudio PCM convertido',
    dragTip: 'Arraste e solte arquivos de áudio aqui ou clique para carregar (lote suportado)',
    pasteTip: 'Ou pressione Ctrl+V (Cmd+V) para colar caminho do arquivo de áudio da área de transferência',
    supported: 'Formatos suportados: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Converter para PCM',
    converting: 'Convertendo...',
    downloadBtn: 'Baixar PCM',
    batchDownload: 'Download em lote (ZIP)',
    noOutput: 'Sem resultados de conversão',
    loadSample: 'Carregar áudio de exemplo',
    preview: 'Visualizar áudio',
    clearAll: 'Limpar tudo',
    originalAudio: 'Áudio original',
    deleteAudio: 'Excluir áudio',
    
    sampleRateTitle: 'Configurações de taxa de amostragem',
    sampleRateLabel: 'Taxa de amostragem: {rate} Hz',
    sampleRate8000: '8000 Hz (Qualidade telefônica)',
    sampleRate16000: '16000 Hz (Reconhecimento de voz)',
    sampleRate22050: '22050 Hz (Qualidade de voz)',
    sampleRate44100: '44100 Hz (Qualidade CD)',
    sampleRate48000: '48000 Hz (Qualidade profissional)',
    
    channelTitle: 'Configurações de canais',
    channelStereo: 'Estéreo',
    channelMono: 'Mono',
    
    bitDepthTitle: 'Configurações de profundidade de bits',
    bitDepth8: '8-bit (Baixa qualidade)',
    bitDepth16: '16-bit (Padrão)',
    bitDepth24: '24-bit (Alta qualidade)',
    bitDepth32: '32-bit (Profissional)',
    
    volumeTitle: 'Configurações de volume',
    volumeLabel: 'Volume: {volume}%',
    
    fileSizeEstimate: 'Tamanho estimado: {size}',
    duration: 'Duração: {duration}',
    originalFormat: 'Formato original: {format}',
    originalSize: 'Tamanho original: {size}',
    convertedSize: 'Tamanho convertido: {size}',
    
    tipsTitle: 'Dicas',
    tipContent: 'O formato PCM é dados de áudio brutos não comprimidos, comumente usados para reconhecimento de voz, análise de áudio e processamento de áudio profissional. 16-bit, 16000Hz é padrão para reconhecimento de voz; 44100Hz, 16-bit para áudio geral; 48000Hz, 24-bit para produção de áudio profissional.',
    convertError: 'Conversão falhou, verifique o formato de áudio ou tente novamente.',
    processingMultiple: 'Processando {current}/{total} arquivos de áudio...',
    convertSuccess: 'Conversão bem-sucedida!',
    
    pcmFormatTitle: 'Opções de formato PCM',
    signedFormat: 'Formato com sinal',
    unsignedFormat: 'Formato sem sinal',
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian',
    
    // Metadados
    metadataTitle: 'Metadados (Opcional)',
    metadataTitle2: 'Título',
    metadataArtist: 'Artista',
    
    // Opções avançadas
    advancedTitle: 'Opções Avançadas',
    trimAudio: 'Cortar Áudio',
    trimStart: 'Tempo Inicial',
    trimEnd: 'Tempo Final',
    
    seoNote: 'Ferramenta áudio para PCM, conversor formato áudio online, WAV para PCM, MP3 para PCM, pré-processamento áudio reconhecimento de voz',
};
