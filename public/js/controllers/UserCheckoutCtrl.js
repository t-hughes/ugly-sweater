app.controller('UserCheckoutCtrl', function($scope, UserCartSrv) {

    // Get Subtotal
    $scope.subtotal = () => {
      return UserCartSrv.subtotal();
    };

    $scope.tax = () => {
      return UserCartSrv.tax();
    };

    // Grand Total
    $scope.grandtotal = () => {
      return UserCartSrv.grandtotal();
    };

});