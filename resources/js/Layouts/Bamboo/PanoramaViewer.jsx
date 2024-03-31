import React, {useEffect, useState} from 'react';
import * as BABYLON from 'babylonjs';
import { Engine, SceneLoader, ArcRotateCamera, Vector3, PhotoDome, HemisphericLight } from '@babylonjs/core';
import '@babylonjs/loaders';
import WishModal from "@/Components/Modal/WishModal.jsx";
import BambooWishPreview from '@/Components/Modal/BambooWishPreview';

const PanoramaViewer = ({landmark}) => {
    const panorama = landmark.feature.result.panoramaUrl + '.webp';
    const [openModal, setOpenModal] = useState(false);
    const [wishModalData, setWishModalData] = useState("");

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
                SceneLoader.ImportMesh("", "/model3d/", "Bamboo.glb", scene, (newMeshes) => {
                    const mesh = newMeshes[0];
                    mesh.position.set(bamboo.position_x, bamboo.position_y, bamboo.position_z);
                    mesh.scaling.set(0.25, 0.25, 0.25);

                    // เพิ่ม Action Manager ให้กับ Mesh
                    mesh.actionManager = new BABYLON.ActionManager(scene);
                    mesh.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function() {
                            // อัปเดท state เพื่อเปิด BambooWishPreview พร้อมข้อมูลของ bamboo ที่คลิก
                            setWishModalData(bamboo.wishes);
                            setOpenModal(true);
                        })
                    );
                    console.log(bamboo.wishes);
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

    return (<div style={{width: '100%', height: '100vh', position: 'relative'}}>
        <canvas id="renderCanvas" style={{width: '100%', height: '100%', opacity: '1'}}/>
        <BambooWishPreview
            wishModalData={wishModalData} // ตรวจสอบว่าข้อมูลนี้ถูกอัพเดทอย่างถูกต้องเมื่อมีการคลิกที่ bamboo
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
    </div>);
};
export default PanoramaViewer;
