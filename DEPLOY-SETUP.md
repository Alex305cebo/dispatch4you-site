# Настройка автоматического деплоя на Hostinger

## Способ 1: GitHub Actions (Рекомендуется)

### Шаг 1: Получите FTP данные от Hostinger

1. Войдите в панель управления Hostinger
2. Перейдите в раздел "FTP Accounts" или "Файловый менеджер"
3. Создайте или используйте существующий FTP аккаунт
4. Запишите:
   - FTP Server (например: ftp.yourdomain.com)
   - FTP Username (например: u123456789)
   - FTP Password

### Шаг 2: Добавьте секреты в GitHub

1. Откройте ваш репозиторий на GitHub: https://github.com/Alex305cebo/dispatch4you-site
2. Перейдите в Settings → Secrets and variables → Actions
3. Нажмите "New repository secret" и добавьте:
   - Name: `FTP_SERVER`, Value: ваш FTP сервер (например: ftp.dispatch4you.com)
   - Name: `FTP_USERNAME`, Value: ваш FTP логин
   - Name: `FTP_PASSWORD`, Value: ваш FTP пароль

### Шаг 3: Проверьте путь к папке

В файле `.github/workflows/deploy.yml` измените `server-dir` если нужно:
- Для основного домена: `/public_html/`
- Для поддомена: `/public_html/subdomain/`

### Шаг 4: Готово!

Теперь при каждом push в ветку `main` файлы автоматически загрузятся на Hostinger.

---

## Способ 2: Hostinger Git Deploy (Альтернатива)

Если у вас есть доступ к SSH на Hostinger:

### Шаг 1: Подключитесь к Hostinger через SSH

```bash
ssh u123456789@yourdomain.com
```

### Шаг 2: Клонируйте репозиторий

```bash
cd public_html
git clone https://github.com/Alex305cebo/dispatch4you-site.git .
```

### Шаг 3: Создайте скрипт автообновления

Создайте файл `update.sh`:

```bash
#!/bin/bash
cd /home/u123456789/public_html
git pull origin main
```

### Шаг 4: Настройте webhook

1. В GitHub: Settings → Webhooks → Add webhook
2. Payload URL: https://yourdomain.com/webhook.php
3. Content type: application/json
4. Secret: создайте секретный ключ

Создайте `webhook.php`:

```php
<?php
$secret = 'YOUR_SECRET_KEY';
$payload = file_get_contents('php://input');
$signature = hash_hmac('sha256', $payload, $secret);

if (hash_equals('sha256=' . $signature, $_SERVER['HTTP_X_HUB_SIGNATURE_256'])) {
    shell_exec('/home/u123456789/public_html/update.sh 2>&1');
    echo "Deployed successfully!";
} else {
    http_response_code(403);
    echo "Invalid signature";
}
?>
```

---

## Тестирование

После настройки:

1. Сделайте изменение в коде
2. Запустите: `.\auto-deploy.ps1 -message "Test auto deploy"`
3. Проверьте GitHub Actions (вкладка Actions в репозитории)
4. Проверьте сайт через 1-2 минуты

---

## Устранение проблем

### GitHub Actions не запускается
- Проверьте, что файл `.github/workflows/deploy.yml` в ветке main
- Проверьте вкладку Actions в GitHub

### Ошибка FTP подключения
- Проверьте правильность FTP данных
- Убедитесь, что FTP доступ включен в Hostinger
- Проверьте, что IP GitHub не заблокирован

### Файлы не обновляются
- Проверьте путь `server-dir` в deploy.yml
- Очистите кеш браузера (Ctrl+F5)
- Проверьте логи в GitHub Actions
