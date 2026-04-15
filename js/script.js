/* ============================================================
   THE TOY TOWN — script.js
   All interactive behaviour lives here.
   ============================================================ */

/* ── CATEGORY FILTER ────────────────────────────────────────
   When a filter pill is clicked:
   1. Mark it as active (turns yellow)
   2. Show only the matching section, hide the rest
   3. Scroll smoothly to the section
   ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  var pills    = document.querySelectorAll('.filter-pill');
  var sections = document.querySelectorAll('.section[id]');

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {

      /* update active pill */
      pills.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');

      /* show / hide sections */
      sections.forEach(function (sec) {
        sec.style.display = (filter === 'all' || sec.id === filter)
          ? 'block'
          : 'none';
      });

      /* scroll to section */
      if (filter !== 'all') {
        var target = document.getElementById(filter);
        if (target) {
          setTimeout(function () {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

});
