import Model from './model';
import View from './view';
import Controller from './controller';

console.log('начали');

const controller = new Controller(new Model(), new View());
