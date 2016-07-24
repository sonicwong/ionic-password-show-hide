/* ================================================================================
https://github.com/sonicwong/ionic-password-show-hide
v1.0.0
================================================================================ */

angular.module('sw2.ionic.password-show-hide', [])
    .directive('ionicPasswordShowHide', function ($compile) {
        return {
            restrict: 'A',
            scope: {
                ngModel: '='
            },
            controller: function ($scope, $element) {
                //Parent element should be position:relative to make clear button in correct positon
                $element.parent().css( "position", "relative" );
                
                $scope.showHideBtnIcon = 'ion-eye-disabled';
                
                $scope.clearBtn = angular.element('<a tabindex="-1" ng-cloak ng-class="showHideBtnIcon" class="password-show-hide-btn button button-icon icon" ng-click="togglePasswordField()"></a>');
                $compile($scope.clearBtn)($scope);
                $element.after($scope.clearBtn);
                
                $scope.togglePasswordField = function () {
                    if( $element.attr('type') == 'password' ){
                        $element.attr('type', 'text');
                        $scope.showHideBtnIcon = 'ion-eye';
                    }else{
                        $element.attr('type', 'password');
                        $scope.showHideBtnIcon = 'ion-eye-disabled';
                    }
                }
            }
        }
    })