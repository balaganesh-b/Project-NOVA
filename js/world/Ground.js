// Ground.js
// Project NOVA v0.0.5

import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";

import { Scene } from "../renderer/scene.js";

export function createGround() {

    const geometry = new THREE.PlaneGeometry(100, 100);

    const material = new THREE.MeshStandardMaterial({

        color: 0x808080

    });

    const ground = new THREE.Mesh(geometry, material);

    ground.rotation.x = -Math.PI / 2;

    ground.receiveShadow = true;

    Scene.add(ground);

    return ground;

}