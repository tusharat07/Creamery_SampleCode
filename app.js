'use strict'
angular.module('tscoops', ['ngMaterial', 'tscoops.controllers']);

var Controllers = angular.module('tscoops.controllers', []);

Controllers.controller('iceCreamController', ['$scope', '$rootScope', '$mdDialog', function ($scope, $rootScope, $mdDialog) {

    $rootScope.orderIceCream = [1, 2, 3];
    $rootScope.orderShakes = [1, 2, 3];
    $rootScope.orderFloats = [1, 2, 3];
    $rootScope.disableCheckout = true;
    $scope.enableDiv = false;
    $scope.disableRadio = false;
    $scope.disableRadio1 = false;
    $scope.iceCreamCone = [];
    $scope.cones = ['Double Chocolate', 'Raspberry', 'Stawberry', 'Sprinkles', 'Regular', 'Chocolate'];
    $rootScope.orderIceCream.length = 0;
    $rootScope.orderShakes.length = 0;
    $rootScope.orderFloats.length = 0;

    $scope.addiceCreamToCart = function () {
        $rootScope.disableCheckout = false;
        $scope.enableDiv = false;

        var string = "An IceCream with ";
        for (var i = 0; i < $scope.iceCreamCone.length; i++) {
            string = string  + $scope.iceCreamCone[i].flavour + ' - ' + $scope.iceCreamCone[i].scoops +" Scoops";
        }
        string = string + " with " + $scope.cone +" Waffle Cone";
        var obj = {x: string, price: '5'}
        $scope.iceCreamtext = string;
        $rootScope.orderIceCream.push(obj);
        $scope.iceCreamCone = [];
        $scope.cone = "";
        $scope.iceCream1 = "";
        $scope.scoops = "";
        
    };

    $scope.addToCone = function () {

        $scope.enableDiv = true;
        if ($scope.iceCreamCone.length != 2) {
           var obj ={flavour: $scope.iceCream1, scoops: $scope.scoops}
            $scope.iceCreamCone.push(obj);
            if ($scope.iceCreamCone[0].scoops == 1) {
                $scope.disableRadio = true;
            } else if ($scope.iceCreamCone[0].scoops == 2) {
                $scope.disableRadio = true;
                $scope.disableRadio1 = true;
            }
            if ($scope.iceCreamCone[0].scoops && $scope.iceCreamCone[1].scoops) {
                $scope.disableRadio1 = true;
                $scope.disableRadio = true;
            }
        }
    };

    $scope.showAlert = function (ev) {
        ///Dialog shown when user clicks add to cart
        $scope.disableRadio = false;
        $scope.disableRadio1 = false;
        $mdDialog.show(
         $mdDialog.alert()
           .clickOutsideToClose(true)
           .title('Added To Cart !!')
           .textContent('Your Order of Ice Cream is added to Cart. You can now do a checkout or shop more')
           .ariaLabel('Alert Add to Cart')
           .ok('Ok')
           .targetEvent(ev)
       );
    };

}]);

Controllers.controller('shakesController', ['$scope', '$rootScope', '$mdDialog', '$mdMedia', function ($scope, $rootScope, $mdDialog, $mdMedia) {
  
    $rootScope.discounts = ['none', '15 % off Coupon', '20 % off Coupon'];
    $rootScope.iceCreams = ['Chocolate', 'Vanilla', 'Stawberry', 'Butterscotch', 'Pista', 'Mango', 'Mint'];
    $scope.price = 4;

    $scope.addShakeToCart = function () {
        $rootScope.disableCheckout = false;
         if ($scope.discount == '15 % off Coupon') {
            $scope.price = parseFloat($scope.price * 0.85);
        }
        else if ($scope.discount == '20 % off Coupon') {
            $scope.price = parseFloat($scope.price * 0.80);
        }
        var string = "A " + $scope.shake_iceCream + " milk shake with " + $scope.milk + " milk";
        var object = { x: string, price: $scope.price }
        $rootScope.orderShakes.push(object);
        $scope.shake_iceCream = "";
        $scope.milk = "";
        $scope.discount = "";
      };
    $scope.showAlert = function (ev) {  ///Dialog shown when user clicks add to cart
         $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Added To Cart !!')
            .textContent('Your Order of ' +$scope.shake_iceCream + ' Milk Shake with '+$scope.milk +' is added to Cart. You can now do a checkout or shop more')
            .ariaLabel('Alert Add to Cart')
            .ok('Ok')
            .targetEvent(ev)
        );
    };
 }]);


Controllers.controller('floatsController', ['$scope', '$rootScope', '$mdDialog', function ($scope, $rootScope, $mdDialog) {
    $scope.enableDiv = false;
    $scope.floatCup = [];
    $scope.price_Float = 3;
    $scope.sodas = ['Pepsi', 'Coke', 'Sprite', 'Mountain Dew', 'Dr.Pepper', 'Fanta', 'Diet Coke', 'Diet Pepsi'];
    $scope.addFloatToCart = function () {
        $rootScope.disableCheckout = false;
        $scope.enableDiv = false;
        if ($scope.discount1 == '15 % off Coupon') {
            $scope.price_Float = parseFloat($scope.price_Float * 0.85);
        }
        else if ($scope.discount1 == '20 % off Coupon') {
            $scope.price_Float = parseFloat($scope.price_Float * 0.80);
        }
        var string = "A Float with ";
        for (var i = 0; i < $scope.floatCup.length; i++) {
            string = string + $scope.floatCup[i].flavour + ' - ' + $scope.floatCup[i].scoops + " Scoops";
        }
        string = string + " with " + $scope.soda + " Soda";
        var obj = { x: string, price: $scope.price_Float }
        $rootScope.orderFloats.push(obj);
        $scope.floatCup.length = 0;
        $scope.float_iceCream = "";
        $scope.soda = "";
        $scope.float_Scoops = 0;
       
    };

    $scope.addToFloat = function () {
        $scope.enableDiv = true;
        var obj = { flavour: $scope.float_iceCream, scoops: $scope.float_Scoops }
        $scope.floatCup.push(obj);
           };

    $scope.showAlert = function (ev) {  ///Dialog shown when user clicks add to cart
        $mdDialog.show(
         $mdDialog.alert()
           .clickOutsideToClose(true)
           .title('Added To Cart !!')
           .textContent('Your Order of Float is added to Cart. You can now do a checkout or shop more')
           .ariaLabel('Alert Add to Cart')
           .ok('Ok')
           .targetEvent(ev)
       );
    };
    
}]);

Controllers.controller('placeOrderController', ['$scope', '$rootScope', '$mdDialog', function ($scope, $rootScope, $mdDialog) {

    $scope.disableOrder = false;
    $scope.reviewOrder = function () {

        var x = $rootScope.orderIceCream.concat($rootScope.orderShakes);
        var total = 0;
        $scope.Orders = x.concat($rootScope.orderFloats);
        for (var i = 0; i < $scope.Orders.length; i++) {
            total = total + parseFloat($scope.Orders[i].price);
        }
        $scope.orderTotal = total;
    }
    $scope.placeOrder = function () {
        $scope.disableOrder = true;

    }
}]);