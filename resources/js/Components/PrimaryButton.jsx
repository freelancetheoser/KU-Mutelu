import { Link } from "@inertiajs/react";
import React, { useState } from 'react';


export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const Modal = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;
    
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white w-2/4 h-4/6 z-50 p-4 rounded">
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex justify-end">
                            <span className="text-2xl text-[#005555] font-bold">คำแนะนำ</span>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-red-500 hover:text-white hover:bg-red-500 rounded-full" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        );
    };
    
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    


    return (
        <div className="flex justify-center w-full">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-[#005555] mt-4">อนุสาวรีย์ท่านผู้บุกเบิก วางรากฐานการเกษตรและการศึกษา
                ด้านการเกษตรของประเทศไทยและผู้ก่อตั้งมหาวิทยาลัยเกษตร
                ศาสตร์ ซึ่งประกอบด้วย หลวงสุวรรณวาจกกสิกิจ (สุวรรณ 
                (ทองดี) เรศานนท์) พระช่วงเกษตรศิลปการ (ช่วง โลจายะ) และ
                ศาสตราจารย์ (พิเศษ) อินทรี จันทรสถิตย์ (หลวงอิงคศรีกสิการ)

                    และเป็นที่กล่าวขาน สำหรับการแก้บนที่อนุสาวรีย์ฯ นั่นก็คือ
                การนั่งเล่นหมากรุก หมากฮอสตอนเที่ยงคืน แต่หลายคนบอกว่า
                ก็ไม่เคยเห็นมีคนทำ อย่างมากก็ มาสักการะบูชากันตอน
                กลางคืน หรือเป็นถวายน้ำแดง ม้าลาย ไก่ชน พวงมาลัย และ
                ธูปเทียนของไหว้ต่างๆ ตามปกติ</p>
            </Modal>
            <div className="flex space-x-4  absolute bottom-10">
                <button onClick={handleOpenModal} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#FFFFFF" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                    </svg>
                </button>
                <Link as="button" href={route('prayer')} 
                    {...props}
                    className={
                        ` flex justify-center space-x-2 text-white bg-gradient-to-r from-[#005555] to-[#069A8E] hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center ${
                            disabled && 'opacity-25'
                        } ` + className
                    }
                    disabled={disabled}
                >
                    {children}
                </Link>
            </div>
        </div>
    );
}
