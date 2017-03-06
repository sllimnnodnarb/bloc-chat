(function() {
    function UsernameCtrl($scope, $uibModalInstance, $cookies) {
        
        $scope.createUsername = function() {
            $cookies.blocChatCurrentUser = $scope.newUser;
            if($scope.newUser === undefined) {
                alert("You must define a username in order to proceed to the chatting experience of a lifetime.");
            } else {
                    console.log($cookies.blocChatCurrentUser);
                    $uibModalInstance.close();
            };
        };
        
        $scope.alert = function() {
            alert("You must create a username in order to proceed to the chatting experience of a lifetime.")
        };
    }
    
    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$scope', '$uibModalInstance', '$cookies', UsernameCtrl]);
})();