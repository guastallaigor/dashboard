angular
    .module('Routes', ['ui.router'])
    .config(Configurations);

Configurations.$inject = ['$stateProvider', '$urlRouterProvider'];

function Configurations($stateProvider, $urlRouterProvider) {    
    $stateProvider    
        .state('layout', {
            url: '/layout',
            controller: 'LayoutController as vm',
            templateUrl: 'scripts/modules/layout.html',
            ncyBreadcrumb: {
                label: 'Layout'
            }
        })
        .state('layout.dashboard', {
            url: '/dashboard',
            controller: 'DashboardController as vm',
            templateUrl: 'scripts/modules/dashboard/dashboard.html',    
            ncyBreadcrumb: {
                label: 'Layout / Dashboard'
            }
        })
        .state('layout.visualcharts', {
            url: '/visualcharts',
            controller: 'VisualChartsController as vm',
            templateUrl: 'scripts/modules/visualcharts/visualcharts.html',    
            ncyBreadcrumb: {
                label: 'Layout / VisualCharts'
            }
        })        
    $urlRouterProvider.otherwise('layout');        
}