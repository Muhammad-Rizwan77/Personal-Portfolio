// Contact Component
(function() {
    'use strict';
    
    angular.module('portfolioApp')
        .component('contactComponent', {
            template: `
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-5 fade-in-up">
                            <h2 class="display-5 fw-bold mb-3">Get In Touch</h2>
                            <p class="lead text-muted">Have a project in mind? Let's work together to bring your ideas to life.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-10">
                            <div class="contact-form-container fade-in-up">
                                <form class="contact-form" name="contactForm" ng-submit="$ctrl.submitForm(contactForm)" novalidate>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name" class="form-label">Full Name *</label>
                                                <input type="text"
                                                       class="form-control"
                                                       id="name"
                                                       name="name"
                                                       ng-model="$ctrl.formData.name"
                                                       ng-class="{'is-invalid': contactForm.name.$invalid && contactForm.name.$touched, 'is-valid': contactForm.name.$valid && contactForm.name.$touched}"
                                                       placeholder="Your Name"
                                                       minlength="2"
                                                       maxlength="50"
                                                       required>
                                                <div class="invalid-feedback" ng-show="contactForm.name.$invalid && contactForm.name.$touched">
                                                    <span ng-show="contactForm.name.$error.required">Name is required.</span>
                                                    <span ng-show="contactForm.name.$error.minlength">Name must be at least 2 characters.</span>
                                                    <span ng-show="contactForm.name.$error.maxlength">Name cannot exceed 50 characters.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="email" class="form-label">Email Address *</label>
                                                <input type="email"
                                                       class="form-control"
                                                       id="email"
                                                       name="email"
                                                       ng-model="$ctrl.formData.email"
                                                       ng-class="{'is-invalid': contactForm.email.$invalid && contactForm.email.$touched, 'is-valid': contactForm.email.$valid && contactForm.email.$touched}"
                                                       placeholder="your.email@example.com"
                                                       required>
                                                <div class="invalid-feedback" ng-show="contactForm.email.$invalid && contactForm.email.$touched">
                                                    <span ng-show="contactForm.email.$error.required">Email is required.</span>
                                                    <span ng-show="contactForm.email.$error.email">Please enter a valid email address.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="subject" class="form-label">Subject *</label>
                                                <input type="text"
                                                       class="form-control"
                                                       id="subject"
                                                       name="subject"
                                                       ng-model="$ctrl.formData.subject"
                                                       ng-class="{'is-invalid': contactForm.subject.$invalid && contactForm.subject.$touched, 'is-valid': contactForm.subject.$valid && contactForm.subject.$touched}"
                                                       placeholder="Project Discussion"
                                                       minlength="5"
                                                       maxlength="100"
                                                       required>
                                                <div class="invalid-feedback" ng-show="contactForm.subject.$invalid && contactForm.subject.$touched">
                                                    <span ng-show="contactForm.subject.$error.required">Subject is required.</span>
                                                    <span ng-show="contactForm.subject.$error.minlength">Subject must be at least 5 characters.</span>
                                                    <span ng-show="contactForm.subject.$error.maxlength">Subject cannot exceed 100 characters.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="message" class="form-label">Message *</label>
                                                <textarea class="form-control"
                                                          id="message"
                                                          name="message"
                                                          rows="5"
                                                          ng-model="$ctrl.formData.message"
                                                          ng-class="{'is-invalid': contactForm.message.$invalid && contactForm.message.$touched, 'is-valid': contactForm.message.$valid && contactForm.message.$touched}"
                                                          placeholder="Tell me about your project..."
                                                          minlength="10"
                                                          maxlength="1000"
                                                          required></textarea>
                                                <div class="invalid-feedback" ng-show="contactForm.message.$invalid && contactForm.message.$touched">
                                                    <span ng-show="contactForm.message.$error.required">Message is required.</span>
                                                    <span ng-show="contactForm.message.$error.minlength">Message must be at least 10 characters.</span>
                                                    <span ng-show="contactForm.message.$error.maxlength">Message cannot exceed 1000 characters.</span>
                                                </div>
                                                <small class="form-text text-muted">{{ $ctrl.formData.message.length || 0 }}/1000 characters</small>
                                            </div>
                                        </div>

                                        <!-- Success/Error Messages -->
                                        <div class="col-12" ng-show="$ctrl.showMessage">
                                            <div class="alert" ng-class="{'alert-success': $ctrl.messageType === 'success', 'alert-danger': $ctrl.messageType === 'error'}">
                                                <i class="fas" ng-class="{'fa-check-circle': $ctrl.messageType === 'success', 'fa-exclamation-triangle': $ctrl.messageType === 'error'}"></i>
                                                {{ $ctrl.message }}
                                            </div>
                                        </div>

                                        <div class="col-12 text-center">
                                            <button type="submit"
                                                    class="btn btn-primary btn-lg"
                                                    ng-disabled="contactForm.$invalid || $ctrl.isSubmitting">
                                                <span ng-show="!$ctrl.isSubmitting">
                                                    <i class="fas fa-paper-plane me-2"></i>Send Message
                                                </span>
                                                <span ng-show="$ctrl.isSubmitting">
                                                    <i class="fas fa-spinner fa-spin me-2"></i>Sending...
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Info -->
                    <div class="row mt-5">
                        <div class="col-lg-4 col-md-6 text-center mb-4 fade-in-up">
                            <div class="contact-info-item">
                                <div class="contact-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <h5>Email</h5>
                                <p class="text-muted">{{ $ctrl.contactInfo.email }}</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 text-center mb-4 fade-in-up">
                            <div class="contact-info-item">
                                <div class="contact-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <h5>Location</h5>
                                <p class="text-muted">{{ $ctrl.contactInfo.location }}</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 text-center mb-4 fade-in-up">
                            <div class="contact-info-item">
                                <div class="contact-icon">
                                    <i class="fas fa-code"></i>
                                </div>
                                <h5>Available For</h5>
                                <p class="text-muted">{{ $ctrl.contactInfo.availability }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Links -->
                    <div class="row mt-4">
                        <div class="col-12 text-center fade-in-up">
                            <h5 class="mb-3">Connect With Me</h5>
                            <div class="social-links">
                                <a href="{{ $ctrl.socialLinks.github }}" 
                                   target="_blank" 
                                   class="social-link">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="{{ $ctrl.socialLinks.linkedin }}" 
                                   target="_blank" 
                                   class="social-link">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="{{ $ctrl.socialLinks.twitter }}" 
                                   target="_blank" 
                                   class="social-link"
                                   ng-if="$ctrl.socialLinks.twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="mailto:{{ $ctrl.contactInfo.email }}" 
                                   class="social-link">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            controller: ContactController
        });
    
    function ContactController() {
        var ctrl = this;
        
        // Form data
        ctrl.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        // Form state
        ctrl.isSubmitting = false;
        ctrl.showMessage = false;
        ctrl.message = '';
        ctrl.messageType = '';

        // Contact information - Update with your details
        ctrl.contactInfo = {
            email: 'crizi2714@gmail.com',
            location: 'Kamalia, Pakistan',
            availability: 'Freelance Projects & Full-time Opportunities'
        };

        // Social links - Update with your actual profiles
        ctrl.socialLinks = {
            github: 'https://github.com/Muhammad-Rizwan77',
            linkedin: 'www.linkedin.com/in/muhammad-rizwan-a67b01310',
        };

        // Form validation and submission
        ctrl.submitForm = function(form) {
            // Mark all fields as touched to show validation errors
            markFormGroupTouched(form);

            // Check if form is valid
            if (form.$invalid) {
                ctrl.showMessage = true;
                ctrl.messageType = 'error';
                ctrl.message = 'Please correct the errors above and try again.';
                return;
            }

            // Additional custom validation
            if (!ctrl.validateFormData()) {
                return;
            }

            // Simulate form submission
            ctrl.isSubmitting = true;
            ctrl.showMessage = false;

            // Simulate API call delay
            setTimeout(function() {
                ctrl.isSubmitting = false;
                ctrl.showMessage = true;
                ctrl.messageType = 'success';
                ctrl.message = 'Thank you for your message! I\'ll get back to you soon.';

                // Reset form after successful submission
                ctrl.resetForm(form);

                // Apply changes to scope (for setTimeout)
                var scope = angular.element(document.querySelector('[ng-controller="MainController"]')).scope();
                if (scope) {
                    scope.$apply();
                }
            }, 2000);
        };

        // Custom validation
        ctrl.validateFormData = function() {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(ctrl.formData.email)) {
                ctrl.showMessage = true;
                ctrl.messageType = 'error';
                ctrl.message = 'Please enter a valid email address.';
                return false;
            }

            if (ctrl.formData.name.trim().length < 2) {
                ctrl.showMessage = true;
                ctrl.messageType = 'error';
                ctrl.message = 'Name must be at least 2 characters long.';
                return false;
            }

            if (ctrl.formData.message.trim().length < 10) {
                ctrl.showMessage = true;
                ctrl.messageType = 'error';
                ctrl.message = 'Message must be at least 10 characters long.';
                return false;
            }

            return true;
        };

        // Reset form
        ctrl.resetForm = function(form) {
            ctrl.formData = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };

            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }

            // Hide message after 5 seconds
            setTimeout(function() {
                ctrl.showMessage = false;
                var scope = angular.element(document.querySelector('[ng-controller="MainController"]')).scope();
                if (scope) {
                    scope.$apply();
                }
            }, 5000);
        };

        // Helper function to mark all form fields as touched
        function markFormGroupTouched(form) {
            angular.forEach(form, function(field, fieldName) {
                if (fieldName[0] !== '$') {
                    field.$setTouched();
                }
            });
        }
    }
})();
