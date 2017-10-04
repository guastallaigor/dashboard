angular
    .module('LayoutController', [])
    .controller('LayoutController', LayoutController)

LayoutController.$inject = ['LayoutService', '$state'];

function LayoutController(LayoutService, $state) {
    let vm = this;
    vm.selectedTab = 1
    vm.data = "LayoutController";
    var navBarItemsStorage = localStorage.getItem('navBarItems');
    vm.navBarItems = LayoutService.getNavBarItems();    

    vm.selectTab = selectTab
    console.log("LayoutController Running...");

    localStorage.setItem('navBarItems',JSON.stringify(vm.navBarItems));
    
    function selectTab(navItemId) {
        vm.selectedTab = vm.navItemId
    }

    $state.go('layout.dashboard');
}