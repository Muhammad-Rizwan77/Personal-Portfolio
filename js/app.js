// Main AngularJS Application Module
(function() {
    'use strict';
    
    angular.module('portfolioApp', [])
        .config(['$locationProvider', function($locationProvider) {
            // Enable HTML5 mode for cleaner URLs (optional)
            $locationProvider.html5Mode({
                enabled: false,
                requireBase: false
            });
        }])
        .run(['$rootScope', 'ThemeService', function($rootScope, ThemeService) {
            // Initialize theme on app start
            $rootScope.isDarkMode = ThemeService.isDarkMode();
            
            // Watch for theme changes
            $rootScope.$watch(function() {
                return ThemeService.isDarkMode();
            }, function(newValue) {
                $rootScope.isDarkMode = newValue;
            });
        }]);
})();
