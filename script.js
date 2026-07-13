// ==========================================
// Courses Mock Database & Info
// ==========================================

const COURSES_DATA = [
  {
    id: 1,
    name: "Java Full Stack Development",
    category: "Full Stack",
    duration: "6 Months",
    level: "Beginner to Advanced",
    modules: "18 Modules",
    projects: "12+ Projects",
    certification: "Industry Certified",
    rating: 4.8,
    reviews: 1420,
    desc: "Master Core & Advanced Java, Spring Boot, Hibernate, REST APIs, SQL, and React frontend structures. Includes dedicated mock interviews and placement drives."
  },
  {
    id: 2,
    name: "Python Full Stack Bootcamp",
    category: "Full Stack",
    duration: "6 Months",
    level: "Beginner to Advanced",
    modules: "16 Modules",
    projects: "10+ Projects",
    certification: "Industry Certified",
    rating: 4.7,
    reviews: 980,
    desc: "Build strong programming foundations in Python. Master Django, Flask, PostgreSQL, Docker, and frontend web development. Create scalable enterprise products."
  },
  {
    id: 3,
    name: "Data Analytics Program",
    category: "Data Science",
    duration: "4 Months",
    level: "Intermediate",
    modules: "12 Modules",
    projects: "8+ Projects",
    certification: "Hiring Approved",
    rating: 4.9,
    reviews: 2150,
    desc: "Learn data models, data wrangling, SQL databases, Excel, Tableau dashboards, and Python libraries like NumPy and Pandas to extract business insights."
  },
  {
    id: 4,
    name: "UI/UX Design Masterclass",
    category: "Designing",
    duration: "3 Months",
    level: "Beginner Friendly",
    modules: "10 Modules",
    projects: "6+ Case Studies",
    certification: "Portfolio Approved",
    rating: 4.6,
    reviews: 670,
    desc: "Learn modern user experience methodologies, wireframing, high-fidelity UI design prototyping in Figma, visual hierarchy, user testing, and portfolio reviews."
  },
  {
    id: 5,
    name: "Cloud Computing Bootcamp",
    category: "Web Development",
    duration: "5 Months",
    level: "Intermediate",
    modules: "14 Modules",
    projects: "7+ Projects",
    certification: "AWS & Azure Certified",
    rating: 4.8,
    reviews: 1120,
    desc: "Learn virtualization, cloud architecture, and serverless computing. Get hands-on with AWS, Azure, CI/CD pipelines, Kubernetes orchestration, and devops practices."
  },
  {
    id: 6,
    name: "AI & ML Foundations",
    category: "Data Science",
    duration: "6 Months",
    level: "Advanced",
    modules: "20 Modules",
    projects: "9+ Projects",
    certification: "Industry Certified",
    rating: 4.9,
    reviews: 1840,
    desc: "Master linear regression, neural networks, deep learning algorithms, computer vision, and natural language processing. Deploy real machine learning models."
  }
];

// ==========================================
// 1. Dynamic Course Banner SVG Generator
// ==========================================
function getCourseSVG(category, name) {
  let bgColor = '#eff6ff';
  let strokeColor = '#2563eb';
  let patternText = 'CODE';
  
  if (category === 'Full Stack') {
    bgColor = '#eff6ff';
    strokeColor = '#2563eb';
  } else if (category === 'Data Science') {
    bgColor = '#ecfdf5';
    strokeColor = '#16a34a';
  } else if (category === 'Web Development') {
    bgColor = '#fff7ed';
    strokeColor = '#ea580c';
  } else if (category === 'Designing') {
    bgColor = '#faf5ff';
    strokeColor = '#7c3aed';
  }

  // Set precise label text based on name keywords
  const upperName = name.toUpperCase();
  if (upperName.includes('JAVA')) {
    patternText = 'JAVA';
  } else if (upperName.includes('PYTHON')) {
    patternText = 'PYTHON';
    bgColor = '#f0f9ff';
    strokeColor = '#0284c7';
  } else if (upperName.includes('DATA')) {
    patternText = 'DATA';
  } else if (upperName.includes('UI/UX')) {
    patternText = 'UI/UX';
  } else if (upperName.includes('CLOUD')) {
    patternText = 'CLOUD';
    bgColor = '#ecfeff';
    strokeColor = '#0891b2';
  } else if (upperName.includes('AI') || upperName.includes('ML')) {
    patternText = 'AI/ML';
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" width="100%" height="100%">` +
              `<rect width="100%" height="100%" fill="${bgColor}"/>` +
              `<circle cx="260" cy="60" r="80" fill="none" stroke="${strokeColor}" stroke-width="1.5" opacity="0.15"/>` +
              `<circle cx="260" cy="60" r="50" fill="none" stroke="${strokeColor}" stroke-width="1" stroke-dasharray="4 4" opacity="0.25"/>` +
              `<text x="30" y="70" font-family="'Outfit', sans-serif" font-weight="800" font-size="28" fill="${strokeColor}">${patternText}</text>` +
              `<line x1="30" y1="85" x2="110" y2="85" stroke="${strokeColor}" stroke-width="3" stroke-linecap="round"/>` +
              `</svg>`;
              
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// ==========================================
// 2. Global Navigation Menu Drawer
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  renderCoursesGrid('All');
  setupTabs();
  animateCounters();
  setupReviewsCarousel();
  setupFaqAccordion();
  setupApplyForm();
  setupScrollAnimations();
  setupInteractiveWidgets();
});

