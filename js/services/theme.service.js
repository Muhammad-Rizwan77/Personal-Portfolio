// Theme Service
(function() {
    'use strict';
    
    angular.module('portfolioApp')
        .service('ThemeService', ThemeService);
    
    ThemeService.$inject = ['$window'];
    
    function ThemeService($window) {
        var service = this;
        var THEME_KEY = 'portfolio-theme';
        var darkMode = false;
        
        // Initialize theme from localStorage or system preference
        init();
        
        function init() {
            var savedTheme = $window.localStorage.getItem(THEME_KEY);
            if (savedTheme !== null) {
                darkMode = savedTheme === 'dark';
            } else {
                // Check system preference
                if ($window.matchMedia && $window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    darkMode = true;
                }
            }
            applyTheme();
        }
        
        function applyTheme() {
            var body = document.body;
            if (darkMode) {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        }
        
        service.toggleTheme = function() {
            darkMode = !darkMode;
            $window.localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
            applyTheme();
        };
        
        service.isDarkMode = function() {
            return darkMode;
        };
        
        service.setDarkMode = function(isDark) {
            darkMode = isDark;
            $window.localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
            applyTheme();
        };
        
        // Listen for system theme changes
        if ($window.matchMedia) {
            $window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                if ($window.localStorage.getItem(THEME_KEY) === null) {
                    darkMode = e.matches;
                    applyTheme();
                }
            });
        }
    }
})();
