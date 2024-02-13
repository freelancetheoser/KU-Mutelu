import { Link } from "@inertiajs/react";
import React, { useState } from 'react';
import NavBar from "@/Layouts/NavBar";

export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPrayerOpen, setIsPrayerOpen] = useState(false);

    const Modal = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;
    
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white w-2/4 pb-12 z-50 p-4 rounded">
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex justify-end">
                            <span className="text-2xl text-[#005555] font-bold">คำแนะนำ</span>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-red-500 hover:text-white hover:bg-red-500 rounded-full" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
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

    const Prayer = ({ prayerisOpen, prayeronClose, children }) => {
        if (!prayerisOpen) return null;
    
        return (
            <div className="fixed z-50 inset-0 bg-white bg-opacity-90 ">
                <NavBar/>
                <div className="flex justify-end w-full">
                    <button className="text-white bg-[#005555] m-2 rounded-full p-2" onClick={prayeronClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </button>
                </div>
                <div className=" w-full">
                    <div className="flex justify-center w-full h-screen">
                        <div className="flex justify-center w-40 h-4/6 bg-gradient-to-r from-[#005555] to-[#069A8E] z-50 p-8">
                            <div className="space-y-8 h-3/4">
                                <div className="flex justify-center">
                                    <div className="bg-white rounded-full w-1/6 p-4"></div>
                                </div>
                                <div className="flex justify-center item-center h-full">
                                    <Link as="button" href="/prayer" className="space-y-4">
                                        <div className="flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#FFFFFF" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"/>
                                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                            </svg>
                                        </div>
                                        <p className="text-white text-center font-bold">คลิกที่นี่ <br />เพื่อเริ่มโพสต์</p>
                                    </Link>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-8 flex justify-center w-full">
                        <div className="grid grid-cols-1 space-y-2">
                            <button>รูปแบบของคำอธิฐาน</button>
                            <button className="flex justify-center space-x-2 my-auto text-white bg-gradient-to-r from-[#005555] to-[#069A8E] hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-paper" viewBox="0 0 16 16">
                                    <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                                </svg>
                                <span>อธิษฐาน</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
    
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleOpenPrayer = () => {
        setIsPrayerOpen(true);
    };

    return (
        <div className="flex justify-center w-full">
            <div className="flex space-x-4  absolute bottom-10">
                <button onClick={handleOpenModal} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#FFFFFF" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                    </svg>
                </button>
                <button onClick={handleOpenPrayer}
                    {...props}
                    className={
                        ` flex justify-center space-x-2 text-white bg-gradient-to-r from-[#005555] to-[#069A8E] hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-md px-5 py-2.5 text-center ${
                            disabled && 'opacity-25'
                        } ` + className
                    }
                    disabled={disabled}
                >
                    {children}
                </button>
            </div>
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

            <Prayer prayerisOpen={isPrayerOpen} prayeronClose={() => setIsPrayerOpen(false)}>
                    <div>

                    </div>
            </Prayer>
        </div>
    );
}
