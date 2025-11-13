# Google Kalender Integration - Setup Anleitung

Diese Anleitung zeigt dir, wie du das Formular mit Google Kalender verbindest.

## 🎯 Option 1: Einfache Lösung - Google Calendar Appointment Scheduling (Empfohlen)

Diese Lösung ist am einfachsten und erfordert keine Programmierung.

### Schritt 1: Google Calendar Appointment Scheduling einrichten

1. **Gehe zu Google Calendar**
   - Öffne https://calendar.google.com
   - Stelle sicher, dass du mit dem richtigen Google-Konto eingeloggt bist

2. **Erstelle einen Appointment Schedule**
   - Klicke auf "Erstellen" → "Appointment schedule" (Terminplan)
   - Oder gehe direkt zu: https://calendar.google.com/calendar/appointments/schedules

3. **Konfiguriere deinen Terminplan**
   - **Name:** z.B. "ConnectingTheDots - Beratungstermin"
   - **Dauer:** z.B. 30 Minuten oder 60 Minuten
   - **Verfügbare Zeiten:** Wähle deine verfügbaren Zeiten
   - **Pufferzeit:** Optional, z.B. 15 Minuten zwischen Terminen
   - **Zeitzone:** Europe/Berlin

4. **Einstellungen anpassen**
   - **Buchungsformular:** Aktiviere "Name" und "E-Mail" als Pflichtfelder
   - **Bestätigungs-E-Mail:** Aktiviere automatische Bestätigungs-E-Mails
   - **Erinnerungen:** Aktiviere E-Mail-Erinnerungen

5. **Link kopieren**
   - Nach dem Speichern erhältst du einen Link wie:
   ```
   https://calendar.google.com/calendar/appointments/schedules/AcZssZ1...
   ```
   - Kopiere diesen Link

### Schritt 2: Link in der Website konfigurieren

**Option A: Umgebungsvariable (Empfohlen)**

1. Erstelle eine `.env` Datei im Projektroot:
```bash
PUBLIC_GOOGLE_CALENDAR_URL=https://calendar.google.com/calendar/appointments/schedules/AcZssZ1...
```

2. In Netlify:
   - Gehe zu: Site Settings → Environment variables
   - Füge hinzu: `PUBLIC_GOOGLE_CALENDAR_URL` mit deinem Link

**Option B: Direkt im Code**

Öffne `src/components/LeadForm.astro` und ersetze Zeile 324:
```javascript
const calendarAppointmentUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1...';
```

### Schritt 3: Testen

1. Baue die Website: `npm run build`
2. Teste das Formular auf der Website
3. Nach dem Absenden sollte ein Modal mit dem Kalender-Link erscheinen

---

## 🔧 Option 2: Fortgeschrittene Lösung - Google Calendar API

Diese Lösung erstellt automatisch Kalendereinträge, wenn jemand das Formular absendet.

### Schritt 1: Google Cloud Console Setup

1. **Gehe zu Google Cloud Console**
   - https://console.cloud.google.com
   - Erstelle ein neues Projekt oder wähle ein bestehendes

2. **Google Calendar API aktivieren**
   - Gehe zu: APIs & Services → Library
   - Suche nach "Google Calendar API"
   - Klicke auf "Enable"

3. **OAuth 2.0 Credentials erstellen**
   - Gehe zu: APIs & Services → Credentials
   - Klicke auf "Create Credentials" → "OAuth client ID"
   - Wähle "Web application"
   - Füge Authorized redirect URIs hinzu (für später)
   - Speichere die Client ID und Client Secret

4. **Service Account erstellen (Einfacher für Server-to-Server)**
   - Gehe zu: APIs & Services → Credentials
   - Klicke auf "Create Credentials" → "Service Account"
   - Gib einen Namen ein (z.B. "netlify-calendar")
   - Klicke auf "Create and Continue"
   - Überspringe die Rollen (optional)
   - Klicke auf "Done"

5. **Service Account Key erstellen**
   - Klicke auf den erstellten Service Account
   - Gehe zu: Keys → Add Key → Create new key
   - Wähle "JSON"
   - Lade die JSON-Datei herunter (sicher aufbewahren!)

