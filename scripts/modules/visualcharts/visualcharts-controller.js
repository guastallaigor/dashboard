angular
    .module('VisualChartsController', [])
    .controller('VisualChartsController', VisualChartsController)

    VisualChartsController.$inject = ['VisualChartsService'];

function VisualChartsController(VisualChartsService) {
    let vm = this;

    console.log("VisualChartsController Running");
    vm.PageTitle = "Visual Charts";

    vm.dados = 
        VisualChartsService
        .getVisualCharts()
    //     .then(res => {
    //     if (res.data.length === 0) {
        
    //     } else {
            
    //     }
    // });

}
