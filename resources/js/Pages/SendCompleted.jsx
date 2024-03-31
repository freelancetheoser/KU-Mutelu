import { useState, useEffect } from 'react';
import { Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import FloatingActionButton from '@/Components/FloatActionButton';
import PrimaryButton from '@/Components/PrimaryButton';


export default function SendCompleted({ auth }){
    const [showDiv, setShowDiv] = useState(true); // สถานะเริ่มต้นเป็น true เพื่อแสดง <div>

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(false); // ซ่อน <div> หลังจาก 10.5 วินาที
        }, 10300); // 10.5 วินาที = 10500 มิลลิวินาที

        return () => clearTimeout(timer); // คลีนอัพเมื่อคอมโพเนนต์ถูก unmount
    }, []);

    return (
        <>
            <Head title="KU-MUTELU"/>
            <div className='flex flex-col h-screen'>
                <NavBar auth={auth}/>
                {showDiv ? (
                    // เนื้อหาหลัก แสดงเฉพาะเมื่อ showDiv ยังเป็น true
                    <div className='flex-grow overflow-hidden'>
                        <img src="./images/webp/Daft-1.webp" className="w-full h-full object-cover" alt="Content Image" />
                    </div>
                ) : (
                    // แสดงข้อความขอบคุณเมื่อ showDiv เป็น false
                    <div className='flex-grow flex justify-center w-full'>
                        <div className='w-full'>
                            <h1 className="text-center font-bold text-[#005555] text-xl">สักการะสำเร็จ</h1>
                            <div className='flex justify-center'>
                                <img src="./images/thank-you.png" className='w-full max-h-[200px] max-w-[200px]' alt="" />
                            </div>
                            <div className='text-center text-sm text-[#005555] space-y-4'>
                                <p>ขอให้ท่านมีความสุข</p>
                                <p>เงินบริจาคของท่านจะถูกนำไปสมทบ</p>
                                <p>เพื่อสร้างโรงพยาบาลมหาวิทยาลัยเกษตรศาสตร์</p>
                            </div>
                            <div className="flex justify-center mt-20">
                                <PrimaryButton>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                                    </svg>
                                    <span>กลับสู่หน้าหลัก</span>
                                </PrimaryButton>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            <FloatingActionButton/>
        </>
    );
}
