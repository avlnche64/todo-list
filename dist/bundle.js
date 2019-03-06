!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.r(t);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={}}var t,o,r;return t=e,(o=[{key:"on",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}},{key:"emit",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];this.events[e].length&&this.events[e]&&this.events[e].forEach(function(e){return e.apply(void 0,o)})}},{key:"removeEvents",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.forEach(function(t){return delete e.events[t]})}}])&&n(t.prototype,o),r&&n(t,r),e}();function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=a(this,l(t).call(this))).todos=e||[],o}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r),o=t,(n=[{key:"addTodo",value:function(e){var t={title:e,id:"".concat((new Date).valueOf()),done:!1};return this.todos.push(t),t}},{key:"deleteTodo",value:function(e){this.todos.filter(function(t){return t.id!==e})}},{key:"editTodo",value:function(e,t){var o=this.todos.find(function(t){return t.id===e});return o.title=t,o}},{key:"toggleTodo",value:function(e){var t=this.todos.find(function(t){return t.id===e});t.done=!t.done}},{key:"updateStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}}])&&u(o.prototype,n),i&&u(o,i),t}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){var e,o,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(e=!(n=y(t).call(this))||"object"!==f(n)&&"function"!=typeof n?p(o):n).todoItems=document.querySelector(".todo-items"),e.todoForm=document.querySelector(".todo-form"),e.todoFormInput=document.querySelector(".todo-form-input"),e.todoForm.addEventListener("submit",e.handlerAdd.bind(p(e))),e}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r),o=t,(n=[{key:"addTodo",value:function(e){var t,o,n,r,i,u=e.id,a=e.title,l=e.done,c=(t="li",o=["todo-item","".concat(l?"done":"")],n=[{name:"id",value:u}],r='\n      <input class="todo-item-checkbox" type="checkbox"'.concat(l?" checked":"",'>\n      <label class="todo-item-title">').concat(a,'</label>\n      <input class="todo-item-input" type="text">\n      <button class="edit-todo">Изменить</button>\n      <button class="delete-todo">Удалить</button>\n      '),i=document.createElement(t),n.forEach(function(e){var t=e.name,o=e.value;return i.setAttribute(t,o)}),o.forEach(function(e){e&&i.classList.add(e)}),i.innerHTML=r,i);this.attachEventHandlers(c),this.todoItems.appendChild(c)}},{key:"deleteTodo",value:function(e){var t=document.getElementById(e);t.parentNode.removeChild(t)}},{key:"editTodo",value:function(e,t){document.getElementById(e).querySelector(".todo-item-title").textContent=t}},{key:"toggleTodo",value:function(e){document.getElementById(e).classList.toggle("done")}},{key:"attachEventHandlers",value:function(e){var t=this,o=e.querySelector(".todo-item-checkbox"),n=e.querySelector(".delete-todo"),r=e.querySelector(".edit-todo"),i=e.querySelector(".todo-item-input");o.addEventListener("change",this.handlerToggle.bind(this)),n.addEventListener("click",this.handlerDelete.bind(this)),r.addEventListener("click",this.handlerEdit.bind(this)),i.addEventListener("keydown",function(e){13===e.keyCode&&t.handlerEdit(e)})}},{key:"handlerAdd",value:function(e){e.preventDefault();var t=this.todoFormInput.value;this.todoFormInput.value="",this.emit("add",t)}},{key:"handlerDelete",value:function(e){var t=e.target.parentNode.id;this.emit("delete",t)}},{key:"handlerEdit",value:function(e){var t=e.target.parentNode,o=t.querySelector(".todo-item-title"),n=t.querySelector(".todo-item-input"),r=t.querySelector(".edit-todo"),i=t.id;t.classList.contains("editing")?(o.textContent=n.value,r.textContent="Изменить",this.emit("edit",i,n.value)):(n.value=o.textContent,r.textContent="Сохранить"),t.classList.toggle("editing")}},{key:"handlerToggle",value:function(e){var t=e.target.parentNode.id;this.emit("toggle",t)}}])&&s(o.prototype,n),i&&s(o,i),t}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(e,o){var n,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=g(t).call(this),(n=!i||"object"!==h(i)&&"function"!=typeof i?w(r):i).model=e,n.view=o,n.model.todos!==[]&&n.model.todos.forEach(function(e){return n.view.addTodo(e)}),n.view.on("add",n.addTodo.bind(w(n))),n.view.on("delete",n.deleteTodo.bind(w(n))),n.view.on("edit",n.editTodo.bind(w(n))),n.view.on("toggle",n.toggleTodo.bind(w(n))),n}var o,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r),o=t,(n=[{key:"addTodo",value:function(e){var t=this.model.addTodo(e);this.view.addTodo(t),this.model.updateStorage()}},{key:"deleteTodo",value:function(e){this.model.deleteTodo(e),this.view.deleteTodo(e),this.model.updateStorage()}},{key:"editTodo",value:function(e,t){this.model.editTodo(e,t),this.view.editTodo(e,t),this.model.updateStorage()}},{key:"toggleTodo",value:function(e){this.model.toggleTodo(e),this.view.toggleTodo(e),this.model.updateStorage()}}])&&m(o.prototype,n),i&&m(o,i),t}(),T=JSON.parse(localStorage.getItem("todos")),k=new b;new O(new d(T),k)}]);
//# sourceMappingURL=bundle.js.map