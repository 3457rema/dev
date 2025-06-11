// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functionality
    initializeNavigation();
    initializeProjects();
    initializeSkills();
    initializeTestimonials();
    initializeContactForm();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = 80;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Mobile menu functionality
    mobileMenuBtn.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Projects data and rendering
function initializeProjects() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Modern e-commerce platform with intuitive user experience and responsive design",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            tags: ["UI/UX", "WordPress", "Figma"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Mobile App Design",
            description: "Clean and modern mobile application design focusing on user-centered experience",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            tags: ["Mobile UI", "Figma", "Prototyping"],
            demoLink: "#",
            prototypeLink: "#"
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description: "Data visualization dashboard with clean interface and intuitive navigation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            tags: ["Dashboard", "Data Viz", "JavaScript"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Corporate Website",
            description: "Professional corporate website with modern design and seamless user experience",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            tags: ["Web Design", "WordPress", "PHP"],
            demoLink: "#",
            detailsLink: "#"
        },
        {
            id: 5,
            title: "Brand Identity",
            description: "Complete brand identity design including logo, color palette, and visual guidelines",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            tags: ["Branding", "Logo Design", "Figma"],
            demoLink: "#",
            styleGuideLink: "#"
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Creative portfolio website showcasing work with smooth animations and interactions",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            tags: ["Portfolio", "CSS", "JavaScript"],
            demoLink: "#",
            codeLink: "#"
        }
    ];
    
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link">
                        <i data-lucide="external-link"></i>
                        ${project.id === 2 ? 'View Design' : project.id === 5 ? 'View Brand' : 'Live Demo'}
                    </a>
                    <a href="${project.codeLink || project.prototypeLink || project.detailsLink || project.styleGuideLink}" class="project-link">
                        <i data-lucide="${project.id === 2 ? 'play' : project.id === 4 ? 'code' : project.id === 5 ? 'palette' : 'github'}"></i>
                        ${project.id === 2 ? 'Prototype' : project.id === 4 ? 'Details' : project.id === 5 ? 'Style Guide' : 'Code'}
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Re-initialize icons for dynamically added content
    lucide.createIcons();
}

// Skills data and rendering
function initializeSkills() {
    const skillCategories = [
        {
            icon: "brush",
            title: "UI/UX Design",
            skills: ["Figma", "User Research", "Wireframing", "Prototyping"]
        },
        {
            icon: "code",
            title: "Frontend",
            skills: ["HTML5 & CSS3", "JavaScript", "Responsive Design", "WordPress"]
        },
        {
            icon: "server",
            title: "Backend",
            skills: ["PHP", "Database Design", "API Integration", "CMS Development"]
        },
        {
            icon: "trending-up",
            title: "Analytics",
            skills: ["Data Collection", "Research Methods", "Documentation", "Project Management"]
        }
    ];
    
    const skillsGrid = document.getElementById('skills-grid');
    
    skillCategories.forEach((category, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-icon">
                <i data-lucide="${category.icon}"></i>
            </div>
            <h3 class="skill-title">${category.title}</h3>
            <ul class="skill-list">
                ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
    
    lucide.createIcons();
}

// Testimonials data and rendering
function initializeTestimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "Product Manager",
            content: "Teresia's attention to detail and creative problem-solving skills make her an exceptional designer. Her work consistently exceeds expectations.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Tech Lead",
            content: "Working with Teresia was a pleasure. Her technical skills combined with excellent communication made our project a success.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Creative Director",
            content: "Teresia brings reliability and professionalism to every project. Her analytical approach to design challenges is impressive.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
        }
    ];
    
    const testimonialsGrid = document.getElementById('testimonials-grid');
    
    testimonials.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.style.animationDelay = `${index * 0.1}s`;
        
        testimonialCard.innerHTML = `
            <div class="testimonial-stars">
                ${'★'.repeat(5)}
            </div>
            <p class="testimonial-content">"${testimonial.content}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-img">
                <div>
                    <div class="author-name">${testimonial.name}</div>
                    <div class="author-position">${testimonial.position}</div>
                </div>
            </div>
        `;
        
        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Sending...';
        lucide.createIcons();
        
        try {
            // Send form data to PHP handler
            const response = await fetch('contact-handler.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                showMessage('Message sent successfully! Thank you for reaching out.', 'success');
                contactForm.reset();
            } else {
                showMessage(result.message || 'Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.innerHTML = '<i data-lucide="send"></i> Send Message';
            lucide.createIcons();
        }
    });
}

// Show message function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    
    // Insert after form
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const animatedElements = document.querySelectorAll('.project-card, .skill-card, .testimonial-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80;
        const targetPosition = element.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}