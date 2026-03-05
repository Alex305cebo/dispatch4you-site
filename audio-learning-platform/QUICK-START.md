# Быстрый старт

## Установка и запуск

```bash
cd audio-learning-platform
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Основные возможности

### 1. Главная страница (/)
- Список всех уроков
- Статистика обучения
- Кнопки "Прослушать превью" на каждой карточке урока

### 2. Страница урока (/docs/[slug])
- Полный текст урока
- Кнопка "Прослушать весь урок" в заголовке
- Кнопки Play для каждого раздела текста
- Автоматический прогресс воспроизведения

### 3. Демо страница (/demo)
- Примеры всех аудио компонентов
- Разные размеры и варианты кнопок
- Интеграция аудио в текст

## Добавление нового урока

1. Добавьте аудио файл в `public/audio/`:
```
public/audio/lesson-4.mp3
```

2. Обновите `src/data/lessons.json`:
```json
{
  "id": "lesson-4",
  "slug": "new-lesson",
  "title": "Новый урок",
  "description": "Описание нового урока",
  "audioUrl": "/audio/lesson-4.mp3",
  "duration": "15:30",
  "content": "Содержание урока..."
}
```

3. Страница автоматически создастся по адресу `/docs/new-lesson`

## Использование аудио компонентов

### AudioButton - простая кнопка

```tsx
import AudioButton from '@/src/components/ui/AudioButton';

<AudioButton 
  audioUrl="/audio/lesson-1.mp3" 
  label="Прослушать"
  size="md"
  variant="inline"
/>
```

**Параметры:**
- `audioUrl` (обязательно) - путь к аудио файлу
- `label` - текст на кнопке (по умолчанию "Прослушать")
- `size` - размер: "sm" | "md" | "lg" (по умолчанию "md")
- `variant` - вариант: "inline" | "block" (по умолчанию "inline")

### TextWithAudio - текст с аудио

```tsx
import TextWithAudio from '@/src/components/ui/TextWithAudio';

<TextWithAudio 
  audioUrl="/audio/section-1.mp3"
  title="Заголовок раздела"
>
  <p>Ваш текст здесь...</p>
</TextWithAudio>
```

**Параметры:**
- `audioUrl` (обязательно) - путь к аудио файлу
- `title` - заголовок раздела (опционально)
- `children` - любой React контент

## Структура проекта

```
audio-learning-platform/
├── app/                      # Next.js App Router
│   ├── docs/[slug]/         # Динамические страницы уроков
│   ├── demo/                # Демо страница
│   ├── layout.tsx           # Главный layout
│   └── page.tsx             # Главная страница
├── src/
│   ├── components/
│   │   ├── ui/              # UI компоненты
│   │   │   ├── AudioButton.tsx
│   │   │   ├── TextWithAudio.tsx
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── layout/          # Layout компоненты
│   │       ├── Sidebar.tsx
│   │       ├── Navbar.tsx
│   │       └── Player.tsx
│   └── data/
│       └── lessons.json     # Данные уроков
└── public/
    └── audio/               # Аудио файлы
```

## Советы

1. **Оптимизация аудио**: Используйте битрейт 128-192 kbps для речи
2. **Именование файлов**: Используйте понятные имена (lesson-1-intro.mp3)
3. **Разделение контента**: Длинные уроки разбивайте на части
4. **Метаданные**: Добавляйте теги к аудио файлам

## Следующие шаги

- Добавьте свои уроки в `src/data/lessons.json`
- Загрузите аудио файлы в `public/audio/`
- Настройте дизайн под свой бренд
- Добавьте систему авторизации (опционально)
- Интегрируйте аналитику прогресса обучения

## Поддержка

Для вопросов и предложений создайте issue в репозитории проекта.
