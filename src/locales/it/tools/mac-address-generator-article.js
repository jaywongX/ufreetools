export default {
    title: 'Generatore di Indirizzi MAC: Genera Indirizzi MAC Casuali e Identificatori di Dispositivi di Rete Online',
    functionTitle: 'Come può il Generatore di Indirizzi MAC aiutarti a generare rapidamente identificatori di dispositivi di rete validi?',

    useCasesTitle: 'Casi d\'Uso Tipici del Generatore di Indirizzi MAC',
    useCase1: '<strong>Test di Dispositivi di Rete:</strong> Il generatore di indirizzi MAC fornisce a ingegneri di rete e sviluppatori un grande numero di indirizzi MAC conformi agli standard IEEE per test di configurazione e verifica funzionale di dispositivi di rete come router, switch e firewall.',
    useCase2: '<strong>Sviluppo e Debug Software:</strong> Il generatore di indirizzi MAC può generare in batch dati strutturati di indirizzi MAC per test e debug nello sviluppo di applicazioni di rete, progetti IoT e simulazione di dispositivi Bluetooth.',
    useCase3: '<strong>Simulazione di Dispositivi IoT:</strong> Il generatore di indirizzi MAC aiuta gli sviluppatori a creare identificatori di dispositivi virtuali per gestione dispositivi e test di comunicazione in progetti di smart home, IoT industriale e veicoli connessi.',
    useCase4: '<strong>Test e Ricerca di Sicurezza:</strong> Il generatore di indirizzi MAC fornisce indirizzi MAC anonimizzati ai ricercatori di sicurezza per l\'uso in test di sicurezza di rete, test di penetrazione e ricerca sul bypass del filtraggio MAC.',
    useCase5: '<strong>Educazione e Formazione:</strong> Il generatore di indirizzi MAC genera indirizzi MAC in formato standard per aiutare insegnanti e studenti a comprendere la struttura degli indirizzi di livello rete, le regole di assegnazione OUI e la differenziazione unicast vs multicast.',
    useCase6: '<strong>Popolamento Database:</strong> Il generatore di indirizzi MAC crea dati di indirizzi MAC conformi a pattern reali per database di sviluppo e test di sistemi di gestione di rete, piattaforme di monitoraggio dispositivi e sistemi di gestione asset.',

    tipTitle: 'Suggerimenti per Uso Professionale',
    tipContent: 'Quando usi il generatore di indirizzi MAC, si consiglia di scegliere formati e prefissi produttore appropriati in base alle esigenze reali. Per scenari che richiedono la simulazione di dispositivi reali, seleziona prefissi OUI di produttori specifici. Per scenari di test di sicurezza, usa indirizzi amministrati localmente (LAA) per evitare conflitti con dispositivi reali.',

    conclusion: '<p>Che sia per ingegneria di rete, sviluppo software o ricerca di sicurezza, il <strong>Generatore di Indirizzi MAC</strong> fornisce indirizzi MAC di alta qualità conformi agli standard IEEE. Il generatore di indirizzi MAC supporta molteplici formati di output inclusi formati separati da due punti, trattino e punto, offrendo al contempo la selezione del prefisso OUI del produttore per rendere gli indirizzi generati più realistici. Tutta l\'elaborazione avviene localmente nel browser, garantendo che non vi sia rischio di perdita di dati.</p>',

    faqTitle: 'Domande Frequenti sul Generatore di Indirizzi MAC',
    faq1Question: 'Gli indirizzi generati dal generatore di indirizzi MAC sono reali e validi?',
    faq1Answer: 'Gli indirizzi MAC generati dal generatore di indirizzi MAC sono completamente conformi al formato standard IEEE 802, garantendo la validità dell\'indirizzo attraverso impostazioni di bit appropriate. Tuttavia, questi sono indirizzi virtuali generati casualmente non associati ad alcun dispositivo di rete reale. Il generatore di indirizzi MAC è destinato solo a scopi di test e sviluppo, non per l\'uso come identificatori di dispositivi reali in ambienti di produzione.',

    faq2Question: 'Cos\'è un prefisso OUI? Come si usa la funzione prefisso produttore?',
    faq2Answer: 'L\'OUI (Organizationally Unique Identifier) rappresenta i primi 3 byte di un indirizzo MAC, assegnati dall\'IEEE ai produttori di dispositivi di rete. Il generatore di indirizzi MAC fornisce prefissi OUI per produttori comuni. Selezionando un produttore specifico, gli indirizzi MAC generati useranno l\'OUI di quel produttore, facendo sembrare gli indirizzi più come dispositivi reali. Puoi anche inserire un prefisso OUI personalizzato.',

    faq3Question: 'Quali formati di output supporta il generatore di indirizzi MAC?',
    faq3Answer: 'Il generatore di indirizzi MAC supporta molteplici formati comuni: formato separato da due punti (XX:XX:XX:XX:XX:XX) per sistemi Linux/Unix, formato separato da trattino (XX-XX-XX-XX-XX-XX) per sistemi Windows, formato separato da punto (XXXX.XXXX.XXXX) per dispositivi Cisco, e formato senza separatore (XXXXXXXXXXXX) per alcuni sistemi embedded.',

    faq4Question: 'Qual è la differenza tra indirizzi unicast e multicast?',
    faq4Answer: 'Il bit meno significativo del primo byte di un indirizzo MAC determina il tipo di indirizzo. Un indirizzo unicast ha questo bit impostato a 0, usato per comunicazione punto-a-punto per identificare un dispositivo di rete specifico. Un indirizzo multicast ha questo bit impostato a 1, usato per comunicazione di gruppo per identificare un gruppo di dispositivi di rete. Il generatore di indirizzi MAC supporta la generazione di entrambi i tipi.',

    faq5Question: 'Qual è la differenza tra indirizzi unici globalmente (UAA) e indirizzi amministrati localmente (LAA)?',
    faq5Answer: 'Gli indirizzi unici globalmente (UAA, Universally Administered Address) sono assegnati dai produttori di dispositivi, con il secondo bit meno significativo del primo byte impostato a 0. Gli indirizzi amministrati localmente (LAA, Locally Administered Address) sono assegnati dagli amministratori di rete, con questo bit impostato a 1. Il generatore di indirizzi MAC supporta entrambi i tipi, con LAA comunemente usato in macchine virtuali e ambienti di test.',

    tutorialTitle: 'Guida Utente del Generatore di Indirizzi MAC',
    step1Title: 'Passo 1: Seleziona il Formato dell\'Indirizzo MAC',
    step1Description: 'Nel generatore di indirizzi MAC, prima seleziona il formato di output. Il formato separato da due punti è adatto per la maggior parte dei sistemi Linux/Unix, il formato separato da trattino per sistemi Windows, e il formato separato da punto per dispositivi di rete Cisco. Puoi anche scegliere output in maiuscole o minuscole.',
    step1Note: 'Sistemi e dispositivi diversi possono richiedere formati diversi; scegli il formato appropriato in base al tuo caso d\'uso.',

    step2Title: 'Passo 2: Seleziona il Tipo di Indirizzo',
    step2Description: 'Nel generatore di indirizzi MAC, seleziona il tipo di indirizzo: indirizzi unicast per identificare dispositivi individuali, indirizzi multicast per identificare gruppi di dispositivi; indirizzi unici globalmente (UAA) simulano dispositivi reali, indirizzi amministrati localmente (LAA) per ambienti virtuali. Scegli la combinazione appropriata in base alle esigenze di test.',
    step2Note: 'La maggior parte degli scenari di test usa la combinazione unicast + indirizzo unico globalmente; gli ambienti macchine virtuali comunemente usano la combinazione unicast + indirizzo amministrato localmente.',

    step3Title: 'Passo 3: Seleziona il Prefisso del Produttore (Opzionale)',
    step3Description: 'Il generatore di indirizzi MAC fornisce prefissi OUI per produttori comuni di dispositivi di rete come Apple, Cisco, Intel, Huawei, ecc. Selezionando un produttore specifico, gli indirizzi MAC generati useranno il prefisso OUI reale di quel produttore, rendendo i dati di test più realistici. Puoi anche inserire un prefisso OUI personalizzato.',
    step3Note: 'Se non hai bisogno di simulare dispositivi di produttori specifici, seleziona "Produttore Casuale" per generare indirizzi MAC completamente casuali.',

    step4Title: 'Passo 4: Imposta la Quantità di Generazione',
    step4Description: 'Nel generatore di indirizzi MAC, inserisci il numero di indirizzi MAC da generare (1-1000), poi clicca il pulsante "Genera Indirizzo". Il sistema genererà rapidamente tutti gli indirizzi localmente nel browser senza attendere la risposta del server.',
    step4Note: 'Quando generi grandi quantità in batch, prima testa una piccola quantità per confermare che formato e tipo soddisfino i tuoi requisiti.',

    step5Title: 'Passo 5: Visualizza e Verifica i Risultati',
    step5Description: 'Dopo il completamento della generazione, il generatore di indirizzi MAC visualizza tutti gli indirizzi generati nell\'area di output. Puoi espandere ogni record per vedere informazioni dettagliate inclusi nome produttore, tipo di indirizzo, formato, ecc. Verifica che formato e tipo di indirizzo soddisfino i tuoi requisiti.',
    step5Note: 'Tutti gli indirizzi generati dal generatore di indirizzi MAC sono conformi agli standard IEEE 802 e possono essere usati direttamente per test e sviluppo.',

    step6Title: 'Passo 6: Esporta i Dati',
    step6Description: 'Dopo aver confermato che i dati sono corretti, seleziona il formato di esportazione nel generatore di indirizzi MAC: JSON per elaborazione programmi, CSV per analisi fogli di calcolo. Puoi anche copiare singoli indirizzi o tutti gli indirizzi negli appunti per incollarli in altre applicazioni.',
    step6Note: 'I file esportati contengono tutti i campi generati per facilitare l\'elaborazione successiva dei dati e l\'importazione in batch.',

    successTitle: 'Generazione Completata!',
    successContent: 'Congratulazioni, hai padroneggiato con successo il generatore di indirizzi MAC! Ora puoi generare rapidamente indirizzi MAC conformi agli standard IEEE per test di dispositivi di rete, sviluppo software, simulazione IoT e vari altri scenari.',

    relatedToolsTitle: 'Strumenti Correlati che Potresti Voler Provare',
    relatedTool1Name: 'Generatore UUID',
    relatedTool1Description: 'Genera identificatori unici (UUID) per chiavi primarie di database e identificazione unica.',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: 'Generatore di Indirizzi di Hong Kong',
    relatedTool2Description: 'Genera indirizzi realistici di Hong Kong, informazioni sull\'identità e dati di contatto online.',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: 'Generatore di Password Casuali',
    relatedTool3Description: 'Genera password casuali sicure e affidabili per proteggere la sicurezza degli account.',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'Formattatore JSON',
    relatedTool4Description: 'Abbellisci e valida dati JSON per facile lettura e debug.',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'Database IEEE OUI',
    reference1Description: 'Interroga informazioni ufficiali di assegnazione OUI ed elenchi produttori.',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'Indirizzo MAC - Wikipedia',
    reference2Description: 'Scopri la struttura degli indirizzi MAC, tipi e scenari di applicazione.',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'Standard IEEE 802',
    reference3Description: 'Approfondisci standard e specifiche degli indirizzi di rete.',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
