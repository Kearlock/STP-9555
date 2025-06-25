const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
});

burgerMenuEl.addEventListener('click', e => {
  // closeBtnEl.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('a')) {
    burgerMenuEl.dataset.visible = 'close';
  }
});
