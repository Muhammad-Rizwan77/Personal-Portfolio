// Main Controller
(function() {
    'use strict';
    
    angular.module('portfolioApp')
        .controller('MainController', MainController);
    
    MainController.$inject = ['$scope', '$window', 'ThemeService'];
    
    function MainController($scope, $window, ThemeService) {
        var vm = this;
        
        // Theme management
        $scope.isDarkMode = ThemeService.isDarkMode();
        
        $scope.toggleTheme = function() {
            ThemeService.toggleTheme();
            $scope.isDarkMode = ThemeService.isDarkMode();
        };
        
        // Smooth scrolling function
        $scope.scrollTo = function(elementId) {
            var element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };
        
        // Initialize animations on scroll
        function initScrollAnimations() {
            var elements = document.querySelectorAll('.fade-in-up, .fade-in');
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });
            
            elements.forEach(function(element) {
                element.style.opacity = '0';
                if (element.classList.contains('fade-in-up')) {
                    element.style.transform = 'translateY(30px)';
                }
                observer.observe(element);
            });
        }
        
        // Initialize on page load
        angular.element(document).ready(function() {
            setTimeout(initScrollAnimations, 100);
        });
        
        // Handle window resize for responsive behavior
        angular.element($window).on('resize', function() {
            $scope.$apply();
        });
    }
})();
