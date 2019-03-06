import { EventEmitter } from './helpers';

export default class Controller extends EventEmitter {
  constructor(model, view) {
    super();

    this.model = model;
    this.view = view;

    if (this.model.todos !== []) {
      this.model.todos.forEach(todoItem => this.view.addTodo(todoItem));
    }

    this.view.on('add', this.addTodo.bind(this));
    this.view.on('delete', this.deleteTodo.bind(this));
    this.view.on('edit', this.editTodo.bind(this));
    this.view.on('toggle', this.toggleTodo.bind(this));
  }

  addTodo(title) {
    const todo = this.model.addTodo(title);
    this.view.addTodo(todo);
    this.model.updateStorage();
  }

  deleteTodo(id) {
    this.model.deleteTodo(id);
    this.view.deleteTodo(id);
    this.model.updateStorage();
  }

  editTodo(id, title) {
    this.model.editTodo(id, title);
    this.view.editTodo(id, title);
    this.model.updateStorage();
  }

  toggleTodo(id) {
    this.model.toggleTodo(id);
    this.view.toggleTodo(id);
    this.model.updateStorage();
  }
}
