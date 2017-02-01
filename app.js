var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    // create a synchronized array
    $scope.messages = $firebaseArray(ref);
    $scope.addMessage = function() {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };
});