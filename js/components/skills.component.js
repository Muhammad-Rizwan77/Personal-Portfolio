// Skills Component
(function() {
    'use strict';
    
    angular.module('portfolioApp')
        .component('skillsComponent', {
            template: `
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-5 fade-in-up">
                            <h2 class="display-5 fw-bold mb-3">My Skills</h2>
                            <p class="lead text-muted">Technologies and tools I work with to bring ideas to life.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-10">
                            <div class="skills-grid">
                                <div class="skill-item fade-in-up" 
                                     ng-repeat="skill in $ctrl.skills track by $index"
                                     style="animation-delay: {{ $index * 0.1 }}s">
                                    <div class="skill-icon">
                                        <i class="{{ skill.icon }}" ng-style="{'color': skill.color}"></i>
                                    </div>
                                    <h5 class="skill-name">{{ skill.name }}</h5>
                                    <p class="skill-description">{{ skill.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Additional Skills -->
                    <div class="row mt-5">
                        <div class="col-12 text-center fade-in-up">
                            <h4 class="mb-4">Other Technologies</h4>
                            <div class="additional-skills">
                                <span class="skill-badge" ng-repeat="tech in $ctrl.additionalSkills">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            controller: SkillsController
        });
    
    function SkillsController() {
        var ctrl = this;
        
        // Main skills with icons and descriptions
        ctrl.skills = [
            {
                name: 'HTML5',
                icon: 'fab fa-html5',
                color: '#e34f26',
                description: 'Semantic markup and modern HTML5 features'
            },
            {
                name: 'Tailwind CSS',
                icon: 'fas fa-wind',
                color: '#06b6d4',
                description: 'Utility-first CSS framework for rapid UI development'
            },
            {
                name: 'Vanilla JavaScript',
                icon: 'fab fa-js-square',
                color: '#f7df1e',
                description: 'Pure JavaScript for dynamic and interactive web applications'
            },
            {
                name: 'React.js',
                icon: 'fab fa-react',
                color: '#61dafb',
                description: 'Component-based library for building user interfaces'
            },
            {
                name: 'AngularJS',
                icon: 'fab fa-angular',
                color: '#dd0031',
                description: 'Powerful framework for building dynamic web applications'
            }
        ];
        
        // Additional technologies
        ctrl.additionalSkills = [
            'CSS3', 'Bootstrap', 'SASS/SCSS', 'Git', 'GitHub', 
            'Responsive Design', 'REST APIs', 'JSON', 'NPM', 
            'Webpack', 'ES6+', 'jQuery', 'Node.js'
        ];
    }
})();
