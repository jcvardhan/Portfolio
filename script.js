/*
 * =============================================
 * SCRIPT.JS — Premium Engineering Portfolio
 * Chaitanya Vardhan
 * =============================================
 */


/**
 * -----------------------------------------------------------------
 * PORTFOLIO CONTENT DATABASE
 * -----------------------------------------------------------------
 */
window.portfolioData = {

    /* ========== TYPEWRITER ROLES ========== */
    typewriterRoles: [
        "Electronics Engineer",
        "Embedded Systems Developer",
        "IoT Engineer",
        "Android Developer",
        "Industrial Automation Enthusiast",
        "AI Enthusiast",
        "Railway Signalling Researcher"
    ],

    /* ========== METRICS ========== */
    metrics: [
        { value: 15, suffix: "+", label: "Projects" },
        { value: 4, suffix: "", label: "Internships" },
        { value: 20, suffix: "+", label: "Technologies" },
        { value: 8.89, suffix: "", label: "CGPA", isDecimal: true }
    ],

    /* ========== EDUCATION ========== */
    education: [
        {
            school: "Sandur Residential School",
            degree: "Class X (ICSE)",
            year: "2021",
            grade: "82.3%"
        },
        {
            school: "Sri Chaitanya",
            degree: "Class XII (PCMC)",
            year: "2023",
            grade: "80.83%"
        },
        {
            school: "SRM Institute of Science and Technology",
            degree: "B.Tech ECE",
            year: "2023 – 2027",
            grade: "CGPA: 8.89 / 10"
        }
    ],

    /* ========== INTERNSHIPS / EXPERIENCE ========== */
    internships: [
        {
            id: "jsw",
            company: "JSW Energy",
            position: "Project Intern",
            location: "Bellary",
            duration: "Jun 2025 – Jul 2025",
            badge: "Industrial Automation",
            badgeClass: "badge-industrial",
            featured: false,
            description: "Analyzed industrial monitoring and control systems in a thermal power plant. Studied Green Hydrogen production systems and complete automation architecture.",
            highlights: [
                "PLC Automation",
                "DCS Systems",
                "Sensor Instrumentation",
                "Real-Time Data Acquisition",
                "Industrial Monitoring Systems",
                "Green Hydrogen Plant Experience"
            ],
            techStack: ["PLC", "DCS", "SCADA", "Industrial IoT", "Sensors"]
        },
        {
            id: "tvm",
            company: "TVM Signalling & Transportation Systems",
            position: "Research Intern",
            location: "",
            duration: "May 2026 – Oct 2026",
            badge: "FEATURED RESEARCH EXPERIENCE",
            badgeClass: "badge-featured",
            featured: true,
            description: "Worked on high-speed railway axle counter systems for Indian Railways, including train detection, track occupancy monitoring, and railway signalling systems. Operational speeds up to 400 km/h.",
            highlights: [
                "High-speed railway axle counter systems",
                "Train detection & track occupancy monitoring",
                "Railway signalling systems",
                "Railway safety automation",
                "Operational speeds up to 400 km/h"
            ],
            techStack: ["Railway Signalling", "Axle Counters", "Safety Systems", "Industrial Electronics", "Embedded Systems"]
        },
        {
            id: "bsnl",
            company: "BSNL",
            position: "Trainee",
            location: "Visakhapatnam",
            duration: "Dec 2025",
            badge: null,
            badgeClass: "badge-default",
            featured: false,
            description: "Exposure to optical communication, telecommunication infrastructure, signal transmission systems, and network communication.",
            highlights: [
                "Optical Communication",
                "Telecommunication Infrastructure",
                "Signal Transmission Systems",
                "Network Communication Systems"
            ],
            techStack: ["Optical Fiber", "Telecom", "Signal Processing"]
        },
        {
            id: "rinex",
            company: "Rinex",
            position: "AI Intern",
            location: "Online",
            duration: "Jan 2023 – Mar 2023",
            badge: null,
            badgeClass: "badge-default",
            featured: false,
            description: "Worked on AI applications, computer vision, and machine learning concepts.",
            highlights: [
                "AI Applications",
                "Computer Vision",
                "Machine Learning Concepts"
            ],
            techStack: ["Python", "OpenCV", "Machine Learning"]
        }
    ],

    /* ========== PROJECTS ========== */
    projects: [
        // ---- FEATURED ----
        {
            id: "cems",
            title: "CEMS — Continuous Emission Monitoring System",
            badge: "FLAGSHIP INDUSTRIAL PROJECT",
            badgeClass: "badge-flagship",
            category: "featured",
            filters: ["featured", "industrial", "iot"],
            priority: 1,
            icons: "🏭 📊",
            description: "Industrial IoT system for NO₂, SO₂, and dust monitoring with real-time government compliance reporting.",
            highlights: [
                "NO₂ & SO₂ emission sensing",
                "Dust / PM2.5 monitoring",
                "Real-time reporting dashboard",
                "Government compliance automation"
            ],
            techStack: ["NodeMCU", "MQ-135", "Dust Sensor", "C++", "IoT"]
        },
        {
            id: "msdac",
            title: "MSDAC — Multi Section Digital Axle Counter",
            badge: "RAILWAY RESEARCH PROJECT",
            badgeClass: "badge-research",
            category: "featured",
            filters: ["featured", "embedded", "industrial"],
            priority: 2,
            icons: "🚂",
            description: "Railway safety and monitoring system for axle detection and track occupancy analysis.",
            highlights: [
                "Axle detection algorithms",
                "Track occupancy monitoring",
                "Multi-section analysis",
                "Railway automation & safety",
                "Industrial-grade electronics"
            ],
            techStack: ["Embedded C", "Sensors", "Signal Processing", "Industrial Electronics", "Railway Systems"]
        },
        {
            id: "drone",
            title: "Drone for Crop Health Monitoring",
            badge: "FEATURED INNOVATION",
            badgeClass: "badge-featured",
            category: "featured",
            filters: ["featured", "iot", "ai"],
            priority: 3,
            icons: "🚁",
            description: "Drone-based agricultural monitoring platform for smart farming and crop health analysis.",
            highlights: [
                "Crop Health Monitoring via aerial imaging",
                "Smart Farming analytics",
                "Agricultural field inspection",
                "Real-time data collection",
                "Precision agriculture techniques"
            ],
            techStack: ["Drone Tech", "Computer Vision", "IoT", "Analytics", "Sensors"]
        },
        // ---- SOFTWARE ----
        {
            id: "bluchat",
            title: "BluChat",
            badge: "Android Project",
            badgeClass: "badge-default",
            category: "software",
            filters: ["software"],
            priority: 0,
            icons: "📱 🔵",
            description: "Bluetooth-based peer-to-peer communication platform. Native Android app with retro Nothing OS style interface.",
            highlights: [
                "Native Android App built with Kotlin",
                "Bluetooth Classic communication (RFCOMM)",
                "Offline messaging — No Internet Required",
                "Real-time chat with connection status",
                "Retro Nothing OS-inspired UI design"
            ],
            techStack: ["Kotlin", "Android Studio", "Bluetooth Classic API", "XML Layouts", "MVVM"]
        },
        {
            id: "hazard",
            title: "Smart Compact Device for Environmental Hazard Detection",
            badge: null,
            badgeClass: "badge-default",
            category: "engineering",
            filters: ["embedded", "iot"],
            priority: 0,
            description: "Embedded system using sensors to detect environmental hazards and trigger real-time alerts for safety applications.",
            highlights: [
                "Multi-sensor hazard detection",
                "Real-time alert system",
                "Compact embedded design",
                "Safety-critical application"
            ],
            techStack: ["Arduino", "Sensors", "C++", "IoT", "Embedded Systems"]
        },
        {
            id: "smartwatch",
            title: "Hybrid Smartwatch + Desktop AI Companion",
            badge: null,
            badgeClass: "badge-default",
            category: "engineering",
            filters: ["embedded", "ai"],
            priority: 0,
            description: "AI-integrated wearable and desktop system for real-time monitoring, communication, and intelligent automation.",
            highlights: [
                "Wearable + desktop integration",
                "Real-time monitoring",
                "AI-powered automation",
                "Bluetooth communication"
            ],
            techStack: ["ESP32", "Python", "AI", "Bluetooth", "Sensors"]
        },
        {
            id: "ai-weather",
            title: "AI Real-Time Weather Monitoring System",
            badge: null,
            badgeClass: "badge-default",
            category: "engineering",
            filters: ["ai", "iot"],
            priority: 0,
            description: "Sensor-based IoT system with machine learning for real-time weather monitoring and predictive analysis.",
            highlights: [
                "ML-powered weather prediction",
                "Real-time sensor data",
                "IoT cloud integration",
                "Predictive analytics"
            ],
            techStack: ["NodeMCU", "Sensors", "Machine Learning", "Python", "IoT"]
        },
        // ---- SOFTWARE ----
        {
            id: "gesture-home",
            title: "Gesture Based Home Automation",
            badge: null,
            badgeClass: "badge-default",
            category: "software",
            filters: ["software", "ai"],
            priority: 0,
            description: "Computer vision-based home automation using gesture recognition for touchless real-time device control.",
            highlights: [
                "Hand gesture recognition",
                "Real-time device control",
                "Computer vision pipeline",
                "Touchless interaction"
            ],
            techStack: ["Python", "OpenCV", "MediaPipe", "IoT", "Arduino"]
        },
        {
            id: "friday",
            title: "AI Voice Assistant (FRIDAY)",
            badge: null,
            badgeClass: "badge-default",
            category: "software",
            filters: ["software", "ai"],
            priority: 0,
            description: "Voice-controlled PC automation: launch apps, control volume/brightness, open URLs.",
            highlights: [
                "Speech recognition & synthesis",
                "Application launching",
                "System volume & brightness control",
                "URL and web automation"
            ],
            techStack: ["Python", "SpeechRecognition", "pyttsx3", "OS Automation", "pycaw"]
        },
        {
            id: "expense",
            title: "Expense Tracker",
            badge: null,
            badgeClass: "badge-default",
            category: "software",
            filters: ["software"],
            priority: 0,
            description: "Firebase-powered web app with Google login for personal expense tracking.",
            highlights: [
                "Google Authentication",
                "Real-time Firestore database",
                "Add, edit, delete expenses",
                "Spending summary dashboard"
            ],
            techStack: ["HTML", "CSS", "JavaScript", "Firebase"]
        },
        // ---- IOT & EMBEDDED ----
        {
            id: "weather",
            title: "Weather Monitoring System",
            badge: null,
            badgeClass: "badge-default",
            category: "iot",
            filters: ["iot", "embedded"],
            priority: 0,
            description: "IoT weather tracker using NodeMCU and environmental sensors.",
            highlights: [
                "Temperature & humidity sensing",
                "Barometric pressure",
                "Wi-Fi data transmission",
                "Cloud dashboard integration"
            ],
            techStack: ["NodeMCU (ESP8266)", "DHT11", "BME280", "Arduino IDE", "IoT"]
        },
        {
            id: "oled-monitor",
            title: "OLED System Monitor",
            badge: null,
            badgeClass: "badge-default",
            category: "iot",
            filters: ["embedded"],
            priority: 0,
            description: "Real-time PC system stats on OLED display: CPU, RAM, temperature, battery, FPS.",
            highlights: [
                "Live CPU & RAM usage",
                "GPU/CPU temperature",
                "Battery monitoring",
                "FPS counter"
            ],
            techStack: ["Arduino", "OLED (SSD1306)", "Python (psutil)", "Serial Communication"]
        },
        {
            id: "parking",
            title: "Parking Sensor for Taigun",
            badge: null,
            badgeClass: "badge-default",
            category: "iot",
            filters: ["embedded"],
            priority: 0,
            description: "Custom Arduino + ultrasonic front-parking assist system.",
            highlights: [
                "Multiple ultrasonic sensors",
                "Proximity buzzer alerts",
                "LED distance indicator",
                "Custom 3D printed mounts"
            ],
            techStack: ["Arduino", "HC-SR04", "C++", "3D Printing"]
        },
        {
            id: "digital-pet",
            title: "Digital Pet OLED",
            badge: null,
            badgeClass: "badge-default",
            category: "iot",
            filters: ["embedded"],
            priority: 0,
            description: "Animated digital pet on OLED display that reacts to keyboard/mouse activity.",
            highlights: [
                "Custom pixel-art animations",
                "PC activity detection",
                "Serial communication",
                "Multiple animated states"
            ],
            techStack: ["Arduino (C++)", "OLED (SSD1306)", "Python (pynput)", "Serial"]
        }
    ],

    /* ========== HACKATHONS ========== */
    hackathons: [
        {
            event: "IIT Madras Hackathon",
            date: "Aug 2024",
            role: "Team Lead",
            tech: "Python, OpenCV, IoT",
            outcome: "Developed a prototype for a smart traffic management system using real-time image processing."
        },
        {
            event: "SRM Smart India Hackathon (Internal)",
            date: "Mar 2024",
            role: "Team Lead",
            tech: "MongoDB, Node.js, HTML, CSS, JavaScript",
            outcome: "Built a career guidance web app to assist students in choosing career paths based on skills and interests."
        },
        {
            event: "St. Joseph's — SafeHer Hack",
            date: "Jan 2024",
            role: "App Developer",
            tech: "Kotlin, Firebase",
            outcome: "Contributed to 'SafeHer', a women's safety app with live location tracking and emergency alerts."
        }
    ],

    /* ========== ACHIEVEMENTS ========== */
    achievements: [
        {
            title: "Project Day at SRM",
            description: "Recognized for outstanding project demonstration at SRM Institute's annual Project Day showcase.",
            org: "SRM Institute of Science and Technology"
        },
        {
            title: "Code Auction at Al-Zypher",
            description: "Achievement at Code Auction event during Al-Zypher, Department of Computer Science technical fest.",
            org: "Department of Computer Science · SRM"
        }
    ],

    /* ========== SKILLS ========== */
    skills: [
        {
            category: "Programming",
            items: [
                { name: "Python", level: 90 },
                { name: "Kotlin", level: 55 },
                { name: "C++", level: 85 },
                { name: "HTML & CSS", level: 75 },
                { name: "JavaScript", level: 65 },
                { name: "SQL", level: 50 },
                { name: "Java", level: 45 },
                { name: "Verilog HDL", level: 40 }
            ]
        },
        {
            category: "Embedded Systems",
            items: [
                { name: "Arduino", level: 95 },
                { name: "ESP32", level: 85 },
                { name: "Sensors & Instrumentation", level: 85 },
                { name: "OLED Displays", level: 80 },
                { name: "Embedded C", level: 75 }
            ]
        },
        {
            category: "Industrial Automation",
            items: [
                { name: "PLC", level: 60 },
                { name: "DCS", level: 55 },
                { name: "Instrumentation", level: 70 },
                { name: "Control Systems", level: 65 },
                { name: "Industrial IoT", level: 70 }
            ]
        },
        {
            category: "AI & ML",
            items: [
                { name: "OpenCV", level: 80 },
                { name: "MediaPipe", level: 75 },
                { name: "Machine Learning", level: 60 },
                { name: "Computer Vision", level: 75 },
                { name: "Firebase", level: 70 }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "VS Code", level: 95 },
                { name: "GitHub", level: 85 },
                { name: "Android Studio", level: 70 },
                { name: "Microsoft Office", level: 80 },
                { name: "PCB Design Tools", level: 50 }
            ]
        }
    ],

    /* ========== TECH CLOUD ========== */
    techCloud: [
        "Python", "Kotlin", "ESP32", "Arduino", "PLC",
        "DCS", "Android", "IoT", "OpenCV", "Firebase",
        "Machine Learning", "GitHub", "Verilog", "C++", "JavaScript"
    ],

    /* ========== CERTIFICATIONS ========== */
    certifications: [
        {
            title: "Accenture NA",
            issuer: "Accenture",
            description: "North America Ready. Virtual Experience Program.",
            url: null
        },
        {
            title: "Walmart USA",
            issuer: "Walmart",
            description: "Advanced Software Engineering. Virtual Experience Program.",
            url: null
        },
        {
            title: "Electronic Arts",
            issuer: "Electronic Arts (EA)",
            description: "Software Engineering. Virtual Experience Program.",
            url: null
        }
    ],

    /* ========== HOBBIES ========== */
    hobbies: [
        { icon: "🎮", text: "Gaming" },
        { icon: "🤖", text: "Building Robots" },
        { icon: "🎬", text: "Sci-Fi Movies" },
        { icon: "🎵", text: "Listening to Lofi" },
        { icon: "🛠️", text: "Hardware Tinkering" },
        { icon: "💻", text: "Learning New Tech" }
    ],

    /* ========== FILTER CATEGORIES ========== */
    filterCategories: [
        { key: "all", label: "All" },
        { key: "featured", label: "Featured" },
        { key: "embedded", label: "Embedded" },
        { key: "iot", label: "IoT" },
        { key: "software", label: "Software" },
        { key: "ai", label: "AI" },
        { key: "industrial", label: "Industrial" }
    ]
};


