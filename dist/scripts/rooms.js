(function() {
    function Rooms($firebaseArray) {
        var ref = new Firebase('project-2091c.firebaseio.com');
        var rooms = $firebaseArray(ref.child('rooms'));

        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Rooms', ['$firebaseArray', Rooms]);
})();