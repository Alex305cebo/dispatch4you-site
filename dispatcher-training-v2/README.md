# Dispatcher Training V2 🚛

Современная платформа для обучения диспетчеров грузоперевозок в США. Построена на Next.js 16 с Tailwind CSS v4.

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Открыть в браузере
http://localhost:3001
```

## 📁 Структура проекта

```
dispatcher-training-v2/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Главная страница
│   ├── course/              # Страница курса
│   ├── about/               # О нас
│   ├── simulator/           # Dispatch Simulator
│   ├── contacts/            # Контакты
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Глобальные стили
├── components/              # React компоненты
│   ├── HeroSection.tsx      # Hero с canvas анимацией
│   ├── CanvasBackground.tsx # Анимированный фон
│   ├── FeaturesSection.tsx  # Преимущества
│   ├── CourseModulesSection.tsx # Модули курса
│   ├── BenefitsSection.tsx  # Что получите
│   ├── TestimonialsSection.tsx # Отзывы
│   ├── PricingSection.tsx   # Цены
│   ├── FAQSection.tsx       # Частые вопросы
│   ├── CTASection.tsx       # Call to action
│   ├── Header.tsx           # Навигация
│   └── Footer.tsx           # Подвал
└── public/                  # Статические файлы
```

## 🎨 Технологии

- **Next.js 16** - React фреймворк с App Router
- **TypeScript** - Типизация
- **Tailwind CSS v4** - Стилизация
- **Canvas API** - Анимированный фон с частицами

## 📄 Страницы

### Главная (/)
- Hero секция с canvas анимацией
- Преимущества курса
- 12 модулей программы
- Что получите после обучения
- Отзывы выпускников
- Тарифные планы
- FAQ
- Call to action

### Курс (/course)
- Детальная программа обучения
- 12 модулей с описанием
- 92 урока, 28 часов контента
- Темы каждого модуля

### Simulator (/simulator)
- Интерактивный тренажер
- 6 практических сценариев
- Демо-версия с чатом
- Описание полной версии

### О нас (/about)
- История проекта
- Команда преподавателей
- Статистика и достижения
- Ценности компании

### Контакты (/contacts)
- Email, Telegram, WhatsApp
- Контактная форма
- Ссылка на FAQ

### Преимущества (/features)
- 12 детальных преимуществ курса
- Подробное описание каждого
- Что включено в каждое преимущество

### Цены (/pricing)
- 3 тарифных плана
- Детальное сравнение тарифов
- Таблица сравнения функций
- Гарантии и FAQ о ценах

### Отзывы (/testimonials)
- 12 детальных отзывов выпускников
- Статистика успеха
- Зарплаты и сроки трудоустройства
- Видео отзывы

### Блог (/blog)
- 9 статей о профессии
- Категории статей
- Рекомендуемые посты
- Подписка на рассылку

### Вакансии (/careers)
- 6 актуальных вакансий
- Карьерный путь диспетчера
- Зарплаты на каждом уровне
- Помощь в трудоустройстве

## 🎯 Особенности

### Canvas анимация
- Частицы с эффектом свечения
- Динамические связи между частицами
- Адаптивная производительность
- Плавная анимация 60 FPS

### Дизайн
- Современный dark theme
- Градиенты indigo/purple/pink
- Hover эффекты и transitions
- Полностью адаптивный (mobile-first)

### UX
- Быстрая навигация
- Плавные переходы
- Интерактивные элементы
- Читаемая типографика

## 🔧 Конфигурация

### Tailwind CSS v4
```css
/* globals.css */
@import "tailwindcss";
```

### PostCSS
```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

## 📱 Адаптивность

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Все компоненты полностью адаптивны и оптимизированы для всех устройств.

## 🚀 Деплой

```bash
# Production build
npm run build

# Запуск production сервера
npm start
```

## 📝 Лицензия

© 2024 Dispatcher Training. Все права защищены.

## 🤝 Контакты

- Email: info@dispatcher-training.com
- Telegram: @dispatcher_training
- WhatsApp: +1 (234) 567-8900
