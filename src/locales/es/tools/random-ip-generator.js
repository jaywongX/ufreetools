export default {
    name: 'Generador de IP Aleatorias - Generar Direcciones IPv4/IPv6 en Línea',
    description: 'Generador de IP aleatorias gratuito en línea que admite direcciones IPv4 e IPv6, IPs públicas y privadas, filtrado por región, generación por lotes y múltiples formatos de exportación. Se ejecuta completamente en el frontend para proteger la privacidad.',
    inputTitle: 'Configuración de Generación',
    outputTitle: 'Resultados de Generación',
    generateBtn: 'Generar Direcciones IP',
    loadSampleBtn: 'Cargar Muestra y Generar',
    clearAll: 'Borrar Todo',
    noOutput: 'Sin resultados generados',
    preview: 'Vista Previa de Datos',
    
    ipVersionTitle: 'Versión de IP',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: 'Ambas Versiones',
    
    ipTypeTitle: 'Tipo de IP',
    ipTypePublic: 'IP Pública',
    ipTypePrivate: 'IP Privada',
    ipTypeAny: 'Cualquier Tipo',
    
    regionTitle: 'Región de IP',
    allRegions: 'Todas las Regiones',
    
    formatTitle: 'Formato de Salida',
    formatPlain: 'Texto Plano',
    formatList: 'Formato de Lista',
    
    optionsTitle: 'Opciones Adicionales',
    includePort: 'Incluir Número de Puerto',
    includeSubnet: 'Incluir Máscara de Subred',
    includeGeo: 'Incluir Información Geográfica',
    
    batchTitle: 'Generación por Lotes',
    quantityLabel: 'Cantidad',
    quantityPlaceholder: 'Ingrese cantidad (1-1000)',
    
    generating: 'Generando...',
    generated: 'Generación Completada',
    copySuccess: 'Copiado al portapapeles',
    downloadSuccess: 'Descarga exitosa',
    invalidQuantity: 'Ingrese un número entre 1-1000',
    
    resultCount: 'Generados {count} registros',
    resultSummary: 'Resumen de Resultados',
    showAll: 'Mostrar Todo',
    collapse: 'Colapsar',
    
    exportTitle: 'Formato de Exportación',
    exportJson: 'Exportar JSON',
    exportCsv: 'Exportar CSV',
    exportTxt: 'Exportar TXT',
    copyBtn: 'Copiar',
    downloadBtn: 'Descargar',
    viewDetails: 'Ver Detalles',
    
    regions: {
        US: 'Estados Unidos',
        EU: 'Europa',
        AS: 'Asia',
        CN: 'China',
        JP: 'Japón',
        KR: 'Corea del Sur',
        AU: 'Australia',
        BR: 'Brasil',
        IN: 'India',
        RU: 'Rusia'
    },
    
    csv: {
        ip: 'Dirección IP',
        version: 'Versión',
        port: 'Puerto',
        subnet: 'Máscara de Subred',
        country: 'País',
        city: 'Ciudad',
        isp: 'ISP'
    }
};
