const cookieModal = document.getElementById('cookieModal');
const acceptBtn = document.querySelector('[data-action="accept-cookies"]');
const declineBtn = document.querySelector('[data-action="decline-cookies"]');

const COOKIE_KEY = 'cookies-consent';

// Перевіряємо стан у сховищі
const userConsent = localStorage.getItem(COOKIE_KEY);

if (!userConsent) {
  cookieModal.classList.add('show');
}

const handleConsent = value => {
  localStorage.setItem(COOKIE_KEY, value);
  cookieModal.classList.remove('show');
};

acceptBtn.addEventListener('click', () => handleConsent('accepted'));
declineBtn.addEventListener('click', () => handleConsent('declined'));
