(function() {
    function RoomCtrl($scope, $uibModal, Room) {
        this.rooms = Room.all;
        
        $scope.open = function() {
            $uibModal.open({ 
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
            });
        };
    };
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', RoomCtrl]);
})();