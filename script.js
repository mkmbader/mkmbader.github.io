// Project data - Real projects
const projects = [
    {
        id: 1,
        title: "AI-Translator for Dutch Municipalities and Asylum Seekers",
        shortDescription: "AI translation app designed for municipalities and status holders in the Netherlands to facilitate communication and access to important information.",
        fullDescription: `With Mokin we focus on providing an AI translation app specifically designed for municipalities and status holders in the Netherlands. It aims to facilitate communication by offering translation services to help non-Dutch speakers access important information and services.

        Key Features:<br>• <strong>Government Services:</strong> Specialized translation for Dutch government and municipal services<br>• <strong>Target Users:</strong> Designed for asylum seekers and status holders<br>• <strong>Accessibility:</strong> Focus on user-friendly design and ease of use<br>• <strong>Community Impact:</strong> Valuable resource for local governments and communities<br>• <strong>Language Barriers:</strong> Helps bridge communication gaps in essential services

        The platform emphasizes user-friendly design and accessibility, making it an essential tool for improving communication between Dutch governments and non-native speakers.`,
        tags: ["AI Translation", "NLP", "Accessibility", "Government Services"],
        image: "🌐",
        links: [
            { text: "Visit Mokin.nl", url: "https://www.mokin.nl/" },
            // { text: "Learn More", url: "#", secondary: true }
        ]
    },
    {
        id: 2,
        title: "Tracking Landscape Vitality with Sensing Clues",
        shortDescription: "Geospatial data analysis project creating a Shiny app to monitor vegetation health in African and European conservation areas using satellite imagery.",
        fullDescription: `Collaborated with Sensing Clues and CorrelAidNL to create a data-driven conservation tool for monitoring vegetation health across four conservation sites in Zambia, Spain, Bulgaria, and Kenya.

        Project Overview:<br>• <strong>Shiny Application:</strong> Developed interactive tool for field partners and conservation organizations<br>• <strong>Satellite Data:</strong> Used Sentinel-2 satellite data and Google Earth Engine for NDVI analysis<br>• <strong>Trend Analysis:</strong> Analyzed vegetation health trends from 2019-2024 across multiple conservation areas<br>• <strong>Heatmaps:</strong> Created Delta NDVI heatmaps showing vegetation changes over time<br>• <strong>Land Coverage:</strong> Integrated land coverage data to provide context for environmental changes

        Technical Implementation:<br>• <strong>Data Processing:</strong> Processed geospatial satellite data using Python and R<br>• <strong>Visualizations:</strong> Built interactive visualizations with zoomable geographic plots<br>• <strong>Deployment:</strong> Deployed application using Docker containers<br>• <strong>Data Sources:</strong> Integrated multiple data sources including Copernicus Satellite data<br>• <strong>Monitoring Tools:</strong> Developed temporal analysis tools for seasonal vegetation monitoring

        Impact:
        The tool enables rangers and conservationists to make informed, data-driven decisions for sustainable landscape management, providing early warning systems for environmental threats and supporting proactive conservation efforts.

        This project demonstrates the power of combining satellite technology, data science, and conservation expertise to protect global biodiversity.`,
        tags: ["R", "Python", "GIS", "Satellite Data", "Conservation", "Shiny"],
        image: "🛰️",
        links: [
            { text: "View Shiny App", url: "https://analytical.sensingclues.org/environmentaltimeseries/" },
            { text: "Sensing Clues", url: "https://www.sensingclues.org/", secondary: true }
        ]
    },
    {
        id: 3,
        title: "Mapping Hunger Risk in Suriname",
        shortDescription: "Data science volunteer project analyzing hunger risk factors in Suriname during COVID-19 and economic challenges.",
        fullDescription: `In 2020/2021, I joined CorrelAidxNL as a Data Science volunteer to collaborate with Smart Lifestyle Connection on a critical humanitarian project. This initiative focused on mapping out hunger risk levels in Suriname during a period of multiple crises.

        Project Context:<br>• <strong>Natural Disasters:</strong> Country impacted by heavy rainfall and flooding<br>• <strong>COVID-19 Impact:</strong> Restrictions affecting food security<br>• <strong>Economic Crisis:</strong> Rising inflation creating economic hardship<br>• <strong>Response Planning:</strong> Need for data-driven humanitarian response planning

        Key Contributions:<br>• <strong>Risk Analysis:</strong> Analyzed multiple risk factors affecting food security<br>• <strong>Modeling:</strong> Developed risk assessment models using available data<br>• <strong>Reporting:</strong> Created visualizations and reports for humanitarian organizations<br>• <strong>Collaboration:</strong> Collaborated with local and international stakeholders<br>• <strong>Impact:</strong> Provided actionable insights for intervention planning

        Impact:
        The analysis helped humanitarian organizations better understand the geographic and demographic distribution of hunger risk, enabling more targeted and effective relief efforts in affected communities.

        This project demonstrates the power of data science for social good and international development work.`,
        tags: ["Data Science", "Humanitarian Aid", "Risk Analysis", "Social Impact"],
        image: "🌍",
        links: [
            { text: "CorrelAid NL", url: "https://correlaid.nl/" },
            { text: "Smart Lifestyle Connection", url: "https://smartlifestyleconnection.org/", secondary: true }
        ]
    },
    {
        id: 4,
        title: "PhD Research: Gravitational Waves & Newtonian Noise",
        shortDescription: "Research on seismic models and Newtonian noise for gravitational wave detectors, including Advanced Virgo and Einstein Telescope.",
        fullDescription: `Successfully defended my PhD thesis on February 9, 2020, focusing on gravitational wave detection and seismic noise modeling. The research addresses fundamental challenges in measuring gravitational waves and understanding the Universe's composition.

        Research Highlights:<br>• <strong>Seismic Modeling:</strong> Developed site-based seismic models for Advanced Virgo (Italy) and Einstein Telescope candidate sites<br>• <strong>Newtonian Noise:</strong> Modeled Newtonian noise from complex multilayered geological structures<br>• <strong>Control Systems:</strong> Analyzed performance of angular control systems at Advanced Virgo<br>• <strong>Underground Detectors:</strong> Created realistic underground detector models for next-generation facilities<br>• <strong>Site Selection:</strong> Contributed to Einstein Telescope site selection criteria

        Key Contributions:<br>• <strong>Geological Impact:</strong> Advanced understanding of how local geology affects gravitational wave detector performance<br>• <strong>Numerical Methods:</strong> Developed numerical integration methods for seismic field analysis<br>• <strong>Noise Subtraction:</strong> Proposed online subtraction schemes for environmental noise monitoring<br>• <strong>Recognition:</strong> Jan Kluyver Prize winner for best English thesis summary

        This work bridges theoretical physics and practical engineering challenges in one of the most sensitive measurement systems ever built.`,
        tags: ["Gravitational Waves", "Physics", "Seismic Modeling", "Data Analysis"],
        image: "🌌",
        links: [
            { text: "Read Thesis", url: "https://www.nikhef.nl/pub/services/biblio/theses_pdf/thesis_M_K_M_Bader.pdf" },
            { text: "Jan Kluyver Prize", url: "https://www.nikhef.nl/en/news/phd-thesis-prize-winner-maria-bader-summary-gives-your-adventures-coherence/", secondary: true }
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
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            createPaginationDots();
            updatePaginationOnScroll();
        }, 250);
    });
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
    
    const isMobile = window.innerWidth <= 768;
    let totalPages;
    
    if (isMobile) {
        // For mobile: one dot per project
        totalPages = projects.length;
    } else {
        // Desktop: calculate based on projects per page
        const projectsPerPage = 3;
        totalPages = Math.ceil(projects.length / projectsPerPage);
    }
    
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
    const isMobile = window.innerWidth <= 768;
    
    let scrollAmount;
    if (isMobile) {
        // For mobile: scroll to specific project
        const tileWidth = projectsGrid.querySelector('.project-tile')?.offsetWidth + 16;
        scrollAmount = tileWidth * pageIndex;
    } else {
        // Desktop: scroll by container width
        scrollAmount = projectsGrid.clientWidth * pageIndex;
    }
    
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
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
        </div>
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
        <div class="modal-links-top">
            ${project.links.map(link => 
                `<a href="${link.url}" class="modal-link-top ${link.secondary ? 'secondary' : ''}" target="_blank">${link.text}</a>`
            ).join('')}
        </div>
        <div class="modal-description">${project.fullDescription.replace(/\n\s+/g, '<br><br>')}</div>
        <div class="modal-tech">
            <h3>Technologies Used</h3>
            <div class="project-tags">
                ${project.tags.map(tag => 
                    `<span class="tag ${tag.toLowerCase().replace(/[^a-z0-9]/g, '')}">${tag}</span>`
                ).join('')}
            </div>
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
    
    const isMobile = window.innerWidth <= 768;
    const currentScroll = projectsGrid.scrollLeft;
    const containerWidth = projectsGrid.clientWidth;
    const maxScroll = projectsGrid.scrollWidth - containerWidth;
    
    if (isMobile) {
        // For mobile: scroll exactly one tile width
        const tileWidth = projectsGrid.querySelector('.project-tile')?.offsetWidth + 16; // Include margin
        if (currentScroll <= 0) {
            // At the beginning, scroll to the end (circular behavior)
            projectsGrid.scrollTo({
                left: maxScroll,
                behavior: 'smooth'
            });
        } else {
            projectsGrid.scrollBy({
                left: -tileWidth,
                behavior: 'smooth'
            });
        }
    } else {
        // Desktop behavior
        if (currentScroll <= 0) {
            projectsGrid.scrollTo({
                left: maxScroll,
                behavior: 'smooth'
            });
        } else {
            const scrollAmount = containerWidth * 0.8;
            projectsGrid.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }
}

