import React, {useEffect} from 'react';
import * as BABYLON from 'babylonjs';
import {Engine, SceneLoader, ArcRotateCamera, Vector3, PhotoDome, HemisphericLight} from '@babylonjs/core';
import '@babylonjs/loaders';
import {Button3D, GUI3DManager} from "@babylonjs/gui";

const PanoramaViewer = ({landmark}) => {

    const panorama = landmark.feature.result.panoramaUrl + '.webp';

    useEffect(() => {
        const canvas = document.getElementById('renderCanvas');
        const engine = new Engine(canvas, true);

        const createScene = () => {
            const scene = new BABYLON.Scene(engine);
            const camera = new ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
            camera.inputs.attached.mousewheel.detachControl(canvas);

            const sphere = new PhotoDome(
                "sphere",
                panorama,
                {
                    resolution: 100,
                    size: 1000
                },
                scene
            );
            const light = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
            light.intensity = 0.7;

            landmark.feature.properties.bamboos.forEach(bamboo => {
                const button = new Button3D('bamboo');
                SceneLoader.ImportMesh("", "/model3d/", "Bamboo.glb", scene, newMeshes => {
                    const _bamboo = newMeshes[0];
                    _bamboo.position = new Vector3(bamboo.position_x, bamboo.position_y, bamboo.position_z);
                    _bamboo.scaling = new Vector3(0.25, 0.25, 0.25);
                });
            });

            return scene;
        };

        const scene = createScene();

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });

        const resizeWindow = () => {
            engine.resize();
        };

        window.addEventListener('resize', resizeWindow);

        return () => {
            window.removeEventListener('resize', resizeWindow);
            scene.dispose();
        };
    }, [panorama, landmark.feature.properties.bamboos]);

    const showModal = (bamboo) => {
        console.log(bamboo);
    }

    return (
        <canvas id="renderCanvas" className='w-full h-full'/>
    );
};

export default PanoramaViewer;
