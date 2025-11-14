let formInitialized = false;

function ensureVisible(element: HTMLElement | null) {
  if (!element) return;
  element.classList.remove('opacity-0');
  element.style.opacity = '1';
  element.style.transform = 'translateX(0)';
  element.style.visibility = 'visible';
}

function initLeadForm() {
  if (formInitialized) {
    console.log('Form already initialized, skipping...');
    return;
  }

  console.log('Initializing form...');

  const title = document.getElementById('lead-form-title') as HTMLElement | null;
  const subtitle = document.getElementById('lead-form-subtitle') as HTMLElement | null;
  const formCard = document.getElementById('lead-form-card') as HTMLElement | null;
  const benefitsCard = document.getElementById('benefits-card') as HTMLElement | null;
  const benefitItems = document.querySelectorAll<HTMLElement>('.benefit-item');
  const form = document.getElementById('contact-form') as HTMLFormElement | null;

  ensureVisible(title);
  ensureVisible(subtitle);
  ensureVisible(formCard);

  if (benefitsCard) {
    benefitsCard.style.opacity = '1';
    benefitsCard.style.transform = 'translateX(50px)';
    benefitsCard.style.transition = 'transform 0.6s ease';

    setTimeout(() => {
      benefitsCard.style.transform = 'translateX(0)';
    }, 400);
  }

  benefitItems.forEach((item) => {
    item.classList.remove('opacity-0');
    const index = Number(item.dataset.index) || 0;
    const delay = index * 120;

    setTimeout(() => {
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 500 + delay);

    const checkIcon = item.querySelector<HTMLElement>('.check-icon');
    if (checkIcon) {
      item.addEventListener('mouseenter', () => {
        checkIcon.style.transform = 'scale(1.2) rotate(360deg)';
      });
      item.addEventListener('mouseleave', () => {
        checkIcon.style.transform = 'scale(1) rotate(0deg)';
      });
    }
  });

  if (!form) {
    console.error('Form element not found!');
    return;
  }

  console.log('Form found, adding submit listener');

  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      console.log('Submit button clicked');
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('Form submit event triggered');

    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!submitBtn) {
      console.error('Submit button not found');
      return;
    }

    const originalButtonText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    const formLang = form.dataset.lang || 'de';
    const sendingText = formLang === 'de' ? 'Wird gesendet...' : 'Sending...';
    submitBtn.innerHTML = `<span class="relative inline-flex items-center">${sendingText}</span>`;

    const formData = new FormData(form);
    let submissionSucceeded = false;

    try {
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, typeof value === 'string' ? value : String(value));
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      console.log('Form submission response:', response.status, response.statusText);
      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }
      submissionSucceeded = true;
    } catch (error) {
      console.error('Form submission error (non-blocking):', error);
      showStatusMessage(form, 'error');
    }

    if (submissionSucceeded) {
      form.reset();
      showStatusMessage(form, 'success');
    }
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalButtonText;
  });

  formInitialized = true;
  console.log('Form initialization complete');
}

function showStatusMessage(form: HTMLFormElement, variant: 'success' | 'error') {
  const statusId = 'form-status-message';
  let container = document.getElementById(statusId);

  if (!container) {
    container = document.createElement('div');
    container.id = statusId;
    container.className = 'mt-6';
    form.parentElement?.insertBefore(container, form);
  }

  const successTitle = form.dataset.successTitle || '';
  const successMessage = form.dataset.successMessage || '';
  const errorMessage = form.dataset.errorMessage || 'Etwas ist schiefgelaufen. Bitte versuche es erneut.';

  if (variant === 'success') {
    container.className =
      'mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-900 shadow-sm';
    container.innerHTML = `
      <p class="font-semibold mb-1">${successTitle}</p>
      <p>${successMessage}</p>
    `;
  } else {
    container.className =
      'mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900 shadow-sm';
    container.innerHTML = `
      <p class="font-semibold mb-1">${errorMessage}</p>
    `;
  }

  container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function start() {
  try {
    initLeadForm();
  } catch (error) {
    console.error('Error initializing lead form:', error);
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => start(), { once: true });
  } else {
    start();
  }
}

export {};