function scrollProjectsRight() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const isMobile = window.innerWidth <= 768;
    const currentScroll = projectsGrid.scrollLeft;
    const containerWidth = projectsGrid.clientWidth;
    const maxScroll = projectsGrid.scrollWidth - containerWidth;
    
    if (isMobile) {
        // For mobile: scroll exactly one tile width
        const tileWidth = projectsGrid.querySelector('.project-tile')?.offsetWidth + 16; // Include margin
        if (currentScroll >= maxScroll - 10) {
            // At the end, scroll to the beginning (circular behavior)
            projectsGrid.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            projectsGrid.scrollBy({
                left: tileWidth,
                behavior: 'smooth'
            });
        }
    } else {
        // Desktop behavior
        if (currentScroll >= maxScroll - 10) {
            projectsGrid.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            const scrollAmount = containerWidth * 0.8;
            projectsGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }
}

function updatePaginationOnScroll() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const isMobile = window.innerWidth <= 768;
    const scrollLeft = projectsGrid.scrollLeft;
    
    let currentPage;
    if (isMobile) {
        // For mobile: calculate based on individual tile positions
        const tileWidth = projectsGrid.querySelector('.project-tile')?.offsetWidth + 16;
        currentPage = Math.round(scrollLeft / tileWidth);
    } else {
        // Desktop: calculate based on container width
        const containerWidth = projectsGrid.clientWidth;
        currentPage = Math.round(scrollLeft / containerWidth);
    }
    
    updateActiveDot(Math.max(0, Math.min(currentPage, projects.length - 1)));
}

