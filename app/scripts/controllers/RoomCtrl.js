(function() {
    function RoomCtrl($uibModal, $cookies, $scope, $firebaseArray, Room, Message) {
        var ctrl = this;
        var roomRef = firebase.database().ref().child("rooms");
        var messageRef = firebase.database().ref().child("messages");
        var messageReference = firebase.database().ref().child("messages").orderByChild('roomId');
        var roomArray = $firebaseArray(roomRef);
        var messageArray = $firebaseArray(messageRef)
        ctrl.rooms = Room.all;
        ctrl.message = Message.all;
        ctrl.activeRoom = null;
        ctrl.roomName = null;
        ctrl.currentUser = $cookies.get('blocChatCurrentUser');

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
        
        ctrl.send = function() {
            roomId =ctrl.activeRoom.$id;
            messageArray.$add({ 
                message: $scope.content,
                username: $cookies.blocChatCurrentUser,
                roomId: roomId
            })
        }
    };  
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', '$cookies', '$scope', '$firebaseArray', 'Room', 'Message', RoomCtrl]);
})();