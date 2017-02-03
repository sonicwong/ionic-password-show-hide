/* ================================================================================
https://github.com/sonicwong/ionic-password-show-hide
v1.1.0
================================================================================ */

angular.module('sw2.ionic.password-show-hide', [])
.directive('ionicPasswordShowHide', ["$compile", "$timeout", function ($compile, $timeout) {
    return {
        restrict: 'A',
        scope: {
            ngModel: '='
        },
        controller: [   "$scope", "$element", "$attrs", "ionicInputClearableConfig",
            function ($scope, $element, $attrs, ionicInputClearableConfig) {
                var element = $element[0];

                //Parent element should be position:relative to make clear button in correct positon
                $element.parent().css( "position", "relative" );

                //Show/Hide button icon class name
                $scope.btnShowClass = element.hasAttribute("data-password-show-btn-class") ? element.getAttribute("data-password-show-btn-class") : 'ion-eye';
                $scope.btnHideClass = element.hasAttribute("data-password-hide-btn-class") ? element.getAttribute("data-password-hide-btn-class") : 'ion-eye-disabled';
                
                //Default to hide password at start
                $scope.btnClass = $scope.btnHideClass;

                //ng-hide class used to fix init flash problem
                $scope.btn = angular.element('<a tabindex="-1" ng-cloak ng-class="btnClass" class="password-show-hide-btn button button-icon icon" ng-click="btnClick()"></a>');
                $compile($scope.btn)($scope);
                $element.after($scope.btn);

                $scope.btnClick = function () {
                    if( $element.attr('type') == 'password' ){
                        $element.attr('type', 'text');
                        $scope.btnClass = $scope.btnShowClass;
                    }else{
                        $element.attr('type', 'password');
                        $scope.btnClass = $scope.btnHideClass;
                    }

                    //keep focus on the field when click on the button
                    function preventBluring() {
                        element.focus();
                        $element.unbind( 'blur', preventBluring );
                    }
                    $element.bind( 'blur' , preventBluring );
                }

                function refresh() {
                    $timeout( function () {
                        $scope.$digest();
                    });
                }

                $element.bind( 'focus', refresh );
                $element.bind( 'blur', refresh );
            }
        ]
    }
}]);
