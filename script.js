const navigationLinks = document.querySelectorAll('.main-nav a');

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigationLinks.forEach((navigationLink) => {
      navigationLink.removeAttribute('aria-current');
    });
    link.setAttribute('aria-current', 'location');
  });
});