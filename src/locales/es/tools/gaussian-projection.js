export default {
  name: 'Cálculo directo e inverso de la proyección Gauss',
  title: 'Cálculo directo e inverso de la proyección Gauss',
  description: 'Herramienta para convertir coordenadas entre coordenadas geográficas (latitud y longitud) y coordenadas de proyección Gauss',
  calculationType: 'Tipo de cálculo',
  forward: 'Directo (Lat/Long → Coordenadas Gauss)',
  inverse: 'Inverso (Coordenadas Gauss → Lat/Long)',
  ellipsoidParameters: 'Parámetros del elipsoide',
  ellipsoidType: 'Tipo de elipsoide',
  centralMeridian: 'Meridiano central (grados)',
  a: 'Semieje mayor',
  f: 'Aplanamiento',
  projectionParameters: 'Parámetros de proyección',
  projectionType: 'Tipo de zona de proyección',
  '3degree': 'Zona de 3°',
  '6degree': 'Zona de 6°',
  zoneNumber: 'Número de zona',
  forwardInput: 'Introducir latitud y longitud',
  latitude: 'Latitud',
  longitude: 'Longitud',
  inverseInput: 'Introducir coordenadas Gauss',
  x: 'Coordenada X (norte)',
  y: 'Coordenada Y (este)',
  calculate: 'Calcular',
  results: 'Resultados',
  dms: 'Formato grados-minutos-segundos',
  batchProcessing: 'Procesamiento por lotes',
  inputFormat: 'Formato de entrada',
  batchForwardFormat: 'Una pareja de coordenadas por línea, formato: latitud,longitud',
  batchInverseFormat: 'Una pareja de coordenadas por línea, formato: coordenadaX,coordenadaY',
  processBatch: 'Calcular por lotes',
  batchResults: 'Resultados por lotes',
  copyAll: 'Copiar todo',
  downloadCSV: 'Descargar CSV',
  copySuccess: 'Copia exitosa',
  copyFailed: 'Fallo en la copia',
  clear: 'Limpiar',
  formula: 'Explicación de fórmulas',
  mapView: 'Vista de mapa',
  dmsInput: 'Entrada en formato GMS',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: 'Analizar',
  dmsParseError: 'Error al analizar el formato GMS',
  invalidLatitude: 'Latitud no válida',
  invalidLongitude: 'Longitud no válida',
  invalidX: 'Coordenada X no válida',
  invalidY: 'Coordenada Y no válida',
  copyToClipboard: 'Copiar al portapapeles',
  autoCalculate: 'Cálculo automático',
  formulaExplanation: 'Explicación de las fórmulas de proyección Gauss',
  uploadCSV: 'Subir CSV',
  exportResults: 'Exportar resultados',
  exportAsGeoJSON: 'Exportar como GeoJSON',
  exportAsKML: 'Exportar como KML',
  exportAsTXT: 'Exportar como TXT',
  mapLayers: 'Capas de mapa',
  standard: 'Estándar',
  satellite: 'Satélite',
  terrain: 'Terreno',
  pointsOnMap: 'Puntos en el mapa',
  clearPoints: 'Eliminar todos los puntos',
  unitSystem: 'Sistema de unidades',
  metric: 'Metros (m)',
  imperial: 'Pies (ft)',
  customEllipsoid: 'Elipsoide personalizado',
  saveCustomEllipsoid: 'Guardar elipsoide personalizado',

  formulaContent: `
    <p>La proyección Gauss utiliza las siguientes fórmulas principales:</p>
    <h4>Directo (Lat/Long → Coordenadas Gauss)</h4>
    <p>Convierte coordenadas geográficas a coordenadas cartesianas planas:</p>
    <ul>
      <li>X = m + términos de corrección</li>
      <li>Y = ν·cos(B)·l + términos de corrección</li>
    </ul>
    <h4>Inverso (Coordenadas Gauss → Lat/Long)</h4>
    <p>Convierte coordenadas cartesianas planas a coordenadas geográficas:</p>
    <ul>
      <li>B = μ + términos de corrección</li>
      <li>L = L₀ + términos de corrección</li>
    </ul>
    <p>Donde:</p>
    <ul>
      <li>B: Latitud</li>
      <li>L: Longitud</li>
      <li>L₀: Meridiano central</li>
      <li>m: Longitud del arco meridiano</li>
      <li>ν: Radio de curvatura en el primer vertical</li>
    </ul>
  `,

  close: 'Cerrar',

  ellipsoids: {
    WGS84: 'Elipsoide WGS84',
    Krasovsky: 'Elipsoide Krassovsky',
    CGCS2000: 'Elipsoide CGCS2000',
    GRS80: 'Elipsoide GRS80',
    Beijing54: 'Elipsoide de Pekín 1954',
    Xian80: 'Elipsoide Xi’an 1980',
    Custom: 'Elipsoide personalizado'
  },

  about: {
    title: 'Sobre la proyección Gauss',
    description: 'La proyección Gauss (proyección Gauss-Kruger) es una proyección cilíndrica transversal conforme que se utiliza ampliamente en topografía y cartografía. Transforma los puntos de la superficie elipsoidal terrestre a un plano, siendo el método habitual para mapas topográficos a escala mediana y grande.',
    forwardTitle: 'Cálculo directo (Lat/Long → Coordenadas Gauss)',
    forwardDescription: 'El cálculo directo convierte coordenadas geográficas (longitud y latitud) en coordenadas cartesianas planas (X, Y). El eje X apunta al norte, el eje Y al este, y el origen está en la intersección del meridiano central y el ecuador.',
    inverseTitle: 'Cálculo inverso (Coordenadas Gauss → Lat/Long)',
    inverseDescription: 'El cálculo inverso transforma coordenadas cartesianas planas (X, Y) de nuevo en coordenadas geográficas (longitud y latitud), siendo la operación inversa del cálculo directo.',
    parametersTitle: 'Descripción de parámetros',
    ellipsoidParam: 'Parámetros del elipsoide',
    ellipsoidDescription: 'Modelo matemático que describe la forma de la Tierra. Diferentes sistemas geodésicos utilizan distintos parámetros de elipsoide. Los más comunes son WGS84, Pekín 1954, Xi’an 1980, CGCS2000, etc.',
    projectionParam: 'Parámetros de zonificación',
    projectionDescription: 'La proyección Gauss normalmente se divide en bandas de 3° y 6°. Las bandas de 3° se usan para mapas topográficos a gran escala, mientras que las de 6° se emplean para escalas medianas y pequeñas. El número de banda determina la posición del meridiano central.'
  },

  loadExample: 'Cargar ejemplo',
  customEllipsoidSaved: 'Elipsoide personalizado guardado correctamente',

  guide: {
    title: 'Guía de uso',
    forwardTitle: 'Cálculo directo (Lat/Long → Coordenadas Gauss)',
    step1: 'Seleccione "Directo" como tipo de cálculo en la parte superior',
    step2: 'Elija los parámetros del elipsoide y la zona de proyección adecuados',
    step3: 'Introduzca valores de latitud y longitud en formato decimal (por ejemplo 39.9042, 116.4074) o use la entrada en formato GMS',
    step4: 'Los resultados se actualizarán automáticamente o haga clic en "Calcular" para ejecutar el cálculo',

    inverseTitle: 'Cálculo inverso (Coordenadas Gauss → Lat/Long)',
    step5: 'Seleccione "Inverso" como tipo de cálculo en la parte superior',
    step6: 'Introduzca las coordenadas X e Y (unidad: metros)',
    step7: 'Consulte los resultados de latitud y longitud en formato decimal y GMS',

    batchTitle: 'Procesamiento por lotes',
    step8: 'Introduzca múltiples grupos de coordenadas en la sección de procesamiento por lotes (una por línea)',
    step9: 'Haga clic en "Calcular por lotes" para calcular todas las coordenadas simultáneamente',
    step10: 'Exporte los resultados como CSV o cópielos al portapapeles',

    mapTitle: 'Interacción con el mapa',
    step11: 'Haga clic en el mapa para añadir puntos y rellenar automáticamente los valores de entrada',
    step12: 'Use el menú desplegable para cambiar entre diferentes capas de mapa',
    step13: 'Exporte los puntos como GeoJSON, KML o TXT para usarlos en otras aplicaciones'
  },

  gaussianProjectionPoints: 'Puntos de proyección Gauss',
  point: 'Punto',
  gaussianProjection: 'Proyección Gauss',
  supportedFormats: 'Soporta: CSV, TXT, Excel',
  excelExportNotice: 'Se ha preparado la exportación a Excel, puede abrir directamente este archivo en Excel.',
  excelProcessNotice: 'No se soporta completamente el procesamiento de Excel, se recomienda usar el formato CSV para obtener mejores resultados.',
  exportAsCSV: 'Exportar como CSV',
  exportAsExcel: 'Exportar como Excel',
  excelExportSuccess: 'Exportación a Excel exitosa',
  excelExportFailed: 'Fallo en la exportación a Excel, se ha revertido al formato CSV',
  excelImportSuccess: 'Importación de Excel exitosa',
  excelImportFailed: 'Fallo en la importación de Excel, pruebe con el formato CSV',

  units: {
    metric: 'Metros (m)',
    km: 'Kilómetros (km)',
    imperial: 'Pies (ft)',
    miles: 'Millas (mi)'
  },

  resetView: 'Restablecer vista del mapa',
  pointsTotal: ' puntos',
  currentPoint: 'Resultado actual'
};