# Entwicklungs-Workflow - Schritt für Schritt

## 📋 Projektstruktur

```
meine-website/
├── src/
│   ├── components/          # Wiederverwendbare Komponenten
│   │   └── Button.astro    # Beispiel-Komponente
│   ├── layouts/            # Seiten-Layouts
│   │   └── Layout.astro    # Haupt-Layout
│   ├── pages/              # Seiten (werden zu Routen)
│   │   └── index.astro     # Startseite
│   ├── styles/             # Globale Styles
│   │   ├── reset.css       # CSS Reset
│   │   ├── variables.css   # Design-Tokens (Farben, Typografie, etc.)
│   │   └── global.css      # Globale Basis-Styles
│   └── assets/             # Bilder, Icons, etc.
│       └── images/
├── public/                 # Statische Dateien (werden direkt kopiert)
└── package.json
```

## 🎨 Design-Tokens System

Alle Design-Werte sind zentral in `src/styles/variables.css` definiert:

- **Farben**: `--color-primary`, `--color-secondary`, etc.
- **Typografie**: `--font-size-*`, `--font-weight-*`
- **Spacing**: `--spacing-xs` bis `--spacing-4xl`
- **Border Radius**: `--radius-*`
- **Shadows**: `--shadow-*`

**Warum?** Wenn wir später Farben aus Figma übernehmen, ändern wir sie nur an einer Stelle!

## 🔄 Workflow: Figma → Code

### Schritt 1: Figma-Design analysieren
1. Öffne dein Figma-Design
2. Aktiviere "Dev Mode" (falls verfügbar)
3. Notiere dir:
   - Farben (Hex-Codes)
   - Schriftarten und -größen
   - Abstände (Spacing)
   - Wiederkehrende Elemente (Buttons, Cards, etc.)

### Schritt 2: Design-Tokens aktualisieren
- Öffne `src/styles/variables.css`
- Ersetze die Platzhalter-Farben mit deinen Figma-Farben
- Passe Schriftarten an (falls nötig)

### Schritt 3: Komponenten erstellen
Für jedes wiederkehrende Element erstellen wir eine Komponente:
- Button → `src/components/Button.astro` ✅ (bereits vorhanden)
- Header → `src/components/Header.astro`
- Footer → `src/components/Footer.astro`
- Card → `src/components/Card.astro`
- etc.

### Schritt 4: Seiten aufbauen
- Verwende die Komponenten in den Seiten
- Füge seiten-spezifische Styles hinzu
- Teste responsive Design

## 🛠️ Entwicklung

### Lokal starten
```bash
npm run dev
```
Öffnet die Website auf http://localhost:4321

### Build testen
```bash
npm run build
npm run preview
```

### Änderungen deployen
```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```
Netlify deployed automatisch! 🚀

## 📝 Best Practices

### 1. Komponenten sind wiederverwendbar
- Erstelle Komponenten für Elemente, die mehrfach vorkommen
- Verwende Props für Variationen (z.B. `variant="primary"`)

### 2. Styles organisieren
- Globale Styles → `src/styles/`
- Komponenten-Styles → In der Komponente selbst
- Design-Tokens → Immer in `variables.css`

### 2. Naming Convention
- Komponenten: PascalCase (`Button.astro`, `Header.astro`)
- CSS-Klassen: kebab-case (`hero-section`, `cta-button`)
- Dateien: kebab-case oder PascalCase (konsistent bleiben)

## 🎯 Nächste Schritte

1. **Figma-Design teilen**
   - Figma-Link oder Screenshots
   - Ich analysiere das Design

2. **Design-Tokens anpassen**
   - Farben aus Figma übernehmen
   - Typografie anpassen

3. **Komponenten erstellen**
   - Schritt für Schritt alle Elemente umsetzen
   - Mobile-first Ansatz

4. **Seiten aufbauen**
   - Startseite
   - Weitere Seiten (falls vorhanden)

5. **Feinschliff**
   - Animationen
   - Responsive Optimierung
   - Performance

## 💡 Tipps

- **Mobile-first**: Beginne mit dem mobilen Design
- **Komponenten-Denken**: Zerlege das Design in kleine, wiederverwendbare Teile
- **Konsistenz**: Nutze die Design-Tokens für einheitliches Design
- **Testen**: Schaue dir die Website regelmäßig im Browser an

---

**Fragen?** Einfach fragen! Ich helfe dir bei jedem Schritt. 🚀


