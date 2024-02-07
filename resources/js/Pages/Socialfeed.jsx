import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Hotline from "@/Layouts/Hotline";
import FramePost from "@/Components/Card/FramePost";

export default function Social(){
    return (
        <>
            <Head title="KU-MUTELU"/>
            <div>
                <NavBar/>
                <Hotline/>
                <div className="px-4">
                    <FramePost/>
                </div>
            </div>
        </>
    )
}