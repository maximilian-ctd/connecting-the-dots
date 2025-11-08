# GitHub Setup Anleitung

## Schritt 1: Repository auf GitHub erstellen

1. Gehe zu https://github.com/new
2. Wähle einen Repository-Namen (z.B. `meine-website`)
3. **WICHTIG:** Erstelle das Repository **OHNE** README, .gitignore oder License
4. Klicke auf "Create repository"

## Schritt 2: Repository verbinden

Nachdem du das Repository erstellt hast, führe diese Befehle aus:

```bash
# Ersetze DEIN-USERNAME und DEIN-REPO-NAME mit deinen Werten
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO-NAME.git
git branch -M main
git push -u origin main
```

## Authentifizierung

Falls du nach einem Passwort gefragt wirst, musst du einen **Personal Access Token** verwenden:

1. Gehe zu https://github.com/settings/tokens
2. Klicke auf "Generate new token" → "Generate new token (classic)"
3. Gib einen Namen ein (z.B. "Meine Website")
4. Wähle die Berechtigung `repo` aus
5. Klicke auf "Generate token"
6. Kopiere den Token (er wird nur einmal angezeigt!)
7. Verwende diesen Token als Passwort beim `git push`

## Alternative: SSH verwenden

Falls du SSH-Schlüssel bei GitHub eingerichtet hast:

```bash
git remote add origin git@github.com:DEIN-USERNAME/DEIN-REPO-NAME.git
git branch -M main
git push -u origin main
```

