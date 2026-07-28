// events.js
// Milestone v0.0.2
// events.js
// Milestone v0.0.2

// events.js
// Project NOVA v0.0.2.1

export const Events = {

    listeners: {},

    on(eventName, callback) {

        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(callback);

    },

    off(eventName, callback) {

        const callbacks = this.listeners[eventName];

        if (!callbacks) {
            return;
        }

        this.listeners[eventName] =
            callbacks.filter(listener => listener !== callback);

    },

    emit(eventName, data = null) {

        const callbacks = this.listeners[eventName];

        if (!callbacks) {
            return;
        }

        callbacks.forEach(callback => {
            callback(data);
        });

    },

    clear() {

        this.listeners = {};

    }

};

