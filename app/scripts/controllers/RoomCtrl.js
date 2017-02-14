(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all; 
        this.test = "testtetett";
//        this.getRooms = rooms;
//        return rooms;
    };
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();