(function() {
    function Message($firebaseArray) {
 
        return {
            getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
                return $firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId));
            }
        };
    };

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();