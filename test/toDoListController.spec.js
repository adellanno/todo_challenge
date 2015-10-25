describe('ToDoListController', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('expects list to initialize with two items', function() {
    expect(ctrl.todos.length).toEqual(2);
  });

});
