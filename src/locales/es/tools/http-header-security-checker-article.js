export default {
  title: "Verificador de Seguridad de Cabeceras HTTP: Mejora la Postura de Seguridad de tu Sitio Web",
  features: {
    title: "Entendiendo la Seguridad de Cabeceras HTTP",
    description: "El <strong>Verificador de Seguridad de Cabeceras HTTP</strong> es una herramienta especializada diseñada para analizar y evaluar las <strong>cabeceras de seguridad</strong> de cualquier sitio web. Las <strong>cabeceras de seguridad</strong> son directivas especiales enviadas desde el servidor al navegador para proporcionar una capa adicional de <strong>seguridad</strong>, ayudando a proteger contra vulnerabilidades web comunes como Cross-Site Scripting (XSS), clickjacking y otros ataques por inyección de código.<br><br>Nuestra herramienta escanea cabeceras <strong>de seguridad críticas</strong> incluyendo Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options, X-Frame-Options y otras. Evalúa la configuración actual de <strong>cabeceras</strong>, identifica <strong>cabeceras de seguridad</strong> faltantes y proporciona una <strong>puntuación de seguridad completa</strong> con recomendaciones accionables para mejorar la postura de seguridad de tu sitio web.",
    useCases: {
      title: "Aplicaciones Comunes del Verificador de Seguridad de Cabeceras",
      items: [
        "Desarrolladores web realizando auditorías de seguridad en sitios recién desarrollados antes del despliegue",
        "Profesionales de seguridad ejecutando pruebas de penetración y evaluaciones de vulnerabilidad",
        "Administradores de sistemas verificando configuraciones de seguridad en múltiples dominios",
        "Equipos DevOps implementando monitoreo continuo de seguridad en sus pipelines CI/CD",
        "Dueños de sitios web validando su postura de seguridad tras aplicar las cabeceras recomendadas",
        "Consultores de seguridad demostrando la necesidad de medidas de seguridad mejoradas a sus clientes",
        "Responsables de cumplimiento verificando que los sitios cumplan con estándares y regulaciones de seguridad"
      ]
    }
  },
  faq: {
    title: "Preguntas Frecuentes sobre Seguridad de Cabeceras HTTP",
    items: [
      {
        question: "¿Qué son las cabeceras de seguridad HTTP y por qué son importantes?",
        answer: "Las cabeceras de seguridad HTTP son directivas especiales enviadas desde el servidor al navegador que controlan cómo debe comportarse este al manejar el contenido de tu sitio web. Son cruciales porque proveen una capa adicional de seguridad contra vulnerabilidades web comunes como XSS, CSRF, clickjacking y ataques de inyección de código. Una configuración adecuada de estas cabeceras puede mejorar significativamente la postura de seguridad de tu sitio web con mínimo esfuerzo."
      },
      {
        question: "¿Qué cabeceras de seguridad debería implementar cada sitio web?",
        answer: "Como mínimo, cada sitio web moderno debería implementar: Content-Security-Policy (CSP) para prevenir ataques XSS, Strict-Transport-Security (HSTS) para exigir HTTPS, X-Content-Type-Options para evitar análisis MIME-type, X-Frame-Options para prevenir clickjacking y Referrer-Policy para controlar información en cabeceras de referer. Nuestro verificador evalúa automáticamente estas cabeceras esenciales y muchas más."
      },
      {
        question: "¿Cómo se calcula la puntuación de seguridad?",
        answer: "La puntuación de seguridad se calcula basándose en la presencia y configuración correcta de cabeceras críticas de seguridad. Cabeceras importantes como Content-Security-Policy y HSTS contribuyen hasta 20 puntos cada una, mientras que otras como X-Content-Type-Options y X-Frame-Options aportan entre 10 y 15 puntos cada una. También evaluamos la calidad de la implementación, no solo la presencia de las cabeceras, para una puntuación máxima de 100 puntos."
      },
      {
        question: "¿Puedo usar esta herramienta para revisar sitios web que no me pertenecen?",
        answer: "Sí, puedes usar el Verificador de Cabeceras de Seguridad HTTP para analizar cualquier sitio web accesible públicamente. La herramienta solo examina cabeceras de respuesta HTTP, que son información pública enviada por servidores web. Sin embargo, recomendamos usarla principalmente en sitios web que posees o tienes permiso para probar."
      },
      {
        question: "¿Cómo implemento las cabeceras de seguridad recomendadas por esta herramienta?",
        answer: "La implementación depende de tu servidor web o plataforma. Para Apache, puedes añadirlas en tu archivo .htaccess. Para Nginx, en la configuración del servidor. Muchos sistemas de gestión de contenidos tienen plugins específicos para cabeceras de seguridad. El Verificador de Cabeceras de Seguridad proporciona ejemplos de configuración que puedes adaptar a tu entorno específico."
      }
    ]
  },
  guide: {
    title: "Guía de Uso del Verificador de Seguridad de Cabeceras HTTP",
    steps: [
      "Introduce la URL completa del sitio web que quieres revisar en el campo de entrada de URL (debe incluir http:// o https://)",
      "Para revisiones avanzadas, considera habilitar opciones como 'Seguir Redirecciones' si el sitio usa redireccionamiento",
      "Haz clic en el botón 'Verificar Cabeceras' para iniciar el análisis de seguridad",
      "Revisa la puntuación de seguridad y la calificación general en la parte superior de los resultados",
      "Analiza el desglose detallado de las cabeceras de seguridad detectadas, cada una marcada con un indicador de estado (bueno, advertencia o malo)",
      "Haz clic en cualquier cabecera de seguridad para expandir y ver información detallada, incluido su valor actual, propósito y recomendaciones específicas",
      "Consulta la lista completa de todas las cabeceras de respuesta HTTP devueltas por el servidor en la sección 'Todas las Cabeceras de Respuesta'",
      "Implementa las cabeceras de seguridad recomendadas en tu servidor web según las sugerencias proporcionadas, luego vuelve a ejecutar el verificador para confirmar las mejoras"
    ]
  },
  conclusion: "Revisar y actualizar regularmente las cabeceras de seguridad de tu sitio web es una práctica fundamental en mantenimiento de seguridad web. Con el Verificador de Seguridad de Cabeceras HTTP, puedes identificar fácilmente debilidades en tu configuración actual e implementar las mejoras necesarias para fortalecer tu defensa contra ataques web comunes. Recuerda que las cabeceras de seguridad son solo un aspecto de una estrategia integral de seguridad, pero ofrecen una protección significativa con relativamente poco esfuerzo de implementación."
}
