export default {
  title: "Calcolatore proiezione Gaussiana: strumento per conversione coordinate geografiche/piane",
  introTitle: "Cos'è la proiezione Gaussiana e perché serve questo strumento",
  introPara1: "Il <strong>calcolatore proiezione Gaussiana</strong> (nota anche come proiezione trasversa di Mercatore) è uno strumento essenziale per ingegneri topografi, cartografi, professionisti GIS e chiunque lavori con sistemi informativi geografici. Questo potente strumento di conversione coordinate permette di convertire agevolmente tra coordinate geografiche (latitudine/longitudine) e coordinate cartesiane piane (X e Y) usando il metodo di proiezione Gaussiana.",
  introPara2: "Il nostro <strong>strumento conversione proiezione Gaussiana</strong> gestisce con alta precisione sia le trasformazioni dirette (geografiche→piane) che inverse (piane→geografiche). Supporta vari modelli ellissoidali tra cui WGS84, CGCS2000, Krasovsky (Pechino54) e altri. Lo strumento applica automaticamente le appropriate formule matematiche e termini correttivi, garantendo conversioni coordinate accurate per i vostri progetti di misurazione e cartografia.",
  
  scenariosTitle: "Scenari pratici per calcoli proiezione Gaussiana",
  scenario1: "<strong>Topografia e gestione territoriale:</strong> I topografi usano la conversione Gaussiana per trasformare coordinate GPS in sistemi di coordinate locali piane, per misurazioni territoriali accurate, delimitazione confini proprietà e pianificazione edilizia.",
  scenario2: "<strong>Cartografia topografica:</strong> Cartografi e professionisti cartografici si affidano alla proiezione Gaussiana per creare mappe topografiche precise, mantenendo relazioni angolari e minimizzando deformazioni in aree specifiche.",
  scenario3: "<strong>Integrazione dati GIS:</strong> Analisti GIS usano calcoli Gaussiani per integrare dati da diverse fonti con sistemi di coordinate differenti in un quadro di riferimento unificato per analisi spaziali.",
  scenario4: "<strong>Progetti ingegneristici:</strong> Ingegneri civili e team edili adottano la proiezione Gaussiana per progettare infrastrutture, garantendo il posizionamento preciso di strade, ponti, gallerie e servizi rispetto a caratteristiche esistenti.",
  scenario5: "<strong>Applicazioni militari:</strong> Operazioni militari utilizzano coordinate Gaussiane per pianificazione tattica, navigazione e puntamento, dove è richiesta precisione assoluta.",
  scenariosConclusion: "La versatilità dei <strong>calcoli proiezione Gaussiana</strong> li rende indispensabili in molti campi professionali che richiedono posizionamento spaziale preciso. Il nostro strumento semplifica questo complesso processo matematico in un'interfaccia intuitiva, adatta sia a professionisti che a principianti.",
  
  faqTitle: "Domande frequenti sulla proiezione Gaussiana",
  faq1q: "Qual è la differenza tra proiezione Gaussiana e UTM?",
  faq1a: "La proiezione Gaussiana è la base matematica del sistema UTM (Universal Transverse Mercator). Le principali differenze sono:<ul><li>UTM usa un sistema standardizzato di zone, con zone di 6° e parametri specifici globali</li><li>La proiezione Gaussiana è più flessibile, permettendo meridiani centrali e ampiezze di zona personalizzate (3° o 6°)</li><li>UTM include uno spostamento fittizio standard di 500.000m a est e un fattore di scala 0.9996</li><li>Il nostro <strong>calcolatore proiezione Gaussiana</strong> offre più opzioni di personalizzazione dei parametri ellissoidali rispetto ai tipici calcolatori UTM</li></ul>",
  
  faq2q: "Quale modello ellissoidale devo scegliere per i calcoli Gaussiani?",
  faq2a: "La scelta dell'ellissoide dipende dalla vostra area geografica e dallo standard di sistema di coordinate usato:<ul><li><strong>WGS84:</strong> Standard globale usato con sistemi GPS e cartografia internazionale</li><li><strong>CGCS2000:</strong> Sistema ufficiale cinese dal 2000</li><li><strong>Krasovsky/Pechino54:</strong> Storicamente usato in Cina e parti dell'Europa orientale</li><li><strong>Xi'an80:</strong> Standard nazionale cinese precedente al CGCS2000</li></ul>Per la maggior parte delle applicazioni moderne, si raccomanda WGS84 o CGCS2000, a meno che non si lavori specificamente con dati legacy che richiedono un ellissoide diverso. Il nostro <strong>strumento conversione Gaussiana</strong> supporta tutti questi modelli e altri.",
  
  faq3q: "Qual è la precisione dei calcoli Gaussiani offerti da questo strumento?",
  faq3a: "Il nostro <strong>calcolatore proiezione Gaussiana</strong> implementa il modello matematico completo includendo i necessari termini correttivi, garantendo alta precisione. Per la maggior parte delle applicazioni pratiche, lo strumento raggiunge precisione sub-millimetrica, superando i requisiti tipici di progetti cartografici e topografici. La precisione dipende dalla corretta immissione dei parametri ellissoidali e dalla corretta specificazione della zona. Per lavori geodetici ad altissima precisione (requisiti sub-millimetrici), potrebbe essere necessario software specializzato con termini correttivi aggiuntivi.",
  
  faq4q: "Posso usare questo strumento Gaussiano per elaborazioni batch di coordinate?",
  faq4a: "Sì, il nostro <strong>convertitore proiezione Gaussiana</strong> include funzionalità complete di elaborazione batch. Potete:<ul><li>Inserire multiple coppie di coordinate (latitudine/longitudine o X/Y)</li><li>Caricare file CSV, TXT o Excel contenenti dati di coordinate</li><li>Elaborare centinaia o migliaia di punti simultaneamente</li><li>Esportare risultati in vari formati tra cui CSV, Excel, GeoJSON, KML e TXT</li></ul>Questo rende lo strumento ideale per progetti che coinvolgono grandi dataset, che sarebbero molto dispendiosi in termini di tempo se elaborati singolarmente.",
  
  faq5q: "Cosa sono le zone di 3° e 6° nella proiezione Gaussiana?",
  faq5a: "La proiezione Gaussiana divide la Terra in zone di longitudine per minimizzare deformazioni:<ul><li><strong>Zone 3°:</strong> Zone più strette offrono maggiore precisione e minori deformazioni, tipicamente usate per cartografia a grande scala e rilevamenti dettagliati. Numerazione zone da 1 a 120.</li><li><strong>Zone 6°:</strong> Zone più ampie coprono aree maggiori con lievemente più deformazione ai bordi, comunemente usate per cartografia regionale e coordinate UTM. Numerazione zone da 1 a 60.</li></ul>Il nostro <strong>strumento calcolo Gaussiano</strong> supporta entrambi i sistemi di zona e calcola automaticamente il meridiano centrale in base alla vostra scelta di zona.",
  
  tutorialTitle: "Guida passo-passo all'uso del calcolatore proiezione Gaussiana",
  forwardCalcTitle: "Trasformazione diretta (geografiche → piane)",
  step1: "<strong>Seleziona tipo calcolo:</strong> Scegli \"Diretta\" nelle opzioni tipo calcolo in cima allo strumento.",
  step2: "<strong>Seleziona parametri ellissoide:</strong> Dal menu a discesa, scegli il tipo di ellissoide appropriato (WGS84, CGCS2000, Pechino54 ecc.) in base ai requisiti del vostro sistema di coordinate.",
  step3: "<strong>Configura parametri proiezione:</strong> Scegli zona di 3° o 6° e inserisci il numero di zona. Il meridiano centrale sarà calcolato automaticamente, oppure puoi inserirlo manualmente se necessario.",
  step4: "<strong>Inserisci coordinate geografiche:</strong> Inserisci latitudine e longitudine in formato decimale. Puoi anche usare il campo di input gradi/minuti/secondi per inserire la notazione tradizionale.",
  
  inverseCalcTitle: "Trasformazione inversa (piane → geografiche)",
  step5: "<strong>Seleziona tipo calcolo:</strong> Scegli \"Inversa\" come tipo di calcolo.",
  step6: "<strong>Configura ellissoide e proiezione:</strong> Seleziona gli stessi parametri ellissoidali e di proiezione usati dal sistema di coordinate originale.",
  step7: "<strong>Inserisci coordinate piane:</strong> Inserisci i valori X (nord) e Y (est) in metri.",
  step8: "<strong>Visualizza risultati:</strong> Le latitudini e longitudini calcolate saranno mostrate sia in formato decimale che gradi/minuti/secondi per riferimento.",
  
  batchTitle: "Elaborazione batch di multiple coordinate",
  step9: "<strong>Prepara dati:</strong> Formatta le coppie di coordinate, una per riga (per diretta: latitudine,longitudine; per inversa: X,Y). Puoi anche usare il pulsante \"Carica CSV\" per importare dati da file.",
  step10: "<strong>Elabora dati batch:</strong> Clicca \"Calcolo batch\" per convertire tutte le coordinate in una volta.",
  step11: "<strong>Esporta risultati:</strong> Usa i pulsanti \"Copia tutto\" o \"Scarica CSV\" per salvare i risultati convertiti e usarli in altre applicazioni.",
  
  tutorialConclusion: "Usando questo <strong>calcolatore proiezione Gaussiana</strong>, potete convertire rapidamente coordinate tra sistemi geografici e piani senza complessi calcoli manuali. L'interfaccia intuitiva dello strumento rende la conversione di coordinate a livello professionale accessibile a utenti di tutti i livelli.",
  
  relatedToolsTitle: "Strumenti correlati per coordinate",
  relatedTool1: "Convertitore di coordinate",
  relatedTool1Desc: "Converti tra diversi sistemi di coordinate, inclusi UTM, MGRS e varie griglie nazionali.",
  relatedTool2: "Riproduzione tracce GPS",
  relatedTool2Desc: "Visualizza e analizza tracce GPS con dati di coordinate su mappa interattiva.",
  
  referencesTitle: "Riferimenti tecnici e risorse",
  reference1: "World Geodetic System 1984 (WGS84) - National Geospatial-Intelligence Agency",
  reference2: "Transverse Mercator projection - Wikipedia",
  reference3: "State Plane Coordinate System of 1983 - National Geodetic Survey"
}
