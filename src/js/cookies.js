const cookieModal = document.getElementById('cookieModal');
const acceptBtn = document.querySelector('[data-action="accept-cookies"]');
const declineBtn = document.querySelector('[data-action="decline-cookies"]');

const COOKIE_KEY = 'cookies-consent';

const userConsent = localStorage.getItem(COOKIE_KEY);

if (!userConsent) {
  cookieModal.classList.remove('hidden');
}

const handleConsent = value => {
  localStorage.setItem(COOKIE_KEY, value);
  cookieModal.classList.add('hidden');
};

acceptBtn.addEventListener('click', () => handleConsent('accepted'));
declineBtn.addEventListener('click', () => handleConsent('declined'));
