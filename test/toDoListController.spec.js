describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  var todos = [
    {text: 'Learn Angular', done:false},
    {text: 'Build a todo app', done: false}
  ];

  it('expects list to initialize with two items', function() {
    expect(ctrl.todos.length).toEqual(2);
  });

  it('displays a list of todos', function() {
    expect(ctrl.todos).toEqual(todos);
  });

  // var todos2 = [
  //   {text: 'Learn Angular', done:false},
  //   {text: 'Build a todo app', done: false},
  //   {text: 'working', done: false}
  // ];

  // it('can add a new todo to the list', function() {
  //   ctrl.addToDo("working", done:false);
  //   expect(ctrl.todos).toEqual(todos2);
  // });


  //IS THIS TEST WORKING? console log say it's false..?
  it('can check an item as completed', function() {
    ctrl.todos[0].done = true;
    console.log(todos[0].done)
    expect(ctrl.todos[0].done).toEqual(true);
  });

});
