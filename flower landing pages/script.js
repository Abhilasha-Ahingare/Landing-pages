// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navIcons = document.querySelector('.nav-icons');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle mobile menu
            navLinks.classList.toggle('mobile-active');
            navIcons.classList.toggle('mobile-active');
            
            // Change hamburger icon
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Initial check for elements in viewport on page load
    checkFadeElements();
    
    // Check for elements on scroll
    window.addEventListener('scroll', checkFadeElements);
    
    function checkFadeElements() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                // Simulating form submission
                const submitButton = this.querySelector('button');
                const originalText = submitButton.textContent;
                
                submitButton.disabled = true;
                submitButton.textContent = 'Subscribing...';
                
                // Simulate API call delay
                setTimeout(() => {
                    emailInput.value = '';
                    submitButton.textContent = 'Subscribed!';
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                    }, 2000);
                }, 1500);
            }
        });
    }
    
    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Add mobile styles for menu
    const styles = `
        @media (max-width: 768px) {
            .nav-links.mobile-active, 
            .nav-icons.mobile-active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background-color: #fff;
                padding: 20px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                z-index: 100;
            }
            
            .nav-links.mobile-active li {
                margin: 10px 0;
            }
            
            .nav-icons.mobile-active {
                top: auto;
                padding-top: 0;
            }
            
            .nav-icons.mobile-active a {
                margin: 10px 0;
            }
        }
    `;
    
    // Append styles to head
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    // Image hover effect for product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
    
    // Animate numbers when they come into view (for any stats or counters)
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        counter.innerText = '0';
        
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;
            
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        // Start animation when element comes into view
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(counter);
    });
    
    // Smooth transitions between sections
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            header.style.transition = 'box-shadow 0.3s ease';
        } else {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        }
    });
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (current && item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Add lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    img.setAttribute('src', src);
                    img.classList.add('fade-in');
                    
                    observer.disconnect();
                }
            });
        });
        
        io.observe(target);
    };
    
    lazyImages.forEach(lazyLoad);
    
    // Add smooth animations for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Back to top button functionality
    const createBackToTopButton = () => {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top';
        document.body.appendChild(backToTopBtn);
        
        const btnStyles = `
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--primary-color);
                color: white;
                border: none;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                box-shadow: 0 3px 10px rgba(0,0,0,0.2);
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
                z-index: 100;
            }
            
            .back-to-top.active {
                opacity: 1;
                transform: translateY(0);
            }
            
            .back-to-top:hover {
                background-color: var(--btn-hover);
            }
            
            @media (max-width: 768px) {
                .back-to-top {
                    width: 40px;
                    height: 40px;
                    font-size: 1rem;
                    bottom: 20px;
                    right: 20px;
                }
            }
        `;
        
        const btnStyleSheet = document.createElement('style');
        btnStyleSheet.type = 'text/css';
        btnStyleSheet.innerText = btnStyles;
        document.head.appendChild(btnStyleSheet);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    createBackToTopButton();
});