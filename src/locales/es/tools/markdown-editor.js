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
  }
};