function setupScrollEffects() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    function handleScroll() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        const fadeSpeed = 1.5;
        const isMobile = window.innerWidth <= 768;
        
        // Disable parallax on mobile for better performance
        if (hero && !isMobile) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        } else if (hero && isMobile) {
            hero.style.transform = 'none';
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
let touchStartY = 0;
let touchEndY = 0;
let isProjectsGridTouch = false;

function handleSwipe() {
    if (!isProjectsGridTouch) return;
    
    const swipeThreshold = 50;
    const swipeDistanceX = touchEndX - touchStartX;
    const swipeDistanceY = Math.abs(touchEndY - touchStartY);
    
    // Only handle horizontal swipes (avoid interfering with vertical scroll)
    if (Math.abs(swipeDistanceX) > swipeThreshold && swipeDistanceY < 100) {
        if (swipeDistanceX > 0) {
            // Swipe right - go to previous project
            scrollProjectsLeft();
        } else {
            // Swipe left - go to next project
            scrollProjectsRight();
        }
    }
}

document.addEventListener('touchstart', function(e) {
    const projectsGrid = document.getElementById('projectsGrid');
    isProjectsGridTouch = projectsGrid && projectsGrid.contains(e.target);
    
    if (isProjectsGridTouch) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }
}, { passive: true });

document.addEventListener('touchend', function(e) {
    if (isProjectsGridTouch) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }
    isProjectsGridTouch = false;
}, { passive: true });

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