(function() {
    function ModalCtrl( $firebaseArray, $scope, $uibModalInstance, $cookies, Room) { 
        
        var ref = firebase.database().ref().child('rooms');
        var roomArray = $firebaseArray(ref);
        $scope.roomName= "";
        $scope.roomArray = $firebaseArray(ref);
        $scope.username = "";
        
        $scope.create = function() {
            roomArray.$add({ name: $scope.roomName }).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                roomArray.$indexFor(id);
                roomName = id;
            })
            
            $uibModalInstance.close();

        };
        
        $scope.cancel = function() {
             $uibModalInstance.dismiss('cancel');
        };
        
        $scope.createUsername = function () {
            $cookies.put('blocChatCurrentUser', $scope.username);
            $uibModalInstance.close();
        };
    };
 
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$firebaseArray', '$scope', '$uibModalInstance', '$cookies', 'Room', ModalCtrl]);
})();