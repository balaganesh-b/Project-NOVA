// renderer.js
// Project NOVA v0.0.3

import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";

import { Config } from "../core/config.js";
import { Scene } from "./scene.js";
import { Camera } from "./camera.js";

export const Renderer = new THREE.WebGLRenderer({

    antialias: Config.renderer.antialias

});

Renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(Renderer.domElement);

window.addEventListener("resize", () => {

    Camera.aspect = window.innerWidth / window.innerHeight;
    Camera.updateProjectionMatrix();

    Renderer.setSize(window.innerWidth, window.innerHeight);

});

export function render() {

    Renderer.render(Scene, Camera);

}
