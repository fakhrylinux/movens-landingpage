window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  const navbarShrink = function() {
    const navbarCollapsible = document.body.querySelector('header');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }

  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  }

  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true,
  });

  sr.reveal(
      `#introduction, #features, #tokenomics, #roadmap, #partnership, #teams, #mockup`,
      {
        interval: 200,
      });
});

