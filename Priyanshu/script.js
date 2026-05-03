(function () {
  // ============================================
  // 1. INITIAL SETUP - FORCE DARK THEME
  // ============================================
  document.body.classList.add('dark-theme');
  
  // ============================================
  // 2. MOBILE MENU FUNCTIONALITY
  // ============================================
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNavContainer = document.querySelector('.mobile-nav-container');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  
  function openMenu() {
    mobileNavContainer.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    mobileNavContainer.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (menuBtn && mobileNavContainer) {
    menuBtn.addEventListener('click', openMenu);
  }
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }
  
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }
  
  // Close menu when clicking on any mobile nav link
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNavContainer && mobileNavContainer.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // ============================================
  // 3. SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    });
  });
  
  // ============================================
  // 4. PURE BLACK THEME FUNCTION
  // ============================================
  function enablePureBlackTheme() {
    // Body
    document.body.style.background = "#000000";
    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "none";
    
    // Header
    const header = document.querySelector('.main-header');
    if(header) header.style.background = "#050505";
    
    // All sections
    const sections = ['.hero-section', '.projects-section', '.skills-section', '.about-section', '.contact-section'];
    sections.forEach(s => {
      const el = document.querySelector(s);
      if(el) el.style.background = "transparent";
    });
    
    // Cards and containers
    const cards = document.querySelectorAll('.project-card, .contact-form, .skill-tags span, .about-stats div, .direct-email, .social-mini a');
    cards.forEach(el => {
      el.style.backgroundColor = "#111111";
      el.style.background = "#111111";
      el.style.borderColor = "#333333";
    });
    
    // All text white
    const texts = document.querySelectorAll('p, h1, h2, h3, .card-link, .nav-links a, .hero-subtitle, .section-header p, .about-text p, .card-body p, .skill-category h3, .logo');
    texts.forEach(el => {
      el.style.color = "#ffffff";
    });
    
    // Special text colors
    const accents = document.querySelectorAll('.accent-text, .gradient-text, .hero-badge, .section-tag');
    accents.forEach(el => {
      el.style.color = "#D4A5A5";
    });
    
    // Gradient text
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(el => {
      el.style.background = "linear-gradient(135deg, #D4A5A5, #C4B4D0)";
      el.style.backgroundClip = "text";
      el.style.webkitBackgroundClip = "text";
      el.style.color = "transparent";
    });
    
    localStorage.setItem('pure-black', 'enabled');
    console.log('✅ Pure Black Theme Activated!');
  }
  
  // ============================================
  // 5. CHANGE PINK COLOR TO BLUE
  // ============================================
  function changeThemeColor() {
    // Accent text
    document.querySelectorAll('.accent-text, .hero-badge, .section-tag').forEach(el => {
      el.style.color = '#3B82F6';
    });
    
    // Button gradients
    const btns = document.querySelectorAll('.btn-primary');
    btns.forEach(btn => {
      btn.style.background = 'linear-gradient(105deg, #3B82F6, #8B5CF6)';
    });
    
    // Gradient text to blue
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(el => {
      el.style.background = "linear-gradient(135deg, #3B82F6, #8B5CF6)";
      el.style.backgroundClip = "text";
      el.style.webkitBackgroundClip = "text";
      el.style.color = "transparent";
    });
    
    // Hover effects
    const style = document.createElement('style');
    style.textContent = `
      .nav-links a:hover { color: #3B82F6 !important; }
      .skill-tags span:hover { background: #3B82F6 !important; color: white !important; }
      .card-link:hover { background: #3B82F6 !important; color: white !important; }
      .social-mini a:hover { background: #3B82F6 !important; color: white !important; }
      .mobile-nav-links a:hover { color: #3B82F6 !important; }
      .close-menu-btn:hover { background: #3B82F6 !important; }
      .btn-primary:hover { background: linear-gradient(105deg, #2563EB, #7C3AED) !important; }
    `;
    document.head.appendChild(style);
  }
  
  // ============================================
  // 6. FIXED NAVBAR
  // ============================================
  function fixNavbar() {
    const navbar = document.querySelector('.main-header');
    if(navbar) {
      navbar.style.position = 'fixed';
      navbar.style.top = '0';
      navbar.style.left = '0';
      navbar.style.width = '100%';
      navbar.style.zIndex = '1000';
      navbar.style.transition = 'all 0.3s ease';
      
      // Add padding to body
      document.body.style.paddingTop = navbar.offsetHeight + 'px';
      
      // Change navbar style on scroll
      window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
          navbar.style.background = 'rgba(5, 5, 5, 0.98)';
          navbar.style.backdropFilter = 'blur(12px)';
        } else {
          navbar.style.background = '#050505';
          navbar.style.backdropFilter = 'none';
        }
      });
    }
  }
  
  // ============================================
  // 7. PURE BLACK TOGGLE BUTTON
  // ============================================
  function addBlackThemeButton() {
    // Check if button already exists
    if(document.getElementById('pureBlackBtn')) return;
    
    const blackThemeBtn = document.createElement('button');
    blackThemeBtn.id = 'pureBlackBtn';
    blackThemeBtn.innerHTML = '🌙 Pure Black';
    blackThemeBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background: #333;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
      font-family: inherit;
      font-size: 14px;
    `;
    
    blackThemeBtn.addEventListener('mouseenter', () => {
      blackThemeBtn.style.transform = 'scale(1.05)';
      blackThemeBtn.style.background = '#3B82F6';
    });
    
    blackThemeBtn.addEventListener('mouseleave', () => {
      blackThemeBtn.style.transform = 'scale(1)';
      blackThemeBtn.style.background = '#333';
    });
    
    blackThemeBtn.addEventListener('click', () => {
      enablePureBlackTheme();
      blackThemeBtn.innerHTML = '✅ Applied!';
      setTimeout(() => {
        blackThemeBtn.innerHTML = '🌙 Pure Black';
      }, 2000);
    });
    
    document.body.appendChild(blackThemeBtn);
  }
  
  // ============================================
  // 8. WHITE THEME TOGGLE BUTTON (OPTIONAL)
  // ============================================
  function addWhiteThemeButton() {
    if(document.getElementById('whiteThemeBtn')) return;
    
    const whiteThemeBtn = document.createElement('button');
    whiteThemeBtn.id = 'whiteThemeBtn';
    whiteThemeBtn.innerHTML = '☀️ White Theme';
    whiteThemeBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 9999;
      background: #fff;
      color: #333;
      border: none;
      padding: 12px 20px;
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      font-family: inherit;
      font-size: 14px;
    `;
    
    whiteThemeBtn.addEventListener('mouseenter', () => {
      whiteThemeBtn.style.transform = 'scale(1.05)';
      whiteThemeBtn.style.background = '#f0f0f0';
    });
    
    whiteThemeBtn.addEventListener('mouseleave', () => {
      whiteThemeBtn.style.transform = 'scale(1)';
      whiteThemeBtn.style.background = '#fff';
    });
    
    whiteThemeBtn.addEventListener('click', () => {
      // Reset to default dark theme
      document.body.style.background = "";
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      
      document.querySelectorAll('.project-card, .contact-form, .skill-tags span, .about-stats div, .direct-email, .social-mini a').forEach(el => {
        el.style.backgroundColor = "";
        el.style.background = "";
        el.style.borderColor = "";
      });
      
      document.querySelectorAll('p, h1, h2, h3, .card-link, .nav-links a, .hero-subtitle, .section-header p, .about-text p, .card-body p, .skill-category h3, .logo').forEach(el => {
        el.style.color = "";
      });
      
      localStorage.removeItem('pure-black');
      whiteThemeBtn.innerHTML = '✅ Applied!';
      setTimeout(() => {
        whiteThemeBtn.innerHTML = '☀️ White Theme';
      }, 2000);
    });
    
    document.body.appendChild(whiteThemeBtn);
  }
  
  // ============================================
  // 9. BUTTER SMOOTH ANIMATIONS
  // ============================================
  function addSmoothAnimations() {
    // Ripple effect for buttons
    function createRipple(event) {
      const button = event.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        top: ${y}px;
        left: ${x}px;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleAnim 0.6s ease-out;
        pointer-events: none;
      `;
      
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    }
    
    // Add ripple style
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
      @keyframes rippleAnim {
        0% { transform: scale(0); opacity: 0.5; }
        100% { transform: scale(4); opacity: 0; }
      }
      .btn, .card-link, .mobile-menu-btn, .close-menu-btn {
        transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1) !important;
      }
      .btn:active, .card-link:active {
        transform: scale(0.96) !important;
      }
    `;
    document.head.appendChild(rippleStyle);
    
    // Add ripple to buttons
    document.querySelectorAll('.btn, .card-link, .close-menu-btn, .mobile-menu-btn').forEach(btn => {
      btn.addEventListener('click', createRipple);
    });
    
    // Fade-in on scroll
    const fadeElements = document.querySelectorAll('.project-card, .skill-category, .about-grid, .contact-grid, .hero-content');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(30px)';
          entry.target.style.transition = 'all 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
          
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));
  }
  
  // ============================================
  // 10. EXECUTE ALL FUNCTIONS
  // ============================================
  enablePureBlackTheme();
  changeThemeColor();
  fixNavbar();
  addBlackThemeButton();
  // addWhiteThemeButton();  // Uncomment if you want white theme button
  addSmoothAnimations();
  
  console.log('🎉 All features loaded successfully!');
  console.log('✅ Pure Black Theme Active');
  console.log('✅ Blue Color Theme Active');
  console.log('✅ Fixed Navbar Active');
  console.log('✅ Smooth Animations Active');
  
})();