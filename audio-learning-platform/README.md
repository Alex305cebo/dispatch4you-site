# Audio Learning Platform

Платформа для обучения с аудио уроками на Next.js 15, TypeScript и Tailwind CSS.

## Технологии

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** - иконки
- **clsx** - управление классами

## Структура проекта

```
audio-learning-platform/
├── app/
│   ├── docs/
│   │   └── [slug]/
│   │       └── page.tsx          # Динамические страницы уроков
│   ├── layout.tsx                # Главный layout
│   ├── page.tsx                  # Главная страница
│   └── globals.css
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx        # Переиспользуемая кнопка
│   │   │   └── Card.tsx          # Переиспользуемая карточка
│   │   └── layout/
│   │       ├── Sidebar.tsx       # Боковое меню
│   │       ├── Navbar.tsx        # Верхняя навигация
│   │       └── Player.tsx        # Аудио плеер
│   └── data/
│       └── lessons.json          # Данные уроков
└── package.json
```

## Запуск проекта

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Возможности

- ✅ Адаптивный дизайн
- ✅ Динамические страницы уроков
- ✅ Аудио плеер с управлением
- ✅ **Кнопки Play для каждого текстового блока**
- ✅ **Встроенные аудио кнопки в карточках уроков**
- ✅ **Компонент TextWithAudio для озвучки текста**
- ✅ Боковое меню навигации
- ✅ Переиспользуемые UI компоненты
- ✅ TypeScript для типобезопасности
- ✅ Tailwind CSS для стилизации

## Компоненты

### AudioButton
Кнопка для воспроизведения аудио с прогресс-баром:
```tsx
<AudioButton 
  audioUrl="/audio/lesson-1.mp3" 
  label="Прослушать"
  size="md"
  variant="inline"
/>
```

### TextWithAudio
Обертка для текста с кнопкой воспроизведения:
```tsx
<TextWithAudio 
  audioUrl="/audio/lesson-1.mp3"
  title="Заголовок раздела"
>
  <p>Ваш текст здесь...</p>
</TextWithAudio>
```

## Добавление новых уроков

Отредактируйте файл `src/data/lessons.json`:

```json
{
  "id": "lesson-4",
  "slug": "new-lesson",
  "title": "Новый урок",
  "description": "Описание урока",
  "audioUrl": "/audio/lesson-4.mp3",
  "duration": "10:00",
  "content": "Содержание урока..."
}
```
