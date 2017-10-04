angular
    .module('VisualChartsService', [])
    .service('VisualChartsService', VisualChartsService);

    VisualChartsService.$inject = ['$http'];

function VisualChartsService($http) {
    let vm = this
    vm.getVisualCharts = getVisualCharts

    var dados = {
        texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra iaculis turpis, a interdum leo mollis et. Ut a tristique erat. Duis id tristique risus, in sollicitudin dui. Maecenas egestas tincidunt ullamcorper. Ut eu elit dapibus, tempor lectus nec, pulvinar ex. Sed tincidunt ante lacinia tincidunt gravida. Ut sagittis diam ut tincidunt vestibulum. Ut vitae ex sem.'
    }
    
    function getVisualCharts(){
        return angular.copy(dados)
    }
}