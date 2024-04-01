import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function BambooWishPreview({wishModalData}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
        <button onClick={() => setOpenModal(true)}
            className='flex justify-center items-center my-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#FFFFFF" class="bi bi-r-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002V12h1.335V8.924H8.52L9.98 12h1.52L9.856 8.701c.828-.299 1.495-1.101 1.495-2.238 0-1.488-1.03-2.461-2.74-2.461zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z"/>
            </svg>
        </button>

        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
                <div className='flex item-center space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill my-auto" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <h1 className='font-bold'>คำอธิษฐานล่าสุด</h1>
                </div>
            </Modal.Header>
            <Modal.Body>
                
                <div className="space-y-4">
                    <div id='landmark_detail'>
                        <h3 className='font-bold'>ข้อมูล</h3>
                        <p className="text-base leading-relaxed text-gray-500">
                                {wishModalData.content}
                        </p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
  );
}
