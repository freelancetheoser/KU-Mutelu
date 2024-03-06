import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Layouts/NavBar";
import Hotline from "@/Layouts/Hotline";
import FramePost from "@/Components/Card/FramePost";
import FloatingActionButton from "@/Components/FloatActionButton";

export default function Social({auth , feedjson, Top10}){
    console.log(feedjson)
    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar auth={auth}/>
            <Hotline Top10={Top10} auth={auth}/>
            <FramePost feedjson={feedjson}/>
            <FloatingActionButton/>
        </>
    )
}
