// auth.js — отображение пользователя в навбаре на всех страницах
// Работает надёжно независимо от порядка подключения скриптов

function checkAuth() {
  try { return JSON.parse(localStorage.getItem('user')); } catch (e) { return null; }
}

function updateAuthUI() {
  const user = checkAuth();
  const navActions = document.querySelector('.nav-actions');
  const mobileNavActions = document.querySelector('.mobile-nav-actions');

  if (!navActions) return;

  if (user) {
    const name = user.firstName || user.email || 'Пользователь';
    const isPages = window.location.pathname.includes('/pages/');
    const dashHref = isPages ? '../dashboard.html' : 'dashboard.html';
    const html = `
      <div style="display:flex;align-items:center;gap:12px;">
        <a href="${dashHref}" style="color:#a5b4fc;font-weight:600;font-size:14px;text-decoration:none;">👤 ${name}</a>
        <a href="#" class="btn-login" onclick="authLogout(event)">Выйти</a>
      </div>`;
    navActions.innerHTML = html;
    if (mobileNavActions) mobileNavActions.innerHTML = html;
  }

  const dashboardLink = document.getElementById('dashboardLink');
  const dashboardLinkMobile = document.getElementById('dashboardLinkMobile');
  if (user && dashboardLink) dashboardLink.style.display = 'block';
  if (user && dashboardLinkMobile) dashboardLinkMobile.style.display = 'block';
}

function authLogout(event) {
  if (event) event.preventDefault();
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  // Firebase signOut если доступен
  if (window._firebaseAuth) {
    window._firebaseAuth.signOut().catch(() => { });
  }
  const isPages = window.location.pathname.includes('/pages/');
  window.location.href = isPages ? '../index.html' : 'index.html';
}

function initAuthUI() {
  if (document.querySelector('.nav-actions')) {
    updateAuthUI();
  } else {
    document.addEventListener('navLoaded', updateAuthUI, { once: true });
  }
}

// Запускаем в зависимости от состояния DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuthUI);
} else {
  initAuthUI();
}

// Firebase Auth — подхватываем сессию на любой странице
(function initFirebaseAuth() {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyC505dhT1WjUPhXbinqLvEOTlEXWxYy8GI",
    authDomain: "dispatch4you-80e0f.firebaseapp.com",
    projectId: "dispatch4you-80e0f"
  };

  // Динамически импортируем Firebase только если ещё не инициализирован
  const script = document.createElement('script');
  script.type = 'module';
  script.textContent = `
    import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

    const app = getApps().length ? getApps()[0] : initializeApp(${JSON.stringify(FIREBASE_CONFIG)});
    const auth = getAuth(app);
    window._firebaseAuth = auth;

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const parts = (firebaseUser.displayName || '').split(' ');
        const firstName = parts[0] || firebaseUser.email.split('@')[0];
        const lastName = parts.slice(1).join(' ') || '';
        const userData = { uid: firebaseUser.uid, firstName, lastName, email: firebaseUser.email };
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        localStorage.removeItem('user');
      }
      // Обновляем навбар после получения статуса
      if (document.querySelector('.nav-actions')) {
        updateAuthUI();
      } else {
        document.addEventListener('navLoaded', updateAuthUI, { once: true });
      }
    });
  `;
  document.head.appendChild(script);
})();
