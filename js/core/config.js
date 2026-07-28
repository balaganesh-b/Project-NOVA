// config.js
// Milestone v0.0.2
// config.js
// Project NOVA v0.0.2.1

export const Config = {
    version: {
    engine: "0.0.3",
    architecture: "1.1"
},

    engine: {
        name: "Project NOVA",
        fps: 60
    },

    renderer: {
        antialias: true,
        shadows: true
    },

    camera: {
        fov: 75,
        near: 0.1,
        far: 1000
    },

    controls: {
        moveSpeed: 5,
        sprintMultiplier: 2,
        mouseSensitivity: 0.002
    },

    physics: {
        gravity: 9.81
    },

    world: {
        ambientLight: 1.0
    },

    debug: {
        enabled: true,
        showFPS: true
    }
};

function deepFreeze(obj) {
    Object.keys(obj).forEach(key => {
        const value = obj[key];

        if (value && typeof value === "object") {
            deepFreeze(value);
        }
    });

    return Object.freeze(obj);
}

deepFreeze(Config);

// Lock configuration to prevent runtime modifications.