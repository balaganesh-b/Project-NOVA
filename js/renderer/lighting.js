// lighting.js
// Project NOVA v0.0.3

import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";
import { Scene } from "./scene.js";

export function initializeLighting() {

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    Scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    directionalLight.position.set(5, 10, 5);

    Scene.add(directionalLight);

}