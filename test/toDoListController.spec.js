describe('ToDoListController', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('expects list to initialize with two items', function() {
    expect(ctrl.todos.length).toEqual(2);
  });



  describe("adding new todos to the list", function() {
    var todos = [
      {text: 'Learn Angular', done:false},
      {text: 'Build a todo app', done: false}
    ];

    it('displays a list of todos', function () {
      expect(ctrl.todos).toEqual(todos);
    });

  });

});
