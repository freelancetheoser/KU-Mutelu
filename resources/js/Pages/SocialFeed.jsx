import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Hotline from "@/Layouts/Hotline";
import FramePost from "@/Components/Card/FramePost";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Social({auth , feedjson}){
    console.log(feedjson);
    return (
        <>
            <Head title="KU-MUTELU"/>
            <div className="lg:mt-16 xl:mt-16">
                <NavBar auth={auth}/>
                <Hotline/>
                <div className="flex flex-1 justify-center px-4 w-full ">
                    <FramePost/>
                </div>
                <FloatingActionButton/>
            </div>
        </>
    )
}
