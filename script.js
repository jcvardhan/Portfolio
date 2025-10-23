/*
 * =============================================
 * SCRIPT.JS
 * ---------------------------------------------
 * Main JavaScript for Chaitanya Vardhan's Portfolio
 * =============================================
 */


/**
 * -----------------------------------------------------------------
 * PORTFOLIO CONTENT DATABASE
 * -----------------------------------------------------------------
 * Edit all your portfolio content here.
 * The script will automatically build the HTML for you.
 */
window.portfolioData = {
    
    education: [
        {
            school: "Sandur Residential School",
            degree: "Class 10 (ICSE)",
            year: "2021",
            grade: "83%"
        },
        {
            school: "Sri Chaitanya College of Education",
            degree: "Class 12 (PCMC)",
            year: "2021-22",
            grade: "85%"
        },
        {
            school: "SRM Institute of Science and Technology",
            degree: "B.Tech ECE",
            year: "2023-Present",
            grade: "CGPA: [9.0]" // <-- REPLACE THIS
        }
    ],
    
    internships: [
        {
            id: "jsw",
            title: "JSW Energy Ltd",
            role: "IoT Intern",
            description: "Developed and deployed IoT solutions for monitoring systems. Worked with sensors, data aggregation, and cloud platforms to improve operational efficiency.",
            // No imageUrl needed
            details: `
                <p>During my internship at JSW Energy Ltd, I was part of the digital transformation team.</p>
                <ul>
                    <li>Designed and implemented a CEMS (Continuous Emission Monitoring System) prototype using IoT sensors.</li>
                    <li>Worked with NodeMCU, various gas sensors (NO₂, SO₂), and dust sensors.</li>
                    <li>Data was transmitted to a central dashboard for real-time monitoring and compliance reporting.</li>
                    <li>Gained hands-on experience in industrial IoT applications and data management.</li>
                </ul>
            `,
            techStack: ["Arduino", "NodeMCU", "IoT Sensors", "MQTT", "Data Visualization"]
        },
        {
            id: "rinex",
            title: "Rinex",
            role: "AI/ML Intern",
            description: "Focused on developing computer vision models. Built a hand gesture recognition system using OpenCV and MediaPipe for PC control.",
            // No imageUrl needed
            details: `
                <p>At Rinex, I explored the practical applications of Artificial Intelligence and Machine Learning.</p>
                <ul>
                    <li>My primary project was a Hand Gesture Recognition system for PC automation.</li>
                    <li>Utilized OpenCV for real-time video capture and MediaPipe for high-fidelity hand tracking.</li>
                    <li>Mapped specific gestures (e.g., fist, open palm, pointing) to PC commands like volume control, brightness adjustment, and application launching.</li>
                    <li>This project solidified my skills in computer vision and Python programming.</li>
                </ul>
            `,
            techStack: ["Python", "OpenCV", "MediaPipe", "Machine Learning"]
        }
    ],
    
    projects: {
        // Group 1
        myCreations: [
            {
                id: "bluchat",
                title: "BluChat (Android App)",
                description: "Kotlin-based Bluetooth chat app with retro Nothing OS UI.",
                // No imageUrl needed
                details: {
                    summary: "A native Android application built with Kotlin that allows users to chat over a classic Bluetooth connection (RFCOMM). The UI is inspired by the retro-pixel aesthetic of Nothing OS, featuring custom-designed widgets and layouts.",
                    features: [
                        "Device discovery and pairing",
                        "Real-time, two-way text communication",
                        "Connection status indicators",
                        "Custom Nothing OS-inspired user interface"
                    ],
                    techStack: ["Kotlin", "Android Studio", "Bluetooth Classic API", "XML Layouts", "MVVM"]
                }
                // link property removed
            },
            {
                id: "voice-assistant",
                title: "AI Voice Assistant (FRIDAY/JARVIS)",
                description: "Voice automation for PC: launch apps, control volume/brightness, open URLs.",
                details: {
                    summary: "A Python-based desktop voice assistant inspired by JARVIS/FRIDAY. It uses speech recognition to understand commands and OS automation libraries to perform tasks, providing a hands-free way to interact with a PC.",
                    features: [
                        "Open applications (e.g., 'Open Chrome')",
                        "Control system volume and screen brightness",
                        "Open specific websites",
                        "Tell the time or date",
                        "Text-to-speech feedback"
                    ],
                    techStack: ["Python", "SpeechRecognition", "pyttsx3", "OS (subprocess)", "pycaw"]
                }
            },
            {
                id: "digital-pet",
                title: "Digital Pet on OLED",
                description: "Animated pet reacting to keyboard input.",
                details: {
                    summary: "A fun hardware project that displays an animated digital pet on a small OLED screen (SSD1306). The pet's animations (e.g., happy, sleeping, bored) are controlled by monitoring keyboard or mouse activity on the host PC.",
                    features: [
                        "Real-time animation on OLED display",
                        "Communicates with PC via Serial (Python script)",
                        "Reacts to user activity (typing, mouse movement)",
                        "Custom pixel-art animations"
                    ],
                    techStack: ["Arduino (C++)", "OLED (SSD1306)", "Python (pynput)", "Serial Communication"]
                }
            }
        ],
        // Group 2
        iotProjects: [
            {
                id: "oled-monitor",
                title: "OLED System Monitor",
                description: "Real-time display: CPU, RAM, TEMPERATURE, BATTERY, FPS.",
                details: {
                    summary: "A custom hardware dashboard that displays real-time PC system statistics on an OLED screen. A Python script on the PC gathers the data and sends it over USB to an Arduino, which controls the display.",
                    features: [
                        "Live CPU and RAM usage percentage",
                        "GPU/CPU Temperature monitoring",
                        "Laptop battery level",
                        "Real-time FPS (Frames Per Second) counter",
                        "Compact, low-power display"
                    ],
                    techStack: ["Python (psutil, GPUtil)", "Arduino (C++)", "OLED (SSD1306)", "Serial"]
                }
            },
            {
                id: "weather-station",
                title: "Weather Monitoring System",
                description: "IoT-based weather tracker using NodeMCU and sensors.",
                details: {
                    summary: "An IoT weather station that collects local temperature, humidity, and pressure data. It uses a NodeMCU (ESP8266) to gather data from sensors (like DHT11/BME280) and send it to a cloud platform or local server for logging and visualization.",
                    features: [
                        "Temperature and Humidity (DHT11/22)",
                        "Barometric Pressure (BME280)",
                        "Wi-Fi data transmission",
                        "Can be integrated with Blynk, ThingSpeak, or a custom web dashboard"
                    ],
                    techStack: ["NodeMCU (ESP8266)", "Arduino IDE", "DHT11", "BME280", "IoT"]
                }
            },
            {
                id: "cems",
                title: "CEMS Monitoring System",
                description: "Emission monitoring IoT system for NO₂, SO₂, dust (government reporting).",
                details: {
                    summary: "A prototype Continuous Emission Monitoring System (CEMS) developed during an internship. This IoT device is designed to monitor industrial emissions like NO₂, SO₂, and particulate matter (dust) in real-time to ensure compliance with government environmental regulations.",
                    features: [
                        "Real-time sensing of NO₂, SO₂, and Dust (PM2.5)",
                        "Data logging and transmission for compliance reports",
                        "Built with industrial-grade sensors (or proxies like MQ-135)",
                        "NodeMCU for Wi-Fi connectivity"
                    ],
                    techStack: ["NodeMCU", "MQ-135", "Dust Sensor", "C++", "IoT"]
                }
            },
            {
                id: "parking-sensor",
                title: "Parking Sensor for Taigun",
                description: "Arduino + ultrasonic sensors front-parking system.",
                details: {
                    summary: "A custom-built front parking assist system for a VW Taigun (which typically lacks front sensors). It uses multiple ultrasonic sensors (HC-SR04) controlled by an Arduino to measure distances to obstacles. A buzzer and/or LED display inside the cabin provides proximity alerts to the driver.",
                    features: [
                        "Multiple ultrasonic sensors for wide coverage",
                        "Audible (buzzer) proximity alerts",
                        "Visual (LED) distance indicator (optional)",
                        "Custom 3D printed enclosures for sensors"
                    ],
                    techStack: ["Arduino Nano/Uno", "Ultrasonic Sensors (HC-SR04)", "C++", "3D Printing"]
                }
            }
        ],
        // Group 3
        aiProjects: [
            {
                id: "gesture-control",
                title: "Hand Gesture Recognition for PC Control",
                description: "OpenCV + MediaPipe gesture controls.",
                details: {
                    summary: "This project uses a webcam to recognize hand gestures in real-time and translate them into PC commands. It leverages the MediaPipe library for accurate hand landmark detection and OpenCV for video processing. This was a key project during an internship.",
                    features: [
                        "Recognizes gestures: Open Palm (Pause/Play), Pointing (Mouse Move), Fist (Click), 'V' sign (Volume Up)",
                        "Controls media playback, system volume, and mouse cursor",
                        "High-fidelity tracking using MediaPipe Hands"
                    ],
                    techStack: ["Python", "OpenCV", "MediaPipe", "pycaw", "pynput"]
                }
            }
        ],
        // Group 4
        webAndApp: [
            {
                id: "expense-tracker",
                title: "Expense Tracker Web App",
                description: "Firebase backend + Google Login.",
                details: {
                    summary: "A simple web application for tracking personal expenses. Users can log in with their Google account, add new expenses (with category and amount), and view a summary of their spending. All data is stored and synced in real-time using Google Firebase.",
                    features: [
                        "Google Authentication (OAuth)",
                        "Firestore database for real-time data sync",
                        "Add, edit, and delete expenses",
                        "Simple dashboard with spending summary"
                    ],
                    techStack: ["HTML", "CSS", "JavaScript", "Firebase (Auth & Firestore)"]
                }
            }
        ]
    },
    
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
            tech: "MongoDB, Node.js, Html, CSS, JavaScript",
            outcome: "Built a carrier guidance web app to assist students in choosing career paths based on skills and interests."
        },
        {
            event: "St. Joseph's - SafeHer Hack",
            date: "Jan 2024",
            role: "App Developer",
            tech: "Kotlin, Firebase",
            outcome: "Contributed to 'SafeHer', a women's safety app with live location tracking and emergency alerts."
        }
    ],
    
    skills: [
        {
            category: "Programming & Software",
            items: [
                { name: "Python", level: 90 },
                { name: "C++ (Arduino)", level: 85 },
                { name: "Kotlin (Android)", level: 55 },
                { name: "JavaScript (Web/Node.js)", level: 65 },
                { name: "HTML & CSS", level: 75 }
            ]
        },
        {
            category: "Hardware & Embedded",
            items: [
                { name: "Arduino (Uno, Nano)", level: 95 },
                { name: "NodeMCU (ESP8266)", level: 90 },
                { name: "Sensors (Ultrasonic, Gas, Temp)", level: 85 },
                { name: "OLED Displays (SSD1306)", level: 80 },
                { name: "Soldering & Circuitry", level: 75 }
            ]
        },
        {
            category: "AI, IoT & Frameworks",
            items: [
                { name: "OpenCV", level: 80 },
                { name: "MediaPipe", level: 75 },
                { name: "Firebase", level: 70 },
                { name: "IoT Platforms (Blynk)", level: 60 },
                { name: "Android Studio", level: 70 }
            ]
        },
        {
            category: "Tools & Other",
            items: [
                { name: "Git & GitHub", level: 85 },
                { name: "VS Code", level: 95 },
                { name: "Linux OS", level: 70 },
                { name: "Figma (UI/UX)", level: 60 },
                { name: "3D Printing (Basic)", level: 50 }
            ]
        }
    ],
    
    certifications: [
        {
            title: "Accenture NA",
            issuer: "Accenture",
            description: "North America Ready. Virtual Experience Program.",
            // REPLACE: Add a real URL to your certificate
        
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
        },
        {
            title: "Placeholder Certificate",
            issuer: "Provider",
            description: "Add another one of your certifications here.",
            url: null
        }
    ],
    
    hobbies: [
        { icon: "🎮", text: "Gaming" },
        { icon: "🤖", text: "Building Robots" },
        { icon: "🎬", text: "Sci-Fi Movies" },
        { icon: "🎵", text: "Listening to Lofi" },
        { icon: "🛠️", text: "Hardware Tinkering" },
        { icon: "💻", text: "Learning New Tech" }
    ]
};


