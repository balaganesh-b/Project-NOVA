// debug.js
// Milestone v0.0.2
// debug.js
// Milestone v0.0.2

// debug.js
// Project NOVA v0.0.2.1

import { Config } from "./config.js";

export const Debug = {

    log(message) {

        if (!Config.debug.enabled) {
            return;
        }

        console.log(message);

    },

    warn(message) {

        if (!Config.debug.enabled) {
            return;
        }

        console.warn(message);

    },

    error(message) {

        if (!Config.debug.enabled) {
            return;
        }

        console.error(message);

    }

};

Object.freeze(Debug);