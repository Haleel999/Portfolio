// Contact Message Form Handling for Netlify Forms - ES6 Module
import { initFooter } from './footer.js';
import { initBackToTop } from './back-to-top.js';

// Show notification function
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

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Contact Message Form Handling
function initContactMessageForm() {
    const contactMessageForm = document.getElementById('contactMessageForm');
    if (contactMessageForm) {
        contactMessageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('messageName').value;
            const email = document.getElementById('messageEmail').value;
            const service = document.getElementById('messageService').value;
            const budget = document.getElementById('messageBudget').value;
            const details = document.getElementById('messageDetails').value;
            
            if (!name || !email || !service || !budget || !details) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Validate email
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactMessageForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Netlify Forms will handle the submission automatically
            setTimeout(() => {
                contactMessageForm.submit();
            }, 1000);
        });
    }
}

// Initialize navigation
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading animation
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.classList.add('hidden');
        
        setTimeout(function() {
            loadingElement.style.display = 'none';
        }, 500);
    }
    
    // Initialize all functionality
    initContactMessageForm();
    initNavigation();
    initBackToTop(); // Use the new back-to-top module
    initFooter();
});