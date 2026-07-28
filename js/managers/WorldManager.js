// worldManager.js
// WorldManager.js
// Project NOVA v0.0.6

import { createGround } from "../world/Ground.js";
import { createCube } from "../entities/Cube.js";

export function initializeWorld() {
    createGround();
    createCube();
}