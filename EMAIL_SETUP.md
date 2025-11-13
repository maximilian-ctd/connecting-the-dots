# E-Mail-Benachrichtigung Setup

Das Formular sendet jetzt automatisch E-Mails an `maximilian@connectingthe.de`, wenn jemand das Formular ausfüllt.

## ✅ Was bereits konfiguriert ist

1. **Netlify Forms aktiviert** - Das Formular ist für Netlify Forms konfiguriert
2. **Spam-Schutz** - Honeypot-Feld für Spam-Schutz aktiviert
3. **Formular-Integration** - Formular sendet Daten an Netlify Forms

## 📧 E-Mail-Benachrichtigung in Netlify einrichten

### Schritt 1: Gehe zu Netlify Dashboard

1. Öffne: https://app.netlify.com
2. Wähle deine Site: `meine-website-1762641815`

### Schritt 2: Form Notifications konfigurieren

1. Gehe zu: **Site Settings** → **Forms** → **Form notifications**
2. Klicke auf: **Add notification**
3. Wähle: **Email notification**
4. Konfiguriere:
   - **To:** `maximilian@connectingthe.de`
   - **From:** `noreply@connectingthe.de` (oder deine Domain)
   - **Subject:** `Neue Kontaktanfrage von {{firstName}} {{lastName}}`
   - **Email template:** Wähle ein Template oder erstelle ein Custom Template

### Schritt 3: E-Mail-Template (Optional)

Du kannst ein Custom Template erstellen:

```
Neue Kontaktanfrage von ConnectingTheDots

Name: {{firstName}} {{lastName}}
Firma: {{company}}
E-Mail: {{email}}

Projektziele & Herausforderungen:
{{goals}}

Einverständnis: {{consent}}
```

### Schritt 4: Testen

1. Fülle das Formular auf der Website aus
2. Sende es ab
3. Prüfe dein E-Mail-Postfach (`maximilian@connectingthe.de`)

## 🔧 Alternative: Custom E-Mail-Service (Optional)

Falls du mehr Kontrolle über die E-Mails möchtest, kannst du einen externen E-Mail-Service verwenden:

### Option A: Resend (Empfohlen)

1. Erstelle Account bei: https://resend.com
2. Erstelle API Key
3. In Netlify: Site Settings → Environment variables
   - `RESEND_API_KEY`: Dein API Key
   - `EMAIL_TO`: `maximilian@connectingthe.de`
4. Aktiviere die Netlify Function `send-email.ts`

### Option B: SendGrid

1. Erstelle Account bei: https://sendgrid.com
2. Erstelle API Key
3. In Netlify: Site Settings → Environment variables
   - `SENDGRID_API_KEY`: Dein API Key
   - `EMAIL_TO`: `maximilian@connectingthe.de`

## 📋 Was passiert jetzt?

1. **Nutzer füllt Formular aus**
2. **Formular wird an Netlify Forms gesendet**
3. **Netlify sendet automatisch E-Mail** an `maximilian@connectingthe.de`
4. **Modal erscheint** mit Kalender-Buchungsoption
5. **Formular wird zurückgesetzt**

## ✅ Checkliste

- [x] Netlify Forms im Formular aktiviert
- [x] Spam-Schutz (Honeypot) aktiviert
- [ ] E-Mail-Benachrichtigung in Netlify Dashboard konfiguriert
- [ ] Test-E-Mail erhalten

## 🐛 Troubleshooting

### Problem: Keine E-Mails erhalten
- **Lösung:** Prüfe, ob E-Mail-Benachrichtigung in Netlify Dashboard konfiguriert ist
- Prüfe Spam-Ordner
- Prüfe Netlify Forms Logs: Site Settings → Forms → Form submissions

### Problem: Formular sendet nicht
- **Lösung:** Prüfe Browser-Konsole auf Fehler
- Stelle sicher, dass `data-netlify="true"` im Formular vorhanden ist
- Prüfe, ob Formular korrekt gebaut wurde

### Problem: Spam-E-Mails
- **Lösung:** Honeypot-Feld ist bereits aktiviert
- Du kannst zusätzlich reCAPTCHA in Netlify Forms aktivieren

## 📞 Weitere Hilfe

- [Netlify Forms Dokumentation](https://docs.netlify.com/forms/setup/)
- [Netlify Forms Notifications](https://docs.netlify.com/forms/notifications/)

