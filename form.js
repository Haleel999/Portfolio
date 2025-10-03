// Form Handling - ES6 Module
export function initFormHandling() {
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
            
            // In a real application, you would send this data to a server
            // For demonstration purposes, we'll just show a success message
            showNotification('Thank you for your inquiry! I will get back to you soon.', 'success');
            this.reset();
        });
    }
}

// Show notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close notification when close button is clicked
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}