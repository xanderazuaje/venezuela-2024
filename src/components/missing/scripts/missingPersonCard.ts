// MissingCard.astro scripts
function setupSliders() {
  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const container = slider as HTMLElement;
    const prevBtn = slider.parentElement?.querySelector('.slider-prev');
    const nextBtn = slider.parentElement?.querySelector('.slider-next');
    const slides = Array.from(container.children);
    let currentIndex = 0;

    function showSlide(index: number) {
      if (container instanceof HTMLElement) {
        container.scrollTo({
          left: index * container.offsetWidth,
          behavior: 'smooth'
        });
      }
    }

    prevBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });

    nextBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  });
}

function setupMoreInfoButtons() {
  document.querySelectorAll('[data-info-btn]').forEach((btn) => {
    const id = btn.getAttribute('data-info-btn');
    const moreInfo = document.querySelector(`[data-info="${id}"]`)

    btn.addEventListener('click', () => {
      moreInfo?.classList.toggle('hidden');
      btn.textContent = moreInfo?.classList.contains('hidden') ? 'Más información' : 'Menos información';
    });
  });
}

export function initializeComponents() {
  setupSliders();
  setupMoreInfoButtons();
}