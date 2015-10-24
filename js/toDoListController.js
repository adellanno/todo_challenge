toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.result ={
     "items": [
        "Make a todo app",
        "Make it look good",
    ]
  };

  self.addToDo = function() {
  console.log("New todo added!)");
};
}]);
