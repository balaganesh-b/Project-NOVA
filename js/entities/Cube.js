// Cube.js
// Project NOVA v0.0.4

import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";

import { Scene } from "../renderer/scene.js";

export function createCube() {

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshStandardMaterial({

        color: 0x4CAF50

    });

    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(0, 0.5, 0);

    cube.castShadow = true;
    cube.receiveShadow = true;

    Scene.add(cube);

    return cube;

}