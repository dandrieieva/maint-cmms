const modal = document.getElementById('request-modal');

document.querySelectorAll('[data-open-modal]').forEach((button) => {
  button.addEventListener('click', () => modal.showModal());
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', () => modal.close());
});