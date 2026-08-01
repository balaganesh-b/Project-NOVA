// EntityManager.js
// Project NOVA v0.0.2

/**
 * Manages a registry of entities by unique ID.
 * This manager is intentionally independent of rendering and Three.js.
 */
export class EntityManager {

    /**
     * Create a new EntityManager.
     */
    constructor() {
        /**
         * Internal entity registry.
         * @type {Map<string|number, Object>}
         * @private
         */
        this._entities = new Map();
    }

    /**
     * Add an entity to the registry.
     * @param {Object} entity - The entity to register.
     * @param {string|number} entity.id - The unique entity identifier.
     * @returns {Object} The entity that was added.
     * @throws {Error} If the entity is invalid or the ID is already registered.
     */
    add(entity) {
        if (!entity || typeof entity !== "object") {
            throw new Error("EntityManager.add: entity must be a non-null object.");
        }

        const id = entity.id;

        if (id === undefined || id === null) {
            throw new Error("EntityManager.add: entity must have a unique 'id' property.");
        }

        if (typeof id !== "string" && typeof id !== "number") {
            throw new Error("EntityManager.add: entity.id must be a string or number.");
        }

        if (this._entities.has(id)) {
            throw new Error(`EntityManager.add: duplicate entity id '${id}' detected.`);
        }

        this._entities.set(id, entity);
        return entity;
    }

    /**
     * Remove an entity from the registry.
     * @param {string|number} id - The unique ID of the entity to remove.
     * @returns {Object|null} The removed entity, or null if no entity was found.
     */
    remove(id) {
        if (id === undefined || id === null) {
            throw new Error("EntityManager.remove: id is required.");
        }

        const entity = this._entities.get(id) || null;

        if (entity) {
            this._entities.delete(id);
        }

        return entity;
    }

    /**
     * Retrieve an entity by ID.
     * @param {string|number} id - The unique ID of the entity.
     * @returns {Object|null} The matched entity, or null if not found.
     */
    get(id) {
        if (id === undefined || id === null) {
            throw new Error("EntityManager.get: id is required.");
        }

        return this._entities.get(id) || null;
    }

    /**
     * Returns true when an entity with the specified ID exists.
     * @param {string|number} id - The entity ID to check.
     * @returns {boolean}
     */
    has(id) {
        if (id === undefined || id === null) {
            throw new Error("EntityManager.has: id is required.");
        }

        return this._entities.has(id);
    }

    /**
     * Get all registered entities.
     * @returns {Object[]} An array of all registered entities.
     */
    getAll() {
        return Array.from(this._entities.values());
    }

    /**
     * Find entities by name.
     * @param {string} name - The entity name to search for.
     * @returns {Object[]} Array of entities that match the provided name.
     */
    findByName(name) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("EntityManager.findByName: name must be a non-empty string.");
        }

        const normalized = name.trim().toLowerCase();

        return this.getAll().filter(entity => {
            if (!entity || typeof entity.name !== "string") {
                return false;
            }

            return entity.name.toLowerCase() === normalized;
        });
    }

    /**
     * Remove all entities from the registry.
     */
    clear() {
        this._entities.clear();
    }

    /**
     * Get the number of registered entities.
     * @returns {number}
     */
    get size() {
        return this._entities.size;
    }

    /**
     * Get an iterator over registered entity values.
     * @returns {IterableIterator<Object>}
     */
    values() {
        return this._entities.values();
    }

    /**
     * Get an iterator over registered entity keys.
     * @returns {IterableIterator<string|number>}
     */
    keys() {
        return this._entities.keys();
    }

    /**
     * Get an iterator over registered entity entries.
     * @returns {IterableIterator<[string|number, Object]>}
     */
    entries() {
        return this._entities.entries();
    }
}
