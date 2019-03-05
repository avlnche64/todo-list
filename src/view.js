import { EventEmitter, createElement } from './helpers';

export default class View extends EventEmitter {
  constructor() {
    super();

    this.todoItems = document.querySelector('.todo-items');
    this.todoForm = document.querySelector('.todo-form');
    this.todoFormInput = document.querySelector('.todo-form-input');

    this.todoForm.addEventListener('submit', this.handlerAdd.bind(this));
  }

  addTodo({ id, title, done }) {
    const todoItem = createElement(
      'li',
      ['todo-item', `${done ? 'done' : ''}`],
      [{ name: 'id', value: id }],
      `
      <input class="todo-item-checkbox" type="checkbox">
      <label class="todo-item-title">${title}</label>
      <input class="todo-item-input" type="text">
      <button class="edit-todo">Изменить</button>
      <button class="delete-todo">Удалить</button>
      `,
    );

    this.attachEventHandlers(todoItem);
    this.todoItems.appendChild(todoItem);
  }

  deleteTodo(id) {
    const todoItem = document.getElementById(id);
    todoItem.parentNode.removeChild(todoItem);
  }

  editTodo(id, title) {
    const todoItem = document.getElementById(id);
    const label = todoItem.querySelector('.todo-item-title');

    label.textContent = title;
  }

  toggleTodo(id) {
    const todoItem = document.getElementById(id);
    todoItem.classList.toggle('done');
  }

  attachEventHandlers(todoItem) {
    const checkbox = todoItem.querySelector('.todo-item-checkbox');
    const buttonDelete = todoItem.querySelector('.delete-todo');
    const buttonEdit = todoItem.querySelector('.edit-todo');
    const input = todoItem.querySelector('.todo-item-input');

    checkbox.addEventListener('change', this.handlerToggle.bind(this));
    buttonDelete.addEventListener('click', this.handlerDelete.bind(this));
    buttonEdit.addEventListener('click', this.handlerEdit.bind(this));
    input.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) this.handlerEdit(event);
    });
  }

  handlerAdd(event) {
    event.preventDefault();

    const title = this.todoFormInput.value;
    this.todoFormInput.value = '';

    this.emit('add', title);
  }

  handlerDelete(event) {
    const todoItem = event.target.parentNode;
    const { id } = todoItem;

    this.emit('delete', id);
  }

  handlerEdit(event) {
    const todoItem = event.target.parentNode;
    const label = todoItem.querySelector('.todo-item-title');
    const input = todoItem.querySelector('.todo-item-input');
    const buttonEdit = todoItem.querySelector('.edit-todo');
    const { id } = todoItem;

    if (todoItem.classList.contains('editing')) {
      label.textContent = input.value;
      buttonEdit.textContent = 'Изменить';
      this.emit('edit', id, input.value);
    } else {
      input.value = label.textContent;
      buttonEdit.textContent = 'Сохранить';
    }

    todoItem.classList.toggle('editing');
  }

  handlerToggle(event) {
    const { id } = event.target.parentNode;

    this.emit('toggle', id);
  }
}
