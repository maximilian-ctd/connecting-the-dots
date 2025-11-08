# Meine Website

Eine moderne Website, erstellt mit [Astro](https://astro.build).

## 🚀 Schnellstart

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder ein anderer Package Manager

### Installation

```bash
npm install
```

### Entwicklung

Starte den Entwicklungsserver:

```bash
npm run dev
```

Die Website ist dann unter `http://localhost:4321` erreichbar.

### Build

Erstelle eine Produktionsversion:

```bash
npm run build
```

### Vorschau

Vorschau der gebauten Website:

```bash
npm run preview
```

## 📦 GitHub Setup

### 1. Repository auf GitHub erstellen

1. Gehe zu [GitHub](https://github.com) und erstelle ein neues Repository
2. Wähle einen Namen für dein Repository (z.B. `meine-website`)
3. **WICHTIG:** Erstelle das Repository **ohne** README, .gitignore oder License (diese haben wir bereits)

### 2. Lokales Repository mit GitHub verbinden

Führe folgende Befehle aus (ersetze `DEIN-USERNAME` und `DEIN-REPO-NAME`):

```bash
git add .
git commit -m "Initial commit: Astro Website Setup"

git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git
git push -u origin main
```

### 3. Authentifizierung

Falls du noch nicht eingeloggt bist, musst du dich bei GitHub authentifizieren. Du kannst entweder:
- GitHub CLI verwenden: `gh auth login`
- Oder einen Personal Access Token erstellen und verwenden

## 🌐 Netlify Deployment

### Option 1: Automatisches Deployment via GitHub (Empfohlen)

1. **Gehe zu [Netlify](https://www.netlify.com)** und melde dich an
2. Klicke auf **"Add new site"** → **"Import an existing project"**
3. Wähle **GitHub** als Git Provider
4. Autorisiere Netlify, auf deine GitHub Repositories zuzugreifen
5. Wähle dein Repository (`meine-website`) aus
6. Netlify erkennt automatisch die Astro-Konfiguration:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Klicke auf **"Deploy site"**

Netlify wird nun automatisch bei jedem Push zu deinem GitHub Repository eine neue Version deployen!

### Option 2: Manuelles Deployment

1. Baue deine Website lokal:
   ```bash
   npm run build
   ```
2. Gehe zu [Netlify](https://www.netlify.com)
3. Ziehe den `dist` Ordner in das Netlify Drop-Zone

### Netlify Konfiguration

Die Datei `netlify.toml` ist bereits konfiguriert und enthält:
- Build-Befehl
- Publish-Verzeichnis
- Astro Netlify Adapter Plugin

## 📁 Projektstruktur

```
meine-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── netlify.toml
├── package.json
└── README.md
```

## 🛠️ Technologien

- **Astro** - Modernes Web Framework
- **Netlify** - Hosting und Deployment
- **TypeScript** - Typensicherheit

## 📝 Nächste Schritte

- Füge weitere Seiten hinzu in `src/pages/`
- Erstelle Komponenten in `src/components/`
- Passe das Design in den `.astro` Dateien an
- Füge weitere Features nach Bedarf hinzu

## 🔗 Nützliche Links

- [Astro Dokumentation](https://docs.astro.build)
- [Netlify Dokumentation](https://docs.netlify.com)
- [Astro Netlify Adapter](https://docs.astro.build/en/guides/integrations-guide/netlify/)