6. **Kalender für Service Account freigeben**
   - Öffne Google Calendar
   - Gehe zu: Einstellungen → Kalender teilen
   - Füge die E-Mail-Adresse des Service Accounts hinzu
   - Gib "Make changes to events" Berechtigung

### Schritt 2: Netlify Function konfigurieren

1. **Installiere benötigte Pakete**
```bash
npm install @netlify/functions googleapis
```

2. **Umgebungsvariablen in Netlify setzen**
   - Gehe zu: Site Settings → Environment variables
   - Füge hinzu:
     - `GOOGLE_CALENDAR_SERVICE_ACCOUNT_EMAIL`: E-Mail des Service Accounts
     - `GOOGLE_CALENDAR_PRIVATE_KEY`: Private Key aus der JSON-Datei
     - `GOOGLE_CALENDAR_ID`: Deine Kalender-ID (normalerweise "primary")
     - `CALENDAR_OWNER_EMAIL`: Deine E-Mail-Adresse

3. **Netlify Function aktualisieren**
   - Die Function ist bereits erstellt: `netlify/functions/submit-form.ts`
   - Aktiviere sie, indem du den Code in `LeadForm.astro` anpasst (Zeile 308-320)

### Schritt 3: Code aktivieren

In `src/components/LeadForm.astro`, Zeile 308-320:

Entferne die Kommentare (`/*` und `*/`) um den Netlify Function Code:
```javascript
const response = await fetch('/.netlify/functions/submit-form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

if (!response.ok) {
  throw new Error('Failed to submit form');
}

const result = await response.json();
```

---

## 📋 Vergleich der Optionen

| Feature | Option 1 (Appointment Scheduling) | Option 2 (API) |
|---------|-----------------------------------|-----------------|
| **Einfachheit** | ⭐⭐⭐⭐⭐ Sehr einfach | ⭐⭐ Komplex |
| **Setup-Zeit** | 5 Minuten | 30-60 Minuten |
| **Automatische Terminerstellung** | ❌ Nutzer muss selbst buchen | ✅ Automatisch |
| **Kosten** | ✅ Kostenlos | ✅ Kostenlos |
| **Wartung** | ✅ Keine | ⚠️ Code-Updates nötig |
| **Empfohlen für** | Die meisten Fälle | Spezielle Anforderungen |

---

## 🎯 Empfehlung

**Starte mit Option 1** (Appointment Scheduling):
- ✅ Schnell eingerichtet
- ✅ Keine Programmierung nötig
- ✅ Nutzer können selbst Termine wählen
- ✅ Weniger Fehleranfällig

**Wechsle zu Option 2** nur wenn:
- Du automatische Terminerstellung benötigst
- Du die Termine direkt im Kalender haben möchtest
- Du spezielle Anforderungen hast

---

## 🔒 Sicherheit & Datenschutz

- **Option 1:** Nutzer werden zu Google Calendar weitergeleitet (DSGVO-konform)
- **Option 2:** Stelle sicher, dass die Service Account Credentials sicher gespeichert sind
- **Beide:** Prüfe deine Datenschutzerklärung (DSGVO)

---

## 🐛 Troubleshooting

### Problem: Link funktioniert nicht
- **Lösung:** Prüfe, ob der Link korrekt kopiert wurde
- Stelle sicher, dass der Appointment Schedule aktiv ist

### Problem: Netlify Function gibt Fehler
- **Lösung:** Prüfe die Netlify Function Logs
- Stelle sicher, dass alle Umgebungsvariablen gesetzt sind
- Prüfe die Service Account Berechtigungen

### Problem: Kalendereintrag wird nicht erstellt
- **Lösung:** Prüfe, ob der Service Account Zugriff auf den Kalender hat
- Prüfe die Google Calendar API Quotas

---

## 📞 Weitere Hilfe

- [Google Calendar Appointment Scheduling Docs](https://support.google.com/calendar/answer/7638168)
- [Google Calendar API Docs](https://developers.google.com/calendar/api)
- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)

