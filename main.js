// Main initialization file - ES6 Module
import { portfolioData } from './data.js';
import { initServices } from './services.js';
import { initSolutions } from './solutions.js';
import { initProjects } from './projects.js';
import { initTestimonials } from './testimonials.js';
import { initNavigation } from './navigation.js';
import { initScrollEffects } from './scroll-effects.js';
import { initFooter } from './footer.js';
import { initBackToTop } from './back-to-top.js';

// Make portfolioData available globally for modules that need it
window.portfolioData = portfolioData;

// Show notification function (for any inline forms)
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Handle any contact forms on the homepage
function initHomepageForms() {
    // Check if there's a contact form on the homepage
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const business = document.getElementById('business').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !business || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // For Netlify Forms, we'll let it submit normally
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Let Netlify handle the form submission
            setTimeout(() => {
                contactForm.submit();
            }, 1000);
        });
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading animation
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.classList.add('hidden');
        
        // Remove loading element after animation completes
        setTimeout(function() {
            loadingElement.style.display = 'none';
        }, 500);
    }
    
    // Initialize all sections
    initServices();
    initSolutions();
    initProjects();
    initTestimonials();
    
    // Initialize other functionality
    initNavigation();
    initScrollEffects();
    initHomepageForms();
    initFooter();
    initBackToTop(); // Add back-to-top initialization
    
    // Initialize any Netlify forms on the page
    initNetlifyForms();
});

// Initialize Netlify forms with enhanced UX
function initNetlifyForms() {
    const netlifyForms = document.querySelectorAll('form[netlify]');
    
    netlifyForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Add loading state to submit button
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Revert button after form submission (in case of error)
                setTimeout(() => {
                    if (submitBtn.disabled) {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }
                }, 5000);
            }
        });
    });
}

// Add CSS for notifications if not already in styles
function injectNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 1rem;
                max-width: 400px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification.success {
                background: #10b981;
            }
            
            .notification.error {
                background: #ef4444;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                flex: 1;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 4px;
                transition: background 0.2s;
            }
            
            .notification-close:hover {
                background: rgba(255,255,255,0.2);
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    left: 20px;
                    right: 20px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Inject notification styles on load
injectNotificationStyles();