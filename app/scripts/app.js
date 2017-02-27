(function() {
    function config($stateProvider, $locationProvider) {
        
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider     
            .state('home', {
                url: '/',
                templateUrl: '/templates/home.html'
            })
        
            .state('rooms', {
                url: '/rooms',
                controller: 'RoomCtrl as rooms',
                templateUrl: '/templates/rooms.html'
             })
        
            .state('modal', {
                url: '/modal',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html',
                bindings: {
                    resolve: '<',
                    close: '&',
                    dismiss: '&'
                }
             });
    
    }
        
    angular
            .module('blocChat', ['ui.router', 'firebase','ui.bootstrap'])
            .config(config);
})();