import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';

export default function LandmarkInfo({landmark}) {
    const [openModal, setOpenModal] = useState(false);
    console.log(landmark)

    return (
        <>
        <button onClick={() => setOpenModal(true)}
            className='bg-tranpalent'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#FFFFFF" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
            </svg>
        </button>

        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
                <div className='flex item-center space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill my-auto" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <h1 className='font-bold'>{landmark.feature.properties.thainame}</h1>
                </div>
            </Modal.Header>
            <Modal.Body>
            <div className="space-y-4">

                <div>
                    <img src={(landmark.feature.result.imageUrl) + '.webp'} alt="landmarkImage"
                    className='rounded' />
                </div>
                <div id='landmark_detail'>
                    <h3 className='font-bold'>ข้อมูล</h3>
                    <p className="text-base leading-relaxed text-gray-500">
                        {landmark.feature.properties.detail}
                    </p>
                </div>
                <div id='landmark_description'>
                    <h3 className='font-bold'>รายละเอียด</h3>
                    <p className="text-base leading-relaxed text-gray-500">
                        {landmark.feature.properties.description}
                    </p>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </>
  );
}
