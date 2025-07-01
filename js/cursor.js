// Dual Neon Cursor System
(function() {
    'use strict';

    let cursorDot;
    let cursorRing;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Initialize cursor when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        cursorDot = document.getElementById('cursorDot');
        cursorRing = document.getElementById('cursorRing');

        if (!cursorDot || !cursorRing) {
            console.warn('Custom cursor elements not found');
            return;
        }

        // Track mouse movement
        document.addEventListener('mousemove', updateMousePosition);

        // Handle hover effects for interactive elements
        setupInteractiveElements();

        // Handle cursor visibility
        document.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = '1';
            cursorRing.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorRing.style.opacity = '0';
        });

        // Start animation loop
        animateCursor();
    });
    
    function updateMousePosition(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function animateCursor() {
        // Instant dot movement
        if (cursorDot) {
            cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
        }

        // Smooth lagging ring movement
        const ringSpeed = 0.12;
        ringX += (mouseX - ringX) * ringSpeed;
        ringY += (mouseY - ringY) * ringSpeed;

        if (cursorRing) {
            cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
        }

        requestAnimationFrame(animateCursor);
    }
    
    // Setup interactive elements
    function setupInteractiveElements() {
        const interactiveElements = document.querySelectorAll('a, button, .btn, .clickable, input, textarea, select, .nav-link, .social-link');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', addHoverClass);
            element.addEventListener('mouseleave', removeHoverClass);
        });
    }

    // Handle dynamic content (for AngularJS)
    function refreshInteractiveElements() {
        const interactiveElements = document.querySelectorAll('a, button, .btn, .clickable, input, textarea, select, .nav-link, .social-link');

        interactiveElements.forEach(element => {
            // Remove existing listeners to avoid duplicates
            element.removeEventListener('mouseenter', addHoverClass);
            element.removeEventListener('mouseleave', removeHoverClass);

            // Add new listeners
            element.addEventListener('mouseenter', addHoverClass);
            element.addEventListener('mouseleave', removeHoverClass);
        });
    }

    function addHoverClass() {
        if (cursorDot) cursorDot.classList.add('hover');
        if (cursorRing) cursorRing.classList.add('hover');
    }

    function removeHoverClass() {
        if (cursorDot) cursorDot.classList.remove('hover');
        if (cursorRing) cursorRing.classList.remove('hover');
    }

    // Refresh interactive elements periodically for dynamic content
    setInterval(refreshInteractiveElements, 2000);

    // Export for global access if needed
    window.dualCursor = {
        refresh: refreshInteractiveElements,
        addHover: addHoverClass,
        removeHover: removeHoverClass
    };
})();
