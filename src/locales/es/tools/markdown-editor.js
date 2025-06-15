export default {
  name: 'Editor Markdown',
  description: 'Edite y visualice documentos Markdown con renderizado en tiempo real',
  options: {
    mode: 'Modo',
    syntaxHighlighting: 'Resaltado de Sintaxis',
    autoSave: 'Guardado Automático',
    lineNumbers: 'Números de Línea',
    spellCheck: 'Verificación Ortográfica',
    wordWrap: 'Ajuste de Línea'
  },
  modes: {
    split: 'Vista Dividida',
    edit: 'Solo Edición',
    preview: 'Solo Vista Previa'
  },
  actions: {
    bold: 'Negrita',
    italic: 'Cursiva',
    strikethrough: 'Tachado',
    heading: 'Encabezado',
    link: 'Enlace',
    image: 'Imagen',
    list: 'Lista',
    quote: 'Cita',
    code: 'Código',
    table: 'Tabla',
    hr: 'Línea Horizontal',
    preview: 'Vista Previa',
    copy: 'Copiar',
    clear: 'Limpiar',
    download: 'Descargar Markdown',
    downloadHTML: 'Descargar HTML',
    upload: 'Subir Markdown'
  },
  messages: {
    copied: 'Contenido copiado al portapapeles',
    copyError: 'Fallo al copiar, por favor copie manualmente',
    clearConfirm: '¿Está seguro que desea limpiar el contenido del editor?',
    templateConfirm: 'Aplicar la plantilla reemplazará el contenido actual. ¿Continuar?',
    templateApplied: 'Plantilla "{name}" aplicada',
    saved: 'Documento guardado',
    uploadSuccess: 'Documento subido exitosamente',
    uploadError: 'Error al subir el documento',
    wordCount: '{count} palabras',
    charCount: '{count} caracteres'
  },
  placeholder: 'Escriba su contenido Markdown aquí...',
  placeholders: {
    linkText: 'Texto del enlace',
    imageAlt: 'Descripción de la imagen'
  },
  templates: {
    title: 'Plantillas Rápidas',
    apply: 'Aplicar Plantilla',
    confirm: 'Aplicar Plantilla',
    simple: {
      name: 'Documento Simple',
      description: 'Incluye encabezados, listas, citas, etc.',
      content: `# Título del Documento

## Introducción
Este es un ejemplo simple de un documento Markdown.

## Características
- Soporta encabezados y párrafos
- Soporta texto en **negrita** y *cursiva*
- Soporta listas ordenadas y no ordenadas

> Esto es una cita, utilizada para citar la opinión de otra persona.

## Conclusión
Markdown es un lenguaje de marcado simple y fácil de usar.`
    },
    readme: {
      name: 'README del Proyecto',
      description: 'Estructura estándar para documentación de proyectos',
      content: `# Nombre del Proyecto

[![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)](LICENSE)

## Descripción del Proyecto
Breve descripción de las funciones principales y el propósito del proyecto.

## Características
- Característica principal 1
- Característica principal 2
- Característica principal 3

## Instalación
\`\`\`bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
\`\`\`

## Ejemplo de Uso
\`\`\`javascript
// Código de ejemplo
const ejemplo = new Ejemplo();
ejemplo.init();
\`\`\`

## Documentación
Para documentación más detallada, consulte [Enlace a la Documentación](docs/README.md).

## Guía de Contribución
Las contribuciones son bienvenidas, consulte [Guía de Contribución](CONTRIBUTING.md).

## Licencia
Este proyecto se publica bajo la Licencia MIT, consulte [LICENSE](LICENSE) para más detalles.`
    },
    resume: {
      name: 'Currículum',
      description: 'Plantilla de currículum personal',
      content: `# Currículum

## Información Personal
- **Nombre**: Juan Pérez
- **Teléfono**: 123-456-7890
- **Correo**: juanperez@email.com
- **Objetivo Laboral**: Desarrollador Frontend

## Educación
**Universidad XYZ** | Ciencias de la Computación | Septiembre 2016 - Junio 2020

## Experiencia Laboral
### XYZ Tecnología S.A. | Desarrollador Frontend | Julio 2020 - Presente
- Responsable del desarrollo frontend y mantenimiento de productos principales
- Desarrollé sistema de gestión empresarial usando Vue.js, mejorando experiencia de usuario
- Optimicé rendimiento frontend, reduciendo tiempo de carga de página en 30%

### ABC Corp. | Pasante Frontend | Julio 2019 - Junio 2020
- Participé en proyecto de rediseño del sitio web de la empresa
- Asistí al equipo con refactorización y optimización de código

## Habilidades Técnicas
- **Frontend**: HTML, CSS, JavaScript, Vue.js, React
- **Backend**: Node.js, Express
- **Otras Herramientas**: Git, Webpack, Docker

## Experiencia en Proyectos
### Sistema de Gestión Empresarial
- Desarrollado con Vue.js + Element UI
- Implementé visualización de datos, características de gestión de permisos
- Optimicé velocidad de respuesta del sistema, mejoré experiencia de usuario

## Habilidades Lingüísticas
- Español (Nativo)
- Inglés (Avanzado)`
    },
    meeting: {
      name: 'Acta de Reunión',
      description: 'Plantilla de acta de reunión',
      content: `# Acta de Reunión

## Información de la Reunión
- **Tema**: Discusión de Progreso del Proyecto
- **Fecha**: 15 de Mayo de 2023
- **Hora**: 14:00 - 16:00
- **Ubicación**: Sala de Conferencias A
- **Moderador**: Ana Gerente
- **Tomador de Notas**: Juan Asistente

## Asistentes
- Ana Gerente (Departamento de Producto)
- Miguel Ingeniero (Departamento de Desarrollo)
- Sara Diseñadora (Departamento de Diseño)
- Tomás Tester (Departamento de Pruebas)

## Agenda
1. Revisión de la finalización de tareas de la semana pasada
2. Discusión del plan de trabajo de esta semana
3. Resolución de problemas en el proyecto
4. Determinación de próximos pasos

## Contenido de la Discusión
### 1. Revisión de Tareas de la Semana Pasada
- Documento de requisitos de producto completado
- Borrador de diseño completado al 60%
- Desarrollo frontend completó configuración de marco básico

### 2. Plan de Trabajo de Esta Semana
- Departamento de diseño para completar borradores de diseño restantes
- Departamento de desarrollo para comenzar desarrollo de funcionalidad principal
- Departamento de pruebas para preparar casos de prueba

### 3. Problemas y Soluciones
- **Problema**: Diseño de interfaz de datos irrazonable
- **Solución**: Miguel Ingeniero rediseñará interfaces y entregará el miércoles

## Elementos de Acción
| Tarea | Persona Responsable | Fecha Límite |
|------|-------------------|---------|
| Completar borradores de diseño | Sara Diseñadora | 17 de Mayo |
| Rediseñar interfaces | Miguel Ingeniero | 18 de Mayo |
| Preparar casos de prueba | Tomás Tester | 19 de Mayo |

## Próxima Reunión
- **Fecha**: 22 de Mayo de 2023
- **Hora**: 14:00 - 15:00`
    }
  },
  dialogs: {
    clear: {
      title: 'Limpiar Editor',
      message: '¿Está seguro que desea limpiar el contenido del editor?'
    },
    template: {
      title: 'Aplicar Plantilla',
      message: 'Aplicar la plantilla reemplazará el contenido actual. ¿Continuar?'
    }
  },
  article: {
    title: "Editor Markdown: Cree documentos formateados fácilmente",
    features: {
      title: "Comprendiendo la edición Markdown",
      description: "El <strong>Editor Markdown</strong> es una herramienta versátil de <strong>formato de texto</strong> diseñada para ayudar a los usuarios a crear documentos estructurados bellamente usando la sencilla sintaxis Markdown. Esta poderosa <strong>herramienta de edición de documentos</strong> combina un entorno de escritura intuitivo con funcionalidad de vista previa en tiempo real, haciéndola perfecta para la creación de contenido en varias plataformas.<br><br>Nuestro <strong>editor de texto enriquecido</strong> soporta todos los elementos estándar de sintaxis Markdown incluyendo encabezados, listas, enlaces, imágenes, bloques de código y tablas. El editor tiene resaltado de sintaxis, vista dividida, y atajos convenientes de formato. Ya sea que esté redactando documentación, preparando entradas de blog o tomando notas estructuradas, este <strong>editor Markdown</strong> ofrece el equilibrio perfecto entre simplicidad y funcionalidad para optimizar su flujo de trabajo de creación de contenido.",
      useCases: {
        title: "Aplicaciones prácticas de edición Markdown",
        items: [
          "Desarrolladores de software escribiendo <strong>documentación técnica</strong> y archivos README para repositorios de GitHub, usando la estructura de encabezados y formato de código de Markdown para una organización clara",
          "Creadores de contenido redactando <strong>entradas de blog</strong> con imágenes incrustadas, enlaces y texto formateado que puedan exportarse fácilmente a sistemas de gestión de contenido como WordPress o Medium",
          "Escritores técnicos creando <strong>documentación del producto</strong> con formato consistente, tablas para presentación de datos y organización jerárquica mediante encabezados",
          "Estudiantes tomando <strong>notas estructuradas</strong> durante clases o investigaciones, usando la sintaxis simple de Markdown para formato rápido sin interrumpir su proceso de pensamiento",
          "Gerentes de proyectos desarrollando <strong>páginas wiki organizadas</strong> con secciones vinculadas, listas de tareas y contenido formateado para bases de conocimiento del equipo",
          "Investigadores académicos redactando <strong>trabajos de investigación</strong> o notas con citas, fórmulas incrustadas y encabezados estructurados antes del formato final en software dedicado"
        ]
      }
    },
    faq: {
      title: "Preguntas frecuentes sobre edición Markdown",
      items: [
        {
          question: "¿Cuál es la diferencia entre Markdown y los procesadores de texto tradicionales?",
          answer: "Markdown es un lenguaje de marcado ligero que usa sintaxis de texto plano para indicar formato, a diferencia de los procesadores de texto tradicionales que usan interfaces WYSIWYG (lo que ves es lo que obtienes) con botones y menús de formato. Las ventajas clave de Markdown incluyen: simplicidad y velocidad para tareas básicas de formato, excelente portabilidad entre plataformas, tamaños de archivo más pequeños, compatibilidad con control de versiones, enfoque en contenido en lugar de estilo, y salida consistente. Los procesadores de texto tradicionales ofrecen opciones de formato más complejas y edición visual directa pero a menudo crean formatos de archivo propietarios con problemas de compatibilidad. Markdown es ideal para contenido que necesita convertirse en múltiples formatos (HTML, PDF) o compartirse entre diferentes plataformas."
        },
        {
          question: "¿Puedo exportar mis documentos Markdown a otros formatos?",
          answer: "Sí, nuestro Editor Markdown permite exportar sus documentos en múltiples formatos. Puede descargar directamente su contenido como archivo Markdown (.md) para edición futura o como HTML para publicación web. Para conversiones adicionales como PDF, DOCX (Word) u otros formatos especializados, puede usar la exportación HTML con convertidores de terceros o herramientas como Pandoc. La naturaleza limpia y estructurada de Markdown la convierte en un formato fuente excelente para conversión a casi cualquier tipo de documento. Esta flexibilidad es por qué Markdown se ha convertido en el formato preferido para contenido que debe existir en múltiples formatos o plataformas."
        },
        {
          question: "¿Este editor soporta GitHub Flavored Markdown?",
          answer: "Sí, nuestro Editor Markdown soporta completamente GitHub Flavored Markdown (GFM), que incluye todas las características estándar de Markdown más varias extensiones que lo hacen especialmente adecuado para documentación técnica y de código. Estas extensiones incluyen resaltado de sintaxis en bloques de código, tablas, texto tachado, listas de tareas con casillas de verificación, y vinculación automática de URLs. El editor también representa correctamente elementos específicos de GFM como menciones de usuarios, referencias a incidencias y códigos de emoji en el modo de vista previa. Esta compatibilidad asegura que los documentos creados en nuestro editor se muestren correctamente en GitHub en repositorios, incidencias, solicitudes de cambios y páginas wiki."
        },
        {
          question: "¿Puedo colaborar con otras personas usando este editor Markdown?",
          answer: "Aunque nuestro Editor Markdown no incluye funciones integradas de colaboración en tiempo real como Google Docs, aún puede colaborar efectivamente con otras personas usando un flujo de trabajo centrado en el editor. Puede exportar sus documentos Markdown y compartirlos por correo electrónico o aplicaciones de mensajería, o usar el editor junto con sistemas de control de versiones como Git para una colaboración más estructurada. Para equipos, podría considerar usar el editor junto con plataformas como GitHub, donde múltiples contribuyentes pueden trabajar en archivos Markdown con historial de versiones, solicitudes de cambios y comentarios. La naturaleza de texto plano de Markdown la hace especialmente adecuada para seguir cambios y fusionar contribuciones comparada con formatos binarios."
        },
        {
          question: "¿Cómo puedo aprender sintaxis Markdown si soy principiante?",
          answer: "Aprender la sintaxis Markdown es sencillo incluso para principiantes completos. Nuestro editor incluye una barra de herramientas de formato que le permite aplicar elementos Markdown comunes con un clic, ayudándole a aprender la sintaxis visualmente. A medida que use estos botones, verá aparecer la sintaxis Markdown correspondiente en su texto, creando un proceso natural de aprendizaje. Además, la vista previa en tiempo real muestra cómo se renderizará su Markdown, proporcionando retroalimentación inmediata. Para un enfoque estructurado, recomendamos comenzar con elementos básicos (encabezados, negrita, cursiva, enlaces y listas) antes de pasar a características más avanzadas como tablas y bloques de código. Muchos usuarios descubren que pueden dominar lo básico en menos de 30 minutos gracias al diseño intuitivo de Markdown."
        }
      ]
    },
    guide: {
      title: "Guía paso a paso para usar el Editor Markdown",
      steps: [
        "Empiece seleccionando su <strong>modo de edición</strong> preferido desde la barra superior - elija entre vista dividida (edición y vista previa lado a lado), solo edición (para máximo espacio de escritura), o solo vista previa (para ver el formato final)",
        "Comience a escribir su contenido en el panel del editor, usando <strong>sintaxis Markdown</strong> para formato o utilice los botones de la barra de herramientas sobre el editor para insertar automáticamente la sintaxis correcta",
        "Cree estructura de documento con <strong>encabezados</strong> usando símbolos de numeral (# para encabezado principal, ## para subencabezado, etc.) para organizar su contenido en secciones lógicas",
        "Formatee texto usando <strong>estilos en línea</strong> como asteriscos para *cursiva* o **negrita**, comillas invertidas para `código`, o virgulillas para ~~tachado~~ para enfatizar puntos importantes",
        "Inserte <strong>enlaces e imágenes</strong> usando la sintaxis [texto del enlace](URL) para hipervínculos y ![texto alternativo](url-imagen) para imágenes, creando contenido rico e interactivo",
        "Organice información con <strong>listas y tablas</strong> - use guiones o números para listas y símbolos de tubería con guiones para crear tablas estructuradas con filas y columnas",
        "Visualice su trabajo en tiempo real para ver cómo aparecerá el <strong>documento formateado</strong>, realizando ajustes según sea necesario antes de descargar o copiar el contenido final"
      ]
    },
    conclusion: "El Editor Markdown simplifica el proceso de crear documentos bien formateados sin la complejidad de procesadores de texto tradicionales o la curva de aprendizaje de HTML. Proporcionando un entorno de escritura limpio y libre de distracciones con capacidades de formato poderosas, le permite enfocarse en su contenido manteniendo una presentación coherente y profesional. Ya sea que sea un desarrollador documentando código, un escritor creando entradas de blog, o un estudiante organizando notas, la sintaxis directa de Markdown combinada con la vista previa en tiempo real de nuestro editor hace que la creación de documentos sea más rápida e intuitiva. A medida que más plataformas adoptan soporte Markdown, dominar este formato versátil con nuestro editor le da una habilidad valiosa que se transfiere a numerosas aplicaciones y flujos de trabajo, ahorrando tiempo y mejorando la productividad para todas sus necesidades de documentación.",
    defaultContent: `# Bienvenido al Editor Markdown

Este es un editor Markdown simple con vista previa en tiempo real y resaltado de sintaxis.

## Sintaxis Básica

### Encabezados
Use símbolos # para indicar encabezados:
# Encabezado 1
## Encabezado 2
### Encabezado 3

### Énfasis
**Negrita** o __Negrita__
*Cursiva* o _Cursiva_
~~Tachado~~

### Listas
Lista no ordenada:
- Elemento 1
- Elemento 2
- Elemento 3

Lista ordenada:
1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Enlaces e Imágenes
[Texto del enlace](https://ejemplo.com)
![Texto alternativo de imagen](https://ejemplo.com/imagen.jpg)

### Código
Código en línea: \`var ejemplo = "hola";\`

### Citas
> Esto es una cita.

### Tablas
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|--------------|--------------|
| Celda 1      | Celda 2      | Celda 3      |
| Celda 4      | Celda 5      | Celda 6      |

### Línea Horizontal
---

¡Comience a editar! Puede usar la barra de herramientas de arriba para insertar rápidamente varios elementos Markdown.`
  }
}