import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Hotline from "@/Layouts/Hotline";
import FramePost from "@/Components/Card/FramePost";
import FloatingActionButton from "@/Components/FloatActionButton";
import DoughnutChartComponent from "@/Components/Chart";

export default function Social({auth , feedjson, Top10}){
    console.log(feedjson)
    return (
        <>
            <Head title="KU-MUTELU"/>
            <div className="w-screen h-screen">
                <NavBar auth={auth}/>
                <div className="flex justify-center">
                    <div className="w-2/4">
                        <DoughnutChartComponent/>
                    </div>
                </div>
            </div>
            <FloatingActionButton/>
        </>
    )
}
