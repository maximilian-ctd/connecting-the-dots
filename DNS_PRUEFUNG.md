# DNS-Prüfung und nächste Schritte

## ✅ Was du gerade gemacht hast
- DNS-Einträge bei United Domains geändert
- A-Record zeigt jetzt auf Netlify (`75.2.60.5`)
- CNAME für www konfiguriert

---

## 🔍 Schritt 1: DNS-Propagierung prüfen

### Option A: Online-Tool (Empfohlen)
1. Gehe zu: https://dnschecker.org
2. Gib ein: `connectingthe.de`
3. Wähle Record-Typ: `A`
4. Klicke auf "Search"
5. **Erwartetes Ergebnis:** Die IP `75.2.60.5` sollte weltweit angezeigt werden

### Option B: Terminal/Command Line

**macOS/Linux:**
```bash
dig connectingthe.de +short
# Erwartetes Ergebnis: 75.2.60.5

# Oder detailliert:
dig connectingthe.de
```

**Windows:**
```bash
nslookup connectingthe.de
# Erwartetes Ergebnis: 75.2.60.5
```

**Prüfe auch www:**
```bash
dig www.connectingthe.de +short
# Erwartetes Ergebnis: meine-website-1762641815.netlify.app
```

---

## 🔍 Schritt 2: In Netlify prüfen

1. **Gehe zu Netlify:** https://app.netlify.com
2. **Wähle deine Site:** `meine-website-1762641815`
3. **Gehe zu:** Site Settings → Domain management
4. **Prüfe den Status von `connectingthe.de`:**
   - ✅ **"Verified"** = DNS ist korrekt konfiguriert
   - ⚠️ **"DNS not configured"** = Warte noch auf DNS-Propagierung
   - ❌ **"Domain not verified"** = DNS-Einträge sind noch falsch

---

## 🔒 Schritt 3: SSL-Zertifikat prüfen

Nach erfolgreicher DNS-Propagierung:

1. **In Netlify:** Site Settings → Domain management
2. **Bei `connectingthe.de` prüfe:**
   - ✅ **"SSL certificate active"** = Alles funktioniert!
   - ⚠️ **"SSL certificate pending"** = Warte noch (kann 1-24h dauern)
   - ❌ **"SSL certificate error"** = DNS-Problem, prüfe nochmal

**Netlify stellt automatisch SSL aus**, sobald DNS korrekt propagiert ist.

---

## 🌐 Schritt 4: Website testen

Nach DNS-Propagierung (15 Min - 2 Stunden):

1. **Öffne im Browser:**
   - `http://connectingthe.de` (sollte automatisch auf HTTPS umleiten)
   - `https://connectingthe.de` (sollte funktionieren)
   - `https://www.connectingthe.de` (sollte auch funktionieren)

2. **Prüfe:**
   - ✅ Website lädt korrekt
   - ✅ Grünes Schloss-Symbol in der Adressleiste (SSL aktiv)
   - ✅ Keine Sicherheitswarnungen

---

## ⏱️ Zeitplan

- **15 Minuten:** DNS sollte lokal propagiert sein
- **1-2 Stunden:** DNS sollte weltweit propagiert sein
- **1-24 Stunden:** SSL-Zertifikat wird von Netlify ausgestellt
- **Maximal 48 Stunden:** Alles sollte funktionieren

---

## 🐛 Troubleshooting

### Problem: DNS zeigt noch alte IP
**Lösung:**
- Warte länger (bis zu 48h)
- Leere DNS-Cache:
  ```bash
  # macOS
  sudo dscacheutil -flushcache
  
  # Windows
  ipconfig /flushdns
  ```

### Problem: SSL-Zertifikat wird nicht ausgestellt
**Lösung:**
- Prüfe, ob DNS vollständig propagiert ist
- In Netlify: Site Settings → Domain management → "Verify DNS configuration"
- Warte bis zu 24 Stunden

### Problem: Website lädt nicht
**Lösung:**
- Prüfe DNS-Propagierung mit dnschecker.org
- Prüfe in Netlify, ob Deployment erfolgreich war
- Prüfe, ob Domain in Netlify als "Verified" angezeigt wird

---

## 📞 Wenn etwas nicht funktioniert

1. **Prüfe die DNS-Einträge nochmal** bei United Domains
2. **Prüfe die Build-Logs** in Netlify (Deploys → neuestes Deployment)
3. **Kontaktiere Support:**
   - United Domains: Tel.: 08151 / 36 86 7 - 0
   - Netlify: https://www.netlify.com/support/

---

## ✅ Checkliste

- [ ] DNS-Propagierung geprüft (dnschecker.org)
- [ ] Domain in Netlify als "Verified" angezeigt
- [ ] SSL-Zertifikat aktiv (oder pending)
- [ ] Website unter https://connectingthe.de erreichbar
- [ ] Website unter https://www.connectingthe.de erreichbar
- [ ] Grünes Schloss-Symbol im Browser sichtbar

---

## 🎉 Wenn alles funktioniert

Deine Website sollte jetzt unter:
- ✅ `https://connectingthe.de`
- ✅ `https://www.connectingthe.de`

erreichbar sein!

**Automatisches Deployment:** Bei jedem Push zu deinem GitHub Repository wird Netlify automatisch eine neue Version deployen! 🚀

