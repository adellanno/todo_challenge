toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.todos = [
    {text: 'Learn Angular', done:false},
    {text: 'Build a todo app', done: false}
  ];

  self.totalToDos = function() {
    return self.todos.length;
  };

  self.addToDo = function() {
    self.todos.push({text:self.formTodoText, done:false});
  };

}]);
