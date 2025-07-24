document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navUl = document.querySelector('header nav ul');

  if (navbarToggle && navUl) {
    navbarToggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
      navbarToggle.querySelector('i').classList.toggle('fa-bars');
      navbarToggle.querySelector('i').classList.toggle('fa-times');
    });

    document.querySelectorAll('header nav ul li a').forEach(link => {
      link.addEventListener('click', () => {
        navUl.classList.remove('open');
        navbarToggle.querySelector('i').classList.add('fa-bars');
        navbarToggle.querySelector('i').classList.remove('fa-times');
      });
    });
  }

  // Slideshow for hero section
  const slideshow = document.querySelector('.hero .slideshow');
  if (slideshow) {
    const images = [
      'https://via.placeholder.com/1200x600?text=Data+Science+Lab',
      'https://via.placeholder.com/1200x600?text=Statistics+Research',
      'https://via.placeholder.com/1200x600?text=Campus+Innovation'
    ];
    let currentImage = 0;

    const changeImage = () => {
      slideshow.style.backgroundImage = `url(${images[currentImage]})`;
      currentImage = (currentImage + 1) % images.length;
    };

    changeImage();
    setInterval(changeImage, 5000);
  }

  // Program filters
  const programFilterButtons = document.querySelectorAll('.program-filters button');
  programFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      const cards = document.querySelectorAll('.program-card');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
      programFilterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Research filters
  const researchFilterButtons = document.querySelectorAll('.research-filters button');
  researchFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      const cards = document.querySelectorAll('.research-card');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
      researchFilterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Technology filters
  const techFilterButtons = document.querySelectorAll('.tech-filters button');
  techFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      const cards = document.querySelectorAll('.tech-card');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
      techFilterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Event calendar
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Python for Data Science: Live Coding Webinar', date: '2025-11-15', url: '#', speaker: 'Kepha Cherop' },
        { title: 'Statistics Conference 2025: Data-Driven Africa', date: '2025-12-05', url: '#', speaker: 'Turyamuhaki Noel' },
        { title: 'Hands-On Machine Learning with Python Workshop', date: '2026-01-10', url: '#', speaker: 'Kepha Cherop' },
        { title: 'Data Visualization Masterclass', date: '2026-02-20', url: '#', speaker: 'Jumba Fahad' }
      ],
      eventClick: function(info) {
        if (info.event.url) {
          window.location.href = info.event.url;
        }
      },
      eventContent: function(info) {
        return {
          html: `
            <div class="fc-event-main">
              <strong>${info.event.title}</strong><br>
              <span>Speaker: ${info.event.extendedProps.speaker}</span>
            </div>
          `
        };
      }
    });
    calendar.render();
  }

  // Contact form validation
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const formMessage = document.querySelector('#form-message');

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.classList.add('error');
        return;
      }
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        return;
      }
      formMessage.textContent = 'Thank you! Your message has been sent.';
      formMessage.classList.remove('error');
      contactForm.reset();
    });
  }

  // Student portal login form validation
  const loginForm = document.querySelector('#login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = loginForm.querySelector('#username').value.trim();
      const password = loginForm.querySelector('#password').value.trim();
      const loginMessage = document.querySelector('#login-message');

      if (!username || !password) {
        loginMessage.textContent = 'Please fill in both username and password.';
        loginMessage.classList.add('error');
        return;
      }
      if (password.length < 6) {
        loginMessage.textContent = 'Password must be at least 6 characters long.';
        loginMessage.classList.add('error');
        return;
      }
      loginMessage.textContent = 'Login successful! Redirecting...';
      loginMessage.classList.remove('error');
      loginMessage.classList.add('success');
      loginForm.reset();
      setTimeout(() => {
        loginMessage.textContent = '';
      }, 2000);
    });
  }

  // Forgot password form validation
  const forgotPasswordForm = document.querySelector('#forgot-password-form');
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = forgotPasswordForm.querySelector('#recovery-email').value.trim();
      const message = forgotPasswordForm.querySelector('#recovery-message').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const recoveryMessage = document.querySelector('#recovery-message');

      if (!email) {
        recoveryMessage.textContent = 'Please enter your email address.';
        recoveryMessage.classList.add('error');
        return;
      }
      if (!emailRegex.test(email)) {
        recoveryMessage.textContent = 'Please enter a valid email address.';
        recoveryMessage.classList.add('error');
        return;
      }
      recoveryMessage.textContent = 'Your request has been submitted. We will contact you soon.';
      recoveryMessage.classList.remove('error');
      recoveryMessage.classList.add('success');
      forgotPasswordForm.reset();
      setTimeout(() => {
        recoveryMessage.textContent = '';
      }, 3000);
    });
  }

  // Password toggle for student portal
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
      const input = button.previousElementSibling;
      input.type = input.type === 'password' ? 'text' : 'password';
      button.querySelector('i').classList.toggle('fa-eye');
      button.querySelector('i').classList.toggle('fa-eye-slash');
    });
  });

  // Blog post loading
  const loadMoreButton = document.querySelector('#loadMore');
  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
      const hiddenPosts = document.querySelectorAll('.post-preview.hidden');
      const postsToShow = Array.from(hiddenPosts).slice(0, 2);
      if (postsToShow.length > 0) {
        postsToShow.forEach(post => {
          post.classList.remove('hidden');
          post.style.display = 'block';
        });
      }
      if (document.querySelectorAll('.post-preview.hidden').length === 0) {
        loadMoreButton.disabled = true;
        loadMoreButton.textContent = 'No More Posts';
      }
    });
  }
});