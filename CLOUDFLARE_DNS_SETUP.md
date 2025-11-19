# Cloudflare DNS-Konfiguration für connectingthe.de

## 📋 Schritt-für-Schritt-Anleitung

### Schritt 1: Proxy-Status für Website-Records ändern

**Wichtig:** Netlify benötigt "DNS only" (graue Wolke) für SSL-Zertifikate!

#### A-Record `*` (Wildcard) ändern:
1. Klicke auf **"Edit"** bei dem A-Record mit Name `*`
2. Scrolle zu **"Proxy status"**
3. Klicke auf die **orange Wolke** → wechselt zu **grauer Wolke** ("DNS only")
4. Klicke auf **"Save"**

#### A-Record `connectingthe.de` ändern:
1. Klicke auf **"Edit"** bei dem A-Record mit Name `connectingthe.de`
2. Scrolle zu **"Proxy status"**
3. Klicke auf die **orange Wolke** → wechselt zu **grauer Wolke** ("DNS only")
4. Klicke auf **"Save"**

#### CNAME `www` ändern:
1. Klicke auf **"Edit"** bei dem CNAME-Record mit Name `www`
2. Scrolle zu **"Proxy status"**
3. Klicke auf die **orange Wolke** → wechselt zu **grauer Wolke** ("DNS only")
4. Klicke auf **"Save"**

---

### Schritt 2: Alte NS-Records löschen

Die alten United Domains Nameserver-Records werden nicht mehr benötigt:

1. Klicke auf **"Edit"** bei jedem NS-Record:
   - `ns.udag.de`
   - `ns.udag.net`
   - `ns.udag.org`
2. Klicke auf **"Delete"** (oder den Mülleimer-Button)
3. Bestätige die Löschung

**Hinweis:** Diese Records sind nicht mehr nötig, da Cloudflare jetzt die Nameserver stellt.

---

### Schritt 3: DKIM TXT-Record hinzufügen

1. Klicke auf **"Add record"** (oben rechts)
2. Wähle:
   - **Type:** `TXT`
   - **Name:** `uddkim-202310._domainkey`
   - **Content:** Kopiere den vollständigen Wert aus United Domains:
     - Gehe zu United Domains → Eigene Nameserver
     - Kopiere den DKIM-Wert (beginnt mit `v=DKIM1; k=rsa; p=...`)
     - Füge ihn hier ein
   - **Proxy status:** `DNS only` (graue Wolke)
   - **TTL:** `Auto`
3. Klicke auf **"Save"**

**Beispiel-Format:**
```
v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...
```
(Der vollständige Wert ist sehr lang - kopiere alles!)

---

### Schritt 4: DMARC TXT-Record hinzufügen

1. Klicke auf **"Add record"**
2. Wähle:
   - **Type:** `TXT`
   - **Name:** `_dmarc`
   - **Content:** `v=DMARC1;p=none`
   - **Proxy status:** `DNS only` (graue Wolke)
   - **TTL:** `Auto`
3. Klicke auf **"Save"**

---

### Schritt 5: Optional - A-Record für Root-Domain optimieren

**Aktuell:** Du hast einen A-Record mit Name `connectingthe.de`

**Optional (aber empfohlen):** Füge einen A-Record mit Name `@` hinzu:

1. Klicke auf **"Add record"**
2. Wähle:
   - **Type:** `A`
   - **Name:** `@` (oder leer lassen)
   - **IPv4 address:** `75.2.60.5`
   - **Proxy status:** `DNS only` (graue Wolke)
   - **TTL:** `Auto`
3. Klicke auf **"Save"**

**Hinweis:** Der A-Record mit `connectingthe.de` funktioniert auch, aber `@` ist die Standard-Notation für die Root-Domain.

---

## ✅ Finale DNS-Konfiguration

Nach allen Änderungen solltest du folgende Records haben:

### Website-Records (alle auf "DNS only"):
- ✅ A-Record: `@` oder `connectingthe.de` → `75.2.60.5` (DNS only)
- ✅ A-Record: `*` → `75.2.60.5` (DNS only) - optional
- ✅ CNAME: `www` → `meine-website-1762641815.netlify.app` (DNS only)

### E-Mail-Records (alle auf "DNS only"):
- ✅ MX: `@` → `mx00.udag.de` (Priority 10) (DNS only)
- ✅ MX: `@` → `mx01.udag.de` (Priority 20) (DNS only)
- ✅ TXT: `@` → `v=spf1 include:_smtp.udag.de ~all` (DNS only)
- ✅ TXT: `uddkim-202310._domainkey` → `v=DKIM1; k=rsa; p=...` (DNS only)
- ✅ TXT: `_dmarc` → `v=DMARC1;p=none` (DNS only)

### Gelöscht:
- ❌ NS-Records: `ns.udag.de`, `ns.udag.net`, `ns.udag.org` (nicht mehr benötigt)

---

## 🔍 Nach der Konfiguration

### 1. DNS-Propagierung prüfen (15 Min - 2 Stunden):
- Gehe zu: https://dnschecker.org
- Prüfe: `connectingthe.de` → sollte `75.2.60.5` zeigen

### 2. In Netlify Domain hinzufügen:
1. Gehe zu: Netlify Dashboard → Site Settings → Domain management
2. Klicke auf **"Add custom domain"**
3. Gib ein: `connectingthe.de`
4. Netlify prüft automatisch die DNS-Konfiguration
5. Warte auf SSL-Zertifikat (1-24 Stunden)

### 3. Website testen:
- `https://connectingthe.de` sollte funktionieren
- `https://www.connectingthe.de` sollte funktionieren
- Grünes Schloss-Symbol sollte sichtbar sein

---

## ⚠️ Wichtige Hinweise

1. **Proxy-Status:** Alle Records müssen auf "DNS only" (graue Wolke) stehen, NICHT auf "Proxied" (orange Wolke)
2. **DKIM-Wert:** Kopiere den vollständigen, langen Wert aus United Domains
3. **Wartezeit:** DNS-Änderungen können 15 Minuten bis 2 Stunden dauern
4. **SSL:** Netlify stellt automatisch SSL aus, sobald DNS korrekt ist

---

## 🐛 Troubleshooting

### Problem: Website lädt nicht
- Prüfe, ob alle A- und CNAME-Records auf "DNS only" stehen
- Prüfe DNS-Propagierung mit dnschecker.org
- Warte länger (bis zu 2 Stunden)

### Problem: SSL-Zertifikat wird nicht ausgestellt
- Prüfe, ob DNS vollständig propagiert ist
- Stelle sicher, dass Records auf "DNS only" stehen (nicht "Proxied")
- Warte bis zu 24 Stunden

### Problem: E-Mails funktionieren nicht
- Prüfe, ob alle MX- und TXT-Records korrekt sind
- Prüfe, ob DKIM-Wert vollständig kopiert wurde
- Warte auf DNS-Propagierung (15 Min - 2 Stunden)

---

## 📞 Support

Falls etwas nicht funktioniert:
- **Cloudflare Support:** https://support.cloudflare.com
- **Netlify Support:** https://www.netlify.com/support/
- **United Domains Support:** Tel.: 08151 / 36 86 7 - 0

---

**Viel Erfolg! 🚀**


