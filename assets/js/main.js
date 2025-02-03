(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();

document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.hero-video');
  
  // Ensure video plays and handles autoplay restrictions
  const playVideo = () => {
      video.play().catch(error => {
          console.log('Autoplay was prevented:', error);
      });
  };

  // Try to play on load and after user interaction
  playVideo();
  document.addEventListener('click', playVideo, { once: true });
});

document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.hero-video');
  
  // Existing video functionality
  const playVideo = () => {
      video.play().catch(error => {
          console.log('Autoplay was prevented:', error);
      });
  };
  
  playVideo();
  document.addEventListener('click', playVideo, { once: true });

  // Added Updates Functionality
  const updatesWrapper = document.querySelector('.updates-wrapper');
  
  // Clone update items for seamless scrolling
  const updateItems = document.querySelectorAll('.update-item');
  updateItems.forEach(item => {
      const clone = item.cloneNode(true);
      updatesWrapper.appendChild(clone);
  });

  // Pause animation on hover
  updatesWrapper.addEventListener('mouseenter', () => {
      updatesWrapper.style.animationPlayState = 'paused';
  });

  updatesWrapper.addEventListener('mouseleave', () => {
      updatesWrapper.style.animationPlayState = 'running';
  });
});

// Hidden faculty
document.addEventListener('DOMContentLoaded', function() {
  const moreFaculty = document.getElementById('more-faculty');
  const showMoreBtn = document.getElementById('showMoreBtn');
  let isExpanded = false;

  showMoreBtn.addEventListener('click', function() {
      isExpanded = !isExpanded;
      
      if (isExpanded) {
          moreFaculty.style.display = 'flex';
          showMoreBtn.textContent = 'Show Less';
          
          // Optional: Smooth scroll to newly displayed faculty
          moreFaculty.scrollIntoView({ behavior: 'smooth' });
      } else {
          moreFaculty.style.display = 'none';
          showMoreBtn.textContent = 'Show More Faculty';
          
          // Optional: Scroll back to initial faculty section
          document.getElementById('initial-faculty').scrollIntoView({ behavior: 'smooth' });
      }
  });
});
