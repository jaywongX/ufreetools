export default {
    title: 'Trasformatore a Sette Parametri: Tutorial di Conversione Batch di Coordinate Geodetiche Bursa-Wolf',
    functionTitle: 'Come il Trasformatore a Sette Parametri risolve le sfide dell\'integrazione di sistemi di coordinate multipli?',
    intro: '<p>Il Trasformatore a Sette Parametri fornisce conversione batch tra coordinate XYZ e BLH di <strong>WGS84, CGCS2000, Beijing 54, Xi\'an 80</strong> basata sul modello Bursa-Wolf, concentrandosi sulla risoluzione di problemi di offset e tracciabilità nella fusione di coordinate multi-fonte in piattaforme di rilevamento, ingegneria e GIS. Lo strumento dispone di algoritmi aperti, aggiustamento errori e log di processo per garantire che ogni conversione sia tracciabile, riproducibile e valutabile.</p><p>Con aggiustamento automatico e gestione parametri basata su modelli, i team possono rapidamente riutilizzare set di sette parametri ad alta affidabilità tra progetti e verificare ogni fase di rotazione e correzione di scala attraverso i log, facilitando la presentazione di documentazione tecnica completa durante le fasi di gara pubblica e accettazione.</p>',
    useCasesTitle: 'Scenari di Applicazione Pratica',
    useCases: {
        first: '<strong>Rilevamento Edile e Municipale</strong>: Integrazione di risultati CGCS2000 con sistemi di coordinate locali indipendenti per garantire giunzione perfetta di tubazioni sotterranee, modelli BIM e disegni as-built.',
        second: '<strong>Ingegneria Energetica e dei Trasporti</strong>: La costruzione interprovinciale richiede interoperabilità tra coordinate Beijing 54, Xi\'an 80 e WGS84, il Trasformatore a Sette Parametri fornisce valutazione completa degli errori.',
        third: '<strong>Telerilevamento e UAV</strong>: I risultati della fotografia aerea sono spesso emessi in WGS84, richiedendo conversione precisa a sette parametri prima dell\'importazione nella proiezione Gauss-Krüger locale.',
        fourth: '<strong>Registrazione Risorse Naturali</strong>: Le coordinate storiche dei paletti spesso utilizzano vecchi datum geodetici, lo strumento può mapparle in modo affidabile su CGCS2000 per registrazione e revisione.'
    },
    tipTitle: 'Illustrazione del Prodotto',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: 'Questa illustrazione può essere indicizzata dai motori di ricerca per snippet multimediali nei risultati di ricerca.',
    conclusion: '<p>Dalla verifica di un singolo punto all\'elaborazione di decine di migliaia in batch, il Trasformatore a Sette Parametri può produrre report contenenti residui di coordinate, RMSE e intervalli di confidenza. Basandosi su implementazione 100% frontend, le coordinate sensibili non lasciano mai il browser, soddisfacendo i requisiti di conformità per progetti classificati riguardo all\'archiviazione dei dati.</p>',
    faqTitle: 'Domande Frequenti',
    faqs: {
        q1: {
            question: 'Come garantisce il Trasformatore a Sette Parametri l\'accuratezza del calcolo dei sette parametri Bursa-Wolf?',
            answer: '<p>Lo strumento utilizza il metodo dei minimi quadrati per punti comuni per risolvere i sette parametri e produce vettori residui, Sigma0 e intervalli di confidenza al 95%. È possibile verificare il processo di calcolo matriciale attraverso i log per garantire che l\'accuratezza dei sette parametri Bursa-Wolf soddisfi le specifiche del progetto.</p>'
        },
        q2: {
            question: 'Come impostare delimitatori personalizzati durante l\'importazione batch CSV?',
            answer: '<p>Nell\'area "Input Dati di Coordinate", regolare il campo delimitatore. Il Trasformatore a Sette Parametri analizzerà i dati XYZ/BLH/ENH secondo il nuovo delimitatore mantenendo contemporaneamente colonne di nomi punti o commenti per l\'abbinamento successivo.</p>'
        },
        q3: {
            question: 'Il Trasformatore a Sette Parametri può gestire simultaneamente proiezioni Gauss-Krüger e UTM?',
            answer: '<p>Sì, basta selezionare la modalità corrispondente in "Parametri di Proiezione/Quota" e compilare il meridiano centrale, larghezza zona e fattore di scala. Il processo di conversione eseguirà prima un calcolo diretto 3D, poi un calcolo inverso alle coordinate di proiezione di destinazione.</p>'
        },
        q4: {
            question: 'Come ottenere i sette parametri quando i punti comuni sono insufficienti?',
            answer: '<p>Se si dispone di meno di tre punti comuni, è possibile richiamare i parametri di esempio integrati nel "Modello Parametri", o inserire valori di riferimento da progetti storici, poi aggiornare iterativamente con nuovi punti raccolti sul campo.</p>'
        },
        q5: {
            question: 'Il Trasformatore a Sette Parametri supporta sistemi di coordinate locali indipendenti?',
            answer: '<p>Sì. È possibile inserire il semiasse maggiore e il reciproco dell\'appiattimento nei "Parametri Ellissoide Personalizzati" e combinarli con parametri di proiezione personalizzati per ottenere un ripristino realistico e conversione reciproca di sistemi di coordinate locali indipendenti.</p>'
        }
    },
    tutorialTitle: 'Guida Operativa del Trasformatore a Sette Parametri',
    steps: {
        step1: {
            title: 'Selezione del Sistema di Coordinate e Modalità di Proiezione',
            description: 'Prima selezionare i sistemi di coordinate sorgente e destinazione, poi compilare informazioni come meridiano centrale e larghezza zona nell\'area parametri di proiezione per garantire coerenza con i dati misurati.'
        },
        step2: {
            title: 'Inserimento o Importazione di Punti di Coordinate',
            description: 'È possibile inserire manualmente un singolo punto XYZ/BLH/ENH, oppure trascinare CSV/TXT per importazione batch. Regolare i delimitatori se necessario per mantenere un\'analisi corretta.'
        },
        step3: {
            title: 'Configurazione dei Sette Parametri',
            description: 'Se i parametri sono noti, compilare direttamente ΔX, ΔY, ΔZ, Rx, Ry, Rz e scala; se sconosciuti, incollare coppie di punti nel "Risolutore Punti Comuni" ed eseguire l\'aggiustamento.'
        },
        step4: {
            title: 'Esecuzione della Conversione e Visualizzazione dei Log',
            description: 'Dopo aver cliccato su "Esegui Conversione", i log in tempo reale mostreranno analisi, calcoli diretti/inversi, rotazioni e correzioni di scala, facilitando il monitoraggio dei problemi.'
        },
        step5: {
            title: 'Valutazione della Precisione',
            description: 'Il pannello dei risultati mostra RMSE, residuo massimo e intervallo di confidenza al 95%. Se le metriche superano i limiti, tornare all\'area parametri per regolare o riaggiustare.'
        },
        step6: {
            title: 'Esportazione Risultati e Report',
            description: 'Dopo aver confermato l\'accuratezza, esportare il CSV dei risultati e i log insieme per archiviazione o presentazione alla revisione.'
        }
    },
    successTitle: 'Distribuzione Completata',
    successContent: 'Congratulazioni! Hai padroneggiato l\'intero flusso di lavoro del Trasformatore a Sette Parametri e ora puoi rapidamente completare conversioni batch in progetti di fusione di coordinate multi-fonte producendo report di accuratezza di livello professionale.',
    relatedToolsTitle: 'Strumenti Correlati Consigliati',
    relatedTools: {
        first: {
            name: 'Calcolatore Fogli Cartografici',
            description: 'Calcola i numeri di foglio basati su coordinate di latitudine e longitudine, supporta multiple scale.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Convertitore Tempo GNSS',
            description: 'Strumento per convertire tra tempo GPS, tempo BeiDou e tempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calcolatore Area e Perimetro',
            description: 'Supporta il disegno di poligoni per calcolare automaticamente area e perimetro con cambio di unità multiple.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calcolatore Linea Base',
            description: 'Inserisce coordinate di punto iniziale e finale per calcolare lunghezza e azimut della linea base, supporta analisi di propagazione errori.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Riferimenti Esterni',
    references: {
        first: {
            name: 'Associazione Cinese per Scienze dell\'Informazione Geografica - Standard e Regolamenti',
            description: 'Standard tecnici e regolamenti industriali dell\'informazione geografica cinese',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Standard ISO 19111 dei Sistemi di Riferimento Coordinate',
            description: 'Standard internazionale autorevole per riferimenti coordinati e trasformazione di proiezioni.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Standard del Consorzio Geospaziale Aperto (OGC)',
            description: 'Standard internazionali per la trasformazione dei dati geospaziali',
            url: 'https://www.ogc.org/'
        }
    }
}