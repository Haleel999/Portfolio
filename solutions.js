// Solutions Section Management - ES6 Module
export function initSolutions() {
    renderSolutions();
    // Remove: renderFooterIndustries(); - Now handled by footer.js
}

// Render Solutions
function renderSolutions() {
    const solutionsContainer = document.getElementById('solutionsContainer');
    
    if (!solutionsContainer) {
        console.error('Solutions container not found');
        return;
    }
    
    window.portfolioData.solutions.forEach(solution => {
        const solutionElement = document.createElement('div');
        solutionElement.className = 'solution';
        
        solutionElement.innerHTML = `
            <h3><i class="${solution.icon}"></i> ${solution.title}</h3>
            <p>${solution.description}</p>
        `;
        
        solutionsContainer.appendChild(solutionElement);
    });
}

// Remove the renderFooterIndustries function entirely