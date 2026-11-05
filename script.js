const navigationLinks = document.querySelectorAll('.main-nav a');

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigationLinks.forEach((navigationLink) => {
      navigationLink.removeAttribute('aria-current');
    });
    link.setAttribute('aria-current', 'location');
  });
});

const supportContactForm = document.querySelector('#support-contact-form');
const supportPhoneInput = document.querySelector('#support-phone');
const generatedCallLink = document.querySelector('#generated-call-link');
const contactStatus = document.querySelector('#contact-status');

supportContactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!supportContactForm.reportValidity()) {
    return;
  }

  const phoneNumber = supportPhoneInput.value.trim();
  const digitCount = phoneNumber.replace(/\D/g, '').length;

  if (digitCount < 7 || digitCount > 15) {
    supportPhoneInput.setCustomValidity('Enter a phone number with 7 to 15 digits.');
    supportPhoneInput.reportValidity();
    return;
  }

  supportPhoneInput.setCustomValidity('');
  const dialableNumber = phoneNumber.replace(/[^\d+]/g, '');
  generatedCallLink.href = `tel:${dialableNumber}`;
  generatedCallLink.textContent = `Call ${phoneNumber}`;
  generatedCallLink.hidden = false;
  contactStatus.textContent = 'Select the call link to open your device’s phone app.';
});

supportPhoneInput.addEventListener('input', () => {
  supportPhoneInput.setCustomValidity('');
  generatedCallLink.hidden = true;
  contactStatus.textContent = '';
});