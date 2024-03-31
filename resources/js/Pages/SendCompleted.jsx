import { useState, useEffect } from 'react';
import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function SendCompleted({ auth }){
    const [showDiv, setShowDiv] = useState(true); // สถานะเริ่มต้นเป็น true เพื่อแสดง <div>

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(false); // ซ่อน <div> หลังจาก 10.5 วินาที
        }, 10500); // 10.5 วินาที = 10500 มิลลิวินาที

        return () => clearTimeout(timer); // คลีนอัพเมื่อคอมโพเนนต์ถูก unmount
    }, []);
    console.log(auth);
    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar auth={auth}/>
            {showDiv && (
                <div>
                    <img src="./images/webp/Daft-1.webp" alt="" />
                </div>
            )}
            <Footer/>
            <FloatingActionButton/>
        </>
    )
}
