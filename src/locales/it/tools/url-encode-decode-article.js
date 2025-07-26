export default {
  title: 'Codifica/Decodifica URL: Guida completa',
  introduction: {
    title: 'Cos\'è la codifica/decodifica URL?',
    p1: '<strong>Codifica/decodifica URL</strong> è un processo essenziale nello sviluppo web che converte caratteri speciali in un formato sicuro per la trasmissione online. Quando inserisci informazioni in un URL, alcuni caratteri (come spazi, & e barre) hanno significati speciali. La codifica URL sostituisce questi caratteri con una percentuale (%) seguita da due cifre esadecimali.',
    p2: 'Il nostro strumento <strong>Codifica/Decodifica URL</strong> offre un\'interfaccia intuitiva che gestisce tre tipi di codifica: standard (encodeURI), componenti (encodeURIComponent) e completa (tutti i caratteri). Questa versatilità permette agli sviluppatori di testare facilmente le operazioni di <strong>codifica/decodifica URL in JavaScript</strong>, <strong>PHP</strong> o altri linguaggi.',
    p3: 'Che tu stia lavorando con form, API o parametri URL complessi, comprendere e implementare correttamente le tecniche di <strong>codifica/decodifica URL</strong> è cruciale per prevenire errori e vulnerabilità.'
  },
  
  applications: {
    title: 'Scenari pratici',
    scenario1: {
      title: 'Sviluppo web e gestione form',
      content: 'Gli sviluppatori usano spesso funzioni di <strong>codifica/decodifica URL in JavaScript</strong> per formattare correttamente i dati per richieste HTTP. Quando gli utenti inviano form con caratteri speciali, spazi o caratteri non ASCII, questi devono essere codificati prima dell\'invio al server.'
    },
    scenario2: {
      title: 'Sviluppo e integrazione API',
      content: 'Nelle API, gli sviluppatori usano funzioni di <strong>codifica/decodifica URL</strong> in vari linguaggi come Python, Java o Go. Parametri di query e segmenti di percorso possono contenere caratteri speciali che richiedono codifica.'
    },
    scenario3: {
      title: 'Interazione con database',
      content: 'Gli sviluppatori di database a volte devono eseguire operazioni di <strong>codifica/decodifica URL</strong> quando memorizzano o recuperano URL. Caratteri speciali negli URL potrebbero interferire con le query SQL.'
    },
    scenario4: {
      title: 'Sicurezza e autenticazione',
      content: 'I professionisti della sicurezza usano tecniche di <strong>codifica/decodifica URL</strong> per analizzare vulnerabilità web. Una corretta codifica aiuta a prevenire attacchi di injection e XSS.'
    },
    scenario5: {
      title: 'Ambienti di sviluppo multilinguaggio',
      content: 'In ambienti multilinguaggio, è essenziale usare la codifica URL in modo coerente. Il nostro strumento funge da punto di riferimento neutrale per verificare il comportamento tra diversi linguaggi.'
    }
  },
  
  guide: {
    title: 'Come usare lo strumento',
    step1: {
      title: 'Passo 1: Scegli il tipo di operazione',
      content: 'Seleziona "Codifica URL" per convertire caratteri speciali in formato URL-safe, o "Decodifica URL" per ripristinare i caratteri originali.'
    },
    step2: {  
      title: 'Passo 2: Scegli la modalità di codifica',
      content: 'Se codifichi, scegli tra:<ul><li><strong>Codifica standard</strong>: Per interi URL, preserva la struttura</li><li><strong>Codifica componenti</strong>: Per parametri URL, codifica tutti i caratteri speciali</li><li><strong>Codifica completa</strong>: Codifica tutti i caratteri non alfanumerici</li></ul>'
    },
    step3: {
      title: 'Passo 3: Inserisci il testo',
      content: 'Inserisci l\'URL o il testo da elaborare nel campo appropriato.'
    },
    step4: {
      title: 'Passo 4: Elabora e usa i risultati',
      content: 'Clicca il pulsante appropriato per elaborare l\'input. Il risultato apparirà nel campo di output e potrà essere copiato.'
    }
  },
  
  faq: {
    title: 'Domande frequenti',
    q1: 'Qual è la differenza tra encodeURI e encodeURIComponent?',
    a1: '<code>encodeURI()</code> è per interi URL e preserva i caratteri strutturali. <code>encodeURIComponent()</code> codifica tutti i caratteri speciali ed è ideale per parametri URL.',

    q2: 'Come implementare la codifica/decodifica URL in PHP?',
    a2: 'PHP offre <code>urlencode()</code>/<code>urldecode()</code> per codificare tutti i caratteri speciali (spazi come +), e <code>rawurlencode()</code> per seguire lo standard RFC 3986 (spazi come %20).',

    q3: 'Come implementare la codifica/decodifica URL in Python?',
    a3: 'Python usa <code>urllib.parse.quote()</code> e <code>unquote()</code> nel modulo <code>urllib.parse</code>. <code>quote()</code> codifica tutti i caratteri speciali (spazi come %20).',

    q4: 'Posso usare Base64 invece della codifica URL?',
    a4: 'No, Base64 non è un sostituto della codifica URL. Base64 può produrre caratteri con significato speciale negli URL.',

    q5: 'Come gestire la codifica URL nelle query SQL?',
    a5: 'Generalmente è meglio codificare i dati nell\'applicazione prima di costruire la query SQL, piuttosto che gestire la codifica direttamente in SQL.'
  },
  
  relatedTools: {
    title: 'Strumenti correlati',
    tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
    tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
    tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
  },
  
  resources: {
    title: 'Risorse esterne',
    resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - Documentazione dettagliata sulla codifica URL in JavaScript',
    resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP Manual: urlencode()</a> - Documentazione ufficiale sulla codifica URL in PHP',
    resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C Form Submission Specification</a> - Specifica ufficiale su come i browser codificano i dati dei form'
  },
  
  conclusion: {
    title: 'Conclusione',
    content: 'Il nostro strumento <strong>Codifica/Decodifica URL</strong> offre una soluzione versatile per tutte le esigenze di gestione degli URL. Che tu stia testando implementazioni in <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>Python</strong> o altri linguaggi, il nostro strumento soddisfa ogni necessità.'
  }
}
