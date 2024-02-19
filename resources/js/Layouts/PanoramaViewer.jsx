import React, { useEffect, useMemo, useState } from 'react';
import * as BABYLON from 'babylonjs';
import { Engine } from '@babylonjs/core';
import { GUI3DManager, Button3D, TextBlock, Button, Image, Rectangle, AdvancedDynamicTexture } from '@babylonjs/gui';
import '@babylonjs/loaders';

const images = [];

const geojson = {
    'type': 'LocationCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'name': 'Samphuraphajan',
                'thainame': 'สามบูรพาจารย์',
                'imageurl': './images/locations/sambhuraphajan',
                'panourl': './Location360/Samburapaajan-1.png',
            },
            'geometry': {
                'type': 'Location',
                'coordinates': [100.5730707, 13.8421697],
                'url': '/sambhuraphajan'
            }
        },
    ]
};

geojson.features.forEach(feature => {
    // Get the imageURL from the feature properties
    const imageURL = feature.properties.panourl;
    // Push the imageURL into the images array
    images.push(imageURL);
});

const PanoramaViewer = () => {
    const [imageIndex, setImageIndex] = useState(0);
    useEffect(() => {
        const canvas = document.getElementById('renderCanvas');
        const engine = new Engine(canvas, true);

        const buttonClickedEvent = new CustomEvent('buttonClicked', { detail: true });

        const createScene = () => {
            var scene = new BABYLON.Scene(engine);
            var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
            camera.inputs.attached.mousewheel.detachControl(canvas);

            var dome = new BABYLON.PhotoDome(
                "testdome",
                images[imageIndex],
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
        
    }, [imageIndex]);

    return (
        <div className='relative w-full h-screen'>
            <canvas id="renderCanvas" className='w-full h-full'/>            
        </div>
    );
};

export default PanoramaViewer;
