// engine.js
// Project NOVA v0.0.3

import { Config } from "./config.js";
import { Time } from "./time.js";

import { initializeLighting } from "../renderer/lighting.js";
import { render as renderScene } from "../renderer/renderer.js";

import { createCube } from "../entities/Cube.js";

import { createGround } from "../world/Ground.js";

export const Engine = {

    // -------------------------
    // Engine State
    // -------------------------

    isRunning: false,

    // -------------------------
    // Start Engine
    // -------------------------

    start() {

        if (this.isRunning) {
            console.warn("Engine is already running.");
            return;
        }

        this.isRunning = true;

        console.log("==================================");
        console.log(`${Config.engine.name} Engine Started`);
        console.log(`Engine Version : ${Config.version.engine}`);
        console.log("==================================");

        this.initialize();

        requestAnimationFrame(this.loop.bind(this));

    },

    // -------------------------
    // Initialize Engine
    // -------------------------

    initialize() {

    console.log("Initializing Engine...");

    initializeLighting();

    createGround();

    createCube();

},

    // -------------------------
    // Main Engine Loop
    // -------------------------

    loop() {

        if (!this.isRunning) {
            return;
        }

        Time.update();

        this.update();

        this.render();

        requestAnimationFrame(this.loop.bind(this));

    },

    // -------------------------
    // Update
    // -------------------------

    update() {

        // Future game logic

    },

    // -------------------------
    // Render
    // -------------------------

    render() {

        renderScene();

    },

    // -------------------------
    // Stop Engine
    // -------------------------

    stop() {

        if (!this.isRunning) {
            console.warn("Engine is not running.");
            return;
        }

        this.isRunning = false;

        console.log("Project NOVA Engine Stopped.");

    }

};
