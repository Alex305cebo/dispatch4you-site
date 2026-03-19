# 🚀 Гайд по деплою на Hostinger

## ⚡ Быстрый старт

### 1. Настрой GitHub Secrets (один раз)

Перейди: `GitHub Repo → Settings → Secrets and variables → Actions`

Добавь 3 секрета:

```
FTP_SERVER = ftp.dispatch4you.com
FTP_USERNAME = твой_логин_от_hostinger
FTP_PASSWORD = твой_пароль_от_hostinger
```

### 2. Как получить FTP данные

1. Войди в **Hostinger hPanel**
2. **Files → FTP Accounts**
3. Скопируй данные из своего FTP аккаунта

### 3. Готово! Теперь деплой автоматический

Просто пуши в main:
```bash
git add .
git commit -m "Update site"
git push
```

Или используй быстрый скрипт:
```bash
./quick-deploy.ps1
```

---

## 📊 Что деплоится

✅ **Включено:**
- HTML, CSS, JS файлы
- Аудио файлы (audio/)
- Изображения, иконки
- includes/, pages/, quiz/
- .htaccess

❌ **Исключено:**
- Markdown файлы (*.md)
- Скрипты (*.py, *.ps1, *.bat)
- Тестовые файлы (test-*.html)
- Бэкапы (backup_*)
- Dev проекты (audio-learning-platform и т.д.)

---

## 🎯 Проверка деплоя

1. После push открой: `GitHub → Actions`
2. Увидишь "🚀 Deploy to Hostinger"
3. Зеленая галочка ✅ = успешно (2-5 минут)
4. Проверь сайт: https://dispatch4you.com

---

## 🔧 Ручной деплой

Если нужно задеплоить без коммита:

1. `GitHub → Actions → Deploy to Hostinger`
2. `Run workflow → Run workflow`

---

## ❓ Проблемы?

**Деплой не запускается:**
- Проверь, что все 3 секрета добавлены
- Имена секретов должны быть ЗАГЛАВНЫМИ
- Нет лишних пробелов в значениях

**FTP ошибка:**
- Проверь логин/пароль в Hostinger
- Убедись, что FTP доступ включен
- Попробуй подключиться через FileZilla для теста

---

## 🎉 Готово!

Теперь каждый push автоматически обновляет сайт!
