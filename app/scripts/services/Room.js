(function() {
    function Room($firebaseArray) { 
        var ref = firebase.database().ref().child("rooms");
        var roomArray = $firebaseArray(ref);
        var messageReference = firebase.database().ref().child("messages").orderByChild("roomId");
        var getMessages = function(roomId) {
            var messages = roomArray.child("messages"); 
            return $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
        }
        
        return {
            all: roomArray,
        }
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();