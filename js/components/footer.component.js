// Footer Component
(function() {
    'use strict';
    
    angular.module('portfolioApp')
        .component('footerComponent', {
            template: `
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <p class="mb-2">
                                &copy; {{ $ctrl.currentYear }} {{ $ctrl.name }}. All rights reserved.
                            </p>
                            <p class="text-muted small">
                                Built with <i class="fas fa-heart text-danger"></i> using AngularJS & Bootstrap
                            </p>
                        </div>
                    </div>
                </div>
            `,
            controller: FooterController
        });
    
    function FooterController() {
        var ctrl = this;
        
        ctrl.name = 'Rizwan';
        ctrl.currentYear = new Date().getFullYear();
    }
})();
