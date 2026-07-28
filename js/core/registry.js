// registry.js
// Milestone v0.0.2
// registry.js
// Milestone v0.0.2

// registry.js
// Project NOVA v0.0.2.1

export const Registry = {

    items: {},

    register(key, value) {

        this.items[key] = value;

    },

    get(key) {

        return this.items[key];

    },

    has(key) {

        return Object.prototype.hasOwnProperty.call(this.items, key);

    },

    remove(key) {

        delete this.items[key];

    },

    clear() {

        this.items = {};

    }

};

