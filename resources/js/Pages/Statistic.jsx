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
            <NavBar auth={auth}/>
            <div className="w-screen h-screen">
                <DoughnutChartComponent/>
            </div>
            <FloatingActionButton/>
        </>
    )
}
