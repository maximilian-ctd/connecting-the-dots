# Passwort-Problem lösen - Schritt für Schritt

## Problem
Du wirst automatisch weitergeleitet, bevor du ein Passwort erstellen kannst.

## Lösung 1: User komplett löschen und neu einladen (EMPFOHLEN)

1. **Gehe zu Netlify Identity:**
   - `https://app.netlify.com/sites/meine-website-1762641815/identity`
   - Oder: Project configuration → Identity → Users

2. **Lösche den bestehenden User:**
   - Klicke auf "Users" Tab
   - Finde deine E-Mail-Adresse
   - Klicke auf die E-Mail → "Delete user"
   - Bestätige die Löschung

3. **Lade den User neu ein:**
   - Klicke auf "Invite users"
   - Gib deine E-Mail-Adresse ein
   - Klicke auf "Send invite"

4. **Prüfe dein E-Mail-Postfach:**
   - Öffne die Einladungs-E-Mail von Netlify
   - **WICHTIG:** Klicke direkt auf den Link in der E-Mail
   - **NICHT** über `/admin` gehen!

5. **Setze dein Passwort:**
   - Der Link führt dich direkt zur Passwort-Setup-Seite
   - Setze dein Passwort
   - Du wirst automatisch eingeloggt

6. **Jetzt zum CMS:**
   - Gehe zu `https://connectingthe.de/admin`
   - Du solltest jetzt eingeloggt sein

## Lösung 2: Passwort-Reset verwenden

1. **Gehe zu Netlify Identity:**
   - `https://app.netlify.com/sites/meine-website-1762641815/identity`
   - Klicke auf "Users" Tab

2. **Sende Passwort-Reset:**
   - Klicke auf deine E-Mail-Adresse
   - Klicke auf "Send password reset email"
   - Prüfe dein Postfach (auch Spam)

3. **Setze Passwort:**
   - Klicke auf den Link in der E-Mail
   - Setze dein neues Passwort

## Lösung 3: Registration-Einstellungen prüfen

1. **Gehe zu Identity Settings:**
   - `https://app.netlify.com/sites/meine-website-1762641815/configuration/identity`

2. **Prüfe "Registration preferences":**
   - Sollte auf **"Invite only"** stehen
   - **NICHT** auf "Open" oder "Auto confirm"

3. **Prüfe "External providers":**
   - Sollten alle deaktiviert sein (falls aktiviert)

## Lösung 4: Browser-Cache löschen

Falls du immer noch Probleme hast:

1. **Lösche Browser-Cache:**
   - Chrome: Cmd+Shift+Delete (Mac) oder Ctrl+Shift+Delete (Windows)
   - Wähle "Cookies und andere Websitedaten"
   - Klicke auf "Daten löschen"

2. **Oder verwende Inkognito-Modus:**
   - Öffne ein Inkognito-Fenster
   - Gehe zu `https://connectingthe.de/admin`

## Lösung 5: Direkter Link zum Passwort-Setup

Falls du die Einladungs-E-Mail hast, aber der Link nicht funktioniert:

1. **Kopiere den Token aus der E-Mail-URL:**
   - Die URL sieht so aus: `https://connectingthe.de/#invite_token=...`

2. **Gehe direkt zu:**
   - `https://connectingthe.de/#invite_token=DEIN_TOKEN`
   - Ersetze `DEIN_TOKEN` mit dem Token aus der E-Mail

## Was ich im Code geändert habe

- **Custom Login-Prompt** hinzugefügt
- **Passwort-Reset-Link** direkt im Prompt
- **Bessere Error-Handling**
- **Verhindert automatische Weiterleitung**

Nach dem nächsten Deployment solltest du einen Login-Prompt sehen mit Optionen für:
- Login öffnen
- Passwort setzen
- Passwort zurücksetzen

## Wenn nichts funktioniert

1. **Prüfe die Browser-Console (F12):**
   - Gibt es Fehler?
   - Was steht in den Logs?

2. **Prüfe Netlify Identity Logs:**
   - Gehe zu Identity → Users → deine E-Mail
   - Schaue dir die "Activity" an

3. **Kontaktiere Netlify Support:**
   - Falls das Problem weiterhin besteht

---

**Empfohlener Workflow:**
1. Lösche User komplett
2. Lade neu ein
3. Verwende den Link aus der E-Mail direkt (nicht über /admin)
4. Setze Passwort
5. Gehe dann zu /admin

