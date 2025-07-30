@echo off
echo ========================================
echo   Vue AR Model Viewer - Demarrage
echo ========================================
echo.

echo Installation des dependances...
npm install

echo.
echo Demarrage du serveur de developpement...
echo L'application sera disponible sur: http://localhost:8080
echo.
echo Pour tester sur mobile avec AR:
echo 1. Installez ngrok: https://ngrok.com/
echo 2. Dans un autre terminal: ngrok http 8080
echo 3. Utilisez l'URL HTTPS fournie par ngrok
echo.

npm run serve

pause 