// Project data - Replace with your actual projects
const projects = [
    {
        id: 1,
        title: "Computer Vision for Medical Diagnosis",
        shortDescription: "AI-powered system for analyzing medical images and assisting in early disease detection.",
        fullDescription: `This project develops a deep learning system for medical image analysis, specifically designed to assist radiologists in early disease detection. The system uses convolutional neural networks trained on large datasets of medical images to identify patterns that might be missed by human observation.

        Key Features:
        • Real-time image analysis with 94% accuracy
        • Integration with hospital PACS systems
        • Automated report generation
        • Multi-modal image support (X-ray, CT, MRI)
        • HIPAA-compliant data processing

        The system has been tested in clinical environments and shows promising results in reducing diagnostic time while maintaining high accuracy rates.`,
        tags: ["Python", "TensorFlow", "OpenCV", "Docker"],
        image: "🏥",
        links: [
            { text: "View Project", url: "#" },
            { text: "Research Paper", url: "#", secondary: true }
        ]
    },
    {
        id: 2,
        title: "Natural Language Processing Chatbot",
        shortDescription: "Intelligent conversational AI trained on domain-specific knowledge for customer support.",
        fullDescription: `A sophisticated chatbot built using transformer architecture and fine-tuned on customer service interactions. The system understands context, maintains conversation history, and provides accurate responses to complex queries.

        Technical Implementation:
        • Based on GPT architecture with custom fine-tuning
        • Real-time response generation under 200ms
        • Multi-language support (English, Spanish, French)
        • Integration with CRM systems
        • Sentiment analysis for conversation routing
        • Continuous learning from user interactions

        The chatbot has reduced customer service response time by 70% while maintaining 95% customer satisfaction scores.`,
        tags: ["Python", "PyTorch", "Transformers", "FastAPI"],
        image: "💬",
        links: [
            { text: "Live Demo", url: "#" },
            { text: "GitHub", url: "#", secondary: true }
        ]
    },
    {
        id: 3,
        title: "Predictive Analytics Dashboard",
        shortDescription: "Real-time machine learning platform for business intelligence and forecasting.",
        fullDescription: `An end-to-end analytics platform that processes streaming data to generate real-time predictions and business insights. The system combines multiple ML models to provide accurate forecasts for various business metrics.

        Platform Features:
        • Real-time data ingestion from multiple sources
        • Ensemble ML models for improved accuracy
        • Interactive visualization dashboard
        • Automated alert system for anomalies
        • A/B testing framework for model comparison
        • Scalable cloud infrastructure

        The platform processes over 1M data points daily and provides actionable insights that have increased business efficiency by 40%.`,
        tags: ["Python", "React", "Apache Kafka", "AWS"],
        image: "📊",
        links: [
            { text: "View Dashboard", url: "#" },
            { text: "Documentation", url: "#", secondary: true }
        ]
    },
    {
        id: 4,
        title: "Autonomous Drone Navigation",
        shortDescription: "Computer vision and reinforcement learning system for autonomous drone flight paths.",
        fullDescription: `A cutting-edge system that enables drones to navigate complex environments autonomously using computer vision and reinforcement learning. The system processes real-time camera feeds to make navigation decisions.

        Core Technologies:
        • Real-time object detection and tracking
        • SLAM (Simultaneous Localization and Mapping)
        • Deep reinforcement learning for path planning
        • Edge computing for low-latency decisions
        • Fail-safe mechanisms and collision avoidance
        • Integration with flight control systems

        Successfully tested in various environments including indoor warehouses, outdoor construction sites, and emergency response scenarios.`,
        tags: ["Python", "ROS", "CUDA", "C++"],
        image: "🚁",
        links: [
            { text: "Flight Demo", url: "#" },
            { text: "Technical Report", url: "#", secondary: true }
        ]
    },
    {
        id: 5,
        title: "Financial Fraud Detection System",
        shortDescription: "Real-time anomaly detection system for identifying fraudulent transactions using ML.",
        fullDescription: `A sophisticated fraud detection system that analyzes transaction patterns in real-time to identify potentially fraudulent activities. The system uses ensemble machine learning techniques to minimize false positives while catching actual fraud.

        System Capabilities:
        • Real-time transaction scoring (< 50ms response)
        • Behavioral pattern analysis
        • Network analysis for connected fraud
        • Adaptive learning from new fraud patterns
        • Integration with banking systems
        • Comprehensive reporting and analytics

        The system has achieved a 99.2% accuracy rate with less than 0.1% false positive rate, processing over 10M transactions daily.`,
        tags: ["Python", "Scikit-learn", "Apache Spark", "PostgreSQL"],
        image: "🛡️",
        links: [
            { text: "Case Study", url: "#" },
            { text: "White Paper", url: "#", secondary: true }
        ]
    },
    {
        id: 6,
        title: "Smart Agriculture IoT Platform",
        shortDescription: "IoT sensors and ML algorithms for optimizing crop yields and resource management.",
        fullDescription: `An integrated IoT platform that combines sensor data with machine learning to optimize agricultural processes. The system monitors soil conditions, weather patterns, and crop health to provide actionable recommendations to farmers.

        Platform Components:
        • Network of environmental sensors
        • Satellite imagery integration
        • Crop yield prediction models
        • Automated irrigation control
        • Pest and disease early warning system
        • Mobile app for farmers

        Pilot programs have shown 25% increase in crop yields and 30% reduction in water usage across participating farms.`,
        tags: ["Python", "IoT", "TensorFlow", "Node.js"],
        image: "🌱",
        links: [
            { text: "Platform Demo", url: "#" },
            { text: "Research Paper", url: "#", secondary: true }
        ]
    }
];

