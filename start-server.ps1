# Простой HTTP сервер для тестирования
Write-Host "🚀 Запуск локального веб-сервера..." -ForegroundColor Green
Write-Host ""
Write-Host "Сервер будет доступен по адресу:" -ForegroundColor Yellow
Write-Host "http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Откройте в браузере:" -ForegroundColor Yellow
Write-Host "http://localhost:8000/test-nav.html" -ForegroundColor Cyan
Write-Host ""
Write-Host "Для остановки нажмите Ctrl+C" -ForegroundColor Red
Write-Host ""

# Проверяем наличие Python
$pythonCmd = $null
if (Get-Command python -ErrorAction SilentlyContinue) {
    $pythonCmd = "python"
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    $pythonCmd = "python3"
} elseif (Get-Command py -ErrorAction SilentlyContinue) {
    $pythonCmd = "py"
}

if ($pythonCmd) {
    Write-Host "✓ Python найден, запускаем сервер..." -ForegroundColor Green
    & $pythonCmd -m http.server 8000
} else {
    Write-Host "❌ Python не найден!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Альтернативные варианты:" -ForegroundColor Yellow
    Write-Host "1. Установите Python: https://www.python.org/downloads/" -ForegroundColor White
    Write-Host "2. Используйте Node.js: npm install -g http-server && http-server" -ForegroundColor White
    Write-Host "3. Используйте расширение VS Code: Live Server" -ForegroundColor White
    Write-Host ""
    Read-Host "Нажмите Enter для выхода"
}
