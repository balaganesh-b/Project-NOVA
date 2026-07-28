// camera.js
// Project NOVA v0.0.3

import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";
import { Config } from "../core/config.js";

export const Camera = new THREE.PerspectiveCamera(
    Config.camera.fov,
    window.innerWidth / window.innerHeight,
    Config.camera.near,
    Config.camera.far
);

Camera.position.set(0, 2, 5);

Camera.lookAt(0, 0, 0);