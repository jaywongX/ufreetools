export default {
  name: 'Stempel-Generator',
  description: 'Online-Stempelbilder erstellen - Generieren Sie Firmenstempel, persönliche Stempel und digitale Stempel',

  // Hauptoberfläche
  text: 'Stempeltext',

  textPlaceholder: 'Text für den äußeren Ring eingeben',
  centerText: 'Zentrierter Text',
  centerTextPlaceholder: 'Text oder Symbol für die Mitte eingeben',
  font: 'Schriftart auswählen',
  shape: 'Stempelform',
  size: 'Stempelgröße',
  color: 'Stempelfarbe',
  generate: 'Stempel generieren',
  download: 'Bild herunterladen',
  reset: 'Zurücksetzen',
  preview: 'Stempelvorschau',
  previewPlaceholder: 'Klicken Sie "Stempel generieren" für eine Vorschau',
  bottomText: 'Unterer Text',
  bottomTextPlaceholder: 'Text für den unteren Bereich eingeben',
  centerSymbol: 'Zentralsymbol',
  centerImage: 'Zentrales Bild hochladen',
  template: 'Stempelvorlage',
  centerSymbolSize: 'Größe des Zentralsymbols',
  exportFormat: 'Exportformat',
  lineWidth: 'Linienstärke',
  defaultSealText: 'Muster GmbH',
  defaultBottomText: 'Vertragsstempel',
  width: 'Breite',
  height: 'Höhe',
  agingEffect: 'Alterungseffekt',
  colorHex: 'HEX-Farbwert',
  customColor: 'Benutzerdefinierte Farbe',

  // Schriftartenoptionen
  fonts: {
    simsun: 'Song',
    kaiti: 'Kai',
    simhei: 'Hei',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Formoptionen
  shapes: {
    circle: 'Rund',
    ellipse: 'Oval',
    square: 'Quadratisch'
  },

  // Farboptionen
  colors: {
    red: 'Rot',
    darkRed: 'Dunkelrot',
    blue: 'Blau',
    navy: 'Marineblau',
    green: 'Grün',
    darkGreen: 'Dunkelgrün',
    purple: 'Lila',
    magenta: 'Magenta',
    brown: 'Braun',
    black: 'Schwarz',
    custom: 'Benutzerdefinierte Farbe'
  },

  // Anleitung
  howToUse: 'Anleitung',

  instructions: {
    step1: 'Geben Sie den Text ein, der auf dem Stempel erscheinen soll, z.B. Firmenname oder persönlicher Name',
    step2: 'Wählen Sie Text oder Symbol für die Mitte des Stempels (Sternchen, Logo etc.)',
    step3: 'Passen Sie Form, Größe und Farbe des Stempels an und sehen Sie sich die Vorschau an',
    step4: 'Klicken Sie "Bild herunterladen", um Ihren benutzerdefinierten Stempel zu speichern'
  },

  templates: {
    custom: 'Benutzerdefiniert',
    company: 'Firmenstempel',
    contract: 'Vertragsstempel',
    finance: 'Finanzstempel',
    legal: 'Rechtsstempel',
    personal: 'Persönlicher Stempel'
  }
};