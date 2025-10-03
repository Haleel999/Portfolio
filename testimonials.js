// Testimonials Section Management - ES6 Module
export function initTestimonials() {
    renderTestimonials();
    initTestimonialNavigation();
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    
    if (!testimonialsContainer) {
        console.error('Testimonials container not found');
        return;
    }
    
    window.portfolioData.testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.dataset.index = index;
        
        testimonialElement.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author"><i class="fas fa-user"></i> ${testimonial.author}</div>
            <div class="testimonial-role">${testimonial.role}</div>
            <div class="testimonial-result">
                <span class="result-value">${testimonial.result}</span>
            </div>
        `;
        
        testimonialsContainer.appendChild(testimonialElement);
    });
}

// Initialize Testimonial Navigation
function initTestimonialNavigation() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    const prevButton = document.getElementById('testimonialPrev');
    const nextButton = document.getElementById('testimonialNext');
    
    if (!testimonialsContainer || !prevButton || !nextButton) {
        console.error('Testimonial navigation elements not found');
        return;
    }
    
    const testimonials = testimonialsContainer.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    // Function to show specific testimonial
    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        currentIndex = index;
        updateButtonStates();
    };
    
    // Check if we're on mobile
    const isMobile = () => window.innerWidth < 768;
    
    // Mobile navigation - show one testimonial at a time
    const mobileNavigation = () => {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                showTestimonial(currentIndex - 1);
            }
        });
        
        nextButton.addEventListener('click', () => {
            if (currentIndex < testimonials.length - 1) {
                showTestimonial(currentIndex + 1);
            }
        });
        
        // Initialize by showing first testimonial
        showTestimonial(0);
    };
    
    // Desktop navigation - horizontal scrolling
    const desktopNavigation = () => {
        // Calculate scroll amount based on screen size
        const getScrollAmount = () => {
            const width = window.innerWidth;
            if (width < 576) return 280; // mobile
            if (width < 768) return 300; // tablet
            if (width < 992) return 320; // small desktop
            return 350; // large screens
        };
        
        prevButton.addEventListener('click', () => {
            const scrollAmount = getScrollAmount();
            testimonialsContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextButton.addEventListener('click', () => {
            const scrollAmount = getScrollAmount();
            testimonialsContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Show all testimonials for desktop
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'block';
        });
        
        // Update button states based on scroll position
        const updateButtonStates = () => {
            const { scrollLeft, scrollWidth, clientWidth } = testimonialsContainer;
            
            // Disable prev button if at the start
            prevButton.disabled = scrollLeft <= 10; // 10px tolerance
            
            // Disable next button if at the end
            nextButton.disabled = scrollLeft + clientWidth >= scrollWidth - 10; // 10px tolerance
        };
        
        testimonialsContainer.addEventListener('scroll', updateButtonStates);
        window.addEventListener('resize', updateButtonStates);
        updateButtonStates();
    };
    
    // Update button states for mobile
    const updateButtonStates = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === testimonials.length - 1;
    };
    
    // Initialize appropriate navigation based on screen size
    const initNavigation = () => {
        if (isMobile()) {
            mobileNavigation();
        } else {
            desktopNavigation();
        }
    };
    
    // Re-initialize navigation on window resize
    window.addEventListener('resize', () => {
        if (isMobile()) {
            mobileNavigation();
        } else {
            desktopNavigation();
        }
    });
    
    // Initialize navigation
    initNavigation();
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevButton.click();
        } else if (e.key === 'ArrowRight') {
            nextButton.click();
        }
    });
    
    // Add touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    testimonialsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    testimonialsContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && isMobile()) {
                // Swipe left - go to next
                nextButton.click();
            } else if (diff < 0 && isMobile()) {
                // Swipe right - go to previous
                prevButton.click();
            }
        }
    }
}