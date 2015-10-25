describe('Todo list', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })


  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo List');
  });


  it('can add a new todo item to the list', function() {
    element(by.model('toDoCtrl.formTodoText')).sendKeys('New todo');
    element(by.css('[value="Addtodo"]')).click();

    var todos = element.all(by.repeater('todo in toDoCtrl.todos'));
    expect(todos.last().getText()).toEqual('New todo');
  })


});
