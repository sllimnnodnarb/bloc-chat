(function(Room) {
    function RoomCtrl($firebaseObject, $firebaseref) {
        this.object = $firebaseObject($firebaseRef.object);
        return this.object
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();