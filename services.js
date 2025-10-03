// Services Section Management - ES6 Module
export function initServices() {
    renderServices();
    // Remove: renderFooterServices(); - Now handled by footer.js
}

// Render Services
function renderServices() {
    const servicesContainer = document.getElementById('servicesContainer');
    
    if (!servicesContainer) {
        console.error('Services container not found');
        return;
    }
    
    window.portfolioData.services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service';
        
        // Generate benefits HTML
        const benefitsHTML = service.benefits.map(benefit => 
            `<li>${benefit}</li>`
        ).join('');
        
        serviceElement.innerHTML = `
            <div class="service-icon"><i class="${service.icon}"></i></div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-benefits">
                ${benefitsHTML}
            </ul>
        `;
        
        servicesContainer.appendChild(serviceElement);
    });
}

// Remove the renderFooterServices function entirely