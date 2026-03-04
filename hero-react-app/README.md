# Hero React App

React приложение для hero секции с scroll-видео анимацией.

## Установка

```bash
cd hero-react-app
npm install
```

## Разработка

```bash
npm run dev
```

Откроется на http://localhost:5173

## Сборка

```bash
npm run build
```

Файлы будут в папке `dist/`

## Интеграция в основной сайт

После сборки добавьте в `index.html`:

```html
<!-- Замените существующую hero секцию на: -->
<div id="hero-root"></div>
<script type="module" src="hero-react-app/dist/hero-app.js"></script>
```

## Видео

Положите видео файл в `public/video/hero-video.mp4`
