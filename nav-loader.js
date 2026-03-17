/**
 * nav-loader.js — динамически вставляет единое меню на все страницы
 * Определяет глубину пути и строит правильные ссылки
 */
(function () {
    // Определяем находимся ли мы в /pages/ или в корне
    const inPages = window.location.pathname.includes('/pages/');
    const root = inPages ? '../' : '';
    const pages = inPages ? '' : 'pages/';

    // Текущая страница для active класса
    const path = window.location.pathname;
    const isHome = path.endsWith('index.html') || path.endsWith('/');
    const isTesting = path.includes('testing');
    const isCalls = path.includes('calls');
    const isCases = path.includes('cases');
    const isSimulator = path.includes('simulator');
    const isModules = path.includes('modules-index') || path.includes('/modules');
    const isDocs = path.includes('documentation') || path.includes('doc-module');
    const isAnalytics = path.includes('analytics') || path.includes('loadboard');
    const isLoadFinder = path.includes('load-finder');
    const isCards = path.includes('dispatcher-cards');
    const isPricing = path.includes('pricing');
    const isDashboard = path.includes('dashboard');

    const navHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-content">
                <a href="${root}index.html" class="logo">
                    <span class="logo-icon">🎓</span>
                    <span class="logo-text">Курсы Диспетчера</span>
                </a>

                <div class="nav-links">
                    <a href="${root}index.html" class="nav-link${isHome ? ' active' : ''}" data-short="Главная">Главная</a>

                    <div class="nav-dropdown">
                        <a href="${root}courses.html" class="nav-link" data-short="Курсы">Курсы</a>
                        <div class="dropdown-content">
                            <a href="${root}${pages}documentation.html" style="background: rgba(99,102,241,0.15); border-left: 3px solid #6366f1; font-weight: 700; color: #ffffff;">🎓 База знаний</a>
                            <a href="${root}course.html">📖 Обзор курса</a>
                            <a href="${root}${pages}modules-index.html"${isModules ? ' class="active"' : ''}>📚 12 Модулей обучения</a>
                            <a href="${root}${pages}simulator.html"${isSimulator ? ' class="active"' : ''}>🎯 Симулятор переговоров</a>
                            <a href="${root}${pages}calls.html"${isCalls ? ' class="active"' : ''}>📞 Примеры звонков</a>
                            <a href="${root}${pages}cases.html"${isCases ? ' class="active"' : ''}>💼 Практические кейсы</a>
                            <a href="${root}${pages}testing.html"${isTesting ? ' class="active"' : ''}>✍️ Тестирование</a>
                        </div>
                    </div>

                    <div class="nav-dropdown">
                        <span class="nav-link" data-short="Инстр.">Инструменты</span>
                        <div class="dropdown-content">
                            <a href="${root}${pages}analytics.html"${isAnalytics ? ' class="active"' : ''}>📊 Статистика рынка</a>
                            <a href="${root}${pages}load-finder.html"${isLoadFinder ? ' class="active"' : ''}>🔍 Load Finder</a>
                            <a href="${root}${pages}dispatcher-cards.html"${isCards ? ' class="active"' : ''}>🃏 Dispatcher Cards</a>
                            <a href="${root}${pages}simulator.html"${isSimulator ? ' class="active"' : ''}>🎯 Dispatch Simulator</a>
                        </div>
                    </div>

                    <div class="nav-dropdown">
                        <span class="nav-link" data-short="Инфо">Информация</span>
                        <div class="dropdown-content">
                            <a href="${root}about.html">👥 О нас</a>
                            <a href="${root}career.html">💼 Карьера</a>
                            <a href="${root}faq.html">❓ FAQ</a>
                            <a href="${root}help.html">🆘 Помощь</a>
                            <a href="${root}contacts.html">📬 Контакты</a>
                        </div>
                    </div>

                    <a href="${root}pricing.html" class="nav-link${isPricing ? ' active' : ''}" data-short="Тарифы">Тарифы</a>
                    <a href="${root}dashboard.html" class="nav-link" id="dashboardLink" style="display: none;" data-short="Кабинет">Личный кабинет</a>
                </div>

                <div class="nav-actions">
                    <a href="${root}login.html" class="btn-login">Войти</a>
                    <a href="${root}register.html" class="btn-signup">Регистрация</a>
                </div>

                <button class="mobile-menu-toggle" id="mobileMenuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>

    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>

    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-nav-links">
            <div class="mobile-nav-actions">
                <a href="${root}login.html" class="btn-login">Войти</a>
                <a href="${root}register.html" class="btn-signup">Регистрация</a>
            </div>
            <div class="mobile-menu-divider"></div>

            <a href="${root}index.html" class="nav-link${isHome ? ' active' : ''}">🏠 Главная</a>
            <a href="${root}dashboard.html" class="nav-link" id="dashboardLinkMobile" style="display: none;">👤 Личный кабинет</a>

            <div class="mobile-nav-section">
                <div class="mobile-section-title">📚 КУРСЫ</div>
                <a href="${root}${pages}documentation.html" class="nav-link nav-link-sub${isDocs ? ' active' : ''}" style="color: #ffffff; border-left: 3px solid #6366f1; padding-left: 14px; background: rgba(99,102,241,0.1); border-radius: 8px; margin-bottom: 4px;">🎓 База знаний</a>
                <a href="${root}courses.html" class="nav-link nav-link-sub">Все курсы</a>
                <a href="${root}course.html" class="nav-link nav-link-sub">Обзор курса</a>
                <a href="${root}${pages}modules-index.html" class="nav-link nav-link-sub${isModules ? ' active' : ''}">12 Модулей обучения</a>
                <a href="${root}${pages}simulator.html" class="nav-link nav-link-sub${isSimulator ? ' active' : ''}">Симулятор переговоров</a>
                <a href="${root}${pages}calls.html" class="nav-link nav-link-sub${isCalls ? ' active' : ''}">Примеры звонков</a>
                <a href="${root}${pages}cases.html" class="nav-link nav-link-sub${isCases ? ' active' : ''}">Практические кейсы</a>
                <a href="${root}${pages}testing.html" class="nav-link nav-link-sub${isTesting ? ' active' : ''}">Тестирование</a>
            </div>

            <div class="mobile-nav-section">
                <div class="mobile-section-title">🛠️ ИНСТРУМЕНТЫ</div>
                <a href="${root}${pages}analytics.html" class="nav-link nav-link-sub${isAnalytics ? ' active' : ''}">📊 Статистика рынка</a>
                <a href="${root}${pages}load-finder.html" class="nav-link nav-link-sub${isLoadFinder ? ' active' : ''}">Load Finder</a>
                <a href="${root}${pages}dispatcher-cards.html" class="nav-link nav-link-sub${isCards ? ' active' : ''}">Dispatcher Cards</a>
                <a href="${root}${pages}simulator.html" class="nav-link nav-link-sub${isSimulator ? ' active' : ''}">Dispatch Simulator</a>
            </div>

            <div class="mobile-nav-section">
                <div class="mobile-section-title">ℹ️ ИНФОРМАЦИЯ</div>
                <a href="${root}about.html" class="nav-link nav-link-sub">О нас</a>
                <a href="${root}career.html" class="nav-link nav-link-sub">Карьера</a>
                <a href="${root}faq.html" class="nav-link nav-link-sub">FAQ</a>
                <a href="${root}help.html" class="nav-link nav-link-sub">Помощь</a>
                <a href="${root}contacts.html" class="nav-link nav-link-sub">Контакты</a>
            </div>

            <a href="${root}pricing.html" class="nav-link${isPricing ? ' active' : ''}">💰 Тарифы</a>
        </div>
    </div>`;

    // Вставляем nav в начало body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Инициализация мобильного меню
    document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.getElementById('mobileMenuToggle');
        const menu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('mobileMenuOverlay');

        if (toggle && menu && overlay) {
            toggle.addEventListener('click', function () {
                menu.classList.toggle('active');
                overlay.classList.toggle('active');
                toggle.classList.toggle('active');
            });
            overlay.addEventListener('click', function () {
                menu.classList.remove('active');
                overlay.classList.remove('active');
                toggle.classList.remove('active');
            });
        }
    });
})();