function setupNavbar() {
  const hamburger = document.querySelector('.mobile-hamburger');
  const drawer = document.querySelector('.mobile-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('active');
      hamburger.classList.toggle('open');
      drawer.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', !isOpen);
      drawer.setAttribute('aria-hidden', isOpen);
    });

    const drawerLinks = drawer.querySelectorAll('.mobile-drawer-link');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Scroll Progress Bar
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }, { passive: true });
  }

  // Active Navbar links Scrollspy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  if (sections.length > 0 && navLinks.length > 0) {
    const scrollSpyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.15, rootMargin: '-10% 0px -60% 0px' });
    sections.forEach(section => scrollSpyObserver.observe(section));
  }
}

// ==========================================
// 3. Courses Tab Rendering & Filters
// ==========================================
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-tab');
      renderCoursesGrid(cat);
    });
  });
}

function renderCoursesGrid(categoryFilter) {
  const grid = document.querySelector('.courses-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = COURSES_DATA.filter(c => categoryFilter === 'All' || c.category === categoryFilter);

  filtered.forEach(course => {
    const card = document.createElement('article');
    card.className = 'course-card';

    card.innerHTML = `
      <div class="course-banner-svg">
        <img src="${getCourseSVG(course.category, course.name)}" alt="${course.name} Course Banner" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="course-info">
        <div class="course-badges-row">
          <span class="course-tag-badge">${course.category}</span>
          <span class="course-cert-badge">${course.certification}</span>
        </div>
        <h3 class="course-title">${course.name}</h3>
        
        <div class="course-meta-row">
          <span class="course-rating">★ ${course.rating} (${course.reviews} reviews)</span>
          <span class="course-duration">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${course.duration}
          </span>
        </div>
        
        <p class="course-desc">${course.desc}</p>

        <div class="course-details-list">
          <div class="course-detail-item">
            <svg class="detail-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path></svg>
            <span>Level: ${course.level}</span>
          </div>
          <div class="course-detail-item">
            <svg class="detail-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            <span>Syllabus: ${course.modules}</span>
          </div>
          <div class="course-detail-item">
            <svg class="detail-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Hands-on: ${course.projects}</span>
          </div>
        </div>
        
        <div class="course-actions">
          <a href="#apply" class="btn btn-primary btn-course apply-trigger" data-course="${course.name}">Enroll Now</a>
        </div>
      </div>
    `;

    // Bind click trigger to scroll and pre-select course in the contact form dropdown
    card.querySelector('.apply-trigger').addEventListener('click', (e) => {
      const selectBox = document.getElementById('form-course');
      if (selectBox) {
        selectBox.value = course.name;
        // Trigger event for floating placeholder repositioning if needed
      }
    });

    grid.appendChild(card);
  });
}

// ==========================================
// 4. Placement Statistics Dynamic Counter
// ==========================================
function animateCounters() {
  const statValues = document.querySelectorAll('.stat-val');
  
  function startCounting(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const speed = 80; // lower is faster
    let current = 0;
    const increment = target / speed;

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + (el.getAttribute('data-suffix') || '');
        clearInterval(counter);
      } else {
        el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
      }
    }, 15);
  }

  // Use simple IntersectionObserver to fire animations on scroll
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting(entry.target);
          obs.unobserve(entry.target); // stop observing once triggered
        }
      });
    }, { threshold: 0.25 });

    statValues.forEach(val => observer.observe(val));
  } else {
    // Fallback: run immediately
    statValues.forEach(val => startCounting(val));
  }
}

