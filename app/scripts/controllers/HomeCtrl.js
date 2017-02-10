(function() {
    function HomeCtrl() {
        prompt("Welcome to Bloc Chat!"<br>"Enter your name.");
    };
        
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();