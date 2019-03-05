import { EventEmitter } from './helpers';

export default class Controller extends EventEmitter {
  constructor(model, view) {
    super();

    this.model = model;
    this.view = view;

    this.view.on('add', this.addTodo.bind(this));
    this.view.on('delete', this.deleteTodo.bind(this));
    this.view.on('edit', this.editTodo.bind(this));
    this.view.on('toggle', this.toggleTodo.bind(this));
  }

  addTodo(title) {
    const todo = this.model.addTodo(title);
    this.view.addTodo(todo);
  }

  deleteTodo(id) {
    this.model.deleteTodo(id);
    this.view.deleteTodo(id);
  }

  editTodo(id, title) {
    this.model.editTodo(id, title);
    this.view.editTodo(id, title);
  }

  toggleTodo(id) {
    this.model.toggleTodo(id);
    this.view.toggleTodo(id);
  }
}
