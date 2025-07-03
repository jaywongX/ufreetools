export default {
  name: 'Timer Pomodoro',
  description: 'Migliora produttività e concentrazione con la tecnica Pomodoro',
  
  // Testi interfaccia principale
  start: 'Avvia',
  pause: 'Pausa',
  reset: 'Ripristina',
  skip: 'Salta',
  work: 'Lavoro',
  shortBreak: 'Pausa breve',
  longBreak: 'Pausa lunga',
  settings: 'Impostazioni',
  stats: 'Statistiche',
  
  // Impostazioni
  settingsTitle: 'Impostazioni timer',
  workDuration: 'Durata lavoro',
  shortBreakDuration: 'Durata pausa breve',
  longBreakDuration: 'Durata pausa lunga',
  cyclesBeforeLongBreak: 'Cicli prima della pausa lunga',
  enableSound: 'Abilita suono',
  autoStartBreaks: 'Avvio automatico pause',
  autoStartWork: 'Avvio automatico lavoro',
  minutes: 'minuti',
  saveSettings: 'Salva impostazioni',
  resetDefaults: 'Ripristina predefiniti',
  
  // Statistiche
  statsTitle: 'Statistiche giornaliere',
  completedPomodoros: 'Pomodori completati',
  totalWorkTime: 'Tempo totale lavoro',
  averageDailyPomodoros: 'Media giornaliera pomodori',
  currentStreak: 'Giorni consecutivi',
  
  // Messaggi di stato
  workStarted: 'Inizia il lavoro! Concentrati sul compito.',
  shortBreakStarted: 'Inizia pausa breve. Rilassati!',
  longBreakStarted: 'Inizia pausa lunga. Rilassati bene!',
  pausedMessage: 'Timer in pausa',
  resetMessage: 'Timer ripristinato',
  workCompleted: 'Sessione lavoro completata!',
  breakCompleted: 'Pausa terminata!',
  
  // Introduzione strumento
  aboutTitle: 'Informazioni sulla tecnica Pomodoro',
  aboutDescription: 'La tecnica Pomodoro è un metodo di gestione del tempo sviluppato da Francesco Cirillo alla fine degli anni \'80. Questo metodo utilizza un timer per suddividere il lavoro in intervalli, tradizionalmente di 25 minuti, separati da brevi pause. Questi intervalli sono chiamati "pomodori", dal timer da cucina a forma di pomodoro che Cirillo utilizzò originariamente.',
  
  howToUseTitle: 'Come utilizzare',
  howToUseStep1: '1. Scegli un compito da completare',
  howToUseStep2: '2. Imposta il timer Pomodoro a 25 minuti (modificabile nelle impostazioni)',
  howToUseStep3: '3. Lavora con concentrazione fino al suono del timer',
  howToUseStep4: '4. Fai una breve pausa di 5 minuti',
  howToUseStep5: '5. Dopo 4 pomodori completati, fai una pausa più lunga (15-30 minuti)',
  
  benefitsTitle: 'Vantaggi della tecnica Pomodoro',
  benefit1: 'Migliora attenzione e concentrazione',
  benefit2: 'Riduce distrazioni e procrastinazione',
  benefit3: 'Aumenta motivazione e perseveranza',
  benefit4: 'Migliora equilibrio lavoro/riposo',
  benefit5: 'Riduce affaticamento mentale',
  
  tipsTitle: 'Consigli per l\'uso',
  tip1: 'Scegli un ambiente tranquillo con poche distrazioni',
  tip2: 'Durante le pause stacca completamente dal lavoro',
  tip3: 'Mantieni durate consistenti per creare abitudine',
  tip4: 'Usa le statistiche per analizzare i tuoi pattern',
  tip5: 'Combina con lista attività, un pomodoro per compito',
  
  // Contenuto articolo
  article: {
    title: 'Timer Pomodoro: massimizzare la produttività con la gestione del tempo',
    features: {
      title: 'Funzionalità e casi d\'uso',
      description: '<strong>Timer Pomodoro</strong> è uno strumento di produttività basato sull\'omonima tecnica sviluppata da Francesco Cirillo. Questo metodo divide il lavoro in intervalli di concentrazione (tradizionalmente 25 minuti, detti "pomodori") intervallati da brevi pause. La nostra app migliora questo sistema con durate personalizzabili, notifiche sonore, transizioni automatiche e statistiche dettagliate.',
      useCasesTitle: 'Scenari pratici',
      useCases: {
        items: [
          '<strong>Sessioni di studio</strong>: Gli studenti possono mantenere la concentrazione durante lo studio, prevenendo l\'esaurimento e massimizzando la ritenzione delle informazioni.',
          '<strong>Lavoro professionale</strong>: I knowledge worker possono affrontare compiti complessi come programmazione, scrittura o analisi dati con maggiore profondità, migliorando qualità e quantità dell\'output.',
          '<strong>Combattere la procrastinazione</strong>: Il timer aiuta a suddividere compiti intimidatori in parti gestibili, facilitando l\'inizio e la continuità.',
          '<strong>Gestione lavoro remoto</strong>: I remote worker possono stabilire confini chiari tra lavoro e pause, mantenendo produttività in ambienti potenzialmente distraenti.',
          '<strong>Creazione contenuti</strong>: Scrittori, artisti e creativi possono bilanciare output creativo e riposo necessario, prevenendo l\'affaticamento creativo.',
          '<strong>Gestione multitasking</strong>: Professionisti con molteplici responsabilità possono dedicare pomodori specifici a diversi progetti, garantendo progressi equilibrati.'
        ]
      }
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        {
          question: 'Qual è la scienza dietro la tecnica Pomodoro?',
          answer: 'La tecnica Pomodoro sfrutta principi psicologici: la capacità del cervello di concentrarsi per periodi limitati (tipicamente 25-45 minuti), l\'importanza di pause regolari per prevenire affaticamento mentale, e l\'effetto motivante dei limiti temporali. Ricerche dimostrano che alternare lavoro concentrato e brevi pause ottimizza le prestazioni mentali e riduce il consumo di risorse cognitive.'
        },
        {
          question: 'Come regolare le durate per diversi tipi di lavoro?',
          answer: 'Diverse attività beneficiano di <strong>intervalli personalizzati</strong>:<br>- <strong>Lavoro analitico complesso</strong> (programmazione, scrittura): considera pomodori più lunghi (30-45 minuti).<br>- <strong>Attività amministrative</strong>: l\'intervallo standard di 25 minuti è solitamente efficace.<br>- <strong>Lavoro creativo</strong>: alcuni preferiscono sessioni più brevi (15-20 minuti) o più lunghe (fino a 50 minuti) in stato di flow.<br>- <strong>Apprendimento</strong>: sessioni più brevi (15-20 minuti) favoriscono la ritenzione.<br>Sperimenta per trovare la durata ottimale in base a energia, complessità del compito e rendimenti decrescenti.'
        },
        {
          question: 'La tecnica aiuta chi ha ADHD o difficoltà di concentrazione?',
          answer: 'Sì, molti con ADHD trovano il <strong>metodo Pomodoro</strong> particolarmente utile. Gli intervalli strutturati creano motivazione esterna e confini chiari, mentre le pause frequenti si adattano a periodi di attenzione più brevi. La tecnica aiuta a costruire gradualmente la "muscolatura della concentrazione". Alcuni adattamenti utili includono: intervalli iniziali più brevi (15-20 minuti), attività fisica durante le pause, timer visivi e liste di compiti scritte.'
        },
        {
          question: 'Come gestire le interruzioni durante un pomodoro?',
          answer: 'Strategie per gestire interruzioni:<br>1. <strong>Interne</strong> (pensieri): annotale e torna al compito.<br>2. <strong>Esterne</strong> (colleghi, notifiche):<br>- Comunica che sei in sessione concentrata, negozia un momento alternativo.<br>- Se l\'interruzione è breve (<5 minuti), gestiscila e riprendi.<br>3. <strong>Emergenze</strong>: interrompi il timer, gestisci la situazione, poi inizia un nuovo pomodoro.<br>Un pomodoro è indivisibile - con interruzioni sostanziali, è meglio ricominciare.'
        },
        {
          question: 'Come tracciare e migliorare la produttività?',
          answer: 'Il nostro <strong>Timer Pomodoro</strong> include funzionalità di tracciamento:<br>1. <strong>Obiettivi giornalieri</strong>: inizia con 6-8 pomodori, aumenta gradualmente.<br>2. <strong>Monitora completamenti</strong>: confronta pomodori pianificati vs completati.<br>3. <strong>Analizza interruzioni</strong>: identifica cause di distrazione.<br>4. <strong>Esamina trend</strong>: le statistiche mostrano giorni/orari più produttivi.<br>5. <strong>Sperimenta durate</strong>: trova il tuo ciclo di concentrazione ottimale.<br>6. <strong>Celebra streak</strong>: il contatore giorni consecutivi motiva la costanza.<br>Questo approccio basato sui dati aiuta a perfezionare la gestione del tempo.'
        }
      ]
    },
    guide: {
      title: 'Guida all\'uso del Timer Pomodoro',
      step1: {
        title: 'Configura il timer',
        description: 'Personalizza il <strong>Timer Pomodoro</strong> nelle impostazioni (sinistra). Regola durata lavoro (25 min tradizionali), pause brevi (5 min), pause lunghe (15-30 min) e cicli prima della pausa lunga (tipicamente 4). Attiva/disattiva suoni e transizioni automatiche. Clicca "Salva impostazioni". Questa personalizzazione adatta il timer ai tuoi ritmi di concentrazione.'
      },
      step2: {
        title: 'Pianifica i compiti',
        description: 'Prima di avviare il timer, identifica e prioritizza i compiti specifici da affrontare. Per risultati ottimali, suddividi progetti ampi in sotto-compatti gestibili in un singolo pomodoro. Una lista chiara previene perdite di tempo nel decidere cosa fare durante le preziose sessioni di concentrazione. La <strong>tecnica Pomodoro</strong> funziona meglio con una pianificazione accurata.'
      },
      step3: {
        title: 'Inizia la sessione lavoro',
        description: 'Seleziona modalità "Lavoro" e clicca "Avvia". Impegnati a concentrarti sul compito fino al termine del timer. Il display mostra il tempo rimanente. Elimina potenziali distrazioni: disattiva notifiche, chiudi schede non pertinenti, comunica ai colleghi che sei in sessione concentrata. Il <strong>Timer Pomodoro</strong> crea un contenitore psicologico per il deep work - rispetta questo tempo con piena attenzione.'
      },
      step4: {
        title: 'Fai pause tra sessioni',
        description: 'Al termine dell\'intervallo di lavoro, il timer avvisa (se abilitato) e passa automaticamente alla pausa. Le pause brevi (5 min) seguono la maggior parte delle sessioni; dopo diversi pomodori completati, fai una pausa lunga (15-30 min). Durante le pause, stacca completamente: fai stretching, cammina, idratati o pratica mindfulness. Evita email/social media nelle pause brevi, poiché rischiano di estendersi oltre il tempo allocato. Il <strong>sistema Pomodoro</strong> si basa su pause adeguate per mantenere freschezza cognitiva.'
      },
      step5: {
        title: 'Monitora i progressi',
        description: 'Il <strong>Timer Pomodoro</strong> registra automaticamente le sessioni completate nel pannello statistiche (destra). Qui puoi monitorare pomodori giornalieri, tempo totale lavorato, medie e giorni consecutivi. Usa questi dati per comprendere i tuoi pattern di produttività, fissare obiettivi di miglioramento e mantenere la motivazione attraverso progressi visibili. Nel tempo, queste metriche aiutano a ottimizzare le abitudini lavorative per massimizzare efficienza e qualità dell\'output.'
      }
    },
    conclusion: '<strong>Timer Pomodoro</strong> trasforma il tuo modo di lavorare strutturando il tempo in intervalli ottimali di concentrazione e riposo. Implementando questo metodo scientificamente validato, potrai sperimentare maggiore focus, meno procrastinazione, output più elevato e ridotto affaticamento mentale. Questa tecnica è flessibile e adattabile a studenti, professionisti, creativi e chiunque cerchi di migliorare produttività e benessere. Con l\'uso continuativo, svilupperai maggiore consapevolezza nell\'uso del tempo e capacità di concentrazione trasferibili a tutti gli ambiti della vita.'
  }
};