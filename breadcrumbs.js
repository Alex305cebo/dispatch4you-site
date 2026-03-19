/**
 * breadcrumbs.js — Автоматические хлебные крошки для навигации
 * 
 * Функции:
 * - 🍞 Автоматическое создание breadcrumbs на основе URL
 * - 🎨 Красивый дизайн с иконками
 * - 📱 Адаптивность для мобильных
 * - 🔗 Умное определение названий страниц
 * - ✨ Плавные анимации
 */

(function () {
    'use strict';

    // Карта путей к читаемым названиям
    const PAGE_NAMES = {
        'index.html': 'Главная',
        'courses.html': 'Курсы',
        'course.html': 'Обзор курса',
        'about.html': 'О нас',
        'career.html': 'Карьера',
        'faq.html': 'FAQ',
        'contacts.html': 'Контакты',
        'pricing.html': 'Тарифы',
        'login.html': 'Вход',
        'register.html': 'Регистрация',

        // Pages folder
        'documentation.html': 'База знаний',
        'modules-index.html': 'Модули обучения',
        'simulator.html': 'Симулятор',
        'cases.html': 'Практические кейсы',
        'testing.html': 'Тестирование',
        'analytics.html': 'Статистика рынка',
        'load-finder.html': 'Load Finder',
        'dispatcher-cards.html': 'Dispatcher Cards',
        'loadboard.html': 'Loadboard',

        // Modules
        'doc-module-1-complete.html': 'Модуль 1: Введение',
        'doc-module-2-complete.html': 'Модуль 2: Регуляции',
        'doc-module-3-complete.html': 'Модуль 3: Оборудование',
        'doc-module-4-complete.html': 'Модуль 4: Loadboards',
        'doc-module-5-complete.html': 'Модуль 5: Переговоры',
        'doc-module-6-complete.html': 'Модуль 6: Маршрутизация',
        'doc-module-7-complete.html': 'Модуль 7: Документация',
        'doc-module-8-complete.html': 'Модуль 8: Технологии',
        'doc-module-9-complete.html': 'Модуль 9: Безопасность',
        'doc-module-10-complete.html': 'Модуль 10: Финансы',
        'doc-module-11-complete.html': 'Модуль 11: Кризисы',
        'doc-module-12-complete.html': 'Модуль 12: Практика',

        // Folders
        'pages': 'Страницы'
    };

    // Иконки для разных типов страниц
    const PAGE_ICONS = {
        'index.html': '🏠',
        'courses.html': '📚',
        'documentation.html': '📖',
        'modules-index.html': '📚',
        'simulator.html': '🎯',
        'cases.html': '💼',
        'testing.html': '✍️',
        'analytics.html': '📊',
        'load-finder.html': '🔍',
        'dispatcher-cards.html': '🃏',
        'about.html': '👥',
        'career.html': '💼',
        'faq.html': '❓',
        'contacts.html': '📬',
        'pricing.html': '💰',
        'pages': '📁'
    };

    /**
     * Создает breadcrumbs на основе текущего URL
     */
    function createBreadcrumbs() {
        // Получаем текущий путь
        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p && p !== '');

        // Если мы на главной странице, не показываем breadcrumbs
        if (parts.length === 0 || (parts.length === 1 && parts[0] === 'index.html')) {
            return null;
        }

        // Создаем массив крошек
        const breadcrumbs = [];

        // Всегда добавляем главную страницу
        breadcrumbs.push({
            name: 'Главная',
            icon: '🏠',
            url: getBasePath() + 'index.html',
            isHome: true
        });

        // Строим путь постепенно
        let currentPath = getBasePath();

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            currentPath += part;

            // Пропускаем index.html в середине пути
            if (part === 'index.html' && i < parts.length - 1) {
                continue;
            }

            // Определяем название и иконку
            const name = PAGE_NAMES[part] || formatName(part);
            const icon = PAGE_ICONS[part] || getDefaultIcon(part);

            // Последний элемент - текущая страница (без ссылки)
            const isLast = (i === parts.length - 1);

            breadcrumbs.push({
                name: name,
                icon: icon,
                url: isLast ? null : currentPath,
                isLast: isLast
            });

            // Добавляем слэш для следующей итерации
            if (!part.includes('.html')) {
                currentPath += '/';
            }
        }

        return breadcrumbs;
    }

    /**
     * Определяет базовый путь (корень или ../)
     */
    function getBasePath() {
        const path = window.location.pathname;
        const isInSubfolder = path.includes('/pages/');
        return isInSubfolder ? '../' : '';
    }

    /**
     * Форматирует название из имени файла
     */
    function formatName(name) {
        // Убираем расширение
        name = name.replace(/\.(html|php|aspx)$/, '');

        // Заменяем дефисы и подчеркивания на пробелы
        name = name.replace(/[-_]/g, ' ');

        // Делаем первую букву заглавной
        name = name.charAt(0).toUpperCase() + name.slice(1);

        return name;
    }

    /**
     * Возвращает иконку по умолчанию в зависимости от типа
     */
    function getDefaultIcon(name) {
        if (name.includes('module')) return '📚';
        if (name.includes('doc')) return '📖';
        if (name.includes('test')) return '✍️';
        if (name.includes('admin')) return '⚙️';
        if (name.endsWith('.html')) return '📄';
        return '📁';
    }

    /**
     * Рендерит breadcrumbs в HTML
     */
    function renderBreadcrumbs(breadcrumbs) {
        if (!breadcrumbs || breadcrumbs.length <= 1) {
            return '';
        }

        let html = '<nav class="breadcrumbs" aria-label="Breadcrumb">';
        html += '<ol class="breadcrumbs-list">';

        breadcrumbs.forEach((crumb, index) => {
            const isLast = crumb.isLast || index === breadcrumbs.length - 1;

            html += '<li class="breadcrumb-item' + (isLast ? ' active' : '') + '">';

            if (crumb.url && !isLast) {
                html += `<a href="${crumb.url}" class="breadcrumb-link">`;
                html += `<span class="breadcrumb-icon">${crumb.icon}</span>`;
                html += `<span class="breadcrumb-text">${crumb.name}</span>`;
                html += '</a>';
            } else {
                html += `<span class="breadcrumb-current">`;
                html += `<span class="breadcrumb-icon">${crumb.icon}</span>`;
                html += `<span class="breadcrumb-text">${crumb.name}</span>`;
                html += '</span>';
            }

            // Добавляем разделитель (кроме последнего элемента)
            if (!isLast) {
                html += '<span class="breadcrumb-separator">›</span>';
            }

            html += '</li>';
        });

        html += '</ol>';
        html += '</nav>';

        return html;
    }

    /**
     * Вставляет breadcrumbs в DOM
     */
    function insertBreadcrumbs() {
        const breadcrumbs = createBreadcrumbs();

        if (!breadcrumbs) {
            return;
        }

        const html = renderBreadcrumbs(breadcrumbs);

        if (!html) {
            return;
        }

        // Ищем место для вставки (после navbar)
        const navbar = document.querySelector('.navbar');

        if (!navbar) {
            console.warn('Navbar not found, cannot insert breadcrumbs');
            return;
        }

        // Проверяем, не вставлены ли уже breadcrumbs
        const existing = document.querySelector('.breadcrumbs');
        if (existing) {
            existing.remove();
        }

        // Вставляем после navbar
        navbar.insertAdjacentHTML('afterend', html);

        // Добавляем анимацию появления
        setTimeout(() => {
            const breadcrumbsEl = document.querySelector('.breadcrumbs');
            if (breadcrumbsEl) {
                breadcrumbsEl.classList.add('visible');
            }
        }, 10);
    }

    /**
     * Инициализация
     */
    function init() {
        // Ждем загрузки навигации
        if (document.querySelector('.navbar')) {
            insertBreadcrumbs();
        } else {
            // Слушаем событие загрузки навигации
            document.addEventListener('navLoaded', () => {
                setTimeout(insertBreadcrumbs, 100);
            });
        }
    }

    // Запускаем инициализацию
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Экспортируем функции для использования извне
    window.Breadcrumbs = {
        create: createBreadcrumbs,
        render: renderBreadcrumbs,
        insert: insertBreadcrumbs,
        addPageName: function (path, name, icon) {
            PAGE_NAMES[path] = name;
            if (icon) PAGE_ICONS[path] = icon;
        }
    };

})();
