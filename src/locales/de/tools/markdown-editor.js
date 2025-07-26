export default {
  name: 'Markdown Editor',
  description: 'Bearbeiten und Vorschau von Markdown-Dokumenten in Echtzeit',

  // UI-Texte
  options: {
    mode: 'Modus',
    syntaxHighlighting: 'Syntaxhervorhebung',
    autoSave: 'Automatisches Speichern',
    lineNumbers: 'Zeilennummern',
    spellCheck: 'Rechtschreibprüfung',
    wordWrap: 'Zeilenumbruch'
  },

  modes: {
    split: 'Split-Ansicht',
    edit: 'Nur Bearbeiten',
    preview: 'Nur Vorschau'
  },

  actions: {
    bold: 'Fett',
    italic: 'Kursiv',
    strikethrough: 'Durchgestrichen',
    heading: 'Überschrift',
    link: 'Link',
    image: 'Bild',
    list: 'Liste',
    quote: 'Zitat',
    code: 'Code',
    table: 'Tabelle',
    hr: 'Horizontale Linie',
    preview: 'Vorschau',
    copy: 'Kopieren',
    clear: 'Löschen',
    download: 'Markdown herunterladen',
    downloadHTML: 'HTML herunterladen',
    upload: 'Markdown hochladen'
  },

  messages: {
    copied: 'Markdown-Inhalt wurde in die Zwischenablage kopiert!',
    copyError: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    clearConfirm: 'Sind Sie sicher, dass Sie den Editorinhalt löschen möchten?',
    templateConfirm: 'Das Anwenden einer Vorlage ersetzt den aktuellen Inhalt. Fortfahren?',
    templateApplied: 'Vorlage "{name}" wurde angewendet',
    saved: 'Dokument gespeichert',
    uploadSuccess: 'Dokument erfolgreich hochgeladen',
    uploadError: 'Fehler beim Hochladen des Dokuments',
    wordCount: '{count} Wörter',
    charCount: '{count} Zeichen'
  },

  placeholder: 'Markdown-Inhalt hier eingeben...',

  placeholders: {
    linkText: 'Link-Text',
    imageAlt: 'Bildbeschreibung'
  },

  templates: {
    title: 'Schnellvorlagen',
    apply: 'Vorlage anwenden',
    confirm: 'Bestätigen',
    simple: {
      name: 'Einfaches Dokument',
      description: 'Enthält Überschriften, Listen, Zitate etc.',
      content: `# Dokumenttitel

## Einführung
Dies ist ein einfaches Markdown-Dokumentbeispiel.

## Funktionen
- Unterstützt Überschriften und Absätze
- Unterstützt **fett** und *kursiv*
- Unterstützt geordnete und ungeordnete Listen

> Dies ist ein Zitatblock, um die Ansichten anderer zu zitieren.

## Fazit
Markdown ist eine einfach zu erlernende Auszeichnungssprache.`
    },
    readme: {
      name: 'Projekt-README',
      description: 'Standardstruktur für Projekt-Dokumentation',
      content: `# Projektname

## Projektbeschreibung
Kurze Beschreibung der Hauptfunktionen und des Zwecks des Projekts.

## Funktionen
- Hauptfunktion 1
- Hauptfunktion 2
- Hauptfunktion 3

## Installationsanleitung
\`\`\`
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
\`\`\`

## Verwendungsbeispiel
\`\`\`
// Beispielcode
const example = new Example();
example.init();
\`\`\`

## Dokumentation
Weitere detaillierte Dokumentation finden Sie im Dokumentationslink.

## Beitragsrichtlinien
Beiträge sind willkommen, siehe Beitragsrichtlinien.

## Lizenz
Dieses Projekt steht unter der MIT-Lizenz, siehe LICENSE-Datei für Details.`
    },
    resume: {
      name: 'Lebenslauf',
      description: 'Vorlage für einen Lebenslauf',
      content: `# Lebenslauf

## Persönliche Daten
- Name: Max Mustermann
- Telefon: 0178xxxx1234
- E-Mail: max.mustermann@example.com
- Position: Frontend-Entwickler

## Ausbildung
Universität, Informatik, September 2016 bis Juni 2020

## Berufserfahrung
### Tech GmbH, Frontend-Entwickler, Juli 2020 bis heute
- Verantwortlich für Frontend-Entwicklung und Wartung der Kernprodukte
- Entwicklung eines Unternehmensmanagementsystems mit Vue.js zur Verbesserung der Benutzererfahrung
- Optimierung der Frontend-Performance, Reduzierung der Ladezeit um 30%

### Tech GmbH, Frontend-Entwickler-Praktikant, Juli 2019 bis Juni 2020
- Beteiligung am Redesign der Unternehmenswebsite
- Unterstützung des Teams bei Code-Refactoring und Optimierung

## Technische Fähigkeiten
- Frontend-Entwicklung: HTML, CSS, JavaScript, Vue.js, React
- Backend-Entwicklung: Node.js, Express
- Andere Tools: Git, Webpack, Docker

## Projekterfahrung
### Unternehmensmanagementsystem
- Mit Vue.js entwickeltes internes Managementsystem
- Implementierung von Datenvisualisierung, Berechtigungsmanagement etc.
- Optimierung der Systemantwortzeit zur Verbesserung der Benutzererfahrung

## Sprachkenntnisse
- Englisch (fließend)
- Japanisch (Grundkenntnisse)`
    },
    meeting: {
      name: 'Besprechungsprotokoll',
      description: 'Vorlage für Besprechungsprotokolle',
      content: `# Besprechungsprotokoll

## Besprechungsinformationen
- Thema: Projektfortschritt
- Datum: 15. Mai 2023
- Zeit: 14:00 bis 16:00
- Ort: Firmenkonferenzraum A
- Leiter: Herr Schmidt
- Protokollführer: Frau Müller

## Teilnehmer
- Herr Schmidt (Produktmanagement)
- Herr Meier (Entwicklung)
- Frau Schulze (Design)
- Herr Bauer (Test)

## Agenda
1. Rückblick auf die letzte Woche
2. Diskussion der aktuellen Woche
3. Lösung von Projektproblemen
4. Festlegung der nächsten Schritte

## Diskussionspunkte
### 1. Rückblick
- Produktanforderungen dokumentiert
- Design zu 60% abgeschlossen
- Frontend-Grundgerüst fertiggestellt

### 2. Aktuelle Woche
- Design-Team vervollständigt die Entwürfe
- Entwicklung beginnt mit Kernfunktionen
- Testteam bereitet Testfälle vor

### 3. Probleme und Lösungen
- Problem: Daten-Schnittstellen-Design ungeeignet
- Lösung: Herr Meier überarbeitet die Schnittstellen bis Mittwoch

## Nächste Besprechung
- Datum: 22. Mai 2023
- Zeit: 14:00 bis 15:00`
    }
  },

  dialogs: {
    clear: {
      title: 'Editor leeren',
      message: 'Sind Sie sicher, dass Sie den Editorinhalt löschen möchten?'
    },
    template: {
      title: 'Vorlage anwenden',
      message: 'Das Anwenden einer Vorlage ersetzt den aktuellen Inhalt. Fortfahren?'
    }
  },

  defaultContent: `# Willkommen beim Markdown-Editor

Dies ist ein einfacher Markdown-Editor mit Echtzeit-Vorschau und Syntaxhervorhebung.

## Grundlegende Syntax

### Überschriften
Verwenden Sie # für Überschriften, z.B.:
# Hauptüberschrift
## Unterüberschrift
### Unterunterüberschrift

### Hervorhebungen
**Fett** oder __Fett__
*Kursiv* oder _Kursiv_
~~Durchgestrichen~~

### Listen
Ungeordnete Liste:
- Punkt 1
- Punkt 2
- Punkt 3

Geordnete Liste:
1. Erster Punkt
2. Zweiter Punkt
3. Dritter Punkt

### Links und Bilder
[Linktext](https://example.com)


### Code
Inline-Code: \`var beispiel = "hallo";\`

### Zitate
> Dies ist ein Zitatabschnitt.

### Tabellen
| Kopfzeile 1 | Kopfzeile 2 | Kopfzeile 3 |
|-------------|-------------|-------------|
| Zelle 1     | Zelle 2     | Zelle 3     |
| Zelle 4     | Zelle 5     | Zelle 6     |

### Horizontale Linie
---

Beginnen Sie mit der Bearbeitung! Sie können die Symbolleiste oben verwenden, um schnell verschiedene Markdown-Elemente einzufügen.`
};