// DOM elements
let projectsGrid;
let modal;
let modalBody;
let closeModal;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    renderProjects();
    setupEventListeners();
    setupScrollEffects();
    
    // Initialize pagination dots after a short delay
    setTimeout(() => {
        updatePaginationOnScroll();
    }, 100);
});

function initializeElements() {
    projectsGrid = document.getElementById('projectsGrid');
    modal = document.getElementById('projectModal');
    modalBody = document.getElementById('modalBody');
    closeModal = document.getElementById('closeModal');
}

function renderProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectTile = createProjectTile(project, index);
        projectsGrid.appendChild(projectTile);
    });
    
    // Create pagination dots
    createPaginationDots();
}

function createPaginationDots() {
    const paginationDots = document.getElementById('paginationDots');
    if (!paginationDots) return;
    
    paginationDots.innerHTML = '';
    
    // Calculate number of pages (3 projects per page)
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'pagination-dot';
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            scrollToPage(i);
        });
        
        paginationDots.appendChild(dot);
    }
}

function scrollToPage(pageIndex) {
    const projectsGrid = document.getElementById('projectsGrid');
    const scrollAmount = projectsGrid.clientWidth * pageIndex;
    
    projectsGrid.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
    
    updateActiveDot(pageIndex);
}

function updateActiveDot(activeIndex) {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function createProjectTile(project, index) {
    const tile = document.createElement('div');
    tile.className = 'project-tile';
    tile.style.animationDelay = `${index * 0.1}s`;
    
    tile.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.shortDescription}</p>
        <div class="project-tags">
            ${project.tags.map(tag => 
                `<span class="tag ${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}">${tag}</span>`
            ).join('')}
        </div>
    `;
    
    tile.addEventListener('click', () => openProjectModal(project));
    
    return tile;
}

function openProjectModal(project) {
    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-description">${project.fullDescription.replace(/\n\s+/g, '<br><br>')}</div>
        <div class="modal-tech">
            <h3>Technologies Used</h3>
            <div class="project-tags">
                ${project.tags.map(tag => 
                    `<span class="tag ${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}">${tag}</span>`
                ).join('')}
            </div>
        </div>
        <div class="modal-links">
            ${project.links.map(link => 
                `<a href="${link.url}" class="modal-link ${link.secondary ? 'secondary' : ''}" target="_blank">${link.text}</a>`
            ).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupEventListeners() {
    // Modal close events
    closeModal.addEventListener('click', closeProjectModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
    
    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('.projects').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Navigation arrows for projects
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (scrollLeftBtn && scrollRightBtn && projectsGrid) {
        scrollLeftBtn.addEventListener('click', function() {
            scrollProjectsLeft();
        });
        
        scrollRightBtn.addEventListener('click', function() {
            scrollProjectsRight();
        });
        
        // Update pagination dots on scroll
        projectsGrid.addEventListener('scroll', updatePaginationOnScroll);
    }
}

function scrollProjectsLeft() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const currentScroll = projectsGrid.scrollLeft;
    const containerWidth = projectsGrid.clientWidth;
    const maxScroll = projectsGrid.scrollWidth - containerWidth;
    
    if (currentScroll <= 0) {
        // At the beginning, scroll to the end (circular behavior)
        projectsGrid.scrollTo({
            left: maxScroll,
            behavior: 'smooth'
        });
    } else {
        // Normal scroll left
        const scrollAmount = containerWidth * 0.8;
        projectsGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
}

function scrollProjectsRight() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const currentScroll = projectsGrid.scrollLeft;
    const containerWidth = projectsGrid.clientWidth;
    const maxScroll = projectsGrid.scrollWidth - containerWidth;
    
    if (currentScroll >= maxScroll - 10) { // Small tolerance for precision
        // At the end, scroll to the beginning (circular behavior)
        projectsGrid.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Normal scroll right
        const scrollAmount = containerWidth * 0.8;
        projectsGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

function updatePaginationOnScroll() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const scrollLeft = projectsGrid.scrollLeft;
    const containerWidth = projectsGrid.clientWidth;
    const currentPage = Math.round(scrollLeft / containerWidth);
    
    updateActiveDot(currentPage);
}

function setupScrollEffects() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    function handleScroll() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        const fadeSpeed = 1.5;
        
        // Parallax effect
        if (hero) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
        
        // Fade effect for hero content
        if (heroContent) {
            const opacity = Math.max(0, 1 - (scrolled / window.innerHeight) * fadeSpeed);
            heroContent.style.opacity = opacity;
        }
    }
    
    // Throttled scroll handler for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16);
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project tiles for scroll animations
    setTimeout(() => {
        document.querySelectorAll('.project-tile').forEach(tile => {
            tile.style.opacity = '0';
            tile.style.transform = 'translateY(30px)';
            tile.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(tile);
        });
    }, 100);
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        // Add swipe functionality here if needed for project navigation
        console.log('Swipe detected:', swipeDistance > 0 ? 'right' : 'left');
    }
}

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const tiles = document.querySelectorAll('.project-tile');
    const focusedElement = document.activeElement;
    const currentIndex = Array.from(tiles).indexOf(focusedElement);
    
    if (e.key === 'ArrowRight' && currentIndex < tiles.length - 1) {
        tiles[currentIndex + 1].focus();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        tiles[currentIndex - 1].focus();
    } else if (e.key === 'Enter' && focusedElement.classList.contains('project-tile')) {
        focusedElement.click();
    }
});

// Make project tiles focusable for keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('.project-tile').forEach(tile => {
            tile.setAttribute('tabindex', '0');
        });
    }, 200);
});