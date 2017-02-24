(function() {
    function Room($firebaseArray) { 
        var ref = firebase.database().ref().child('rooms');
        var roomArray = $firebaseArray(ref);
        return {
            all: roomArray,
        }; 
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();