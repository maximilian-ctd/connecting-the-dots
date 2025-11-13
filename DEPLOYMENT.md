# Deployment-Anleitung für connectingthe.de

## Option 1: Netlify (Empfohlen - Einfachste Lösung)

### Schritt 1: Website auf Netlify deployen
1. Gehe zu [netlify.com](https://netlify.com) und erstelle einen Account (oder logge dich ein)
2. Klicke auf "Add new site" → "Import an existing project"
3. Verbinde dein GitHub Repository (`maximilian-ctd/connecting-the-dots`)
4. Netlify erkennt automatisch die `netlify.toml` Konfiguration
5. Klicke auf "Deploy site"

### Schritt 2: Domain verbinden
1. In Netlify: Site Settings → Domain management
2. Klicke auf "Add custom domain"
3. Gib `connectingthe.de` ein
4. Netlify zeigt dir die DNS-Einstellungen an

### Schritt 3: DNS bei United Domains konfigurieren

**WICHTIG:** Entferne zuerst alle falschen DNS-Einträge (z.B. A-Record mit `192.0.1.1`)

1. Logge dich in dein United Domains Kundencenter ein
2. Gehe zu DNS-Verwaltung für `connectingthe.de`
3. **Lösche** den falschen A-Record mit `192.0.1.1` (falls vorhanden)
4. Füge folgende DNS-Einträge hinzu:

   **Option A: CNAME-Records (Empfohlen für Netlify)**
   - **CNAME Record**: `@` (oder leer) → `meine-website-1762641815.netlify.app`
   - **CNAME Record**: `www` → `meine-website-1762641815.netlify.app`
   
   **Option B: A-Records (falls CNAME für Root-Domain nicht unterstützt)**
   - Hole die aktuellen A-Record IPs von Netlify (Site Settings → Domain management)
   - **A Record**: `@` → Netlify IP-Adresse (z.B. `75.2.60.5`)
   - **CNAME Record**: `www` → `meine-website-1762641815.netlify.app`

   **Option C: Netlify Nameserver verwenden (Einfachste Lösung)**
   - Ändere die Nameserver bei United Domains auf die Netlify Nameserver
   - Diese findest du in Netlify unter Site Settings → Domain management

### Schritt 4: SSL-Zertifikat
- Netlify stellt automatisch ein kostenloses SSL-Zertifikat bereit (Let's Encrypt)
- Nach DNS-Propagierung (kann 24-48h dauern) ist die Website unter `https://connectingthe.de` erreichbar

---

## Option 2: Vercel (Alternative)

### Schritt 1: Website auf Vercel deployen
1. Gehe zu [vercel.com](https://vercel.com) und erstelle einen Account
2. Klicke auf "Add New Project"
3. Verbinde dein GitHub Repository
4. Vercel erkennt automatisch Astro
5. Klicke auf "Deploy"

### Schritt 2: Domain verbinden
1. In Vercel: Project Settings → Domains
2. Füge `connectingthe.de` hinzu
3. Folge den DNS-Anweisungen

---

## Option 3: Statische Dateien auf United Domains Hosting

### Schritt 1: Website lokal bauen
```bash
npm run build
```
Die statischen Dateien befinden sich dann im `dist/` Ordner.

### Schritt 2: Dateien hochladen
1. Verbinde dich per FTP/SFTP mit deinem United Domains Hosting
2. Lade alle Dateien aus dem `dist/` Ordner in das `public_html/` oder `www/` Verzeichnis hoch
3. Stelle sicher, dass `index.html` im Root-Verzeichnis liegt

### Schritt 3: Domain konfigurieren
- Die Domain sollte bereits auf dein Hosting zeigen
- Falls nicht, konfiguriere die DNS-Einstellungen bei United Domains

---

## Empfehlung

**Netlify** ist die einfachste Lösung, weil:
- ✅ Automatisches Deployment bei jedem Git Push
- ✅ Kostenloses SSL-Zertifikat
- ✅ CDN für schnelle Ladezeiten weltweit
- ✅ Einfache Domain-Verbindung
- ✅ Kostenlos für statische Websites

## Nächste Schritte

1. Entscheide dich für eine Option
2. Falls Netlify: Ich kann dir beim Setup helfen
3. Falls United Domains Hosting: Ich kann dir beim Build und Upload helfen




