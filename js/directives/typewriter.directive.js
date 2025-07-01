// Typewriter Animation Directive
(function() {
    'use strict';
    
    angular.module('portfolioApp')
        .directive('typewriter', typewriter);
    
    function typewriter() {
        return {
            restrict: 'A',
            scope: {
                words: '=typewriter',
                speed: '@?',
                delay: '@?'
            },
            link: function(scope, element, attrs) {
                var words = scope.words || ['Developer'];
                var speed = parseInt(scope.speed) || 100;
                var delay = parseInt(scope.delay) || 2000;
                var currentWordIndex = 0;
                var currentCharIndex = 0;
                var isDeleting = false;
                var timeoutId;
                
                function type() {
                    var currentWord = words[currentWordIndex];
                    
                    if (isDeleting) {
                        // Remove character
                        element[0].textContent = currentWord.substring(0, currentCharIndex - 1);
                        currentCharIndex--;
                        
                        if (currentCharIndex === 0) {
                            isDeleting = false;
                            currentWordIndex = (currentWordIndex + 1) % words.length;
                            timeoutId = setTimeout(type, speed);
                        } else {
                            timeoutId = setTimeout(type, speed / 2);
                        }
                    } else {
                        // Add character
                        element[0].textContent = currentWord.substring(0, currentCharIndex + 1);
                        currentCharIndex++;
                        
                        if (currentCharIndex === currentWord.length) {
                            isDeleting = true;
                            timeoutId = setTimeout(type, delay);
                        } else {
                            timeoutId = setTimeout(type, speed);
                        }
                    }
                }
                
                // Start the animation
                type();
                
                // Cleanup on scope destroy
                scope.$on('$destroy', function() {
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                });
            }
        };
    }
})();
