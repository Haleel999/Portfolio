// Data Management - ES6 Module
export const portfolioData = {
    services: [
        {
            id: 1,
            icon: 'fas fa-laptop-code',
            title: 'Website Design & Development',
            description: 'Responsive, high-performing websites that convert visitors into customers. Built with SEO best practices and optimized for all devices.',
            benefits: [
                'Increase online visibility',
                'Improve user engagement',
                'Boost conversion rates'
            ]
        },
        {
            id: 2,
            icon: 'fas fa-palette',
            title: 'Business Branding',
            description: 'Memorable brand identities that differentiate your business and create lasting impressions with your target audience.',
            benefits: [
                'Establish brand recognition',
                'Build customer trust',
                'Stand out from competitors'
            ]
        },
        {
            id: 3,
            icon: 'fas fa-mobile-alt',
            title: 'Mobile Application Design',
            description: 'Intuitive mobile experiences that keep users engaged and drive retention for your business.',
            benefits: [
                'Reach mobile audiences',
                'Enhance user experience',
                'Increase customer loyalty'
            ]
        },
        {
            id: 4,
            icon: 'fas fa-bolt',
            title: 'UI/UX Design',
            description: 'User-centered designs that prioritize usability and create delightful digital experiences for your customers.',
            benefits: [
                'Reduce bounce rates',
                'Increase time on site',
                'Improve customer satisfaction'
            ]
        },
        {
            id: 5,
            icon: 'fas fa-shopping-cart',
            title: 'E-commerce Development',
            description: 'Custom online stores with secure payment processing, inventory management, and conversion optimization.',
            benefits: [
                'Increase online sales',
                'Streamline operations',
                'Enhance customer experience'
            ]
        },
        {
            id: 6,
            icon: 'fas fa-search',
            title: 'SEO Optimization',
            description: 'Data-driven SEO strategies to improve search rankings, drive organic traffic, and increase visibility.',
            benefits: [
                'Higher search rankings',
                'Increased organic traffic',
                'Better ROI on marketing'
            ]
        }
    ],
    solutions: [
        {
            id: 1,
            icon: 'fas fa-shopping-cart',
            title: 'E-commerce',
            description: 'Boost sales with optimized online stores featuring seamless checkout experiences and conversion-focused design.'
        },
        {
            id: 2,
            icon: 'fas fa-heartbeat',
            title: 'Healthcare',
            description: 'Create trustworthy digital experiences that prioritize patient information and service accessibility.'
        },
        {
            id: 3,
            icon: 'fas fa-chart-line',
            title: 'Finance',
            description: 'Build secure, user-friendly platforms that simplify complex financial processes and build customer trust.'
        },
        {
            id: 4,
            icon: 'fas fa-graduation-cap',
            title: 'Education',
            description: 'Develop engaging learning platforms that facilitate knowledge transfer and student engagement.'
        },
        {
            id: 5,
            icon: 'fas fa-utensils',
            title: 'Restaurant & Food',
            description: 'Create digital experiences that enhance ordering, delivery, and customer engagement for food businesses.'
        },
        {
            id: 6,
            icon: 'fas fa-hands-helping',
            title: 'Non-Profit',
            description: 'Build platforms that effectively communicate mission, drive donations, and engage supporters.'
        },
        {
            id: 7,
            icon: 'fas fa-home',
            title: 'Real Estate',
            description: 'Develop property listing platforms with advanced search, virtual tours, and lead generation features.'
        },
        {
            id: 8,
            icon: 'fas fa-plane',
            title: 'Travel & Tourism',
            description: 'Create booking platforms and travel experiences that inspire and simplify trip planning.'
        }
    ],
    projects: {
        filters: [
            { id: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
            { id: 'frontend', label: 'Frontend', icon: 'fas fa-code' },
            { id: 'backend', label: 'Backend', icon: 'fas fa-server' },
            { id: 'fullstack', label: 'Full Stack', icon: 'fas fa-layer-group' },
            { id: 'design', label: 'UI/UX Design', icon: 'fas fa-paint-brush' },
            { id: 'mobile', label: 'Mobile', icon: 'fas fa-mobile-alt' }
        ],
        items: [
            {
                id: 1,
                title: 'Financial Dashboard UI',
                category: 'frontend',
                icon: 'fas fa-chart-pie',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
                alt: 'Finance Dashboard',
                result: '+30% task completion',
                description: 'A clean and intuitive dashboard interface for personal finance management with data visualization and reporting.',
                technologies: ['React', 'TypeScript', 'Chart.js'],
                link: '#'
            },
            {
                id: 2,
                title: 'E-commerce API Development',
                category: 'backend',
                icon: 'fas fa-cogs',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
                alt: 'API Development',
                result: '+40% API performance',
                description: 'Robust RESTful API for a large e-commerce platform with advanced product search, user authentication, and payment processing.',
                technologies: ['Node.js', 'Express', 'MongoDB'],
                link: '#'
            },
            {
                id: 3,
                title: 'E-commerce Platform Redesign',
                category: 'fullstack',
                icon: 'fas fa-shopping-bag',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
                alt: 'E-commerce Website',
                result: '+42% conversion rate',
                description: 'Complete redesign of an online store with improved navigation, streamlined checkout, and mobile optimization.',
                technologies: ['React', 'Node.js', 'MongoDB'],
                link: '#'
            },
            {
                id: 4,
                title: 'Healthcare App UI/UX',
                category: 'design',
                icon: 'fas fa-paint-brush',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
                alt: 'UI/UX Design',
                result: '+55% user satisfaction',
                description: 'User-centered design for a healthcare application with intuitive navigation and accessible interface for all user groups.',
                technologies: ['Figma', 'Adobe XD', 'Illustrator'],
                link: '#'
            },
            {
                id: 5,
                title: 'Fitness App Development',
                category: 'mobile',
                icon: 'fas fa-dumbbell',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
                alt: 'Fitness Mobile App',
                result: '+65% user retention',
                description: 'A mobile application that helps users track workouts, set goals, and monitor progress with personalized recommendations.',
                technologies: ['React Native', 'Firebase', 'Redux'],
                link: '#'
            },
            {
                id: 6,
                title: 'Analytics Dashboard',
                category: 'frontend',
                icon: 'fas fa-chart-line',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
                alt: 'Analytics Dashboard',
                result: '+25% data visibility',
                description: 'Interactive dashboard for visualizing complex business metrics with real-time data updates and customizable reporting.',
                technologies: ['Vue.js', 'D3.js', 'Sass'],
                link: '#'
            }
        ]
    },
    testimonials: [
        {
            id: 1,
            text: 'Haleel transformed our outdated website into a modern, responsive platform that has significantly increased our conversion rates. His attention to detail and understanding of our business needs were impressive.',
            author: 'Sarah Johnson',
            role: 'Marketing Director, TechSolutions Inc.',
            result: '+45% online revenue in 3 months'
        },
        {
            id: 2,
            text: 'The mobile app developed by Haleel has completely transformed how we engage with our customers. User retention has skyrocketed, and the feedback has been overwhelmingly positive.',
            author: 'Michael Chen',
            role: 'CEO, FitLife Studios',
            result: '+68% user retention rate'
        },
        {
            id: 3,
            text: 'Working with Haleel was a game-changer for our e-commerce business. He delivered a stunning website that not only looks amazing but also performs exceptionally well. Our sales have increased by 60% since launch.',
            author: 'Emily Rodriguez',
            role: 'Founder, StyleBoutique',
            result: '+60% sales increase'
        },
        {
            id: 4,
            text: 'Haleel\'s expertise in UI/UX design helped us create an intuitive platform that our users love. The redesign resulted in a 40% decrease in support tickets and much higher user satisfaction.',
            author: 'David Thompson',
            role: 'Product Manager, FinTech Pro',
            result: '+40% decrease in support tickets'
        },
        {
            id: 5,
            text: 'The branding work Haleel did for our startup was phenomenal. He captured our vision perfectly and created a cohesive brand identity that has helped us stand out in a crowded market.',
            author: 'Jessica Williams',
            role: 'Co-Founder, GreenTech Innovations',
            result: '+75% brand recognition'
        },
        {
            id: 6,
            text: 'Haleel developed a custom CRM solution that streamlined our entire sales process. The system has saved us countless hours and helped increase our team\'s productivity by 50%.',
            author: 'Robert Kim',
            role: 'Sales Director, GrowthCorp',
            result: '+50% team productivity'
        },
        {
            id: 7,
            text: 'The SEO strategy implemented by Haleel took our website from page 4 to the top of search results. Our organic traffic has tripled, and we\'re seeing a steady stream of qualified leads.',
            author: 'Amanda Lewis',
            role: 'Marketing Manager, HealthPlus',
            result: '+200% organic traffic growth'
        },
        {
            id: 8,
            text: 'Haleel\'s development skills are exceptional. He delivered a complex web application ahead of schedule and under budget. The code quality and documentation were impeccable.',
            author: 'Daniel Park',
            role: 'CTO, DataInsights Inc.',
            result: 'Project delivered 2 weeks early'
        }
    ]
};