/* 
  'SEOUL MEETS CEBU' - Cinematic Travel Interactions
*/

document.addEventListener('DOMContentLoaded', () => {
  // Simple Reveal Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.program-card, .hero-content, .inspire-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = '1s ease-out';
    observer.observe(el);
  });

  // Vertical Indicator Sync
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const indicators = document.querySelectorAll('.vertical-indicators span');
    
    if (scroll < 500) {
      updateActive(2); // 03 is active in hero
    } else if (scroll < 1200) {
      updateActive(3); // 04
    } else {
      updateActive(4); // 05
    }

    function updateActive(index) {
      indicators.forEach((s, i) => {
        if (i === index) s.classList.add('active');
        else s.classList.remove('active');
      });
    }
  });

  console.log('Cinematic travel experience loaded.');
});
