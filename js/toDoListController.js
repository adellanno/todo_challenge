toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.todos = [
    {text: 'Learn Angular', done:false},
    {text: 'Build a todo app', done: false}
  ];

  self.totalToDos = self.todos.length;

  self.addToDo = function() {
    console.log("New todo added!)");
  };

}]);
