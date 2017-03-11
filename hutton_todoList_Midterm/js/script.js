var app = angular.module('todo', []);
app.controller('todoCTRL', function ($scope) {
  $scope.tasks = [];
  $scope.saved = JSON.parse(localStorage.getItem('tasksItems'));
  $scope.tasks = (Array.isArray($scope.saved)) ? $scope.saved : [];
  console.log($scope.tasks)
  $scope.plusTask = {
    header: ''
    , date: (new Date())
    , finished: false
  }
  
   /*****************************************
              ADD FUNCTION
  *****************************************/
  $scope.add = function () {
    $scope.plusTask.id = cuid()
    
    $scope.plusTask.finished = false;
    
    $scope.tasks.push($scope.plusTask)
    $scope.plusTask = {
      header: ''
      , date: (new Date())
      , finished: false
    }
    localStorage.setItem('tasksItems', JSON.stringify($scope.tasks));
  };
  /*****************************************
              DELETE FUNCTION
  *****************************************/
  $scope.delete = function (task) {
    
    const index = $scope.tasks.findIndex(item => item.id === task.id); 


    $scope.tasks.splice(this.$index, 1);
    
    localStorage.setItem('tasksItems', JSON.stringify($scope.tasks));
  };
  
   /*****************************************
              SAVE FUNCTION
  *****************************************/
  $scope.save = function () {
    localStorage.setItem('tasksItems', JSON.stringify($scope.tasks));
  }
});