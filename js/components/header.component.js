// Header Component
(function() {
    'use strict';
    
    angular.module('portfolioApp')
        .component('headerComponent', {
            template: `
                <!-- Animated Background Elements -->
                <div class="hero-background"
                     ng-mousemove="$ctrl.updateMousePosition($event)"
                     ng-style="$ctrl.heroBackgroundStyle">

                    <!-- Background Circles -->
                    <div class="bg-circle bg-circle-1"
                         ng-style="$ctrl.circle1Style"></div>
                    <div class="bg-circle bg-circle-2"
                         ng-style="$ctrl.circle2Style"></div>
                    <div class="bg-circle bg-circle-3"
                         ng-style="$ctrl.circle3Style"></div>

                    <!-- Background Blobs -->
                    <div class="bg-blob bg-blob-1"
                         ng-style="$ctrl.blob1Style"></div>
                    <div class="bg-blob bg-blob-2"
                         ng-style="$ctrl.blob2Style"></div>

                    <!-- Gradient Orbs -->
                    <div class="gradient-orb gradient-orb-1"
                         ng-style="$ctrl.orb1Style"></div>
                    <div class="gradient-orb gradient-orb-2"
                         ng-style="$ctrl.orb2Style"></div>
                </div>

                <div class="container hero-content">
                    <div class="row align-items-center min-vh-100">
                        <div class="col-lg-6 col-md-12 text-center text-lg-start fade-in-up">
                            <h1 class="display-4 fw-bold mb-3">
                                Hi, I'm <span class="text-primary">{{ $ctrl.name }}</span>
                            </h1>
                            <h2 class="h3 mb-4">
                                I'm a <span class="text-primary typewriter-text"
                                           typewriter="$ctrl.roles"
                                           speed="100"
                                           delay="2000"></span>
                            </h2>
                            <p class="lead mb-4 text-muted">
                                {{ $ctrl.description }}
                            </p>
                            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                <a href="#projects" class="btn btn-primary btn-lg" ng-click="$ctrl.scrollTo('projects')">
                                    <i class="fas fa-code me-2"></i>View My Work
                                </a>
                                <a href="#contact" class="btn btn-outline-primary btn-lg" ng-click="$ctrl.scrollTo('contact')">
                                    <i class="fas fa-envelope me-2"></i>Get In Touch
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 text-center fade-in">
                            <div class="profile-image-container">
                                <img src="{{ $ctrl.profileImage }}"
                                     alt="{{ $ctrl.name }}"
                                     class="profile-image img-fluid rounded-circle shadow-lg">
                            </div>
                        </div>
                    </div>
                </div>
            `,
            controller: HeaderController
        });
    
    function HeaderController() {
        var ctrl = this;
        
        // Personal information - Update these with your details
        ctrl.name = 'Rizwan';
        ctrl.roles = ['Programmer', 'Web Developer', 'Frontend Developer'];
        ctrl.description = 'Passionate about creating beautiful, functional, and user-friendly web applications. I love turning ideas into reality through clean, efficient code. I am a self-taught web developer with a passion for creating exceptional user experiences.';
        ctrl.profileImage = 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg';

        // Mouse position tracking
        ctrl.mouseX = 0;
        ctrl.mouseY = 0;
        ctrl.centerX = 0;
        ctrl.centerY = 0;
        ctrl.targetX = 0;
        ctrl.targetY = 0;
        ctrl.currentX = 0;
        ctrl.currentY = 0;
        ctrl.animationId = null;

        // Initialize styles
        ctrl.heroBackgroundStyle = {};
        ctrl.circle1Style = {};
        ctrl.circle2Style = {};
        ctrl.circle3Style = {};
        ctrl.blob1Style = {};
        ctrl.blob2Style = {};
        ctrl.orb1Style = {};
        ctrl.orb2Style = {};

        // Initialize component
        ctrl.$onInit = function() {
            // Get scope reference for manual $apply calls
            ctrl.$scope = ctrl.$scope || angular.element(document.querySelector('[ng-controller="MainController"]')).scope();

            // Get viewport center
            ctrl.centerX = window.innerWidth / 2;
            ctrl.centerY = window.innerHeight / 2;

            // Initialize current position to center
            ctrl.currentX = 0;
            ctrl.currentY = 0;
            ctrl.targetX = 0;
            ctrl.targetY = 0;

            // Start animation loop
            ctrl.startAnimation();

            // Initialize background element positions
            ctrl.updateBackgroundElements();

            // Handle window resize
            angular.element(window).on('resize', function() {
                ctrl.centerX = window.innerWidth / 2;
                ctrl.centerY = window.innerHeight / 2;
            });
        };

        // Update mouse position (smooth tracking)
        ctrl.updateMousePosition = function(event) {
            ctrl.mouseX = event.clientX;
            ctrl.mouseY = event.clientY;

            // Calculate target relative position (-1 to 1)
            ctrl.targetX = (ctrl.mouseX - ctrl.centerX) / ctrl.centerX;
            ctrl.targetY = (ctrl.mouseY - ctrl.centerY) / ctrl.centerY;

            // Limit the range to prevent extreme movements
            ctrl.targetX = Math.max(-1, Math.min(1, ctrl.targetX));
            ctrl.targetY = Math.max(-1, Math.min(1, ctrl.targetY));
        };

        // Smooth animation loop using requestAnimationFrame
        ctrl.startAnimation = function() {
            function animate() {
                // Different easing speeds for depth layers
                var fastEasing = 0.12;   // Foreground elements (circles)
                var mediumEasing = 0.08; // Mid-ground elements (blobs)
                var slowEasing = 0.05;   // Background elements (orbs)

                // Update positions with different easing for depth effect
                ctrl.currentX += (ctrl.targetX - ctrl.currentX) * mediumEasing;
                ctrl.currentY += (ctrl.targetY - ctrl.currentY) * mediumEasing;

                // Store different speeds for layered parallax
                ctrl.fastX = ctrl.fastX || 0;
                ctrl.fastY = ctrl.fastY || 0;
                ctrl.slowX = ctrl.slowX || 0;
                ctrl.slowY = ctrl.slowY || 0;

                ctrl.fastX += (ctrl.targetX - ctrl.fastX) * fastEasing;
                ctrl.fastY += (ctrl.targetY - ctrl.fastY) * fastEasing;
                ctrl.slowX += (ctrl.targetX - ctrl.slowX) * slowEasing;
                ctrl.slowY += (ctrl.targetY - ctrl.slowY) * slowEasing;

                // Update background elements with smooth values
                ctrl.updateBackgroundElements();

                // Continue animation
                ctrl.animationId = requestAnimationFrame(animate);
            }

            // Start the animation loop
            animate();
        };

        // Update background element positions with layered parallax depths
        ctrl.updateBackgroundElements = function() {
            // Use different easing speeds for realistic depth layers
            var fastX = ctrl.fastX || 0;
            var fastY = ctrl.fastY || 0;
            var mediumX = ctrl.currentX;
            var mediumY = ctrl.currentY;
            var slowX = ctrl.slowX || 0;
            var slowY = ctrl.slowY || 0;

            // Foreground circles (fastest response) - GPU accelerated with translate3d
            ctrl.circle1Style = {
                'transform': 'translate3d(' + (fastX * 35) + 'px, ' + (fastY * 25) + 'px, 0)',
                'transition': 'none',
                'will-change': 'transform'
            };

            ctrl.circle2Style = {
                'transform': 'translate3d(' + (fastX * -30) + 'px, ' + (fastY * 40) + 'px, 0)',
                'transition': 'none',
                'will-change': 'transform'
            };

            ctrl.circle3Style = {
                'transform': 'translate3d(' + (fastX * 45) + 'px, ' + (fastY * -35) + 'px, 0)',
                'transition': 'none',
                'will-change': 'transform'
            };

            // Mid-ground blobs (medium response for depth)
            ctrl.blob1Style = {
                'transform': 'translate3d(' + (mediumX * 18) + 'px, ' + (mediumY * 28) + 'px, 0)',
                'transition': 'none',
                'will-change': 'transform'
            };

            ctrl.blob2Style = {
                'transform': 'translate3d(' + (mediumX * -22) + 'px, ' + (mediumY * -18) + 'px, 0)',
                'transition': 'none',
                'will-change': 'transform'
            };

            // Background orbs (slowest response for deep parallax)
            ctrl.orb1Style = {
                'transform': 'translate3d(' + (slowX * 12) + 'px, ' + (slowY * 18) + 'px, 0)',
                'transition': 'none',
                'will-change': 'transform'
            };

            ctrl.orb2Style = {
                'transform': 'translate3d(' + (slowX * -15) + 'px, ' + (slowY * 20) + 'px, 0)',
                'transition': 'none',
                'will-change': 'transform'
            };

            // Apply scope changes for AngularJS binding
            if (!ctrl.$$phase && !ctrl.$root.$$phase) {
                try {
                    ctrl.$scope.$apply();
                } catch (e) {
                    // Ignore digest already in progress errors
                }
            }
        };

        ctrl.scrollTo = function(elementId) {
            var element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };

        // Cleanup on destroy
        ctrl.$onDestroy = function() {
            angular.element(window).off('resize');

            // Stop animation loop
            if (ctrl.animationId) {
                cancelAnimationFrame(ctrl.animationId);
                ctrl.animationId = null;
            }
        };
    }
})();
