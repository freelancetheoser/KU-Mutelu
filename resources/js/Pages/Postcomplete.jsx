import { Link } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import PaperShow from "@/Components/PaperShow";
import PostContent from "@/Components/PostContent";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Postcomplete() {
    return(
        <div className="">
            <NavBar/>
            <div>
                <img src="./Content/Complete.png" alt="" />
            </div>
            <div className="mb-32">
                <div className="flex justify-center w-full">
                    <span className="text-2xl font-extrabold text-[#005555]">คำอธิษฐานถูกส่งแล้ว</span>
                </div>
                <div className="flex justify-center mt-4">
                    <p>ขอให้สมหวังตามที่ปรารถนา</p>
                </div>
            </div>
            <div className="flex justify-center">
                <Link as="button" href="/postcomplete" className="flex my-auto text-white bg-gradient-to-r from-[#005555] to-[#069A8E] px-8 py-2 space-x-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-house-door my-auto" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                    </svg>
                    <span>กลับสู่หน้าหลัก</span>
                </Link>
            </div>
            <FloatingActionButton/>
        </div>
    )
}