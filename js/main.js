// Main JavaScript file for Your Company Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Form validation and submission
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                handleFormSubmission(form);
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showAlert('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            }
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .hero-section, section').forEach(el => {
        observer.observe(el);
    });
});

// Handle form submissions
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<span class="loading"></span> Sending...';
    button.disabled = true;

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        showAlert('Thank you! Your message has been sent successfully.', 'success');
        form.reset();
        form.classList.remove('was-validated');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Show alert messages
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv && alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Mobile menu enhancement
function toggleMobileMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const body = document.body;
    
    if (navbarCollapse.classList.contains('show')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

// Product filter functionality (for products page)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
    
    // Filter products
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
            product.classList.add('fade-in-up');
        } else {
            product.style.display = 'none';
        }
    });
}

// Contact form with enhanced validation
function validateContactForm(form) {
    const email = form.querySelector('input[type="email"]');
    const phone = form.querySelector('input[type="tel"]');
    
    let isValid = true;
    
    // Email validation
    if (email && !isValidEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation
    if (phone && !isValidPhone(phone.value)) {
        showFieldError(phone, 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function showFieldError(field, message) {
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.textContent = message;
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
    field.classList.add('is-invalid');
}

// Initialize AOS (Animate On Scroll) alternative
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });
    
    elements.forEach(el => animateOnScroll.observe(el));
}

// Call initialization functions
document.addEventListener('DOMContentLoaded', initScrollAnimations);