// ==========================================
// 5. Placed Freshers Success Carousel
// ==========================================
function setupReviewsCarousel() {
  const reviews = [
    {
      text: '"Coming from a non-CS engineering background, I was terrified of coding. SkillTap Academy Full Stack trainers taught me from the absolute basics, and within 6 months, I cracked a placement drive at Wipro!"',
      author: 'Ramesh Sen',
      placement: 'Placed at Wipro as Software Engineer (6.5 LPA)',
      avatar: 'RS'
    },
    {
      text: '"The Python Data Science course is extremely rigorous. Working on real-world datasets and taking SQL assessments prepared me perfectly for my tech interviews. Placed at TCS Digital!"',
      author: 'Anjali Deshmukh',
      placement: 'Placed at TCS Digital as Data Analyst (7.2 LPA)',
      avatar: 'AD'
    },
    {
      text: '"Bite-sized micro projects and mock interview panels helped me build confidence. The career drives provided unlimited interview opportunities. Placed at Cognizant!"',
      author: 'Rohit Sharma',
      placement: 'Placed at Cognizant as Frontend Developer (4.8 LPA)',
      avatar: 'RS'
    }
  ];

  let idx = 0;
  const textEl = document.querySelector('.review-text');
  const authorEl = document.querySelector('.review-author');
  const placementEl = document.querySelector('.review-placement');
  const avatarEl = document.querySelector('.review-avatar');

  function renderReview(i) {
    if (!textEl || !authorEl || !placementEl) return;
    
    const wrapper = document.querySelector('.reviews-carousel');
    if (wrapper) {
      wrapper.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      wrapper.style.opacity = '0';
      wrapper.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        textEl.textContent = reviews[i].text;
        authorEl.textContent = reviews[i].author;
        placementEl.textContent = reviews[i].placement;
        if (avatarEl) avatarEl.textContent = reviews[i].avatar;
        
        wrapper.style.transform = 'translateY(0)';
        wrapper.style.opacity = '1';
      }, 200);
    }
  }

  setInterval(() => {
    idx = (idx + 1) % reviews.length;
    renderReview(idx);
  }, 6000);

  renderReview(0); // initial render
}

// ==========================================
// 6. FAQ Accordion Logic
// ==========================================
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-body').style.maxHeight = '0px';
      });

      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = `${body.scrollHeight}px`;
      }
    });
  });
}

