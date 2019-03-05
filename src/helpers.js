function createElement(tag, classNames, atributes, innerHtmlTemplate) {
  const element = document.createElement(tag);

  atributes.forEach(({ name, value }) => element.setAttribute(name, value));
  classNames.forEach((className) => {
    if (className) element.classList.add(className);
  });
  element.innerHTML = innerHtmlTemplate;

  return element;
}

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event].length && this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }

  removeEvents(...events) {
    events.forEach(event => delete this.events[event]);
  }
}

export { EventEmitter, createElement };
