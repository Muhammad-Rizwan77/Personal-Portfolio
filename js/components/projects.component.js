    // Projects Component
(function() {
    'use strict';

    angular.module('portfolioApp')
        .component('projectsComponent', {
            template: `
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-5 fade-in-up">
                            <h2 class="display-5 fw-bold mb-3">My Projects</h2>
                            <p class="lead text-muted">Here are some of my recent works that showcase my skills and passion for development.</p>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 col-sm-12"
                             ng-repeat="project in $ctrl.projects track by $index">
                            <div class="card h-100 project-card fade-in-up"
                                 style="animation-delay: {{ $index * 0.1 }}s">
                                <div class="card-img-container">
                                    <img src="{{ project.image }}"
                                         class="card-img-top project-image"
                                         alt="{{ project.title }}">
                                    <div class="project-overlay">
                                        <div class="project-tech">
                                            <span class="badge bg-primary me-1 mb-1"
                                                  ng-repeat="tech in project.technologies">
                                                {{ tech }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title fw-bold">{{ project.title }}</h5>
                                    <p class="card-text text-muted flex-grow-1">{{ project.description }}</p>
                                    <div class="project-links mt-auto">
                                        <a href="{{ project.liveUrl }}"
                                           target="_blank"
                                           class="btn btn-primary me-2"
                                           ng-if="project.liveUrl">
                                            <i class="fas fa-external-link-alt me-1"></i>Live Demo
                                        </a>
                                        <a href="{{ project.githubUrl }}"
                                           target="_blank"
                                           class="btn btn-outline-secondary"
                                           ng-if="project.githubUrl">
                                            <i class="fab fa-github me-1"></i>Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Call to Action -->
                    <div class="row mt-5">
                        <div class="col-12 text-center fade-in-up">
                            <h3 class="mb-3">Want to see more?</h3>
                            <p class="text-muted mb-4">Check out my GitHub for more projects and contributions.</p>
                            <a href="{{ $ctrl.githubProfile }}"
                               target="_blank"
                               class="btn btn-outline-primary btn-lg">
                                <i class="fab fa-github me-2"></i>Visit My GitHub
                            </a>
                        </div>
                    </div>
                </div>
            `,
            controller: ProjectsController
        });

    function ProjectsController() {
        var ctrl = this;

        // GitHub profile URL - Update with your actual GitHub profile
        ctrl.githubProfile = 'https://github.com/Muhammad-Rizwan77';

        // Sample projects - Replace with your actual projects
        ctrl.projects = [
            {
                title: 'E-Commerce Store AngularJS',
                description: 'A modren e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
                image: 'https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/e.commerce-scaled.jpg',
                technologies: ['HTML5', 'CSS3', 'Javascript', 'AngularJS'],
                liveUrl: 'https://singular-macaron-f844d2.netlify.app/',
                githubUrl: 'https://github.com/Muhammad-Rizwan77/E-commerce-Store-.git'
            },
            {
                title: 'Resume Builder',
                description: 'A collaborative Resume Builder App build with real-time updates, drag-and-drop functionality, and team collaboration features.',
                image: 'https://cdn-images.resumelab.com/pages/builders_9.png?1567714063',
                technologies: ['Vue.js', 'Express', 'Socket.io', 'Angular JS'],
                liveUrl: 'https://delicate-mochi-a841f6.netlify.app/',
                githubUrl: 'https://github.com/Muhammad-Rizwan77/resume-builder.git'
            },
            {
                title: 'Weather App',
                description: 'A responsive weather application that provides current weather conditions, forecasts, and interactive maps using external APIs.',
                image: 'https://static.vecteezy.com/system/resources/previews/020/330/631/original/3d-glassmorphism-weather-forecast-app-template-mobile-interface-template-weather-icons-set-isolated-on-blue-background-vector.jpg',
                technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
                liveUrl: 'https://tourmaline-biscochitos-279059.netlify.app/',
                githubUrl: 'https://github.com/Muhammad-Rizwan77/Weather-App.git'
            },
            {
                title: 'YouTube Clone',
                description: 'A responsive YouTube Clone built with modren web technologies, featuring APIs.',
                image: 'https://cdn.mos.cms.futurecdn.net/jJneZLjUsUvFK5y3bJNUdD.jpg',
                technologies: ['ReactJS', 'Bootstrap', 'CSS3', 'JavaScript'],
                liveUrl: 'https://creative-crostata-3849ed.netlify.app/',
                githubUrl: 'https://github.com/Muhammad-Rizwan77/YouTube-Clone.git'
            },
            {
                title: 'React E-commerce App',
                description: 'A responsive Real E-commerce Web App built with modren web technologies.',
                image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a056n94babjpplhxt2iu.png',
                technologies: ['ReactJS', 'Bootstrap', 'CSS3', 'JavaScript'],
                liveUrl: 'https://timely-muffin-d1a938.netlify.app/',
                githubUrl: 'https://github.com/Muhammad-Rizwan77/Real-Time-Chat-App.git'
            },
             {
                title: 'Task Management Application',
                description: 'A responsive Task Management App built with modren web technologies, featuring APIs.',
                image: 'https://tse1.mm.bing.net/th/id/OIP.a0ArDs8Qql4y29ekV4_7EwHaDt?pid=Api&P=0&h=220',
                technologies: ['Angular JS', 'Bootstrap', 'CSS3', 'JavaScript'],
                liveUrl: 'https://aquamarine-cobbler-446f3a.netlify.app/',
                githubUrl: 'https://github.com/Muhammad-Rizwan77/Task-management-website.git'
            },
        ];
    }
})();