/**
 * -----------------------------------------------------------------
 * PORTFOLIO INITIALIZATION SCRIPT
 * -----------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {

    // === Cache DOM Elements ===
    const header = document.getElementById('header');
    const mainContent = document.getElementById('main-content');
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const navLinks = document.querySelectorAll('.nav-link');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    // Easter Egg
    const fridayModal = document.getElementById('friday-modal');
    const fridayModalClose = document.getElementById('friday-modal-close-btn');
    let fridayKeySequence = '';

    // Data Containers
    const metricsGrid = document.getElementById('metrics-grid');
    const educationCarousel = document.getElementById('education-carousel');
    const educationTimeline = document.getElementById('education-timeline');
    const experienceTimeline = document.getElementById('experience-timeline');
    const projectFilters = document.getElementById('project-filters');
    const projectsGrid = document.getElementById('projects-grid');
    const hackathonsGrid = document.getElementById('hackathons-grid');
    const achievementsGrid = document.getElementById('achievements-grid');
    const skillsGrid = document.getElementById('skills-grid');
    const techCloudContainer = document.getElementById('tech-cloud-container');
    const certificationsCarousel = document.getElementById('certifications-carousel');
    const hobbiesTrack = document.getElementById('hobbies-track');
    const typewriterText = document.getElementById('typewriter-text');
    const bgCanvas = document.getElementById('bg-canvas');


    // =============================================
    // 1. HEADER & NAVIGATION
    // =============================================

    function handleLandingScroll() {
        if (window.scrollY > window.innerHeight * 0.5) {
            header.classList.add('visible');
            mainContent.classList.add('visible');
        } else {
            header.classList.remove('visible');
            mainContent.classList.remove('visible');
        }
        if (window.scrollY > window.innerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleLandingScroll);

    function toggleMobileNav() {
        const isOpen = navMobile.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        navToggle.classList.toggle('open', isOpen);
    }
    navToggle.addEventListener('click', toggleMobileNav);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMobile.classList.contains('open')) {
                toggleMobileNav();
            }
        });
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    function updateActiveLink() {
        let currentSectionId = 'home';
        const mainTop = mainContent.offsetTop;
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - varToPx('--header-height') - 50;
            if (scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (scrollY < mainTop) {
            currentSectionId = 'home';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();


    // =============================================
    // 2. CONTENT RENDERING
    // =============================================

    // --- Metrics ---
    function renderMetrics() {
        if (!metricsGrid || !window.portfolioData.metrics) return;

        metricsGrid.innerHTML = window.portfolioData.metrics.map((m, i) => `
            <div class="metric-card hud-card reveal stagger-${i + 1}">
                <div class="metric-value" data-target="${m.value}" data-suffix="${m.suffix}" data-decimal="${m.isDecimal || false}">0</div>
                <div class="metric-label">${m.label}</div>
            </div>
        `).join('');
    }

    // --- Education ---
    function renderEducation() {
        if (!educationCarousel || !window.portfolioData.education) return;

        let cardHTML = '';
        let dotsHTML = '';
        window.portfolioData.education.forEach((item, index) => {
            cardHTML += `
                <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${window.portfolioData.education.length}">
                    <div class="card education-card hud-card">
                        <div class="card-content">
                            <div class="education-card-header">
                                <h3>${item.school}</h3>
                                <span>${item.year}</span>
                            </div>
                            <p>${item.degree}</p>
                            <p class="text-accent">${item.grade}</p>
                        </div>
                    </div>
                </div>
            `;
            dotsHTML += `<button class="timeline-dot" data-index="${index}" aria-label="Go to item ${index + 1}"></button>`;
        });

        educationCarousel.innerHTML = cardHTML;
        educationTimeline.querySelector('.timeline-dots').innerHTML = dotsHTML;
    }

    // --- Experience Timeline ---
    function renderExperience() {
        if (!experienceTimeline || !window.portfolioData.internships) return;

        const html = window.portfolioData.internships.map((item, i) => `
            <div class="timeline-entry ${item.featured ? 'featured-entry' : ''} reveal stagger-${i + 1}"
                 data-internship-id="${item.id}">
                <div class="timeline-card open-modal-btn hud-card"
                     data-modal-type="internship"
                     data-modal-id="${item.id}"
                     tabindex="0"
                     role="button"
                     aria-label="View details for ${item.company}">
                    ${item.badge ? `<span class="badge ${item.badgeClass}">${item.badge}</span>` : ''}
                    <h3 class="timeline-company">${item.company}</h3>
                    <p class="timeline-role">${item.position}</p>
                    <p class="timeline-meta">${item.duration}${item.location ? ' · ' + item.location : ''}</p>
                    <p>${item.description}</p>
                    <ul class="timeline-highlights">
                        ${item.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                    <div class="tech-chips">
                        ${item.techStack.map(t => `<span class="chip">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        experienceTimeline.innerHTML = `<div class="exp-timeline-progress"></div>${html}`;
    }

    // --- Projects ---
    function renderProjects() {
        if (!projectsGrid || !window.portfolioData.projects) return;

        // Render filter buttons
        if (projectFilters) {
            projectFilters.innerHTML = window.portfolioData.filterCategories.map((cat, i) => `
                <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat.key}">${cat.label}</button>
            `).join('');
        }

        // Sort: featured first (by priority), then rest
        const sorted = [...window.portfolioData.projects].sort((a, b) => {
            if (a.category === 'featured' && b.category !== 'featured') return -1;
            if (a.category !== 'featured' && b.category === 'featured') return 1;
            if (a.priority && b.priority) return a.priority - b.priority;
            return 0;
        });

        projectsGrid.innerHTML = sorted.map((project, i) => `
            <div class="project-item ${project.category === 'featured' ? 'featured-project' : ''} reveal stagger-${(i % 8) + 1}"
                 data-categories="${project.filters.join(',')}"
                 data-project-id="${project.id}"
                 data-priority="${project.priority || 0}">
                <div class="project-card open-modal-btn hud-card"
                     data-modal-type="project"
                     data-modal-id="${project.id}"
                     tabindex="0"
                     role="button"
                     aria-label="View details for ${project.title}">
                    <div class="project-card-header">
                        <div>
                            ${project.badge ? `<span class="badge ${project.badgeClass}">${project.badge}</span>` : ''}
                            <h3>${project.title}</h3>
                        </div>
                        ${project.icons ? `<span class="project-icons">${project.icons}</span>` : ''}
                    </div>
                    <p>${project.description}</p>
                    ${project.category === 'featured' && project.highlights ? `
                        <ul class="project-highlights">
                            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                    ` : ''}
                    <div class="project-card-footer">
                        <div class="tech-chips">
                            ${project.techStack.slice(0, 4).map(t => `<span class="chip">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- Hackathons ---
    function renderHackathons() {
        if (!hackathonsGrid || !window.portfolioData.hackathons) return;

        hackathonsGrid.innerHTML = window.portfolioData.hackathons.map((item, i) => `
            <div class="card hackathon-card hud-card reveal stagger-${i + 1}">
                <div class="card-content">
                    <h3>${item.event}</h3>
                    <div class="hackathon-card-meta">
                        <span>${item.date}</span>
                        <span>Role: ${item.role}</span>
                    </div>
                    <p><strong>Tech:</strong> ${item.tech}</p>
                    <p>${item.outcome}</p>
                </div>
            </div>
        `).join('');
    }

    // --- Achievements ---
    function renderAchievements() {
        if (!achievementsGrid || !window.portfolioData.achievements) return;

        achievementsGrid.innerHTML = window.portfolioData.achievements.map((item, i) => `
            <div class="achievement-card hud-card reveal stagger-${i + 1}">
                <div class="achievement-trophy">🏆</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p class="text-accent" style="font-size: 0.9rem; margin-top: 0.5rem;">${item.org}</p>
            </div>
        `).join('');
    }

    // --- Skills ---
    function renderSkills() {
        if (!skillsGrid || !window.portfolioData.skills) return;

        skillsGrid.innerHTML = window.portfolioData.skills.map((category, i) => `
            <div class="skills-category hud-card reveal stagger-${(i % 4) + 1}">
                <h3>${category.category}</h3>
                <div class="skills-list">
                    ${category.items.filter(item => typeof item.level === 'number').map(item => `
                        <div class="skill-bar">
                            <div class="skill-bar-info">
                                <span>${item.name}</span>
                                <span>${item.level}%</span>
                            </div>
                            <div class="skill-bar-track">
                                <div class="skill-bar-progress" data-level="${item.level}" style="width: 0;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="skills-tags">
                    ${category.items.map(item => `<span class="skill-tag">${item.name}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // --- Tech Cloud ---
    function renderTechCloud() {
        if (!techCloudContainer || !window.portfolioData.techCloud) return;

        const floatAnimations = ['float-1', 'float-2', 'float-3', 'float-4', 'float-5'];

        techCloudContainer.innerHTML = window.portfolioData.techCloud.map((tech, i) => {
            const anim = floatAnimations[i % floatAnimations.length];
            const duration = (4 + Math.random() * 4).toFixed(1);
            const delay = (Math.random() * 2).toFixed(1);
            return `<span class="tech-cloud-item" style="--float-animation: ${anim}; --float-duration: ${duration}s; --float-delay: ${delay}s;">${tech}</span>`;
        }).join('');
    }

    // --- Certifications ---
    function renderCertifications() {
        if (!certificationsCarousel || !window.portfolioData.certifications) return;

        certificationsCarousel.innerHTML = window.portfolioData.certifications.map((item, index) => `
            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${window.portfolioData.certifications.length}">
                <a href="${item.url || '#'}" class="card certification-card"
                   ${item.url ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="return false;" style="cursor: default;"'}
                   aria-label="${item.title} - ${item.issuer} ${item.url ? '(opens in new tab)' : '(link not provided)'}">
                    <div class="card-content">
                        <h3>${item.title}</h3>
                        <p>${item.issuer}</p>
                        <p class="text-muted">${item.description}</p>
                        ${item.url
                            ? '<span class="text-accent" style="margin-top: 1rem;">View Certificate</span>'
                            : '<span class="text-muted" style="margin-top: 1rem;">[Certificate Link Placeholder]</span>'}
                    </div>
                </a>
            </div>
        `).join('');
    }

    // --- Hobbies ---
    function renderHobbies() {
        if (!hobbiesTrack || !window.portfolioData.hobbies) return;

        const hobbyItems = window.portfolioData.hobbies.map(item => `
            <div class="hobby-item" aria-hidden="true">
                <span>${item.icon}</span>
                <span>${item.text}</span>
            </div>
        `).join('');

        hobbiesTrack.innerHTML = hobbyItems + hobbyItems;
    }


    // =============================================
    // 3. MODAL SYSTEM
    // =============================================

    let lastFocusedElement;
    const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function openModal(modalType, id) {
        let data;
        if (modalType === 'internship') {
            data = window.portfolioData.internships.find(item => item.id === id);
        } else if (modalType === 'project') {
            data = window.portfolioData.projects.find(item => item.id === id);
        }

        if (!data) return;

        let contentHTML = '';
        if (modalType === 'internship') {
            contentHTML = `
                <div class="modal-header">
                    <h2>${data.company}</h2>
                    <h3 class="text-muted">${data.position}</h3>
                </div>
                <div class="modal-body">
                    <div class="modal-text">
                        ${data.badge ? `<span class="badge ${data.badgeClass}" style="margin-bottom: 1rem; display: inline-block;">${data.badge}</span>` : ''}
                        <p class="timeline-meta">${data.duration}${data.location ? ' · ' + data.location : ''}</p>
                        <p>${data.description}</p>
                        <h4 style="margin-top: 1rem; margin-bottom: 0.5rem; color: var(--text-light);">Key Areas:</h4>
                        <ul class="timeline-highlights">
                            ${data.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                        <div class="modal-tech-stack">
                            ${data.techStack.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (modalType === 'project') {
            contentHTML = `
                <div class="modal-header">
                    <h2>${data.title}</h2>
                </div>
                <div class="modal-body">
                    <div class="modal-text">
                        ${data.badge ? `<span class="badge ${data.badgeClass}" style="margin-bottom: 1rem; display: inline-block;">${data.badge}</span>` : ''}
                        <p>${data.description}</p>
                        ${data.highlights ? `
                            <h4 style="margin-top: 1rem; margin-bottom: 0.5rem; color: var(--text-light);">Features:</h4>
                            <ul class="timeline-highlights">
                                ${data.highlights.map(h => `<li>${h}</li>`).join('')}
                            </ul>
                        ` : ''}
                        <div class="modal-tech-stack">
                            ${data.techStack.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        modalContent.innerHTML = contentHTML;
        lastFocusedElement = document.activeElement;
        modalOverlay.classList.add('open');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const focusableElements = modalContainer.querySelectorAll(focusableElementsSelector);
        const firstFocusable = modalCloseBtn;
        const lastFocusable = focusableElements[focusableElements.length - 1] || firstFocusable;

        firstFocusable.focus();
        modalContainer.addEventListener('keydown', (e) => trapFocus(e, firstFocusable, lastFocusable));
    }

    function closeModal(modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    function trapFocus(e, firstFocusable, lastFocusable) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }

    // Global click listener for opening modals
    document.body.addEventListener('click', (e) => {
        const openBtn = e.target.closest('.open-modal-btn');
        if (openBtn) {
            const { modalType, modalId } = openBtn.dataset;
            openModal(modalType, modalId);
        }
    });

    // Keydown to open with Enter/Space
    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const openBtn = e.target.closest('.open-modal-btn[tabindex="0"]');
            if (openBtn) {
                e.preventDefault();
                const { modalType, modalId } = openBtn.dataset;
                openModal(modalType, modalId);
            }
        }
    });

    // Close modal events
    modalCloseBtn.addEventListener('click', () => closeModal(modalOverlay));
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal(modalOverlay);
    });

    fridayModalClose.addEventListener('click', () => closeModal(fridayModal));
    fridayModal.addEventListener('click', (e) => {
        if (e.target === fridayModal) closeModal(fridayModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalOverlay.classList.contains('open')) closeModal(modalOverlay);
            if (fridayModal.classList.contains('open')) closeModal(fridayModal);
        }
    });


    // =============================================
    // 4. CAROUSEL & TIMELINE
    // =============================================

    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const wrapper = carousel.closest('.carousel-wrapper');
        const items = carousel.querySelectorAll('.carousel-item');
        if (items.length === 0) return;

        let currentIndex = 0;

        const timelineId = carousel.dataset.timeline;
        const timeline = document.getElementById(timelineId);
        let timelineDots = [];
        if (timeline) {
            timelineDots = timeline.querySelectorAll('.timeline-dot');
        }

        function updateCarousel(targetIndex) {
            currentIndex = targetIndex;

            const itemWidthWithMargin = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginRight);
            let scrollAmount = (itemWidthWithMargin * currentIndex);

            const containerWidth = carousel.getBoundingClientRect().width;
            const itemVisibleWidth = items[0].getBoundingClientRect().width;
            const offset = (containerWidth - itemVisibleWidth) / 2;

            carousel.scrollTo({
                left: scrollAmount - offset,
                behavior: 'smooth'
            });

            updateTimeline();
        }

        function updateTimeline() {
            if (!timeline) return;

            timelineDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });

            const progress = timeline.querySelector('.timeline-progress');
            if (progress) {
                let percent = 0;
                if (items.length > 1) {
                    percent = (currentIndex / (items.length - 1)) * 100;
                }
                progress.style.width = `${percent}%`;
            }
        }

        // Timeline dot click
        if (timeline) {
            timeline.querySelectorAll('.timeline-dot').forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const newIndex = parseInt(e.target.dataset.index);
                    updateCarousel(newIndex);
                });
            });
        }

        // Update on scroll end
        let scrollEndTimer;
        carousel.addEventListener('scroll', () => {
            clearTimeout(scrollEndTimer);
            scrollEndTimer = setTimeout(() => {
                let minDistance = Infinity;
                let newIndex = 0;
                const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

                items.forEach((item, index) => {
                    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
                    const distance = Math.abs(itemCenter - carouselCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        newIndex = index;
                    }
                });

                if (newIndex !== currentIndex) {
                    currentIndex = newIndex;
                    updateTimeline();
                }
            }, 150);
        });

        updateCarousel(0);
    }


    // =============================================
    // 5. TYPEWRITER EFFECT
    // =============================================

    function initTypewriter() {
        if (!typewriterText || !window.portfolioData.typewriterRoles) return;

        const roles = window.portfolioData.typewriterRoles;
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typewriterText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 40;
            } else {
                typewriterText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 400; // Brief pause before next word
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 1000);
    }


    // =============================================
    // 6. METRICS COUNTER
    // =============================================

    function initMetricsCounter() {
        const metricValues = document.querySelectorAll('.metric-value');
        if (metricValues.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseFloat(el.dataset.target);
                    const suffix = el.dataset.suffix || '';
                    const isDecimal = el.dataset.decimal === 'true';
                    animateCounter(el, target, suffix, isDecimal);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        metricValues.forEach(el => observer.observe(el));
    }

    function animateCounter(el, target, suffix, isDecimal) {
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = eased * target;

            if (isDecimal) {
                el.textContent = currentValue.toFixed(2) + suffix;
            } else {
                el.textContent = Math.floor(currentValue) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                if (isDecimal) {
                    el.textContent = target.toFixed(2) + suffix;
                } else {
                    el.textContent = target + suffix;
                }
            }
        }

        requestAnimationFrame(update);
    }


    // =============================================
    // 7. SCROLL REVEAL ANIMATIONS
    // =============================================

    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
        if (revealElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => observer.observe(el));
    }


    // =============================================
    // 8. PROJECT FILTER SYSTEM
    // =============================================

    function initProjectFilters() {
        if (!projectFilters) return;

        projectFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;

            // Update active button
            projectFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterKey = btn.dataset.filter;
            const items = projectsGrid.querySelectorAll('.project-item');

            items.forEach(item => {
                const categories = item.dataset.categories.split(',');
                const shouldShow = filterKey === 'all' || categories.includes(filterKey);

                if (shouldShow) {
                    item.classList.remove('filter-hidden');
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        });
                    });
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.classList.add('filter-hidden');
                    }, 300);
                }
            });
        });
    }


    // =============================================
    // 9. SKILL BAR ANIMATION
    // =============================================

    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-bar-progress');

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const level = bar.dataset.level;
                    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
                    if (motionQuery.matches) {
                        bar.style.width = `${level}%`;
                    } else {
                        bar.style.transition = 'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
                        bar.style.width = `${level}%`;
                    }
                    obs.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }


    // =============================================
    // 10. BACKGROUND CANVAS
    // =============================================

    function initBackgroundCanvas() {
        if (!bgCanvas) return;

        const ctx = bgCanvas.getContext('2d');
        let animFrameId;
        let particles = [];
        const GRID_SIZE = 50;
        const PARTICLE_COUNT = 25;

        function resize() {
            bgCanvas.width = window.innerWidth;
            bgCanvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Mouse tracking for interactive network constellation
        let mouse = { x: null, y: null, radius: 160 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }, { passive: true });
        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Initialize particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * bgCanvas.width,
                y: Math.random() * bgCanvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: -Math.random() * 0.4 - 0.1,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        let lastTime = 0;
        const FPS_INTERVAL = 1000 / 30; // Cap at 30fps

        function draw(timestamp) {
            if (document.hidden) {
                animFrameId = requestAnimationFrame(draw);
                return;
            }

            const elapsed = timestamp - lastTime;
            if (elapsed < FPS_INTERVAL) {
                animFrameId = requestAnimationFrame(draw);
                return;
            }
            lastTime = timestamp;

            ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

            // Draw grid
            ctx.strokeStyle = 'rgba(229, 9, 20, 0.15)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();

            for (let x = 0; x < bgCanvas.width; x += GRID_SIZE) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, bgCanvas.height);
            }
            for (let y = 0; y < bgCanvas.height; y += GRID_SIZE) {
                ctx.moveTo(0, y);
                ctx.lineTo(bgCanvas.width, y);
            }
            ctx.stroke();

            // Draw circuit traces (decorative)
            ctx.strokeStyle = 'rgba(229, 9, 20, 0.12)';
            ctx.lineWidth = 1;
            const traceCount = 4;
            for (let i = 0; i < traceCount; i++) {
                const baseX = (bgCanvas.width / (traceCount + 1)) * (i + 1);
                const baseY = bgCanvas.height * 0.2 + (i * bgCanvas.height * 0.15);
                ctx.beginPath();
                ctx.moveTo(baseX, baseY);
                ctx.lineTo(baseX + 60, baseY);
                ctx.lineTo(baseX + 60, baseY + 40);
                ctx.lineTo(baseX + 120, baseY + 40);
                ctx.stroke();

                // Node dot
                ctx.fillStyle = 'rgba(229, 9, 20, 0.3)';
                ctx.beginPath();
                ctx.arc(baseX + 120, baseY + 40, 3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw & update particles
            particles.forEach(p => {
                ctx.fillStyle = `rgba(229, 9, 20, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Push effect & connection line if close to mouse
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        // Draw connection line
                        ctx.strokeStyle = `rgba(229, 9, 20, ${(1 - dist / mouse.radius) * 0.22})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();

                        // Gentle push away
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        p.x += Math.cos(angle) * force * 1.5;
                        p.y += Math.sin(angle) * force * 1.5;
                    }
                }

                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.y < -10) {
                    p.y = bgCanvas.height + 10;
                    p.x = Math.random() * bgCanvas.width;
                }
                if (p.x < -10) p.x = bgCanvas.width + 10;
                if (p.x > bgCanvas.width + 10) p.x = -10;
            });

            animFrameId = requestAnimationFrame(draw);
        }

        animFrameId = requestAnimationFrame(draw);
    }


    // =============================================
    // 11. CURSOR GLOW
    // =============================================

    function initCursorGlow() {
        document.addEventListener('mousemove', (e) => {
            document.body.style.setProperty('--cursor-x', e.clientX + 'px');
            document.body.style.setProperty('--cursor-y', e.clientY + 'px');
        });
    }


    // =============================================
    // 12. BUTTON RIPPLE EFFECT
    // =============================================

    function initRippleEffect() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn, .filter-btn, .contact-social-btn');
            if (!btn) return;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = btn.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }


    // =============================================
    // 13. CARD TILT & SPOTLIGHT
    // =============================================

    function initCardEffects() {
        // Tilt effect on featured project cards
        const featuredCards = document.querySelectorAll('.featured-project .project-card');

        featuredCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -3;
                const rotateY = ((x - centerX) / centerX) * 3;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

                // Spotlight
                const spotX = ((x / rect.width) * 100).toFixed(1);
                const spotY = ((y / rect.height) * 100).toFixed(1);
                card.style.setProperty('--spotlight-x', spotX + '%');
                card.style.setProperty('--spotlight-y', spotY + '%');
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.setProperty('--spotlight-x', '50%');
                card.style.setProperty('--spotlight-y', '50%');
            });
        });
    }


    // =============================================
    // 14. EXPERIENCE TIMELINE SCROLL PROGRESS
    // =============================================

    function initTimelineProgress() {
        const timeline = document.getElementById('experience-timeline');
        if (!timeline) return;

        const progressBar = timeline.querySelector('.exp-timeline-progress');
        if (!progressBar) return;

        function updateProgress() {
            const rect = timeline.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top >= viewportHeight || rect.bottom <= 0) {
                progressBar.style.height = '0px';
                return;
            }

            const visibleTop = Math.max(0, -rect.top);
            const totalHeight = rect.height;
            const progress = Math.min(visibleTop / (totalHeight - viewportHeight * 0.5), 1);

            progressBar.style.height = (progress * totalHeight) + 'px';
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
    }


    // =============================================
    // 15. CONTACT FORM
    // =============================================

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (contactForm.checkValidity()) {
                console.log('Form submitted (demo - no server).');
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
                contactForm.reset();
            } else {
                contactForm.reportValidity();
            }
        });
    }


    // =============================================
    // 16. EASTER EGG (FRIDAY)
    // =============================================

    function initFriday() {
        const targetSequence = "friday";

        window.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (modalOverlay.classList.contains('open') || fridayModal.classList.contains('open')) return;

            fridayKeySequence += e.key.toLowerCase();
            fridayKeySequence = fridayKeySequence.slice(-targetSequence.length);

            if (fridayKeySequence === targetSequence) {
                openFridayModal();
                fridayKeySequence = '';
            }
        });
    }

    function openFridayModal() {
        lastFocusedElement = document.activeElement;
        fridayModal.classList.add('open');
        fridayModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const focusableElements = fridayModal.querySelectorAll(focusableElementsSelector);
        const firstFocusable = fridayModalClose;
        const lastFocusable = focusableElements[focusableElements.length - 1] || firstFocusable;

        firstFocusable.focus();
        fridayModal.addEventListener('keydown', (e) => trapFocus(e, firstFocusable, lastFocusable));
    }


    // =============================================
    // 17. TEXT SCRAMBLER EFFECT
    // =============================================

    function initTextScrambler() {
        const chars = "01$#@!%?&XYZ{}[]<>";

        function scramble(element) {
            if (element.dataset.scrambling === 'true') return;
            element.dataset.scrambling = 'true';

            const originalText = element.dataset.originalText || element.textContent;
            if (!element.dataset.originalText) {
                element.dataset.originalText = originalText;
            }

            let iteration = 0;
            const interval = setInterval(() => {
                element.textContent = originalText
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        if (char === " ") return " ";
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                    element.dataset.scrambling = 'false';
                }
                iteration += 1 / 3;
            }, 30);
        }

        // Scramble section headers when revealed on scroll
        const headers = document.querySelectorAll('.section-header h2');
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    scramble(entry.target);
                    headerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });

        headers.forEach(h => headerObserver.observe(h));

        // Scramble elements on hover
        const scramblerItems = document.querySelectorAll('.nav-link, .section-header h2, .logo');
        scramblerItems.forEach(el => {
            el.addEventListener('mouseenter', () => scramble(el));
        });
    }


    // =============================================
    // 18. TERMINAL BOOT SEQUENCE
    // =============================================

    function initBootSequence() {
        const bootOverlay = document.getElementById('boot-overlay');
        const bootText = document.getElementById('boot-text');
        const progressBar = document.getElementById('boot-progress-bar');
        const skipBtn = document.getElementById('boot-skip-btn');
        if (!bootOverlay || !bootText || !progressBar) return;

        const logs = [
            "Initializing Antigravity Core v4.6...",
            "Loading hardware profiles & telemetry... [OK]",
            "Establishing neural link with ECE subnets... [CONNECTING]",
            "Connected. Host address localized at SRMIST.",
            "Loading academic archives (CGPA: 8.89)... [LOADED]",
            "Booting CEMS Industrial Monitor... [READY]",
            "Booting MSDAC Railway axle networks... [READY]",
            "Launching Drone Crop Health telemetry... [READY]",
            "System state: NOMINAL. Welcome, Chaitanya."
        ];

        let logIndex = 0;
        let currentText = "";
        let progress = 0;
        let bootCompleted = false;

        function typeLog() {
            if (bootCompleted) return;
            if (logIndex < logs.length) {
                const line = logs[logIndex];
                currentText += (logIndex > 0 ? "\n" : "") + "> " + line;
                bootText.textContent = currentText;
                logIndex++;

                progress = Math.min(100, (logIndex / logs.length) * 100);
                progressBar.style.width = `${progress}%`;

                setTimeout(typeLog, 190); // ~1.9s total print time
            } else {
                setTimeout(completeBoot, 200);
            }
        }

        function completeBoot() {
            if (bootCompleted) return;
            bootCompleted = true;
            bootOverlay.classList.add('fade-out');
            document.body.style.overflow = '';
            document.body.classList.add('booted');
        }

        if (skipBtn) {
            skipBtn.addEventListener('click', completeBoot);
        }

        document.body.style.overflow = 'hidden';
        setTimeout(typeLog, 200);
    }


    // =============================================
    // 19. HELPERS
    // =============================================

    function getCssVar(varName) {
        return getComputedStyle(document.documentElement).getPropertyValue(varName);
    }

    function varToPx(varName) {
        return parseFloat(getCssVar(varName) || 0);
    }


    // =============================================
    // 20. INITIALIZATION
    // =============================================

    // Render all content
    renderMetrics();
    renderEducation();
    renderExperience();
    renderProjects();
    renderHackathons();
    renderAchievements();
    renderSkills();
    renderTechCloud();
    renderCertifications();
    renderHobbies();

    // Initialize interactive features
    initCarousel('education-carousel');
    initCarousel('certifications-carousel');
    initTypewriter();
    initMetricsCounter();
    initScrollReveal();
    initProjectFilters();
    animateSkills();
    initBackgroundCanvas();
    initCursorGlow();
    initRippleEffect();
    initCardEffects();
    initTimelineProgress();
    initFriday();
    initTextScrambler();
    initBootSequence();

});
