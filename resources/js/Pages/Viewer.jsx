import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import PanoramaViewer from "@/Layouts/PanoramaViewer";
import BackButton from "@/Components/BackButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Viewer(){
    return (
        <>
            <Head title="KU-MUTELU"/>
            <div className="h-screen">
                <NavBar/>
                <hr />
                <div>
                    <div className="absolute z-50 grid grid-cols-2 w-full">
                        <div className="w-full m-2 ml-2">
                            <BackButton/>
                        </div>
                        <div className="flex justify-end  w-full max-w-24 mt-2">
                            <p className="my-auto bg-[#005555] text-white text-center rounded-s-full px-12 py-2 font-extrabold">สามบูรพาจารย์</p>
                        </div>
                    </div>
                </div>
                <PanoramaViewer/>
                <div className='flex justify-center sticky bottom-8'>
                    <PrimaryButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
                        </svg>
                        <span>เขียนคำอธิฐาน</span>
                    </PrimaryButton>
                </div>
            </div>
        </>
    )
}  