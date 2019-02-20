function createElement(tag, textContent, classNames, type) {
  const element = document.createElement(tag);

  if (textContent !== '') element.textContent = textContent;
  if (classNames.length !== 0) element.classList.add(...classNames);
  if (type) element.type = type;

  return element;
}

function appendChildren(parent, ...children) {
  children.forEach(child => parent.appendChild(child));
}

function editTodoItem() {
  const todoItem = this.parentNode;
  const label = todoItem.querySelector('.todo-item-title');
  const buttonEdit = todoItem.querySelector('.edit-todo');
  const input = todoItem.querySelector('.todo-item-input');

  if (todoItem.classList.contains('editing')) {
    label.textContent = input.value;
    buttonEdit.textContent = 'Изменить';
  } else {
    input.value = label.textContent;
    buttonEdit.textContent = 'Сохранить';
  }

  todoItem.classList.toggle('editing');
}

function toggleTodoItem() {
  const todoItem = this.parentNode;
  todoItem.classList.toggle('completed');
}

function deleteTodoItem() {
  const todoItem = this.parentNode;
  todoItem.parentNode.removeChild(todoItem);
}

function createEventsForTodoItem(todoItem) {
  const checkbox = todoItem.querySelector('.todo-item-checkbox');
  const buttonDelete = todoItem.querySelector('.delete-todo');
  const buttonEdit = todoItem.querySelector('.edit-todo');
  const input = todoItem.querySelector('.todo-item-input');

  checkbox.addEventListener('change', toggleTodoItem);
  buttonDelete.addEventListener('click', deleteTodoItem);
  buttonEdit.addEventListener('click', editTodoItem);
  input.addEventListener('keydown', (elt) => {
    if (elt.keyCode === 13) editTodoItem.call(elt.target);
  });
}

function createTodoItem(title) {
  const checkbox = createElement('input', '', ['todo-item-checkbox'], 'checkbox');
  const label = createElement('label', title, ['todo-item-title']);
  const input = createElement('input', '', ['todo-item-input'], 'text');
  const buttonEdit = createElement('button', 'Изменить', ['edit-todo']);
  const buttonDelete = createElement('button', 'Удалить', ['delete-todo']);

  const todoItem = createElement('li', '', ['todo-item']);
  appendChildren(todoItem, checkbox, label, input, buttonEdit, buttonDelete);

  createEventsForTodoItem(todoItem);

  return todoItem;
}

const todoList = document.querySelector('.todo-list');
const todoItems = document.querySelectorAll('.todo-item');
const todoFormInput = document.querySelector('.todo-form-input');
const todoForm = document.querySelector('.todo-form');

function addTodoItem(event) {
  event.preventDefault();

  const title = todoFormInput.value;
  todoFormInput.value = '';
  todoList.appendChild(createTodoItem(title));
}

todoForm.addEventListener('submit', addTodoItem);
todoItems.forEach(item => createEventsForTodoItem(item));
