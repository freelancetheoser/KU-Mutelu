import React, { useEffect } from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { ArcRotateCamera, HemisphericLight, MeshBuilder, Texture } from '@babylonjs/core';

const Viewer360 = () => {
  useEffect(() => {
    const canvas = document.getElementById('renderCanvas');

    if (canvas) {
      const engine = new Engine(canvas, true);

      const createScene = () => {
        const scene = new Scene(engine);

        const camera = new ArcRotateCamera('camera', 0, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        const light = new HemisphericLight('light', BABYLON.Vector3.Up(), scene);
        light.intensity = 0.7;

        // สร้าง 360 panorama
        const panoramaTexture = new Texture('/Users/feelone/University/KU_CS/KU-Mutelu/public/test/pano-1.jpeg', scene);
        const panoramaSphere = MeshBuilder.CreateSphere('panorama', { diameter: 10 }, scene);
        panoramaSphere.material = new BABYLON.StandardMaterial('panoramaMaterial', scene);
        panoramaSphere.material.backFaceCulling = false;
        panoramaSphere.material.reflectionTexture = panoramaTexture;
        panoramaSphere.material.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        panoramaSphere.material.disableLighting = true;

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
        scene.dispose();
      };
    }
  }, []);

  return (
    <canvas
      id="renderCanvas"
      style={{ width: '100%', height: '100%', touchAction: 'none' }}
      ref={(canvas) => {
        if (canvas) {
          canvas.style.width = '100%';
          canvas.style.height = '100%';
        }
      }}
    />
  );
};

export default Viewer360;
