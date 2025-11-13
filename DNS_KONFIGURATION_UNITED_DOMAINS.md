# DNS-Konfiguration für connectingthe.de bei United Domains

## ⚠️ WICHTIG: Schritt-für-Schritt-Anleitung

Da ich keinen direkten Zugriff auf dein United Domains Kundencenter habe, musst du diese Schritte selbst durchführen. Diese Anleitung zeigt dir **genau**, was du ändern musst.

---

## 📋 Was du ändern musst

### Aktuelle Situation:
- ❌ A-Record zeigt auf `89.31.143.90` (United Domains Hosting)
- ❌ Domain zeigt nicht auf Netlify

### Ziel:
- ✅ A-Record zeigt auf Netlify IP-Adresse
- ✅ www-Subdomain zeigt auf Netlify
- ✅ Domain funktioniert mit SSL

---

## 🔧 Schritt-für-Schritt-Anleitung

### Schritt 1: Root-Domain A-Record ändern

1. **Gehe zu United Domains Kundencenter**
   - URL: https://www.united-domains.de
   - Logge dich ein

2. **Navigiere zu DNS-Verwaltung**
   - Suche nach "DNS-Einstellungen" oder "DNS-Verwaltung"
   - Wähle die Domain `connectingthe.de`

3. **Finde den A-Record für Root-Domain**
   - Suche den Eintrag mit **leerem Subdomain/Hostname-Feld** (das ist `@`)
   - Aktueller Wert: `89.31.143.90`

4. **Ändere die IPv4-Adresse**
   - Klicke auf "Bearbeiten" oder direkt in das Feld
   - **Lösche** `89.31.143.90`
   - **Gib ein:** `75.2.60.5` (Netlify IP-Adresse)
   - TTL: `3600` (oder lasse `600` stehen)
   - Klicke auf **"Speichern"**

### Schritt 2: CNAME für www hinzufügen

1. **Scrolle zu CNAME-Records**
   - Falls kein CNAME-Bereich sichtbar ist, suche nach "Hinzufügen" oder "Neuer Eintrag"

2. **Füge neuen CNAME-Record hinzu**
   - Klicke auf **"Hinzufügen"** oder **"Neuer Eintrag"**
   - **Typ:** CNAME
   - **Subdomain/Hostname:** `www`
   - **Wert/Ziel:** `meine-website-1762641815.netlify.app`
   - **TTL:** `3600` (oder `600`)
   - Klicke auf **"Speichern"**

### Schritt 3: Wildcard-Record (optional)

Falls du den Wildcard-Record (`*`) behalten möchtest:

1. **Finde den Wildcard-Record**
   - Subdomain/Hostname: `*`
   - Aktueller Wert: `89.31.143.90`

2. **Ändere die IPv4-Adresse**
   - Ändere von `89.31.143.90` auf `75.2.60.5`
   - Oder **lösche** den Eintrag, wenn du ihn nicht brauchst

### Schritt 4: E-Mail-Einträge (autoconfig/autodiscover)

**WICHTIG:** Falls du E-Mail über United Domains nutzt:

- **Lasse** `autoconfig` und `autodiscover` auf `89.31.143.90` stehen
- Diese sind für E-Mail-Konfiguration notwendig

Falls du **kein** E-Mail über United Domains nutzt:
- Du kannst diese Einträge löschen oder auf `75.2.60.5` ändern

---

## ✅ Finale DNS-Konfiguration

Nach den Änderungen solltest du folgende Einträge haben:

### A-Records:
```
Subdomain/Hostname: (leer) → IPv4: 75.2.60.5
Subdomain/Hostname: * → IPv4: 75.2.60.5 (optional)
```

### CNAME-Records:
```
Subdomain/Hostname: www → meine-website-1762641815.netlify.app
```

### E-Mail (falls benötigt):
```
Subdomain/Hostname: autoconfig → IPv4: 89.31.143.90
Subdomain/Hostname: autodiscover → IPv4: 89.31.143.90
```

---

## ⏱️ Nach der Änderung

1. **Warte auf DNS-Propagierung**
   - Normalerweise: 15 Minuten bis 2 Stunden
   - Maximal: 24-48 Stunden

2. **Prüfe die DNS-Propagierung**
   - Gehe zu: https://dnschecker.org
   - Gib ein: `connectingthe.de`
   - Prüfe, ob die IP `75.2.60.5` angezeigt wird

3. **Prüfe in Netlify**
   - Gehe zu: Site Settings → Domain management
   - Prüfe, ob `connectingthe.de` als "Verified" angezeigt wird
   - Prüfe, ob SSL-Zertifikat aktiviert wird

---

## 🔍 Troubleshooting

### Problem: Domain zeigt immer noch auf alte IP
- **Lösung:** Warte länger (bis zu 48h) oder leere deinen DNS-Cache:
  ```bash
  # macOS/Linux
  sudo dscacheutil -flushcache
  
  # Windows
  ipconfig /flushdns
  ```

### Problem: SSL-Zertifikat wird nicht ausgestellt
- **Lösung:** Warte bis DNS vollständig propagiert ist, dann stellt Netlify automatisch SSL aus

### Problem: www funktioniert nicht
- **Lösung:** Prüfe, ob CNAME-Record korrekt gesetzt ist

---

## 📞 Support

Falls du Probleme hast:
- **United Domains Support:** Tel.: 08151 / 36 86 7 - 0
- **Netlify Support:** https://www.netlify.com/support/

---

## 🎯 Zusammenfassung

**Was du ändern musst:**
1. ✅ A-Record (leer) von `89.31.143.90` auf `75.2.60.5` ändern
2. ✅ CNAME für `www` auf `meine-website-1762641815.netlify.app` setzen
3. ✅ Optional: Wildcard-Record ändern oder löschen
4. ✅ E-Mail-Einträge bei Bedarf behalten

**Nach 15 Minuten - 48 Stunden sollte connectingthe.de funktionieren!** 🚀

