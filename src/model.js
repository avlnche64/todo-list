import { EventEmitter } from './helpers';

export default class Model extends EventEmitter {
  constructor(existingTodos) {
    super();

    this.todos = existingTodos || [];
  }

  addTodo(title) {
    const todo = {
      title,
      id: `${new Date().valueOf()}`,
      done: false,
    };

    this.todos.push(todo);

    return todo;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => (todo.id !== id));
  }

  editTodo(id, title) {
    const editingTodo = this.todos.find(todo => (todo.id === id));

    editingTodo.title = title;

    return editingTodo;
  }

  toggleTodo(id) {
    const togglingTodo = this.todos.find(todo => (todo.id === id));

    togglingTodo.done = !togglingTodo.done;
  }

  updateStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
