angular
    .module('LayoutService', [])
    .service('LayoutService', LayoutService);

    // LayoutService.$inject = ['$http'];

function LayoutService() {
    let vm = this;
    var items = [
        { Id: 1, Icon: 'fa fa-home', Name: 'Dashboard', Route: 'layout.dashboard' },
        { Id: 2, Icon: 'fa fa-briefcase', Name: 'Negociações', Route: 'layout.dashboard' },        
        { Id: 3, Icon: 'fa fa-gift', Name: 'Bonificações', Route: 'layout.dashboard' },
        { Id: 4, Icon: 'fa fa-bar-chart-o', Name: 'Visual Charts', Route: 'layout.visualcharts' },
        { Id: 5, Icon: 'fa fa-cogs', Name: 'Configurações', Route: 'layout.dashboard' }
    ];

    vm.getNavBarItems = function () {        
        return angular.copy(items)
    };
}