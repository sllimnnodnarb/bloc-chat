(function() {
    function HomeCtrl(Room) {
        this.title = "this title"
    };
        
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();