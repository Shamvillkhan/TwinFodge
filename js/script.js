
        // Mobile menu toggle
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navLinks').classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });

        // Animate progress bars on scroll
        const progressBars = document.querySelectorAll('.progress-fill');
        const skillsSection = document.querySelector('.skills');
        
        function checkProgressBars() {
            if (!skillsSection) return;
            
            const sectionTop = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.transition = 'width 1s ease';
                    bar.style.width = width;
                });
                window.removeEventListener('scroll', checkProgressBars);
            }
        }
        
        window.addEventListener('scroll', checkProgressBars);
        checkProgressBars();

        // ===== FIXED NAVBAR SCROLL LOGIC =====
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const heroSection = document.getElementById('home');
            
            if (!navbar || !heroSection) return;
            
            // Get the height of hero section
            const heroHeight = heroSection.offsetHeight;
            
            // Get current scroll position
            const scrollPosition = window.scrollY;
            
            // Debug - remove after testing
            console.log('Scroll:', scrollPosition, 'Hero Height:', heroHeight);
            
            // If scrolled past hero section
            if (scrollPosition > heroHeight - 100) {
                navbar.classList.add('scrolled');
                console.log('ADDED scrolled class - navbar should be black');
            } else {
                navbar.classList.remove('scrolled');
                console.log('REMOVED scrolled class - navbar should be transparent');
            }
        });

        // Run on page load to set initial state
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('navbar');
            const heroSection = document.getElementById('home');
            
            if (!navbar || !heroSection) return;
            
            // Check initial scroll position
            if (window.scrollY > heroSection.offsetHeight - 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        // ===== END FIXED NAVBAR SCROLL LOGIC =====

        // Hero Carousel - Slides change every 0.5 seconds
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.carousel-slide');
            const indicators = document.querySelectorAll('.indicator');
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            if (totalSlides === 0) return;
            
            // Function to change slide
            function changeSlide(index) {
                // Remove active class from all slides and indicators
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(ind => ind.classList.remove('active'));
                
                // Add active class to current slide and indicator
                slides[index].classList.add('active');
                indicators[index].classList.add('active');
                
                currentSlide = index;
            }
            
            // Auto advance - EVERY 0.5 SECONDS (500ms)
            setInterval(() => {
                let nextSlide = (currentSlide + 1) % totalSlides;
                changeSlide(nextSlide);
            }, 2000);
            
            // Click indicators to change slides
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    changeSlide(index);
                });
            });
        });



        