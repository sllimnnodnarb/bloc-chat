(function() {
    function RoomCtrl($uibModal, Room, Message) {
        var ctrl = this;
        
        ctrl.rooms = Room.all;
        ctrl.message = Message.all;
        ctrl.activeRoom = null;
        ctrl.roomName = null;

       ctrl.setActiveChatRoom = function(room) {
            ctrl.activeRoom = room;
            ctrl.roomName = room.name;
            ctrl.messages = Message.getByRoomId(room.$id);
        }
        
        ctrl.open = function() {
            $uibModal.open({ 
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
            });
        }
    };  
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', 'Message', RoomCtrl]);
})();