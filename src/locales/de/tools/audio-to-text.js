export default {
    name: 'Audio zu Text - Online Audio-zu-Text-Konverter',
    description: 'Kostenloses Online-Tool zur Umwandlung von Audio in Text mit Echtzeit-Mikrofonerkennung und Audio-Datei-Erkennung. Unterstützt Mehrsprachenerkennung und Stapelverarbeitung.',
    inputTitle: 'Audio-Eingabe',
    outputTitle: 'Konvertierter Text',
    dragTip: 'Audiodateien hierher ziehen oder klicken zum Hochladen (Stapel unterstützt)',
    supported: 'Unterstützte Formate: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'In Text umwandeln',
    converting: 'Erkennung...',
    
    // Eingabemodus
    modeLabel: 'Eingabemodus',
    modeMicrophone: 'Mikrofon Echtzeit',
    modeFile: 'Audio-Datei',
    
    // Mikrofon-Modus
    startRecording: 'Aufnahme Starten',
    stopRecording: 'Aufnahme Stoppen',
    recording: 'Aufnahme...',
    liveTranscript: 'Live-Transkription',
    noSpeechSupport: 'Ihr Browser unterstützt keine Spracherkennung. Bitte verwenden Sie Chrome, Edge oder Safari',
    microphonePermission: 'Bitte erlauben Sie den Mikrofonzugriff',
    waitingForSpeech: 'Warte auf Spracheingabe...',
    speakNow: 'Bitte beginnen Sie zu sprechen...',
    
    // Modus-Hinweise
    microphoneModeTip: 'Klicken Sie auf Start und sprechen Sie ins Mikrofon, Ihre Sprache wird in Echtzeit in Text umgewandelt',
    fileModeTip: 'Laden Sie Audio-Dateien hoch, das System erkennt sie automatisch',
    fileModePlayTip: 'Hinweis: Das Audio wird während der Erkennung einmal abgespielt, bitte warten Sie bis die Wiedergabe abgeschlossen ist',
    languageTip: 'Bitte wählen Sie die Sprache, die zu Ihrem Audioinhalt passt, andernfalls kann die Erkennung fehlschlagen',
    
    // Erkennungsstatus
    recognizing: 'Audio wird erkannt...',
    downloadBtn: 'Text herunterladen',
    downloadSrt: 'SRT-Untertitel herunterladen',
    downloadTxt: 'TXT-Datei herunterladen',
    batchDownload: 'Stapel-Download (ZIP)',
    noOutput: 'Noch keine Konvertierungsergebnisse',
    loadSample: 'Beispiel-Audio laden',
    preview: 'Audio-Vorschau',
    clearAll: 'Alles löschen',
    previewBtn: 'Vorschau',
    wordCount: 'Wortanzahl',
    duration: 'Dauer',
    language: 'Erkennungssprache',
    
    // Settings
    settingsTitle: 'Textkonvertierungseinstellungen',
    languageLabel: 'Erkennungssprache',
    languageAuto: 'Automatische Erkennung',
    languageZh: 'Chinesisch',
    languageEn: 'Englisch',
    languageJa: 'Japanisch',
    languageKo: 'Koreanisch',
    languageFr: 'Französisch',
    languageDe: 'Deutsch',
    languageEs: 'Spanisch',
    languageRu: 'Russisch',
    languagePt: 'Portugiesisch',
    languageIt: 'Italienisch',
    languageAr: 'Arabisch',
    languageHi: 'Hindi',
    
    outputFormatLabel: 'Ausgabeformat',
    outputFormatTxt: 'Nur Text (TXT)',
    outputFormatSrt: 'Untertiteldatei (SRT)',
    outputFormatJson: 'JSON-Format',
    
    showTimestamp: 'Zeitstempel anzeigen',
    
    // Tips
    tipsTitle: 'Tipps',
    tipContent: 'Die Qualität der Audio-zu-Text-Konvertierung hängt von der Klarheit des Audios und der Sprache ab. Klares, geräuschfreies Audio mit moderater Sprechgeschwindigkeit liefert die besten Ergebnisse. Empfohlen wird die Verwendung hochwertiger Audiodateien ohne Hintergrundgeräusche.',
    convertError: 'Konvertierung fehlgeschlagen, bitte Audioformat prüfen oder erneut versuchen.',
    convertSuccess: 'Konvertierung erfolgreich!',
    copied: 'In Zwischenablage kopiert',
    copyBtn: 'Text kopieren',
    
    seoNote: 'Audio-zu-Text-Tool, Online-Audio-zu-Text-Konverter, WAV zu Text, MP3 zu Text, Spracherkennungstool',
};
