import React, { useEffect, useMemo, useState } from 'react';
import * as BABYLON from 'babylonjs';
import { Engine } from '@babylonjs/core';
import { GUI3DManager, Button3D, TextBlock, Button, Image, Rectangle, AdvancedDynamicTexture } from '@babylonjs/gui';
import '@babylonjs/loaders';

const PanoramaViewer = ({landmark}) => {

    const panorama =  (landmark.feature.result.panoramaUrl) + '.webp'

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
                    resolution: 32,
                    size: 20
                },
                scene
            );

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
        <div className='relative w-full h-screen'>
            <canvas id="renderCanvas" className='w-full h-full'/>
        </div>
    );
};

export default PanoramaViewer;
