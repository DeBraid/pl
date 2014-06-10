function CatalogueCtrl($scope)  {
    
        $scope.items = [
      {Name: "Red ballons", Price: "25", Quantity: "10"},
      {Name: "Custom Print", Price: "50", Quantity: "15"},
      {Name: "Sports", Price: "100", Quantity: "5"}
    ];
      
    $scope.mySortFunction = function(item) {
      if(isNaN(item[$scope.sortExpression]))
        return item[$scope.sortExpression];
      return parseInt(item[$scope.sortExpression]);
    }
}