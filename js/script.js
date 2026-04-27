// ── BUILD CARDS ─────────────────────────────────────────────────────────────

function buildCards() {
  const sections = {
    rc:       document.querySelector('#rc .grid'),
    edu:      document.querySelector('#edu .grid'),
    fun:      document.querySelector('#fun .grid'),
    creative: document.querySelector('#creative .grid'),
  };

  products.forEach(p => {
    const grid = sections[p.category];
    if (!grid) return;

    const waText = encodeURIComponent(`Hi, I want to order: ${p.name} (${p.price})`);
    const waLink = `https://wa.me/923234450735?text=${waText}`;

    const hasMultiple = p.images.length > 1;

    // Build image slides
    const slides = p.images.map((img, i) =>
      `<div class="slide${i === 0 ? ' active' : ''}">
        <img src="images/${img}" alt="${p.name}" loading="lazy" />
      </div>`
    ).join('');

    // Build dots (only if multiple images)
    const dots = hasMultiple
      ? `<div class="carousel-dots">
          ${p.images.map((_, i) =>
            `<span class="dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`
          ).join('')}
        </div>`
      : '';

    const badge = p.badge ? `<span class="badge">${p.badge}</span>` : '';

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img-wrap${hasMultiple ? ' carousel' : ''}" data-current="0">
        ${slides}
        ${dots}
      </div>
      <div class="card-body">
        <div class="card-name">${p.name} ${badge}</div>
        <div class="card-price">${p.price}</div>
        <a class="order-btn" href="${waLink}" target="_blank" rel="noopener">Order Now</a>
      </div>`;

    grid.appendChild(card);
  });

  initCarousels();
}

// ── CAROUSEL ─────────────────────────────────────────────────────────────────

function initCarousels() {
  document.querySelectorAll('.carousel').forEach(wrap => {
    const slides = wrap.querySelectorAll('.slide');
    const dots   = wrap.querySelectorAll('.dot');
    if (slides.length < 2) return;

    function goTo(index) {
      const current = parseInt(wrap.dataset.current);
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      wrap.dataset.current = index;
    }

    // Dot clicks
    dots.forEach(dot => {
      dot.addEventListener('click', e => {
        e.preventDefault();
        goTo(parseInt(dot.dataset.index));
      });
    });

    // Swipe support
    let startX = 0;
    wrap.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      const total = slides.length;
      const current = parseInt(wrap.dataset.current);
      if (diff > 40)       goTo((current + 1) % total);
      else if (diff < -40) goTo((current - 1 + total) % total);
    });

    // Click to advance
    wrap.addEventListener('click', () => {
      const total = slides.length;
      const current = parseInt(wrap.dataset.current);
      goTo((current + 1) % total);
    });
  });
}

// ── FILTER PILLS ─────────────────────────────────────────────────────────────

function initFilters() {
  const pills    = document.querySelectorAll('.filter-pill');
  const sections = document.querySelectorAll('.section');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;

      sections.forEach(sec => {
        if (filter === 'all' || sec.id === filter) {
          sec.style.display = '';
          if (filter !== 'all') {
            setTimeout(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
          }
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  buildCards();
  initFilters();
});
