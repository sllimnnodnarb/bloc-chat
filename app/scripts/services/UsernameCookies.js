(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {    
            $uibModal.open({
                templateUrl: '/templates/usernameModal.html',
                controller: 'UsernameCtrl as user',
                size: 'sm',
                keyboard: false,
                backdrop: 'static'
            });
        }
    };
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();