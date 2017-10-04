angular
    .module('DashboardController', [])
    .controller('DashboardController', DashboardController)

DashboardController.$inject = ['DashboardService'];

function DashboardController(DashboardService) {
    let vm = this;

    vm.PageTitle = "Dashboard"
    var dashboardItemsStorage =  localStorage.getItem('dashboardItems')

    console.log('DashboardController Running')

    if (dashboardItemsStorage) {
        vm.dashboardItems = JSON.parse(dashboardItemsStorage);
    } else {
        vm.dashboardItems = 
            DashboardService
                .getDashboardItems();
        localStorage.setItem('dashboardItems', JSON.stringify(vm.dashboardItems));
    }
}