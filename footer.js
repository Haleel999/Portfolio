// Footer Management - ES6 Module
export function initFooter() {
    renderFooterServices();
    renderFooterIndustries();
}

// Render Footer Services Links
function renderFooterServices() {
    const footerServicesContainer = document.getElementById('footerServices');
    
    if (!footerServicesContainer) return;
    
    // Clear any existing content to prevent duplicates
    footerServicesContainer.innerHTML = '';
    
    // Use portfolioData if available, otherwise use fallback
    const services = window.portfolioData ? window.portfolioData.services : [
        { title: 'Website Design & Development' },
        { title: 'Business Branding' },
        { title: 'Mobile Application Design' },
        { title: 'UI/UX Design' },
        { title: 'E-commerce Development' },
        { title: 'SEO Optimization' }
    ];

    services.forEach(service => {
        const listItem = document.createElement('li');
        const serviceTitle = service.title || service;
        listItem.innerHTML = `
            <a href="index.html#services" class="footer-link"><i class="fas fa-chevron-right"></i> ${serviceTitle}</a>
        `;
        footerServicesContainer.appendChild(listItem);
    });
}

// Render Footer Industries Links
function renderFooterIndustries() {
    const footerIndustriesContainer = document.getElementById('footerIndustries');
    
    if (!footerIndustriesContainer) return;
    
    // Clear any existing content to prevent duplicates
    footerIndustriesContainer.innerHTML = '';
    
    // Use portfolioData if available, otherwise use fallback
    const industries = window.portfolioData ? window.portfolioData.solutions : [
        { title: 'E-commerce' },
        { title: 'Healthcare' },
        { title: 'Finance' },
        { title: 'Education' },
        { title: 'Restaurant & Food' },
        { title: 'Non-Profit' },
        { title: 'Real Estate' },
        { title: 'Travel & Tourism' }
    ];

    industries.forEach(industry => {
        const listItem = document.createElement('li');
        const industryTitle = industry.title || industry;
        listItem.innerHTML = `
            <a href="index.html#solutions" class="footer-link"><i class="fas fa-chevron-right"></i> ${industryTitle}</a>
        `;
        footerIndustriesContainer.appendChild(listItem);
    });
}