// ==========================================
// 7. Apply Admission Form Validation
// ==========================================
function setupApplyForm() {
  const form = document.getElementById('apply-form');
  const successCard = document.getElementById('apply-success');

  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById('form-name'),
      error: document.getElementById('name-error'),
      validate: (val) => val.trim().length > 0 ? '' : 'Student full name is required.'
    },
    email: {
      input: document.getElementById('form-email'),
      error: document.getElementById('email-error'),
      validate: (val) => {
        if (!val.trim()) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val) ? '' : 'Please enter a valid email address.';
      }
    },
    phone: {
      input: document.getElementById('form-phone'),
      error: document.getElementById('phone-error'),
      validate: (val) => {
        if (!val.trim()) return 'Mobile phone number is required.';
        const phoneRegex = /^[6-9]\d{9}$/;
        return phoneRegex.test(val.trim()) ? '' : 'Please enter a valid 10-digit mobile number.';
      }
    },
    college: {
      input: document.getElementById('form-college'),
      error: document.getElementById('college-error'),
      validate: (val) => val.trim().length > 0 ? '' : 'College / University Name is required.'
    },
    course: {
      input: document.getElementById('form-course'),
      error: document.getElementById('course-error'),
      validate: (val) => val ? '' : 'Please select your preferred cohort program.'
    },
    gradyear: {
      input: document.getElementById('form-gradyear'),
      error: document.getElementById('gradyear-error'),
      validate: (val) => val ? '' : 'Please select your graduation year.'
    },
    timing: {
      input: document.getElementById('form-timing'),
      error: document.getElementById('timing-error'),
      validate: (val) => val ? '' : 'Please select cohort preferred timing.'
    }
  };

  function validateField(name) {
    const field = fields[name];
    const errMsg = field.validate(field.input.value);

    if (errMsg) {
      field.error.textContent = errMsg;
      field.input.classList.add('input-error');
      return false;
    } else {
      field.error.textContent = '';
      field.input.classList.remove('input-error');
      return true;
    }
  }

  Object.keys(fields).forEach(key => {
    fields[key].input.addEventListener('input', () => {
      if (fields[key].input.classList.contains('input-error')) {
        validateField(key);
      }
    });

    fields[key].input.addEventListener('blur', () => {
      validateField(key);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    Object.keys(fields).forEach(key => {
      const isFieldValid = validateField(key);
      if (!isFieldValid) isValid = false;
    });

    if (!isValid) return;

    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting Application...';

    setTimeout(() => {
      form.style.display = 'none';
      if (successCard) {
        successCard.style.display = 'flex';
        successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 1000);
  });
}

// ==========================================
// 8. Observer for Staggered Fade Entrance
// ==========================================
function setupScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }
}

// ==========================================
// 9. Interactive Features & Dashboard Switchers
// ==========================================
function setupInteractiveWidgets() {
  // 1. Hero Terminal Tab switcher (Java / Python)
  const tabs = document.querySelectorAll('.terminal-tab');
  const codeBody = document.getElementById('hero-terminal-body');
  const runtime = document.getElementById('hero-test-runtime');
  
  const javaCode = `<pre><code><span class="keyword">class</span> <span class="cls">Solution</span> {
    <span class="keyword">public int</span>[] twoSum(<span class="keyword">int</span>[] nums, <span class="keyword">int</span> target) {
        <span class="cls">Map</span>&lt;<span class="cls">Integer</span>, <span class="cls">Integer</span>&gt; map = <span class="keyword">new</span> <span class="cls">HashMap</span>&lt;&gt;();
        <span class="keyword">for</span> (<span class="keyword">int</span> i = 0; i &lt; nums.length; i++) {
            <span class="keyword">int</span> diff = target - nums[i];
            <span class="keyword">if</span> (map.containsKey(diff)) {
                <span class="keyword">return new int</span>[] { map.get(diff), i };
            }
            map.put(nums[i], i);
        }
        <span class="keyword">return new int</span>[] {};
    }
}<span class="blinking-cursor">|</span></code></pre>`;

  const pythonCode = `<pre><code><span class="keyword">class</span> <span class="cls">Solution</span>:
    <span class="keyword">def</span> <span class="cls">twoSum</span>(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        <span class="keyword">for</span> i, num <span class="keyword">in</span> enumerate(nums):
            diff = target - num
            <span class="keyword">if</span> diff <span class="keyword">in</span> seen:
                <span class="keyword">return</span> [seen[diff], i]
            seen[num] = i
        <span class="keyword">return</span> []<span class="blinking-cursor">|</span></code></pre>`;

  if (tabs.length > 0 && codeBody) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');
        const lang = tab.getAttribute('data-lang');
        
        if (lang === 'python') {
          codeBody.innerHTML = pythonCode;
          if (runtime) runtime.textContent = 'Runtime: 12ms';
        } else {
          codeBody.innerHTML = javaCode;
          if (runtime) runtime.textContent = 'Runtime: 1ms';
        }
      });
      
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          tab.click();
        }
      });
    });
  }

  // 2. Interactive Resume Optimize Button (ATS Scorecard recalculation)
  const optimizeBtn = document.getElementById('sug-optimize-btn');
  const scoreText = document.getElementById('ats-score-text');
  const matchText = document.getElementById('ats-match-text');
  const progressFill = document.querySelector('.ats-progress-fill');
  
  if (optimizeBtn) {
    optimizeBtn.addEventListener('click', () => {
      if (optimizeBtn.classList.contains('optimized')) return;
      
      optimizeBtn.classList.add('optimized');
      optimizeBtn.classList.remove('warning');
      optimizeBtn.classList.add('success');
      
      // Toggle SVGs
      const boltSvg = optimizeBtn.querySelector('.bolt-svg');
      const checkSvg = optimizeBtn.querySelector('.check-svg');
      if (boltSvg) boltSvg.style.display = 'none';
      if (checkSvg) checkSvg.style.display = 'inline-block';
      
      optimizeBtn.querySelector('.btn-text').textContent = 'AWS & Docker optimized';
      
      if (scoreText) scoreText.innerHTML = '95<span class="pct">%</span>';
      if (matchText) matchText.textContent = '98% Keyword Match with Cloud SDE Roles';
      if (progressFill) {
        progressFill.style.strokeDashoffset = '10.7';
      }
    });

    optimizeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        optimizeBtn.click();
      }
    });
  }
}
