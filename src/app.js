import Model from './model';
import View from './view';
import Controller from './controller';

const existingTodos = JSON.parse(localStorage.getItem('todos'));

const view = new View();
const model = new Model(existingTodos);

const controller = new Controller(model, view);
