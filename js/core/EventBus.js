/**
 * Lightweight event bus for Project NOVA.
 *
 * This implementation is completely independent of rendering and Three.js.
 * It uses a Map of event names to Sets of listener functions, which prevents
 * duplicate listeners from being registered for the same event.
 */
export class EventBus {
    constructor() {
        /**
         * Registered listeners keyed by event name.
         * @type {Map<string, Set<Function>>}
         */
        this.listeners = new Map();
    }

    /**
     * Register a listener for an event.
     *
     * @param {string} event - Event name to listen for.
     * @param {Function} listener - Listener function to invoke.
     * @returns {EventBus} The current EventBus instance.
     */
    on(event, listener) {
        if (typeof listener !== "function") {
            throw new TypeError("EventBus.on expects a function listener.");
        }

        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }

        this.listeners.get(event).add(listener);
        return this;
    }

    /**
     * Register a listener that is removed after the first successful invocation.
     *
     * @param {string} event - Event name to listen for.
     * @param {Function} listener - Listener function to invoke once.
     * @returns {EventBus} The current EventBus instance.
     */
    once(event, listener) {
        if (typeof listener !== "function") {
            throw new TypeError("EventBus.once expects a function listener.");
        }

        const wrappedListener = (...args) => {
            this.off(event, wrappedListener);
            listener(...args);
        };

        return this.on(event, wrappedListener);
    }

    /**
     * Remove a listener from an event.
     *
     * @param {string} event - Event name to remove the listener from.
     * @param {Function} listener - Listener function to remove.
     * @returns {EventBus} The current EventBus instance.
     */
    off(event, listener) {
        if (!this.listeners.has(event)) {
            return this;
        }

        this.listeners.get(event).delete(listener);

        if (this.listeners.get(event).size === 0) {
            this.listeners.delete(event);
        }

        return this;
    }

    /**
     * Emit an event to all registered listeners.
     *
     * If a listener throws an error, it is caught and the remaining listeners
     * continue to execute.
     *
     * @param {string} event - Event name to emit.
     * @param {...any} args - Arguments passed to each listener.
     * @returns {EventBus} The current EventBus instance.
     */
    emit(event, ...args) {
        if (!this.listeners.has(event)) {
            return this;
        }

        const listeners = Array.from(this.listeners.get(event));

        for (const listener of listeners) {
            try {
                listener(...args);
            } catch (error) {
                console.error(`EventBus listener failed for event "${event}":`, error);
            }
        }

        return this;
    }

    /**
     * Remove listeners for one event or all events.
     *
     * @param {string} [event] - Optional event name. If omitted, all listeners are removed.
     * @returns {EventBus} The current EventBus instance.
     */
    clear(event) {
        if (typeof event === "undefined") {
            this.listeners.clear();
            return this;
        }

        this.listeners.delete(event);
        return this;
    }
}
