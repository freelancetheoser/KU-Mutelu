import React, {useEffect, useMemo, useState} from 'react';
import * as BABYLON from 'babylonjs';
import {Engine, SceneLoader} from '@babylonjs/core';
import '@babylonjs/loaders';


const PanoramaViewer = ({landmark}) => {

    const panorama = (landmark.feature.result.panoramaUrl) + '.webp'

    useEffect(() => {
        const canvas = document.getElementById('renderCanvas');
        const engine = new Engine(canvas, true);

        const buttonClickedEvent = new CustomEvent('buttonClicked', {detail: true});

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

            for (const bamboo of landmark.feature.properties.bamboos) {
                SceneLoader.ImportMesh("", "/model3d/", "Bamboo.glb", scene, function (newMeshes) {
                    var _bamboo = newMeshes[0];

                    _bamboo.position = new BABYLON.Vector3(bamboo.position_x, bamboo.position_y, bamboo.position_z); // ตั้งค่าตำแหน่งของโมเดลตามที่คุณต้องการ
                    _bamboo.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
                });
            }

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

export default PanoramaViewer;
