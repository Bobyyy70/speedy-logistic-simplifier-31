/**
 * EventEmitter - implémentation simple d'un émetteur d'événements.
 *
 * Usage:
 * const EventEmitter = require('./src/lib/eventEmitter');
 * const ee = new EventEmitter();
 * const off = ee.on('ready', () => console.log('ready'));
 * ee.emit('ready');
 * off(); // détache le listener
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
    if (this.events[event].length === 0) delete this.events[event];
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    // Copie superficielle pour éviter les effets de bord si un listener modifie la liste
    const listeners = this.events[event].slice();
    listeners.forEach(listener => listener(...args));
  }
}

module.exports = EventEmitter;
module.exports.default = EventEmitter;