// time.js
// Milestone v0.0.2
// time.js
// Milestone v0.0.2

// time.js
// Project NOVA v0.0.2.1

export const Time = {

    startTime: 0,
    currentTime: 0,
    deltaTime: 0,
    elapsedTime: 0,

    start() {

        this.startTime = performance.now();
        this.currentTime = this.startTime;
        this.deltaTime = 0;
        this.elapsedTime = 0;

    },

    update() {

        const now = performance.now();

        this.deltaTime = (now - this.currentTime) / 1000;

        this.currentTime = now;

        this.elapsedTime = (now - this.startTime) / 1000;

    },

    reset() {

        this.start();

    }

};

