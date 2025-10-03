// Projects Section Management - ES6 Module
export function initProjects() {
    renderFilters();
    renderProjects();
    initFiltering();
}

// Render Filter Buttons
function renderFilters() {
    const filtersContainer = document.getElementById('projectsFilters');
    
    if (!filtersContainer) {
        console.error('Projects filters container not found');
        return;
    }
    
    window.portfolioData.projects.filters.forEach(filter => {
        const button = document.createElement('button');
        button.className = `filter-btn ${filter.id === 'all' ? 'active' : ''}`;
        button.setAttribute('data-filter', filter.id);
        button.innerHTML = `<i class="${filter.icon}"></i> ${filter.label}`;
        filtersContainer.appendChild(button);
    });
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.getElementById('projectsGrid');
    
    if (!projectsContainer) {
        console.error('Projects grid container not found');
        return;
    }
    
    window.portfolioData.projects.items.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        // Generate technologies HTML
        const technologiesHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.alt}" loading="lazy">
            </div>
            <div class="project-content">
                <span class="project-category">${getCategoryLabel(project.category)}</span>
                <h3 class="project-title"><i class="${project.icon}"></i> ${project.title}</h3>
                <div class="project-result">
                    <span class="result-label">Result:</span>
                    <span class="result-value">${project.result}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${technologiesHTML}
                </div>
                <div class="project-links">
                    <a href="${project.link}" class="btn"><i class="fas fa-external-link-alt"></i> View Case Study</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Get Category Label
function getCategoryLabel(categoryId) {
    const category = window.portfolioData.projects.filters.find(filter => filter.id === categoryId);
    return category ? category.label : categoryId;
}

// Initialize Filtering
function initFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
}