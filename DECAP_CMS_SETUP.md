# Decap CMS Setup Anleitung

Decap CMS (früher Netlify CMS) ist jetzt für deinen Blog eingerichtet! 🎉

## 📋 Aktivierung in Netlify

### Schritt 1: Netlify Identity aktivieren

1. Gehe zu deinem **Netlify Dashboard** (du bist bereits dort!)
2. In der **linken Navigation** klicke auf **"Project configuration"** (oder suche nach einem **"Settings"** oder **"Site settings"** Link)
3. Alternativ: Klicke oben rechts auf **"Project configuration"** Button (falls sichtbar)
4. Oder: Gehe direkt zu: `https://app.netlify.com/sites/meine-website-1762641815/configuration/identity`
5. Scrolle nach unten zu **"Identity"** Sektion
6. Klicke auf **"Enable Identity"**
7. Scrolle weiter zu **"Services"** → **"Git Gateway"**
8. Klicke auf **"Enable Git Gateway"**

### Schritt 2: E-Mail-Registrierung konfigurieren (optional)

1. Bleibe auf der **Identity** Seite
2. Scrolle zu **"Registration preferences"**
3. Wähle **"Invite only"** (empfohlen) oder **"Open"** (für öffentliche Registrierung)

### Schritt 3: Benutzer einladen

1. Gehe zur **"Identity"** Seite (falls du nicht schon dort bist)
2. Klicke auf den Tab **"Users"** oder **"Invite users"**
3. Klicke auf **"Invite users"** Button
4. Füge deine E-Mail-Adresse hinzu
5. Du erhältst eine Einladungs-E-Mail
6. Klicke auf den Link in der E-Mail, um dein Passwort zu setzen

**Falls du keine E-Mail erhalten hast:**
- Prüfe deinen Spam-Ordner
- Gehe zu **"Users"** → Klicke auf deine E-Mail → **"Send password reset email"**
- Oder lösche den User und lade ihn erneut ein

## 🚀 CMS verwenden

### Zugriff auf das CMS

1. Gehe zu: `https://connectingthe.de/admin`
2. Logge dich mit deinen Netlify Identity Credentials ein
3. Du siehst jetzt das CMS-Interface!

### Blog-Post erstellen

1. Klicke auf **"New Blog Post"**
2. Fülle die Felder aus:
   - **Title**: Titel des Posts
   - **Description**: Kurze Beschreibung (wird in der Übersicht angezeigt)
   - **Publish Date**: Veröffentlichungsdatum
   - **Author**: Autor (Standard: "ConnectingTheDots")
   - **Language**: Wähle "de" oder "en"
   - **Category**: Wähle "project", "news" oder "insights"
   - **Tags**: Füge Tags hinzu (optional)
   - **Hero Image**: Lade ein Titelbild hoch (optional)
   - **Body**: Schreibe deinen Content in Markdown
3. Klicke auf **"Publish"** oder **"Save Draft"**

### Blog-Post bearbeiten

1. Gehe zu `https://connectingthe.de/admin`
2. Klicke auf einen bestehenden Post
3. Bearbeite die Felder
4. Klicke auf **"Publish"**

## 📁 Dateistruktur

- **CMS-Konfiguration**: `public/admin/config.yml`
- **CMS-Interface**: `public/admin/index.html`
- **Blog-Posts**: `src/content/blog/*.md`
- **Blog-Bilder**: `public/images/blog/`

## 🔧 Anpassungen

### CMS-Konfiguration ändern

Bearbeite `public/admin/config.yml` um:
- Felder hinzuzufügen/zu entfernen
- Widget-Typen zu ändern
- Validierung anzupassen

### Media-Ordner ändern

In `public/admin/config.yml`:
```yaml
media_folder: public/images/blog
public_folder: /images/blog
```

## ⚠️ Wichtige Hinweise

1. **Git Gateway**: Änderungen werden direkt in dein GitHub Repository committed
2. **Automatisches Deployment**: Netlify deployed automatisch nach jedem Commit
3. **Markdown**: Der Content wird als Markdown gespeichert - du kannst alle Markdown-Features nutzen
4. **Bilder**: Hochgeladene Bilder werden in `public/images/blog/` gespeichert

## 🐛 Troubleshooting

### CMS-Seite lädt nicht

- Prüfe, ob Netlify Identity aktiviert ist
- Prüfe, ob Git Gateway aktiviert ist
- Stelle sicher, dass die Dateien `public/admin/config.yml` und `public/admin/index.html` existieren

### Änderungen werden nicht gespeichert

- Prüfe, ob du eingeloggt bist
- Prüfe die Netlify Identity Einstellungen
- Schaue in die Netlify Build-Logs

### Bilder werden nicht angezeigt

- Prüfe, ob der `public/images/blog/` Ordner existiert
- Stelle sicher, dass die Pfade in `config.yml` korrekt sind

## 📚 Weitere Ressourcen

- [Decap CMS Dokumentation](https://decapcms.org/docs/)
- [Netlify Identity Dokumentation](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Dokumentation](https://docs.netlify.com/visitor-access/git-gateway/)

---

**Viel Erfolg mit deinem Blog! 🚀**

