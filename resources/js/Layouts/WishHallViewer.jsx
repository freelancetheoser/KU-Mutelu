import React, { useEffect, useMemo, useState } from 'react';
import * as BABYLON from 'babylonjs';
import { Engine , SceneLoader } from '@babylonjs/core';
import { GUI3DManager, Button3D, TextBlock, Button, Image, Rectangle, AdvancedDynamicTexture } from '@babylonjs/gui';
import '@babylonjs/loaders';


const WishHallViewer = () => {

    const panorama =  '/images/landmark/panoramas/wishhall.webp'

    useEffect(() => {
        const canvas = document.getElementById('renderCanvas');
        const engine = new Engine(canvas, true);

        const buttonClickedEvent = new CustomEvent('buttonClicked', { detail: true });

        const createScene = () => {
            var scene = new BABYLON.Scene(engine);
            var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
            camera.inputs.attached.mousewheel.detachControl(canvas);

            var sphere = new BABYLON.PhotoDome(
                "sphere",
                panorama,
                {
                    resolution: 100,
                    size: 1000
                },
                scene
            );


            var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 0.7; // คุณสามารถปรับค่านี้เพื่อเพิ่มหรือลดความสว่าง

            SceneLoader.ImportMesh("", "/model3d/", "Bamboo.glb", scene, function (newMeshes) {
                var bamboo = newMeshes[0];

                bamboo.position = new BABYLON.Vector3(1, -5, 15); // ตั้งค่าตำแหน่งของโมเดลตามที่คุณต้องการ
                bamboo.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
            });

            SceneLoader.ImportMesh("", "/model3d/", "Bamboo.glb", scene, function (newMeshes) {
                var bambooL = newMeshes[0];

                bambooL.position = new BABYLON.Vector3(-5, -5, 20); // ตั้งค่าตำแหน่งของโมเดลตามที่คุณต้องการ
                bambooL.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
            });

            SceneLoader.ImportMesh("", "/model3d/", "Bamboo.glb", scene, function (newMeshes) {
                var bambooR = newMeshes[0];

                bambooR.position = new BABYLON.Vector3(5, -5, 18); // ตั้งค่าตำแหน่งของโมเดลตามที่คุณต้องการ
                bambooR.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
            });

            return scene;
        };

        const scene = createScene();

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });

        window.addEventListener('resize', () => {
            engine.resize();
        });

        return () => {
            window.removeEventListener('resize', () => {
                engine.resize();
            });
            scene.dispose();
        };

    }, [panorama]);

    return (
        <canvas id="renderCanvas" className='w-full h-full'/>
    );
};

export default WishHallViewer;