/**
 * -----------------------------------------------------------------
 * PORTFOLIO INITIALIZATION SCRIPT
 * -----------------------------------------------------------------
 * This script handles all dynamic behavior and content rendering.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- Cache DOM Elements ---
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
    
    // --- Easter Egg Elements ---
    const fridayModal = document.getElementById('friday-modal');
    const fridayModalClose = document.getElementById('friday-modal-close-btn');
    let fridayKeySequence = '';
    
    // --- Data Containers ---
    const educationCarousel = document.getElementById('education-carousel');
    const educationTimeline = document.getElementById('education-timeline');
    const internshipsGrid = document.getElementById('internships-grid');
    const projectsContainer = document.getElementById('projects-container');
    const hackathonsGrid = document.getElementById('hackathons-grid');
    const skillsGrid = document.getElementById('skills-grid');
    const certificationsCarousel = document.getElementById('certifications-carousel');
    const hobbiesTrack = document.getElementById('hobbies-track');


    // =============================================
    // 1. HEADER & NAVIGATION
    // =============================================

    // --- New: Landing Page Scroll Logic ---
    function handleLandingScroll() {
        // Show header & main content after scrolling past 50% of landing page
        if (window.scrollY > window.innerHeight * 0.5) {
            header.classList.add('visible');
            mainContent.classList.add('visible');
        } else {
            header.classList.remove('visible');
            mainContent.classList.remove('visible');
        }

        // Add blur effect to header after scrolling a bit
        if (window.scrollY > window.innerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleLandingScroll);

    // --- Mobile nav toggle ---
    function toggleMobileNav() {
        const isOpen = navMobile.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        navToggle.classList.toggle('open', isOpen);
    }
    navToggle.addEventListener('click', toggleMobileNav);

    // --- Close mobile nav on link click ---
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMobile.classList.contains('open')) {
                toggleMobileNav();
            }
        });
    });
    
    // --- Active nav link highlighting on scroll ---
    const sections = document.querySelectorAll('section[id]');
    function updateActiveLink() {
        let currentSectionId = 'home';
        // Start measuring from the top of the main content, not the landing page
        const mainTop = mainContent.offsetTop; 
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - varToPx('--header-height') - 50;
            if (scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        // If we are still above the first section, set to 'home'
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
    updateActiveLink(); // Set on load


    // =============================================
    // 2. CONTENT RENDERING (Updated for Text-Only)
    // =============================================

    // --- Render Education ---
    function renderEducation() {
        if (!educationCarousel || !window.portfolioData.education) return;
        
        let cardHTML = '';
        let dotsHTML = '';
        window.portfolioData.education.forEach((item, index) => {
            cardHTML += `
                <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${window.portfolioData.education.length}">
                    <div class="card education-card">
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

    // --- Render Internships (Text-Only) ---
    function renderInternships() {
        if (!internshipsGrid || !window.portfolioData.internships) return;
        
        internshipsGrid.innerHTML = window.portfolioData.internships.map(item => `
            <div class="card internship-card open-modal-btn" 
                 data-modal-type="internship" 
                 data-modal-id="${item.id}"
                 tabindex="0" 
                 role="button"
                 aria-label="View details for ${item.title}">
                
                <div class="card-placeholder-text">
                    <div>
                        <h3 style="margin-bottom: 0.5rem;">${item.title}</h3>
                        <p>${item.role}</p>
                    </div>
                    <span class="btn">
                        View Details
                    </span>
                </div>
            </div>
        `).join('');
    }
    
    // --- Render Projects (Text-Only) ---
    function renderProjects() {
        if (!projectsContainer || !window.portfolioData.projects) return;
        
        let projectsHTML = '';
        const projectGroups = window.portfolioData.projects;
        
        for (const groupKey in projectGroups) {
            const group = projectGroups[groupKey];
            const groupTitle = groupKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            
            projectsHTML += `
                <div class="project-carousel-group">
                    <h3>${groupTitle}</h3>
                    <div class="carousel-wrapper">
                        <div class="carousel-container project-carousel" data-group-key="${groupKey}">
                            ${group.map((project, index) => `
                                <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${group.length}">
                                    <div class="card project-card open-modal-btn"
                                         data-modal-type="project" 
                                         data-modal-group="${groupKey}" 
                                         data-modal-id="${project.id}" 
                                         tabindex="0" 
                                         role="button"
                                         aria-label="View details for ${project.title}">
                                        
                                        <div class="card-placeholder-text">
                                            <h3 style="margin-bottom: 0.5rem;">${project.title}</h3>
                                            <p>${project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="carousel-controls">
                            <button class="carousel-btn prev-btn" aria-label="Previous project in ${groupTitle}">&lt;</button>
                            <button class="carousel-btn next-btn" aria-label="Next project in ${groupTitle}">&gt;</button>
                        </div>
                    </div>
                </div>
            `;
        }
        projectsContainer.innerHTML = projectsHTML;
    }
    
    // --- Render Hackathons ---
    function renderHackathons() {
        if (!hackathonsGrid || !window.portfolioData.hackathons) return;
        
        hackathonsGrid.innerHTML = window.portfolioData.hackathons.map(item => `
            <div class="card hackathon-card">
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
    
    // --- Render Skills ---
    function renderSkills() {
        if (!skillsGrid || !window.portfolioData.skills) return;

        skillsGrid.innerHTML = window.portfolioData.skills.map(category => `
            <div class="skills-category">
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
                    ${category.items.map(item => {
                        return `<span class="skill-tag">${item.name}</span>`;
                    }).join('')}
                </div>
            </div>
        `).join('');
    }
    
    // --- Render Certifications ---
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
    
    // --- Render Hobbies ---
    function renderHobbies() {
        if (!hobbiesTrack || !window.portfolioData.hobbies) return;
        
        const hobbyItems = window.portfolioData.hobbies.map(item => `
            <div class="hobby-item" aria-hidden="true">
                <span>${item.icon}</span>
                <span>${item.text}</span>
            </div>
        `).join('');
        
        // Duplicate for seamless loop
        hobbiesTrack.innerHTML = hobbyItems + hobbyItems;
    }


    // =============================================
    // 3. MODAL SYSTEM (Updated for Text-Only)
    // =============================================
    
    let lastFocusedElement;
    const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function openModal(modalType, id, groupKey = null) {
        let data;
        if (modalType === 'internship') {
            data = window.portfolioData.internships.find(item => item.id === id);
        } else if (modalType === 'project') {
            data = window.portfolioData.projects[groupKey].find(item => item.id === id);
        }
        
        if (!data) return;

        // Build Modal Content (NO IMAGE PLACEHOLDERS)
        let contentHTML = '';
        if (modalType === 'internship') {
            contentHTML = `
                <div class="modal-header">
                    <h2>${data.title}</h2>
                    <h3 class="text-muted">${data.role}</h3>
                </div>
                <div class="modal-body">
                    <div class="modal-text">
                        ${data.details}
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
                        <p>${data.details.summary}</p>
                        <h3>Features:</h3>
                        <ul>
                            ${data.details.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <div class="modal-tech-stack">
                            ${data.details.techStack.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
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
        
        // Focus trap
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
        
        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else { // Tab
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
            const { modalType, modalId, modalGroup } = openBtn.dataset;
            openModal(modalType, modalId, modalGroup);
        }
    });
    
    // Listen for keydown on cards to open with Enter/Space
    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const openBtn = e.target.closest('.open-modal-btn[tabindex="0"]');
            if (openBtn) {
                e.preventDefault(); // Prevent space from scrolling
                const { modalType, modalId, modalGroup } = openBtn.dataset;
                openModal(modalType, modalId, modalGroup);
            }
        }
    });

    // Close modal events
    modalCloseBtn.addEventListener('click', () => closeModal(modalOverlay));
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal(modalOverlay);
        }
    });
    
    fridayModalClose.addEventListener('click', () => closeModal(fridayModal));
    fridayModal.addEventListener('click', (e) => {
        if (e.target === fridayModal) {
            closeModal(fridayModal);
        }
    });
    
    // Global keydown for closing modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalOverlay.classList.contains('open')) {
                closeModal(modalOverlay);
            }
            if (fridayModal.classList.contains('open')) {
                closeModal(fridayModal);
            }
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
        
        // Timeline sync (for education)
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
        
        // Update on scroll end (for snap)
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
        
        // Initial state
        updateCarousel(0);
    }

    // Init project carousels (drag-to-scroll)
    function initProjectCarousels() {
        const projectCarousels = document.querySelectorAll('.project-carousel');
        
        projectCarousels.forEach(carousel => {
            const items = carousel.querySelectorAll('.carousel-item');
            if (items.length === 0) return;

            let isDown = false;
            let startX;
            let scrollLeft;
            let currentIndex = 0;
            
            function getItemWidth() {
                return items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginRight);
            }
            
            function snapToItem(targetIndex) {
                const itemTotalWidth = getItemWidth();
                let newIndex = Math.max(0, Math.min(targetIndex, items.length - 1));
                currentIndex = newIndex;
                
                carousel.scrollTo({ 
                    left: newIndex * itemTotalWidth, 
                    behavior: 'smooth' 
                });
            }

            carousel.addEventListener('mousedown', (e) => {
                isDown = true;
                carousel.classList.add('grabbing');
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
                carousel.style.scrollSnapType = 'none'; 
                carousel.style.cursor = 'grabbing';
            });
            
            carousel.addEventListener('mouseleave', () => {
                if (!isDown) return;
                isDown = false;
                carousel.classList.remove('grabbing');
                carousel.style.scrollSnapType = 'x mandatory';
                carousel.style.cursor = 'grab';
                snapToItem(currentIndex); // Snap back
            });
            
            carousel.addEventListener('mouseup', () => {
                if (!isDown) return;
                isDown = false;
                carousel.classList.remove('grabbing');
                carousel.style.scrollSnapType = 'x mandatory';
                carousel.style.cursor = 'grab';
                
                const itemTotalWidth = getItemWidth();
                const newIndex = Math.round(carousel.scrollLeft / itemTotalWidth);
                snapToItem(newIndex);
            });
            
            carousel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2; 
                carousel.scrollLeft = scrollLeft - walk;
            });
        });
    }


    // =============================================
    // 5. ANIMATIONS ON SCROLL
    // =============================================
    
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-bar-progress');
        
        const observer = new IntersectionObserver((entries, observer) => {
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
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 }); 

        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }

    // =============================================
    // 6. CONTACT FORM
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
    // 7. EASTER EGG
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
    // 8. HELPERS
    // =============================================
    
    function getCssVar(varName) {
        return getComputedStyle(document.documentElement).getPropertyValue(varName);
    }
    
    function varToPx(varName) {
        return parseFloat(getCssVar(varName) || 0);
    }


    // =============================================
    // 9. INITIALIZATION CALLS
    // =============================================
    
    renderEducation();
    renderInternships();
    renderProjects();
    renderHackathons();
    renderSkills();
    renderCertifications();
    renderHobbies();
    
    initCarousel('education-carousel');
    initCarousel('certifications-carousel');
    initProjectCarousels();
    animateSkills();
    initFriday();

});
