function CatalogueCtrl($scope)  {
    
        $scope.items = [
      {Name: "Red balloons", Price: "25", Quantity: "10"},
      {Name: "Custom Print", Price: "50", Quantity: "15"},
      {Name: "Sports", Price: "100", Quantity: "5"},
      {Name: "Blue balloons", Price: "25", Quantity: "10"},
      {Name: "Custom Event Tables", Price: "150", Quantity: "3"},
      {Name: "Football", Price: "1", Quantity: "50"}
    ];
      
    $scope.mySortFunction = function(item) {
      if(isNaN(item[$scope.sortExpression]))
        return item[$scope.sortExpression];
      return parseInt(item[$scope.sortExpression]);
    }
}